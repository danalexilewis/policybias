import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Readability } from '@mozilla/readability'
import * as cheerio from 'cheerio'
import { CheerioCrawler, Configuration, RobotsTxtFile } from 'crawlee'
import { JSDOM } from 'jsdom'
import TurndownService from 'turndown'
import YAML from 'yaml'

const USER_AGENT = 'PolicyBiasNZPartyPolicyDump/1.0 (local NZ party policy research)'
const FETCH_DELAY_MS = 1000
const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SEEDS_DIR = join(REPO_ROOT, 'corpus/nz-election-2026/_seeds')
export const CORPUS_DIR = join(REPO_ROOT, 'corpus/nz-election-2026')

export interface Seed {
  id: string
  name: string
  origin: string
  startUrls: string[]
  allowPathPrefixes: string[]
  maxPages: number
  /** Extra origins whose PDFs may be downloaded when linked from a crawled page. */
  pdfOrigins?: string[]
}

export type CatalogueFields = {
  tags?: string[]
  stance?: string | null
  money?: string | null
}

interface PageMeta {
  title: string
  canonicalUrl: string
  html: string
}

let lastFetchAt = 0

function parseArgs(argv: string[]): { partyId?: string; dryRun: boolean; reprocess: boolean } {
  let partyId: string | undefined
  let dryRun = false
  let reprocess = false

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--dry-run') {
      dryRun = true
      continue
    }
    if (arg === '--reprocess') {
      reprocess = true
      continue
    }
    if (arg === '--party') {
      partyId = argv[index + 1]
      index += 1
      continue
    }
    if (arg?.startsWith('--party=')) {
      partyId = arg.slice('--party='.length)
    }
  }

  return { partyId, dryRun, reprocess }
}

export function loadSeeds(partyId?: string): Seed[] {
  const files = readdirSync(SEEDS_DIR).filter((name) => name.endsWith('.yaml'))
  const seeds = files.map((name) => {
    const raw = readFileSync(join(SEEDS_DIR, name), 'utf8')
    return YAML.parse(raw) as Seed
  })

  if (!partyId) {
    return seeds
  }

  const match = seeds.find((seed) => seed.id === partyId)
  if (!match) {
    throw new Error(`Unknown party id "${partyId}". Expected one of: ${seeds.map((s) => s.id).join(', ')}`)
  }

  return [match]
}

async function waitForFetchSlot(): Promise<void> {
  const elapsed = Date.now() - lastFetchAt
  if (elapsed < FETCH_DELAY_MS) {
    await new Promise((resolve) => setTimeout(resolve, FETCH_DELAY_MS - elapsed))
  }
  lastFetchAt = Date.now()
}

export async function fetchBuffer(url: string): Promise<{ body: Buffer; contentType: string }> {
  await waitForFetchSlot()
  const response = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT },
    redirect: 'follow',
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }

  const contentType = response.headers.get('content-type') ?? ''
  const arrayBuffer = await response.arrayBuffer()
  return { body: Buffer.from(arrayBuffer), contentType }
}

async function printRobotsStatus(origin: string, startUrls: string[]): Promise<void> {
  const robotsUrl = new URL('/robots.txt', origin).toString()

  try {
    const robots = await RobotsTxtFile.find(robotsUrl)
    const disallowed = startUrls.filter((url) => !robots.isAllowed(url, USER_AGENT))
    if (disallowed.length > 0) {
      console.log(
        `robots: ${disallowed.length} start URL(s) disallowed for ${USER_AGENT}`,
      )
    } else {
      console.log(`robots: start URLs allowed; Crawlee enforces robots.txt for "${USER_AGENT}"`)
    }
  } catch {
    console.log('robots: robots.txt unavailable; proceeding with polite rate limits')
  }
}

function normalizeUrl(href: string, baseUrl: string): string | null {
  try {
    const url = new URL(href, baseUrl)
    url.hash = ''
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.replace(/\/+$/, '')
    }
    return url.toString()
  } catch {
    return null
  }
}

function sameOrigin(url: string, origin: string): boolean {
  try {
    return new URL(url).origin === new URL(origin).origin
  } catch {
    return false
  }
}

function originAllowedForPdf(url: string, seed: Seed): boolean {
  if (sameOrigin(url, seed.origin)) {
    return true
  }
  const extra = seed.pdfOrigins ?? []
  return extra.some((origin) => sameOrigin(url, origin))
}

function pathAllowed(pathname: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

function shouldSkipNavOnly(pathname: string): boolean {
  if (pathname === '/te') {
    return true
  }
  return false
}

export function slugFromPathname(pathname: string): string {
  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  if (!trimmed) {
    return 'index'
  }
  return trimmed.replace(/\//g, '-')
}

function hashSuffix(input: string): string {
  return createHash('sha256').update(input).digest('hex').slice(0, 8)
}

function assetFileName(url: string, contentType: string): string {
  const parsed = new URL(url)
  let pathname = parsed.pathname
  try {
    pathname = decodeURIComponent(pathname)
  } catch {
    // keep encoded pathname
  }
  const base = basename(pathname)
  const ext = extname(base) || (contentType.includes('pdf') ? '.pdf' : '.bin')
  const stem = base ? basename(base, extname(base)) : 'asset'
  const safeStem = stem.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'asset'
  return `${safeStem}-${hashSuffix(url)}${ext}`
}

/** Site chrome to drop from the extracted body (donate, nav, footer, signup). */
function chromeSelector(): string {
  return [
    'nav',
    'header',
    'footer',
    'aside',
    'form',
    'iframe',
    'script',
    'style',
    'noscript',
    '[role="banner"]',
    '[role="contentinfo"]',
    '[role="navigation"]',
    '[role="complementary"]',
    '#premium-navbar',
    '#premium-footer',
    '.premium-navbar',
    '.premium-footer',
    '.premium-social',
    '.geo-subscribe',
    '#get-updates',
    '.social-share-container',
    '.social-media-container',
    '[class*="social-share"]',
  ].join(', ')
}

function pickContentRoot($: cheerio.CheerioAPI): cheerio.Cheerio<any> {
  for (const selector of ['#main-wrapper', 'main', 'article', '[role="main"]']) {
    const $el = $(selector).first()
    if ($el.length > 0) {
      return $el
    }
  }
  return $('body')
}

function isChromeHeading(text: string): boolean {
  const normalised = text.replace(/\s+/g, ' ').trim().toLowerCase()
  return (
    normalised === 'menu' ||
    normalised === 'back' ||
    normalised === 'get updates' ||
    normalised === 'stay up to date' ||
    normalised === 'our policy'
  )
}

function stripChrome($: cheerio.CheerioAPI, $root: cheerio.Cheerio<any>): void {
  $root.find(chromeSelector()).remove()

  $root.find('h1, h2, h3, h4, h5, h6').each((_, element) => {
    const heading = $(element)
    if (isChromeHeading(heading.text())) {
      heading.remove()
    }
  })

  $root.find('a').each((_, element) => {
    const $anchor = $(element)
    const text = $anchor.text().replace(/\s+/g, ' ').trim().toLowerCase()
    const href = $anchor.attr('href') ?? ''
    if (
      text === 'back to main page' ||
      /^share on (facebook|twitter|linkedin|e-?mail)$/i.test(text) ||
      /facebook\.com\/share|twitter\.com\/share|linkedin\.com\/sharing|\/cdn-cgi\/l\/email-protection/i.test(
        href,
      )
    ) {
      $anchor.remove()
    }
  })
}

function extractPageMeta(html: string, pageUrl: string): PageMeta {
  const $page = cheerio.load(html)
  stripChrome($page, $page('body'))
  const strippedHtml = $page.html() ?? html

  let readabilityTitle: string | undefined
  let readabilityHtml: string | undefined

  try {
    const dom = new JSDOM(strippedHtml, { url: pageUrl })
    const article = new Readability(dom.window.document).parse()
    if (article?.content?.trim()) {
      readabilityHtml = article.content
      readabilityTitle = article.title?.trim()
    }
  } catch {
    // fall back to Cheerio chrome strip below
  }

  const title =
    readabilityTitle ||
    $page('meta[property="og:title"]').attr('content')?.trim() ||
    $page('h1').first().text().trim() ||
    $page('title').text().trim() ||
    pageUrl

  const canonical =
    $page('link[rel="canonical"]').attr('href')?.trim() ||
    pageUrl

  let contentHtml: string
  if (readabilityHtml) {
    const $article = cheerio.load(readabilityHtml)
    const $articleRoot = $article('body').length > 0 ? $article('body') : $article.root()
    stripChrome($article, $articleRoot)
    contentHtml = ($article('body').html() ?? $article.html()) ?? ''
  } else {
    const $content = pickContentRoot($page)
    stripChrome($page, $content)
    contentHtml = $content.html() ?? ''
  }

  return {
    title,
    canonicalUrl: normalizeUrl(canonical, pageUrl) ?? pageUrl,
    html: contentHtml,
  }
}

function isTrackingImage(src: string, width?: string, height?: string): boolean {
  const lower = src.toLowerCase()
  if (/(pixel|beacon|tracking|analytics|spacer|1x1)/.test(lower)) {
    return true
  }
  const w = Number.parseInt(width ?? '', 10)
  const h = Number.parseInt(height ?? '', 10)
  if ((w > 0 && w <= 2) || (h > 0 && h <= 2)) {
    return true
  }
  return false
}

/** Logos, electoral “shielded” badges, and social icons are not policy figures. */
function isChromeImage(src: string, alt?: string): boolean {
  const lower = src.toLowerCase()
  if (/(logo|shielded|social[-_]?icon)/.test(lower)) {
    return true
  }
  if (alt && /logo|shielded/i.test(alt)) {
    return true
  }
  try {
    const host = new URL(src).hostname.toLowerCase()
    if (host.includes('shielded.co.nz')) {
      return true
    }
  } catch {
    return false
  }
  return false
}

async function downloadAsset(
  assetUrl: string,
  assetsDir: string,
  dryRun: boolean,
): Promise<string | null> {
  if (dryRun) {
    return `./assets/${assetFileName(assetUrl, '')}`
  }

  const { body, contentType } = await fetchBuffer(assetUrl)
  const fileName = assetFileName(assetUrl, contentType)
  mkdirSync(assetsDir, { recursive: true })
  writeFileSync(join(assetsDir, fileName), body)
  return `./assets/${fileName}`
}

async function rewriteImages(
  html: string,
  pageUrl: string,
  origin: string,
  assetsDir: string,
  dryRun: boolean,
): Promise<string> {
  const $ = cheerio.load(html, null, false)

  for (const element of $('img').toArray()) {
    const img = $(element)
    const src = img.attr('src')?.trim()
    if (!src || src.startsWith('data:')) {
      img.remove()
      continue
    }

    const absolute = normalizeUrl(src, pageUrl)
    if (!absolute || !sameOrigin(absolute, origin)) {
      continue
    }

    if (
      isTrackingImage(absolute, img.attr('width'), img.attr('height')) ||
      isChromeImage(absolute, img.attr('alt'))
    ) {
      img.remove()
      continue
    }

    const localPath = await downloadAsset(absolute, assetsDir, dryRun)
    if (localPath) {
      img.attr('src', localPath)
    }
  }

  for (const element of $('a').toArray()) {
    const $anchor = $(element)
    if ($anchor.text().trim() === '' && $anchor.find('img').length === 0) {
      $anchor.remove()
    }
  }

  return $.html()
}

function htmlToMarkdown(html: string): string {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  })
  return cleanMarkdown(turndown.turndown(html).trim())
}

function isChromeMarkdownLine(line: string): boolean {
  const trimmed = line.trim()
  if (trimmed === '!' || trimmed === '#### Menu' || trimmed === '### Back') {
    return true
  }
  if (/^######\s+/.test(trimmed)) {
    return true
  }
  if (trimmed === 'Read more' || / - Click to read more$/i.test(trimmed)) {
    return true
  }
  if (/^#{1,6}\s+Our Policy\s*$/i.test(trimmed)) {
    return true
  }
  if (/^#{1,6}\s+GET UPDATES\s*$/i.test(trimmed)) {
    return true
  }
  if (/^\[back to main page\]\([^)]+\)\s*$/i.test(trimmed)) {
    return true
  }
  if (
    trimmed === 'Clear filters' ||
    /^Sort Newest\b/i.test(trimmed) ||
    /^Sorry, no results in your current filter/i.test(trimmed) ||
    trimmed === 'Showing of results'
  ) {
    return true
  }
  if (/Share on Facebook|Share on Twitter|Share on LinkedIn|Share by e-mail/i.test(trimmed)) {
    return true
  }
  return false
}

function indexOfNewsFeed(text: string): number {
  let from = 0
  while (from < text.length) {
    const relative = text.slice(from).search(/\n## News\n/)
    if (relative < 0) {
      return -1
    }
    const index = from + relative
    const window = text.slice(index, index + 800)
    if (/\[ALL NEWS\]/i.test(window) || /\[READ POST\]/i.test(window)) {
      return index
    }
    from = index + 1
  }
  return -1
}

function indexOfActFooter(text: string): number {
  let from = 0
  while (from < text.length) {
    const relative = text.slice(from).search(/\n### Stay up to date\n/i)
    if (relative < 0) {
      return -1
    }
    const index = from + relative
    const window = text.slice(index, index + 800)
    if (/donate|Join us|\]\(\.\/policies\)/i.test(window)) {
      return index
    }
    from = index + 1
  }
  return -1
}

function cutChromeTail(text: string): string {
  const candidates: number[] = []

  const actFooter = indexOfActFooter(text)
  if (actFooter >= 0) {
    candidates.push(actFooter)
  }

  const newsFeed = indexOfNewsFeed(text)
  if (newsFeed >= 0) {
    candidates.push(newsFeed)
  }

  const patterns = [
    /\nStay up to date with /i,
    /\n\*\*Chip in\*\*/,
    /\nChip in\n/,
    /\nSupport our movement today\n/,
    /\n#### GET UPDATES\b/i,
    /\n## Are you super-rich and will you be taxed\?/,
    /\n###### Authorised by /i,
  ]
  for (const pattern of patterns) {
    const matchIndex = text.search(pattern)
    if (matchIndex >= 0) {
      candidates.push(matchIndex)
    }
  }

  if (candidates.length === 0) {
    return text
  }
  return text.slice(0, Math.min(...candidates))
}

function unwrapHeadingAnchors(text: string): string {
  return text.replace(
    /^(#{1,6})\s+\[(.+)\]\(#[^)]+\)\s*$/gm,
    '$1 $2',
  )
}

function dropDuplicateParagraphs(text: string): string {
  const blocks = text.split(/\n{2,}/)
  const kept: string[] = []
  for (const block of blocks) {
    const previous = kept[kept.length - 1]
    if (previous !== undefined && previous.trim() === block.trim()) {
      continue
    }
    kept.push(block)
  }
  return kept.join('\n\n')
}

/** Drop leftover donate/social/footer text if HTML strip missed a widget. */
export function cleanMarkdown(markdown: string): string {
  let text = markdown.replace(/\r\n/g, '\n')

  text = text.replace(
    /\[(?:!\[[^\]]*\]\([^)]+\))\]\([^)]*\)/g,
    (match) => (/logo|shielded/i.test(match) ? '' : match),
  )
  text = text.replace(/!\[[^\]]*\]\([^)]*(?:logo|shielded)[^)]*\)/gi, '')
  text = text.replace(/!\[Icon\]\([^)]+\)/gi, '')
  text = text.replace(/\[\s*!\s*\]\([^)]*\)/g, '')
  text = text.replace(/\[\s*\]\([^)]*\)/g, '')
  text = text.replace(/\[(?:\$\d+|Other)\]\(\/donate[^)]*\)/gi, '')

  text = text
    .split('\n')
    .filter((line) => !isChromeMarkdownLine(line))
    .join('\n')

  text = unwrapHeadingAnchors(text)
  text = cutChromeTail(text)
  text = dropDuplicateParagraphs(text)
  text = text.replace(/^(#{1,6}[^\n]+)\n(?!\n|#|$)/gm, '$1\n\n')
  text = text.replace(/\n{3,}/g, '\n\n')
  return text.trim()
}

function buildFrontMatter(fields: Record<string, unknown>): string {
  const yaml = YAML.stringify(fields, {
    lineWidth: 0,
    defaultKeyType: 'PLAIN',
    defaultStringType: 'QUOTE_DOUBLE',
  })
  return `---\n${yaml}---\n\n`
}

function writePageMarkdown(
  slug: string,
  fields: Record<string, unknown>,
  body: string,
  partyDir: string,
  dryRun: boolean,
): void {
  const filePath = join(partyDir, `${slug}.md`)
  const content = `${buildFrontMatter(fields)}${body}\n`

  if (dryRun) {
    return
  }

  mkdirSync(partyDir, { recursive: true })
  writeFileSync(filePath, content, 'utf8')
}

export function splitFrontMatter(raw: string): { envelope: string; body: string } | null {
  const match = raw.match(/^---\n[\s\S]*?\n---\n*/)
  if (!match) {
    return null
  }
  return { envelope: match[0], body: raw.slice(match[0].length) }
}

function catalogueFromExisting(filePath: string): CatalogueFields {
  if (!existsSync(filePath)) {
    return {}
  }
  const split = splitFrontMatter(readFileSync(filePath, 'utf8'))
  if (!split) {
    return {}
  }
  const envelope = split.envelope.replace(/^---\n/, '').replace(/\n---\n*$/, '')
  const parsed = YAML.parse(envelope) as Record<string, unknown>
  const tags = Array.isArray(parsed.tags)
    ? parsed.tags.filter((tag): tag is string => typeof tag === 'string')
    : undefined
  const stance =
    typeof parsed.stance === 'string' || parsed.stance === null ? parsed.stance : undefined
  const money = typeof parsed.money === 'string' ? parsed.money : undefined
  return { tags, stance, money }
}

function isPdfLink(href: string): boolean {
  try {
    const pathname = new URL(href).pathname.toLowerCase()
    return pathname.endsWith('.pdf')
  } catch {
    return href.toLowerCase().includes('.pdf')
  }
}

export async function processHtmlPage(
  seed: Seed,
  pageUrl: string,
  partyDir: string,
  html: string,
  dryRun: boolean,
  catalogue: CatalogueFields = {},
): Promise<string> {
  const meta = extractPageMeta(html, pageUrl)
  const assetsDir = join(partyDir, 'assets')
  const htmlWithAssets = await rewriteImages(meta.html, pageUrl, seed.origin, assetsDir, dryRun)
  const markdown = htmlToMarkdown(htmlWithAssets)
  const slug = slugFromPathname(new URL(pageUrl).pathname)
  const fetchedAt = new Date().toISOString()
  const existing = catalogueFromExisting(join(partyDir, `${slug}.md`))

  writePageMarkdown(
    slug,
    {
      type: 'crawled-page',
      party: seed.id,
      title: meta.title,
      sourceUrl: pageUrl,
      canonicalUrl: meta.canonicalUrl,
      fetchedAt,
      contentType: 'html',
      via: 'party-site',
      tags: existing.tags ?? catalogue.tags ?? [],
      stance: existing.stance !== undefined ? existing.stance : (catalogue.stance ?? null),
      ...(existing.money || catalogue.money
        ? { money: existing.money ?? catalogue.money }
        : {}),
      licenseNote: 'Party copyright; not Gurki MIT',
    },
    markdown,
    partyDir,
    dryRun,
  )

  const $ = cheerio.load(html)
  const pdfLinks = new Set<string>()
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href')?.trim()
    if (!href) {
      return
    }
    const absolute = normalizeUrl(href, pageUrl)
    if (!absolute || !isPdfLink(absolute)) {
      return
    }
    if (!originAllowedForPdf(absolute, seed)) {
      return
    }
    pdfLinks.add(absolute)
  })

  for (const pdfUrl of pdfLinks) {
    try {
      await processPdf(seed, pdfUrl, partyDir, dryRun)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.warn(`warn: failed PDF ${pdfUrl}: ${message}`)
    }
  }

  return slug
}

function extractPdfText(absolutePdfPath: string): string {
  const result = spawnSync('pdftotext', ['-layout', '-nopgbrk', absolutePdfPath, '-'], {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
  })
  if (result.status !== 0 || !result.stdout?.trim()) {
    return ''
  }
  return cleanMarkdown(result.stdout)
}

export async function processPdf(
  seed: Seed,
  pdfUrl: string,
  partyDir: string,
  dryRun: boolean,
): Promise<{ slug: string; text: string }> {
  const assetsDir = join(partyDir, 'assets')
  const localPath = await downloadAsset(pdfUrl, assetsDir, dryRun)
  if (!localPath) {
    return { slug: '', text: '' }
  }

  const fileName = basename(localPath)
  const decodedPath = decodeURIComponent(new URL(pdfUrl).pathname)
  const slug = `${slugFromPathname(decodedPath)
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')}-pdf`
  const existing = catalogueFromExisting(join(partyDir, `${slug}.md`))
  const extracted = dryRun ? '' : extractPdfText(join(assetsDir, fileName))
  const body = extracted
    ? `# ${fileName}\n\nDownloaded policy PDF: [${fileName}](${localPath})\n\n${extracted}`
    : `# PDF\n\nDownloaded policy PDF: [${fileName}](${localPath})`

  writePageMarkdown(
    slug,
    {
      type: 'crawled-page',
      party: seed.id,
      title: fileName,
      sourceUrl: pdfUrl,
      canonicalUrl: pdfUrl,
      fetchedAt: new Date().toISOString(),
      contentType: 'pdf',
      via: 'party-site',
      tags: existing.tags ?? [],
      stance: existing.stance !== undefined ? existing.stance : 'not-policy',
      ...(existing.money ? { money: existing.money } : {}),
      licenseNote: 'Party copyright; not Gurki MIT',
    },
    body,
    partyDir,
    dryRun,
  )

  return { slug, text: extracted }
}

function shouldEnqueueUrl(url: string, origin: string, allowPathPrefixes: string[]): boolean {
  if (!sameOrigin(url, origin)) {
    return false
  }
  const pathname = new URL(url).pathname
  if (!pathAllowed(pathname, allowPathPrefixes)) {
    return false
  }
  if (shouldSkipNavOnly(pathname)) {
    return false
  }
  return true
}

function partyDumpDirs(partyId?: string): string[] {
  if (partyId) {
    return [join(CORPUS_DIR, partyId)]
  }
  return readdirSync(CORPUS_DIR)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .map((name) => join(CORPUS_DIR, name))
    .filter((dir) => {
      try {
        return statSync(dir).isDirectory()
      } catch {
        return false
      }
    })
}

function reprocessDumpMarkdown(partyId: string | undefined, dryRun: boolean): void {
  let changed = 0
  let scanned = 0

  for (const partyDir of partyDumpDirs(partyId)) {
    if (!existsSync(partyDir)) {
      throw new Error(`Party dump directory not found: ${partyDir}`)
    }

    const files = readdirSync(partyDir).filter(
      (name) => name.endsWith('.md') && name !== 'README.md' && !name.endsWith('.spec.md'),
    )
    for (const name of files) {
      const filePath = join(partyDir, name)
      const raw = readFileSync(filePath, 'utf8')
      const split = splitFrontMatter(raw)
      if (!split) {
        continue
      }
      scanned += 1
      const next = `${split.envelope}${cleanMarkdown(split.body)}\n`
      if (next === raw) {
        continue
      }
      changed += 1
      if (dryRun) {
        console.log(`  would clean ${filePath}`)
        continue
      }
      writeFileSync(filePath, next, 'utf8')
      console.log(`  cleaned ${filePath}`)
    }
  }

  console.log(
    `${dryRun ? 'would clean' : 'cleaned'} ${changed} of ${scanned} dump file(s)`,
  )
}

async function dumpParty(seed: Seed, dryRun: boolean): Promise<void> {
  console.log(`\n== ${seed.name} (${seed.id}) ==`)
  await printRobotsStatus(seed.origin, seed.startUrls)

  const partyDir = join(CORPUS_DIR, seed.id)
  if (!dryRun) {
    mkdirSync(partyDir, { recursive: true })
  }

  const crawledUrls: string[] = []
  const config = new Configuration({ persistStorage: false })

  const crawler = new CheerioCrawler(
    {
      maxRequestsPerCrawl: seed.maxPages,
      maxConcurrency: 1,
      maxRequestsPerMinute: 60,
      respectRobotsTxtFile: { userAgent: USER_AGENT },
      useSessionPool: false,
      preNavigationHooks: [
        async (_context, gotOptions) => {
          gotOptions.headers = {
            ...gotOptions.headers,
            'User-Agent': USER_AGENT,
          }
        },
      ],
      async requestHandler({ request, body, contentType, enqueueLinks }) {
        const pageUrl = request.url
        const html = typeof body === 'string' ? body : body.toString('utf8')

        if (!contentType.type.includes('text/html')) {
          return
        }

        if (!shouldEnqueueUrl(pageUrl, seed.origin, seed.allowPathPrefixes)) {
          return
        }

        crawledUrls.push(pageUrl)

        if (!dryRun) {
          console.log(`  ${pageUrl}`)
          try {
            await processHtmlPage(seed, pageUrl, partyDir, html, dryRun)
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            console.warn(`warn: failed ${pageUrl}: ${message}`)
          }
        }

        await enqueueLinks({
          strategy: 'same-hostname',
          transformRequestFunction: (req) => {
            const normalized = normalizeUrl(req.url, pageUrl)
            if (!normalized) {
              return null
            }
            if (!shouldEnqueueUrl(normalized, seed.origin, seed.allowPathPrefixes)) {
              return null
            }
            return { ...req, url: normalized }
          },
        })
      },
    },
    config,
  )

  await crawler.run(seed.startUrls)

  console.log(`${dryRun ? 'would fetch' : 'fetched'} ${crawledUrls.length} page(s)`)
  if (dryRun) {
    for (const url of crawledUrls) {
      console.log(`  ${url}`)
    }
  }
}

async function main(): Promise<void> {
  const { partyId, dryRun, reprocess } = parseArgs(process.argv.slice(2))

  if (!existsSync(SEEDS_DIR)) {
    throw new Error(`Seeds directory not found: ${SEEDS_DIR}`)
  }

  if (reprocess) {
    if (partyId) {
      loadSeeds(partyId)
    }
    reprocessDumpMarkdown(partyId, dryRun)
    return
  }

  const seeds = loadSeeds(partyId)
  for (const seed of seeds) {
    await dumpParty(seed, dryRun)
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
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  })
}
