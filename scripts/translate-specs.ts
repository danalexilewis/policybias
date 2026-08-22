/**
 * Emit `<slug>.<lang>.spec.md` siblings from canonical Gurki specs.
 *
 *   pnpm translate:specs --event se-election-2026 --to en
 *   pnpm translate:specs --event se-election-2026 --to en --check
 *
 * Gurki keywords stay English. Only titles, summaries, notes, gaps and step
 * text are translated. Provenance is written into frontmatter.
 */

import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseFile } from 'gurki'
import YAML from 'yaml'
import { parseEventId, parseLang, type Lang } from '../src/event/events.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

type Options = {
  eventId: string
  to: Lang
  check: boolean
  party?: string
}

function parseArgs(argv: string[]): Options {
  let eventId = 'se-election-2026'
  let to: Lang = 'en'
  let check = false
  let party: string | undefined
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--event') {
      eventId = argv[index + 1] ?? eventId
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
    if (arg === '--party') {
      party = argv[index + 1]
      index += 1
    }
  }
  if (!parseEventId(eventId)) {
    throw new Error(`Unknown event ${eventId}`)
  }
  return { eventId, to, check, party }
}

function digest(text: string): string {
  return `sha256-${createHash('sha256').update(text).digest('hex').slice(0, 16)}`
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
  const response = await fetch(url)
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

function isCanonicalSpec(file: string): boolean {
  return (
    file.endsWith('.spec.md') &&
    !file.endsWith('.derived.spec.md') &&
    !/\.(en|sv|mi)(\.derived)?\.spec\.md$/.test(file)
  )
}

function listCanonical(eventId: string, party?: string): string[] {
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
  return files.sort()
}

function siblingPath(canonical: string, to: Lang, derived: boolean): string {
  const directory = dirname(canonical)
  const slug = basename(canonical, '.spec.md')
  return join(directory, derived ? `${slug}.${to}.derived.spec.md` : `${slug}.${to}.spec.md`)
}

async function translateMarkdown(raw: string, to: Lang, from: string): Promise<string> {
  const end = raw.indexOf('\n---', 3)
  if (!raw.startsWith('---') || end < 0) {
    return raw
  }
  const fm = YAML.parse(raw.slice(3, end)) as Record<string, unknown>
  const body = raw.slice(end + 4)
  if (typeof fm.title === 'string') {
    fm.title = await translateText(fm.title, to, from)
  }
  if (typeof fm.summary === 'string') {
    fm.summary = await translateText(fm.summary, to, from)
  }
  if (Array.isArray(fm.gaps)) {
    fm.gaps = await Promise.all(
      fm.gaps.map((gap) => (typeof gap === 'string' ? translateText(gap, to, from) : gap)),
    )
  }
  const lines = body.split('\n')
  const next: string[] = []
  for (const line of lines) {
    const match = line.match(/^(Given|When|Then|And|But|Output|Outcome|Activates)\s+(.*)$/)
    if (match) {
      const translated = await translateText(match[2] ?? '', to, from)
      next.push(`${match[1]} ${translated}`)
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
    next.push(line)
  }
  return `---\n${YAML.stringify(fm).trim()}\n---${next.join('\n')}`
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2))
  const from = options.to === 'sv' ? 'en' : 'sv'
  const files = listCanonical(options.eventId, options.party)
  let stale = 0
  let wrote = 0

  for (const file of files) {
    const raw = readFileSync(file, 'utf8')
    const sourceSpecDigest = digest(raw)
    const parsed = parseFile(file)
    if (!parsed.document) {
      console.warn(`skip ${relative(REPO_ROOT, file)}: does not parse`)
      continue
    }

    const outPath = siblingPath(file, options.to, false)
    if (options.check) {
      if (!existsSync(outPath)) {
        console.log(`MISSING ${relative(REPO_ROOT, outPath)}`)
        stale += 1
        continue
      }
      const existing = readFileSync(outPath, 'utf8')
      if (!existing.includes(sourceSpecDigest)) {
        console.log(`STALE ${relative(REPO_ROOT, outPath)}`)
        stale += 1
      }
      continue
    }

    const translated = await translateMarkdown(raw, options.to, from)
    const end = translated.indexOf('\n---', 3)
    const fm = YAML.parse(translated.slice(3, end)) as Record<string, unknown>
    fm.lang = options.to
    fm.translationOf = parsed.document.frontmatter?.id ?? basename(file, '.spec.md')
    fm.translator = 'machine'
    fm.translatedAt = new Date().toISOString().slice(0, 10)
    fm.sourceSpecDigest = sourceSpecDigest
    const body = translated.slice(end + 4)
    writeFileSync(outPath, `---\n${YAML.stringify(fm).trim()}\n---${body}`, 'utf8')
    wrote += 1
    console.log(`wrote ${relative(REPO_ROOT, outPath)}`)
    await sleep(200)
  }

  if (options.check && stale > 0) {
    process.exitCode = 1
  }
  console.log(options.check ? `${stale} stale/missing` : `wrote ${wrote} file(s)`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
