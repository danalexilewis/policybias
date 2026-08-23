import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  renderDirectoryHtml,
  renderPrivacyHtml,
  renderTermsHtml,
} from '../src/i18n/staticPages.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

export function writeChromePages(root: string = ROOT): void {
  writeFileSync(join(root, 'index.html'), renderDirectoryHtml())
  mkdirSync(join(root, 'terms'), { recursive: true })
  mkdirSync(join(root, 'privacy'), { recursive: true })
  writeFileSync(join(root, 'terms/index.html'), renderTermsHtml())
  writeFileSync(join(root, 'privacy/index.html'), renderPrivacyHtml())
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
  writeChromePages()
}
