import {
  EVENT_IDS,
  eventIdFromLlmsPath,
  eventLabel,
  eventLlmsPath,
  eventLlmsPolicyPath,
  specIdFromLlmsPath,
  type EventId,
} from '../event/events'
import { agentGlossaryText } from './agentGlossary'
import { listStatedPolicies, statedPolicyById } from './statedCorpus'

/** Site map: glossary plus one llms.txt per event. */
export function buildSiteLlmsTxt(): string {
  const links = EVENT_IDS.map((eventId) => {
    const href = eventLlmsPath(eventId)
    return `- [${eventLabel(eventId)}](${href}): stated policies and Gurki specs`
  }).join('\n')

  return `${agentGlossaryText()}

# Events

One llms.txt per event, sibling of that event's scores. If you were given a URL on this site, fetch that event's llms.txt. Do not scrape the card wall.

${links}
`
}

/** Event index: glossary plus one fetchable file per stated policy. */
export function buildEventLlmsTxt(eventId: EventId): string {
  const policies = listStatedPolicies(eventId)
  const links = policies
    .map((policy) => {
      const href = eventLlmsPolicyPath(eventId, policy.id)
      const note = policy.summary ? `: ${policy.summary}` : ''
      return `- [${policy.title}](${href})${note}`
    })
    .join('\n')

  return `${agentGlossaryText()}

# Stated policies and Gurki specs

One file per policy, sibling of scores. This is what the parties published, and the Gurki spec of that page. It is not our understanding. Gaps, assumptions, and derived specs are not included.

${links}
`
}

/** One policy: stated Gurki spec and source page. Derived understanding omitted. */
export function buildPolicyLlmsTxt(
  eventId: EventId,
  specId: string,
): string | null {
  const policy = statedPolicyById(eventId, specId)
  if (!policy) {
    return null
  }

  const page = policy.page
    ? `## Party policy page\n\n${policy.page.body.trim()}\n\n`
    : ''

  return `${agentGlossaryText()}

# ${policy.title}

Stated only. Gaps, assumptions, and derived understanding are omitted. House glossary is at ${eventLlmsPath(eventId)}.

${page}## Gurki spec (stated)

${policy.spec.body.trim()}
`
}

/** Markdown for a site or event llms path, or null when the path is not an llms route. */
export function llmsTxtForPath(pathname: string): string | null {
  const path = trimTrailingSlash(pathname)
  if (path === '/llms.txt') {
    return buildSiteLlmsTxt()
  }

  const eventId = eventIdFromLlmsPath(path)
  if (!eventId) {
    return null
  }

  const specId = specIdFromLlmsPath(path)
  if (!specId) {
    return buildEventLlmsTxt(eventId)
  }

  return buildPolicyLlmsTxt(eventId, specId)
}

function trimTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}
