import { useState } from 'react'
import {
  addGuess,
  loadScore,
  saveScore,
  type GameScore,
} from './scoreStore'

/** Lifetime score for this browser, written after every guess. */
export function useLifetimeScore(): {
  score: GameScore
  recordGuess: (correct: boolean) => void
} {
  const [score, setScore] = useState(() => loadScore(window.localStorage))

  function recordGuess(correct: boolean): void {
    const next = addGuess(score, correct)
    saveScore(next, window.localStorage)
    setScore(next)
  }

  return { score, recordGuess }
}
