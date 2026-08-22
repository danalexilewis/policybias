import { eventIdFromRequest } from '../src/event/events'
import { createScoreRecordStore } from '../src/game/scoreRecordStore'
import { handleScoreRecordsRequest } from '../src/game/handleScoreRecords'

export const config = { runtime: 'edge' }

export default function handler(request: Request): Promise<Response> {
  const eventId = eventIdFromRequest(new URL(request.url))
  if (!eventId) {
    return Promise.resolve(new Response('Not found', { status: 404 }))
  }
  return handleScoreRecordsRequest(
    request,
    createScoreRecordStore(eventId),
  )
}
