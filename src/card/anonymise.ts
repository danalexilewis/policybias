import type { AnonymiseNames, PartyId, PartyMeta } from '../data/types'

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function namePattern(names: string[]): string {
  return names
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((name) => escapeRegex(name))
    .join('|')
}

/** NZ 2026 names. Used when the caller has no dataset (unit tests). */
export const NZ_ANONYMISE_NAMES: AnonymiseNames = {
  caseInsensitive: [
    'Green Party of Aotearoa New Zealand',
    'Green Party',
    'New Zealand Labour Party',
    'Labour Party',
    'New Zealand National Party',
    'National Party',
    'New Zealand First Party',
    'NZ First',
    'NZFirst',
    'Te Pāti Māori',
    'Te Pati Maori',
    'The Māori Party',
    'The Maori Party',
    'Māori Party',
    'Maori Party',
    'ACT New Zealand',
    'The Opportunities Party',
    'The Opportunity Party',
    'Opportunity Party',
  ],
  caseSensitive: ["ACT's", 'ACT', 'Labour', 'Greens'],
  uniqueTitle: [
    'Green Party of Aotearoa New Zealand',
    'Green Party',
    'New Zealand Labour Party',
    'Labour Party',
    'New Zealand National Party',
    'National Party',
    'New Zealand First Party',
    'NZ First',
    'NZFirst',
    'Te Pāti Māori',
    'Te Pati Maori',
    'The Māori Party',
    'The Maori Party',
    'Māori Party',
    'Maori Party',
    'ACT New Zealand',
    'Greens',
    'The Opportunities Party',
    'The Opportunity Party',
    'Opportunity Party',
  ],
  shortTitle: ['ACT', 'National', 'Labour', 'Green'],
}

function emptyNames(): AnonymiseNames {
  return NZ_ANONYMISE_NAMES
}

export function mergeAnonymiseNames(parties: PartyMeta[]): AnonymiseNames {
  const merged = emptyNames()
  for (const party of parties) {
    merged.caseInsensitive.push(...(party.anonymise?.caseInsensitive ?? []))
    merged.caseSensitive.push(...(party.anonymise?.caseSensitive ?? []))
    merged.uniqueTitle.push(...(party.anonymise?.uniqueTitle ?? []))
    merged.shortTitle.push(...(party.anonymise?.shortTitle ?? []))
  }
  return merged
}

const SHORT_TITLE_VERBS = 'will|backs|to|commit|commits|announce|announces|launch|launches'

function tidyGaps(text: string): string {
  return text
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/^[\s:,-]+/, '')
    .replace(/[\s:,-]+$/, '')
    .trim()
}

function capitaliseFirst(text: string): string {
  const first = text.at(0)
  if (!first || first < 'a' || first > 'z') {
    return text
  }
  return `${first.toUpperCase()}${text.slice(1)}`
}

/**
 * Drop a leading or trailing party label from a title. Short words need a
 * colon, possessive, or campaign verb so "national economy" and "Green spaces"
 * survive.
 */
export function stripPartyFromTitle(
  text: string,
  names: AnonymiseNames = emptyNames(),
): string {
  const unique = names.uniqueTitle
  const short = names.shortTitle
  if (unique.length === 0 && short.length === 0) {
    return text
  }

  const trailingPartyRe =
    unique.length + short.length > 0
      ? new RegExp(
          `(?:\\s*[|–—-]\\s*|\\s+[Uu]nder\\s+)(?:${namePattern([...unique, ...short])})\\s*$`,
        )
      : null
  const leadingUniqueRe =
    unique.length > 0
      ? new RegExp(`^(?:${namePattern(unique)})(?:'s)?(?:\\s*[:—–-]\\s*|\\s+|$)`, 'i')
      : null
  const leadingShortRe =
    short.length > 0
      ? new RegExp(
          `^(?:${namePattern(short)})(?:'s\\s+|\\s*[:—–-]\\s+|\\s+(?:${SHORT_TITLE_VERBS})\\s+)`,
          'i',
        )
      : null

  const withoutSuffix = trailingPartyRe ? text.replace(trailingPartyRe, '') : text
  const withoutPrefix = (leadingUniqueRe
    ? withoutSuffix.replace(leadingUniqueRe, '')
    : withoutSuffix
  ).replace(leadingShortRe ?? /^$/, '')
  return capitaliseFirst(tidyGaps(withoutPrefix))
}

/** Remove party names from visible text when the party badge is hidden. */
export function anonymiseText(
  text: string,
  names: AnonymiseNames = emptyNames(),
): string {
  let next = text
  if (names.caseInsensitive.length > 0) {
    next = next.replace(new RegExp(namePattern(names.caseInsensitive), 'gi'), '')
  }
  if (names.caseSensitive.length > 0) {
    next = next.replace(
      new RegExp(`\\b(?:${namePattern(names.caseSensitive)})\\b`, 'g'),
      '',
    )
  }
  return tidyGaps(next)
}

export function partyById(
  parties: PartyMeta[],
  partyId: PartyId,
): PartyMeta | undefined {
  return parties.find((party) => party.id === partyId)
}

export function partyLabel(parties: PartyMeta[], partyId: PartyId): string {
  return partyById(parties, partyId)?.label ?? partyId
}

export function partyColour(parties: PartyMeta[], partyId: PartyId): string {
  return partyById(parties, partyId)?.colour ?? '#171717'
}

export function partyLogoUrl(parties: PartyMeta[], partyId: PartyId): string {
  const logo = partyById(parties, partyId)?.logo
  if (!logo) {
    return ''
  }
  return `${import.meta.env.BASE_URL}logos/${logo}`
}

/** NZ labels kept for tests that still look parties up by id. */
export const PARTY_LABELS: Record<string, string> = {
  act: 'ACT',
  green: 'Green',
  labour: 'Labour',
  national: 'National',
  'nz-first': 'NZ First',
  opportunity: 'Opportunity',
  'te-pati-maori': 'Te Pāti Māori',
}

export const PARTY_COLOURS: Record<string, string> = {
  act: '#fdb913',
  green: '#098137',
  labour: '#d82c20',
  national: '#00529f',
  'nz-first': '#3d3d3d',
  opportunity: '#00b9bc',
  'te-pati-maori': '#7a1830',
}
