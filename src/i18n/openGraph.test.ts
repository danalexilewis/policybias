import { describe, expect, it } from 'vitest';
import { openGraphTags, SITE_ORIGIN, siteUrl } from './openGraph';

describe('openGraphTags', () => {
	it('emits absolute urls on the public origin', () => {
		expect(siteUrl('/nz-election-2026/')).toBe(`${SITE_ORIGIN}/nz-election-2026/`);
		const html = openGraphTags({
			title: 'Policy Bias — NZ 2026',
			description: 'Guess the party from the policy, not the colour.',
			path: '/nz-election-2026/',
			lang: 'en',
		});
		expect(html).toContain(`content="${SITE_ORIGIN}/nz-election-2026/"`);
		expect(html).toContain(`content="${SITE_ORIGIN}/og.png"`);
		expect(html).toContain('property="og:title"');
		expect(html).toContain('name="twitter:card" content="summary_large_image"');
		expect(html).toContain('property="og:locale" content="en_NZ"');
	});

	it('escapes quotes in titles and descriptions', () => {
		const html = openGraphTags({
			title: 'Say "hello"',
			description: 'A & B',
			path: '/',
			lang: 'sv',
		});
		expect(html).toContain('content="Say &quot;hello&quot;"');
		expect(html).toContain('content="A &amp; B"');
		expect(html).toContain('property="og:locale" content="sv_SE"');
	});
});
