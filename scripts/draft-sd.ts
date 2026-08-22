import { loadSeeds, processHtmlPage } from './dump.ts'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import * as cheerio from 'cheerio'

const CLUSTERS = [
  'health-care','schools-education','crime-justice','migration-integration',
  'elderly-welfare','climate-environment','economy-tax','energy-power','defence-security',
]
const seed = loadSeeds('se-election-2026', 'sverigedemokraterna')[0]!
const partyDir = join(process.cwd(), 'corpus/se-election-2026/sverigedemokraterna')
mkdirSync(partyDir, { recursive: true })

function digest(text: string): string {
  return `sha256-${createHash('sha256').update(text).digest('hex').slice(0, 16)}`
}

async function run(): Promise<void> {
  for (const [index, url] of seed.startUrls.entries()) {
    const cluster = CLUSTERS[index]!
    const pageRes = await fetch(url, { headers: { 'User-Agent': seed.userAgent ?? '' } })
    const html = await pageRes.text()
    await processHtmlPage(seed, url, partyDir, html, false)
    const slug = new URL(url).pathname.split('/').filter(Boolean).at(-1)!
    const dumpFile = join(partyDir, `${slug}.md`)
    const raw = existsSync(dumpFile) ? readFileSync(dumpFile, 'utf8') : html
    const end = raw.indexOf('\n---', 3)
    const body = end < 0 ? raw : raw.slice(end + 4)
    const $ = cheerio.load(html)
    const title = $('h1').first().text().trim() || slug
    const summary = $('p').first().text().trim().slice(0, 280) || title
    const id = `sverigedemokraterna-${slug}`
    const spec = `---
type: spec
id: ${id}
title: ${JSON.stringify(title)}
status: draft
updated: 2026-08-22
summary: ${JSON.stringify(summary)}
jurisdiction: SE
sources:
  - title: ${JSON.stringify(title)}
    url: ${url}
tags: [${cluster}]
party: sverigedemokraterna
clusters:
  - ${cluster}
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/${slug}.md
sourceDigest: ${JSON.stringify(digest(body))}
gaps:
  - cost is not stated on the page
---

# What the page states

> ${summary.replace(/\n/g, ' ')}

System: ${title}

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then the page names the intervention
Output ${summary.slice(0, 180)}
Outcome the claim is the party's stated position
`
    writeFileSync(join(partyDir, `${slug}.spec.md`), spec)
    writeFileSync(
      join(partyDir, `${slug}.derived.spec.md`),
      `---
type: spec
id: ${id}-derived
title: ${JSON.stringify(title + ' (reading)')}
status: draft
updated: 2026-08-22
jurisdiction: SE
derivesFrom: ${id}
party: sverigedemokraterna
clusters:
  - ${cluster}
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction.

System: ${title}

Scenario: A reader takes the page at its word
Given the stated spec ${id}
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
`,
    )
    console.log(cluster, url)
    await new Promise((r) => setTimeout(r, 10000))
  }
}

run()
