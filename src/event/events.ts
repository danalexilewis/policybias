export const EVENT_IDS = ['nz-election-2026'] as const

export type EventId = (typeof EVENT_IDS)[number]

export const CURRENT_EVENT_ID: EventId = 'nz-election-2026'

const EVENT_LABELS: Record<EventId, string> = {
  'nz-election-2026': 'NZ 2026',
}

export function eventLabel(eventId: EventId): string {
  return EVENT_LABELS[eventId]
}

export function eventPath(eventId: EventId): string {
  return `/${eventId}/`
}

export function eventScoresPath(eventId: EventId): string {
  return `/${eventId}/scores`
}

export function eventLlmsPath(eventId: EventId): string {
  return `/${eventId}/llms.txt`
}

/** Root llms.txt for the directory; event shells point at that event's file. */
export function llmsHrefForHtmlPath(htmlPath: string): string {
  const normalised = htmlPath.startsWith('/') ? htmlPath : `/${htmlPath}`
  const match = normalised.match(/^\/([^/]+)\/index\.html$/)
  const eventId = match ? parseEventId(match[1]) : null
  return eventId ? eventLlmsPath(eventId) : '/llms.txt'
}

export function eventLlmsPolicyPath(eventId: EventId, specId: string): string {
  return `/${eventId}/llms/${specId}.txt`
}

export function eventGamePath(eventId: EventId): string {
  return `/${eventId}/game`
}

export function eventQuestionsPath(eventId: EventId): string {
  return `/${eventId}/questions`
}

export function eventResultsPath(eventId: EventId): string {
  return `/${eventId}/results`
}

export type EventView = 'board' | 'game' | 'questions' | 'results'

export function eventIdFromGamePath(pathname: string): EventId | null {
  const match = pathname.match(/^\/([^/]+)\/game\/?$/)
  return parseEventId(match?.[1])
}

export function eventViewFromPath(pathname: string): EventView {
  if (pathname.match(/\/questions\/?$/)) {
    return 'questions'
  }
  if (pathname.match(/\/results\/?$/)) {
    return 'results'
  }
  return eventIdFromGamePath(pathname) ? 'game' : 'board'
}

export function parseEventId(value: string | null | undefined): EventId | null {
  if (!value) {
    return null
  }
  return (EVENT_IDS as readonly string[]).includes(value)
    ? (value as EventId)
    : null
}

export function eventIdFromAppPath(pathname: string): EventId | null {
  const match = pathname.match(/^\/([^/]+)\/(game|questions|results)\/?$/)
  return parseEventId(match?.[1])
}

export function eventIdFromScoresPath(pathname: string): EventId | null {
  const match = pathname.match(/^\/([^/]+)\/scores\/?$/)
  return parseEventId(match?.[1])
}

export function eventIdFromLlmsPath(pathname: string): EventId | null {
  const match = pathname.match(/^\/([^/]+)\/llms(?:\.txt|\/[^/]+\.txt)\/?$/)
  return parseEventId(match?.[1])
}

export function specIdFromLlmsPath(pathname: string): string | null {
  const match = pathname.match(/^\/[^/]+\/llms\/([^/]+)\.txt\/?$/)
  return match?.[1] ?? null
}

export function eventIdFromRequest(url: URL): EventId | null {
  return parseEventId(url.searchParams.get('event')) ?? eventIdFromScoresPath(url.pathname)
}

export function redisKeyForEvent(eventId: EventId): string {
  return `policybias.score-records:${eventId}`
}

export function localScoreRecordsPath(eventId: EventId): string {
  return `data/${eventId}/score-records.jsonl`
}
