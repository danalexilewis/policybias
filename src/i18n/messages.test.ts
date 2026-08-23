import { describe, expect, it } from 'vitest'
import en from './en.json'
import mi from './mi.json'
import sv from './sv.json'
import { dictionaryKeys, translate } from './messages'

describe('chrome dictionaries', () => {
  it('keeps the same keys in English, Swedish, and Māori', () => {
    const keys = dictionaryKeys().sort()
    expect(Object.keys(sv).sort()).toEqual(keys)
    expect(Object.keys(mi).sort()).toEqual(keys)
    expect(Object.keys(en).sort()).toEqual(keys)
  })

  it('interpolates placeholders', () => {
    expect(translate('en', 'policyPosition', { n: 2, total: 3 })).toBe(
      'Policy 2 of 3',
    )
    expect(translate('sv', 'source')).toBe('Källa')
    expect(translate('mi', 'source')).toBe('Puna')
  })
})
