import { describe, expect, it } from 'vitest'

import { digestOf } from '../scripts/check-policy.ts'
import {
  cleanMarkdown,
  contentDigest,
  extractPageMeta,
  loadSeeds,
  looksLikeConsentBody,
  parseSitemapEntries,
  shouldSkipWrite,
} from '../scripts/dump.ts'

describe('cleanMarkdown', () => {
  it('strips ACT Framer menus and donate footer', () => {
    const cleaned = cleanMarkdown(`
[

!

](./)

#### Menu

### Back

###### Economy & Cost of Living

# Welfare as a Hand Up, not a Way of Life

Welfare should unlock potential, not trap it.

### Stay up to date

###### [**Home**](./)

[

Donate

](https://action.act.org.nz/donate)

###### Authorised by C Purves, Suite 2.5, 27 Gillies Avenue, Newmarket, Auckland 1023.
`)

    expect(cleaned).toContain('Welfare should unlock potential')
    expect(cleaned).not.toContain('Economy & Cost of Living')
    expect(cleaned).not.toContain('#### Menu')
    expect(cleaned).not.toContain('### Back')
    expect(cleaned).not.toContain('Stay up to date')
    expect(cleaned).not.toContain('Donate')
    expect(cleaned).not.toContain('Authorised by')
  })

  it('keeps ACT headings that only start with Back', () => {
    const cleaned = cleanMarkdown(`# Policies

### Backing Rural NZ

Rural policy body.

### Back the Volunteers

Volunteer policy body.
`)
    expect(cleaned).toContain('### Backing Rural NZ')
    expect(cleaned).toContain('### Back the Volunteers')
  })

  it('cuts National news-feed chrome and empty image stubs', () => {
    const cleaned = cleanMarkdown(`
!

# KiwiSaver

### [Compulsory savings](#compulsory-savings)

Making every New Zealander a KiwiSaver.

## News

[ALL NEWS](/news)

[READ POST](/news/20260818-hontamapotaka)

#### GET UPDATES
`)

    expect(cleaned).toContain('Making every New Zealander a KiwiSaver.')
    expect(cleaned).toContain('### Compulsory savings')
    expect(cleaned).toMatch(/### Compulsory savings\n\nMaking every/)
    expect(cleaned).not.toContain('## News')
    expect(cleaned).not.toContain('READ POST')
    expect(cleaned).not.toContain('GET UPDATES')
    expect(cleaned.split('\n')[0]).not.toBe('!')
  })

  it('does not cut a news article that has no ALL NEWS feed', () => {
    const cleaned = cleanMarkdown(`# Tougher sentences for sexual offending

National will continue to ensure there are real consequences for crime.
`)
    expect(cleaned).toContain('real consequences for crime')
  })

  it('strips Te Pāti Māori share widgets and filter chrome', () => {
    const cleaned = cleanMarkdown(`### What we’ll do

*   Build and support more public and affordable homes.

Share [Share by e-mail](/cdn-cgi/l/email-protection#abc) [Share on Facebook](https://www.facebook.com/share.php?u=https://www.maoriparty.org.nz/housing) [Share on Twitter](https://twitter.com/share?url=https://www.maoriparty.org.nz/housing) [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://www.maoriparty.org.nz/housing)

Housing - Click to read more

Read more

Clear filters

Sort Newest A-Z

Sorry, no results in your current filter. Try broadening your search? Clear filters

Showing of results
`)
    expect(cleaned).toContain('public and affordable homes')
    expect(cleaned).not.toContain('Share on Facebook')
    expect(cleaned).not.toContain('Clear filters')
    expect(cleaned).not.toContain('Showing of results')
    expect(cleaned).not.toContain('Click to read more')
    expect(cleaned).not.toContain('Read more')
  })

  it('strips NZ First back-link and duplicated opening paragraph', () => {
    const cleaned = cleanMarkdown(`[back to main page](/policy)

#### Our Policy

## Citizen’s Only Voting

New Zealand First has announced that we will be campaigning to change the electoral law to ensure that only citizens have the right to vote.

New Zealand First has announced that we will be campaigning to change the electoral law to ensure that only citizens have the right to vote.

Currently, any permanent resident who has gone through the normal process, after just two years living in New Zealand, can vote.
`)
    expect(cleaned).toContain('## Citizen’s Only Voting')
    expect(cleaned).not.toContain('back to main page')
    expect(cleaned).not.toContain('Our Policy')
    expect(cleaned.match(/New Zealand First has announced/g)).toHaveLength(1)
  })

  it('cuts Green quiz CTA and NationBuilder icon images', () => {
    const cleaned = cleanMarkdown(`Create a new, higher tax rate for income over $160,000.

![Icon](https://assets.nationbuilder.com/beachheroes/pages/74771/attachments/original/icon.svg)

## Are you super-rich and will you be taxed?

Find out today!
`)
    expect(cleaned).toContain('$160,000')
    expect(cleaned).not.toContain('super-rich')
    expect(cleaned).not.toContain('![Icon]')
  })
})

describe('contentDigest', () => {
  it('matches digestOf from check-policy', () => {
    const fixture = 'Labour policy body text for digest parity.\n'
    expect(contentDigest(fixture)).toBe(digestOf(fixture))
  })
})

describe('parseSitemapEntries', () => {
  it('reads url and lastmod from sitemap url blocks', () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.org/policy/one</loc>
    <lastmod>2026-08-18T10:00:00+00:00</lastmod>
  </url>
  <url>
    <loc>https://example.org/policy/two</loc>
  </url>
</urlset>`
    expect(parseSitemapEntries(xml)).toEqual([
      { url: 'https://example.org/policy/one', lastmod: '2026-08-18T10:00:00+00:00' },
      { url: 'https://example.org/policy/two' },
    ])
  })
})

describe('shouldSkipWrite', () => {
  const existingBody = '# Policy\n\nUnchanged markdown body.'

  it('skips when the body digest matches', () => {
    const existingRaw = `---
contentDigest: "sha256-deadbeef"
---
${existingBody}
`
    expect(shouldSkipWrite(existingRaw, existingBody)).toBe(true)
  })

  it('writes when the body changed', () => {
    const existingRaw = `---
contentDigest: "sha256-deadbeef"
---
${existingBody}
`
    expect(shouldSkipWrite(existingRaw, '# Policy\n\nUpdated body.')).toBe(false)
  })

  it('writes when no existing file content', () => {
    expect(shouldSkipWrite(null, existingBody)).toBe(false)
    expect(shouldSkipWrite(undefined, existingBody)).toBe(false)
    expect(shouldSkipWrite('', existingBody)).toBe(false)
  })
})

describe('looksLikeConsentBody', () => {
  it('flags a short Swedish cookie banner', () => {
    expect(
      looksLikeConsentBody(
        'När du besöker en webbplats kan den lagra eller hämta information från din webbläsare.',
      ),
    ).toBe(true)
  })

  it('keeps a long policy page that merely mentions cookies', () => {
    const body = `${'Sverigedemokraterna vill bygga ut kärnkraften. '.repeat(40)}Vi använder kakor sällan i policytext.`
    expect(looksLikeConsentBody(body)).toBe(false)
  })
})

describe('extractPageMeta', () => {
  it('drops a post-footer cookie modal and keeps the article', () => {
    const html = `<!doctype html><html lang="sv-SE"><head>
<title>Tandvård | Sverigedemokraterna</title>
<link rel="canonical" href="https://www.sd.se/a-till-o/tandvard/" />
</head><body>
<main><article>
<p class="wp-block-paragraph">Den 1 januari 2026 infördes Tiotandvården genom en överenskommelse mellan Sverigedemokraterna och regeringen.</p>
</article></main>
<footer><p>Footer</p></footer>
<div class="modal-cacsp-position">
<div class="modal-cacsp-box-content">
<p>När du besöker en webbplats kan den lagra eller hämta information från din webbläsare, mestadels i form av cookies.</p>
<p>Cookies för marknadsföring används för att spåra besökare på webbplatser.</p>
</div>
</div>
</body></html>`
    const meta = extractPageMeta(html, 'https://www.sd.se/a-till-o/tandvard/')
    expect(meta.html).toContain('Tiotandvården')
    expect(meta.html).not.toContain('När du besöker en webbplats')
  })
})

describe('loadSeeds', () => {
  it('loads Opportunity with the policy CDN as a PDF origin', () => {
    const [seed] = loadSeeds('nz-election-2026', 'opportunity')
    expect(seed?.id).toBe('opportunity')
    expect(seed?.origin).toBe('https://www.opportunity.org.nz')
    expect(seed?.pdfOrigins).toEqual(['https://cdn.opportunity.org.nz'])
    expect(seed?.startUrls).toContain('https://www.opportunity.org.nz/policy')
    expect(seed?.allowPathPrefixes).toContain('/tax-reset')
    expect(seed?.allowPathPrefixes).not.toContain('/tax-reset-calculator-2026')
  })
})
