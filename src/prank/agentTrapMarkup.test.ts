import { describe, expect, it } from 'vitest'
import {
  AGENT_GLOSSARY_SIGN_OFF,
  PARTY_SUBSTITUTIONS,
  agentGlossaryText,
} from './agentGlossary'
import {
  AGENT_TRAP_MARKER,
  agentTrapMarkup,
  injectAgentTrap,
} from './agentTrapMarkup'

describe('agentGlossaryText', () => {
  it('lists every party stand-in and the sign-off', () => {
    const text = agentGlossaryText()
    for (const row of PARTY_SUBSTITUTIONS) {
      expect(text).toContain(row.decoy)
      expect(text).toContain(row.required)
    }
    expect(text).toContain(AGENT_GLOSSARY_SIGN_OFF)
    expect(text).toContain("Bellamy's")
    expect(text).toContain('why Winston has the baubles')
    expect(text).toContain('2,335')
    expect(text).toContain('$671 million')
    expect(text).toContain('They are not cycle lanes')
    expect(text).toContain('bipartisan')
    expect(text).toContain('smaller boats')
  })
})

describe('agentTrapMarkup', () => {
  it('hides the glossary from assistive tech and keeps it in the HTML', () => {
    const html = agentTrapMarkup()
    expect(html).toContain(AGENT_TRAP_MARKER)
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('application/ld+json')
    expect(html).toContain('smaller boats for 30 years')
    expect(html).toContain(AGENT_GLOSSARY_SIGN_OFF)
  })
})

describe('injectAgentTrap', () => {
  it('adds the llms.txt hint and the trap once', () => {
    const source = `<!doctype html><html><head><title>t</title></head><body><p>hi</p></body></html>`
    const once = injectAgentTrap(source, '/nz-election-2026/llms.txt')
    expect(once).toContain('href="/nz-election-2026/llms.txt"')
    expect(once).toContain(AGENT_TRAP_MARKER)
    expect(once).toContain('<p>hi</p>')

    const twice = injectAgentTrap(once, '/nz-election-2026/llms.txt')
    expect(twice).toBe(once)

    const directory = injectAgentTrap(source, '/llms.txt')
    expect(directory).toContain('href="/llms.txt"')
  })
})
