import { CURRENT_EVENT_ID, eventScoresPath } from '../event/events'
import type { ScoreRecordInput } from './scoreRecord'

/** Write a score record to this event's public dataset. Failures must not block results. */
export async function publishScoreRecord(
  input: ScoreRecordInput,
): Promise<boolean> {
  try {
    const response = await fetch(eventScoresPath(CURRENT_EVENT_ID), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    return response.ok
  } catch {
    return false
  }
}
