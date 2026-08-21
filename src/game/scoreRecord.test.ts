import { describe, expect, it } from 'vitest'
import {
  backgroundFromAnswers,
  emptyBackground,
  parseScoreRecord,
  parseScoreRecordInput,
  scoreRecordsToCsv,
  stampScoreRecord,
} from './scoreRecord'

describe('parseScoreRecordInput', () => {
  it('accepts a session score with no background', () => {
    expect(
      parseScoreRecordInput({ correct: 7, attempted: 10 }),
    ).toEqual({
      correct: 7,
      attempted: 10,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
    })
  })

  it('keeps optional background when it is in the allowed sets', () => {
    expect(
      parseScoreRecordInput({
        correct: 3,
        attempted: 10,
        ageRange: '25-34',
        ethnicities: ['maori', 'european', 'maori'],
        intendedVote: 'green',
        userId: 'should-be-ignored',
        recordedOn: '1999-01-01',
      }),
    ).toEqual({
      correct: 3,
      attempted: 10,
      ageRange: '25-34',
      ethnicities: ['european', 'maori'],
      intendedVote: 'green',
    })
  })

  it('rejects identifiers, out-of-range scores, and unknown answers', () => {
    expect(parseScoreRecordInput(null)).toBeNull()
    expect(parseScoreRecordInput({ correct: 0, attempted: 0 })).toBeNull()
    expect(parseScoreRecordInput({ correct: 4, attempted: 3 })).toBeNull()
    expect(parseScoreRecordInput({ correct: 1, attempted: 11 })).toBeNull()
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 1,
        ageRange: '21',
      }),
    ).toBeNull()
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 1,
        ethnicities: ['kiwi'],
      }),
    ).toBeNull()
  })
})

describe('parseScoreRecord', () => {
  it('requires a UTC calendar day, not a time', () => {
    expect(
      parseScoreRecord({
        correct: 1,
        attempted: 1,
        recordedOn: '2026-08-21',
      }),
    ).toEqual({
      correct: 1,
      attempted: 1,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      recordedOn: '2026-08-21',
    })
    expect(
      parseScoreRecord({
        correct: 1,
        attempted: 1,
        recordedOn: '2026-08-21T09:00:00.000Z',
      }),
    ).toBeNull()
  })
})

describe('stampScoreRecord', () => {
  it('writes the server day and ignores a client date', () => {
    const input = parseScoreRecordInput({
      correct: 2,
      attempted: 10,
      recordedOn: '1999-01-01',
    })
    if (!input) {
      throw new Error('expected a valid input')
    }

    expect(stampScoreRecord(input, new Date('2026-08-21T23:15:00.000Z'))).toEqual({
      correct: 2,
      attempted: 10,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      recordedOn: '2026-08-21',
    })
  })
})

describe('backgroundFromAnswers', () => {
  it('treats an empty ethnicity list as skipped', () => {
    expect(backgroundFromAnswers(emptyBackground())).toEqual({
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
    })
  })
})

describe('scoreRecordsToCsv', () => {
  it('joins ethnicities and leaves skipped fields empty', () => {
    expect(
      scoreRecordsToCsv([
        {
          correct: 7,
          attempted: 10,
          ageRange: '25-34',
          ethnicities: ['european', 'maori'],
          intendedVote: 'green',
          recordedOn: '2026-08-21',
        },
        {
          correct: 1,
          attempted: 10,
          ageRange: null,
          ethnicities: null,
          intendedVote: null,
          recordedOn: '2026-08-21',
        },
      ]),
    ).toBe(
      [
        'recordedOn,correct,attempted,ageRange,ethnicities,intendedVote',
        '2026-08-21,7,10,25-34,european;maori,green',
        '2026-08-21,1,10,,,',
      ].join('\n'),
    )
  })
})
