import type { ClusterMeta, PartyMeta, PolicyCard } from '../data/types'

export type GroupBy = 'none' | 'cluster' | 'party'

export type CardGroup = {
  id: string
  label: string
  cards: PolicyCard[]
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

/** Split cards into labelled groups, omitting empty groups. */
export function groupCards(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
  parties: PartyMeta[],
  groupBy: GroupBy,
): CardGroup[] {
  if (groupBy === 'none') {
    return [{ id: 'all', label: '', cards: sortCards(cards, clusters) }]
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
