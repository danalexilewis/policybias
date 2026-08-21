import { useCallback, useMemo, useState } from 'react'
import type { MoneyClass, PartyId, PolicyCard } from '../data/types'
import { ALL_VISIBLE, type CardDisplay } from '../card/CardDisplay'

function toggleInSet<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set)
  if (next.has(value)) {
    next.delete(value)
  } else {
    next.add(value)
  }
  return next
}

export type UseFiltersResult = {
  filtered: PolicyCard[]
  display: CardDisplay
  anonymise: boolean
  setAnonymise: (value: boolean) => void
  enriched: boolean
  setEnriched: (value: boolean) => void
  selectedClusters: Set<string>
  toggleCluster: (clusterId: string) => void
  clearClusters: () => void
  selectedParties: Set<PartyId>
  toggleParty: (partyId: PartyId) => void
  clearParties: () => void
  selectedMoney: Set<MoneyClass>
  toggleMoney: (money: MoneyClass) => void
  clearMoney: () => void
  hasOutput: boolean | null
  setHasOutput: (value: boolean | null) => void
  hasDerived: boolean | null
  setHasDerived: (value: boolean | null) => void
}

/** Filter policy cards and derive the {@link CardDisplay} flags for rendering. */
export function useFilters(cards: PolicyCard[]): UseFiltersResult {
  const [anonymise, setAnonymise] = useState(false)
  const [enriched, setEnriched] = useState(false)
  const [selectedClusters, setSelectedClusters] = useState<Set<string>>(new Set())
  const [selectedParties, setSelectedParties] = useState<Set<PartyId>>(new Set())
  const [selectedMoney, setSelectedMoney] = useState<Set<MoneyClass>>(new Set())
  const [hasOutput, setHasOutput] = useState<boolean | null>(null)
  const [hasDerived, setHasDerived] = useState<boolean | null>(null)

  const display = useMemo<CardDisplay>(
    () => (anonymise ? { ...ALL_VISIBLE, party: false } : ALL_VISIBLE),
    [anonymise],
  )

  const filtered = useMemo(() => {
    return cards.filter((card) => {
      if (
        selectedClusters.size > 0 &&
        !card.clusters.some((clusterId) => selectedClusters.has(clusterId))
      ) {
        return false
      }

      if (selectedParties.size > 0 && !selectedParties.has(card.party)) {
        return false
      }

      if (selectedMoney.size > 0 && !selectedMoney.has(card.money)) {
        return false
      }

      const outputCount = card.stated.counts.outputs
      if (hasOutput === true && outputCount === 0) {
        return false
      }
      if (hasOutput === false && outputCount > 0) {
        return false
      }

      if (hasDerived === true && !card.derived) {
        return false
      }
      if (hasDerived === false && card.derived) {
        return false
      }

      return true
    })
  }, [cards, selectedClusters, selectedParties, selectedMoney, hasOutput, hasDerived])

  const toggleCluster = useCallback((clusterId: string) => {
    setSelectedClusters((current) => toggleInSet(current, clusterId))
  }, [])

  const clearClusters = useCallback(() => {
    setSelectedClusters(new Set())
  }, [])

  const toggleParty = useCallback((partyId: PartyId) => {
    setSelectedParties((current) => toggleInSet(current, partyId))
  }, [])

  const clearParties = useCallback(() => {
    setSelectedParties(new Set())
  }, [])

  const toggleMoney = useCallback((money: MoneyClass) => {
    setSelectedMoney((current) => toggleInSet(current, money))
  }, [])

  const clearMoney = useCallback(() => {
    setSelectedMoney(new Set())
  }, [])

  return {
    filtered,
    display,
    anonymise,
    setAnonymise,
    enriched,
    setEnriched,
    selectedClusters,
    toggleCluster,
    clearClusters,
    selectedParties,
    toggleParty,
    clearParties,
    selectedMoney,
    toggleMoney,
    clearMoney,
    hasOutput,
    setHasOutput,
    hasDerived,
    setHasDerived,
  }
}
