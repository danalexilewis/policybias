import { describe, expect, it } from 'vitest'
import type { CardFace, PartyId, PolicyCard } from '../data/types'
import {
  createDealState,
  dealAllRounds,
  dealRound,
  MAX_GAME_ROUNDS,
} from './dealRound'

function makeFace(title: string): CardFace {
  return {
    kind: 'stated',
    specId: title,
    title,
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
  }
}

function makeCard(
  id: string,
  party: PartyId,
  clusters: string[],
): PolicyCard {
  return {
    id,
    party,
    title: id,
    clusters,
    tags: [],
    money: 'no-figure',
    source: { title: id, url: 'https://example.test', path: id },
    gaps: [],
    assumptions: [],
    stated: makeFace(id),
    counts: { gaps: 0, assumptions: 0 },
  }
}

function buildFixtureCards(): PolicyCard[] {
  const parties: PartyId[] = ['act', 'labour', 'te-pati-maori', 'green', 'national', 'nz-first']
  const cards: PolicyCard[] = []

  for (const party of parties) {
    for (let index = 0; index < 4; index += 1) {
      cards.push(makeCard(`${party}-${index}`, party, ['tax-fiscal', 'health-access']))
    }
  }

  return cards
}

describe('dealRound', () => {
  it('deals three cards from three different parties', () => {
    const seed = 42
    const cards = buildFixtureCards()
    const result = dealRound(createDealState(cards, seed), seed)

    expect('round' in result).toBe(true)
    if (!('round' in result)) {
      return
    }

    const parties = result.round.cards.map((card) => card.party)
    expect(new Set(parties).size).toBe(3)
  })

  it('keeps the target party among the three shown cards', () => {
    const seed = 99
    const rounds = dealAllRounds(buildFixtureCards(), seed)

    for (const round of rounds) {
      const shownParties = round.cards.map((card) => card.party)
      expect(shownParties).toContain(round.targetParty)
      expect(round.cards[round.targetIndex].party).toBe(round.targetParty)
    }
  })

  it('never reuses a card in a session', () => {
    const seed = 7
    const rounds = dealAllRounds(buildFixtureCards(), seed)
    const seen = new Set<string>()

    for (const round of rounds) {
      for (const card of round.cards) {
        expect(seen.has(card.id)).toBe(false)
        seen.add(card.id)
      }
    }
  })

  it('reproduces the same deal sequence for the same seed', () => {
    const seed = 20260818
    const cards = buildFixtureCards()

    const first = dealAllRounds(cards, seed)
    const second = dealAllRounds(cards, seed)

    expect(first.length).toBe(second.length)
    expect(first.length).toBeGreaterThan(0)

    for (let index = 0; index < first.length; index += 1) {
      const left = first[index]
      const right = second[index]
      expect(left).toBeDefined()
      expect(right).toBeDefined()
      if (!left || !right) {
        continue
      }
      expect(left.cluster).toBe(right.cluster)
      expect(left.targetParty).toBe(right.targetParty)
      expect(left.targetIndex).toBe(right.targetIndex)
      expect(left.cards.map((card) => card.id)).toEqual(
        right.cards.map((card) => card.id),
      )
    }
  })

  it('plays one round on the current three-card exemplar dataset', () => {
    const seed = 1
    const cards = [
      makeCard('act-affordable-government', 'act', ['tax-fiscal']),
      makeCard('labour-capitalgainstax', 'labour', ['tax-fiscal']),
      makeCard('te-pati-maori-tax', 'te-pati-maori', ['tax-fiscal']),
    ]

    const first = dealRound(createDealState(cards, seed), seed)
    expect('round' in first).toBe(true)

    const second = dealRound(first.next, seed)
    expect('done' in second).toBe(true)
  })

  it('caps at ten rounds when enough cards exist', () => {
    const rounds = dealAllRounds(buildFixtureCards(), 1234)
    expect(rounds.length).toBeLessThanOrEqual(MAX_GAME_ROUNDS)
  })
})
