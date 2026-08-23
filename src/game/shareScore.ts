import {
  CURRENT_EVENT_ID,
  eventGamePath,
  type EventId,
  type Lang,
} from '../event/events'
import { eventUiKey, translate } from '../i18n/messages'

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
  eventId?: EventId
  lang?: Lang
}): ScoreSharePayload {
  const eventId = args.eventId ?? CURRENT_EVENT_ID
  const lang = args.lang ?? 'en'
  const event = translate(lang, eventUiKey(eventId))
  return {
    title: translate(lang, 'shareTitle', { event }),
    text: translate(lang, 'shareText', {
      correct: args.correct,
      attempted: args.attempted,
      event,
    }),
    url: `${args.origin}${eventGamePath(eventId)}`,
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
