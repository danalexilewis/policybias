import { describe, expect, it, vi } from 'vitest'
import { handleScoreRecordsRequest } from './handleScoreRecords'
import {
  memoryScoreRecordStore,
  unavailableScoreRecordStore,
} from './scoreRecordStore'

const NOW = new Date('2026-08-21T11:00:00.000Z')

function post(body: unknown): Request {
  return new Request('http://example.test/nz-election-2026/scores', {
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
        feltWealth: 4,
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
      feltWealth: 4,
      guesses: null,
      recordedOn: '2026-08-21',
    })

    const listed = await handleScoreRecordsRequest(
      new Request('http://example.test/nz-election-2026/scores?format=json'),
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
        guesses: null,
        ageRange: null,
        ethnicities: null,
        intendedVote: 'undecided',
        feltWealth: null,
        recordedOn: '2026-08-21',
      },
    ])

    const response = await handleScoreRecordsRequest(
      new Request('http://example.test/nz-election-2026/scores?format=csv'),
      store,
      NOW,
    )
    expect(response.headers.get('content-type')).toMatch(/text\/csv/)
    expect(await response.text()).toContain('undecided')
  })

  it('renders a public html table for browser visits to the event scores page', async () => {
    const store = memoryScoreRecordStore([
      {
        correct: 3,
        attempted: 10,
        ageRange: '25-34',
        ethnicities: ['maori'],
        intendedVote: 'green',
        feltWealth: 4,
        guesses: [
          { guessedParty: 'green', targetParty: 'green', correct: true },
          { guessedParty: 'green', targetParty: 'green', correct: true },
          { guessedParty: 'green', targetParty: 'green', correct: true },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
          { guessedParty: 'labour', targetParty: 'national', correct: false },
        ],
        recordedOn: '2026-08-21',
      },
    ])

    const response = await handleScoreRecordsRequest(
      new Request('http://example.test/nz-election-2026/scores', {
        headers: { accept: 'text/html' },
      }),
      store,
      NOW,
    )
    expect(response.headers.get('content-type')).toMatch(/text\/html/)
    const html = await response.text()
    expect(html).toContain('NZ 2026')
    expect(html).toContain('/nz-election-2026/scores?format=json')
    expect(html).toMatch(
      /<footer>\s*<a href="\/nz-election-2026\/llms\.txt">llms\.txt<\/a>/,
    )
    expect(html).toContain('href="/terms/"')
    expect(html).toContain('href="/privacy/"')
    expect(html).toContain('Total')
    expect(html).toContain('3 / 10')
    expect(html).toContain('<th>Green</th>')
    expect(html).toContain('<th>Labour</th>')
    expect(html).toContain('<td class="num">3/3</td>')
    expect(html).toContain('<td class="num">0/7</td>')
    expect(html).not.toContain('Green 3/3')
    expect(html).toContain('Māori')
    expect(html).toContain('smaller boats for 30 years')
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('Felt wealth')
    expect(html).toMatch(/<td>4<\/td>/)
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

  it('rejects a scores path that is not a known event', async () => {
    const response = await handleScoreRecordsRequest(
      new Request('http://example.test/other-election/scores'),
      memoryScoreRecordStore(),
      NOW,
    )
    expect(response.status).toBe(404)
  })
})
