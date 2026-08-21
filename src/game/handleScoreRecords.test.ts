import { describe, expect, it, vi } from 'vitest'
import { handleScoreRecordsRequest } from './handleScoreRecords'
import {
  memoryScoreRecordStore,
  unavailableScoreRecordStore,
} from './scoreRecordStore'

const NOW = new Date('2026-08-21T11:00:00.000Z')

function post(body: unknown): Request {
  return new Request('http://example.test/api/scores', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': '203.0.113.8',
      'user-agent': 'identity-probe',
    },
    body: JSON.stringify(body),
  })
}

describe('handleScoreRecordsRequest', () => {
  it('appends a stamped record and lists it without request headers', async () => {
    const store = memoryScoreRecordStore()

    const created = await handleScoreRecordsRequest(
      post({
        correct: 6,
        attempted: 10,
        ageRange: '35-44',
        ethnicities: ['pacific'],
        intendedVote: 'labour',
      }),
      store,
      NOW,
    )
    expect(created.status).toBe(201)
    expect(await created.json()).toEqual({
      correct: 6,
      attempted: 10,
      ageRange: '35-44',
      ethnicities: ['pacific'],
      intendedVote: 'labour',
      recordedOn: '2026-08-21',
    })

    const listed = await handleScoreRecordsRequest(
      new Request('http://example.test/api/scores'),
      store,
      NOW,
    )
    expect(listed.headers.get('access-control-allow-origin')).toBe('*')
    const rows = await listed.json()
    expect(rows).toHaveLength(1)
    expect(JSON.stringify(rows)).not.toContain('203.0.113.8')
    expect(JSON.stringify(rows)).not.toContain('identity-probe')
  })

  it('returns csv when asked', async () => {
    const store = memoryScoreRecordStore([
      {
        correct: 2,
        attempted: 10,
        ageRange: null,
        ethnicities: null,
        intendedVote: 'undecided',
        recordedOn: '2026-08-21',
      },
    ])

    const response = await handleScoreRecordsRequest(
      new Request('http://example.test/api/scores?format=csv'),
      store,
      NOW,
    )
    expect(response.headers.get('content-type')).toMatch(/text\/csv/)
    expect(await response.text()).toContain('undecided')
  })

  it('rejects a malformed body', async () => {
    const response = await handleScoreRecordsRequest(
      post({ correct: 9, attempted: 1 }),
      memoryScoreRecordStore(),
      NOW,
    )
    expect(response.status).toBe(400)
  })

  it('keeps the game moving when the dataset is not configured', async () => {
    const response = await handleScoreRecordsRequest(
      post({ correct: 1, attempted: 1 }),
      unavailableScoreRecordStore(),
      NOW,
    )
    expect(response.status).toBe(503)
  })

  it('does not call the store for an invalid payload', async () => {
    const store = memoryScoreRecordStore()
    const append = vi.spyOn(store, 'append')
    await handleScoreRecordsRequest(
      post({ correct: -1, attempted: 1 }),
      store,
      NOW,
    )
    expect(append).not.toHaveBeenCalled()
  })
})
