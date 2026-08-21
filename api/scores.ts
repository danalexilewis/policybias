import { createScoreRecordStore } from '../src/game/scoreRecordStore'
import { handleScoreRecordsRequest } from '../src/game/handleScoreRecords'

export const config = { runtime: 'edge' }

export default function handler(request: Request): Promise<Response> {
  return handleScoreRecordsRequest(request, createScoreRecordStore())
}
