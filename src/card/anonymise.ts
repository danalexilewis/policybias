import type { PartyId } from '../data/types'

/**
 * Unique party names, matched case-insensitively. Short English words that
 * collide with party names (Act, green, labour, national, opportunity) are
 * not listed here.
 */
const CASE_INSENSITIVE_NAMES = [
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
]

/**
 * Short labels that must stay case-sensitive so legislation ("the Act"),
 * the job market ("labour"), and ordinary "national" / "green" survive.
 */
const CASE_SENSITIVE_NAMES = ["ACT's", 'ACT', 'Labour', 'Greens']

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

const CASE_INSENSITIVE_RE = new RegExp(namePattern(CASE_INSENSITIVE_NAMES), 'gi')
const CASE_SENSITIVE_RE = new RegExp(`\\b(?:${namePattern(CASE_SENSITIVE_NAMES)})\\b`, 'g')

/**
 * Unique names that can be stripped from the start of a title even without a
 * colon. Short English words (National, Labour, Green) are not in this list.
 */
const UNIQUE_TITLE_NAMES = [
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
]

const SHORT_TITLE_NAMES = ['ACT', 'National', 'Labour', 'Green']
const SHORT_TITLE_VERBS = 'will|backs|to|commit|commits|announce|announces|launch|launches'

const LEADING_UNIQUE_RE = new RegExp(
  `^(?:${namePattern(UNIQUE_TITLE_NAMES)})(?:'s)?(?:\\s*[:—–-]\\s*|\\s+|$)`,
  'i',
)
const LEADING_SHORT_RE = new RegExp(
  `^(?:${namePattern(SHORT_TITLE_NAMES)})(?:'s\\s+|\\s*[:—–-]\\s+|\\s+(?:${SHORT_TITLE_VERBS})\\s+)`,
  'i',
)
const TRAILING_PARTY_RE = new RegExp(
  `(?:\\s*[|–—-]\\s*|\\s+[Uu]nder\\s+)(?:${namePattern([...UNIQUE_TITLE_NAMES, ...SHORT_TITLE_NAMES])})\\s*$`,
)

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
export function stripPartyFromTitle(text: string): string {
  const withoutSuffix = text.replace(TRAILING_PARTY_RE, '')
  const withoutPrefix = withoutSuffix.replace(LEADING_UNIQUE_RE, '').replace(LEADING_SHORT_RE, '')
  return capitaliseFirst(tidyGaps(withoutPrefix))
}

/** Remove party names from visible text when the party badge is hidden. */
export function anonymiseText(text: string): string {
  return tidyGaps(text.replace(CASE_INSENSITIVE_RE, '').replace(CASE_SENSITIVE_RE, ''))
}

export const PARTY_LABELS: Record<PartyId, string> = {
  act: 'ACT',
  green: 'Green',
  labour: 'Labour',
  national: 'National',
  'nz-first': 'NZ First',
  opportunity: 'Opportunity',
  'te-pati-maori': 'Te Pāti Māori',
}

export const PARTY_COLOURS: Record<PartyId, string> = {
  act: '#fdb913',
  green: '#098137',
  labour: '#d82c20',
  national: '#00529f',
  'nz-first': '#141414',
  opportunity: '#00bcc1',
  'te-pati-maori': '#b5121b',
}
