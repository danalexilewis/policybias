import type { PartyId } from '../data/types'
import type { EventId } from '../event/events'
import {
  eventAgeRangeIds,
  eventEthnicityIds,
  eventPartyIds,
  INTENDED_VOTE_EXTRAS,
} from '../event/eventConfig'
import { MAX_GAME_ROUNDS } from './dealRound'

/** Optional age band on a score record. Exact age is never stored. */
export type AgeRange =
  | 'under-18'
  | '18-19'
  | '18-24'
  | '20-29'
  | '25-34'
  | '30-39'
  | '35-44'
  | '40-49'
  | '45-54'
  | '50-59'
  | '55-64'
  | '60-69'
  | '65-plus'
  | '70-79'
  | '80-plus'

/** Event-specific ethnicity. A player may pick more than one. */
export type Ethnicity =
  | 'european'
  | 'maori'
  | 'pacific'
  | 'asian'
  | 'melaa'
  | 'swedish'
  | 'nordic'
  | 'african'
  | 'persian'
  | 'other'

export type IntendedVoteExtra = (typeof INTENDED_VOTE_EXTRAS)[number]
export type IntendedVote = PartyId | IntendedVoteExtra

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

export const ETHNICITY_IDS: Ethnicity[] = [
  'european',
  'maori',
  'pacific',
  'asian',
  'melaa',
  'swedish',
  'nordic',
  'african',
  'persian',
  'other',
]

export const INTENDED_VOTE_EXTRA_IDS: IntendedVoteExtra[] = [
  ...INTENDED_VOTE_EXTRAS,
]

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
      answers.ethnicities.length === 0
        ? null
        : uniqueEthnicities(answers.ethnicities, ETHNICITY_IDS),
    intendedVote: answers.intendedVote,
    feltWealth: answers.feltWealth,
  }
}

export function scoresByGuessedParty(
  guesses: StoredGuess[] | null,
  parties: PartyId[],
): PartyGuessScore[] {
  const list = [...parties]
  const buckets: Record<string, { correct: number; attempted: number }> = {}
  for (const party of list) {
    buckets[party] = { correct: 0, attempted: 0 }
  }

  for (const guess of guesses ?? []) {
    if (!buckets[guess.guessedParty]) {
      buckets[guess.guessedParty] = { correct: 0, attempted: 0 }
      list.push(guess.guessedParty)
    }
    buckets[guess.guessedParty]!.attempted += 1
    if (guess.correct) {
      buckets[guess.guessedParty]!.correct += 1
    }
  }

  return list.map((party) => ({
    party,
    correct: buckets[party]?.correct ?? 0,
    attempted: buckets[party]?.attempted ?? 0,
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

export function parseScoreRecordInput(
  value: unknown,
  eventId: EventId,
): ScoreRecordInput | null {
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

  const ages = new Set(eventAgeRangeIds(eventId))
  const ethnicitiesAllowed = eventEthnicityIds(eventId)
  const parties = eventPartyIds(eventId)
  const partySet = new Set(parties)
  const intendedVotes = new Set([...parties, ...INTENDED_VOTE_EXTRA_IDS])

  const ageRange = parseOptionalMember(record.ageRange, ages)
  if (ageRange === undefined) {
    return null
  }

  const ethnicities = parseEthnicities(record.ethnicities, ethnicitiesAllowed)
  if (ethnicities === undefined) {
    return null
  }

  const intendedVote = parseOptionalMember(record.intendedVote, intendedVotes)
  if (intendedVote === undefined) {
    return null
  }

  const feltWealth = parseOptionalFeltWealth(record.feltWealth)
  if (feltWealth === undefined) {
    return null
  }

  const guesses = parseGuesses(
    record.guesses,
    record.correct,
    record.attempted,
    partySet,
  )
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

export function parseScoreRecord(
  value: unknown,
  eventId: EventId,
): ScoreRecord | null {
  const input = parseScoreRecordInput(value, eventId)
  if (!input || value === null || typeof value !== 'object') {
    return null
  }

  const recordedOn = (value as { recordedOn?: unknown }).recordedOn
  if (typeof recordedOn !== 'string' || !RECORDED_ON.test(recordedOn)) {
    return null
  }

  return { ...input, recordedOn }
}

export function scoreRecordsToCsv(
  records: ScoreRecord[],
  eventId: EventId,
): string {
  const parties = eventPartyIds(eventId)
  const header = [
    'recordedOn',
    'correct',
    'attempted',
    ...parties,
    'ageRange',
    'ethnicities',
    'intendedVote',
    'feltWealth',
  ].join(',')
  const rows = records.map((record) => {
    const partyScores = Object.fromEntries(
      scoresByGuessedParty(record.guesses, parties).map((bucket) => [
        bucket.party,
        partyScoreLabel(bucket),
      ]),
    ) as Record<string, string>

    return [
      record.recordedOn,
      String(record.correct),
      String(record.attempted),
      ...parties.map((party) => partyScores[party] ?? ''),
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

function parseEthnicities(
  value: unknown,
  allowedIds: readonly string[],
): Ethnicity[] | null | undefined {
  if (value === undefined || value === null) {
    return null
  }
  if (!Array.isArray(value)) {
    return undefined
  }
  if (value.length === 0) {
    return null
  }

  const allowed = new Set(allowedIds)
  const parsed: Ethnicity[] = []
  for (const item of value) {
    if (typeof item !== 'string' || !allowed.has(item)) {
      return undefined
    }
    parsed.push(item as Ethnicity)
  }

  return uniqueEthnicities(parsed, allowedIds)
}

function uniqueEthnicities(
  values: Ethnicity[],
  order: readonly string[],
): Ethnicity[] {
  return order.filter((id) => values.includes(id as Ethnicity)) as Ethnicity[]
}

/** `undefined` means the field was invalid; `null` means a legacy row. */
function parseGuesses(
  value: unknown,
  correct: number,
  attempted: number,
  parties: Set<string>,
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
    const guess = parseGuess(item, parties)
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

function parseGuess(value: unknown, parties: Set<string>): StoredGuess | null {
  if (value === null || typeof value !== 'object') {
    return null
  }

  const item = value as {
    guessedParty?: unknown
    targetParty?: unknown
    correct?: unknown
  }
  if (typeof item.guessedParty !== 'string' || !parties.has(item.guessedParty)) {
    return null
  }
  if (typeof item.targetParty !== 'string' || !parties.has(item.targetParty)) {
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
