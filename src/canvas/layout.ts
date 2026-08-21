import type { CardDisplay } from '../card/CardDisplay'
import type { ClusterMeta, PolicyCard } from '../data/types'
import type { Edge, Node } from '@xyflow/react'
import { clusterColour } from './clusterColours'

/** Layout constants — deterministic, no randomness. */
export const LAYOUT = {
  columnWidth: 360,
  columnGap: 8,
  cardGap: 8,
  topPadding: 16,
  masonryColumns: 50,
  clusterColumns: 8,
  clusterGap: 240,
  labelHeight: 120,
  octagonCorners: 8,
} as const

export type CanvasLayoutMode = 'wall' | 'cluster'

export type ClusterLabelNodeData = {
  cluster: ClusterMeta
  colour: string
}

export type OctagonGuideNodeData = {
  radius: number
  sectors: Array<{ id: string; colour: string }>
  activeClusterId?: string | null
}

export type ClusterWashNodeData = {
  colour: string
  anchorX: string
  anchorY: string
}

export type CardNodeData = {
  card: PolicyCard
  display: CardDisplay
  /** When true, cards with a derived face open on that reading. */
  enriched: boolean
  /** Cluster colour when the card is drawn in cluster mode. */
  clusterColour?: string
}

export function clusterGridWidth(): number {
  return (
    LAYOUT.clusterColumns * LAYOUT.columnWidth +
    (LAYOUT.clusterColumns - 1) * LAYOUT.columnGap
  )
}

export function clusterLabelNodeId(clusterId: string): string {
  return `cluster-label:${clusterId}`
}

export function clusterWashNodeId(clusterId: string): string {
  return `cluster-wash:${clusterId}`
}

export function clusterCardNodeId(clusterId: string, cardId: string): string {
  return `card:${clusterId}:${cardId}`
}

function clusterOrder(clusters: ClusterMeta[]): Map<string, number> {
  const order = new Map<string, number>()
  clusters.forEach((cluster, index) => {
    order.set(cluster.id, index)
  })
  return order
}

function sortCards(
  order: Map<string, number>,
  a: PolicyCard,
  b: PolicyCard,
): number {
  const aCluster = order.get(a.clusters[0] ?? '') ?? Number.MAX_SAFE_INTEGER
  const bCluster = order.get(b.clusters[0] ?? '') ?? Number.MAX_SAFE_INTEGER
  if (aCluster !== bCluster) {
    return aCluster - bCluster
  }
  return sortWithinCluster(a, b)
}

function sortWithinCluster(a: PolicyCard, b: PolicyCard): number {
  const byParty = a.party.localeCompare(b.party)
  if (byParty !== 0) {
    return byParty
  }
  return a.id.localeCompare(b.id)
}

function shortestColumnIndex(columnBottoms: number[]): number {
  let bestIndex = 0
  let bestValue = columnBottoms[0] ?? 0
  for (let index = 1; index < columnBottoms.length; index += 1) {
    const value = columnBottoms[index]
    if (value === undefined) {
      continue
    }
    if (value < bestValue) {
      bestIndex = index
      bestValue = value
    }
  }
  return bestIndex
}

function columnX(columnIndex: number): number {
  return columnIndex * (LAYOUT.columnWidth + LAYOUT.columnGap)
}

function cardsInCluster(cards: PolicyCard[], clusterId: string): PolicyCard[] {
  return cards
    .filter((card) => card.clusters[0] === clusterId)
    .sort(sortWithinCluster)
}

type GridBox = {
  x: number
  y: number
  w: number
  h: number
}

function boxesOverlap(left: GridBox, right: GridBox, gap: number): boolean {
  return (
    left.x < right.x + right.w + gap &&
    left.x + left.w + gap > right.x &&
    left.y < right.y + right.h + gap &&
    left.y + left.h + gap > right.y
  )
}

function octagonAngle(index: number): number {
  return -Math.PI / 2 + (index * 2 * Math.PI) / LAYOUT.octagonCorners
}

function axisSign(value: number): number {
  if (Math.abs(value) < 1e-10) {
    return 0
  }
  return Math.sign(value)
}

function washAnchor(angle: number): { x: string; y: string } {
  const shiftX = axisSign(Math.cos(angle))
  const shiftY = axisSign(Math.sin(angle))
  const x = shiftX > 0 ? '0%' : shiftX < 0 ? '100%' : '50%'
  const y = shiftY > 0 ? '0%' : shiftY < 0 ? '100%' : '50%'
  return { x, y }
}

/** Axis-aligned slot that sits on an octagon point and grows away from the centre. */
function outwardSlotOrigin(
  angle: number,
  radius: number,
  width: number,
  height: number,
): { x: number; y: number } {
  const vertexX = Math.cos(angle) * radius
  const vertexY = Math.sin(angle) * radius
  const shiftX = axisSign(Math.cos(angle)) * (width / 2)
  const shiftY = axisSign(Math.sin(angle)) * (height / 2)
  return {
    x: vertexX + shiftX - width / 2,
    y: vertexY + shiftY - height / 2,
  }
}

function octagonSlotOrigin(
  index: number,
  radius: number,
  width: number,
  height: number,
): { x: number; y: number } {
  return outwardSlotOrigin(octagonAngle(index), radius, width, height)
}

function anySlotOverlap(boxes: GridBox[], gap: number): boolean {
  for (let i = 0; i < boxes.length; i += 1) {
    const left = boxes[i]
    if (!left) {
      continue
    }
    for (let j = i + 1; j < boxes.length; j += 1) {
      const right = boxes[j]
      if (!right) {
        continue
      }
      if (boxesOverlap(left, right, gap)) {
        return true
      }
    }
  }
  return false
}

function octagonRadius(slotHeights: number[], gridWidth: number): number {
  const minFromAdjacent =
    (gridWidth + LAYOUT.clusterGap) /
    (2 * Math.sin(Math.PI / LAYOUT.octagonCorners))
  let radius = minFromAdjacent

  for (let step = 0; step < 48; step += 1) {
    const boxes = slotHeights.map((height, index) => {
      const origin = octagonSlotOrigin(index, radius, gridWidth, height)
      return { x: origin.x, y: origin.y, w: gridWidth, h: height }
    })
    if (!anySlotOverlap(boxes, LAYOUT.clusterGap)) {
      return radius
    }
    radius += Math.max(160, radius * 0.08)
  }

  return radius
}

function packMeasuredIntoColumns(
  cards: PolicyCard[],
  columnCount: number,
  measuredHeights: Readonly<Record<string, number>>,
  startY: number,
): {
  positions: Map<string, { x: number; y: number; height: number }>
  height: number
} {
  const positions = new Map<string, { x: number; y: number; height: number }>()
  const columnBottoms: number[] = Array.from({ length: columnCount }, () => startY)

  for (const card of cards) {
    const measured = measuredHeights[card.id]
    if (measured === undefined || measured <= 0) {
      continue
    }
    const columnIndex = shortestColumnIndex(columnBottoms)
    const x = columnX(columnIndex)
    const y = columnBottoms[columnIndex] ?? startY
    positions.set(card.id, { x, y, height: measured })
    columnBottoms[columnIndex] = y + measured + LAYOUT.cardGap
  }

  let height = startY
  for (const bottom of columnBottoms) {
    const columnHeight = bottom > startY ? bottom - LAYOUT.cardGap : startY
    if (columnHeight > height) {
      height = columnHeight
    }
  }

  return { positions, height }
}

function hiddenCardNode(
  id: string,
  card: PolicyCard,
  display: CardDisplay,
  enriched: boolean,
  columnIndex: number,
  colour?: string,
): Node {
  return {
    id,
    type: 'card',
    position: { x: columnX(columnIndex), y: -100_000 },
    data: {
      card,
      display,
      enriched,
      clusterColour: colour,
    } satisfies CardNodeData,
    style: {
      width: LAYOUT.columnWidth,
      visibility: 'hidden',
    },
    width: LAYOUT.columnWidth,
  }
}

/**
 * Pack cards into one 50-column masonry grid (wall mode).
 * Unmeasured cards sit off-canvas so they can report height without leaving gaps.
 * Edges are omitted.
 */
export function layoutByCluster(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
  display: CardDisplay,
  measuredHeights: Readonly<Record<string, number>> = {},
  enriched = false,
): { nodes: Node[]; edges: Edge[] } {
  const order = clusterOrder(clusters)
  const sorted = [...cards]
    .filter((card) => card.clusters[0])
    .sort((a, b) => sortCards(order, a, b))

  const nodes: Node[] = []
  const columnBottoms: number[] = Array.from(
    { length: LAYOUT.masonryColumns },
    () => LAYOUT.topPadding,
  )

  sorted.forEach((card, index) => {
    const measured = measuredHeights[card.id]
    const ready = measured !== undefined && measured > 0

    if (!ready) {
      nodes.push(
        hiddenCardNode(
          card.id,
          card,
          display,
          enriched,
          index % LAYOUT.masonryColumns,
        ),
      )
      return
    }

    const columnIndex = shortestColumnIndex(columnBottoms)
    const x = columnX(columnIndex)
    const y = columnBottoms[columnIndex] ?? LAYOUT.topPadding

    nodes.push({
      id: card.id,
      type: 'card',
      position: { x, y },
      data: { card, display, enriched } satisfies CardNodeData,
      style: {
        width: LAYOUT.columnWidth,
      },
      width: LAYOUT.columnWidth,
      height: measured,
    })

    columnBottoms[columnIndex] = y + measured + LAYOUT.cardGap
  })

  return { nodes, edges: [] }
}

/**
 * One 8-column masonry grid per cluster, placed on an octagon.
 * Each card is drawn in its single primary cluster.
 */
export function layoutClusterOctagon(
  cards: PolicyCard[],
  clusters: ClusterMeta[],
  display: CardDisplay,
  measuredHeights: Readonly<Record<string, number>> = {},
  enriched = false,
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const gridWidth = clusterGridWidth()
  const clusteredCards = cards.filter((card) => card.clusters.length > 0)

  if (clusters.length === 0) {
    clusteredCards.forEach((card, index) => {
      nodes.push(
        hiddenCardNode(
          card.id,
          card,
          display,
          enriched,
          index % LAYOUT.clusterColumns,
        ),
      )
    })
    return { nodes, edges: [] }
  }

  const packed = clusters.map((cluster) => {
    const members = cardsInCluster(clusteredCards, cluster.id)
    const masonry = packMeasuredIntoColumns(
      members,
      LAYOUT.clusterColumns,
      measuredHeights,
      0,
    )
    const gridHeight = masonry.positions.size > 0 ? masonry.height : 0
    const slotHeight =
      LAYOUT.labelHeight + (gridHeight > 0 ? LAYOUT.cardGap + gridHeight : 0)
    return { cluster, members, masonry, slotHeight }
  })

  const radius = octagonRadius(
    packed.map((slot) => slot.slotHeight),
    gridWidth,
  )

  nodes.push({
    id: 'octagon-guide',
    type: 'octagonGuide',
    position: { x: -radius, y: -radius },
    data: {
      radius,
      sectors: packed.map((slot) => ({
        id: slot.cluster.id,
        colour: clusterColour(slot.cluster.id),
      })),
    } satisfies OctagonGuideNodeData,
    style: {
      width: radius * 2,
      height: radius * 2,
      zIndex: -1,
    },
    width: radius * 2,
    height: radius * 2,
    draggable: false,
    selectable: false,
    focusable: false,
  })

  packed.forEach((slot, index) => {
    const colour = clusterColour(slot.cluster.id)
    const angle = octagonAngle(index)
    const origin = octagonSlotOrigin(
      index,
      radius,
      gridWidth,
      slot.slotHeight,
    )
    const originX = origin.x
    const originY = origin.y
    const growsUp = Math.sin(angle) < 0
    const labelY = growsUp
      ? originY + slot.slotHeight - LAYOUT.labelHeight
      : originY
    const cardsOriginY = growsUp
      ? originY
      : originY + LAYOUT.labelHeight + LAYOUT.cardGap
    const anchor = washAnchor(angle)

    nodes.push({
      id: clusterWashNodeId(slot.cluster.id),
      type: 'clusterWash',
      position: { x: originX, y: originY },
      data: {
        colour,
        anchorX: anchor.x,
        anchorY: anchor.y,
      } satisfies ClusterWashNodeData,
      style: {
        width: gridWidth,
        height: slot.slotHeight,
        zIndex: 0,
      },
      width: gridWidth,
      height: slot.slotHeight,
      draggable: false,
      selectable: false,
      focusable: false,
    })

    nodes.push({
      id: clusterLabelNodeId(slot.cluster.id),
      type: 'clusterLabel',
      position: { x: originX, y: labelY },
      data: { cluster: slot.cluster, colour } satisfies ClusterLabelNodeData,
      style: { width: gridWidth },
      width: gridWidth,
      height: LAYOUT.labelHeight,
      draggable: false,
      selectable: false,
    })

    let hiddenIndex = 0

    for (const card of slot.members) {
      const placed = slot.masonry.positions.get(card.id)
      if (!placed) {
        nodes.push(
          hiddenCardNode(
            clusterCardNodeId(slot.cluster.id, card.id),
            card,
            display,
            enriched,
            hiddenIndex % LAYOUT.clusterColumns,
            colour,
          ),
        )
        hiddenIndex += 1
        continue
      }

      nodes.push({
        id: clusterCardNodeId(slot.cluster.id, card.id),
        type: 'card',
        position: {
          x: originX + placed.x,
          y: cardsOriginY + placed.y,
        },
        data: {
          card,
          display,
          enriched,
          clusterColour: colour,
        } satisfies CardNodeData,
        style: {
          width: LAYOUT.columnWidth,
        },
        width: LAYOUT.columnWidth,
        height: placed.height,
      })
    }
  })

  return { nodes, edges: [] }
}

export function layoutCanvas(
  mode: CanvasLayoutMode,
  cards: PolicyCard[],
  clusters: ClusterMeta[],
  display: CardDisplay,
  measuredHeights: Readonly<Record<string, number>> = {},
  enriched = false,
): { nodes: Node[]; edges: Edge[] } {
  if (mode === 'cluster') {
    return layoutClusterOctagon(
      cards,
      clusters,
      display,
      measuredHeights,
      enriched,
    )
  }
  return layoutByCluster(cards, clusters, display, measuredHeights, enriched)
}
