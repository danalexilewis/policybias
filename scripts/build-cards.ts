/**
 * Builds public/cards.json from the NZ 2026 party policy spec tree.
 *
 * One card per policy page, pairing `<slug>.spec.md` (what the party stated)
 * with `<slug>.derived.spec.md` (our understanding) into two faces of one card.
 *
 * Gurki Markdown stays canonical. This emits the interchange the app reads, so
 * no card data is ever maintained by hand. Steps arrive pre-parsed, which is why
 * the app needs no Gurki parser and no syntax highlighter.
 *
 *   pnpm build:cards
 *   pnpm build:cards --out some/other/cards.json
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
  CardFace,
  CardFaceKind,
  CardScenario,
  CardStep,
  CardsDataset,
  ClusterMeta,
  CoverageCell,
  PartyId,
  PartyMeta,
  PolicyCard,
  ReportItem
} from '../src/data/types.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CORPUS_DIR = join(REPO_ROOT, 'corpus/nz-election-2026')
const CLUSTERS_FILE = join(CORPUS_DIR, 'clusters.yaml')
const PARTIES_FILE = join(CORPUS_DIR, 'parties.yaml')
const DEFAULT_OUT = join(REPO_ROOT, 'public/cards.json')

type Scenario = GurkiDocument['scenarios'][number]

type LoadedSpec = {
  party: PartyId
  slug: string
  kind: CardFaceKind
  repoPath: string
  document: GurkiDocument
}

function parseArgs(argv: string[]): { out: string } {
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--out') {
      return { out: join(REPO_ROOT, argv[index + 1] ?? '') }
    }
    if (arg?.startsWith('--out=')) {
      return { out: join(REPO_ROOT, arg.slice('--out='.length)) }
    }
  }
  return { out: DEFAULT_OUT }
}

function loadClusters(): ClusterMeta[] {
  const parsed = YAML.parse(readFileSync(CLUSTERS_FILE, 'utf8')) as { clusters?: ClusterMeta[] }
  return (parsed.clusters ?? []).map((cluster) => ({
    id: cluster.id,
    label: cluster.label,
    description: (cluster.description ?? '').trim()
  }))
}

function loadParties(): Omit<PartyMeta, 'cardCount'>[] {
  const parsed = YAML.parse(readFileSync(PARTIES_FILE, 'utf8')) as {
    parties?: Omit<PartyMeta, 'cardCount'>[]
  }
  return parsed.parties ?? []
}

function listPartyIds(): string[] {
  if (!existsSync(CORPUS_DIR)) {
    return []
  }
  return readdirSync(CORPUS_DIR)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => statSync(join(CORPUS_DIR, name)).isDirectory())
    .sort()
}

function loadSpecs(): LoadedSpec[] {
  const specs: LoadedSpec[] = []

  for (const party of listPartyIds()) {
    const directory = join(CORPUS_DIR, party)

    for (const file of readdirSync(directory).sort()) {
      if (!file.endsWith('.spec.md')) {
        continue
      }

      const absolutePath = join(directory, file)
      const repoPath = relative(REPO_ROOT, absolutePath)
      const result = parseFile(absolutePath)

      if (!result.document) {
        console.warn(`skip ${repoPath}: does not parse`)
        continue
      }

      const name = basename(file, '.spec.md')
      const derived = name.endsWith('.derived')

      specs.push({
        party: party as PartyId,
        slug: derived ? name.slice(0, -'.derived'.length) : name,
        kind: derived ? 'derived' : 'stated',
        repoPath,
        document: result.document
      })
    }
  }

  return specs
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
      counts: { gaps: gaps.length, assumptions: assumptions.length }
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

function main(): void {
  const { out } = parseArgs(process.argv.slice(2))
  const clusters = loadClusters()
  const partyMeta = loadParties()
  const cards = toCards(loadSpecs())

  resolveActivates(cards)

  const parties: PartyMeta[] = partyMeta.map((party) => ({
    ...party,
    cardCount: cards.filter((card) => card.party === party.id).length
  }))

  const dataset: CardsDataset = {
    schemaVersion: '2',
    generatedAt: new Date().toISOString(),
    clusters,
    parties,
    coverage: coverageOf(
      cards,
      clusters,
      parties.map((party) => party.id)
    ),
    cards
  }

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
