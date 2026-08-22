import { useQueryStates } from 'nuqs'
import { ALL_VISIBLE, type CardDisplay } from '../card/CardDisplay'
import type { MoneyClass, PartyId, PolicyCard } from '../data/types'
import type { GroupBy } from '../grid/sortCards'
import { filterSearchParams } from './filterQuery'

function toggleInList<T>(list: T[], value: T): T[] {
  if (list.includes(value)) {
    return list.filter((entry) => entry !== value)
  }
  return [...list, value]
}

export type UseFiltersResult = {
  filtered: PolicyCard[]
  display: CardDisplay
  anonymise: boolean
  setAnonymise: (value: boolean) => void
  groupBy: GroupBy
  setGroupBy: (value: GroupBy) => void
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
  clearAppliedFilters: () => void
}

/** Filter policy cards from the URL, and derive {@link CardDisplay} flags. */
export function useFilters(cards: PolicyCard[]): UseFiltersResult {
  const [query, setQuery] = useQueryStates(filterSearchParams)

  const anonymise = query.anonymise
  const groupBy: GroupBy =
    anonymise && query.group === 'party' ? 'none' : query.group
  const selectedClusters = new Set(query.clusters)
  const selectedParties = new Set<PartyId>(anonymise ? [] : query.parties)
  const selectedMoney = new Set(query.money)
  const hasOutput = query.output
  const hasDerived = query.derived

  const display: CardDisplay = anonymise
    ? { ...ALL_VISIBLE, party: false }
    : ALL_VISIBLE

  const filtered = cards.filter((card) => {
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

  function setAnonymise(value: boolean): void {
    void setQuery((current) => {
      if (value) {
        return {
          anonymise: true,
          parties: [],
          group: current.group === 'party' ? 'none' : current.group,
        }
      }
      return { anonymise: false }
    })
  }

  function setGroupBy(value: GroupBy): void {
    void setQuery({ group: value })
  }

  function toggleCluster(clusterId: string): void {
    void setQuery((current) => ({
      clusters: toggleInList(current.clusters, clusterId),
    }))
  }

  function clearClusters(): void {
    void setQuery({ clusters: [] })
  }

  function toggleParty(partyId: PartyId): void {
    void setQuery((current) => ({
      parties: toggleInList(current.parties, partyId),
    }))
  }

  function clearParties(): void {
    void setQuery({ parties: [] })
  }

  function toggleMoney(money: MoneyClass): void {
    void setQuery((current) => ({
      money: toggleInList(current.money, money),
    }))
  }

  function clearMoney(): void {
    void setQuery({ money: [] })
  }

  function setHasOutput(value: boolean | null): void {
    void setQuery({ output: value })
  }

  function setHasDerived(value: boolean | null): void {
    void setQuery({ derived: value })
  }

  function clearAppliedFilters(): void {
    void setQuery({
      clusters: [],
      parties: [],
      money: [],
      output: null,
      derived: null,
    })
  }

  return {
    filtered,
    display,
    anonymise,
    setAnonymise,
    groupBy,
    setGroupBy,
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
    clearAppliedFilters,
  }
}
