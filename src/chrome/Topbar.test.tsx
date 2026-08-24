// @vitest-environment jsdom
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Topbar } from './Topbar';
import { renderTopbarHtml } from './renderTopbarHtml';

afterEach(() => {
	cleanup();
});

describe('Topbar', () => {
	it('puts the square P home mark first, on the left', () => {
		render(
			<Topbar homeLabel="Home">
				<button type="button">Language</button>
			</Topbar>
		);

		const header = screen.getByRole('banner');
		const home = within(header).getByRole('link', { name: 'Home' });
		const language = within(header).getByRole('button', { name: 'Language' });

		expect(home.getAttribute('href')).toBe('/');
		expect(home.querySelector('img')?.getAttribute('src')).toBe('/favicon.svg');
		expect(home.compareDocumentPosition(language) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
	});

	it('keeps GitHub in the actions, not before the home mark', () => {
		render(<Topbar homeLabel="Home" github />);

		const header = screen.getByRole('banner');
		const home = within(header).getByRole('link', { name: 'Home' });
		const github = within(header).getByRole('link', { name: 'GitHub' });

		expect(home.compareDocumentPosition(github) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
	});
});

describe('renderTopbarHtml', () => {
	it('renders a ruled topbar with the home mark before the language picker', () => {
		const html = renderTopbarHtml({ path: '/terms/' });

		expect(html).toContain('class="topbar topbar--ruled"');
		expect(html.indexOf('home-link')).toBeLessThan(html.indexOf('lang-picker'));
		expect(html).toContain('src="/favicon.svg"');
		expect(html).not.toContain('rel="preload"');
		expect(html).not.toContain('github-link');
	});

	it('includes GitHub when asked', () => {
		const html = renderTopbarHtml({ path: '/', github: true });
		expect(html).toContain('github-link');
		expect(html).toContain('https://github.com/danalexilewis/policybias');
	});
});
