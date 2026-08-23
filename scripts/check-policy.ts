/**
 * Checks party policy specs against the pages they model.
 *
 * Gurki lint proves a spec is well-formed. This proves it is faithful: the
 * page exists, has not changed underneath the spec, and every figure in a
 * step is actually on the source page or another dump page listed in `sources`.
 *
 *   pnpm check:policy                  # NZ and SE
 *   pnpm check:policy --event se-election-2026
 *   pnpm check:policy --party green
 *   pnpm check:policy --fix            # fill sourceDigest
 *   pnpm check:policy --complete       # unmodelled flagship/intervention pages
 */

import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'
import { parseFile, type GurkiDocument } from 'gurki'
import { EVENT_IDS } from '../src/event/events.ts'
import { extrapolatedLines, findMarkerProblems } from './extrapolated.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const MONEY_VALUES = ['named-figure', 'no-figure']
const PROSE_COVERAGE_FLOOR = 0.5
const BOILERPLATE_LIMIT = 3

type Options = { events: string[]; party?: string; fix: boolean; complete: boolean }

let CORPUS_DIR = join(REPO_ROOT, 'corpus/nz-election-2026')
let CLUSTERS_FILE = join(CORPUS_DIR, 'clusters.yaml')

export type Problem = {
  level: 'error' | 'warning'
  code: string
  message: string
  path: string
  line?: number
}

type DumpPage = {
  party: string
  slug: string
  absolutePath: string
  repoPath: string
  stance: string
  money: string
  tags: string[]
  sourceUrl: string
  body: string
}

type SpecKind = 'stated' | 'derived'

export type SpecFile = {
  party: string
  slug: string
  kind: SpecKind
  lang: string | null
  absolutePath: string
  repoPath: string
  raw: string
  document: GurkiDocument
}

type Scenario = GurkiDocument['scenarios'][number]

function parseArgs(argv: string[]): Options {
  let party: string | undefined
  let events: string[] | undefined
  let fix = false
  let complete = false

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--fix') {
      fix = true
      continue
    }
    if (arg === '--complete') {
      complete = true
      continue
    }
    if (arg === '--event') {
      events = [argv[index + 1] ?? EVENT_IDS[0]]
      index += 1
      continue
    }
    if (arg === '--party') {
      party = argv[index + 1]
      index += 1
      continue
    }
    if (arg?.startsWith('--party=')) {
      party = arg.slice('--party='.length)
    }
  }

  return { events: events ?? [...EVENT_IDS], party, fix, complete }
}

/** Cluster ids a spec may claim. Closed set, from clusters.yaml. */
function loadClusterIds(): Set<string> {
  const parsed = YAML.parse(readFileSync(CLUSTERS_FILE, 'utf8')) as {
    clusters?: { id?: string }[]
  }
  const ids = (parsed.clusters ?? [])
    .map((cluster) => cluster.id)
    .filter((id): id is string => typeof id === 'string')

  if (ids.length === 0) {
    throw new Error(`No cluster ids found in ${relative(REPO_ROOT, CLUSTERS_FILE)}`)
  }

  return new Set(ids)
}

/** Party ids are the corpus directories, so the two trees cannot drift apart. */
function listParties(party?: string): string[] {
  const parties = readdirSync(CORPUS_DIR)
    .filter((name) => !name.startsWith('_'))
    .filter((name) => statSync(join(CORPUS_DIR, name)).isDirectory())
    .sort()

  if (!party) {
    return parties
  }
  if (!parties.includes(party)) {
    return []
  }
  return [party]
}

function readFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) {
    return {}
  }
  return (YAML.parse(match[1]) ?? {}) as Record<string, unknown>
}

export function bodyAfterFrontmatter(raw: string): string {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/)
  return match ? raw.slice(match[0].length) : raw
}

function loadDumpPages(parties: string[]): DumpPage[] {
  const pages: DumpPage[] = []

  for (const party of parties) {
    const directory = join(CORPUS_DIR, party)
    const files = readdirSync(directory).filter(
      (name) => name.endsWith('.md') && !name.endsWith('.spec.md')
    )

    for (const file of files) {
      const absolutePath = join(directory, file)
      const raw = readFileSync(absolutePath, 'utf8')
      const frontmatter = readFrontmatter(raw)
      pages.push({
        party,
        slug: basename(file, '.md'),
        absolutePath,
        repoPath: relative(REPO_ROOT, absolutePath),
        stance: String(frontmatter.stance ?? ''),
        money: String(frontmatter.money ?? ''),
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.map(String) : [],
        sourceUrl: String(frontmatter.sourceUrl ?? ''),
        body: bodyAfterFrontmatter(raw)
      })
    }
  }

  return pages
}

function loadSpecFiles(parties: string[]): { specs: SpecFile[]; problems: Problem[] } {
  const specs: SpecFile[] = []
  const problems: Problem[] = []

  for (const party of parties) {
    const directory = join(CORPUS_DIR, party)
    if (!existsSync(directory)) {
      continue
    }

    const files = readdirSync(directory)
      .filter((name) => name.endsWith('.spec.md'))
      .sort()

    for (const file of files) {
      const absolutePath = join(directory, file)
      const repoPath = relative(REPO_ROOT, absolutePath)
      const result = parseFile(absolutePath)

      if (!result.document) {
        problems.push({
          level: 'error',
          code: 'unparseable_spec',
          message: 'Spec could not be parsed. Run pnpm gurki lint on it.',
          path: repoPath
        })
        continue
      }

      const name = basename(file, '.spec.md')
      const parts = name.split('.')
      let kind: SpecKind = 'stated'
      let slugParts = parts
      if (parts.at(-1) === 'derived') {
        kind = 'derived'
        slugParts = parts.slice(0, -1)
      }
      let lang: string | null = null
      if (['en', 'sv', 'mi'].includes(slugParts.at(-1) ?? '') && slugParts.length > 1) {
        lang = slugParts.at(-1) ?? null
        slugParts = slugParts.slice(0, -1)
      }

      specs.push({
        party,
        slug: slugParts.join('.'),
        kind,
        lang,
        absolutePath,
        repoPath,
        raw: readFileSync(absolutePath, 'utf8'),
        document: result.document
      })
    }
  }

  return { specs, problems }
}

export function digestOf(text: string): string {
  return `sha256-${createHash('sha256').update(text).digest('hex').slice(0, 16)}`
}

/** The id a spec must carry, derived so it can never be argued about. */
export function expectedId(party: string, slug: string, kind: SpecKind = 'stated'): string {
  const normalised = slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  const suffix = kind === 'derived' ? '-derived' : ''
  return `${party}-${normalised}${suffix}`
}

/**
 * Numbers as a reader would see them: 28, 1,500, 3.46, 0.06.
 * Words like "nine" are not checked; the digits alongside them are.
 */
export function extractNumbers(text: string): string[] {
  const matches = text.match(/\d[\d,]*(?:\.\d+)?/g) ?? []
  return matches.map(normaliseNumber).filter((value) => value.length > 0)
}

function normaliseNumber(value: string): string {
  return value.replace(/,/g, '').replace(/\.0+$/, '').replace(/^0+(?=\d)/, '')
}

/** Page text with thousands separators removed, so 1,500 matches 1500. */
export function normaliseHaystack(text: string): string {
  return text.replace(/(\d),(?=\d{3}\b)/g, '$1')
}

/** 28 must not be satisfied by 280 or by 1.28. */
export function hasNumber(haystack: string, value: string): boolean {
  return new RegExp(`(?<![\\d.])${escapeRegExp(value)}(?![\\d])`).test(haystack)
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function sourceUrlsOf(document: GurkiDocument): string[] {
  return (document.frontmatter?.sources ?? [])
    .map((source) => (typeof source === 'string' ? source : (source.url ?? '')))
    .filter((url) => url.length > 0)
}

/** Keeper page plus any other dump pages whose URL is listed in `sources`. */
export function combinedSourceBody(keeperBody: string, extraBodies: string[]): string {
  return [keeperBody, ...extraBodies.filter((body) => body.length > 0)].join('\n\n')
}

const MARKUP_MARKERS = ['<!DOCTYPE', '<html', '<meta ', '<script', '<link ', 'sv-no-js']

export function findMarkupInSpec(raw: string): string[] {
  return MARKUP_MARKERS.filter((marker) => raw.includes(marker))
}

function collapseWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

export function normaliseProse(text: string): string {
  return collapseWhitespace(
    text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]+/g, '')
      .replace(/^>\s?/, ''),
  )
}

const FRAME_PROSE = [
  'the 2026 swedish general election is contested',
  'a swedish general election is contested',
  'the 2026 new zealand general election is contested',
  'the party publishes this policy',
]

export function isFrameProse(text: string): boolean {
  const normalised = normaliseProse(text).toLowerCase()
  return FRAME_PROSE.some((frame) => normalised === frame || normalised.includes(frame))
}

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'of', 'to', 'in', 'on', 'for', 'from',
  'with', 'as', 'at', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'this',
  'that', 'these', 'those', 'it', 'its', 'their', 'they', 'them', 'we', 'our', 'you',
  'your', 'not', 'no', 'nor', 'so', 'than', 'then', 'there', 'here', 'when', 'which',
  'who', 'what', 'into', 'over', 'under', 'about', 'after', 'before', 'between',
  'through', 'also', 'only', 'just', 'more', 'most', 'other', 'some', 'such', 'both',
  'each', 'few', 'many', 'can', 'will', 'would', 'should', 'could', 'may', 'must',
  'do', 'does', 'did', 'have', 'has', 'had', 'en', 'ett', 'och', 'eller', 'men', 'om',
  'av', 'till', 'i', 'på', 'för', 'från', 'med', 'som', 'är', 'var', 'vara', 'varit',
  'den', 'det', 'de', 'denna', 'detta', 'dessa', 'sin', 'sitt', 'sina', 'vi', 'vår',
  'vårt', 'ni', 'er', 'inte', 'ej', 'så', 'än', 'då', 'när', 'där', 'här', 'vilken',
  'vilket', 'vilka', 'vem', 'vad', 'ut', 'över', 'under', 'efter', 'före', 'mellan',
  'genom', 'utan', 'inom', 'också', 'bara', 'mer', 'mest', 'annan', 'andra', 'några',
  'kan', 'ska', 'skulle', 'måste', 'får', 'ha', 'har', 'hade', 'bli', 'blir', 'blev',
  'man',
])

export function contentWords(text: string): string[] {
  return normaliseProse(text)
    .toLowerCase()
    .replace(/[^a-zà-öø-ÿ]+/gi, ' ')
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !STOPWORDS.has(word))
}

function wordsMatch(left: string, right: string): boolean {
  const shorter = left.length <= right.length ? left : right
  const longer = left.length <= right.length ? right : left
  if (shorter.length >= 4 && longer.startsWith(shorter)) {
    return true
  }
  if (shorter.length >= 5 && longer.slice(0, 5) === shorter.slice(0, 5)) {
    return true
  }
  return left === right
}

/** Share of step content-words that also appear on the page (inflected/compound-aware). */
export function proseCoverage(step: string, page: string): number {
  const needles = contentWords(step)
  if (needles.length === 0) {
    return 1
  }
  const haystack = contentWords(page)
  let matched = 0
  for (const needle of needles) {
    if (haystack.some((word) => wordsMatch(needle, word))) {
      matched += 1
    }
  }
  return matched / needles.length
}

export function quotedLinesOf(raw: string): string[] {
  return bodyAfterFrontmatter(raw)
    .split(/\r?\n/)
    .filter((line) => line.trimStart().startsWith('>'))
    .map((line) => line.trimStart().replace(/^>\s?/, '').trim())
    .filter((line) => line.length > 0)
}

export type UnsourcedProse = { line?: number; text: string }

/**
 * Blockquotes and stated Given/When/Then/Output must be grounded in the page.
 * Paraphrase is allowed when enough content-words overlap; invented claims are not.
 */
export function findUnsourcedProse(
  document: GurkiDocument,
  raw: string,
  pageBody: string,
): UnsourcedProse[] {
  const found: UnsourcedProse[] = []

  for (const quoted of quotedLinesOf(raw)) {
    if (normaliseProse(quoted).length < 12) {
      continue
    }
    if (proseCoverage(quoted, pageBody) < PROSE_COVERAGE_FLOOR) {
      found.push({ text: quoted.slice(0, 120) })
    }
  }

  for (const scenario of document.scenarios) {
    for (const step of scenario.steps) {
      if (!['given', 'then', 'output'].includes(step.kind)) {
        continue
      }
      if (isFrameProse(step.text)) {
        continue
      }
      if (normaliseProse(step.text).length < 12) {
        continue
      }
      if (proseCoverage(step.text, pageBody) < PROSE_COVERAGE_FLOOR) {
        found.push({ line: step.line, text: step.text.slice(0, 120) })
      }
    }
  }

  return found
}

function stepTextsOf(document: GurkiDocument): string[] {
  const texts: string[] = []
  for (const scenario of document.scenarios) {
    for (const step of scenario.steps) {
      if (!['given', 'when', 'then', 'output', 'outcome'].includes(step.kind)) {
        continue
      }
      const normalised = normaliseProse(step.text).toLowerCase()
      if (normalised.length < 12) {
        continue
      }
      texts.push(`${step.kind}:${normalised}`)
    }
  }
  return texts
}

function gapsKeyOf(document: GurkiDocument): string | undefined {
  const extensions = (document.frontmatter?.extensions ?? {}) as Record<string, unknown>
  if (!Array.isArray(extensions.gaps)) {
    return undefined
  }
  const gaps = extensions.gaps.map(String).map((gap) => normaliseProse(gap).toLowerCase()).sort()
  if (gaps.length === 0) {
    return undefined
  }
  return `gaps:${gaps.join('|')}`
}

/** Identical modelling lines across too many specs mean the tree was templated, not authored. */
export function findBoilerplate(specs: SpecFile[]): Problem[] {
  const buckets = new Map<string, string[]>()
  const add = (key: string, path: string) => {
    const paths = buckets.get(key) ?? []
    paths.push(path)
    buckets.set(key, paths)
  }

  for (const spec of specs) {
    if (spec.lang) {
      continue
    }
    for (const text of stepTextsOf(spec.document)) {
      add(text, spec.repoPath)
    }
    const gaps = gapsKeyOf(spec.document)
    if (gaps) {
      add(gaps, spec.repoPath)
    }
  }

  const problems: Problem[] = []
  for (const [key, paths] of buckets) {
    const unique = [...new Set(paths)]
    if (unique.length <= BOILERPLATE_LIMIT) {
      continue
    }
    const preview = key.slice(0, 80)
    for (const path of unique) {
      problems.push({
        level: 'error',
        code: 'boilerplate_line',
        message: `This line is identical in ${unique.length} specs: "${preview}"`,
        path
      })
    }
  }
  return problems
}

export type UnsourcedFigure = { line: number; value: string }

/**
 * Figures in any step that are not on the page. This is the check that makes a
 * tree of LLM-authored specs trustworthy.
 *
 * A stated spec has no escape hatch: if the page does not print the number, it
 * does not belong there. A derived spec may mark a step whose figure is
 * arithmetic from the page.
 */
export function findUnsourcedFigures(
  document: GurkiDocument,
  pageBody: string,
  options: { allowMarkers?: boolean } = {}
): UnsourcedFigure[] {
  const haystack = normaliseHaystack(pageBody)
  const found: UnsourcedFigure[] = []

  for (const scenario of document.scenarios) {
    const marked = options.allowMarkers ? extrapolatedLines(scenario) : new Map<number, string>()

    for (const step of scenario.steps) {
      if (marked.has(step.line)) {
        continue
      }
      for (const value of extractNumbers(step.text)) {
        if (!hasNumber(haystack, value)) {
          found.push({ line: step.line, value })
        }
      }
    }
  }

  return found
}

const MONEY_OR_PERCENT = /\$|%|\bpercent\b|\bper cent\b|\bpercentage\b/i

export type MisplacedMeasure = { line: number; kind: string }

/**
 * Dollar amounts and percentages are measurable. On a stated spec they belong
 * in Given (the page's own current-state claim) or Output (the intervention).
 * When / Then / Outcome stay qualitative.
 */
export function findMisplacedMeasures(document: GurkiDocument): MisplacedMeasure[] {
  const found: MisplacedMeasure[] = []
  for (const scenario of document.scenarios) {
    for (const step of scenario.steps) {
      if (step.kind !== 'when' && step.kind !== 'then' && step.kind !== 'outcome') {
        continue
      }
      if (MONEY_OR_PERCENT.test(step.text)) {
        found.push({ line: step.line, kind: step.kind })
      }
    }
  }
  return found
}

/** Markers are a derived-spec device. A stated spec carries no inference at all. */
export function findMarkersInStatedSpec(document: GurkiDocument): number[] {
  const lines: number[] = []
  for (const scenario of document.scenarios) {
    for (const stepLine of extrapolatedLines(scenario).keys()) {
      lines.push(stepLine - 1)
    }
  }
  return lines
}

function checkFrontmatter(
  spec: SpecFile,
  page: DumpPage | undefined,
  clusterIds: Set<string>,
  statedIds: Set<string>
): Problem[] {
  const problems: Problem[] = []
  const frontmatter = spec.document.frontmatter
  const extensions = (frontmatter?.extensions ?? {}) as Record<string, unknown>
  const fail = (code: string, message: string) =>
    problems.push({ level: 'error', code, message, path: spec.repoPath })

  const wantedId = expectedId(spec.party, spec.slug, spec.kind)
  if (frontmatter?.id !== wantedId) {
    fail('id_mismatch', `id should be "${wantedId}", found "${frontmatter?.id ?? ''}"`)
  }

  const title = frontmatter?.title ?? ''
  if (
    /^(?:ACT|National|Labour|Greens?|NZ First|New Zealand First|Te Pāti Māori|Te Pati Maori|Socialdemokraterna|Moderaterna|Sverigedemokraterna|Kristdemokraterna|Centerpartiet|Liberalerna|Miljöpartiet|Vänsterpartiet)(?:'s)?\s*:/i.test(
      title
    )
  ) {
    fail(
      'party_in_title',
      'title should say what the policy does, with no party name — the party field already carries that'
    )
  }

  if (extensions.party !== spec.party) {
    fail('party_mismatch', `party should be "${spec.party}", found "${String(extensions.party ?? '')}"`)
  }

  const clusters = Array.isArray(extensions.clusters) ? extensions.clusters.map(String) : []
  if (clusters.length === 0) {
    fail('clusters_missing', 'clusters must name one primary id from clusters.yaml')
  } else if (clusters.length > 1) {
    fail('clusters_multiple', 'clusters must contain exactly one primary id from clusters.yaml')
  }
  for (const cluster of clusters) {
    if (!clusterIds.has(cluster)) {
      fail('unknown_cluster', `cluster "${cluster}" is not in clusters.yaml`)
    }
  }

  if (spec.kind === 'stated') {
    if (!Array.isArray(extensions.gaps)) {
      fail('gaps_missing', 'a stated spec needs a gaps list, even when empty')
    }
    if (extensions.assumptions !== undefined) {
      fail('assumptions_on_stated_spec', 'assumptions belong on the derived spec, not the stated one')
    }
    if (extensions.derivesFrom !== undefined) {
      fail('derives_from_on_stated_spec', 'derivesFrom belongs on the derived spec only')
    }
  } else {
    const assumptions = Array.isArray(extensions.assumptions) ? extensions.assumptions : []
    if (assumptions.length === 0) {
      fail(
        'assumptions_missing',
        'a derived spec must list the reasoning it supplied that the page does not'
      )
    }
    if (extensions.gaps !== undefined) {
      fail('gaps_on_derived_spec', 'gaps belong on the stated spec, which is where the page is described')
    }
    const derivesFrom = String(extensions.derivesFrom ?? '')
    const wantedStatedId = expectedId(spec.party, spec.slug, 'stated')
    if (derivesFrom !== wantedStatedId) {
      fail('derives_from_mismatch', `derivesFrom should be "${wantedStatedId}", found "${derivesFrom}"`)
    }
    if (!statedIds.has(wantedStatedId)) {
      fail('stated_spec_missing', `no stated spec ${spec.slug}.spec.md for this derived spec to read`)
    }
  }

  const sourcePath = typeof extensions.sourcePath === 'string' ? extensions.sourcePath : ''
  if (!sourcePath) {
    fail('source_path_missing', 'sourcePath must point at the dump page this spec models')
    return problems
  }
  if (!page) {
    fail('source_path_unknown', `sourcePath "${sourcePath}" is not a dump page in this corpus`)
    return problems
  }
  if (basename(sourcePath, '.md') !== spec.slug) {
    fail(
      'slug_mismatch',
      `spec filename should match its source page: expected ${spec.slug}.md, sourcePath is ${basename(sourcePath)}`
    )
  }
  if (page.stance !== 'intervention') {
    fail('not_an_intervention', `source page is stance: ${page.stance || 'unset'}, so it should not be modelled`)
  }
  if (extensions.money !== page.money) {
    fail('money_mismatch', `money should be copied from the page: "${page.money}"`)
  }

  const specTags = [...(frontmatter?.tags ?? [])].sort().join(',')
  const pageTags = [...page.tags].sort().join(',')
  if (specTags !== pageTags) {
    fail('tags_mismatch', `tags should be copied from the page: [${page.tags.join(', ')}]`)
  }

  const urls = (frontmatter?.sources ?? []).map((source) =>
    typeof source === 'string' ? source : (source.url ?? '')
  )
  if (page.sourceUrl && !urls.includes(page.sourceUrl)) {
    fail('source_url_missing', `sources should include the page url ${page.sourceUrl}`)
  }

  if (!MONEY_VALUES.includes(String(extensions.money))) {
    fail('money_invalid', `money must be one of ${MONEY_VALUES.join(' | ')}`)
  }

  return problems
}

function checkDigest(spec: SpecFile, page: DumpPage, fix: boolean): Problem[] {
  const extensions = (spec.document.frontmatter?.extensions ?? {}) as Record<string, unknown>
  const recorded = typeof extensions.sourceDigest === 'string' ? extensions.sourceDigest : ''
  const actual = digestOf(page.body)

  if (recorded === actual) {
    return []
  }

  if (fix) {
    writeDigest(spec, actual)
    return []
  }

  if (!recorded) {
    return [
      {
        level: 'error',
        code: 'digest_missing',
        message: 'sourceDigest is empty. Run pnpm check:policy --fix',
        path: spec.repoPath
      }
    ]
  }

  return [
    {
      level: 'error',
      code: 'digest_stale',
      message:
        'The dump page changed after this spec was written. Re-read the page, then pnpm check:policy --fix',
      path: spec.repoPath
    }
  ]
}

function writeDigest(spec: SpecFile, digest: string): void {
  const match = spec.raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) {
    return
  }

  const frontmatter = match[1]
  const updated = /^sourceDigest:.*$/m.test(frontmatter)
    ? frontmatter.replace(/^sourceDigest:.*$/m, `sourceDigest: "${digest}"`)
    : `${frontmatter}\nsourceDigest: "${digest}"`

  writeFileSync(spec.absolutePath, spec.raw.replace(frontmatter, updated), 'utf8')
}

const MARKER_MESSAGES: Record<string, string> = {
  orphan_extrapolated_marker:
    'An "# extrapolated:" comment must sit on the line directly above the step it marks',
  extrapolated_without_reason: 'Say why the step is inferred: "# extrapolated: <reason>"'
}

function extraBodiesForSpec(spec: SpecFile, pages: DumpPage[], keeper: DumpPage): string[] {
  const urls = new Set(sourceUrlsOf(spec.document))
  return pages
    .filter((page) => page.repoPath !== keeper.repoPath && urls.has(page.sourceUrl))
    .map((page) => page.body)
}

/** Every figure must be on a sourced dump page. Only a derived spec may mark an exception. */
function checkFigures(spec: SpecFile, page: DumpPage, pages: DumpPage[]): Problem[] {
  const problems: Problem[] = findMarkerProblems(spec.document).map((problem) => ({
    level: 'warning' as const,
    code: problem.code,
    message: MARKER_MESSAGES[problem.code],
    path: spec.repoPath,
    line: problem.line
  }))

  if (spec.kind === 'stated') {
    for (const line of findMarkersInStatedSpec(spec.document)) {
      problems.push({
        level: 'error',
        code: 'marker_in_stated_spec',
        message:
          'A stated spec carries only what the page says. Move this step and its reasoning to the derived spec.',
        path: spec.repoPath,
        line
      })
    }
  }

  const remedy =
    spec.kind === 'stated'
      ? 'A stated spec may only use figures the page prints. Move it to gaps, or to the derived spec.'
      : 'Mark the step "# extrapolated: <reason>" and add it to assumptions, or drop the figure.'

  const haystack = combinedSourceBody(page.body, extraBodiesForSpec(spec, pages, page))
  for (const figure of findUnsourcedFigures(spec.document, haystack, {
    allowMarkers: spec.kind === 'derived'
  })) {
    problems.push({
      level: spec.document.frontmatter?.status === 'draft' ? 'warning' : 'error',
      code: 'unsourced_figure',
      message: `Figure "${figure.value}" is not on ${page.repoPath} or its other sourced dump pages. ${remedy}`,
      path: spec.repoPath,
      line: figure.line
    })
  }

  if (spec.kind === 'stated') {
    for (const measure of findMisplacedMeasures(spec.document)) {
      problems.push({
        level: 'error',
        code: 'measure_in_wrong_step',
        message:
          'Dollar amounts and percentages are measurable. Put the page\'s current-state figure in Given and the proposed figure in Output.',
        path: spec.repoPath,
        line: measure.line
      })
    }
  }

  return problems
}

function checkFaithfulness(spec: SpecFile, page: DumpPage, pages: DumpPage[]): Problem[] {
  const problems: Problem[] = []

  for (const marker of findMarkupInSpec(spec.raw)) {
    problems.push({
      level: 'error',
      code: 'markup_in_spec',
      message: `Spec contains page markup "${marker}". Quote policy prose, not HTML.`,
      path: spec.repoPath
    })
  }

  if (spec.kind !== 'stated' || spec.lang) {
    return problems
  }

  const haystack = combinedSourceBody(page.body, extraBodiesForSpec(spec, pages, page))
  for (const prose of findUnsourcedProse(spec.document, spec.raw, haystack)) {
    problems.push({
      level: 'error',
      code: 'unsourced_prose',
      message: `Quoted text is not on ${page.repoPath}: "${prose.text}"`,
      path: spec.repoPath,
      line: prose.line
    })
  }

  return problems
}

type Coverage = {
  party: string
  pages: number
  interventions: number
  stated: number
  derived: number
}

function coverageOf(pages: DumpPage[], specs: SpecFile[], parties: string[]): Coverage[] {
  return parties.map((party) => ({
    party,
    pages: pages.filter((page) => page.party === party).length,
    interventions: pages.filter((page) => page.party === party && page.stance === 'intervention')
      .length,
    stated: specs.filter((spec) => spec.party === party && spec.kind === 'stated').length,
    derived: specs.filter((spec) => spec.party === party && spec.kind === 'derived').length
  }))
}

function reportProblem(problem: Problem): void {
  const location = problem.line ? `${problem.path}, line ${problem.line}` : problem.path
  const label = problem.level === 'error' ? 'ERROR' : 'WARN'
  console.log(`${label} [${problem.code}] ${location}: ${problem.message}`)
}

function loadFlagshipKeys(): Set<string> | undefined {
  const flagshipPath = join(CORPUS_DIR, '_analysis', 'flagship.yaml')
  if (!existsSync(flagshipPath)) {
    return undefined
  }
  const parsed = YAML.parse(readFileSync(flagshipPath, 'utf8')) as {
    parties?: Record<string, Record<string, string>>
  }
  const keys = new Set<string>()
  for (const [party, clusters] of Object.entries(parsed.parties ?? {})) {
    for (const file of Object.values(clusters)) {
      keys.add(`${party}/${file.replace(/\.md$/, '')}`)
    }
  }
  return keys
}

function checkEvent(event: string, options: Options): Problem[] {
  CORPUS_DIR = join(REPO_ROOT, 'corpus', event)
  CLUSTERS_FILE = join(CORPUS_DIR, 'clusters.yaml')
  const parties = listParties(options.party)
  if (parties.length === 0) {
    return []
  }
  const clusterIds = loadClusterIds()
  const pages = loadDumpPages(parties)
  const { specs, problems: loadProblems } = loadSpecFiles(parties)
  const problems = [...loadProblems]

  const pageByRepoPath = new Map(pages.map((page) => [page.repoPath, page]))
  const statedIds = new Set(
    specs
      .filter((spec) => spec.kind === 'stated')
      .map((spec) => expectedId(spec.party, spec.slug, 'stated'))
  )

  for (const spec of specs) {
    const extensions = (spec.document.frontmatter?.extensions ?? {}) as Record<string, unknown>
    const sourcePath = typeof extensions.sourcePath === 'string' ? extensions.sourcePath : ''
    const page = pageByRepoPath.get(sourcePath)

    problems.push(...checkFrontmatter(spec, page, clusterIds, statedIds))
    if (!page) {
      continue
    }
    problems.push(...checkDigest(spec, page, options.fix))
    problems.push(...checkFigures(spec, page, pages))
    problems.push(...checkFaithfulness(spec, page, pages))
  }

  problems.push(...findBoilerplate(specs.filter((spec) => spec.kind === 'stated')))

  const modelled = new Set(
    specs.filter((spec) => spec.kind === 'stated').map((spec) => `${spec.party}/${spec.slug}`)
  )
  const modelledUrls = new Set(
    specs.filter((spec) => spec.kind === 'stated').flatMap((spec) => sourceUrlsOf(spec.document))
  )
  const flagship = loadFlagshipKeys()
  const unmodelled = pages
    .filter((page) => page.stance === 'intervention')
    .filter((page) => !flagship || flagship.has(`${page.party}/${page.slug}`))
    .filter(
      (page) =>
        !modelled.has(`${page.party}/${page.slug}`) && !modelledUrls.has(page.sourceUrl)
    )

  if (options.complete) {
    for (const page of unmodelled) {
      problems.push({
        level: 'error',
        code: 'page_not_modelled',
        message: 'Intervention page has no spec',
        path: page.repoPath
      })
    }
  }

  console.log('')
  console.log(`event ${event}`)
  console.log('party           pages  intervention  stated  derived')
  for (const row of coverageOf(pages, specs, parties)) {
    console.log(
      `${row.party.padEnd(15)} ${String(row.pages).padStart(5)} ${String(row.interventions).padStart(13)} ${String(row.stated).padStart(7)} ${String(row.derived).padStart(8)}`
    )
  }
  console.log(
    `${specs.length} spec(s), ${unmodelled.length} intervention page(s) with no stated spec`
  )

  return problems
}

function main(): void {
  const options = parseArgs(process.argv.slice(2))
  const problems: Problem[] = []
  for (const event of options.events) {
    problems.push(...checkEvent(event, options))
  }

  for (const problem of problems) {
    reportProblem(problem)
  }

  const errors = problems.filter((problem) => problem.level === 'error').length
  const warnings = problems.filter((problem) => problem.level === 'warning').length
  console.log('')
  console.log(`check:policy ${errors} error(s), ${warnings} warning(s)`)

  if (errors > 0) {
    process.exitCode = 1
  }
}

function isExecutedAsCli(): boolean {
  const entry = process.argv[1]
  if (!entry) {
    return false
  }
  try {
    return fileURLToPath(import.meta.url) === resolve(entry)
  } catch {
    return false
  }
}

if (isExecutedAsCli()) {
  main()
}
