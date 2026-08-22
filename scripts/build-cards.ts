/**
 * Builds `public/<event>/cards.<lang>.json` from each event's spec tree.
 *
 * One card per policy page, pairing `<slug>.spec.md` (what the party stated)
 * with `<slug>.derived.spec.md` (our understanding) into two faces of one card.
 *
 * Gurki Markdown stays canonical. This emits the interchange the app reads, so
 * no card data is ever maintained by hand. Steps arrive pre-parsed, which is why
 * the app needs no Gurki parser and no syntax highlighter.
 *
 *   pnpm build:cards
 *   pnpm build:cards --event se-election-2026 --lang en
 *
 * Succeeds on a partial tree: the app can be developed against three cards.
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'
import {
  parseFile,
  surfaceForConnector,
  surfaceForKind,
  valueReport,
  type GurkiDocument
} from 'gurki'
import { extrapolatedLines } from './extrapolated.ts'
import type {
  AnonymiseNames,
  CardFace,
  CardFaceKind,
  CardScenario,
  CardStep,
  CardsDataset,
  ClusterMeta,
  ClusterTrivia,
  CoverageCell,
  PartyId,
  PartyMeta,
  PolicyCard,
  ReportItem
} from '../src/data/types.ts'
import {
  EVENT_IDS,
  EVENT_LANGS,
  eventCardsPath,
  parseEventId,
  parseLang,
  type EventId,
  type Lang
} from '../src/event/events.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

type Scenario = GurkiDocument['scenarios'][number]

type LoadedSpec = {
  party: PartyId
  slug: string
  kind: CardFaceKind
  lang: Lang | null
  repoPath: string
  document: GurkiDocument
}

export type BuildCardsArgs = {
  eventId: EventId | 'all'
  lang: Lang | 'all'
}

export function parseArgs(argv: string[]): BuildCardsArgs {
  let eventId: EventId | 'all' = 'all'
  let lang: Lang | 'all' = 'all'

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--event') {
      eventId = parseEventArg(argv[index + 1])
      index += 1
      continue
    }
    if (arg?.startsWith('--event=')) {
      eventId = parseEventArg(arg.slice('--event='.length))
      continue
    }
    if (arg === '--lang') {
      lang = parseLangArg(argv[index + 1])
      index += 1
      continue
    }
    if (arg?.startsWith('--lang=')) {
      lang = parseLangArg(arg.slice('--lang='.length))
    }
  }

  return { eventId, lang }
}

function parseEventArg(value: string | undefined): EventId | 'all' {
  if (!value || value === 'all') {
    return 'all'
  }
  const parsed = parseEventId(value)
  if (!parsed) {
    throw new Error(`Unknown event "${value}"`)
  }
  return parsed
}

function parseLangArg(value: string | undefined): Lang | 'all' {
  if (!value || value === 'all') {
    return 'all'
  }
  const parsed = parseLang(value)
  if (!parsed) {
    throw new Error(`Unknown language "${value}"`)
  }
  return parsed
}

function pickLocalized(
  record: Record<string, string> | undefined,
  lang: Lang,
  fallback: Lang,
): string {
  if (!record) {
    return ''
  }
  return record[lang] ?? record[fallback] ?? Object.values(record)[0] ?? ''
}

function loadClusters(corpusDir: string, lang: Lang, fallback: Lang): ClusterMeta[] {
  const parsed = YAML.parse(readFileSync(join(corpusDir, 'clusters.yaml'), 'utf8')) as {
    clusters?: Array<{
      id: string
      label?: string
      description?: string
      labels?: Record<string, string>
      descriptions?: Record<string, string>
    }>
  }
  return (parsed.clusters ?? []).map((cluster) => ({
    id: cluster.id,
    label: cluster.labels
      ? pickLocalized(cluster.labels, lang, fallback)
      : (cluster.label ?? ''),
    description: cluster.descriptions
      ? pickLocalized(cluster.descriptions, lang, fallback)
      : (cluster.description ?? '').trim()
  }))
}

function emptyAnonymise(): AnonymiseNames {
  return {
    caseInsensitive: [],
    caseSensitive: [],
    uniqueTitle: [],
    shortTitle: []
  }
}

function loadParties(corpusDir: string): Omit<PartyMeta, 'cardCount'>[] {
  const parsed = YAML.parse(readFileSync(join(corpusDir, 'parties.yaml'), 'utf8')) as {
    parties?: Array<Omit<PartyMeta, 'cardCount'>>
  }
  return (parsed.parties ?? []).map((party) => ({
    ...party,
    logo: party.logo ?? `${party.id}.svg`,
    anonymise: party.anonymise ?? emptyAnonymise()
  }))
}

function loadTrivia(corpusDir: string, lang: Lang, fallback: Lang): ClusterTrivia[] {
  const preferred = join(corpusDir, `trivia.${lang}.yaml`)
  const fallbackPath = join(corpusDir, `trivia.${fallback}.yaml`)
  const path = existsSync(preferred) ? preferred : fallbackPath
  if (!existsSync(path)) {
    return []
  }
  const parsed = YAML.parse(readFileSync(path, 'utf8')) as { trivia?: ClusterTrivia[] }
  return parsed.trivia ?? []
}

function parseSpecFilename(file: string): { slug: string; kind: CardFaceKind; lang: Lang | null } | null {
  if (!file.endsWith('.spec.md')) {
    return null
  }
  const name = basename(file, '.spec.md')
  const parts = name.split('.')
  let kind: CardFaceKind = 'stated'
  let lang: Lang | null = null
  let slugParts = parts
  if (parts.at(-1) === 'derived') {
    kind = 'derived'
    slugParts = parts.slice(0, -1)
  }
  const maybeLang = parseLang(slugParts.at(-1))
  if (maybeLang && slugParts.length > 1) {
    lang = maybeLang
    slugParts = slugParts.slice(0, -1)
  }
  return { slug: slugParts.join('.'), kind, lang }
}

function listPartyIds(corpusDir: string): string[] {
  if (!existsSync(corpusDir)) {
    return []
  }
  return readdirSync(corpusDir)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => statSync(join(corpusDir, name)).isDirectory())
    .sort()
}

function loadSpecs(corpusDir: string, lang: Lang, canonical: Lang): LoadedSpec[] {
  const specs: LoadedSpec[] = []

  for (const party of listPartyIds(corpusDir)) {
    const directory = join(corpusDir, party)

    for (const file of readdirSync(directory).sort()) {
      const parsedName = parseSpecFilename(file)
      if (!parsedName) {
        continue
      }

      const absolutePath = join(directory, file)
      const repoPath = relative(REPO_ROOT, absolutePath)
      const result = parseFile(absolutePath)

      if (!result.document) {
        console.warn(`skip ${repoPath}: does not parse`)
        continue
      }

      specs.push({
        party: party as PartyId,
        slug: parsedName.slug,
        kind: parsedName.kind,
        lang: parsedName.lang,
        repoPath,
        document: result.document
      })
    }
  }

  return pickSpecsForLang(specs, lang, canonical)
}

function pickSpecsForLang(
  specs: LoadedSpec[],
  lang: Lang,
  canonical: Lang
): LoadedSpec[] {
  const byKey = new Map<string, LoadedSpec>()

  function keyOf(spec: LoadedSpec): string {
    return `${spec.party}/${spec.slug}/${spec.kind}`
  }

  for (const spec of specs) {
    const isCanonical = spec.lang === null || spec.lang === canonical
    const isWanted = spec.lang === lang
    if (!isCanonical && !isWanted) {
      continue
    }
    const key = keyOf(spec)
    const existing = byKey.get(key)
    if (!existing || (isWanted && existing.lang !== lang)) {
      byKey.set(key, spec)
    }
  }

  return [...byKey.values()]
}

function toCardStep(step: Scenario['steps'][number], marked: Map<number, string>): CardStep {
  const reason = marked.get(step.line)
  const surface = step.connector
    ? surfaceForConnector(step.connector)
    : surfaceForKind(step.kind)

  return {
    kind: step.kind,
    connector: step.connector ?? null,
    surface,
    text: step.text,
    extrapolated: reason !== undefined,
    ...(reason !== undefined ? { reason } : {})
  }
}

export function toCardScenario(scenario: Scenario): CardScenario {
  const marked = extrapolatedLines(scenario)
  return {
    title: scenario.title,
    steps: scenario.steps.map((step) => toCardStep(step, marked))
  }
}

/** The opening note blockquote, as one paragraph. */
export function extractNote(document: GurkiDocument): string | undefined {
  for (const segment of document.segments) {
    if (segment.kind !== 'prose') {
      continue
    }
    const quoted = segment.text
      .split(/\r?\n/)
      .filter((line) => line.trimStart().startsWith('>'))
      .map((line) => line.trimStart().replace(/^>\s?/, '').trim())
      .filter((line) => line.length > 0)

    if (quoted.length > 0) {
      return quoted.join(' ')
    }
  }
  return undefined
}

function toReportItems(items: { text: string; connector?: 'and' | 'but' }[]): ReportItem[] {
  return items.map((item) => ({ text: item.text, connector: item.connector ?? null }))
}

function stringList(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : []
}

function extensionsOf(document: GurkiDocument): Record<string, unknown> {
  return (document.frontmatter?.extensions ?? {}) as Record<string, unknown>
}

export function toFace(spec: LoadedSpec): CardFace {
  const { document } = spec
  const frontmatter = document.frontmatter
  const report = valueReport(document.scenarios)
  const scenarios = document.scenarios.map(toCardScenario)
  const steps = scenarios.flatMap((scenario) => scenario.steps)
  const note = extractNote(document)

  return {
    kind: spec.kind,
    specId: frontmatter?.id ?? spec.repoPath,
    title: frontmatter?.title ?? '',
    ...(frontmatter?.summary ? { summary: frontmatter.summary } : {}),
    ...(document.systems[0] ? { system: document.systems[0].title } : {}),
    ...(note ? { note } : {}),
    scenarios,
    report: {
      outputs: toReportItems(report.outputs),
      outcomes: toReportItems(report.outcomes)
    },
    activates: steps
      .filter((step) => step.kind === 'activates')
      .map((step) => step.text.trim()),
    counts: {
      scenarios: scenarios.length,
      steps: steps.length,
      outputs: steps.filter((step) => step.kind === 'output').length,
      outcomes: steps.filter((step) => step.kind === 'outcome').length,
      extrapolated: steps.filter((step) => step.extrapolated).length
    }
  }
}

/** Pair each stated spec with its derived spec, if one has been written. */
export function toCards(specs: LoadedSpec[]): PolicyCard[] {
  const derivedBySlug = new Map<string, LoadedSpec>()
  for (const spec of specs) {
    if (spec.kind === 'derived') {
      derivedBySlug.set(`${spec.party}/${spec.slug}`, spec)
    }
  }

  const cards: PolicyCard[] = []

  for (const spec of specs) {
    if (spec.kind !== 'stated') {
      continue
    }

    const derivedSpec = derivedBySlug.get(`${spec.party}/${spec.slug}`)
    const extensions = extensionsOf(spec.document)
    const frontmatter = spec.document.frontmatter
    const firstSource = frontmatter?.sources?.[0]
    const gaps = stringList(extensions.gaps)
    const assumptions = derivedSpec ? stringList(extensionsOf(derivedSpec.document).assumptions) : []

    cards.push({
      id: frontmatter?.id ?? spec.repoPath,
      party: spec.party,
      title: frontmatter?.title ?? '',
      ...(frontmatter?.summary ? { summary: frontmatter.summary } : {}),
      clusters: stringList(extensions.clusters),
      tags: [...(frontmatter?.tags ?? [])],
      money: extensions.money === 'named-figure' ? 'named-figure' : 'no-figure',
      source: {
        title: typeof firstSource === 'string' ? firstSource : (firstSource?.title ?? ''),
        url: typeof firstSource === 'string' ? '' : (firstSource?.url ?? ''),
        path: String(extensions.sourcePath ?? '')
      },
      gaps,
      assumptions,
      stated: toFace(spec),
      ...(derivedSpec ? { derived: toFace(derivedSpec) } : {}),
      counts: { gaps: gaps.length, assumptions: assumptions.length },
      ...(spec.lang ? { translated: true } : {})
    })
  }

  for (const spec of specs) {
    if (spec.kind === 'derived' && !cards.some((card) => card.derived?.specId === spec.document.frontmatter?.id)) {
      console.warn(`skip ${spec.repoPath}: no stated spec to attach to`)
    }
  }

  return cards
}

/**
 * Keep only Activates targets that resolve to a card. A dangling target is a
 * spec nobody has written yet, not an edge.
 */
export function resolveActivates(cards: PolicyCard[]): void {
  const byId = new Map<string, string>()
  const byTitle = new Map<string, string>()

  for (const card of cards) {
    byId.set(card.id.toLowerCase(), card.id)
    for (const face of faces(card)) {
      byId.set(face.specId.toLowerCase(), card.id)
      for (const scenario of face.scenarios) {
        byTitle.set(scenario.title.trim().toLowerCase(), card.id)
      }
    }
  }

  for (const card of cards) {
    for (const face of faces(card)) {
      const resolved = face.activates
        .map((target) => {
          const key = target.toLowerCase()
          return byId.get(key) ?? byTitle.get(key)
        })
        .filter((target): target is string => target !== undefined && target !== card.id)

      face.activates = [...new Set(resolved)]
    }
  }
}

function faces(card: PolicyCard): CardFace[] {
  return card.derived ? [card.stated, card.derived] : [card.stated]
}

function coverageOf(cards: PolicyCard[], clusters: ClusterMeta[], parties: PartyId[]): CoverageCell[] {
  const cells: CoverageCell[] = []
  for (const cluster of clusters) {
    for (const party of parties) {
      const count = cards.filter(
        (card) => card.party === party && card.clusters.includes(cluster.id)
      ).length
      if (count > 0) {
        cells.push({ cluster: cluster.id, party, cards: count })
      }
    }
  }
  return cells
}

function writeDataset(eventId: EventId, lang: Lang): void {
  const langs = EVENT_LANGS[eventId]
  const corpusDir = join(REPO_ROOT, 'corpus', eventId)
  const clusters = loadClusters(corpusDir, lang, langs.canonical)
  const partyMeta = loadParties(corpusDir)
  const cards = toCards(loadSpecs(corpusDir, lang, langs.canonical))
  const trivia = loadTrivia(corpusDir, lang, langs.canonical)

  resolveActivates(cards)

  const parties: PartyMeta[] = partyMeta.map((party) => ({
    ...party,
    cardCount: cards.filter((card) => card.party === party.id).length
  }))

  const dataset: CardsDataset = {
    schemaVersion: '3',
    eventId,
    lang,
    langs: [...langs.available],
    generatedAt: new Date().toISOString(),
    clusters,
    parties,
    coverage: coverageOf(
      cards,
      clusters,
      parties.map((party) => party.id)
    ),
    cards,
    trivia
  }

  const out = join(REPO_ROOT, 'public', eventCardsPath(eventId, lang).slice(1))
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, `${JSON.stringify(dataset, null, 2)}\n`, 'utf8')

  const gameable = clusters.filter(
    (cluster) =>
      new Set(
        dataset.coverage.filter((cell) => cell.cluster === cluster.id).map((cell) => cell.party)
      ).size >= 3
  )

  const withDerived = cards.filter((card) => card.derived).length
  const total = (pick: (card: PolicyCard) => number) => cards.reduce((sum, card) => sum + pick(card), 0)

  console.log(`build:cards wrote ${relative(REPO_ROOT, out)}`)
  console.log(`  ${cards.length} card(s), ${withDerived} with a derived understanding`)
  console.log(
    `  ${total((card) => card.counts.gaps)} gap(s), ${total((card) => card.counts.assumptions)} assumption(s)`
  )
  console.log(`  ${gameable.length} of ${clusters.length} cluster(s) have 3+ parties and can be dealt`)
  for (const party of parties) {
    console.log(`  ${party.label.padEnd(14)} ${String(party.cardCount).padStart(3)} card(s)`)
  }
}

function main(): void {
  const { eventId, lang } = parseArgs(process.argv.slice(2))
  const events = eventId === 'all' ? [...EVENT_IDS] : [eventId]
  for (const id of events) {
    const langs = lang === 'all' ? EVENT_LANGS[id].available : [lang]
    for (const code of langs) {
      writeDataset(id, code)
    }
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
