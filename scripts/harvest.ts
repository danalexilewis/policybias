import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import {
  CORPUS_DIR,
  fetchBuffer,
  loadSeeds,
  processHtmlPage,
  processPdf,
  splitFrontMatter,
  type CatalogueFields,
  type Seed,
} from './dump.ts'

const PDF_APPENDIX = '## Party policy document (PDF)'

type HarvestItem = {
  party: string
  url: string
  kind: 'html' | 'pdf'
  attachTo?: string | string[]
  tags?: string[]
  stance?: string
  money?: string
}

type HarvestFile = { items: HarvestItem[] }

function attachPdfExtract(htmlPath: string, pdfUrl: string, text: string): void {
  if (!existsSync(htmlPath)) {
    throw new Error(`attachTo page missing: ${htmlPath}`)
  }
  const raw = readFileSync(htmlPath, 'utf8')
  const split = splitFrontMatter(raw)
  if (!split) {
    throw new Error(`no frontmatter on ${htmlPath}`)
  }
  const bodyWithout = split.body.split(`\n${PDF_APPENDIX}\n`)[0]?.trimEnd() ?? ''
  const appendix = `\n\n${PDF_APPENDIX}\n\n> Extracted from ${pdfUrl}. Party copyright; not Gurki MIT.\n\n${text.trim()}\n`
  writeFileSync(htmlPath, `${split.envelope}${bodyWithout}${appendix}`)
}

async function harvestPdf(seed: Seed, partyDir: string, item: HarvestItem): Promise<void> {
  const { text } = await processPdf(seed, item.url, partyDir, false)
  if (!text.trim()) {
    console.warn(`warn: no text extracted from ${item.url}`)
    return
  }
  const targets = item.attachTo
    ? Array.isArray(item.attachTo)
      ? item.attachTo
      : [item.attachTo]
    : []
  if (targets.length === 0) {
    console.warn(`warn: PDF ${item.url} has no attachTo page`)
    return
  }
  for (const slug of targets) {
    attachPdfExtract(join(partyDir, `${slug}.md`), item.url, text)
  }
}

/** Fetch listed party URLs without crawling hubs, and attach PDF text to the HTML page they belong to. */
async function harvest(filePath: string): Promise<void> {
  const list = YAML.parse(readFileSync(filePath, 'utf8')) as HarvestFile
  const seeds = new Map(loadSeeds().map((seed) => [seed.id, seed]))

  for (const item of list.items) {
    const seed = seeds.get(item.party)
    if (!seed) {
      throw new Error(`Unknown party "${item.party}"`)
    }
    const partyDir = join(CORPUS_DIR, seed.id)
    console.log(`  ${item.kind} ${item.url}`)

    if (item.kind === 'pdf') {
      await harvestPdf(seed, partyDir, item)
      continue
    }

    const { body, contentType } = await fetchBuffer(item.url)
    if (contentType.includes('application/pdf') || item.url.toLowerCase().includes('.pdf')) {
      console.warn(`warn: ${item.url} served PDF; attaching as a document`)
      await harvestPdf(seed, partyDir, { ...item, kind: 'pdf' })
      continue
    }
    if (!contentType.includes('text/html')) {
      console.warn(`warn: expected HTML at ${item.url}, got ${contentType}`)
      continue
    }
    const catalogue: CatalogueFields = {
      tags: item.tags,
      stance: item.stance ?? 'intervention',
      money: item.money,
    }
    await processHtmlPage(seed, item.url, partyDir, body.toString('utf8'), false, catalogue)
  }
}

const file = process.argv[2]
if (!file) {
  console.error('usage: tsx scripts/harvest.ts <harvest.yaml>')
  process.exit(1)
}

await harvest(file)
