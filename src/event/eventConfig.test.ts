import { describe, expect, it } from 'vitest'
import { EVENT_IDS, eventLangs } from './events'
import {
  eventAgeRangeIds,
  eventConfig,
  eventEthnicityIds,
  eventEthnicityLabel,
  eventPartyIds,
  eventPartyLabel,
} from './eventConfig'

describe('eventConfig', () => {
  it('lists the seven NZ parties and Stats NZ ethnicity options', () => {
    expect(eventPartyIds('nz-election-2026')).toEqual([
      'act',
      'green',
      'labour',
      'national',
      'nz-first',
      'opportunity',
      'te-pati-maori',
    ])
    expect(eventEthnicityIds('nz-election-2026')).toEqual([
      'european',
      'maori',
      'pacific',
      'asian',
      'melaa',
      'other',
    ])
    expect(eventAgeRangeIds('nz-election-2026')).toContain('25-34')
    expect(eventAgeRangeIds('nz-election-2026')).not.toContain('20-29')
  })

  it('lists the eight Swedish parties and the Swedish ethnicity groups', () => {
    expect(eventPartyIds('se-election-2026')).toHaveLength(8)
    expect(eventPartyIds('se-election-2026')).toContain('socialdemokraterna')
    expect(eventPartyIds('se-election-2026')).not.toContain('labour')
    expect(eventEthnicityIds('se-election-2026')).toEqual([
      'swedish',
      'nordic',
      'european',
      'african',
      'persian',
      'asian',
      'other',
    ])
    expect(eventEthnicityIds('se-election-2026')).not.toContain('maori')
    expect(eventAgeRangeIds('se-election-2026')).toContain('20-29')
  })

  it('labels every ethnicity in exactly the languages its event ships', () => {
    for (const eventId of EVENT_IDS) {
      const available = [...eventLangs(eventId).available].sort()
      for (const ethnicity of eventConfig(eventId).ethnicities) {
        expect(Object.keys(ethnicity.labels).sort()).toEqual(available)
        for (const label of Object.values(ethnicity.labels)) {
          expect(label.length).toBeGreaterThan(0)
        }
      }
    }
  })

  it('keeps te reo Māori off the Swedish population standard', () => {
    for (const ethnicity of eventConfig('se-election-2026').ethnicities) {
      expect(Object.keys(ethnicity.labels)).not.toContain('mi')
    }
  })

  it('translates the ethnicity categories an event does ship', () => {
    expect(eventEthnicityLabel('nz-election-2026', 'european', 'mi')).toBe(
      'Pākehā',
    )
    expect(eventEthnicityLabel('se-election-2026', 'persian', 'sv')).toBe(
      'Persisk',
    )
  })

  it('keeps party names as proper nouns across languages', () => {
    expect(eventPartyLabel('nz-election-2026', 'te-pati-maori', 'mi')).toBe(
      'Te Pāti Māori',
    )
    expect(eventPartyLabel('nz-election-2026', 'te-pati-maori', 'en')).toBe(
      'Te Pāti Māori',
    )
    expect(eventPartyLabel('se-election-2026', 'moderaterna', 'en')).toBe(
      'Moderaterna',
    )
  })
})
