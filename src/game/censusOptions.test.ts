import { describe, expect, it } from 'vitest'
import { ageBandLabel, ageRangeOptions, ethnicityOptions } from './censusOptions'

describe('censusOptions', () => {
  it('keeps Stats NZ style adult bands for the NZ event', () => {
    expect(
      ageRangeOptions('nz-election-2026', 'en').map((option) => option.id),
    ).toEqual([
      'under-18',
      '18-24',
      '25-34',
      '35-44',
      '45-54',
      '55-64',
      '65-plus',
    ])
    expect(
      ethnicityOptions('nz-election-2026', 'en').map((option) => option.id),
    ).toContain('maori')
  })

  it('uses SCB 10-year age classes and Swedish ethnicity groups', () => {
    expect(
      ageRangeOptions('se-election-2026', 'sv').map((option) => option.id),
    ).toEqual([
      'under-18',
      '18-19',
      '20-29',
      '30-39',
      '40-49',
      '50-59',
      '60-69',
      '70-79',
      '80-plus',
    ])
    expect(
      ethnicityOptions('se-election-2026', 'sv').map((option) => option.id),
    ).toEqual([
      'swedish',
      'nordic',
      'european',
      'african',
      'persian',
      'asian',
      'other',
    ])
    expect(
      ethnicityOptions('se-election-2026', 'sv').find(
        (option) => option.id === 'swedish',
      )?.label,
    ).toBe('Svensk')
  })

  it('labels the NZ ethnicity options in te reo Māori', () => {
    expect(
      ethnicityOptions('nz-election-2026', 'mi').map((option) => option.label),
    ).toContain('Pākehā')
  })

  it('derives age band labels from the id, translating only the open ends', () => {
    expect(ageBandLabel('25-34', 'mi')).toBe('25–34')
    expect(ageBandLabel('under-18', 'en')).toBe('Under 18')
    expect(ageBandLabel('under-18', 'mi')).toBe('I raro i te 18')
    expect(ageBandLabel('65-plus', 'sv')).toBe('65+')
  })
})
