// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { withNuqsTestingAdapter } from 'nuqs/adapters/testing';
import { describe, expect, it } from 'vitest';
import type { PolicyCard } from '../data/types';
import { useInspectedCard } from './useInspectedCard';

function makeCard(id: string): PolicyCard {
	return {
		id,
		party: 'labour',
		title: id,
		clusters: ['tax-fiscal'],
		tags: [],
		money: 'no-figure',
		source: { title: id, url: 'https://example.test', path: id },
		gaps: [],
		assumptions: [],
		stated: {
			kind: 'stated',
			specId: id,
			title: id,
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
		},
		counts: { gaps: 0, assumptions: 0 },
	};
}

function renderInspect(cards: PolicyCard[], searchParams?: string) {
	return renderHook(() => useInspectedCard(cards), {
		wrapper: withNuqsTestingAdapter({
			searchParams,
			hasMemory: true,
		}),
	});
}

describe('useInspectedCard', () => {
	const cards = [makeCard('labour-housing'), makeCard('act-tax')];

	it('opens no card when the url has none', () => {
		const { result } = renderInspect(cards);
		expect(result.current.inspectedCard).toBeNull();
	});

	it('opens the card named in the url so a shared inspect loads', () => {
		const { result } = renderInspect(cards, '?card=act-tax');
		expect(result.current.inspectedCard?.id).toBe('act-tax');
	});

	it('ignores a card id that is not in the deck', () => {
		const { result } = renderInspect(cards, '?card=missing');
		expect(result.current.inspectedCard).toBeNull();
	});

	it('writes the card id to the url on inspect and clears it on close', () => {
		const { result } = renderInspect(cards);

		act(() => {
			result.current.inspect(cards[0]!);
		});
		expect(result.current.inspectedCard?.id).toBe('labour-housing');

		act(() => {
			result.current.closeInspect();
		});
		expect(result.current.inspectedCard).toBeNull();
	});
});
