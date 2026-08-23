import {
  eventIdFromRequest,
  eventScoresPath,
  type EventId,
} from '../event/events'
import {
  parseScoreRecordInput,
  scoreRecordsToCsv,
  stampScoreRecord,
} from './scoreRecord'
import { scoresPageHtml, scoresPageLang } from './scoresPage'
import {
  ScoreDatasetUnavailableError,
  type ScoreRecordStore,
} from './scoreRecordStore'

const GET_HEADERS = {
  'cache-control': 'no-store',
  'access-control-allow-origin': '*',
}

export async function handleScoreRecordsRequest(
  request: Request,
  store: ScoreRecordStore,
  now: Date = new Date(),
): Promise<Response> {
  const url = new URL(request.url)
  const eventId = eventIdFromRequest(url)
  if (!eventId) {
    return new Response('Not found', { status: 404 })
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET, OPTIONS',
      },
    })
  }

  if (request.method === 'GET') {
    const records = await store.list()
    const format = url.searchParams.get('format')
    if (format === 'csv') {
      return new Response(scoreRecordsToCsv(records, eventId), {
        headers: {
          ...GET_HEADERS,
          'content-type': 'text/csv; charset=utf-8',
        },
      })
    }
    if (wantsHtmlPage(url, request, eventId)) {
      return new Response(scoresPageHtml(records, eventId, scoresPageLang(url, eventId)), {
        headers: {
          ...GET_HEADERS,
          'content-type': 'text/html; charset=utf-8',
        },
      })
    }
    return Response.json(records, { headers: GET_HEADERS })
  }

  if (request.method === 'POST') {
    let payload: unknown
    try {
      payload = await request.json()
    } catch {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const input = parseScoreRecordInput(payload, eventId)
    if (!input) {
      return Response.json({ error: 'Invalid score record' }, { status: 400 })
    }

    const record = stampScoreRecord(input, now)
    try {
      await store.append(record)
    } catch (error) {
      if (error instanceof ScoreDatasetUnavailableError) {
        return Response.json(
          { error: 'Score dataset is not configured' },
          { status: 503 },
        )
      }
      throw error
    }

    return Response.json(record, { status: 201 })
  }

  return new Response(null, {
    status: 405,
    headers: { allow: 'GET, POST, OPTIONS' },
  })
}

function wantsHtmlPage(
  url: URL,
  request: Request,
  eventId: EventId,
): boolean {
  if (url.searchParams.get('format') === 'json') {
    return false
  }
  const scoresPath = eventScoresPath(eventId)
  if (url.pathname === scoresPath || url.pathname === `${scoresPath}/`) {
    return true
  }
  const accept = request.headers.get('accept') ?? ''
  return accept.includes('text/html') && !accept.includes('application/json')
}
