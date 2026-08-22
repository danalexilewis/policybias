import { describe, expect, it } from 'vitest'
import {
  backgroundFromAnswers,
  emptyBackground,
  parseScoreRecord,
  parseScoreRecordInput,
  scoreRecordsToCsv,
  scoresByGuessedParty,
  partyScoreLabel,
  partyBarFill,
  stampScoreRecord,
} from './scoreRecord'

describe('parseScoreRecordInput', () => {
  it('accepts a session score with no background', () => {
    expect(
      parseScoreRecordInput({ correct: 7, attempted: 10 }),
    ).toEqual({
      correct: 7,
      attempted: 10,
      guesses: null,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      feltWealth: null,
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
        feltWealth: 7,
        userId: 'should-be-ignored',
        recordedOn: '1999-01-01',
      }),
    ).toEqual({
      correct: 3,
      attempted: 10,
      guesses: null,
      ageRange: '25-34',
      ethnicities: ['european', 'maori'],
      intendedVote: 'green',
      feltWealth: 7,
    })
  })

  it('keeps guesses when they match the session score', () => {
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 2,
        guesses: [
          { guessedParty: 'green', targetParty: 'green', correct: true },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
        ],
      }),
    ).toEqual({
      correct: 1,
      attempted: 2,
      guesses: [
        { guessedParty: 'green', targetParty: 'green', correct: true },
        { guessedParty: 'labour', targetParty: 'national', correct: false },
      ],
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      feltWealth: null,
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
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 1,
        feltWealth: 11,
      }),
    ).toBeNull()
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 1,
        feltWealth: 5.5,
      }),
    ).toBeNull()
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 1,
        guesses: [{ guessedParty: 'green', targetParty: 'labour', correct: true }],
      }),
    ).toBeNull()
    expect(
      parseScoreRecordInput({
        correct: 1,
        attempted: 2,
        guesses: [{ guessedParty: 'green', targetParty: 'green', correct: true }],
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
      guesses: null,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      feltWealth: null,
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
      guesses: null,
      ageRange: null,
      ethnicities: null,
      intendedVote: null,
      feltWealth: null,
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
      feltWealth: null,
    })
  })
})

describe('scoresByGuessedParty', () => {
  it('counts correct and attempted for each party the player picked', () => {
    expect(
      scoresByGuessedParty([
        { guessedParty: 'green', targetParty: 'green', correct: true },
        { guessedParty: 'green', targetParty: 'labour', correct: false },
        { guessedParty: 'labour', targetParty: 'national', correct: false },
      ]).filter((bucket) => bucket.attempted > 0),
    ).toEqual([
      { party: 'green', correct: 1, attempted: 2 },
      { party: 'labour', correct: 0, attempted: 1 },
    ])
  })

  it('formats a party score only when that party was guessed', () => {
    expect(partyScoreLabel({ party: 'green', correct: 1, attempted: 2 })).toBe(
      '1/2',
    )
    expect(partyScoreLabel({ party: 'act', correct: 0, attempted: 0 })).toBe('')
  })

  it('fills the bar completely when every guess of that party was right', () => {
    expect(partyBarFill({ party: 'green', correct: 2, attempted: 2 })).toBe(100)
    expect(partyBarFill({ party: 'labour', correct: 1, attempted: 2 })).toBe(50)
    expect(partyBarFill({ party: 'act', correct: 0, attempted: 1 })).toBe(0)
    expect(partyBarFill({ party: 'national', correct: 0, attempted: 0 })).toBe(0)
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
          feltWealth: 8,
          guesses: [
            { guessedParty: 'green', targetParty: 'green', correct: true },
            { guessedParty: 'labour', targetParty: 'national', correct: false },
          ],
          recordedOn: '2026-08-21',
        },
        {
          correct: 1,
          attempted: 10,
          guesses: null,
          ageRange: null,
          ethnicities: null,
          intendedVote: null,
          feltWealth: null,
          recordedOn: '2026-08-21',
        },
      ]),
    ).toBe(
      [
        'recordedOn,correct,attempted,act,green,labour,national,nz-first,opportunity,te-pati-maori,ageRange,ethnicities,intendedVote,feltWealth',
        '2026-08-21,7,10,,1/1,0/1,,,,,25-34,european;maori,green,8',
        '2026-08-21,1,10,,,,,,,,,,,',
      ].join('\n'),
    )
  })
})
