import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function readPage(name: 'terms' | 'privacy'): string {
  return readFileSync(join(root, name, 'index.html'), 'utf8')
}

describe('legal pages', () => {
  it('keeps terms short and open-source', () => {
    const html = readPage('terms')
    expect(html).toContain('<h1>Terms</h1>')
    expect(html).toContain('MIT')
    expect(html).toContain('without warranty')
    expect(html).toContain('href="/privacy/"')
    expect(html).not.toMatch(/by using this (site|website)/i)
  })

  it('keeps privacy short and specific to what we actually store', () => {
    const html = readPage('privacy')
    expect(html).toContain('<h1>Privacy</h1>')
    expect(html).toContain('We do not run accounts')
    expect(html).toContain('local storage')
    expect(html).toContain('public dataset')
    expect(html).toContain('Vercel')
    expect(html).toContain('href="/terms/"')
  })

  it('rewrites /terms and /privacy onto their html entries', () => {
    const vercel = JSON.parse(
      readFileSync(join(root, 'vercel.json'), 'utf8'),
    ) as { rewrites: { source: string; destination: string }[] }
    expect(vercel.rewrites).toEqual(
      expect.arrayContaining([
        { source: '/terms', destination: '/terms/index.html' },
        { source: '/terms/', destination: '/terms/index.html' },
        { source: '/privacy', destination: '/privacy/index.html' },
        { source: '/privacy/', destination: '/privacy/index.html' },
      ]),
    )
  })
})
