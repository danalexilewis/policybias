/**
 * Emit `<slug>.<lang>.spec.md` siblings from canonical Gurki specs.
 *
 *   pnpm translate:specs --event se-election-2026 --to en
 *   pnpm translate:specs --event se-election-2026 --to en --check
 *   pnpm translate:specs --event se-election-2026 --to en --party vansterpartiet --limit 1
 *
 * Machine-translates titles, summaries, notes, gaps, assumptions and step text.
 * Gurki keywords stay English. Provenance is written into frontmatter.
 */

import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { parseFile } from 'gurki'
import YAML from 'yaml'
import {
  EVENT_LANGS,
  parseEventId,
  parseLang,
  type EventId,
  type Lang,
} from '../src/event/events.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const AGENT_PATH = join(REPO_ROOT, '.cursor/agents/translate-gurki.md')
const TRANSLATOR = 'cursor-agent'

export type Options = {
  eventId: EventId
  to: Lang
  check: boolean
  force: boolean
  dryRun: boolean
  party?: string
  limit?: number
  model: string
}

export function parseArgs(argv: string[]): Options {
  let eventId: EventId = 'se-election-2026'
  let to: Lang = 'en'
  let check = false
  let force = false
  let dryRun = false
  let party: string | undefined
  let limit: number | undefined
  let model = 'auto'
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--event') {
      const parsed = parseEventId(argv[index + 1])
      if (!parsed) {
        throw new Error(`Unknown --event ${argv[index + 1] ?? ''}`)
      }
      eventId = parsed
      index += 1
    }
    if (arg === '--to') {
      const parsed = parseLang(argv[index + 1])
      if (!parsed) {
        throw new Error('Unknown --to language')
      }
      to = parsed
      index += 1
    }
    if (arg === '--check') {
      check = true
    }
    if (arg === '--force') {
      force = true
    }
    if (arg === '--dry-run') {
      dryRun = true
    }
    if (arg === '--party') {
      party = argv[index + 1]
      index += 1
    }
    if (arg === '--limit') {
      const parsed = Number(argv[index + 1])
      if (!Number.isFinite(parsed) || parsed < 1) {
        throw new Error('--limit must be a positive number')
      }
      limit = parsed
      index += 1
    }
    if (arg === '--model') {
      model = argv[index + 1] ?? model
      index += 1
    }
  }
  if (to === EVENT_LANGS[eventId].canonical) {
    throw new Error(`--to ${to} is the canonical language for ${eventId}`)
  }
  return { eventId, to, check, force, dryRun, party, limit, model }
}

export function digest(text: string): string {
  return `sha256-${createHash('sha256').update(text).digest('hex').slice(0, 16)}`
}

export function isCanonicalSpec(file: string): boolean {
  return file.endsWith('.spec.md') && !/\.(en|sv|mi)(\.derived)?\.spec.md$/.test(file)
}

export function siblingPath(canonical: string, to: Lang): string {
  const directory = dirname(canonical)
  const file = basename(canonical)
  if (file.endsWith('.derived.spec.md')) {
    const slug = file.slice(0, -'.derived.spec.md'.length)
    return join(directory, `${slug}.${to}.derived.spec.md`)
  }
  const slug = file.slice(0, -'.spec.md'.length)
  return join(directory, `${slug}.${to}.spec.md`)
}

export function translationIsCurrent(existing: string, sourceSpecDigest: string): boolean {
  return existing.includes(sourceSpecDigest)
}

export function applyProvenance(
  raw: string,
  fields: {
    lang: Lang
    translationOf: string
    translator: string
    translatedAt: string
    sourceSpecDigest: string
  },
): string {
  const end = raw.indexOf('\n---', 3)
  if (!raw.startsWith('---') || end < 0) {
    throw new Error('translated spec is missing frontmatter')
  }
  const fm = YAML.parse(raw.slice(3, end)) as Record<string, unknown>
  fm.lang = fields.lang
  fm.translationOf = fields.translationOf
  fm.translator = fields.translator
  fm.translatedAt = fields.translatedAt
  fm.sourceSpecDigest = fields.sourceSpecDigest
  const body = raw.slice(end + 4)
  return `---\n${YAML.stringify(fm, { lineWidth: 0 }).trim()}\n---${body}`
}

function listCanonical(eventId: EventId, party?: string): string[] {
  const corpus = join(REPO_ROOT, 'corpus', eventId)
  const parties = party
    ? [party]
    : readdirSync(corpus).filter((name) => {
        if (name.startsWith('_') || name.startsWith('.')) {
          return false
        }
        return statSync(join(corpus, name)).isDirectory()
      })
  const files: string[] = []
  for (const id of parties) {
    const directory = join(corpus, id)
    if (!existsSync(directory)) {
      continue
    }
    for (const file of readdirSync(directory)) {
      if (isCanonicalSpec(file)) {
        files.push(join(directory, file))
      }
    }
  }
  return files.sort((left, right) => {
    const leftDerived = left.endsWith('.derived.spec.md') ? 1 : 0
    const rightDerived = right.endsWith('.derived.spec.md') ? 1 : 0
    if (leftDerived !== rightDerived) {
      return leftDerived - rightDerived
    }
    return left.localeCompare(right)
  })
}

function agentBrief(): string {
  const raw = readFileSync(AGENT_PATH, 'utf8')
  const end = raw.indexOf('\n---', 3)
  if (raw.startsWith('---') && end >= 0) {
    return raw.slice(end + 4).trim()
  }
  return raw.trim()
}

function rel(path: string): string {
  return relative(REPO_ROOT, path)
}

function buildPrompt(args: {
  source: string
  dest: string
  from: Lang
  to: Lang
  translationOf: string
  sourceSpecDigest: string
  translatedAt: string
}): string {
  return `${agentBrief()}

---

Source spec: ${rel(args.source)}
Write to: ${rel(args.dest)}
Source language: ${args.from}
Target language: ${args.to}
translationOf: ${args.translationOf}
sourceSpecDigest: ${args.sourceSpecDigest}
translatedAt: ${args.translatedAt}
lang: ${args.to}
translator: ${TRANSLATOR}

Read the source spec from disk. Write only the output path. Lint it with \`pnpm gurki lint ${rel(args.dest)}\` and fix until that is clean.
`
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function translateText(text: string, to: Lang, from: string): Promise<string> {
  if (!text.trim()) {
    return text
  }
  const url = new URL('https://translate.googleapis.com/translate_a/single')
  url.searchParams.set('client', 'gtx')
  url.searchParams.set('sl', from)
  url.searchParams.set('tl', to)
  url.searchParams.set('dt', 't')
  url.searchParams.set('q', text)
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const response = await fetch(url)
    if (response.status === 429) {
      await sleep(1500 * (attempt + 1))
      continue
    }
    if (!response.ok) {
      throw new Error(`translate HTTP ${response.status}`)
    }
    const json = (await response.json()) as unknown
    if (!Array.isArray(json) || !Array.isArray(json[0])) {
      return text
    }
    return (json[0] as unknown[])
      .map((chunk) => (Array.isArray(chunk) ? String(chunk[0] ?? '') : ''))
      .join('')
  }
  throw new Error('translate HTTP 429')
}

export async function translateMarkdown(raw: string, to: Lang, from: string): Promise<string> {
  const end = raw.indexOf('\n---', 3)
  if (!raw.startsWith('---') || end < 0) {
    return raw
  }
  const fm = YAML.parse(raw.slice(3, end)) as Record<string, unknown>
  const body = raw.slice(end + 4)
  for (const key of ['title', 'summary'] as const) {
    if (typeof fm[key] === 'string') {
      fm[key] = await translateText(fm[key], to, from)
    }
  }
  for (const key of ['gaps', 'assumptions'] as const) {
    if (Array.isArray(fm[key])) {
      fm[key] = await Promise.all(
        fm[key].map((item) => (typeof item === 'string' ? translateText(item, to, from) : item)),
      )
    }
  }
  const lines = body.split('\n')
  const next: string[] = []
  for (const line of lines) {
    const match = line.match(/^(Given|When|Then|And|But|Output|Outcome|Activates)\s+(.*)$/)
    if (match) {
      next.push(`${match[1]} ${await translateText(match[2] ?? '', to, from)}`)
      await sleep(80)
      continue
    }
    if (line.startsWith('> ')) {
      next.push(`> ${await translateText(line.slice(2), to, from)}`)
      continue
    }
    if (line.startsWith('Scenario: ')) {
      next.push(`Scenario: ${await translateText(line.slice('Scenario: '.length), to, from)}`)
      continue
    }
    if (line.startsWith('System: ')) {
      next.push(`System: ${await translateText(line.slice('System: '.length), to, from)}`)
      continue
    }
    next.push(line)
  }
  return `---\n${YAML.stringify(fm, { lineWidth: 0 }).trim()}\n---${next.join('\n')}`
}

function gurkiParseErrors(path: string): string[] {
  const parsed = parseFile(path)
  return parsed.diagnostics.filter((item) => item.level === 'error').map((item) => item.message)
}

function needsWork(outPath: string, sourceSpecDigest: string, force: boolean): boolean {
  if (force || !existsSync(outPath)) {
    return true
  }
  return !translationIsCurrent(readFileSync(outPath, 'utf8'), sourceSpecDigest)
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2))
  const from = EVENT_LANGS[options.eventId].canonical
  const files = listCanonical(options.eventId, options.party)
  const translatedAt = new Date().toISOString().slice(0, 10)
  let stale = 0
  let wrote = 0
  let skipped = 0
  let failed = 0

  for (const file of files) {
    if (options.limit !== undefined && wrote + failed >= options.limit && !options.check) {
      break
    }
    const raw = readFileSync(file, 'utf8')
    const sourceSpecDigest = digest(raw)
    const parsed = parseFile(file)
    if (!parsed.document) {
      console.warn(`skip ${rel(file)}: does not parse`)
      continue
    }

    const outPath = siblingPath(file, options.to)
    if (options.check) {
      if (!existsSync(outPath)) {
        console.log(`MISSING ${rel(outPath)}`)
        stale += 1
        continue
      }
      if (!translationIsCurrent(readFileSync(outPath, 'utf8'), sourceSpecDigest)) {
        console.log(`STALE ${rel(outPath)}`)
        stale += 1
      }
      continue
    }

    if (!needsWork(outPath, sourceSpecDigest, options.force)) {
      skipped += 1
      continue
    }

    const translationOf = parsed.document.frontmatter?.id ?? basename(file, '.spec.md')
    console.log(`translate ${rel(file)} → ${rel(outPath)}`)
    if (options.dryRun) {
      wrote += 1
      continue
    }

    try {
      const translated = await translateMarkdown(raw, options.to, from)
      const stamped = applyProvenance(translated, {
        lang: options.to,
        translationOf,
        translator: 'machine',
        translatedAt,
        sourceSpecDigest,
      })
      writeFileSync(outPath, stamped, 'utf8')
      const errors = gurkiParseErrors(outPath)
      if (errors.length > 0) {
        throw new Error(errors.join('; '))
      }
      wrote += 1
      console.log(`wrote ${rel(outPath)}`)
      await sleep(150)
    } catch (error) {
      failed += 1
      const message = error instanceof Error ? error.message : String(error)
      console.error(`FAIL ${rel(outPath)}: ${message}`)
    }
  }

  if (options.check && stale > 0) {
    process.exitCode = 1
  }
  if (!options.check && failed > 0) {
    process.exitCode = 1
  }
  if (options.check) {
    console.log(`${stale} stale/missing`)
    return
  }
  console.log(
    `${options.dryRun ? 'would write' : 'wrote'} ${wrote} file(s), skipped ${skipped}, failed ${failed}`,
  )
}

function isMainModule(): boolean {
  const entry = process.argv[1]
  if (!entry) {
    return false
  }
  return import.meta.url === pathToFileURL(resolve(entry)).href
}

if (isMainModule()) {
  try {
    main().catch((error) => {
      console.error(error instanceof Error ? error.message : error)
      process.exit(1)
    })
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  }
}
