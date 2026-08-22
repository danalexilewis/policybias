// @vitest-environment jsdom
import { renderHook, act } from '@testing-library/react'
import { withNuqsTestingAdapter } from 'nuqs/adapters/testing'
import { describe, expect, it } from 'vitest'
import type { PolicyCard } from '../data/types'
import { ALL_VISIBLE } from '../card/CardDisplay'
import { useFilters } from './useFilters'

function renderFilters(
  cards: PolicyCard[],
  searchParams?: string,
) {
  return renderHook(() => useFilters(cards), {
    wrapper: withNuqsTestingAdapter({
      searchParams,
      hasMemory: true,
    }),
  })
}

const ANONYMISED_DISPLAY = { ...ALL_VISIBLE, party: false }

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
    const { result } = renderFilters(cards)
    expect(result.current.filtered).toHaveLength(2)
    expect(result.current.anonymise).toBe(true)
    expect(result.current.display).toEqual(ANONYMISED_DISPLAY)
  })

  it('filters by cluster', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.toggleCluster('tax-fiscal')
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('act-1')
  })

  it('filters by party', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.setAnonymise(false)
      result.current.toggleParty('labour')
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.party).toBe('labour')
  })

  it('filters by has-output', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.setHasOutput(true)
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('act-1')
  })

  it('filters by has-derived', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.setHasDerived(true)
    })
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('labour-1')
  })

  it('anonymise can be turned off to show party', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.setAnonymise(false)
    })
    expect(result.current.display.party).toBe(true)
    expect(result.current.display.title).toBe(true)
  })

  it('starts ungrouped and can group by cluster or party', () => {
    const { result } = renderFilters(cards)
    expect(result.current.groupBy).toBe('none')
    act(() => {
      result.current.setGroupBy('cluster')
    })
    expect(result.current.groupBy).toBe('cluster')
    act(() => {
      result.current.setAnonymise(false)
      result.current.setGroupBy('party')
    })
    expect(result.current.groupBy).toBe('party')
  })

  it('clears party filters and party grouping when anonymise turns on', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.setAnonymise(false)
      result.current.setGroupBy('party')
      result.current.toggleParty('labour')
    })
    expect(result.current.filtered).toHaveLength(1)
    act(() => {
      result.current.setAnonymise(true)
    })
    expect(result.current.groupBy).toBe('none')
    expect(result.current.selectedParties.size).toBe(0)
    expect(result.current.filtered).toHaveLength(2)
  })

  it('keeps cluster grouping when anonymise turns on', () => {
    const { result } = renderFilters(cards)
    act(() => {
      result.current.setGroupBy('cluster')
      result.current.setAnonymise(false)
      result.current.setAnonymise(true)
    })
    expect(result.current.groupBy).toBe('cluster')
  })

  it('reads filters from the url so a shared board opens the same way', () => {
    const { result } = renderFilters(
      cards,
      '?anonymise=false&group=cluster&clusters=tax-fiscal&parties=act&output=true',
    )
    expect(result.current.anonymise).toBe(false)
    expect(result.current.groupBy).toBe('cluster')
    expect(result.current.filtered).toHaveLength(1)
    expect(result.current.filtered[0]?.id).toBe('act-1')
    expect(result.current.hasOutput).toBe(true)
  })
})
