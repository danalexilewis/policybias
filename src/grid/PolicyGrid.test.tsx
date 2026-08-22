// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ALL_VISIBLE } from '../card/CardDisplay';
import type {
	CardFace,
	ClusterMeta,
	PartyMeta,
	PolicyCard
} from '../data/types';
import { PolicyGrid } from './PolicyGrid';

const clusters: ClusterMeta[] = [
	{ id: 'health-access', label: 'Health', description: '' }
];

const parties: PartyMeta[] = [
	{
		id: 'labour',
		label: 'Labour',
		name: 'New Zealand Labour Party',
		colour: '#d82c20',
		cardCount: 1
	}
];

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
		gaps: ['what happens if CGT revenue falls short is not stated'],
		assumptions: [],
		stated: makeFace('Medicard three free doctor visits'),
		counts: { gaps: 1, assumptions: 0 }
	};
}

afterEach(cleanup);

describe('PolicyGrid', () => {
	it('does not show gaps on the grid card', () => {
		render(
			<PolicyGrid
				cards={[makeCard()]}
				clusters={clusters}
				parties={parties}
				display={ALL_VISIBLE}
				groupBy='none'
				onInspect={vi.fn()}
			/>
		);

		expect(
			screen.getByRole('heading', {
				name: 'Medicard three free doctor visits'
			})
		).toBeTruthy();
		expect(screen.queryByRole('heading', { name: 'Gaps' })).toBeNull();
		expect(
			screen.queryByText(
				'what happens if CGT revenue falls short is not stated'
			)
		).toBeNull();
		expect(screen.getByText('Health')).toBeTruthy();
		expect(screen.getByText('Stated only')).toBeTruthy();
	});
});
