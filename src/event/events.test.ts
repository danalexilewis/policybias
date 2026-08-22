import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  CURRENT_EVENT_ID,
  EVENT_IDS,
  eventGamePath,
  eventIdFromGamePath,
  eventIdFromLlmsPath,
  eventIdFromRequest,
  eventIdFromScoresPath,
  eventLlmsPath,
  eventLlmsPolicyPath,
  llmsHrefForHtmlPath,
  eventPath,
  eventScoresPath,
  specIdFromLlmsPath,
  eventViewFromPath,
  parseEventId,
  redisKeyForEvent,
} from './events'

const DIRECTORY_HTML = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../index.html',
)

describe('event scores paths', () => {
  it('scopes the public dataset under the event url', () => {
    expect(eventScoresPath(CURRENT_EVENT_ID)).toBe('/nz-election-2026/scores')
    expect(eventIdFromScoresPath('/nz-election-2026/scores')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromScoresPath('/nz-election-2026/scores/')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromScoresPath('/scores')).toBeNull()
    expect(parseEventId('other-election')).toBeNull()
  })

  it('scopes llms.txt under the event url as a sibling of scores', () => {
    expect(eventLlmsPath(CURRENT_EVENT_ID)).toBe('/nz-election-2026/llms.txt')
    expect(eventLlmsPolicyPath(CURRENT_EVENT_ID, 'labour-futurefund')).toBe(
      '/nz-election-2026/llms/labour-futurefund.txt',
    )
    expect(eventIdFromLlmsPath('/nz-election-2026/llms.txt')).toBe(
      'nz-election-2026',
    )
    expect(
      eventIdFromLlmsPath('/nz-election-2026/llms/labour-futurefund.txt'),
    ).toBe('nz-election-2026')
    expect(specIdFromLlmsPath('/nz-election-2026/llms.txt')).toBeNull()
    expect(
      specIdFromLlmsPath('/nz-election-2026/llms/labour-futurefund.txt'),
    ).toBe('labour-futurefund')
    expect(eventIdFromLlmsPath('/llms.txt')).toBeNull()
    expect(llmsHrefForHtmlPath('/index.html')).toBe('/llms.txt')
    expect(llmsHrefForHtmlPath('index.html')).toBe('/llms.txt')
    expect(llmsHrefForHtmlPath('/nz-election-2026/index.html')).toBe(
      '/nz-election-2026/llms.txt',
    )
    expect(llmsHrefForHtmlPath('nz-election-2026/index.html')).toBe(
      '/nz-election-2026/llms.txt',
    )
  })

  it('reads the event from the path or a rewrite query', () => {
    expect(
      eventIdFromRequest(new URL('http://example.test/nz-election-2026/scores')),
    ).toBe('nz-election-2026')
    expect(
      eventIdFromRequest(
        new URL('http://example.test/api/scores?event=nz-election-2026'),
      ),
    ).toBe('nz-election-2026')
    expect(redisKeyForEvent('nz-election-2026')).toBe(
      'policybias.score-records:nz-election-2026',
    )
  })
})

describe('event game path', () => {
  it('scopes the game under the event url', () => {
    expect(eventGamePath(CURRENT_EVENT_ID)).toBe('/nz-election-2026/game')
    expect(eventIdFromGamePath('/nz-election-2026/game')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromGamePath('/nz-election-2026/game/')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromGamePath('/nz-election-2026/')).toBeNull()
    expect(eventViewFromPath('/nz-election-2026/game')).toBe('game')
    expect(eventViewFromPath('/nz-election-2026/')).toBe('board')
  })
})

describe('home directory', () => {
  it('lists each event llms.txt next to the event url', () => {
    const html = readFileSync(DIRECTORY_HTML, 'utf8')
    for (const eventId of EVENT_IDS) {
      expect(html).toContain(`href="${eventPath(eventId)}"`)
      expect(html).toContain(`href="${eventLlmsPath(eventId)}"`)
    }
  })
})
