// @vitest-environment jsdom
import { renderHook, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { PolicyCard } from '../data/types'
import { ALL_VISIBLE } from '../card/CardDisplay'
import { useFilters } from './useFilters'

function makeCard(overrides: Partial<PolicyCard> = {}): PolicyCard {
  return {
    id: 'test-card',
    party: 'act',
    title: 'ACT: test policy',
    clusters: ['tax-fiscal'],
    tags: [],
    money: 'named-figure',
    source: { title: 'Source', url: 'https://example.com', path: 'test.md' },
    gaps: [],
    assumptions: [],
    stated: {
      kind: 'stated',
      specId: 'test-card',
      title: 'ACT: test policy',
      scenarios: [],
      report: { outputs: [], outcomes: [] },
      activates: [],
      counts: { scenarios: 0, steps: 0, outputs: 1, outcomes: 0, extrapolated: 0 },
    },
    counts: { gaps: 0, assumptions: 0 },
    ...overrides,
  }
}

describe('useFilters', () => {
  const cards = [
    makeCard({ id: 'act-1', party: 'act', clusters: ['tax-fiscal'] }),
    makeCard({
      id: 'labour-1',
      party: 'labour',
      clusters: ['health-access'],
      stated: {
        kind: 'stated',
        specId: 'labour-1',
        title: 'Labour: health',
        scenarios: [],
        report: { outputs: [], outcomes: [] },
        activates: [],
        counts: { scenarios: 0, steps: 0, outputs: 0, outcomes: 0, extrapolated: 0 },
      },
      derived: {
        kind: 'derived',
        specId: 'labour-1-derived',
        title: 'Labour reading',
        scenarios: [],
        report: { outputs: [], outcomes: [] },
        activates: [],
        counts: { scenarios: 0, steps: 0, outputs: 0, outcomes: 0, extrapolated: 0 },
      },
    }),
  ]

  it('returns all cards when no filters are active', () => {
    const { result } = renderHook(() => useFilters(cards))
    expect(result.current.filtered).toHaveLength(2)
    expect(result.current.display).toEqual(ALL_VISIBLE)
  })

  it('filters by cluster', () => {
    const { result } = renderHook(() => useFilters(cards))
    act(() => {
      result.current.toggleCluster('tax-fiscal')
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('act-1')
  })

  it('filters by party', () => {
    const { result } = renderHook(() => useFilters(cards))
    act(() => {
      result.current.toggleParty('labour')
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.party).toBe('labour')
  })

  it('filters by has-output', () => {
    const { result } = renderHook(() => useFilters(cards))
    act(() => {
      result.current.setHasOutput(true)
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('act-1')
  })

  it('filters by has-derived', () => {
    const { result } = renderHook(() => useFilters(cards))
    act(() => {
      result.current.setHasDerived(true)
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('labour-1')
  })

  it('anonymise hides party in display', () => {
    const { result } = renderHook(() => useFilters(cards))
    act(() => {
      result.current.setAnonymise(true)
    })
    expect(result.current.display.party).toBe(false)
    expect(result.current.display.title).toBe(true)
  })

  it('enriched starts off and can be toggled without hiding party', () => {
    const { result } = renderHook(() => useFilters(cards))
    expect(result.current.enriched).toBe(false)
    act(() => {
      result.current.setEnriched(true)
    })
    expect(result.current.enriched).toBe(true)
    expect(result.current.display.party).toBe(true)
  })
})
