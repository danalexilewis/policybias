import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function readPage(name: 'terms' | 'privacy'): string {
	return readFileSync(join(root, name, 'index.html'), 'utf8');
}

describe('legal pages', () => {
	it('keeps terms short and open-source', () => {
		const html = readPage('terms');
		expect(html).toContain('Terms');
		expect(html).toContain('data-ui="termsTitle"');
		expect(html).toContain('MIT license');
		expect(html).toContain('without warranty');
		expect(html).toContain('The mission is to support democracy');
		expect(html).toContain('There are two kinds of card.');
		expect(html).toContain('href="https://gurki.nz"');
		expect(html).toContain('If we have misrepresented something, we are sorry.');
		expect(html).toContain('Get in touch');
		expect(html).toContain('class="home-link"');
		expect(html).toContain('href="/privacy/"');
		expect(html).toContain(
			'href="https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e"'
		);
		expect(html).not.toMatch(/by using this (site|website)/i);
	});

	it('keeps privacy short and specific to what we actually store', () => {
		const html = readPage('privacy');
		expect(html).toContain('Privacy');
		expect(html).toContain('data-ui="privacyTitle"');
		expect(html).toContain('We do not run accounts');
		expect(html).toContain('We do not run trackers');
		expect(html).toContain('by stealth');
		expect(html).toContain('local storage');
		expect(html).toContain('public dataset');
		expect(html).toContain('Vercel');
		expect(html).toContain('href="/terms/"');
		expect(html).toContain(
			'href="https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e"'
		);
		expect(html).toContain('Get in touch');
		expect(html).toContain('class="home-link"');
	});

	it('ships open graph tags on the committed shells', () => {
		for (const html of [
			readFileSync(join(root, 'index.html'), 'utf8'),
			readPage('terms'),
			readPage('privacy'),
			readFileSync(join(root, 'nz-election-2026/index.html'), 'utf8'),
			readFileSync(join(root, 'se-election-2026/index.html'), 'utf8'),
		]) {
			expect(html).toContain('property="og:image"');
			expect(html).toContain('https://policybias.com/og.png');
		}
	});

	it('rewrites /terms and /privacy onto their html entries', () => {
		const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
			rewrites: { source: string; destination: string }[];
		};
		expect(vercel.rewrites).toEqual(
			expect.arrayContaining([
				{ source: '/terms', destination: '/terms/index.html' },
				{ source: '/terms/', destination: '/terms/index.html' },
				{ source: '/privacy', destination: '/privacy/index.html' },
				{ source: '/privacy/', destination: '/privacy/index.html' },
			])
		);
	});
});
