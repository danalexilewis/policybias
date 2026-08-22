import { CURRENT_EVENT_ID, eventGamePath, eventLabel } from '../event/events'

export type ScoreSharePayload = {
  title: string
  text: string
  url: string
}

/** Copy and Web Share payload for a finished game. */
export function scoreSharePayload(args: {
  correct: number
  attempted: number
  origin: string
}): ScoreSharePayload {
  const label = eventLabel(CURRENT_EVENT_ID)
  return {
    title: `Policy Bias — ${label}`,
    text: `I scored ${args.correct}/${args.attempted} on Policy Bias — ${label}. Guess the party from the policy.`,
    url: `${args.origin}${eventGamePath(CURRENT_EVENT_ID)}`,
  }
}

export type ShareScoreApi = {
  share?: (data: ShareData) => Promise<void>
  writeText: (text: string) => Promise<void>
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError'
}

/** Native share when the browser has it; otherwise copy title, text and url. */
export async function shareScore(
  payload: ScoreSharePayload,
  api: ShareScoreApi,
): Promise<'shared' | 'copied'> {
  if (api.share) {
    try {
      await api.share({
        title: payload.title,
        text: payload.text,
        url: payload.url,
      })
      return 'shared'
    } catch (error) {
      if (isAbortError(error)) {
        throw error
      }
    }
  }

  await api.writeText(`${payload.text}\n${payload.url}`)
  return 'copied'
}
