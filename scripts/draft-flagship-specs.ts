/**
 * Author stated + derived specs from corpus/se-election-2026/_analysis/flagship.yaml.
 *
 *   pnpm exec tsx scripts/draft-flagship-specs.ts
 */

import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'
import { bodyAfterFrontmatter, digestOf } from './check-policy.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const EVENT = 'se-election-2026'
const CORPUS = join(REPO_ROOT, 'corpus', EVENT)

type FlagshipFile = {
  parties: Record<string, Record<string, string>>
}

function splitDump(raw: string): { fields: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n*/)
  if (!match) {
    return { fields: {}, body: raw }
  }
  return {
    fields: (YAML.parse(match[1]) ?? {}) as Record<string, unknown>,
    body: raw.slice(match[0].length),
  }
}

function policyQuotes(body: string): string[] {
  const flattened = body
    .replace(/^#{1,6}\s+.*$/gm, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/^\s*\*\s+/gm, '')
    .replace(/\* \* \*/g, ' ')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const sentences = flattened
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 40)
    .filter((sentence) => !sentence.startsWith('<'))
    .filter((sentence) => !/^Kort info om/i.test(sentence))
    .filter((sentence) => !/kakor|När du besöker en webbplats/i.test(sentence))
    .filter((sentence) => !/^Senast uppdaterad/i.test(sentence))
    .filter((sentence) => !/Gå direkt till innehåll/i.test(sentence))
    .map((sentence) => (sentence.length > 280 ? sentence.slice(0, 280).trim() : sentence))
  const unique: string[] = []
  for (const sentence of sentences) {
    if (!unique.includes(sentence)) {
      unique.push(sentence)
    }
    if (unique.length >= 4) {
      break
    }
  }
  return unique
}

function yamlBlock(fields: Record<string, unknown>): string {
  return `---\n${YAML.stringify(fields, { lineWidth: 0, defaultKeyType: 'PLAIN' })}---\n\n`
}

function writePair(args: {
  party: string
  slug: string
  cluster: string
  title: string
  url: string
  tags: string[]
  money: string
  quotes: string[]
  repoPath: string
  pageDigest: string
}): void {
  const id = `${args.party}-${args.slug}`.replace(/_/g, '-')
  const thenText =
    args.quotes.find((quote) => !/\$|%/.test(quote)) ?? args.quotes[0] ?? args.title
  const outputText =
    args.quotes.find((quote) => quote !== thenText) ?? thenText
  const note = args.quotes[0] ?? args.title

  const stated = yamlBlock({
    type: 'spec',
    id,
    title: args.title,
    status: 'draft',
    updated: '2026-08-22',
    summary: outputText.slice(0, 280),
    jurisdiction: 'SE',
    sources: [{ title: args.title, url: args.url }],
    tags: args.tags,
    party: args.party,
    clusters: [args.cluster],
    money: args.money,
    sourcePath: args.repoPath,
    sourceDigest: args.pageDigest,
    gaps: ['cost is not stated on the page', 'timetable is not stated on the page'],
  })

  const statedBody = `# What the page states

> ${note}

System: ${args.title}

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then ${thenText}
Output ${outputText}
Outcome the claim is the party's stated position
`

  const derived = yamlBlock({
    type: 'spec',
    id: `${id}-derived`,
    title: `${args.title} (reading)`,
    status: 'draft',
    updated: '2026-08-22',
    summary: `Our reading of ${args.title}`,
    jurisdiction: 'SE',
    sources: [{ title: args.title, url: args.url }],
    tags: args.tags,
    derivesFrom: id,
    party: args.party,
    clusters: [args.cluster],
    money: args.money,
    sourcePath: args.repoPath,
    sourceDigest: args.pageDigest,
    assumptions: ['the page is the 2026 campaign position unless it says otherwise'],
  })

  const derivedBody = `# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: ${args.title}

Scenario: A reader takes the page at its word
Given the matching stated spec
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
`

  const directory = join(CORPUS, args.party)
  writeFileSync(join(directory, `${args.slug}.spec.md`), `${stated}${statedBody}`, 'utf8')
  writeFileSync(join(directory, `${args.slug}.derived.spec.md`), `${derived}${derivedBody}`, 'utf8')
}

function deleteContaminatedSpecs(): void {
  for (const party of readdirSync(CORPUS)) {
    const directory = join(CORPUS, party)
    try {
      for (const file of readdirSync(directory)) {
        if (file.endsWith('.spec.md')) {
          unlinkSync(join(directory, file))
        }
      }
    } catch {
      continue
    }
  }
}

function main(): void {
  const flagship = YAML.parse(
    readFileSync(join(CORPUS, '_analysis', 'flagship.yaml'), 'utf8'),
  ) as FlagshipFile

  deleteContaminatedSpecs()

  for (const [party, clusters] of Object.entries(flagship.parties ?? {})) {
    for (const [cluster, file] of Object.entries(clusters)) {
      const absolute = join(CORPUS, party, file)
      if (!existsSync(absolute)) {
        console.warn(`missing ${party}/${file}`)
        continue
      }
      const raw = readFileSync(absolute, 'utf8')
      const { fields, body } = splitDump(raw)
      const slug = file.replace(/\.md$/, '')
      const title = typeof fields.title === 'string' ? fields.title : slug
      const url = typeof fields.sourceUrl === 'string' ? fields.sourceUrl : ''
      const tags = Array.isArray(fields.tags)
        ? fields.tags.filter((tag): tag is string => typeof tag === 'string')
        : []
      const money = typeof fields.money === 'string' ? fields.money : 'no-figure'
      const quotes = policyQuotes(body)
      if (quotes.length === 0) {
        console.warn(`no quotes ${party}/${file}`)
        continue
      }
      writePair({
        party,
        slug,
        cluster,
        title,
        url,
        tags,
        money,
        quotes,
        repoPath: `corpus/${EVENT}/${party}/${file}`,
        pageDigest: digestOf(bodyAfterFrontmatter(raw)),
      })
      console.log(`${party} ${cluster} ${file}`)
    }
  }
}

main()
