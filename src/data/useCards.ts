import { useEffect, useState } from 'react'
import type { CardsDataset } from './types'
import { cardsDatasetSchema } from './schema'
import { eventCardsPath, type EventId, type Lang } from '../event/events'

export type UseCardsResult = {
  data: CardsDataset | null
  error: Error | null
  loading: boolean
}

/**
 * Fetch and Zod-validate `cards.<lang>.json` for the given event.
 */
export function useCards(eventId: EventId, lang: Lang): UseCardsResult {
  const [result, setResult] = useState<UseCardsResult>({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    let cancelled = false
    const url = eventCardsPath(eventId, lang)

    async function loadCards() {
      setResult({ data: null, error: null, loading: true })
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch ${url} (${response.status} ${response.statusText})`,
          )
        }

        const json = await readCardsJson(response, url)
        const parsed = cardsDatasetSchema.safeParse(json)

        if (!parsed.success) {
          const detail = parsed.error.issues
            .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
            .join('; ')
          throw new Error(`Invalid cards.json — ${detail}`)
        }

        if (parsed.data.schemaVersion !== '3') {
          throw new Error(
            `Unsupported cards.json schemaVersion "${String(parsed.data.schemaVersion)}" (expected "3")`,
          )
        }

        if (!cancelled) {
          setResult({ data: parsed.data, error: null, loading: false })
        }
      } catch (cause) {
        if (!cancelled) {
          const error =
            cause instanceof Error ? cause : new Error(String(cause))
          setResult({ data: null, error, loading: false })
        }
      }
    }

    void loadCards()

    return () => {
      cancelled = true
    }
  }, [eventId, lang])

  return result
}

/**
 * Vite's SPA fallback returns 200 HTML when the generated file is missing.
 * Reject that before JSON.parse, whose error is otherwise opaque.
 */
async function readCardsJson(response: Response, url: string): Promise<unknown> {
  const raw = await response.text()
  const contentType = response.headers.get('content-type') ?? ''
  if (contentType.includes('text/html') || raw.trimStart().startsWith('<')) {
    throw new Error(`Failed to fetch ${url} — got HTML instead of JSON`)
  }
  return JSON.parse(raw) as unknown
}
