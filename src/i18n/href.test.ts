import { describe, expect, it } from 'vitest'
import { withLangQuery } from './href'

describe('withLangQuery', () => {
  it('omits lang when it matches the canonical language', () => {
    expect(withLangQuery('/terms/', 'en', 'en')).toBe('/terms/')
    expect(withLangQuery('/nz-election-2026/scores', 'en', 'en')).toBe(
      '/nz-election-2026/scores',
    )
  })

  it('adds lang when it differs from the canonical language', () => {
    expect(withLangQuery('/terms/', 'mi', 'en')).toBe('/terms/?lang=mi')
    expect(withLangQuery('/se-election-2026/scores', 'en', 'sv')).toBe(
      '/se-election-2026/scores?lang=en',
    )
  })
})
