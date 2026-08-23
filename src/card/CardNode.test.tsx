// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { afterEach, describe, expect, it } from 'vitest';
import type { ReactElement } from 'react';
import type { CardFace, PolicyCard } from '../data/types';
import { ALL_VISIBLE } from './CardDisplay';
import { GurkiCard } from './CardNode';

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
			extrapolated: 0
		}
	};
}

function renderCard(ui: ReactElement) {
	return render(<NuqsAdapter>{ui}</NuqsAdapter>);
}

function makeCard(): PolicyCard {
	return {
		id: 'labour-medicard',
		party: 'labour',
		title: 'Medicard three free doctor visits',
		clusters: ['health-access'],
		tags: [],
		money: 'named-figure',
		source: {
			title: 'Medicard',
			url: 'https://example.test/medicard',
			path: 'labour/medicard.md'
		},
		gaps: [],
		assumptions: [],
		stated: makeFace('Medicard three free doctor visits'),
		counts: { gaps: 0, assumptions: 0 }
	};
}

afterEach(cleanup);

describe('GurkiCard', () => {
	it('labels the source link as Source, not the page title', () => {
		renderCard(
			<GurkiCard
				card={makeCard()}
				display={ALL_VISIBLE}
				face='stated'
				size='grid'
			/>
		);

		const source = screen.getByRole('link', { name: 'Source' });
		expect(source.getAttribute('href')).toBe('https://example.test/medicard');
		expect(screen.queryByRole('link', { name: 'Medicard' })).toBeNull();
	});
	it('paints the category as a solid chip, not a coloured border', () => {
		renderCard(
			<GurkiCard
				card={makeCard()}
				display={ALL_VISIBLE}
				face='stated'
				size='index'
				clusterLabels={{ 'health-access': 'Health' }}
			/>
		);

		const card = screen.getByRole('article');
		expect(card.style.borderColor).toBe('');

		const category = screen.getByText('Health');
		expect(category.style.backgroundColor).toBe('rgb(184, 77, 92)');
		expect(category.style.color).toBe('rgb(255, 251, 230)');
		expect(category.style.boxShadow).toBe('');
	});

	it('does not reserve the party mark on index cards when the party is hidden', () => {
		renderCard(
			<GurkiCard
				card={makeCard()}
				display={{ ...ALL_VISIBLE, party: false }}
				face='stated'
				size='index'
				clusterLabels={{
					'health-access': 'Family income, welfare and savings'
				}}
			/>
		);

		expect(screen.queryByRole('img')).toBeNull();
		expect(document.querySelector('[class*="logoSlot"]')).toBeNull();
		expect(screen.getByText('Family income, welfare and savings')).toBeTruthy();
	});

	it('keeps the party mark slot on game cards so a reveal does not shift the header', () => {
		const { container } = renderCard(
			<GurkiCard
				card={makeCard()}
				display={{ ...ALL_VISIBLE, party: false }}
				face='stated'
				size='game'
				as='div'
			/>
		);

		expect(container.querySelector('[class*="logoSlot"]')).not.toBeNull();
	});

	it('game-sized cards stretch to fill their frame', () => {
		const { container } = renderCard(
			<GurkiCard
				card={makeCard()}
				display={ALL_VISIBLE}
				face='stated'
				size='game'
				as='div'
			/>
		);

		const card = container.firstElementChild;
		expect(card?.className).toMatch(/cardGame/);
	});
});
