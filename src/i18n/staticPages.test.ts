import { describe, expect, it } from 'vitest'
import { renderDirectoryHtml, renderPrivacyHtml, renderTermsHtml } from './staticPages'

describe('static chrome pages', () => {
  it('embeds every language dictionary so ?lang= can swap chrome', () => {
    const html = renderTermsHtml()
    expect(html).toContain('"source":"Source"')
    expect(html).toContain('"source":"Källa"')
    expect(html).toContain('"source":"Puna"')
    expect(html).toContain('data-ui="termsTitle"')
    expect(html).toContain('href="/terms/?lang=mi"')
  })

  it('keeps English legal copy in the markup for readers without script', () => {
    expect(renderTermsHtml()).toContain('without warranty')
    expect(renderPrivacyHtml()).toContain('We do not run accounts')
    expect(renderDirectoryHtml()).toContain('data-ui="status.review"')
  })
})
