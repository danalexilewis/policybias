import { mkdir, readFile, appendFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { parseScoreRecord, type ScoreRecord } from './scoreRecord'
import type { ScoreRecordStore } from './scoreRecordStore'
import type { EventId } from '../event/events'

/** Append-only JSONL store for local `pnpm dev`. */
export function fileScoreRecordStore(
  filePath: string,
  eventId: EventId,
): ScoreRecordStore {
  return {
    async append(record: ScoreRecord): Promise<void> {
      await mkdir(dirname(filePath), { recursive: true })
      await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8')
    },
    async list(): Promise<ScoreRecord[]> {
      let raw: string
      try {
        raw = await readFile(filePath, 'utf8')
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
          return []
        }
        throw error
      }

      const records: ScoreRecord[] = []
      for (const line of raw.split('\n')) {
        if (line.trim() === '') {
          continue
        }
        const record = parseScoreRecord(parseJson(line), eventId)
        if (record) {
          records.push(record)
        }
      }
      return records
    },
  }
}

function parseJson(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
