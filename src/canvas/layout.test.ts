import { describe, expect, it } from 'vitest'
import {
  layoutByCluster,
  layoutClusterOctagon,
  LAYOUT,
  clusterCardNodeId,
  clusterGridWidth,
  clusterLabelNodeId,
  clusterWashNodeId,
  type CardNodeData,
  type ClusterLabelNodeData,
  type OctagonGuideNodeData,
} from './layout'
import { ALL_VISIBLE } from '../card/CardDisplay'
import type { ClusterMeta, PolicyCard } from '../data/types'
import { CLUSTER_COLOURS } from './clusterColours'

const display = ALL_VISIBLE

const clusters: ClusterMeta[] = [
  {
    id: 'tax-fiscal',
    label: 'Tax and fiscal instruments',
    description: 'Tax bases and rates.',
  },
  {
    id: 'health-access',
    label: 'Health access and medicines',
    description: 'Primary care.',
  },
]

function makeCard(
  id: string,
  party: PolicyCard['party'],
  cardClusters: string[],
): PolicyCard {
  return {
    id,
    party,
    title: id,
    clusters: cardClusters,
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

const fixtureCards: PolicyCard[] = [
  makeCard('act-affordable-government', 'act', ['tax-fiscal']),
  makeCard('labour-capitalgainstax', 'labour', ['tax-fiscal']),
  makeCard('te-pati-maori-tax', 'te-pati-maori', ['tax-fiscal']),
]

const firstRowY = LAYOUT.topPadding
const columnStride = LAYOUT.columnWidth + LAYOUT.columnGap

describe('layoutByCluster', () => {
  it('passes enriched onto card node data', () => {
    const { nodes } = layoutByCluster(
      fixtureCards,
      clusters,
      display,
      {
        'act-affordable-government': 200,
        'labour-capitalgainstax': 200,
        'te-pati-maori-tax': 200,
      },
      true,
    )
    expect(
      nodes.every((node) => (node.data as CardNodeData).enriched === true),
    ).toBe(true)
  })

  it('does not emit cluster labels', () => {
    const { nodes } = layoutByCluster(fixtureCards, clusters, display, {
      'act-affordable-government': 200,
      'labour-capitalgainstax': 200,
      'te-pati-maori-tax': 200,
    })
    expect(nodes.filter((node) => node.type === 'clusterLabel')).toHaveLength(0)
  })

  it('emits cards in cluster-then-party-then-id order', () => {
    const { nodes } = layoutByCluster(fixtureCards, clusters, display, {
      'act-affordable-government': 200,
      'labour-capitalgainstax': 200,
      'te-pati-maori-tax': 200,
    })
    const cardNodes = nodes
      .filter((node) => node.type === 'card')
      .map((node) => node.id)
    expect(cardNodes).toEqual([
      'act-affordable-government',
      'labour-capitalgainstax',
      'te-pati-maori-tax',
    ])
  })

  it('packs cards across masonry columns from the left', () => {
    const { nodes } = layoutByCluster(fixtureCards, clusters, display, {
      'act-affordable-government': 200,
      'labour-capitalgainstax': 200,
      'te-pati-maori-tax': 200,
    })
    const act = nodes.find((node) => node.id === 'act-affordable-government')
    const labour = nodes.find((node) => node.id === 'labour-capitalgainstax')
    const tpm = nodes.find((node) => node.id === 'te-pati-maori-tax')
    expect(act?.position).toEqual({ x: 0, y: firstRowY })
    expect(labour?.position).toEqual({ x: columnStride, y: firstRowY })
    expect(tpm?.position).toEqual({ x: columnStride * 2, y: firstRowY })
  })

  it('places the next card under the shortest column', () => {
    const cards = Array.from({ length: LAYOUT.masonryColumns + 1 }, (_, index) =>
      makeCard(
        `card-${String(index).padStart(2, '0')}`,
        'act',
        ['tax-fiscal'],
      ),
    )
    const heights = Object.fromEntries(cards.map((card) => [card.id, 200]))
    const { nodes } = layoutByCluster(cards, clusters, display, heights)
    const overflow = nodes.find((node) => node.id === 'card-50')
    expect(overflow?.position).toEqual({
      x: 0,
      y: firstRowY + 200 + LAYOUT.cardGap,
    })
  })

  it('does not overlap cards when heights are known', () => {
    const cards = [
      makeCard('a', 'act', ['tax-fiscal']),
      makeCard('b', 'green', ['tax-fiscal']),
      makeCard('c', 'labour', ['tax-fiscal']),
      makeCard('d', 'national', ['tax-fiscal']),
    ]
    const heights = { a: 420, b: 180, c: 260, d: 200 }
    const { nodes } = layoutByCluster(cards, clusters, display, heights)
    const rects = nodes
      .filter((node) => node.type === 'card')
      .map((node) => ({
        id: node.id,
        x: node.position.x,
        y: node.position.y,
        w: LAYOUT.columnWidth,
        h: heights[node.id as keyof typeof heights],
      }))

    for (let i = 0; i < rects.length; i += 1) {
      for (let j = i + 1; j < rects.length; j += 1) {
        const left = rects[i]
        const right = rects[j]
        if (!left || !right) {
          continue
        }
        const overlap =
          left.x < right.x + right.w &&
          left.x + left.w > right.x &&
          left.y < right.y + right.h &&
          left.y + left.h > right.y
        expect(overlap, `${left.id} overlaps ${right.id}`).toBe(false)
      }
    }
  })

  it('places each card once in its primary cluster', () => {
    const { nodes } = layoutByCluster(fixtureCards, clusters, display, {
      'act-affordable-government': 200,
      'labour-capitalgainstax': 200,
      'te-pati-maori-tax': 200,
    })
    const labourNodes = nodes.filter(
      (node) => node.type === 'card' && node.id === 'labour-capitalgainstax',
    )
    expect(labourNodes).toHaveLength(1)
  })

  it('continues the same masonry across clusters', () => {
    const cards = [
      makeCard('act-tax', 'act', ['tax-fiscal']),
      makeCard('labour-health', 'labour', ['health-access']),
    ]
    const { nodes } = layoutByCluster(cards, clusters, display, {
      'act-tax': 300,
      'labour-health': 200,
    })
    const health = nodes.find((node) => node.id === 'labour-health')
    expect(health?.position).toEqual({ x: columnStride, y: firstRowY })
  })

  it('parks unmeasured cards off-canvas so they do not leave gaps', () => {
    const { nodes } = layoutByCluster(fixtureCards, clusters, display)
    for (const node of nodes) {
      expect(node.position.y).toBeLessThan(0)
    }
  })

  it('returns stable positions across calls', () => {
    const heights = {
      'act-affordable-government': 240,
      'labour-capitalgainstax': 240,
      'te-pati-maori-tax': 240,
    }
    const first = layoutByCluster(fixtureCards, clusters, display, heights)
    const second = layoutByCluster(fixtureCards, clusters, display, heights)
    expect(first.nodes).toEqual(second.nodes)
    expect(first.edges).toEqual(second.edges)
  })

  it('positions the first measured card at the top-left', () => {
    const { nodes } = layoutByCluster(fixtureCards, clusters, display, {
      'act-affordable-government': 200,
      'labour-capitalgainstax': 200,
      'te-pati-maori-tax': 200,
    })
    const firstCard = nodes.find((node) => node.id === 'act-affordable-government')
    expect(firstCard?.position.y).toBe(firstRowY)
    expect(firstCard?.position.x).toBe(0)
  })

  it('emits no edges', () => {
    const cards: PolicyCard[] = [
      {
        ...makeCard('card-a', 'act', ['tax-fiscal']),
        stated: {
          ...makeCard('card-a', 'act', ['tax-fiscal']).stated,
          activates: ['card-b', 'missing-card'],
        },
      },
      makeCard('card-b', 'labour', ['tax-fiscal']),
    ]

    const { edges } = layoutByCluster(cards, clusters, display, {
      'card-a': 200,
      'card-b': 200,
    })
    expect(edges).toHaveLength(0)
  })
})

const eightClusters: ClusterMeta[] = [
  { id: 'health-access', label: 'Health', description: 'Health.' },
  { id: 'energy-power', label: 'Energy', description: 'Energy.' },
  { id: 'tax-fiscal', label: 'Tax', description: 'Tax.' },
  { id: 'crime-justice', label: 'Crime', description: 'Crime.' },
  { id: 'immigration', label: 'Immigration', description: 'Immigration.' },
  { id: 'family-income', label: 'Family', description: 'Family.' },
  { id: 'environment-rural', label: 'Environment', description: 'Environment.' },
  { id: 'maori-affairs', label: 'Māori affairs', description: 'Te Tiriti.' },
]

function heightsFor(cards: PolicyCard[], height = 200): Record<string, number> {
  return Object.fromEntries(cards.map((card) => [card.id, height]))
}

function nodeBox(
  x: number,
  y: number,
  w: number,
  h: number,
): { x: number; y: number; w: number; h: number } {
  return { x, y, w, h }
}

function overlap(
  left: { x: number; y: number; w: number; h: number },
  right: { x: number; y: number; w: number; h: number },
): boolean {
  return (
    left.x < right.x + right.w &&
    left.x + left.w > right.x &&
    left.y < right.y + right.h &&
    left.y + left.h > right.y
  )
}

describe('layoutClusterOctagon', () => {
  it('places a wash, a label and an eight-column grid for every cluster', () => {
    const cards = eightClusters.map((cluster) =>
      makeCard(`card-${cluster.id}`, 'act', [cluster.id]),
    )
    const { nodes } = layoutClusterOctagon(
      cards,
      eightClusters,
      display,
      heightsFor(cards),
    )
    expect(nodes.filter((node) => node.type === 'clusterLabel')).toHaveLength(8)
    expect(nodes.filter((node) => node.type === 'clusterWash')).toHaveLength(8)
    expect(nodes.filter((node) => node.type === 'octagonGuide')).toHaveLength(1)
    for (const cluster of eightClusters) {
      const label = nodes.find((node) => node.id === clusterLabelNodeId(cluster.id))
      const wash = nodes.find((node) => node.id === clusterWashNodeId(cluster.id))
      const card = nodes.find(
        (node) => node.id === clusterCardNodeId(cluster.id, `card-${cluster.id}`),
      )
      expect(label).toBeDefined()
      expect(wash).toBeDefined()
      expect(card).toBeDefined()
      expect(label?.style).toMatchObject({ width: clusterGridWidth() })
      expect((label?.data as ClusterLabelNodeData).colour).toBe(
        CLUSTER_COLOURS[cluster.id],
      )
      expect((card?.data as CardNodeData).clusterColour).toBe(
        CLUSTER_COLOURS[cluster.id],
      )
    }
  })

  it('puts all eight clusters on octagon points, none in the centre', () => {
    const cards = eightClusters.map((cluster) =>
      makeCard(`card-${cluster.id}`, 'act', [cluster.id]),
    )
    const { nodes } = layoutClusterOctagon(
      cards,
      eightClusters,
      display,
      heightsFor(cards),
    )
    const guide = nodes.find((node) => node.type === 'octagonGuide')
    const radius = (guide?.data as OctagonGuideNodeData).radius
    expect(radius).toBeGreaterThan(0)
    expect((guide?.data as OctagonGuideNodeData).sectors).toHaveLength(8)

    const gridWidth = clusterGridWidth()
    const top = nodes.find((node) => node.id === clusterLabelNodeId('health-access'))
    expect(top).toBeDefined()
    expect(top?.position.x).toBeCloseTo(-gridWidth / 2, 5)
    expect((top?.position.y ?? 0) + LAYOUT.labelHeight).toBeCloseTo(-radius, 5)

    const east = nodes.find((node) => node.id === clusterLabelNodeId('tax-fiscal'))
    expect(east).toBeDefined()
    expect(east?.position.x).toBeCloseTo(radius, 5)

    const origins = eightClusters.map((cluster) => {
      const wash = nodes.find((node) => node.id === clusterWashNodeId(cluster.id))
      if (!wash) {
        throw new Error(`missing wash ${cluster.id}`)
      }
      return {
        x: wash.position.x + gridWidth / 2,
        y: wash.position.y + (wash.height ?? 0) / 2,
      }
    })
    for (const origin of origins) {
      expect(Math.hypot(origin.x, origin.y)).toBeGreaterThan(radius * 0.5)
    }
  })

  it('keeps each cluster inside an eight-column-wide grid', () => {
    const cards = [
      makeCard('a', 'act', ['tax-fiscal']),
      makeCard('b', 'green', ['tax-fiscal']),
      makeCard('c', 'labour', ['tax-fiscal']),
      makeCard('d', 'national', ['tax-fiscal']),
      makeCard('e', 'nz-first', ['tax-fiscal']),
      makeCard('f', 'opportunity', ['tax-fiscal']),
      makeCard('g', 'te-pati-maori', ['tax-fiscal']),
      makeCard('h', 'act', ['tax-fiscal']),
      makeCard('i', 'green', ['tax-fiscal']),
    ]
    const { nodes } = layoutClusterOctagon(
      cards,
      clusters,
      display,
      heightsFor(cards),
    )
    const label = nodes.find((node) => node.id === clusterLabelNodeId('tax-fiscal'))
    const cardNodes = nodes.filter((node) => node.type === 'card')
    expect(label).toBeDefined()
    expect(cardNodes).toHaveLength(9)
    const originX = label?.position.x ?? 0
    const xs = [...new Set(cardNodes.map((node) => node.position.x))].sort(
      (a, b) => a - b,
    )
    expect(xs).toHaveLength(8)
    expect(xs[0]).toBe(originX)
    expect((xs[xs.length - 1] ?? 0) + LAYOUT.columnWidth).toBe(
      originX + clusterGridWidth(),
    )
  })

  it('draws each card only in its primary grid', () => {
    const { nodes } = layoutClusterOctagon(
      fixtureCards,
      clusters,
      display,
      {
        'act-affordable-government': 200,
        'labour-capitalgainstax': 200,
        'te-pati-maori-tax': 200,
      },
    )
    const labour = nodes.filter(
      (node) =>
        node.type === 'card' &&
        (node.data as CardNodeData).card.id === 'labour-capitalgainstax',
    )
    expect(labour.map((node) => node.id)).toEqual([
      clusterCardNodeId('tax-fiscal', 'labour-capitalgainstax'),
    ])
  })

  it('does not overlap cluster grids when heights are known', () => {
    const cards = eightClusters.flatMap((cluster) =>
      Array.from({ length: 6 }, (_, index) =>
        makeCard(`${cluster.id}-${String(index)}`, 'act', [cluster.id]),
      ),
    )
    const heights = Object.fromEntries(
      cards.map((card, index) => [card.id, 180 + (index % 5) * 40]),
    )
    const { nodes } = layoutClusterOctagon(
      cards,
      eightClusters,
      display,
      heights,
    )
    const boxes = eightClusters.map((cluster) => {
      const members = nodes.filter(
        (node) =>
          node.type === 'card' &&
          node.id.startsWith(`card:${cluster.id}:`),
      )
      const xs = members.map((node) => node.position.x)
      const ys = members.map((node) => node.position.y)
      const bottoms = members.map((node) => {
        const card = (node.data as CardNodeData).card
        return node.position.y + (heights[card.id] ?? 0)
      })
      const minX = Math.min(...xs)
      const minY = Math.min(...ys)
      return nodeBox(
        minX,
        minY,
        clusterGridWidth(),
        Math.max(...bottoms) - minY,
      )
    })

    for (let i = 0; i < boxes.length; i += 1) {
      for (let j = i + 1; j < boxes.length; j += 1) {
        const left = boxes[i]
        const right = boxes[j]
        if (!left || !right) {
          continue
        }
        expect(
          overlap(left, right),
          `${eightClusters[i]?.id} overlaps ${eightClusters[j]?.id}`,
        ).toBe(false)
      }
    }
  })

  it('parks unmeasured cards off-canvas so they do not leave gaps', () => {
    const cards = [makeCard('a', 'act', ['tax-fiscal'])]
    const { nodes } = layoutClusterOctagon(cards, clusters, display)
    const card = nodes.find((node) => node.type === 'card')
    expect(card?.position.y).toBeLessThan(0)
  })

  it('returns stable positions across calls', () => {
    const cards = eightClusters.map((cluster) =>
      makeCard(`card-${cluster.id}`, 'act', [cluster.id]),
    )
    const heights = heightsFor(cards, 240)
    const first = layoutClusterOctagon(cards, eightClusters, display, heights)
    const second = layoutClusterOctagon(cards, eightClusters, display, heights)
    expect(first.nodes).toEqual(second.nodes)
  })

  it('emits no edges', () => {
    const { edges } = layoutClusterOctagon(
      fixtureCards,
      clusters,
      display,
      {
        'act-affordable-government': 200,
        'labour-capitalgainstax': 200,
        'te-pati-maori-tax': 200,
      },
    )
    expect(edges).toHaveLength(0)
  })
})
