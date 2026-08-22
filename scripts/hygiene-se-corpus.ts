/**
 * SE dump hygiene: stamp digests, mark junk as not-policy, drop URL duplicates.
 *
 *   pnpm exec tsx scripts/hygiene-se-corpus.ts
 */

import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'
import { contentDigest, splitFrontMatter } from './dump.ts'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CORPUS = join(REPO_ROOT, 'corpus', 'se-election-2026')
const MAX_PDF_CHARS = 80_000

const NOT_POLICY_PATTERNS = [
  /var-politik-arkiv/,
  /kongress/,
  /basfolder/i,
  /centerpartiets-politik-fraga-c\.md$/,
  /centerpartiets-politik-centerpartiets-politik-a-o\.md$/,
]

const DROP_IN_FAVOUR_OF: Record<string, string> = {
  'liberalerna/politik-lss.md': 'liberalerna/politik-personlig-assistans.md',
  'socialdemokraterna/var-politik-sakerhet---val-2026.md': 'socialdemokraterna/sakerhet-val-2026.md',
  'socialdemokraterna/var-politik-ekonomi---val-2026.md': 'socialdemokraterna/ekonomi-val-2026.md',
  'socialdemokraterna/var-politik-valfard---val-2026.md': 'socialdemokraterna/valfard-val-2026.md',
}

function dumpFiles(party: string): string[] {
  return readdirSync(join(CORPUS, party)).filter(
    (name) => name.endsWith('.md') && !name.endsWith('.spec.md'),
  )
}

function writeDump(absolute: string, fields: Record<string, unknown>, body: string): void {
  const yaml = YAML.stringify(fields, { lineWidth: 0, defaultKeyType: 'PLAIN' })
  writeFileSync(absolute, `---\n${yaml}---\n\n${body.replace(/^\n+/, '')}`, 'utf8')
}

function main(): void {
  const parties = readdirSync(CORPUS).filter(
    (name) => !name.startsWith('_') && !name.startsWith('.'),
  )

  for (const [drop, keep] of Object.entries(DROP_IN_FAVOUR_OF)) {
    const dropPath = join(CORPUS, drop)
    const keepPath = join(CORPUS, keep)
    if (existsSync(dropPath) && existsSync(keepPath)) {
      unlinkSync(dropPath)
      console.log(`removed duplicate ${drop}`)
    }
  }

  for (const party of parties) {
    const directory = join(CORPUS, party)
    try {
      readdirSync(directory)
    } catch {
      continue
    }
    for (const file of dumpFiles(party)) {
      const absolute = join(directory, file)
      const raw = readFileSync(absolute, 'utf8')
      const split = splitFrontMatter(raw)
      if (!split) {
        continue
      }
      const fields = (YAML.parse(
        split.envelope.replace(/^---\n/, '').replace(/\n---\n*$/, ''),
      ) ?? {}) as Record<string, unknown>
      let body = split.body.replace(/^\n+/, '')
      let changed = false

      if (typeof fields.contentDigest !== 'string') {
        fields.contentDigest = contentDigest(body)
        changed = true
      }
      if (fields.contentLength !== body.length) {
        fields.contentLength = body.length
        changed = true
      }

      const repoRel = `${party}/${file}`
      const isJunkPath = NOT_POLICY_PATTERNS.some((pattern) => pattern.test(repoRel))
      const isThin = body.trim().length < 50
      const isIndex =
        /^(var-politik|politik|var-politik-a-till-o|var-politik-politik-a-till-o)\.md$/.test(file)

      if ((isJunkPath || isThin || isIndex) && fields.stance !== 'not-policy') {
        fields.stance = 'not-policy'
        changed = true
        console.log(`not-policy ${repoRel}`)
      }

      if (fields.contentType === 'pdf' && body.length > MAX_PDF_CHARS) {
        body = `${body.slice(0, MAX_PDF_CHARS)}\n\n[truncated: original dump exceeded ${MAX_PDF_CHARS} characters]\n`
        fields.contentDigest = contentDigest(body)
        fields.contentLength = body.length
        fields.stance = 'not-policy'
        changed = true
        console.log(`truncated pdf ${repoRel}`)
      }

      if (changed) {
        writeDump(absolute, fields, body)
      }
    }
  }
}

main()
