import { readdirSync, readFileSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'
import { describe, expect, it } from 'vitest'
import YAML from 'yaml'

import { parseGurki } from 'gurki'
import {
  bodyAfterFrontmatter,
  combinedSourceBody,
  digestOf,
  expectedId,
  extractNumbers,
  findBoilerplate,
  findMarkersInStatedSpec,
  findMisplacedMeasures,
  findUnsourcedFigures,
  findUnsourcedProse,
  findMarkupInSpec,
  hasNumber,
  isFrameProse,
  normaliseHaystack,
  proseCoverage,
  sourceUrlsOf,
  type SpecFile
} from '../scripts/check-policy.ts'
import { findMarkerProblems } from '../scripts/extrapolated.ts'
import { extractNote, resolveActivates } from '../scripts/build-cards.ts'
import type { CardFace, PolicyCard } from '../src/data/types.ts'

const CORPUS_DIR = join(import.meta.dirname, '../corpus/nz-election-2026')

function parse(source: string) {
  const result = parseGurki(source, { path: 'fixture.spec.md' })
  if (!result.document) {
    throw new Error(`fixture did not parse: ${result.diagnostics.map((d) => d.code).join(', ')}`)
  }
  return result.document
}

function spec(body: string): string {
  return `---
type: spec
id: fixture
title: Fixture
---

${body}
`
}

describe('expectedId', () => {
  it('joins party and slug', () => {
    expect(expectedId('labour', 'capitalgainstax')).toBe('labour-capitalgainstax')
  })

  it('suffixes a derived spec', () => {
    expect(expectedId('labour', 'capitalgainstax', 'derived')).toBe(
      'labour-capitalgainstax-derived'
    )
  })

  it('converts underscores so Green manifesto slugs are valid ids', () => {
    expect(expectedId('green', 'manifesto_2026_energy')).toBe('green-manifesto-2026-energy')
  })

  it('collapses runs of punctuation from PDF slugs', () => {
    expect(expectedId('labour', 'media-pfvguai5-labour-cgt.pdf-pdf')).toBe(
      'labour-media-pfvguai5-labour-cgt-pdf-pdf'
    )
  })

  it('produces ids the Gurki frontmatter pattern accepts', () => {
    const pattern = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/
    expect(pattern.test(expectedId('te-pati-maori', 'mokopuna_m_ori'))).toBe(true)
    expect(pattern.test(expectedId('act', 'local_tourism_dividend', 'derived'))).toBe(true)
  })
})

describe('figure extraction', () => {
  it('reads numbers a policy page would print', () => {
    expect(extractNumbers('28% of the gain')).toEqual(['28'])
    expect(extractNumbers('$1,500 per birth')).toEqual(['1500'])
    expect(extractNumbers('$3.46 per meal ex-GST')).toEqual(['3.46'])
    expect(extractNumbers('19 departments consolidated from 43')).toEqual(['19', '43'])
  })

  it('ignores text with no figures', () => {
    expect(extractNumbers('no tax on the sale')).toEqual([])
  })

  it('matches a page that writes thousands with separators', () => {
    expect(hasNumber(normaliseHaystack('a $1,500 Baby Boost'), '1500')).toBe(true)
  })

  it('does not let a longer number satisfy a shorter one', () => {
    expect(hasNumber('280 departments', '28')).toBe(false)
    expect(hasNumber('a rate of 1.28 percent', '28')).toBe(false)
    expect(hasNumber('a rate of 28 percent', '28')).toBe(true)
  })
})

describe('findMarkupInSpec', () => {
  it('flags leftover HTML from a broken dump', () => {
    expect(findMarkupInSpec('> <html lang="sv" class="sv-no-js">')).toEqual(['<html', 'sv-no-js'])
  })

  it('passes ordinary Gurki prose', () => {
    expect(findMarkupInSpec('Then more hospital beds')).toEqual([])
  })
})

describe('findUnsourcedProse', () => {
  it('allows a quote that is on the page and the election frame', () => {
    const raw = spec(`# What the page states

> Sjukvården behöver inte bara resurser

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Sjukvården behöver inte bara resurser
Output Pengar ska gå till vård
`)
    const document = parse(raw)
    expect(
      findUnsourcedProse(
        document,
        raw,
        'Sjukvården behöver inte bara resurser. Pengar ska gå till vård, personal och patientmöten.',
      ),
    ).toEqual([])
  })

  it('catches a Then step that is not on the page', () => {
    const raw = spec(`Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then <script nonce="abc">void 0</script>
`)
    const document = parse(raw)
    expect(isFrameProse('the 2026 Swedish general election is contested')).toBe(true)
    expect(findUnsourcedProse(document, raw, 'Sjukvården behöver inte bara resurser').length).toBeGreaterThan(0)
  })

  it('allows a paraphrase that shares the page content-words', () => {
    const raw = spec(`Scenario: Party states this policy
Given people stay indoors because dangerous people move outdoors
When sentences are sharpened and victim redress is paid by the state
Then ordinary people can move freely outdoors
Output 40 percent more police funding
`)
    const document = parse(raw)
    const page =
      'I ett rättvist Sverige ska vanliga människor inte behöva stanna inne för att farliga människor rör sig ute. Brottsoffer ska få upprättelse. Anslaget till Polismyndigheten öka med 40 procent.'
    expect(proseCoverage('vanliga människor ska inte behöva stanna inne', page)).toBeGreaterThan(0.5)
    expect(findUnsourcedProse(document, raw, page).length).toBeGreaterThan(0)
  })

  it('rejects a claim with no content-word overlap', () => {
    const raw = spec(`Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then the state nationalises the entire steel industry tomorrow
`)
    const document = parse(raw)
    const page =
      'I ett rättvist Sverige ska vanliga människor inte behöva stanna inne för att farliga människor rör sig ute.'
    expect(findUnsourcedProse(document, raw, page).length).toBeGreaterThan(0)
  })
})

describe('findBoilerplate', () => {
  function stated(path: string, thenText: string): SpecFile {
    const raw = spec(`Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then ${thenText}
Outcome the claim is the party's stated position
`)
    return {
      party: 'labour',
      slug: path,
      kind: 'stated',
      lang: null,
      absolutePath: path,
      repoPath: path,
      raw,
      document: parse(raw)
    }
  }

  it('errors when the same Then line is used on more than three specs', () => {
    const specs = ['a', 'b', 'c', 'd'].map((id) =>
      stated(id, 'the intervention is what the page names')
    )
    expect(findBoilerplate(specs).some((problem) => problem.code === 'boilerplate_line')).toBe(
      true
    )
  })

  it('allows a line that appears on three specs or fewer', () => {
    const specs = ['a', 'b', 'c'].map((id, index) =>
      stated(id, `a distinct consequence for spec ${index}`)
    )
    expect(findBoilerplate(specs)).toEqual([])
  })
})

describe('findUnsourcedFigures', () => {
  const page = 'ACT would consolidate 43 departments into 19 coherent departments.'

  it('passes a figure that is on the page', () => {
    const document = parse(
      spec(`Scenario: Consolidation
When the government consolidates
Output 19 departments consolidated from 43`)
    )
    expect(findUnsourcedFigures(document, page)).toEqual([])
  })

  it('catches a figure the page never states', () => {
    const document = parse(
      spec(`Scenario: Consolidation
When the government consolidates
Output $900 million saved a year`)
    )
    expect(findUnsourcedFigures(document, page).map((figure) => figure.value)).toEqual(['900'])
  })

  it('checks every step kind, not just Output', () => {
    const document = parse(
      spec(`Scenario: Consolidation
Given 78 ministerial portfolios
When the government consolidates
Then 12 agencies merge`)
    )
    expect(findUnsourcedFigures(document, page).map((figure) => figure.value)).toEqual(['78', '12'])
  })

  it('refuses a marked figure by default, which is the stated-spec rule', () => {
    const document = parse(
      spec(`Scenario: Consolidation
When the government consolidates
# extrapolated: our own estimate
Output $900 million saved a year`)
    )
    expect(findUnsourcedFigures(document, page).map((figure) => figure.value)).toEqual(['900'])
  })

  it('accepts a marked figure when markers are allowed, which is the derived-spec rule', () => {
    const document = parse(
      spec(`Scenario: Consolidation
When the government consolidates
# extrapolated: arithmetic from the stated counts
Output 24 departments removed`)
    )
    expect(findUnsourcedFigures(document, page, { allowMarkers: true })).toEqual([])
  })
})

describe('findMisplacedMeasures', () => {
  it('allows dollars and percentages in Given and Output', () => {
    const document = parse(
      spec(`Scenario: Medicines share
Given New Zealand spends 4.9 per cent of its health budget on medicines
When the medicines share is lifted
Then more of Pharmac's list is funded
Output 1 percentage point each year until 12%`)
    )
    expect(findMisplacedMeasures(document)).toEqual([])
  })

  it('rejects a percentage parked in Then', () => {
    const document = parse(
      spec(`Scenario: Medicines share
When the medicines share is lifted
Then the share reaches 12%`)
    )
    expect(findMisplacedMeasures(document).map((item) => item.kind)).toEqual(['then'])
  })

  it('rejects a dollar amount parked in When or Outcome', () => {
    const document = parse(
      spec(`Scenario: Surcharge
When a $6-a-day surcharge is added
Then temporary workers contribute from day one
Output $80 million a year
Outcome families save $4,000`)
    )
    expect(findMisplacedMeasures(document).map((item) => item.kind)).toEqual(['when', 'outcome'])
  })
})

describe('findMarkersInStatedSpec', () => {
  it('finds nothing in a spec with no markers', () => {
    const document = parse(
      spec(`Scenario: Plain
When the policy starts
Outcome something changes`)
    )
    expect(findMarkersInStatedSpec(document)).toEqual([])
  })

  it('reports the marker line so a stated spec can be told to move the step', () => {
    const document = parse(
      spec(`Scenario: Marked
When the policy starts
# extrapolated: this belongs in the derived spec
Outcome returns fall`)
    )
    expect(findMarkersInStatedSpec(document)).toHaveLength(1)
  })
})

describe('findMarkerProblems', () => {
  it('accepts a marker directly above a step', () => {
    const document = parse(
      spec(`Scenario: Marked
When the policy starts
# extrapolated: the page does not say returns fall
Outcome returns fall`)
    )
    expect(findMarkerProblems(document)).toEqual([])
  })

  it('flags a marker that is not above a step', () => {
    const document = parse(
      spec(`Scenario: Trailing marker
When the policy starts
Outcome returns fall
# extrapolated: written below the step it meant to mark`)
    )
    expect(findMarkerProblems(document).map((problem) => problem.code)).toEqual([
      'orphan_extrapolated_marker'
    ])
  })

  it('flags a marker with no reason', () => {
    const document = parse(
      spec(`Scenario: Bare marker
When the policy starts
# extrapolated:
Outcome returns fall`)
    )
    expect(findMarkerProblems(document).map((problem) => problem.code)).toEqual([
      'extrapolated_without_reason'
    ])
  })
})

describe('extractNote', () => {
  it('reads the opening blockquote as one paragraph', () => {
    const document = parse(`# What the page states

> The rate is published.
> The timing is a sketch.

System: Example

Scenario: Example
When it happens`)
    expect(extractNote(document)).toBe('The rate is published. The timing is a sketch.')
  })

  it('returns nothing when a spec has no note', () => {
    const document = parse(
      spec(`Scenario: Example
When it happens`)
    )
    expect(extractNote(document)).toBeUndefined()
  })
})

describe('resolveActivates', () => {
  function face(specId: string, activates: string[], kind: CardFace['kind'] = 'stated'): CardFace {
    return {
      kind,
      specId,
      title: specId,
      scenarios: [{ title: `${specId} scenario`, steps: [] }],
      report: { outputs: [], outcomes: [] },
      activates,
      counts: { scenarios: 1, steps: 0, outputs: 0, outcomes: 0, extrapolated: 0 }
    }
  }

  function card(id: string, activates: string[], derivedActivates?: string[]): PolicyCard {
    return {
      id,
      party: 'labour',
      title: id,
      clusters: ['tax-fiscal'],
      tags: [],
      money: 'no-figure',
      source: { title: '', url: '', path: '' },
      gaps: [],
      assumptions: [],
      stated: face(id, activates),
      ...(derivedActivates
        ? { derived: face(`${id}-derived`, derivedActivates, 'derived') }
        : {}),
      counts: { gaps: 0, assumptions: 0 }
    }
  }

  it('keeps a target that names another card id', () => {
    const cards = [card('labour-cgt', ['labour-medicard']), card('labour-medicard', [])]
    resolveActivates(cards)
    expect(cards[0].stated.activates).toEqual(['labour-medicard'])
  })

  it('keeps a target that names another card scenario title', () => {
    const cards = [card('labour-cgt', ['labour-medicard scenario']), card('labour-medicard', [])]
    resolveActivates(cards)
    expect(cards[0].stated.activates).toEqual(['labour-medicard'])
  })

  it('resolves a derived face pointing at another card', () => {
    const cards = [card('labour-cgt', [], ['labour-medicard']), card('labour-medicard', [])]
    resolveActivates(cards)
    expect(cards[0].derived?.activates).toEqual(['labour-medicard'])
  })

  it('drops a target for a spec nobody has written yet', () => {
    const cards = [card('labour-cgt', ['labour-not-written'])]
    resolveActivates(cards)
    expect(cards[0].stated.activates).toEqual([])
  })

  it('drops a derived face pointing back at its own card', () => {
    const cards = [card('labour-cgt', [], ['labour-cgt'])]
    resolveActivates(cards)
    expect(cards[0].derived?.activates).toEqual([])
  })
})

describe('digestOf', () => {
  it('is stable for the same page and changes when the page changes', () => {
    expect(digestOf('page body')).toBe(digestOf('page body'))
    expect(digestOf('page body')).not.toBe(digestOf('page body edited'))
  })
})

describe('cluster and party vocabularies', () => {
  it('names eight clusters, each with a label and a description', () => {
    const parsed = YAML.parse(readFileSync(join(CORPUS_DIR, 'clusters.yaml'), 'utf8'))
    expect(parsed.clusters).toHaveLength(8)
    for (const cluster of parsed.clusters) {
      expect(cluster.id).toMatch(/^[a-z][a-z0-9-]*$/)
      const label = cluster.labels?.en ?? cluster.label
      const description = cluster.descriptions?.en ?? cluster.description
      expect(label.length).toBeGreaterThan(0)
      expect(description.length).toBeGreaterThan(0)
    }
  })

  it('names one party per corpus directory, with a colour', () => {
    const parsed = YAML.parse(readFileSync(join(CORPUS_DIR, 'parties.yaml'), 'utf8'))
    const corpusParties = readdirSync(CORPUS_DIR)
      .filter((name) => !name.startsWith('_'))
      .filter((name) => statSync(join(CORPUS_DIR, name)).isDirectory())
      .sort()

    expect(parsed.parties.map((party: { id: string }) => party.id).sort()).toEqual(corpusParties)
    for (const party of parsed.parties) {
      expect(party.colour).toMatch(/^#[0-9a-f]{6}$/i)
    }
  })

  it('puts a readable party name on pills, not a ballot letter', () => {
    const seCorpus = join(import.meta.dirname, '../corpus/se-election-2026')
    const parsed = YAML.parse(readFileSync(join(seCorpus, 'parties.yaml'), 'utf8'))
    for (const party of parsed.parties) {
      expect(party.label, party.id).not.toMatch(/^[A-ZÅÄÖ]{1,2}$/)
      expect(party.label.length, party.id).toBeGreaterThan(2)
    }
  })
})

describe('the authored spec tree', () => {
  const clusterIds = new Set<string>(
    YAML.parse(readFileSync(join(CORPUS_DIR, 'clusters.yaml'), 'utf8')).clusters.map(
      (cluster: { id: string }) => cluster.id
    )
  )

  const specs = readdirSync(CORPUS_DIR)
    .filter((name) => !name.startsWith('_'))
    .filter((name) => statSync(join(CORPUS_DIR, name)).isDirectory())
    .flatMap((party) =>
      readdirSync(join(CORPUS_DIR, party))
        .filter((name) => name.endsWith('.spec.md'))
        .map((name) => {
          const stem = basename(name, '.spec.md')
          const derived = stem.endsWith('.derived')
          return {
            party,
            name,
            path: join(CORPUS_DIR, party, name),
            slug: derived ? stem.slice(0, -'.derived'.length) : stem,
            kind: derived ? ('derived' as const) : ('stated' as const)
          }
        })
    )

  function documentOf(path: string) {
    const result = parseGurki(readFileSync(path, 'utf8'), { path })
    expect(result.diagnostics.filter((d) => d.level === 'error')).toEqual([])
    return result.document!
  }

  it('has specs to check', () => {
    expect(specs.length).toBeGreaterThan(0)
  })

  it.each(specs)('$party/$name keeps the frontmatter contract', ({ party, path, slug, kind }) => {
    const document = documentOf(path)
    const extensions = (document.frontmatter?.extensions ?? {}) as Record<string, unknown>

    expect(document.frontmatter?.id).toBe(expectedId(party, slug, kind))
    expect(extensions.party).toBe(party)
    expect(extensions.sourcePath).toBe(`corpus/nz-election-2026/${party}/${slug}.md`)
    expect(['named-figure', 'no-figure']).toContain(extensions.money)

    const clusters = extensions.clusters as string[]
    expect(clusters).toHaveLength(1)
    expect(clusterIds).toContain(clusters[0])

    if (kind === 'stated') {
      expect(Array.isArray(extensions.gaps)).toBe(true)
      expect(extensions.assumptions).toBeUndefined()
      expect(extensions.derivesFrom).toBeUndefined()
    } else {
      expect((extensions.assumptions as string[]).length).toBeGreaterThan(0)
      expect(extensions.gaps).toBeUndefined()
      expect(extensions.derivesFrom).toBe(expectedId(party, slug, 'stated'))
    }
  })

  it.each(specs)('$party/$name states every figure on its sourced pages', ({ party, path, kind }) => {
    const document = documentOf(path)
    const extensions = (document.frontmatter?.extensions ?? {}) as Record<string, unknown>
    const keeperPath = join(import.meta.dirname, '..', String(extensions.sourcePath))
    const keeperBody = bodyAfterFrontmatter(readFileSync(keeperPath, 'utf8'))
    const urls = new Set(sourceUrlsOf(document))
    const extras = readdirSync(join(CORPUS_DIR, party))
      .filter((name) => name.endsWith('.md') && !name.endsWith('.spec.md'))
      .map((name) => {
        const raw = readFileSync(join(CORPUS_DIR, party, name), 'utf8')
        const frontmatter = YAML.parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') as {
          sourceUrl?: string
        }
        return { sourceUrl: frontmatter.sourceUrl ?? '', body: bodyAfterFrontmatter(raw), path: join(CORPUS_DIR, party, name) }
      })
      .filter((page) => page.path !== keeperPath && urls.has(page.sourceUrl))
      .map((page) => page.body)

    expect(
      findUnsourcedFigures(document, combinedSourceBody(keeperBody, extras), {
        allowMarkers: kind === 'derived'
      })
    ).toEqual([])
    expect(findMarkerProblems(document)).toEqual([])
    if (kind === 'stated') {
      expect(findMarkersInStatedSpec(document)).toEqual([])
    }
  })

  it.each(specs)('$party/$name still matches the page it modelled', ({ path }) => {
    const document = documentOf(path)
    const extensions = (document.frontmatter?.extensions ?? {}) as Record<string, unknown>
    const raw = readFileSync(join(import.meta.dirname, '..', String(extensions.sourcePath)), 'utf8')

    expect(extensions.sourceDigest).toBe(digestOf(bodyAfterFrontmatter(raw)))
  })

  it('pairs every derived spec with a stated spec', () => {
    const stated = new Set(
      specs.filter((entry) => entry.kind === 'stated').map((entry) => `${entry.party}/${entry.slug}`)
    )
    for (const entry of specs.filter((candidate) => candidate.kind === 'derived')) {
      expect(stated).toContain(`${entry.party}/${entry.slug}`)
    }
  })
})
