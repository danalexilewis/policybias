import type { PartyId } from '../data/types'
import { ALL_PARTIES, MAX_GAME_ROUNDS } from './dealRound'

/** Optional age band on a score record. Exact age is never stored. */
export type AgeRange =
  | 'under-18'
  | '18-24'
  | '25-34'
  | '35-44'
  | '45-54'
  | '55-64'
  | '65-plus'

/** Stats NZ level-1 ethnicity. A player may pick more than one. */
export type Ethnicity =
  | 'european'
  | 'maori'
  | 'pacific'
  | 'asian'
  | 'melaa'
  | 'other'

export type IntendedVote = PartyId | 'undecided' | 'will-not-vote' | 'another-party'

export type BackgroundAnswers = {
  ageRange: AgeRange | null
  ethnicities: Ethnicity[]
  intendedVote: IntendedVote | null
}

export type ScoreRecordInput = {
  correct: number
  attempted: number
  ageRange: AgeRange | null
  ethnicities: Ethnicity[] | null
  intendedVote: IntendedVote | null
}

export type ScoreRecord = ScoreRecordInput & {
  /** UTC calendar day the record was written. Not a time of day. */
  recordedOn: string
}

export const AGE_RANGE_OPTIONS: { id: AgeRange; label: string }[] = [
  { id: 'under-18', label: 'Under 18' },
  { id: '18-24', label: '18–24' },
  { id: '25-34', label: '25–34' },
  { id: '35-44', label: '35–44' },
  { id: '45-54', label: '45–54' },
  { id: '55-64', label: '55–64' },
  { id: '65-plus', label: '65+' },
]

export const ETHNICITY_OPTIONS: { id: Ethnicity; label: string }[] = [
  { id: 'european', label: 'European' },
  { id: 'maori', label: 'Māori' },
  { id: 'pacific', label: 'Pacific peoples' },
  { id: 'asian', label: 'Asian' },
  { id: 'melaa', label: 'Middle Eastern, Latin American, or African' },
  { id: 'other', label: 'Other' },
]

export const INTENDED_VOTE_EXTRA_OPTIONS: {
  id: Exclude<IntendedVote, PartyId>
  label: string
}[] = [
  { id: 'undecided', label: 'Undecided' },
  { id: 'will-not-vote', label: 'Will not vote' },
  { id: 'another-party', label: 'Another party' },
]

const AGE_RANGES = new Set<string>(AGE_RANGE_OPTIONS.map((option) => option.id))
const ETHNICITIES = new Set<string>(ETHNICITY_OPTIONS.map((option) => option.id))
const INTENDED_VOTES = new Set<string>([
  ...ALL_PARTIES,
  ...INTENDED_VOTE_EXTRA_OPTIONS.map((option) => option.id),
])

const RECORDED_ON = /^\d{4}-\d{2}-\d{2}$/

export function emptyBackground(): BackgroundAnswers {
  return {
    ageRange: null,
    ethnicities: [],
    intendedVote: null,
  }
}

export function backgroundFromAnswers(
  answers: BackgroundAnswers,
): Pick<ScoreRecordInput, 'ageRange' | 'ethnicities' | 'intendedVote'> {
  return {
    ageRange: answers.ageRange,
    ethnicities:
      answers.ethnicities.length === 0 ? null : uniqueEthnicities(answers.ethnicities),
    intendedVote: answers.intendedVote,
  }
}

export function formatRecordedOn(now: Date): string {
  return now.toISOString().slice(0, 10)
}

export function stampScoreRecord(
  input: ScoreRecordInput,
  now: Date,
): ScoreRecord {
  return {
    ...input,
    recordedOn: formatRecordedOn(now),
  }
}

export function parseScoreRecordInput(value: unknown): ScoreRecordInput | null {
  if (value === null || typeof value !== 'object') {
    return null
  }

  const record = value as {
    correct?: unknown
    attempted?: unknown
    ageRange?: unknown
    ethnicities?: unknown
    intendedVote?: unknown
  }

  if (
    typeof record.correct !== 'number' ||
    typeof record.attempted !== 'number' ||
    !isSessionScore(record.correct, record.attempted)
  ) {
    return null
  }

  const ageRange = parseOptionalMember(record.ageRange, AGE_RANGES)
  if (ageRange === undefined) {
    return null
  }

  const ethnicities = parseEthnicities(record.ethnicities)
  if (ethnicities === undefined) {
    return null
  }

  const intendedVote = parseOptionalMember(record.intendedVote, INTENDED_VOTES)
  if (intendedVote === undefined) {
    return null
  }

  return {
    correct: record.correct,
    attempted: record.attempted,
    ageRange: ageRange as AgeRange | null,
    ethnicities,
    intendedVote: intendedVote as IntendedVote | null,
  }
}

export function parseScoreRecord(value: unknown): ScoreRecord | null {
  const input = parseScoreRecordInput(value)
  if (!input || value === null || typeof value !== 'object') {
    return null
  }

  const recordedOn = (value as { recordedOn?: unknown }).recordedOn
  if (typeof recordedOn !== 'string' || !RECORDED_ON.test(recordedOn)) {
    return null
  }

  return { ...input, recordedOn }
}

export function scoreRecordsToCsv(records: ScoreRecord[]): string {
  const header = 'recordedOn,correct,attempted,ageRange,ethnicities,intendedVote'
  const rows = records.map((record) =>
    [
      record.recordedOn,
      String(record.correct),
      String(record.attempted),
      record.ageRange ?? '',
      record.ethnicities?.join(';') ?? '',
      record.intendedVote ?? '',
    ]
      .map(csvCell)
      .join(','),
  )
  return [header, ...rows].join('\n')
}

function isSessionScore(correct: number, attempted: number): boolean {
  return (
    Number.isInteger(correct) &&
    Number.isInteger(attempted) &&
    correct >= 0 &&
    attempted >= 1 &&
    attempted <= MAX_GAME_ROUNDS &&
    correct <= attempted
  )
}

/** `undefined` means the field was invalid; `null` means skipped. */
function parseOptionalMember(
  value: unknown,
  allowed: Set<string>,
): string | null | undefined {
  if (value === undefined || value === null || value === '') {
    return null
  }
  if (typeof value !== 'string' || !allowed.has(value)) {
    return undefined
  }
  return value
}

function parseEthnicities(value: unknown): Ethnicity[] | null | undefined {
  if (value === undefined || value === null) {
    return null
  }
  if (!Array.isArray(value)) {
    return undefined
  }
  if (value.length === 0) {
    return null
  }

  const parsed: Ethnicity[] = []
  for (const item of value) {
    if (typeof item !== 'string' || !ETHNICITIES.has(item)) {
      return undefined
    }
    parsed.push(item as Ethnicity)
  }

  return uniqueEthnicities(parsed)
}

function uniqueEthnicities(values: Ethnicity[]): Ethnicity[] {
  return ETHNICITY_OPTIONS.map((option) => option.id).filter((id) =>
    values.includes(id),
  )
}

function csvCell(value: string): string {
  if (!/[",\n]/.test(value)) {
    return value
  }
  return `"${value.replaceAll('"', '""')}"`
}
