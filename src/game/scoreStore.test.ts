import { describe, expect, it } from 'vitest'
import {
  addGuess,
  emptyScore,
  loadScore,
  parseScore,
  saveScore,
  SCORE_STORAGE_KEY,
  type ScoreStorage,
} from './scoreStore'

function memoryStorage(initial: Record<string, string> = {}): ScoreStorage {
  const data = { ...initial }
  return {
    getItem(key: string): string | null {
      return data[key] ?? null
    },
    setItem(key: string, value: string): void {
      data[key] = value
    },
  }
}

describe('parseScore', () => {
  it('starts at zero when nothing is stored', () => {
    expect(parseScore(null)).toEqual({ correct: 0, attempted: 0 })
  })

  it('reads a stored score', () => {
    expect(parseScore(JSON.stringify({ correct: 7, attempted: 10 }))).toEqual({
      correct: 7,
      attempted: 10,
    })
  })

  it('rejects malformed or contradictory payloads', () => {
    expect(parseScore('not-json')).toEqual(emptyScore())
    expect(parseScore(JSON.stringify({ correct: 4 }))).toEqual(emptyScore())
    expect(parseScore(JSON.stringify({ correct: 5, attempted: 3 }))).toEqual(
      emptyScore(),
    )
    expect(parseScore(JSON.stringify({ correct: -1, attempted: 2 }))).toEqual(
      emptyScore(),
    )
  })
})

describe('addGuess', () => {
  it('counts a correct guess', () => {
    expect(addGuess(emptyScore(), true)).toEqual({ correct: 1, attempted: 1 })
  })

  it('counts a wrong guess without adding a point', () => {
    expect(addGuess({ correct: 2, attempted: 4 }, false)).toEqual({
      correct: 2,
      attempted: 5,
    })
  })
})

describe('loadScore and saveScore', () => {
  it('round-trips a score through storage', () => {
    const storage = memoryStorage()
    saveScore({ correct: 3, attempted: 8 }, storage)
    expect(storage.getItem(SCORE_STORAGE_KEY)).toBe(
      JSON.stringify({ correct: 3, attempted: 8 }),
    )
    expect(loadScore(storage)).toEqual({ correct: 3, attempted: 8 })
  })

  it('returns an empty score when storage throws', () => {
    const storage: ScoreStorage = {
      getItem(): string | null {
        throw new Error('blocked')
      },
      setItem(): void {
        throw new Error('blocked')
      },
    }

    expect(loadScore(storage)).toEqual(emptyScore())
    expect(() => saveScore({ correct: 1, attempted: 1 }, storage)).not.toThrow()
  })
})
