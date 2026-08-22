import { describe, expect, it } from 'vitest'
import type { ClusterMeta, PartyMeta, PolicyCard } from '../data/types'
import { groupCards, shuffleCards, sortCards } from './sortCards'

const clusters: ClusterMeta[] = [
  { id: 'tax-fiscal', label: 'Tax', description: '' },
  { id: 'health-access', label: 'Health', description: '' },
]

const parties: PartyMeta[] = [
  {
    id: 'act',
    label: 'ACT',
    name: 'ACT New Zealand',
    colour: '#fdb913',
    cardCount: 0,
  },
  {
    id: 'labour',
    label: 'Labour',
    name: 'New Zealand Labour Party',
    colour: '#d82c20',
    cardCount: 0,
  },
]

function makeCard(
  id: string,
  party: PolicyCard['party'],
  clusterId: string,
): PolicyCard {
  return {
    id,
    party,
    title: id,
    clusters: [clusterId],
    tags: [],
    money: 'no-figure',
    source: { title: 'Source', url: 'https://example.com', path: 'path' },
    gaps: [],
    assumptions: [],
    stated: {
      kind: 'stated',
      specId: id,
      title: id,
      scenarios: [],
      report: { outputs: [], outcomes: [] },
      activates: [],
      counts: {
        scenarios: 0,
        steps: 0,
        outputs: 0,
        outcomes: 0,
        extrapolated: 0,
      },
    },
    counts: { gaps: 0, assumptions: 0 },
  }
}

describe('shuffleCards', () => {
  const cards = [
    makeCard('labour-b', 'labour', 'tax-fiscal'),
    makeCard('act-health', 'act', 'health-access'),
    makeCard('labour-a', 'labour', 'tax-fiscal'),
    makeCard('act-tax', 'act', 'tax-fiscal'),
  ]

  it('reorders with a seed, and the same seed repeats', () => {
    const first = shuffleCards(cards, 7).map((card) => card.id)
    const second = shuffleCards(cards, 7).map((card) => card.id)
    expect(first).toEqual(second)
    expect(first).not.toEqual(cards.map((card) => card.id))
    expect(first.slice().sort()).toEqual(
      cards.map((card) => card.id).slice().sort(),
    )
  })
})

describe('sortCards', () => {
  it('orders by cluster list, then party, then id', () => {
    const cards = [
      makeCard('labour-b', 'labour', 'tax-fiscal'),
      makeCard('act-health', 'act', 'health-access'),
      makeCard('labour-a', 'labour', 'tax-fiscal'),
      makeCard('act-tax', 'act', 'tax-fiscal'),
    ]
    const sorted = sortCards(cards, clusters)
    expect(sorted.map((card) => card.id)).toEqual([
      'act-tax',
      'labour-a',
      'labour-b',
      'act-health',
    ])
  })
})

describe('groupCards', () => {
  const cards = [
    makeCard('labour-b', 'labour', 'tax-fiscal'),
    makeCard('act-health', 'act', 'health-access'),
    makeCard('labour-a', 'labour', 'tax-fiscal'),
    makeCard('act-tax', 'act', 'tax-fiscal'),
  ]

  it('groups by cluster list order, omitting empty clusters', () => {
    const groups = groupCards(cards, clusters, parties, 'cluster')
    expect(groups.map((group) => group.id)).toEqual([
      'tax-fiscal',
      'health-access',
    ])
    expect(groups[0]?.cards.map((card) => card.id)).toEqual([
      'act-tax',
      'labour-a',
      'labour-b',
    ])
    expect(groups[1]?.cards.map((card) => card.id)).toEqual(['act-health'])
  })

  it('keeps one unlabelled group in the incoming order when grouping is off', () => {
    const groups = groupCards(cards, clusters, parties, 'none')
    expect(groups).toHaveLength(1)
    expect(groups[0]?.id).toBe('all')
    expect(groups[0]?.label).toBe('')
    expect(groups[0]?.cards.map((card) => card.id)).toEqual([
      'labour-b',
      'act-health',
      'labour-a',
      'act-tax',
    ])
  })

  it('groups by party list order, then cluster within each party', () => {
    const groups = groupCards(cards, clusters, parties, 'party')
    expect(groups.map((group) => group.id)).toEqual(['act', 'labour'])
    expect(groups.map((group) => group.label)).toEqual(['ACT', 'Labour'])
    expect(groups[0]?.cards.map((card) => card.id)).toEqual([
      'act-tax',
      'act-health',
    ])
    expect(groups[1]?.cards.map((card) => card.id)).toEqual([
      'labour-a',
      'labour-b',
    ])
  })
})
