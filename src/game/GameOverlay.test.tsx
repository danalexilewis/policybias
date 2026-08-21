// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CardFace, PartyId, PolicyCard } from '../data/types';
import { PARTY_COLOURS, PARTY_LABELS } from '../card/anonymise';
import { dealAllRounds } from './dealRound';
import { GameOverlay } from './GameOverlay';

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
		counts: { gaps: 0, assumptions: 0 }
	};
}

function buildFixtureCards(): PolicyCard[] {
	const parties: PartyId[] = [
		'act',
		'labour',
		'te-pati-maori',
		'green',
		'national',
		'nz-first'
	];
	const cards: PolicyCard[] = [];

	for (const party of parties) {
		for (let index = 0; index < 4; index += 1) {
			cards.push(
				makeCard(`${party}-${index}`, party, ['tax-fiscal', 'health-access'])
			);
		}
	}

	return cards;
}

const SEED = 42;
const fetchMock = vi.fn();

afterEach(() => {
	cleanup();
	vi.unstubAllGlobals();
});

beforeEach(() => {
	fetchMock.mockReset();
	fetchMock.mockResolvedValue(new Response('{}', { status: 201 }));
	vi.stubGlobal('fetch', fetchMock);
});

function renderGame() {
	const cards = buildFixtureCards();
	const rounds = dealAllRounds(cards, SEED);
	const onGuess = vi.fn();
	const view = render(
		<GameOverlay
			cards={cards}
			seed={SEED}
			onExit={() => undefined}
			onGuess={onGuess}
		/>
	);

	return { cards, rounds, onGuess, ...view };
}

function policyButton(index: 0 | 1 | 2): HTMLElement {
	return screen.getByRole('button', { name: `Policy ${index + 1}` });
}

describe('GameOverlay', () => {
	it('advances to the next round from Next in the success dialog', () => {
		const { rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		fireEvent.click(policyButton(first.targetIndex));

		expect(screen.getByText('Correct')).toBeTruthy();
		fireEvent.click(screen.getByRole('button', { name: 'Next' }));

		expect(screen.getByText(`2 / ${rounds.length}`)).toBeTruthy();
		expect(screen.queryByText('Correct')).toBeNull();
		expect(
			screen.getByRole('heading', {
				name: PARTY_LABELS[rounds[1]!.targetParty]
			})
		).toBeTruthy();
	});

	it('shows all three revealed policies when clicking out of the success dialog', () => {
		const { container, rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		fireEvent.click(policyButton(first.targetIndex));

		const backdrop = container.querySelector('.game-trivia');
		if (!backdrop) {
			throw new Error('expected the success dialog backdrop');
		}
		fireEvent.click(backdrop);

		expect(screen.queryByText('Correct')).toBeNull();
		expect(screen.getByText(`1 / ${rounds.length}`)).toBeTruthy();
		expect(container.querySelector('.game-card--dimmed')).toBeNull();

		for (const card of first.cards) {
			expect(
				screen.getByRole('button', {
					name: `${PARTY_LABELS[card.party]} policy`
				})
			).toBeTruthy();
		}
	});

	it('keeps the other policies readable after a wrong guess', () => {
		const { container, rounds, onGuess } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		const wrongIndex = ([0, 1, 2] as const).find(
			(index) => index !== first.targetIndex
		);
		if (wrongIndex === undefined) {
			throw new Error('expected a wrong card');
		}

		fireEvent.click(policyButton(wrongIndex));

		expect(onGuess).toHaveBeenCalledWith(false);
		expect(screen.queryByText('Correct')).toBeNull();
		expect(container.querySelector('.game-card--dimmed')).toBeNull();

		const revealed = container.querySelectorAll('.game-card--selected');
		expect(revealed).toHaveLength(3);

		for (const card of first.cards) {
			const button = screen.getByRole('button', {
				name: `${PARTY_LABELS[card.party]} policy`
			});
			expect(button.className).toContain('game-card--selected');
			expect(button.style.getPropertyValue('--game-ring-colour')).toBe(
				PARTY_COLOURS[card.party]
			);
		}
	});

	it('asks the optional questions before results, then can play again', () => {
		const { rounds } = renderGame();

		for (const [index, round] of rounds.entries()) {
			if (!round) {
				throw new Error('expected a round');
			}
			fireEvent.click(policyButton(round.targetIndex));
			const last = index === rounds.length - 1;
			fireEvent.click(
				screen.getByRole('button', {
					name: last ? 'See results' : 'Next'
				})
			);
		}

		expect(screen.getByText('Three optional questions')).toBeTruthy();
		expect(screen.queryByRole('button', { name: 'Play again' })).toBeNull();

		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		expect(fetchMock).toHaveBeenCalledWith(
			'/api/scores',
			expect.objectContaining({
				method: 'POST',
				body: JSON.stringify({
					correct: rounds.length,
					attempted: rounds.length,
					ageRange: null,
					ethnicities: null,
					intendedVote: null
				})
			})
		);
		expect(
			screen.getByRole('heading', {
				name: `${rounds.length} / ${rounds.length}`
			})
		).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'Play again' }));

		expect(screen.getByText(`1 / ${rounds.length}`)).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Policy 1' })).toBeTruthy();
		expect(screen.queryByText('Three optional questions')).toBeNull();
	});
});
