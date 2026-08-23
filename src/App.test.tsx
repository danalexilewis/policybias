// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CardsDataset, CardFace, PartyId, PolicyCard } from './data/types';
import {
	CURRENT_EVENT_ID,
	eventGamePath,
	eventLlmsPath,
	eventPath,
	eventQuestionsPath,
	eventResultsPath,
} from './event/events';

vi.mock('@vercel/analytics/react', () => ({
	Analytics: () => null,
}));

vi.mock('./data/useCards', () => ({
	useCards: () => ({ data: dataset, error: null, loading: false }),
}));

function makeFace(title: string): CardFace {
	return {
		kind: 'stated',
		specId: title,
		title,
		scenarios: [],
		report: { outputs: [], outcomes: [] },
		activates: [],
		counts: {
			scenarios: 0,
			steps: 0,
			outputs: 0,
			outcomes: 0,
			extrapolated: 0,
		},
	};
}

function makeCard(id: string, party: PartyId, clusters: string[]): PolicyCard {
	return {
		id,
		party,
		title: id,
		clusters,
		tags: [],
		money: 'no-figure',
		source: { title: id, url: 'https://example.test', path: id },
		gaps: [],
		assumptions: [],
		stated: makeFace(id),
		counts: { gaps: 0, assumptions: 0 },
	};
}

const dataset: CardsDataset = {
	schemaVersion: '3',
	eventId: 'nz-election-2026',
	lang: 'en',
	langs: ['en'],
	generatedAt: '2026-01-01T00:00:00Z',
	clusters: [{ id: 'tax-fiscal', label: 'Tax', description: '' }],
	parties: [
		{
			id: 'labour',
			label: 'Labour',
			name: 'Labour',
			colour: '#d82c20',
			logo: 'labour.svg',
			cardCount: 1,
			anonymise: {
				caseInsensitive: ['Labour Party'],
				caseSensitive: ['Labour'],
				uniqueTitle: ['Labour Party'],
				shortTitle: ['Labour'],
			},
		},
	],
	coverage: [{ cluster: 'tax-fiscal', party: 'labour', cards: 1 }],
	cards: [makeCard('labour-0', 'labour', ['tax-fiscal'])],
	trivia: [],
};

afterEach(() => {
	cleanup();
	window.history.replaceState({}, '', '/');
});

beforeEach(() => {
	window.history.replaceState({}, '', eventPath(CURRENT_EVENT_ID));
});

describe('App board', () => {
	it('puts llms.txt in the footer, not the header', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		const link = screen.getByRole('link', { name: 'llms.txt' });
		expect(link.getAttribute('href')).toBe(eventLlmsPath(CURRENT_EVENT_ID));
		expect(link.closest('footer')).not.toBeNull();
		expect(screen.queryByRole('columnheader', { name: 'llms.txt' })).toBeNull();
	});

	it('links the title back to the home page', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		const home = screen.getByRole('link', { name: 'Policy Bias NZ 2026' });
		expect(home.getAttribute('href')).toBe('/');
		expect(home.closest('header')).not.toBeNull();
	});

	it('puts the anonymise switch in the header next to language', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		const header = document.querySelector<HTMLElement>('header.app-header');
		if (!header) {
			throw new Error('expected the app header');
		}
		const anonymise = within(header).getByRole('switch', { name: 'Anonymise' });
		const language = within(header).getByRole('combobox', { name: 'Language' });
		expect(anonymise.closest('header')).not.toBeNull();
		expect(
			anonymise.compareDocumentPosition(language) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
	});

	it('puts terms, privacy and contact next to Gurki in the footer', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		const terms = screen.getByRole('link', { name: 'Terms' });
		const privacy = screen.getByRole('link', { name: 'Privacy' });
		const contact = screen.getByRole('link', { name: 'Contact' });
		expect(terms.getAttribute('href')).toBe('/terms/');
		expect(privacy.getAttribute('href')).toBe('/privacy/');
		expect(contact.getAttribute('href')).toBe(
			'https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e'
		);
		expect(terms.closest('footer')).not.toBeNull();
		expect(privacy.closest('footer')).not.toBeNull();
		expect(contact.closest('footer')).not.toBeNull();
	});

	it('puts the inspected card on the url so a share opens the same policy', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		fireEvent.click(screen.getByRole('button', { name: /Inspect/ }));

		await waitFor(() => {
			expect(new URLSearchParams(window.location.search).get('card')).toBe('labour-0');
		});
		expect(screen.getByRole('dialog', { name: 'labour-0' })).toBeTruthy();
	});

	it('opens inspect from a shared card query and clears it on close', async () => {
		window.history.replaceState({}, '', `${eventPath(CURRENT_EVENT_ID)}?card=labour-0`);
		const { default: App } = await import('./App');
		render(<App />);

		expect(screen.getByRole('dialog', { name: 'labour-0' })).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'Close policy' }));

		await waitFor(() => {
			expect(new URLSearchParams(window.location.search).get('card')).toBeNull();
		});
		expect(screen.queryByRole('dialog', { name: 'labour-0' })).toBeNull();
	});
});

describe('App game route', () => {
	it('plays the game on its own url, not as a board overlay', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		const play = screen.getByRole('link', { name: 'Play game' });
		expect(play.getAttribute('href')).toBe(eventGamePath(CURRENT_EVENT_ID));

		fireEvent.click(play);

		expect(window.location.pathname).toBe(eventGamePath(CURRENT_EVENT_ID));
		expect(screen.queryByRole('heading', { name: 'NZ 2026' })).toBeNull();
		expect(screen.getByRole('button', { name: 'Exit game' })).toBeTruthy();
	});

	it('exits the game back to the board', async () => {
		const { default: App } = await import('./App');
		render(<App />);

		fireEvent.click(screen.getByRole('link', { name: 'Play game' }));
		fireEvent.click(screen.getByRole('button', { name: 'Exit game' }));

		expect(window.location.pathname).toBe(eventPath(CURRENT_EVENT_ID));
		expect(screen.getByRole('heading', { name: 'NZ 2026' })).toBeTruthy();
	});

	it('opens the game when the url is already the game path', async () => {
		window.history.replaceState({}, '', eventGamePath(CURRENT_EVENT_ID));
		const { default: App } = await import('./App');
		render(<App />);

		expect(screen.queryByRole('heading', { name: 'NZ 2026' })).toBeNull();
		expect(screen.getByRole('button', { name: 'Exit game' })).toBeTruthy();
	});

	it('opens the optional questions on /questions', async () => {
		window.history.replaceState({}, '', eventQuestionsPath(CURRENT_EVENT_ID));
		const { default: App } = await import('./App');
		render(<App />);

		expect(screen.getByText('Optional questions')).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Exit game' })).toBeTruthy();
	});

	it('opens the final score on /results', async () => {
		window.history.replaceState({}, '', eventResultsPath(CURRENT_EVENT_ID));
		const { default: App } = await import('./App');
		render(<App />);

		expect(screen.getByText('Results')).toBeTruthy();
		expect(screen.getByRole('heading', { name: '0 / 0' })).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Exit game' })).toBeTruthy();
	});
});
