import { describe, expect, it } from 'vitest'
import { PARTY_COLOURS } from '../card/anonymise'
import { CLUSTER_COLOURS, clusterColour } from './clusterColours'
import {
  chipText,
  contrastRatio,
  contrastingText,
  INK,
  meetsAaBody,
  PAPER,
  WHITE,
} from './contrast'

const ACCENT = '#1a0dab'

describe('contrastingText', () => {
  it('puts white on the accent blue, not ink', () => {
    expect(meetsAaBody(INK, ACCENT)).toBe(false)
    expect(contrastingText(ACCENT)).toBe(WHITE)
    expect(meetsAaBody(WHITE, ACCENT)).toBe(true)
  })

  it('puts ink on Opportunity teal, which fails with white', () => {
    expect(meetsAaBody(WHITE, PARTY_COLOURS.opportunity)).toBe(false)
    expect(contrastingText(PARTY_COLOURS.opportunity)).toBe(INK)
    expect(meetsAaBody(INK, PARTY_COLOURS.opportunity)).toBe(true)
  })

  it('gives every category fill a 4.5:1 text colour', () => {
    for (const [id, fill] of Object.entries(CLUSTER_COLOURS)) {
      const text = contrastingText(fill)
      expect(meetsAaBody(text, fill), `${id} ${text} on ${fill}`).toBe(true)
    }
    const fallback = clusterColour('unknown-cluster')
    expect(meetsAaBody(contrastingText(fallback), fallback)).toBe(true)
  })

  it('puts cream type on every named category fill', () => {
    for (const [id, fill] of Object.entries(CLUSTER_COLOURS)) {
      expect(chipText(fill), id).toBe(PAPER)
      expect(meetsAaBody(PAPER, fill), `${id} cream on ${fill}`).toBe(true)
    }
  })

  it('gives every party fill a 4.5:1 text colour', () => {
    for (const [id, fill] of Object.entries(PARTY_COLOURS)) {
      const text = contrastingText(fill)
      expect(meetsAaBody(text, fill), `${id} ${text} on ${fill}`).toBe(true)
    }
  })
})

describe('contrastRatio', () => {
  it('is 1 for identical colours', () => {
    expect(contrastRatio(INK, INK)).toBe(1)
  })
})
