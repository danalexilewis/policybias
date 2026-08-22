import { redisKeyForEvent, type EventId } from '../event/events'
import { parseScoreRecord, type ScoreRecord } from './scoreRecord'

export type ScoreRecordStore = {
  append(record: ScoreRecord): Promise<void>
  list(): Promise<ScoreRecord[]>
}

export class ScoreDatasetUnavailableError extends Error {
  constructor() {
    super('Score dataset is not configured')
    this.name = 'ScoreDatasetUnavailableError'
  }
}

type RedisEnv = {
  KV_REST_API_URL?: string
  KV_REST_API_TOKEN?: string
  UPSTASH_REDIS_REST_URL?: string
  UPSTASH_REDIS_REST_TOKEN?: string
}

export function memoryScoreRecordStore(
  initial: ScoreRecord[] = [],
): ScoreRecordStore {
  const records = [...initial]
  return {
    async append(record: ScoreRecord): Promise<void> {
      records.push(record)
    },
    async list(): Promise<ScoreRecord[]> {
      return [...records]
    },
  }
}

export function unavailableScoreRecordStore(): ScoreRecordStore {
  return {
    async append(): Promise<void> {
      throw new ScoreDatasetUnavailableError()
    },
    async list(): Promise<ScoreRecord[]> {
      return []
    },
  }
}

export function kvScoreRecordStore(
  url: string,
  token: string,
  eventId: EventId,
): ScoreRecordStore {
  const key = redisKeyForEvent(eventId)
  return {
    async append(record: ScoreRecord): Promise<void> {
      await redisCommand(url, token, ['RPUSH', key, JSON.stringify(record)])
    },
    async list(): Promise<ScoreRecord[]> {
      const result = await redisCommand(url, token, ['LRANGE', key, '0', '-1'])
      if (!Array.isArray(result)) {
        return []
      }

      const records: ScoreRecord[] = []
      for (const item of result) {
        const raw = typeof item === 'string' ? parseJson(item) : item
        const record = parseScoreRecord(raw)
        if (record) {
          records.push(record)
        }
      }
      return records
    },
  }
}

export function createScoreRecordStore(
  eventId: EventId,
  env: RedisEnv = process.env,
): ScoreRecordStore {
  const redis = redisFromEnv(env)
  if (redis) {
    return kvScoreRecordStore(redis.url, redis.token, eventId)
  }
  return unavailableScoreRecordStore()
}

export function redisFromEnv(
  env: RedisEnv,
): { url: string; token: string } | null {
  if (env.KV_REST_API_URL && env.KV_REST_API_TOKEN) {
    return { url: env.KV_REST_API_URL, token: env.KV_REST_API_TOKEN }
  }
  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
    return {
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    }
  }
  return null
}

async function redisCommand(
  url: string,
  token: string,
  command: string[],
): Promise<unknown> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  })
  if (!response.ok) {
    throw new Error(`Score dataset store returned ${response.status}`)
  }
  const payload = (await response.json()) as { result?: unknown }
  return payload.result
}

function parseJson(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
