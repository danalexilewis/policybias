import { describe, expect, it } from 'vitest'
import {
  CLUSTER_TRIVIA,
  EXPECTED_CLUSTERS,
  TRIVIA_BANK_SIZE,
  pickClusterTrivia,
} from './clusterTrivia'

describe('pickClusterTrivia', () => {
  it('does not repeat a fact already used this session', () => {
    const first = pickClusterTrivia({
      cluster: 'tax-fiscal',
      usedIds: [],
      seed: 42,
    })
    expect(first).not.toBeNull()

    const second = pickClusterTrivia({
      cluster: 'tax-fiscal',
      usedIds: [first!.id],
      seed: 42,
    })
    expect(second?.id).not.toBe(first?.id)
    expect(second).not.toBeNull()
  })

  it('returns null when every fact in the cluster has been shown', () => {
    const usedIds = CLUSTER_TRIVIA.filter((item) => item.cluster === 'tax-fiscal').map(
      (item) => item.id,
    )
    expect(pickClusterTrivia({ cluster: 'tax-fiscal', usedIds, seed: 42 })).toBeNull()
  })

  it('returns null for an unknown cluster', () => {
    expect(
      pickClusterTrivia({ cluster: 'not-a-cluster', usedIds: [], seed: 1 }),
    ).toBeNull()
  })

  it('starts at different facts across session seeds', () => {
    const firstIds = new Set<string>()
    for (let seed = 0; seed < 40; seed += 1) {
      const picked = pickClusterTrivia({
        cluster: 'tax-fiscal',
        usedIds: [],
        seed,
      })
      if (picked) {
        firstIds.add(picked.id)
      }
    }
    expect(firstIds.size).toBeGreaterThan(1)
  })

  it('holds unique facts across the canvas clusters', () => {
    expect(CLUSTER_TRIVIA).toHaveLength(TRIVIA_BANK_SIZE)
    expect(new Set(CLUSTER_TRIVIA.map((item) => item.id)).size).toBe(
      TRIVIA_BANK_SIZE,
    )

    for (const cluster of EXPECTED_CLUSTERS) {
      const facts = CLUSTER_TRIVIA.filter((item) => item.cluster === cluster)
      expect(facts.length, cluster).toBeGreaterThanOrEqual(8)
    }
  })
})
