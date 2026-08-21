import { describe, expect, it } from 'vitest'
import {
  CLUSTER_TRIVIA,
  EXPECTED_CLUSTERS,
  TRIVIA_BANK_SIZE,
  pickClusterTrivia,
} from './clusterTrivia'

describe('pickClusterTrivia', () => {
  it('returns the first unused fact for a cluster', () => {
    const first = pickClusterTrivia({ cluster: 'tax-fiscal', usedIds: [] })
    expect(first?.id).toBe('tax-fiscal-gst')

    const second = pickClusterTrivia({
      cluster: 'tax-fiscal',
      usedIds: ['tax-fiscal-gst'],
    })
    expect(second?.id).toBe('tax-fiscal-cgt')
  })

  it('wraps when every fact in the cluster has been shown', () => {
    const usedIds = CLUSTER_TRIVIA.filter((item) => item.cluster === 'tax-fiscal').map(
      (item) => item.id,
    )
    const wrapped = pickClusterTrivia({ cluster: 'tax-fiscal', usedIds })
    expect(wrapped?.id).toBe('tax-fiscal-gst')
  })

  it('returns null for an unknown cluster', () => {
    expect(pickClusterTrivia({ cluster: 'not-a-cluster', usedIds: [] })).toBeNull()
  })

  it('holds a bank of 50 unique facts across the canvas clusters', () => {
    expect(CLUSTER_TRIVIA).toHaveLength(TRIVIA_BANK_SIZE)
    expect(new Set(CLUSTER_TRIVIA.map((item) => item.id)).size).toBe(
      TRIVIA_BANK_SIZE,
    )

    for (const cluster of EXPECTED_CLUSTERS) {
      const facts = CLUSTER_TRIVIA.filter((item) => item.cluster === cluster)
      expect(facts.length, cluster).toBeGreaterThanOrEqual(6)
    }
  })
})
