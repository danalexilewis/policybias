/** Lifetime game score kept in this browser. */

export type GameScore = {
  correct: number
  attempted: number
}

export const SCORE_STORAGE_KEY = 'policybias.game-score'

export type ScoreStorage = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export function emptyScore(): GameScore {
  return { correct: 0, attempted: 0 }
}

/** True when both counts are finite non-negative integers and correct cannot exceed attempted. */
function isGameScore(value: unknown): value is GameScore {
  if (value === null || typeof value !== 'object') {
    return false
  }

  const record = value as { correct?: unknown; attempted?: unknown }
  if (
    typeof record.correct !== 'number' ||
    typeof record.attempted !== 'number' ||
    !Number.isInteger(record.correct) ||
    !Number.isInteger(record.attempted) ||
    record.correct < 0 ||
    record.attempted < 0 ||
    record.correct > record.attempted
  ) {
    return false
  }

  return true
}

export function parseScore(raw: string | null): GameScore {
  if (raw === null) {
    return emptyScore()
  }

  try {
    const parsed: unknown = JSON.parse(raw)
    if (!isGameScore(parsed)) {
      return emptyScore()
    }
    return parsed
  } catch {
    return emptyScore()
  }
}

export function addGuess(score: GameScore, correct: boolean): GameScore {
  return {
    correct: score.correct + (correct ? 1 : 0),
    attempted: score.attempted + 1,
  }
}

export function loadScore(storage: ScoreStorage): GameScore {
  try {
    return parseScore(storage.getItem(SCORE_STORAGE_KEY))
  } catch {
    return emptyScore()
  }
}

export function saveScore(score: GameScore, storage: ScoreStorage): void {
  try {
    storage.setItem(SCORE_STORAGE_KEY, JSON.stringify(score))
  } catch {
    // Private mode and quota errors should not break the game.
  }
}
