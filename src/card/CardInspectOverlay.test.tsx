// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { CardFace, PolicyCard } from '../data/types';
import { ALL_VISIBLE } from './CardDisplay';
import { CardInspectOverlay } from './CardInspectOverlay';

function makeFace(kind: 'stated' | 'derived', title: string): CardFace {
	return {
		kind,
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

function makeCard(withReading: boolean, gaps: string[] = []): PolicyCard {
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
		gaps,
		assumptions: withReading
			? ['a standing entitlement still needs a year of GP capacity']
			: [],
		stated: makeFace('stated', 'Medicard three free doctor visits'),
		derived: withReading
			? makeFace('derived', 'Medicard read as a standing entitlement')
			: undefined,
		counts: {
			gaps: gaps.length,
			assumptions: withReading ? 1 : 0
		}
	};
}

afterEach(cleanup);

describe('CardInspectOverlay', () => {
	it('shows stated and reading side by side', () => {
		render(
			<CardInspectOverlay
				card={makeCard(true)}
				display={ALL_VISIBLE}
				onClose={vi.fn()}
			/>
		);

		expect(
			screen.getByRole('dialog', { name: 'Medicard three free doctor visits' })
		).toBeTruthy();
		expect(screen.getByText('Stated')).toBeTruthy();
		expect(screen.getByText('Our understanding')).toBeTruthy();
		expect(
			screen.getByRole('heading', {
				name: 'Medicard three free doctor visits'
			})
		).toBeTruthy();
		expect(
			screen.getByRole('heading', {
				name: 'Medicard read as a standing entitlement'
			})
		).toBeTruthy();
		expect(
			screen.queryByRole('button', { name: 'Our understanding' })
		).toBeNull();
	});

	it('says when there is no reading', () => {
		render(
			<CardInspectOverlay
				card={makeCard(false)}
				display={ALL_VISIBLE}
				onClose={vi.fn()}
			/>
		);

		expect(screen.getByText(/Nothing to add/)).toBeTruthy();
	});

	it('puts gaps and assumptions below the stated card', () => {
		render(
			<CardInspectOverlay
				card={makeCard(true, [
					'what happens if CGT revenue falls short is not stated'
				])}
				display={ALL_VISIBLE}
				onClose={vi.fn()}
			/>
		);

		expect(screen.getByRole('heading', { name: 'Gaps' })).toBeTruthy();
		expect(
			screen.getByText('what happens if CGT revenue falls short is not stated')
		).toBeTruthy();
		expect(screen.getByRole('heading', { name: 'Assumptions' })).toBeTruthy();
		expect(
			screen.getByText(
				'a standing entitlement still needs a year of GP capacity'
			)
		).toBeTruthy();
		expect(screen.queryByText('What the page does not answer.')).toBeNull();
		expect(
			screen.queryByText('Reasoning we supplied, not a published claim.')
		).toBeNull();
	});

	it('closes on Escape and the close control', () => {
		const onClose = vi.fn();
		render(
			<CardInspectOverlay
				card={makeCard(true)}
				display={ALL_VISIBLE}
				onClose={onClose}
			/>
		);

		fireEvent.keyDown(window, { key: 'Escape' });
		fireEvent.click(screen.getByRole('button', { name: 'Close policy' }));
		expect(onClose).toHaveBeenCalledTimes(2);
	});
});
