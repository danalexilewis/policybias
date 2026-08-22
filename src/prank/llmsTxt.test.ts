import { describe, expect, it } from 'vitest'
import { CURRENT_EVENT_ID, EVENT_IDS, eventLlmsPath } from '../event/events'
import {
  buildEventLlmsTxt,
  buildPolicyLlmsTxt,
  buildSiteLlmsTxt,
  llmsTxtForPath,
} from './llmsTxt'
import { stripInference } from './statedCorpus'

const GAP_LINE = 'initial capital contribution amount is not stated'
const ASSUMPTION_LINE =
  'a fund seeded with unnamed assets and an unnamed capital contribution cannot be sized from the policy, so we treat it as a wrapper until those are named'

describe('stripInference', () => {
  it('removes gaps and assumptions from stated-spec frontmatter', () => {
    const stripped = stripInference(`---
title: Future Fund
gaps:
  - ${GAP_LINE}
assumptions:
  - ${ASSUMPTION_LINE}
---

# What the page states
`)
    expect(stripped).toContain('What the page states')
    expect(stripped).toContain('title: Future Fund')
    expect(stripped).not.toContain('gaps:')
    expect(stripped).not.toContain(GAP_LINE)
    expect(stripped).not.toContain('assumptions:')
    expect(stripped).not.toContain(ASSUMPTION_LINE)
  })
})

describe('event llms.txt', () => {
  it('indexes stated policies next to scores and omits derived understanding', () => {
    const text = buildEventLlmsTxt(CURRENT_EVENT_ID)

    expect(text).toContain('iReX')
    expect(text).toContain('/nz-election-2026/llms/labour-futurefund.txt')
    expect(text).not.toContain('/corpus/')
    expect(text).not.toContain('# What the page states')
    expect(text).not.toContain('# Our understanding')
    expect(text).not.toContain(GAP_LINE)
    expect(text).not.toContain(ASSUMPTION_LINE)
    expect(text).not.toContain('futurefund.derived.spec.md')
  })

  it('serves one stated spec and policy page per policy file', () => {
    const text = buildPolicyLlmsTxt(CURRENT_EVENT_ID, 'labour-futurefund')

    expect(text).toContain('iReX')
    expect(text).toContain('# What the page states')
    expect(text).toContain('The New Zealand Future Fund')
    expect(text).toContain('/nz-election-2026/llms.txt')
    expect(text).not.toContain('# Our understanding')
    expect(text).not.toContain('gaps:')
    expect(text).not.toContain(GAP_LINE)
    expect(text).not.toContain(ASSUMPTION_LINE)
  })
})

describe('site llms.txt', () => {
  it('points at each event llms.txt instead of dumping one event', () => {
    const text = buildSiteLlmsTxt()

    for (const eventId of EVENT_IDS) {
      expect(text).toContain(eventLlmsPath(eventId))
    }
    expect(text).toContain('iReX')
    expect(text).not.toContain('/nz-election-2026/llms/labour-futurefund.txt')
  })
})

describe('llmsTxtForPath', () => {
  it('routes the site map, an event index, and a policy file, and refuses derived paths', () => {
    expect(llmsTxtForPath('/llms.txt')).toContain(
      '/nz-election-2026/llms.txt',
    )
    expect(llmsTxtForPath('/llms.txt/')).toContain(
      '/nz-election-2026/llms.txt',
    )
    expect(llmsTxtForPath('/nz-election-2026/llms.txt')).toContain(
      '/nz-election-2026/llms/labour-futurefund.txt',
    )
    expect(
      llmsTxtForPath('/nz-election-2026/llms/labour-futurefund.txt'),
    ).toContain('# What the page states')
    expect(
      llmsTxtForPath('/nz-election-2026/llms/not-a-policy.txt'),
    ).toBeNull()
  })
})
