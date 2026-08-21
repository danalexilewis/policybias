import { describe, expect, it } from 'vitest'
import { anonymiseText, stripPartyFromTitle } from './anonymise'

describe('anonymiseText', () => {
  it('strips party names from titles', () => {
    expect(
      anonymiseText('ACT: consolidate 43 departments into 19 and cut the ministry to 18'),
    ).toBe('consolidate 43 departments into 19 and cut the ministry to 18')
  })

  it('strips Labour from text', () => {
    expect(anonymiseText('Labour will fund free doctors visits')).toBe(
      'will fund free doctors visits',
    )
  })

  it('strips Te Pāti Māori and Māori Party variants', () => {
    expect(anonymiseText('Te Pāti Māori proposes a wealth tax')).toBe('proposes a wealth tax')
    expect(anonymiseText('The Māori Party supports this')).toBe('supports this')
  })

  it('strips possessive ACT forms', () => {
    expect(anonymiseText("ACT's consolidation read as a system")).toBe(
      'consolidation read as a system',
    )
  })

  it('strips NZ First and full party names', () => {
    expect(anonymiseText('NZ First would reduce immigration')).toBe('would reduce immigration')
    expect(anonymiseText('New Zealand National Party policy on tax')).toBe('policy on tax')
  })

  it('strips Opportunity Party names and leaves the English word alone', () => {
    expect(anonymiseText('Opportunity Party proposes a land value tax')).toBe(
      'proposes a land value tax',
    )
    expect(anonymiseText("The Opportunities Party would introduce a citizen's income")).toBe(
      "would introduce a citizen's income",
    )
    expect(anonymiseText('Give community groups the first opportunity for funding')).toBe(
      'Give community groups the first opportunity for funding',
    )
    expect(anonymiseText('jobs and opportunity here at home')).toBe(
      'jobs and opportunity here at home',
    )
  })

  it('leaves non-party text unchanged', () => {
    const text = '43 departments consolidated into 19'
    expect(anonymiseText(text)).toBe(text)
  })

  it('does not eat legislation, the job market, or ordinary adjectives', () => {
    expect(anonymiseText('amends the Education and Training Act')).toBe(
      'amends the Education and Training Act',
    )
    expect(anonymiseText('the labour market tightens')).toBe('the labour market tightens')
    expect(anonymiseText('22% of the national economy')).toBe('22% of the national economy')
    expect(anonymiseText('green spaces beside the river')).toBe('green spaces beside the river')
    expect(anonymiseText('the National Animal Welfare Advisory Committee')).toBe(
      'the National Animal Welfare Advisory Committee',
    )
  })
})

describe('stripPartyFromTitle', () => {
  it('strips National prefixes that anonymiseText must leave in body copy', () => {
    expect(stripPartyFromTitle('National: Home Energy Fund and permitted small-scale renewables')).toBe(
      'Home Energy Fund and permitted small-scale renewables',
    )
    expect(stripPartyFromTitle('National backs hunters and anglers')).toBe('Hunters and anglers')
    expect(stripPartyFromTitle('National will modernise consent laws')).toBe(
      'Modernise consent laws',
    )
  })

  it('strips ACT, Labour, Green and Te Pāti Māori title labels', () => {
    expect(
      stripPartyFromTitle(
        'ACT: three-year Rural Workforce Visa with Work to Residence pathway after six years',
      ),
    ).toBe('Three-year Rural Workforce Visa with Work to Residence pathway after six years')
    expect(stripPartyFromTitle("Labour's $20 Public Transport Fare Cap")).toBe(
      '$20 Public Transport Fare Cap',
    )
    expect(stripPartyFromTitle('Free Prescriptions Under Labour')).toBe('Free Prescriptions')
    expect(stripPartyFromTitle('ACT New Zealand')).toBe('')
    expect(
      stripPartyFromTitle(
        'Green Party launches plan to cut power bills and take power back from the big energy companies',
      ),
    ).toBe('Launches plan to cut power bills and take power back from the big energy companies')
    expect(stripPartyFromTitle('Te Pāti Māori: more public homes and build on Māori land')).toBe(
      'More public homes and build on Māori land',
    )
    expect(stripPartyFromTitle('Opportunity Party: Tax Reset')).toBe('Tax Reset')
  })

  it('leaves ordinary national, green, and labour wording alone', () => {
    expect(stripPartyFromTitle('One national Working with Children Card')).toBe(
      'One national Working with Children Card',
    )
    expect(stripPartyFromTitle('Green spaces beside the river')).toBe('Green spaces beside the river')
    expect(
      stripPartyFromTitle('New Zealand issues a split-gas Nationally Determined Contribution'),
    ).toBe('New Zealand issues a split-gas Nationally Determined Contribution')
    expect(
      stripPartyFromTitle('Opportunity knocks with return to old-fashioned political campaigning'),
    ).toBe('Opportunity knocks with return to old-fashioned political campaigning')
  })
})
