import { describe, expect, it } from 'vitest'
import {
  applyProvenance,
  digest,
  isCanonicalSpec,
  parseArgs,
  siblingPath,
  translationIsCurrent,
} from '../scripts/translate-specs.ts'

describe('parseArgs', () => {
  it('defaults to the Swedish event into English', () => {
    expect(parseArgs([])).toEqual({
      eventId: 'se-election-2026',
      to: 'en',
      check: false,
      force: false,
      dryRun: false,
      party: undefined,
      limit: undefined,
      model: 'auto',
    })
  })

  it('accepts party, limit, model, and check', () => {
    expect(
      parseArgs([
        '--event',
        'se-election-2026',
        '--to',
        'en',
        '--party',
        'vansterpartiet',
        '--limit',
        '1',
        '--model',
        'composer-2.5',
        '--check',
      ]),
    ).toMatchObject({
      party: 'vansterpartiet',
      limit: 1,
      model: 'composer-2.5',
      check: true,
    })
  })

  it('refuses translating into the canonical language', () => {
    expect(() => parseArgs(['--event', 'nz-election-2026', '--to', 'en'])).toThrow(
      /canonical language/,
    )
  })
})

describe('isCanonicalSpec', () => {
  it('accepts stated and derived canonical files', () => {
    expect(isCanonicalSpec('skattepolitik.spec.md')).toBe(true)
    expect(isCanonicalSpec('skattepolitik.derived.spec.md')).toBe(true)
  })

  it('rejects language siblings', () => {
    expect(isCanonicalSpec('skattepolitik.en.spec.md')).toBe(false)
    expect(isCanonicalSpec('skattepolitik.en.derived.spec.md')).toBe(false)
  })
})

describe('siblingPath', () => {
  it('inserts the language before spec.md', () => {
    expect(siblingPath('/corpus/party/skattepolitik.spec.md', 'en')).toBe(
      '/corpus/party/skattepolitik.en.spec.md',
    )
  })

  it('inserts the language before derived.spec.md', () => {
    expect(siblingPath('/corpus/party/skattepolitik.derived.spec.md', 'en')).toBe(
      '/corpus/party/skattepolitik.en.derived.spec.md',
    )
  })
})

describe('translationIsCurrent', () => {
  it('matches on the source digest string', () => {
    const hash = digest('source spec')
    expect(translationIsCurrent(`sourceSpecDigest: ${hash}\n`, hash)).toBe(true)
    expect(translationIsCurrent('sourceSpecDigest: sha256-deadbeef\n', hash)).toBe(false)
  })
})

describe('applyProvenance', () => {
  it('stamps translation fields without dropping the body', () => {
    const raw = `---
type: spec
id: fixture
title: Tax policy
---

System: Tax policy
`
    const next = applyProvenance(raw, {
      lang: 'en',
      translationOf: 'fixture',
      translator: 'cursor-agent',
      translatedAt: '2026-08-23',
      sourceSpecDigest: 'sha256-abc',
    })
    expect(next).toContain('lang: en')
    expect(next).toContain('translationOf: fixture')
    expect(next).toContain('translator: cursor-agent')
    expect(next).toContain('sourceSpecDigest: sha256-abc')
    expect(next).toContain('System: Tax policy')
  })
})
