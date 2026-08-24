import { describe, expect, it } from 'vitest';
import {
	renderDirectoryHtml,
	renderEventHtml,
	renderPrivacyHtml,
	renderTermsHtml,
} from './staticPages';

describe('static chrome pages', () => {
	it('embeds every language dictionary so ?lang= can swap chrome', () => {
		const html = renderTermsHtml();
		expect(html).toContain('"source":"Source"');
		expect(html).toContain('"source":"Källa"');
		expect(html).toContain('"source":"Puna"');
		expect(html).toContain('data-ui="termsTitle"');
		expect(html).toContain('href="/terms/?lang=mi"');
		expect(html).toContain('class="topbar topbar--ruled"');
		expect(html).toContain('class="lang-picker"');
		expect(html).not.toContain('class="lang-links"');
	});

	it('puts a home logo on the left of every chrome topbar', () => {
		const pages = [renderDirectoryHtml(), renderTermsHtml(), renderPrivacyHtml()];
		for (const html of pages) {
			expect(html).toContain('class="home-link"');
			expect(html).toContain('src="/favicon.svg"');
			expect(html).toContain('data-ui-aria="home"');
			expect(html.indexOf('home-link')).toBeLessThan(html.indexOf('lang-picker'));
		}
		expect(renderEventHtml('nz-election-2026')).not.toContain('class="home-link"');
	});

	it('puts the GitHub link on the home page only', () => {
		const home = renderDirectoryHtml();
		expect(home).toContain('class="github-link"');
		expect(home).toContain('aria-label="GitHub"');
		expect(home).toContain('href="https://github.com/danalexilewis/policybias"');
		expect(renderTermsHtml()).not.toContain('class="github-link"');
		expect(renderPrivacyHtml()).not.toContain('class="github-link"');
		expect(renderEventHtml('nz-election-2026')).not.toContain('class="github-link"');
	});

	it('keeps English legal copy in the markup for readers without script', () => {
		expect(renderTermsHtml()).toContain('without warranty');
		expect(renderTermsHtml()).toContain('data-ui="termsMission"');
		expect(renderTermsHtml()).toContain('data-ui="termsCards"');
		expect(renderTermsHtml()).toContain('data-ui="termsAi"');
		expect(renderTermsHtml()).toContain('data-ui="termsMit"');
		expect(renderTermsHtml()).toContain('data-ui="termsAmend"');
		expect(renderTermsHtml()).toContain('Get in touch');
		expect(renderTermsHtml()).toContain('href="https://gurki.nz"');
		expect(renderTermsHtml()).toContain(
			'href="https://github.com/danalexilewis/policybias/blob/main/LICENSE"'
		);
		expect(renderPrivacyHtml()).toContain('We do not run accounts');
		expect(renderPrivacyHtml()).toContain('data-ui="privacyTrackers"');
		expect(renderPrivacyHtml()).toContain('We do not run trackers');
		expect(renderDirectoryHtml()).toContain('data-ui="status.review"');
		expect(renderDirectoryHtml()).toContain('window--directory');
		expect(renderDirectoryHtml()).toContain('campaign-card');
	});

	it('puts open graph tags on chrome and event shells', () => {
		const pages = [
			renderDirectoryHtml(),
			renderTermsHtml(),
			renderPrivacyHtml(),
			renderEventHtml('nz-election-2026'),
			renderEventHtml('se-election-2026'),
		];
		for (const html of pages) {
			expect(html).toContain('property="og:image"');
			expect(html).toContain('https://policybias.com/og.png');
			expect(html).toContain('name="twitter:card" content="summary_large_image"');
		}
		expect(renderDirectoryHtml()).toContain('Guess the party from the policy, not the colour.');
		expect(renderEventHtml('nz-election-2026')).toContain('Policy Bias — NZ 2026');
		expect(renderEventHtml('se-election-2026')).toContain('property="og:locale" content="sv_SE"');
		expect(renderEventHtml('se-election-2026')).toContain(
			'Gissa partiet från politiken, inte färgen.'
		);
	});
});
