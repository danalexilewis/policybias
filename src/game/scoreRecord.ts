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

/** How wealthy the player feels, from 1 (not wealthy) to 10 (very wealthy). */
export type FeltWealth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export const FELT_WEALTH_MIN = 1
export const FELT_WEALTH_MAX = 10

/** One round on a score record: the party picked and the party that was asked for. */
export type StoredGuess = {
  guessedParty: PartyId
  targetParty: PartyId
  correct: boolean
}

export type PartyGuessScore = {
  party: PartyId
  correct: number
  attempted: number
}

export type BackgroundAnswers = {
  ageRange: AgeRange | null
  ethnicities: Ethnicity[]
  intendedVote: IntendedVote | null
  feltWealth: FeltWealth | null
}

export type ScoreRecordInput = {
  correct: number
  attempted: number
  guesses: StoredGuess[] | null
  ageRange: AgeRange | null
  ethnicities: Ethnicity[] | null
  intendedVote: IntendedVote | null
  feltWealth: FeltWealth | null
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
const PARTIES = new Set<string>(ALL_PARTIES)
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
    feltWealth: null,
  }
}

export function backgroundFromAnswers(
  answers: BackgroundAnswers,
): Pick<
  ScoreRecordInput,
  'ageRange' | 'ethnicities' | 'intendedVote' | 'feltWealth'
> {
  return {
    ageRange: answers.ageRange,
    ethnicities:
      answers.ethnicities.length === 0 ? null : uniqueEthnicities(answers.ethnicities),
    intendedVote: answers.intendedVote,
    feltWealth: answers.feltWealth,
  }
}

export function scoresByGuessedParty(
  guesses: StoredGuess[] | null,
): PartyGuessScore[] {
  const buckets = Object.fromEntries(
    ALL_PARTIES.map((party) => [party, { correct: 0, attempted: 0 }]),
  ) as Record<PartyId, { correct: number; attempted: number }>

  for (const guess of guesses ?? []) {
    buckets[guess.guessedParty].attempted += 1
    if (guess.correct) {
      buckets[guess.guessedParty].correct += 1
    }
  }

  return ALL_PARTIES.map((party) => ({
    party,
    correct: buckets[party].correct,
    attempted: buckets[party].attempted,
  }))
}

/** Session score for one party, or empty when that party was never picked. */
export function partyScoreLabel(bucket: PartyGuessScore): string {
  if (bucket.attempted === 0) {
    return ''
  }
  return `${bucket.correct}/${bucket.attempted}`
}

/** Share of a party bar that is filled. 2/2 is a full bar. */
export function partyBarFill(bucket: PartyGuessScore): number {
  if (bucket.attempted < 1) {
    return 0
  }
  return (bucket.correct / bucket.attempted) * 100
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
    feltWealth?: unknown
    guesses?: unknown
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

  const feltWealth = parseOptionalFeltWealth(record.feltWealth)
  if (feltWealth === undefined) {
    return null
  }

  const guesses = parseGuesses(record.guesses, record.correct, record.attempted)
  if (guesses === undefined) {
    return null
  }

  return {
    correct: record.correct,
    attempted: record.attempted,
    guesses,
    ageRange: ageRange as AgeRange | null,
    ethnicities,
    intendedVote: intendedVote as IntendedVote | null,
    feltWealth,
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
  const header = [
    'recordedOn',
    'correct',
    'attempted',
    ...ALL_PARTIES,
    'ageRange',
    'ethnicities',
    'intendedVote',
    'feltWealth',
  ].join(',')
  const rows = records.map((record) => {
    const partyScores = Object.fromEntries(
      scoresByGuessedParty(record.guesses).map((bucket) => [
        bucket.party,
        partyScoreLabel(bucket),
      ]),
    ) as Record<PartyId, string>

    return [
      record.recordedOn,
      String(record.correct),
      String(record.attempted),
      ...ALL_PARTIES.map((party) => partyScores[party]),
      record.ageRange ?? '',
      record.ethnicities?.join(';') ?? '',
      record.intendedVote ?? '',
      record.feltWealth === null ? '' : String(record.feltWealth),
    ]
      .map(csvCell)
      .join(',')
  })
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
function parseOptionalFeltWealth(
  value: unknown,
): FeltWealth | null | undefined {
  if (value === undefined || value === null || value === '') {
    return null
  }
  if (
    typeof value !== 'number' ||
    !Number.isInteger(value) ||
    value < FELT_WEALTH_MIN ||
    value > FELT_WEALTH_MAX
  ) {
    return undefined
  }
  return value as FeltWealth
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

/** `undefined` means the field was invalid; `null` means a legacy row. */
function parseGuesses(
  value: unknown,
  correct: number,
  attempted: number,
): StoredGuess[] | null | undefined {
  if (value === undefined || value === null) {
    return null
  }
  if (!Array.isArray(value) || value.length !== attempted) {
    return undefined
  }

  const parsed: StoredGuess[] = []
  let correctCount = 0
  for (const item of value) {
    const guess = parseGuess(item)
    if (!guess) {
      return undefined
    }
    if (guess.correct) {
      correctCount += 1
    }
    parsed.push(guess)
  }

  if (correctCount !== correct) {
    return undefined
  }
  return parsed
}

function parseGuess(value: unknown): StoredGuess | null {
  if (value === null || typeof value !== 'object') {
    return null
  }

  const item = value as {
    guessedParty?: unknown
    targetParty?: unknown
    correct?: unknown
  }
  if (typeof item.guessedParty !== 'string' || !PARTIES.has(item.guessedParty)) {
    return null
  }
  if (typeof item.targetParty !== 'string' || !PARTIES.has(item.targetParty)) {
    return null
  }
  if (typeof item.correct !== 'boolean') {
    return null
  }
  if (item.correct !== (item.guessedParty === item.targetParty)) {
    return null
  }

  return {
    guessedParty: item.guessedParty as PartyId,
    targetParty: item.targetParty as PartyId,
    correct: item.correct,
  }
}

function csvCell(value: string): string {
  if (!/[",\n]/.test(value)) {
    return value
  }
  return `"${value.replaceAll('"', '""')}"`
}
