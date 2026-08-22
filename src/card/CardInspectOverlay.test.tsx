// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { CardFace, PolicyCard } from '../data/types';
import { ALL_VISIBLE, type CardDisplay } from './CardDisplay';
import { CardInspectOverlay, neighbourCard } from './CardInspectOverlay';

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

function makeCard(
	withReading: boolean,
	gaps: string[] = [],
	id = 'labour-medicard'
): PolicyCard {
	const title =
		id === 'labour-medicard'
			? 'Medicard three free doctor visits'
			: id;
	return {
		id,
		party: 'labour',
		title,
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
		stated: makeFace('stated', title),
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
	cards?: PolicyCard[];
};

function renderOverlay(card: PolicyCard, extra: OverlayRenderExtra = {}) {
	return render(
		<NuqsAdapter>
			<CardInspectOverlay
				card={card}
				cards={extra.cards}
				display={extra.display ?? ALL_VISIBLE}
				onClose={extra.onClose ?? vi.fn()}
				onToggleParty={extra.onToggleParty ?? vi.fn()}
			/>
		</NuqsAdapter>
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

	it('hides cycle controls when there is only one policy', () => {
		renderOverlay(makeCard(true), {
			cards: [makeCard(true)]
		});

		expect(
			screen.queryByRole('button', { name: 'Previous policy' })
		).toBeNull();
		expect(screen.queryByRole('button', { name: 'Next policy' })).toBeNull();
	});

	it('cycles with the arrows and the left and right keys', () => {
		const first = makeCard(true, [], 'first');
		const second = makeCard(true, [], 'second');
		const third = makeCard(true, [], 'third');
		const onClose = vi.fn();
		renderOverlay(second, {
			cards: [first, second, third],
			onClose
		});

		fireEvent.click(screen.getByRole('button', { name: 'Next policy' }));
		expect(screen.getByRole('dialog', { name: 'third' })).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'Previous policy' }));
		expect(screen.getByRole('dialog', { name: 'second' })).toBeTruthy();

		fireEvent.keyDown(window, { key: 'ArrowRight' });
		expect(screen.getByRole('dialog', { name: 'third' })).toBeTruthy();

		fireEvent.keyDown(window, { key: 'ArrowLeft' });
		expect(screen.getByRole('dialog', { name: 'second' })).toBeTruthy();
		expect(onClose).not.toHaveBeenCalled();
	});

	it('wraps from the last policy to the first', () => {
		const first = makeCard(true, [], 'first');
		const last = makeCard(true, [], 'last');
		renderOverlay(last, {
			cards: [first, last]
		});

		fireEvent.keyDown(window, { key: 'ArrowRight' });
		expect(screen.getByRole('dialog', { name: 'first' })).toBeTruthy();

		fireEvent.keyDown(window, { key: 'ArrowLeft' });
		expect(screen.getByRole('dialog', { name: 'last' })).toBeTruthy();
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
			<NuqsAdapter>
				<CardInspectOverlay
					card={makeCard(true)}
					display={ALL_VISIBLE}
					onClose={onClose}
					onToggleParty={onToggleParty}
				/>
			</NuqsAdapter>
		);

		expect(
			screen.getByRole('switch', { name: 'Party' }).getAttribute('aria-checked')
		).toBe('true');
		expect(screen.getAllByAltText('Labour').length).toBeGreaterThan(0);
	});
});

describe('neighbourCard', () => {
	const cards = ['a', 'b', 'c'].map((id) => makeCard(false, [], id));

	it('steps forward and wraps', () => {
		expect(neighbourCard(cards, 'a', 1)?.id).toBe('b');
		expect(neighbourCard(cards, 'c', 1)?.id).toBe('a');
	});

	it('steps backward and wraps', () => {
		expect(neighbourCard(cards, 'b', -1)?.id).toBe('a');
		expect(neighbourCard(cards, 'a', -1)?.id).toBe('c');
	});

	it('jumps from a missing card to the start or end', () => {
		expect(neighbourCard(cards, 'gone', 1)?.id).toBe('a');
		expect(neighbourCard(cards, 'gone', -1)?.id).toBe('c');
	});
});
