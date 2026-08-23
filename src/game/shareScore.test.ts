import { describe, expect, it, vi } from 'vitest'
import { scoreSharePayload, shareScore } from './shareScore'

describe('scoreSharePayload', () => {
  it('names the score and points at the event game url', () => {
    expect(
      scoreSharePayload({
        correct: 7,
        attempted: 10,
        origin: 'https://policybias.example',
      }),
    ).toEqual({
      title: 'Policy Bias — NZ 2026',
      text: 'I scored 7/10 on Policy Bias — NZ 2026. Guess the party from the policy.',
      url: 'https://policybias.example/nz-election-2026/game',
    })
  })

  it('writes the share line in Swedish', () => {
    expect(
      scoreSharePayload({
        correct: 7,
        attempted: 10,
        origin: 'https://policybias.example',
        lang: 'sv',
        eventId: 'se-election-2026',
      }).text,
    ).toContain('Jag fick 7/10')
  })
})

describe('shareScore', () => {
  const payload = scoreSharePayload({
    correct: 3,
    attempted: 10,
    origin: 'https://policybias.example',
  })

  it('uses the web share api when it is available', async () => {
    const share = vi.fn().mockResolvedValue(undefined)
    const writeText = vi.fn()

    await expect(shareScore(payload, { share, writeText })).resolves.toBe(
      'shared',
    )
    expect(share).toHaveBeenCalledWith({
      title: payload.title,
      text: payload.text,
      url: payload.url,
    })
    expect(writeText).not.toHaveBeenCalled()
  })

  it('copies the score when web share is missing', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)

    await expect(shareScore(payload, { writeText })).resolves.toBe('copied')
    expect(writeText).toHaveBeenCalledWith(`${payload.text}\n${payload.url}`)
  })
})
