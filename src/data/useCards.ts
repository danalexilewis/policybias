import { useEffect, useState } from 'react'
import type { CardsDataset } from './types'
import { cardsDatasetSchema } from './schema'

export type UseCardsResult = {
  data: CardsDataset | null
  error: Error | null
  loading: boolean
}

/**
 * Fetch and Zod-validate `cards.json` from the Vite base URL.
 * Throws a clear error message when the payload is invalid.
 */
export function useCards(): UseCardsResult {
  const [result, setResult] = useState<UseCardsResult>({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    let cancelled = false

    async function loadCards() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}cards.json`)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch cards.json (${response.status} ${response.statusText})`,
          )
        }

        const json: unknown = await response.json()
        const parsed = cardsDatasetSchema.safeParse(json)

        if (!parsed.success) {
          const detail = parsed.error.issues
            .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
            .join('; ')
          throw new Error(`Invalid cards.json — ${detail}`)
        }

        if (parsed.data.schemaVersion !== '2') {
          throw new Error(
            `Unsupported cards.json schemaVersion "${String(parsed.data.schemaVersion)}" (expected "2")`,
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
  }, [])

  return result
}
