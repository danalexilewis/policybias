// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { CardFace, PolicyCard } from '../data/types';
import { ALL_VISIBLE, type CardDisplay } from './CardDisplay';
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

type OverlayRenderExtra = {
	display?: CardDisplay;
	onClose?: () => void;
	onToggleParty?: () => void;
};

function renderOverlay(card: PolicyCard, extra: OverlayRenderExtra = {}) {
	return render(
		<CardInspectOverlay
			card={card}
			display={extra.display ?? ALL_VISIBLE}
			onClose={extra.onClose ?? vi.fn()}
			onToggleParty={extra.onToggleParty ?? vi.fn()}
		/>
	);
}

describe('CardInspectOverlay', () => {
	it('shows stated and reading side by side', () => {
		renderOverlay(makeCard(true));

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
		renderOverlay(makeCard(false));

		expect(screen.getByText(/Nothing to add/)).toBeTruthy();
	});

	it('puts gaps under stated and assumptions under our reading', () => {
		renderOverlay(
			makeCard(true, ['what happens if CGT revenue falls short is not stated'])
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

		const stated = screen.getByText('Stated');
		const gaps = screen.getByRole('heading', { name: 'Gaps' });
		const reading = screen.getByText('Our understanding');
		const assumptions = screen.getByRole('heading', { name: 'Assumptions' });
		expect(
			stated.compareDocumentPosition(gaps) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
		expect(
			gaps.compareDocumentPosition(reading) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
		expect(
			reading.compareDocumentPosition(assumptions) &
				Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
	});

	it('closes on Escape and the close control', () => {
		const onClose = vi.fn();
		renderOverlay(makeCard(true), { onClose });

		fireEvent.keyDown(window, { key: 'Escape' });
		fireEvent.click(screen.getByRole('button', { name: 'Close policy' }));
		expect(onClose).toHaveBeenCalledTimes(2);
	});

	it('toggles party from the top-left switch without closing', () => {
		const onClose = vi.fn();
		const onToggleParty = vi.fn();
		const { rerender } = renderOverlay(makeCard(true), {
			display: { ...ALL_VISIBLE, party: false },
			onClose,
			onToggleParty
		});

		const toggle = screen.getByRole('switch', { name: 'Party' });
		expect(toggle.getAttribute('aria-checked')).toBe('false');
		expect(screen.queryByAltText('Labour')).toBeNull();

		fireEvent.click(toggle);
		expect(onToggleParty).toHaveBeenCalledTimes(1);
		expect(onClose).not.toHaveBeenCalled();

		rerender(
			<CardInspectOverlay
				card={makeCard(true)}
				display={ALL_VISIBLE}
				onClose={onClose}
				onToggleParty={onToggleParty}
			/>
		);

		expect(
			screen.getByRole('switch', { name: 'Party' }).getAttribute('aria-checked')
		).toBe('true');
		expect(screen.getAllByAltText('Labour').length).toBeGreaterThan(0);
	});
});
