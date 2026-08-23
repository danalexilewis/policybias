/**
 * Scaffold stated + derived spec frontmatter from
 * corpus/se-election-2026/_analysis/flagship.yaml.
 *
 * Does not invent Then/Output from the first sentences on the page.
 * Author the steps from the dump page. Re-run will not overwrite existing specs
 * unless --force is passed.
 *
 *   pnpm exec tsx scripts/draft-flagship-specs.ts
 *   pnpm exec tsx scripts/draft-flagship-specs.ts --force
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
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
  repoPath: string
  pageDigest: string
  force: boolean
}): void {
  const id = `${args.party}-${args.slug}`.replace(/_/g, '-')
  const directory = join(CORPUS, args.party)
  const statedPath = join(directory, `${args.slug}.spec.md`)
  const derivedPath = join(directory, `${args.slug}.derived.spec.md`)
  if (!args.force && existsSync(statedPath) && existsSync(derivedPath)) {
    console.log(`skip ${args.party}/${args.slug}`)
    return
  }

  const stated = yamlBlock({
    type: 'spec',
    id,
    title: args.title,
    status: 'draft',
    updated: new Date().toISOString().slice(0, 10),
    summary: args.title,
    jurisdiction: 'SE',
    sources: [{ title: args.title, url: args.url }],
    tags: args.tags,
    party: args.party,
    clusters: [args.cluster],
    money: args.money,
    sourcePath: args.repoPath,
    sourceDigest: args.pageDigest,
    gaps: [],
  })

  const statedBody = `# What the page states

> Author a two-to-four sentence paraphrase of the page. Do not paste the first sentences.

System: ${args.title}

Scenario: Name the situation the page describes
`

  const derived = yamlBlock({
    type: 'spec',
    id: `${id}-derived`,
    title: `${args.title} read as a system`,
    status: 'draft',
    updated: new Date().toISOString().slice(0, 10),
    summary: `A reading of ${args.title}`,
    jurisdiction: 'SE',
    sources: [{ title: args.title, url: args.url }],
    tags: args.tags,
    derivesFrom: id,
    party: args.party,
    clusters: [args.cluster],
    money: args.money,
    sourcePath: args.repoPath,
    sourceDigest: args.pageDigest,
    assumptions: [],
  })

  const derivedBody = `# Our understanding

> State the finding. Do not restated the page.

System: ${args.title}

Scenario: Name the mechanism under analysis
`

  writeFileSync(statedPath, `${stated}${statedBody}`, 'utf8')
  writeFileSync(derivedPath, `${derived}${derivedBody}`, 'utf8')
  console.log(`scaffold ${args.party}/${args.slug}`)
}

function main(): void {
  const force = process.argv.includes('--force')
  const flagship = YAML.parse(
    readFileSync(join(CORPUS, '_analysis', 'flagship.yaml'), 'utf8'),
  ) as FlagshipFile

  for (const [party, clusters] of Object.entries(flagship.parties ?? {})) {
    for (const [cluster, file] of Object.entries(clusters)) {
      const absolute = join(CORPUS, party, file)
      if (!existsSync(absolute)) {
        console.warn(`missing ${party}/${file}`)
        continue
      }
      const raw = readFileSync(absolute, 'utf8')
      const { fields } = splitDump(raw)
      const slug = file.replace(/\.md$/, '')
      const title = typeof fields.title === 'string' ? fields.title : slug
      const url = typeof fields.sourceUrl === 'string' ? fields.sourceUrl : ''
      const tags = Array.isArray(fields.tags)
        ? fields.tags.filter((tag): tag is string => typeof tag === 'string')
        : []
      const money = typeof fields.money === 'string' ? fields.money : 'no-figure'
      writePair({
        party,
        slug,
        cluster,
        title,
        url,
        tags,
        money,
        repoPath: `corpus/${EVENT}/${party}/${file}`,
        pageDigest: digestOf(bodyAfterFrontmatter(raw)),
        force,
      })
    }
  }
}

main()
