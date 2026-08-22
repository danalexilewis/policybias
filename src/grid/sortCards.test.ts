import { describe, expect, it } from 'vitest'
import type { ClusterMeta, PartyMeta, PolicyCard } from '../data/types'
import {
  cardsInWallOrder,
  countByCluster,
  countByParty,
  groupCards,
  missingParties,
  partyCoverage,
  shuffleCards,
  sortCards,
} from './sortCards'

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

describe('cardsInWallOrder', () => {
  const cards = [
    makeCard('labour-b', 'labour', 'tax-fiscal'),
    makeCard('act-health', 'act', 'health-access'),
    makeCard('labour-a', 'labour', 'tax-fiscal'),
    makeCard('act-tax', 'act', 'tax-fiscal'),
  ]

  it('flattens grouped party order', () => {
    expect(
      cardsInWallOrder(cards, clusters, parties, 'party', true).map(
        (card) => card.id,
      ),
    ).toEqual(['act-tax', 'act-health', 'labour-a', 'labour-b'])
  })

  it('keeps incoming order when party grouping is hidden', () => {
    expect(
      cardsInWallOrder(cards, clusters, parties, 'party', false).map(
        (card) => card.id,
      ),
    ).toEqual(['labour-b', 'act-health', 'labour-a', 'act-tax'])
  })
})

describe('countByCluster', () => {
  it('counts cards per cluster in cluster list order, omitting empty ones', () => {
    const cards = [
      makeCard('labour-b', 'labour', 'tax-fiscal'),
      makeCard('act-health', 'act', 'health-access'),
      makeCard('labour-a', 'labour', 'tax-fiscal'),
    ]
    expect(countByCluster(cards, clusters)).toEqual([
      { id: 'tax-fiscal', label: 'Tax', count: 2 },
      { id: 'health-access', label: 'Health', count: 1 },
    ])
  })

  it('counts a card once per cluster it belongs to', () => {
    const card = makeCard('act-both', 'act', 'tax-fiscal')
    card.clusters = ['tax-fiscal', 'health-access']
    expect(countByCluster([card], clusters)).toEqual([
      { id: 'tax-fiscal', label: 'Tax', count: 1 },
      { id: 'health-access', label: 'Health', count: 1 },
    ])
  })
})

describe('countByParty', () => {
  it('counts cards per party in party list order, omitting empty ones', () => {
    const cards = [
      makeCard('labour-b', 'labour', 'tax-fiscal'),
      makeCard('act-health', 'act', 'health-access'),
      makeCard('labour-a', 'labour', 'tax-fiscal'),
    ]
    expect(countByParty(cards, parties)).toEqual([
      { id: 'act', label: 'ACT', count: 1 },
      { id: 'labour', label: 'Labour', count: 2 },
    ])
  })
})

describe('partyCoverage', () => {
  it('counts how many parties have cards against the party list', () => {
    const cards = [
      makeCard('labour-a', 'labour', 'tax-fiscal'),
      makeCard('labour-b', 'labour', 'tax-fiscal'),
    ]
    expect(partyCoverage(cards, parties)).toEqual({ have: 1, of: 2 })
  })
})

describe('missingParties', () => {
  it('returns parties with no cards, in party list order', () => {
    const cards = [makeCard('labour-a', 'labour', 'tax-fiscal')]
    expect(missingParties(cards, parties).map((party) => party.id)).toEqual([
      'act',
    ])
  })

  it('returns an empty list when every party has a card', () => {
    const cards = [
      makeCard('labour-a', 'labour', 'tax-fiscal'),
      makeCard('act-tax', 'act', 'tax-fiscal'),
    ]
    expect(missingParties(cards, parties)).toEqual([])
  })
})
