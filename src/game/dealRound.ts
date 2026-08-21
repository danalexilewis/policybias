import type { PartyId, PolicyCard } from '../data/types'

export type DealRound = {
  cluster: string
  cards: [PolicyCard, PolicyCard, PolicyCard]
  targetParty: PartyId
  targetIndex: 0 | 1 | 2
}

export type DealState = {
  remaining: PolicyCard[]
  appearances: Record<PartyId, number>
  round: number
}

export const MAX_GAME_ROUNDS = 10

const ALL_PARTIES: PartyId[] = [
  'act',
  'green',
  'labour',
  'national',
  'nz-first',
  'opportunity',
  'te-pati-maori',
]

/** Mulberry32 — deterministic pseudo-random from a numeric seed. */
function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0
  return function nextRandom(): number {
    state = (state + 0x6d2b79f5) >>> 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Fisher–Yates shuffle (copied from wild-cards pattern). */
function fisherYatesShuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    const current = copy[index]
    const swap = copy[swapIndex]
    if (current === undefined || swap === undefined) {
      continue
    }
    copy[index] = swap
    copy[swapIndex] = current
  }
  return copy
}

function roundSeed(baseSeed: number, round: number): number {
  return (baseSeed + round * 1009) >>> 0
}

function emptyAppearances(): Record<PartyId, number> {
  return {
    act: 0,
    green: 0,
    labour: 0,
    national: 0,
    'nz-first': 0,
    opportunity: 0,
    'te-pati-maori': 0,
  }
}

function eligibleClusters(remaining: PolicyCard[]): string[] {
  const partiesByCluster = new Map<string, Set<PartyId>>()

  for (const card of remaining) {
    for (const cluster of card.clusters) {
      if (!partiesByCluster.has(cluster)) {
        partiesByCluster.set(cluster, new Set())
      }
      partiesByCluster.get(cluster)?.add(card.party)
    }
  }

  return [...partiesByCluster.entries()]
    .filter(([, parties]) => parties.size >= 3)
    .map(([cluster]) => cluster)
}

function cardsByPartyInCluster(
  cluster: string,
  remaining: PolicyCard[],
): Map<PartyId, PolicyCard[]> {
  const byParty = new Map<PartyId, PolicyCard[]>()

  for (const card of remaining) {
    if (!card.clusters.includes(cluster)) {
      continue
    }
    const pool = byParty.get(card.party) ?? []
    pool.push(card)
    byParty.set(card.party, pool)
  }

  return byParty
}

function pickPartiesForRound(
  byParty: Map<PartyId, PolicyCard[]>,
  appearances: Record<PartyId, number>,
  random: () => number,
): PartyId[] | null {
  const eligibleParties = [...byParty.keys()]
  if (eligibleParties.length < 3) {
    return null
  }

  const orderedParties = [...eligibleParties].sort((left, right) => {
    const appearanceGap = appearances[left] - appearances[right]
    if (appearanceGap !== 0) {
      return appearanceGap
    }
    return left.localeCompare(right)
  })

  const shuffled = fisherYatesShuffle(orderedParties, random)
  return shuffled.slice(0, 3)
}

function pickThreeCards(
  cluster: string,
  remaining: PolicyCard[],
  appearances: Record<PartyId, number>,
  random: () => number,
): [PolicyCard, PolicyCard, PolicyCard] | null {
  const byParty = cardsByPartyInCluster(cluster, remaining)
  const parties = pickPartiesForRound(byParty, appearances, random)
  if (!parties) {
    return null
  }

  const cards = parties.map((party) => {
    const pool = fisherYatesShuffle(byParty.get(party) ?? [], random)
    return pool[0]
  })

  if (cards.some((card) => card === undefined)) {
    return null
  }

  return cards as [PolicyCard, PolicyCard, PolicyCard]
}

function pickTargetParty(
  cards: [PolicyCard, PolicyCard, PolicyCard],
  targetAppearances: Record<PartyId, number>,
  random: () => number,
): { targetParty: PartyId; targetIndex: 0 | 1 | 2 } {
  const candidates = cards.map((card, index) => ({
    party: card.party,
    index: index as 0 | 1 | 2,
    count: targetAppearances[card.party] ?? 0,
  }))

  candidates.sort((left, right) => {
    if (left.count !== right.count) {
      return left.count - right.count
    }
    return left.index - right.index
  })

  const minimumCount = candidates[0]?.count ?? 0
  const tied = candidates.filter((candidate) => candidate.count === minimumCount)
  const picked = fisherYatesShuffle(tied, random)[0]
  if (!picked) {
    return { targetParty: cards[0].party, targetIndex: 0 }
  }

  return {
    targetParty: picked.party,
    targetIndex: picked.index,
  }
}

export function createDealState(cards: PolicyCard[], seed: number): DealState {
  void seed
  return {
    remaining: [...cards],
    appearances: emptyAppearances(),
    round: 0,
  }
}

export function dealRound(
  state: DealState,
  seed: number,
): { round: DealRound; next: DealState } | { done: true; next: DealState } {
  if (state.round >= MAX_GAME_ROUNDS || state.remaining.length < 3) {
    return { done: true, next: state }
  }

  const random = createSeededRandom(roundSeed(seed, state.round))
  const clusters = fisherYatesShuffle(eligibleClusters(state.remaining), random)

  for (const cluster of clusters) {
    const cards = pickThreeCards(cluster, state.remaining, state.appearances, random)
    if (!cards) {
      continue
    }

    const partiesInRound = new Set(cards.map((card) => card.party))
    if (partiesInRound.size !== 3) {
      continue
    }

    const { targetParty, targetIndex } = pickTargetParty(cards, state.appearances, random)
    const usedIds = new Set(cards.map((card) => card.id))
    const nextAppearances = { ...state.appearances }

    for (const card of cards) {
      nextAppearances[card.party] += 1
    }

    return {
      round: {
        cluster,
        cards,
        targetParty,
        targetIndex,
      },
      next: {
        remaining: state.remaining.filter((card) => !usedIds.has(card.id)),
        appearances: nextAppearances,
        round: state.round + 1,
      },
    }
  }

  return { done: true, next: state }
}

/** Deal every round in a session — useful for tests and debugging. */
export function dealAllRounds(
  cards: PolicyCard[],
  seed: number,
): DealRound[] {
  let state = createDealState(cards, seed)
  const rounds: DealRound[] = []

  while (rounds.length < MAX_GAME_ROUNDS) {
    const result = dealRound(state, seed)
    state = result.next
    if ('done' in result) {
      break
    }
    rounds.push(result.round)
  }

  return rounds
}

export { ALL_PARTIES }
