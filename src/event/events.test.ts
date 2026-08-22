import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  CURRENT_EVENT_ID,
  EVENT_IDS,
  eventCardsPath,
  eventGamePath,
  eventIdFromAppPath,
  eventIdFromGamePath,
  eventIdFromLlmsPath,
  eventIdFromRequest,
  eventIdFromScoresPath,
  eventLlmsPath,
  eventLlmsPolicyPath,
  eventLabel,
  llmsHrefForHtmlPath,
  eventPath,
  eventQuestionsPath,
  eventResultsPath,
  eventScoresPath,
  eventStatus,
  specIdFromLlmsPath,
  eventViewFromPath,
  parseEventId,
  redisKeyForEvent,
} from './events'

const DIRECTORY_HTML = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../index.html',
)

describe('event labels and status', () => {
  it('assigns a label and status to each event', () => {
    expect(eventLabel('nz-election-2026')).toBe('NZ 2026')
    expect(eventStatus('nz-election-2026')).toBe('Review')
    expect(eventStatus('se-election-2026')).toBe('Researching Policies')
  })
})

describe('event cards paths', () => {
  it('scopes the generated dataset under the event url and language', () => {
    expect(eventCardsPath('nz-election-2026', 'en')).toBe(
      '/nz-election-2026/cards.en.json',
    )
    expect(eventCardsPath('se-election-2026', 'sv')).toBe(
      '/se-election-2026/cards.sv.json',
    )
    expect(eventCardsPath('se-election-2026', 'en')).toBe(
      '/se-election-2026/cards.en.json',
    )
  })
})

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

describe('event questions and results paths', () => {
  it('scopes the optional questions and final score under the event url', () => {
    expect(eventQuestionsPath(CURRENT_EVENT_ID)).toBe(
      '/nz-election-2026/questions',
    )
    expect(eventResultsPath(CURRENT_EVENT_ID)).toBe(
      '/nz-election-2026/results',
    )
    expect(eventViewFromPath('/nz-election-2026/questions')).toBe('questions')
    expect(eventViewFromPath('/nz-election-2026/questions/')).toBe('questions')
    expect(eventViewFromPath('/nz-election-2026/results')).toBe('results')
    expect(eventViewFromPath('/nz-election-2026/results/')).toBe('results')
    expect(eventViewFromPath('/nz-election-2026/scores')).toBe('board')
    expect(eventIdFromAppPath('/nz-election-2026/questions')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromAppPath('/nz-election-2026/results')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromAppPath('/nz-election-2026/game')).toBe(
      'nz-election-2026',
    )
    expect(eventIdFromAppPath('/nz-election-2026/scores')).toBeNull()
    expect(eventIdFromAppPath('/nz-election-2026/')).toBeNull()
  })
})

describe('home directory', () => {
  it('lists each event without a visible llms.txt link', () => {
    const html = readFileSync(DIRECTORY_HTML, 'utf8')
    for (const eventId of EVENT_IDS) {
      expect(html).toContain(`href="${eventPath(eventId)}"`)
      expect(html).not.toContain(`href="${eventLlmsPath(eventId)}"`)
    }
    expect(html).not.toMatch(/<th>\s*llms\.txt\s*<\/th>/)
  })

  it('links the title back to the home page', () => {
    const html = readFileSync(DIRECTORY_HTML, 'utf8')
    expect(html).toMatch(/<a href="\/">POLICYBIAS<\/a>/)
  })

  it('puts terms, privacy and contact next to Gurki in the footer', () => {
    const html = readFileSync(DIRECTORY_HTML, 'utf8')
    expect(html).toContain('href="/terms/"')
    expect(html).toContain('href="/privacy/"')
    expect(html).toContain(
      'href="https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e"',
    )
  })

  it('lists each event status on the home directory', () => {
    const html = readFileSync(DIRECTORY_HTML, 'utf8')
    expect(html).toMatch(/<th>\s*Status\s*<\/th>/)
    for (const eventId of EVENT_IDS) {
      const status = eventStatus(eventId)
      expect(html).toMatch(
        new RegExp(
          `${eventId}[\\s\\S]*?<td class="event-status">${status}</td>`,
        ),
      )
    }
  })
})
