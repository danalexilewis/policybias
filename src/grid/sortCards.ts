import type { ClusterMeta, PartyMeta, PolicyCard } from '../data/types'

export type GroupBy = 'none' | 'cluster' | 'party'

export type CardGroup = {
  id: string
  label: string
  cards: PolicyCard[]
}

export type NamedCount = {
  id: string
  label: string
  count: number
}

function clusterOrder(clusters: ClusterMeta[]): Map<string, number> {
  const order = new Map<string, number>()
  clusters.forEach((cluster, index) => {
    order.set(cluster.id, index)
  })
  return order
}

function compareByPartyThenId(a: PolicyCard, b: PolicyCard): number {
  const byParty = a.party.localeCompare(b.party)
  if (byParty !== 0) {
    return byParty
  }
  return a.id.localeCompare(b.id)
}

function compareByCluster(
  a: PolicyCard,
  b: PolicyCard,
  order: Map<string, number>,
): number {
  const aCluster = order.get(a.clusters[0] ?? '') ?? Number.MAX_SAFE_INTEGER
  const bCluster = order.get(b.clusters[0] ?? '') ?? Number.MAX_SAFE_INTEGER
  return aCluster - bCluster
}

/** Mulberry32 — the same generator the game uses to deal rounds. */
function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0
  return function nextRandom(): number {
    state = (state + 0x6d2b79f5) >>> 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Fisher–Yates shuffle, stable for a given seed. */
export function shuffleCards(
  cards: PolicyCard[],
  seed: number,
): PolicyCard[] {
  const random = createSeededRandom(seed)
  const copy = cards.slice()
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

/** Wall order: primary cluster, then party, then card id. */
export function sortCards(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
): PolicyCard[] {
  const order = clusterOrder(clusters)
  return cards.slice().sort((a, b) => {
    const byCluster = compareByCluster(a, b, order)
    if (byCluster !== 0) {
      return byCluster
    }
    return compareByPartyThenId(a, b)
  })
}

function bucketCards(
  cards: PolicyCard[],
  keyFor: (card: PolicyCard) => string,
): Map<string, PolicyCard[]> {
  const buckets = new Map<string, PolicyCard[]>()
  for (const card of cards) {
    const key = keyFor(card)
    const bucket = buckets.get(key) ?? []
    bucket.push(card)
    buckets.set(key, bucket)
  }
  return buckets
}

function groupsFromBuckets(
  buckets: Map<string, PolicyCard[]>,
  keys: Array<{ id: string; label: string }>,
  sortGroup: (cards: PolicyCard[]) => PolicyCard[],
): CardGroup[] {
  const groups: CardGroup[] = []
  const seen = new Set<string>()

  for (const key of keys) {
    seen.add(key.id)
    const bucket = buckets.get(key.id)
    if (!bucket || bucket.length === 0) {
      continue
    }
    groups.push({ id: key.id, label: key.label, cards: sortGroup(bucket) })
  }

  for (const [id, bucket] of buckets) {
    if (seen.has(id) || bucket.length === 0) {
      continue
    }
    groups.push({ id, label: id, cards: sortGroup(bucket) })
  }

  return groups
}

function countNamed(
  cards: PolicyCard[],
  keys: Array<{ id: string; label: string }>,
  matches: (card: PolicyCard, id: string) => boolean,
): NamedCount[] {
  return keys.flatMap((key) => {
    const count = cards.filter((card) => matches(card, key.id)).length
    if (count === 0) {
      return []
    }
    return [{ id: key.id, label: key.label, count }]
  })
}

/** How many cards sit in each cluster, in cluster list order. Empty clusters are omitted. */
export function countByCluster(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
): NamedCount[] {
  return countNamed(cards, clusters, (card, id) => card.clusters.includes(id))
}

/** How many cards sit with each party, in party list order. Empty parties are omitted. */
export function countByParty(
  cards: PolicyCard[],
  parties: PartyMeta[],
): NamedCount[] {
  return countNamed(cards, parties, (card, id) => card.party === id)
}

/** Parties in this group versus parties in the field. */
export function partyCoverage(
  cards: PolicyCard[],
  parties: PartyMeta[],
): { have: number; of: number } {
  return {
    have: countByParty(cards, parties).length,
    of: parties.length,
  }
}

/** Parties with no cards in this set, in party list order. */
export function missingParties(
  cards: PolicyCard[],
  parties: PartyMeta[],
): PartyMeta[] {
  const present = new Set(
    countByParty(cards, parties).map((entry) => entry.id),
  )
  return parties.filter((party) => !present.has(party.id))
}

/** Party grouping is meaningless when party is hidden — fall back to the ungrouped wall. */
export function resolveGroupBy(
  groupBy: GroupBy,
  partyVisible: boolean,
): GroupBy {
  if (!partyVisible && groupBy === 'party') {
    return 'none'
  }
  return groupBy
}

/** Cards in the order they appear on the wall, including grouping. */
export function cardsInWallOrder(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
  parties: PartyMeta[],
  groupBy: GroupBy,
  partyVisible: boolean,
): PolicyCard[] {
  return groupCards(
    cards,
    clusters,
    parties,
    resolveGroupBy(groupBy, partyVisible),
  ).flatMap((group) => group.cards)
}

/** Split cards into labelled groups, omitting empty groups. */
export function groupCards(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
  parties: PartyMeta[],
  groupBy: GroupBy,
): CardGroup[] {
  if (groupBy === 'none') {
    return [{ id: 'all', label: '', cards }]
  }

  const order = clusterOrder(clusters)

  if (groupBy === 'party') {
    return groupsFromBuckets(
      bucketCards(cards, (card) => card.party),
      parties.map((party) => ({ id: party.id, label: party.label })),
      (bucket) =>
        bucket.slice().sort((a, b) => {
          const byCluster = compareByCluster(a, b, order)
          if (byCluster !== 0) {
            return byCluster
          }
          return a.id.localeCompare(b.id)
        }),
    )
  }

  return groupsFromBuckets(
    bucketCards(cards, (card) => card.clusters[0] ?? ''),
    clusters.map((cluster) => ({ id: cluster.id, label: cluster.label })),
    (bucket) => bucket.slice().sort(compareByPartyThenId),
  )
}
