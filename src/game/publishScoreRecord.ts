import type { ScoreRecordInput } from './scoreRecord'

/** Write a score record to the public dataset. Failures must not block results. */
export async function publishScoreRecord(
  input: ScoreRecordInput,
): Promise<void> {
  try {
    await fetch('/api/scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
  } catch {
    // Private mode, offline, or an unconfigured dataset should still show results.
  }
}
