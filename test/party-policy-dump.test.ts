import { describe, expect, it } from 'vitest'

import { cleanMarkdown, loadSeeds } from '../scripts/dump.ts'

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

describe('loadSeeds', () => {
  it('loads Opportunity with the policy CDN as a PDF origin', () => {
    const [seed] = loadSeeds('opportunity')
    expect(seed?.id).toBe('opportunity')
    expect(seed?.origin).toBe('https://www.opportunity.org.nz')
    expect(seed?.pdfOrigins).toEqual(['https://cdn.opportunity.org.nz'])
    expect(seed?.startUrls).toContain('https://www.opportunity.org.nz/policy')
    expect(seed?.allowPathPrefixes).toContain('/tax-reset')
    expect(seed?.allowPathPrefixes).not.toContain('/tax-reset-calculator-2026')
  })
})
