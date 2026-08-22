import { describe, expect, it } from 'vitest'
import { parseArgs } from '../scripts/build-cards.ts'
import { eventCardsPath } from '../src/event/events.ts'

describe('build-cards CLI', () => {
  it('defaults to every event and language', () => {
    expect(parseArgs([])).toEqual({ eventId: 'all', lang: 'all' })
  })

  it('accepts --event and --lang', () => {
    expect(parseArgs(['--event', 'se-election-2026', '--lang', 'en'])).toEqual({
      eventId: 'se-election-2026',
      lang: 'en',
    })
  })

  it('writes the file the app fetches from public/', () => {
    expect(eventCardsPath('nz-election-2026', 'en')).toBe(
      '/nz-election-2026/cards.en.json',
    )
  })
})
