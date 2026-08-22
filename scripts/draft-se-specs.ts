/**
 * Author a launch slice: one stated + derived spec per party per cluster.
 *
 *   pnpm exec tsx scripts/draft-se-specs.ts
 *
 * Reads crawled dump pages when present; otherwise fetches start URLs from
 * seeds and writes dump markdown plus Gurki specs.
 */

import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'
import YAML from 'yaml'
import { loadSeeds, processHtmlPage } from './dump.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const EVENT = 'se-election-2026'
const CLUSTERS = [
  'health-care',
  'schools-education',
  'crime-justice',
  'migration-integration',
  'elderly-welfare',
  'climate-environment',
  'economy-tax',
  'energy-power',
  'defence-security',
]

const KEYWORDS: Record<string, string[]> = {
  'health-care': ['sjukvard', 'hälsa', 'vård', 'kö', 'läkemedel', 'sjukhus'],
  'schools-education': ['skola', 'utbildning', 'lärare', 'friskola', 'betyg'],
  'crime-justice': ['brott', 'straff', 'gäng', 'polis', 'rätt'],
  'migration-integration': ['migration', 'asyl', 'invandr', 'integration', 'medborgar'],
  'elderly-welfare': ['äld', 'pension', 'omsorg', 'välfärd'],
  'climate-environment': ['klimat', 'miljö', 'utsläpp', 'natur'],
  'economy-tax': ['skatt', 'ekonomi', 'jobb', 'tillväxt', 'företag'],
  'energy-power': ['energi', 'kärnkraft', 'elpris', 'el '],
  'defence-security': ['försvar', 'nato', 'säkerhet', 'beredskap'],
}

function digest(text: string): string {
  return `sha256-${createHash('sha256').update(text).digest('hex').slice(0, 16)}`
}

function slugFromUrl(url: string): string {
  const path = new URL(url).pathname.replace(/\/+$/, '')
  const last = path.split('/').filter(Boolean).at(-1) ?? 'policy'
  return last.toLowerCase().replace(/[^a-z0-9-]+/g, '-').slice(0, 60)
}

function loadTopicClusters(): Map<string, string> {
  const parsed = YAML.parse(
    readFileSync(join(REPO_ROOT, 'corpus', EVENT, 'topics.yaml'), 'utf8'),
  ) as { topics?: { id?: string; usuallyCluster?: string }[] }
  const map = new Map<string, string>()
  for (const topic of parsed.topics ?? []) {
    if (topic.id && topic.usuallyCluster) {
      map.set(topic.id, topic.usuallyCluster)
    }
  }
  return map
}

const TOPIC_CLUSTERS = loadTopicClusters()

function clusterFromTags(tags: string[], used: Set<string>): string | undefined {
  for (const tag of tags) {
    const cluster = TOPIC_CLUSTERS.get(tag)
    if (cluster && !used.has(cluster)) {
      return cluster
    }
  }
  return undefined
}

function assignCluster(title: string, url: string, used: Set<string>, tags: string[] = []): string {
  const fromTags = clusterFromTags(tags, used)
  if (fromTags) {
    return fromTags
  }
  const hay = `${title} ${url}`.toLowerCase()
  for (const cluster of CLUSTERS) {
    if (used.has(cluster)) {
      continue
    }
    if (KEYWORDS[cluster].some((word) => hay.includes(word))) {
      return cluster
    }
  }
  return CLUSTERS.find((cluster) => !used.has(cluster)) ?? CLUSTERS[0]
}

function writeSpec(args: {
  party: string
  slug: string
  cluster: string
  title: string
  url: string
  summary: string
  body: string
  repoPath: string
  pageDigest: string
}): void {
  const id = `${args.party}-${args.slug}`
  const directory = join(REPO_ROOT, 'corpus', EVENT, args.party)
  mkdirSync(directory, { recursive: true })
  const specPath = join(directory, `${args.slug}.spec.md`)
  const derivedPath = join(directory, `${args.slug}.derived.spec.md`)
  const lines = args.body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 40)
    .slice(0, 4)
  const first = lines[0] ?? args.summary
  const second = lines[1] ?? args.title
  const spec = `---
type: spec
id: ${id}
title: ${JSON.stringify(args.title)}
status: draft
updated: 2026-08-22
summary: ${JSON.stringify(args.summary.slice(0, 280))}
jurisdiction: SE
sources:
  - title: ${JSON.stringify(args.title)}
    url: ${args.url}
tags: [${args.cluster}]
party: ${args.party}
clusters:
  - ${args.cluster}
money: no-figure
sourcePath: ${args.repoPath}
sourceDigest: ${JSON.stringify(args.pageDigest)}
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> ${first.replace(/\n/g, ' ').slice(0, 400)}

System: ${args.title}

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then ${second.replace(/\n/g, ' ').slice(0, 200)}
Output ${args.summary.slice(0, 200)}
Outcome the claim is the party's stated position
`
  writeFileSync(specPath, spec, 'utf8')
  writeFileSync(
    derivedPath,
    `---
type: spec
id: ${id}-derived
title: ${JSON.stringify(`${args.title} (reading)`)}
status: draft
updated: 2026-08-22
summary: ${JSON.stringify(`Our reading of ${args.title}`)}
jurisdiction: SE
derivesFrom: ${id}
party: ${args.party}
clusters:
  - ${args.cluster}
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: ${args.title}

Scenario: A reader takes the page at its word
Given the stated spec ${id}
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
`,
    'utf8',
  )
}

async function main(): Promise<void> {
  const seeds = loadSeeds(EVENT)
  for (const seed of seeds) {
    const partyDir = join(REPO_ROOT, 'corpus', EVENT, seed.id)
    mkdirSync(partyDir, { recursive: true })
    const dumps = existsSync(partyDir)
      ? readdirSync(partyDir).filter((name) => name.endsWith('.md') && !name.endsWith('.spec.md'))
      : []

    const used = new Set<string>()
    if (dumps.length >= 9) {
      for (const file of dumps) {
        if (used.size >= 9) {
          break
        }
        const raw = readFileSync(join(partyDir, file), 'utf8')
        const end = raw.indexOf('\n---', 3)
        const fm = YAML.parse(raw.slice(3, end < 0 ? 0 : end)) as {
          title?: string
          sourceUrl?: string
          tags?: string[]
        }
        const body = end < 0 ? raw : raw.slice(end + 4)
        const title = fm.title ?? file
        const url = fm.sourceUrl ?? seed.origin
        const cluster = assignCluster(title, url, used, fm.tags ?? [])
        used.add(cluster)
        const slug = file.replace(/\.md$/, '')
        writeSpec({
          party: seed.id,
          slug,
          cluster,
          title,
          url,
          summary: body.trim().split('\n').find((line) => line.length > 40) ?? title,
          body,
          repoPath: `corpus/${EVENT}/${seed.id}/${file}`,
          pageDigest: digest(body),
        })
      }
      continue
    }

    const indexUrl = seed.startUrls[0]
    if (!indexUrl) {
      console.warn(`skip ${seed.id}: no start url and no dumps`)
      continue
    }
    const indexRes = await fetch(indexUrl, { headers: { 'User-Agent': 'PolicyBiasPartyPolicyDump/1.0' } })
    const html = await indexRes.text()
    const $ = cheerio.load(html)
    const links: string[] = []
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href')
      if (!href) {
        return
      }
      try {
        const url = new URL(href, seed.origin).toString()
        const path = new URL(url).pathname
        if (seed.allowPathPrefixes.some((prefix) => path.startsWith(prefix)) && !links.includes(url)) {
          links.push(url)
        }
      } catch {
        return
      }
    })

    for (const url of links) {
      if (used.size >= 9) {
        break
      }
      const cluster = assignCluster(url, url, used)
      if (used.has(cluster) && used.size < 9 && KEYWORDS[cluster].every((word) => !url.toLowerCase().includes(word))) {
        // still take it if we need this cluster slot
      }
      used.add(cluster)
      const pageRes = await fetch(url, { headers: { 'User-Agent': 'PolicyBiasPartyPolicyDump/1.0' } })
      if (!pageRes.ok) {
        used.delete(cluster)
        continue
      }
      const pageHtml = await pageRes.text()
      await processHtmlPage(seed, url, partyDir, pageHtml, false)
      const slug = slugFromUrl(url)
      const dumpFile = join(partyDir, `${slug}.md`)
      const raw = existsSync(dumpFile) ? readFileSync(dumpFile, 'utf8') : pageHtml
      const end = raw.indexOf('\n---', 3)
      const body = end < 0 ? raw : raw.slice(end + 4)
      const $page = cheerio.load(pageHtml)
      const title = $page('h1').first().text().trim() || slug
      writeSpec({
        party: seed.id,
        slug,
        cluster,
        title,
        url,
        summary: $page('p').first().text().trim().slice(0, 280) || title,
        body,
        repoPath: `corpus/${EVENT}/${seed.id}/${slug}.md`,
        pageDigest: digest(body),
      })
      console.log(`${seed.id} ${cluster} ${url}`)
      await new Promise((resolve) => setTimeout(resolve, seed.crawlDelayMs ?? 400))
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
