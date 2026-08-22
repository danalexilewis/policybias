import { describe, expect, it } from 'vitest'
import { documentFallbackUrl, isScoresPath } from './documentFallback'

describe('documentFallbackUrl', () => {
  it('maps each event path onto that event shell', () => {
    expect(documentFallbackUrl('/nz-election-2026/game')).toBe(
      '/nz-election-2026/index.html',
    )
    expect(documentFallbackUrl('/se-election-2026/questions')).toBe(
      '/se-election-2026/index.html',
    )
  })

  it('maps the directory onto its own shell', () => {
    expect(documentFallbackUrl('/')).toBe('/index.html')
  })

  it('leaves unknown paths unmatched', () => {
    expect(documentFallbackUrl('/terms/')).toBeUndefined()
  })
})

describe('isScoresPath', () => {
  it('matches the public dataset routes', () => {
    expect(isScoresPath('/nz-election-2026/scores')).toBe(true)
    expect(isScoresPath('/se-election-2026/scores/')).toBe(true)
    expect(isScoresPath('/nz-election-2026/game')).toBe(false)
  })
})
