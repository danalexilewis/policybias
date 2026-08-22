// @vitest-environment jsdom
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CardFace, PartyId, PolicyCard } from '../data/types';
import { PARTY_COLOURS, PARTY_LABELS } from '../card/anonymise';
import { CURRENT_EVENT_ID, eventScoresPath } from '../event/events';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { dealAllRounds } from './dealRound';
import { GameOverlay } from './GameOverlay';
import { SWIPE_HINT_MS } from './SwipeHint';

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
		<NuqsAdapter>
			<GameOverlay
				cards={cards}
				seed={SEED}
				onExit={() => undefined}
				onGuess={onGuess}
			/>
		</NuqsAdapter>
	);

	return { cards, rounds, onGuess, ...view };
}

function policyButton(index: 0 | 1 | 2): HTMLElement {
	return screen.getByRole('button', { name: `Policy ${index + 1}` });
}

function dismissTrivia(): void {
	const continueButton = screen.queryByRole('button', { name: 'Continue' });
	if (continueButton) {
		fireEvent.click(continueButton);
	}
}

function submitPhonePolicy(index: 0 | 1 | 2): void {
	fireEvent.click(policyButton(index));
	if (!screen.queryByRole('button', { name: 'Submit' })) {
		fireEvent.click(policyButton(index));
	}
	fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
	dismissTrivia();
}

function stubCarousel(matches: boolean): void {
	vi.stubGlobal('matchMedia', (query: string) => ({
		matches,
		media: query,
		addEventListener: () => undefined,
		removeEventListener: () => undefined,
		addListener: () => undefined,
		removeListener: () => undefined,
		dispatchEvent: () => false,
		onchange: null
	}));
}

function swipeDeck(deck: Element, fromX: number, toX: number, y = 120): void {
	fireEvent.pointerDown(deck, { pointerId: 1, clientX: fromX, clientY: y });
	fireEvent.pointerMove(deck, { pointerId: 1, clientX: toX, clientY: y });
	fireEvent.pointerUp(deck, { pointerId: 1, clientX: toX, clientY: y });
}

describe('GameOverlay', () => {
	it('advances to the next round from Next after a correct guess', () => {
		const { rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		fireEvent.click(policyButton(first.targetIndex));

		expect(screen.queryByText('Worth knowing')).toBeNull();
		expect(screen.queryByRole('button', { name: 'Continue' })).toBeNull();
		fireEvent.click(screen.getByRole('button', { name: 'Next' }));

		expect(screen.getByText(`2 / ${rounds.length}`)).toBeTruthy();
		expect(
			screen.getByRole('heading', {
				name: PARTY_LABELS[rounds[1]!.targetParty]
			})
		).toBeTruthy();
	});

	it('shows trivia after a wrong guess, then Continue returns to the question', () => {
		const { container, rounds } = renderGame();
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

		expect(screen.getByText('Worth knowing')).toBeTruthy();
		const continueButton = screen.getByRole('button', { name: 'Continue' });
		expect(continueButton.closest('.game-footer-buttons')).toBeTruthy();
		fireEvent.click(continueButton);

		expect(screen.queryByText('Worth knowing')).toBeNull();
		expect(screen.getByText(`1 / ${rounds.length}`)).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Next' })).toBeTruthy();
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
		dismissTrivia();

		expect(onGuess).toHaveBeenCalledWith(false);
		expect(screen.queryByText('Worth knowing')).toBeNull();
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

	function playThroughToCensus(rounds: ReturnType<typeof dealAllRounds>): void {
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
	}

	it('asks the optional questions before results, then can play again', async () => {
		const { rounds } = renderGame();

		playThroughToCensus(rounds);

		expect(screen.getByText('Optional questions')).toBeTruthy();
		expect(screen.queryByRole('button', { name: 'Play again' })).toBeNull();

		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		const posted = JSON.parse(
			String(fetchMock.mock.calls[0]?.[1]?.body ?? '')
		) as { correct: number; attempted: number; guesses: unknown[] };
		expect(fetchMock).toHaveBeenCalledWith(
			'/nz-election-2026/scores',
			expect.objectContaining({ method: 'POST' })
		);
		expect(posted.correct).toBe(rounds.length);
		expect(posted.attempted).toBe(rounds.length);
		expect(posted.guesses).toHaveLength(rounds.length);
		expect(
			screen.getByRole('heading', {
				name: `${rounds.length} / ${rounds.length}`
			})
		).toBeTruthy();

		await waitFor(() => {
			expect(screen.getByRole('link', { name: 'public dataset' })).toBeTruthy();
		});

		expect(screen.getByRole('button', { name: 'Share score' })).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'Play again' }));

		expect(screen.getByText(`1 / ${rounds.length}`)).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Policy 1' })).toBeTruthy();
		expect(screen.queryByText('Optional questions')).toBeNull();
	});

	it('opens on the optional questions when started there', () => {
		render(
			<NuqsAdapter>
				<GameOverlay
					cards={buildFixtureCards()}
					seed={SEED}
					onExit={() => undefined}
					startAt='questions'
				/>
			</NuqsAdapter>
		);

		expect(screen.getByText('Optional questions')).toBeTruthy();
	});

	it('does not post a score when the census is skipped offline', () => {
		vi.stubGlobal('navigator', { ...navigator, onLine: false });
		render(
			<NuqsAdapter>
				<GameOverlay
					cards={buildFixtureCards()}
					seed={SEED}
					onExit={() => undefined}
					startAt='questions'
				/>
			</NuqsAdapter>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		expect(fetchMock).not.toHaveBeenCalled();
		expect(
			screen.getByText(
				"You're offline. This score cannot be added to the public dataset until you are back online."
			)
		).toBeTruthy();
		expect(screen.queryByRole('link', { name: 'public dataset' })).toBeNull();
	});

	it('opens on results when started there, then play again starts a game', () => {
		const cards = buildFixtureCards();
		const rounds = dealAllRounds(cards, SEED);
		render(
			<NuqsAdapter>
				<GameOverlay
					cards={cards}
					seed={SEED}
					onExit={() => undefined}
					startAt='results'
				/>
			</NuqsAdapter>
		);

		expect(screen.getByText('Results')).toBeTruthy();
		expect(screen.getByRole('heading', { name: '0 / 0' })).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'Play again' }));

		expect(screen.getByText(`1 / ${rounds.length}`)).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Policy 1' })).toBeTruthy();
		expect(screen.queryByText('Results')).toBeNull();
	});

	it('fills a party bar with that party colour, completely when every pick was right', async () => {
		const { rounds, container } = renderGame();

		playThroughToCensus(rounds);
		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		const columns = container.querySelectorAll('.game-distribution__column');
		expect(columns.length).toBeGreaterThan(0);

		for (const column of columns) {
			const name = column.querySelector(
				'.game-distribution__label'
			)?.textContent;
			const stack = column.querySelector('.game-distribution__stack');
			const segment = column.querySelector('.game-distribution__segment');
			const party = (Object.entries(PARTY_LABELS) as [PartyId, string][]).find(
				([, label]) => label === name
			)?.[0];

			expect(party).toBeTruthy();
			if (
				!party ||
				!(segment instanceof HTMLElement) ||
				!(stack instanceof HTMLElement)
			) {
				throw new Error('expected a party bar');
			}

			expect(segment.style.getPropertyValue('--party-bar-colour')).toBe(
				PARTY_COLOURS[party]
			);
			const none = stack.getAttribute('aria-label')?.includes('no guesses');
			expect(segment.style.getPropertyValue('--stack-fill')).toBe(
				none ? '0%' : '100%'
			);
		}
	});

	it('on a phone, results pin Share score and Play again in the footer', async () => {
		stubCarousel(true);
		const { rounds, container } = renderGame();

		for (const [index, round] of rounds.entries()) {
			if (!round) {
				throw new Error('expected a round');
			}
			submitPhonePolicy(round.targetIndex);
			const last = index === rounds.length - 1;
			fireEvent.click(
				screen.getByRole('button', {
					name: last ? 'See results' : 'Next'
				})
			);
		}

		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		const footer = container.querySelector('.game-actions--footer');
		expect(footer).toBeTruthy();
		expect(
			footer?.contains(screen.getByRole('button', { name: 'Share score' }))
		).toBe(true);
		expect(
			footer?.contains(screen.getByRole('button', { name: 'Play again' }))
		).toBe(true);
		expect(screen.getByText('Results')).toBeTruthy();
	});

	it('on a phone, tapping a peeked policy brings it to the front without guessing', () => {
		stubCarousel(true);
		const { container, onGuess } = renderGame();

		expect(container.querySelector('.game-cards--deck')).toBeTruthy();
		expect(policyButton(0).getAttribute('aria-current')).toBe('true');

		fireEvent.click(policyButton(1));

		expect(onGuess).not.toHaveBeenCalled();
		expect(policyButton(1).getAttribute('aria-current')).toBe('true');
		expect(policyButton(0).getAttribute('aria-current')).toBeNull();
		expect(policyButton(1).className).not.toContain('game-card--stroked');
		expect(policyButton(0).className).toContain('game-card--stroked');
		expect(policyButton(2).className).toContain('game-card--stroked');
	});

	it('on a phone, tapping the front policy shows Submit without guessing', () => {
		stubCarousel(true);
		const { onGuess } = renderGame();

		expect(screen.queryByRole('button', { name: 'Submit' })).toBeNull();
		expect(screen.getByText('Tap a policy to choose it')).toBeTruthy();

		fireEvent.click(policyButton(0));

		expect(onGuess).not.toHaveBeenCalled();
		expect(screen.getByRole('button', { name: 'Submit' })).toBeTruthy();
		expect(screen.queryByText('Tap a policy to choose it')).toBeNull();
	});

	it('on a phone, Submit sits in a sticky footer', () => {
		stubCarousel(true);
		const { container } = renderGame();

		const footer = container.querySelector('.game-actions--footer');
		expect(
			footer?.contains(screen.getByText('Tap a policy to choose it'))
		).toBe(true);

		fireEvent.click(policyButton(0));

		const submit = screen.getByRole('button', { name: 'Submit' });
		expect(submit.closest('.game-actions--footer')).toBeTruthy();
	});

	it('on a phone, trivia Continue sits in a full-width footer', () => {
		stubCarousel(true);
		const { container, rounds } = renderGame();
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
		if (!screen.queryByRole('button', { name: 'Submit' })) {
			fireEvent.click(policyButton(wrongIndex));
		}
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

		const continueButton = screen.getByRole('button', { name: 'Continue' });
		expect(continueButton.closest('.game-actions--footer')).toBeTruthy();
		expect(continueButton.className).toContain('game-next');
		expect(screen.queryByRole('button', { name: 'Next' })).toBeNull();
		expect(screen.getByText('Worth knowing')).toBeTruthy();
		expect(container.querySelector('.game-trivia [role="dialog"]')).toBeNull();
		expect(container.querySelector('.game-trivia__card')).toBeTruthy();
	});

	it('on a phone, Submit locks in the selected policy', () => {
		stubCarousel(true);
		const { onGuess, rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		fireEvent.click(policyButton(0));
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

		expect(onGuess).toHaveBeenCalledOnce();
		expect(onGuess).toHaveBeenCalledWith(first.targetIndex === 0);
	});

	it('on a phone, the first question after Submit has Next but not Back', () => {
		stubCarousel(true);
		const { onGuess } = renderGame();

		fireEvent.click(policyButton(0));
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
		dismissTrivia();

		expect(screen.queryByRole('button', { name: 'Submit' })).toBeNull();
		expect(screen.queryByRole('button', { name: 'Back' })).toBeNull();
		expect(screen.getByRole('button', { name: 'Next' })).toBeTruthy();
		expect(onGuess).toHaveBeenCalledOnce();
	});

	it('on a phone, Back returns to the last question so you can go forward again', () => {
		stubCarousel(true);
		const { rounds, onGuess } = renderGame();
		const first = rounds[0];
		const second = rounds[1];
		if (!first || !second) {
			throw new Error('expected two rounds');
		}

		submitPhonePolicy(first.targetIndex);

		fireEvent.click(screen.getByRole('button', { name: 'Next' }));

		expect(
			screen.getByRole('main', {
				name: `Choose the ${PARTY_LABELS[second.targetParty]} policy`
			})
		).toBeTruthy();
		expect(screen.queryByRole('button', { name: 'Back' })).toBeNull();

		submitPhonePolicy(second.targetIndex);

		fireEvent.click(screen.getByRole('button', { name: 'Back' }));

		expect(
			screen.getByRole('main', {
				name: `Choose the ${PARTY_LABELS[first.targetParty]} policy`
			})
		).toBeTruthy();
		expect(onGuess).toHaveBeenCalledTimes(2);

		fireEvent.click(screen.getByRole('button', { name: 'Next' }));

		expect(
			screen.getByRole('main', {
				name: `Choose the ${PARTY_LABELS[second.targetParty]} policy`
			})
		).toBeTruthy();
		expect(
			screen.getByRole('button', {
				name: `${PARTY_LABELS[second.cards[0].party]} policy`
			})
		).toBeTruthy();
		expect(onGuess).toHaveBeenCalledTimes(2);
	});

	it('on a phone, only the middle card uses the guessed party ring before submit', () => {
		stubCarousel(true);
		const { container, rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		const targetColour = PARTY_COLOURS[first.targetParty];
		const cards = [...container.querySelectorAll<HTMLElement>('.game-card')];
		const front = cards.find((card) =>
			card.className.includes('game-card--front')
		);
		expect(front?.style.getPropertyValue('--game-ring-colour')).toBe(
			targetColour
		);

		for (const card of cards) {
			if (card === front) {
				continue;
			}
			expect(card.style.getPropertyValue('--game-ring-colour')).toBe('');
			expect(card.className).toContain('game-card--stroked');
		}

		expect(front?.className).not.toContain('game-card--stroked');
	});

	it('on a phone, submit paints each card with its real party colour', () => {
		stubCarousel(true);
		const { container, rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		fireEvent.click(policyButton(0));
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
		dismissTrivia();

		for (const card of first.cards) {
			const button = screen.getByRole('button', {
				name: `${PARTY_LABELS[card.party]} policy`
			});
			expect(button.style.getPropertyValue('--game-ring-colour')).toBe(
				PARTY_COLOURS[card.party]
			);
		}

		expect(container.querySelectorAll('.game-card--selected')).toHaveLength(3);
		expect(container.querySelector('.game-card--stroked')).toBeNull();
	});

	it('on a phone, a tick floats on the card after a correct submit', () => {
		stubCarousel(true);
		const { rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		submitPhonePolicy(first.targetIndex);

		const mark = screen.getByRole('img', { name: 'You got this right' });
		expect(mark.closest('.game-card__scroll')).toBeNull();
		expect(mark.closest('.game-card--front')).toBeTruthy();
	});

	it('on a phone, a cross floats on the card after a wrong submit', () => {
		stubCarousel(true);
		const { rounds } = renderGame();
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

		submitPhonePolicy(wrongIndex);

		const guessedParty = first.cards[wrongIndex]?.party;
		if (!guessedParty) {
			throw new Error('expected a guessed party');
		}
		const guessedButton = screen.getByRole('button', {
			name: `${PARTY_LABELS[guessedParty]} policy`
		});
		const mark = screen.getByRole('img', { name: 'You got this wrong' });
		expect(guessedButton.contains(mark)).toBe(true);
		expect(mark.closest('.game-card__scroll')).toBeNull();

		const otherCard = first.cards.find((card) => card.party !== guessedParty);
		if (!otherCard) {
			throw new Error('expected another policy');
		}
		fireEvent.click(
			screen.getByRole('button', {
				name: `${PARTY_LABELS[otherCard.party]} policy`
			})
		);

		const markAfter = screen.getByRole('img', { name: 'You got this wrong' });
		expect(guessedButton.contains(markAfter)).toBe(true);
		expect(markAfter.closest('.game-card--front')).toBeNull();
	});

	it('paints the Opportunity heading teal', () => {
		const cards = [
			makeCard('opportunity-0', 'opportunity', ['tax-fiscal']),
			makeCard('labour-0', 'labour', ['tax-fiscal']),
			makeCard('green-0', 'green', ['tax-fiscal'])
		];
		let seed = 0;
		let rounds = dealAllRounds(cards, seed);
		while (rounds[0]?.targetParty !== 'opportunity' && seed < 200) {
			seed += 1;
			rounds = dealAllRounds(cards, seed);
		}
		expect(rounds[0]?.targetParty).toBe('opportunity');

		render(
			<NuqsAdapter>
				<GameOverlay cards={cards} seed={seed} onExit={() => undefined} />
			</NuqsAdapter>
		);

		expect(
			screen.getByRole('heading', { name: 'Opportunity' }).style.color
		).toBe('rgb(0, 185, 188)');
	});

	it('on a phone, tapping a peeked policy then tapping it again selects it', () => {
		stubCarousel(true);
		const { onGuess, rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		fireEvent.click(policyButton(1));
		expect(onGuess).not.toHaveBeenCalled();
		expect(screen.queryByRole('button', { name: 'Submit' })).toBeNull();

		fireEvent.click(policyButton(1));
		expect(onGuess).not.toHaveBeenCalled();
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
		expect(onGuess).toHaveBeenCalledOnce();
		expect(onGuess).toHaveBeenCalledWith(first.targetIndex === 1);
	});

	it('on desktop, choosing a policy does not show Submit', () => {
		const { container, rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		expect(container.querySelector('.game-card--stroked')).toBeNull();
		expect(screen.getByText('Tap a policy to choose it')).toBeTruthy();
		fireEvent.click(policyButton(first.targetIndex));

		expect(screen.queryByRole('button', { name: 'Submit' })).toBeNull();
		expect(screen.queryByText('Tap a policy to choose it')).toBeNull();
	});

	it('on a phone, swiping after a selection hides Submit', () => {
		stubCarousel(true);
		const { container, onGuess } = renderGame();
		const deck = container.querySelector('.game-cards');
		if (!deck) {
			throw new Error('expected the policy deck');
		}

		fireEvent.click(policyButton(0));
		expect(screen.getByRole('button', { name: 'Submit' })).toBeTruthy();

		swipeDeck(deck, 200, 140);

		expect(onGuess).not.toHaveBeenCalled();
		expect(screen.queryByRole('button', { name: 'Submit' })).toBeNull();
		expect(screen.getByText('Tap a policy to choose it')).toBeTruthy();
	});

	it('on a phone, swiping left moves to the next policy without guessing', () => {
		stubCarousel(true);
		const { container, onGuess } = renderGame();
		const deck = container.querySelector('.game-cards');
		if (!deck) {
			throw new Error('expected the policy deck');
		}

		swipeDeck(deck, 200, 140);

		expect(onGuess).not.toHaveBeenCalled();
		expect(policyButton(1).getAttribute('aria-current')).toBe('true');
		expect(screen.getByText('Policy 2 of 3')).toBeTruthy();
	});

	it('on a phone, swiping right wraps to the last policy', () => {
		stubCarousel(true);
		const { container, onGuess } = renderGame();
		const deck = container.querySelector('.game-cards');
		if (!deck) {
			throw new Error('expected the policy deck');
		}

		swipeDeck(deck, 140, 220);

		expect(onGuess).not.toHaveBeenCalled();
		expect(policyButton(2).getAttribute('aria-current')).toBe('true');
	});

	it('on a phone, the policy dots move the front card', () => {
		stubCarousel(true);
		const { onGuess } = renderGame();

		fireEvent.click(screen.getByRole('button', { name: 'Show policy 3' }));

		expect(onGuess).not.toHaveBeenCalled();
		expect(policyButton(2).getAttribute('aria-current')).toBe('true');
	});

	it('on a phone, the game fills the screen without a window frame', () => {
		stubCarousel(true);
		const { container } = renderGame();

		expect(container.querySelector('.game-overlay--flush')).toBeTruthy();
		expect(container.querySelector('[role="dialog"]')).toBeNull();
		expect(container.querySelector('.game-cards-fade')).toBeNull();
	});

	it('on a phone, the front policy face fills the deck frame', () => {
		stubCarousel(true);
		const { container } = renderGame();
		const front = container.querySelector('.game-card--front');
		if (!front) {
			throw new Error('expected a front policy');
		}

		const face = front.querySelector('.game-card__scroll > *');
		if (!face) {
			throw new Error('expected the policy face');
		}

		expect(face.className).toMatch(/cardGame/);
	});

	it('on a phone, fades the bottom of a policy that still has content to scroll', () => {
		stubCarousel(true);
		const { container } = renderGame();
		const scroller = container.querySelector(
			'.game-card--front .game-card__scroll'
		);
		if (!scroller) {
			throw new Error('expected the front policy scroller');
		}

		Object.defineProperty(scroller, 'clientHeight', {
			configurable: true,
			value: 400
		});
		Object.defineProperty(scroller, 'scrollHeight', {
			configurable: true,
			value: 2000
		});
		(scroller as HTMLElement).scrollTop = 0;
		fireEvent.scroll(scroller as HTMLElement);

		expect(container.querySelector('.game-card-fade--bottom')).toBeTruthy();
		expect(container.querySelector('.game-card-fade--top')).toBeNull();
	});

	it('on a phone, drops the card fade once the policy has been scrolled to the end', () => {
		stubCarousel(true);
		const { container } = renderGame();
		const scroller = container.querySelector(
			'.game-card--front .game-card__scroll'
		) as HTMLElement;
		Object.defineProperty(scroller, 'clientHeight', {
			configurable: true,
			value: 400
		});
		Object.defineProperty(scroller, 'scrollHeight', {
			configurable: true,
			value: 2000
		});

		scroller.scrollTop = 1600;
		fireEvent.scroll(scroller);

		expect(container.querySelector('.game-card-fade--bottom')).toBeNull();
		expect(container.querySelector('.game-card-fade--top')).toBeTruthy();
	});

	it('places the exit control after the title on desktop', () => {
		const { rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		const exit = screen.getByRole('button', { name: 'Exit game' });
		const title = screen.getByText(
			`Choose the ${PARTY_LABELS[first.targetParty]} policy`
		);
		expect(
			title.compareDocumentPosition(exit) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
	});

	it('on a phone, the header is party, score, then exit', () => {
		stubCarousel(true);
		const { rounds } = renderGame();
		const first = rounds[0];
		if (!first) {
			throw new Error('expected a first round');
		}

		const partyName = PARTY_LABELS[first.targetParty];
		const exit = screen.getByRole('button', { name: 'Exit game' });
		const titleBar = exit.parentElement;
		if (!titleBar) {
			throw new Error('expected the title bar');
		}

		const logo = titleBar.querySelector('img');
		const score = screen.getByText(`Score 0 / ${rounds.length}`);
		expect(logo).toBeTruthy();
		expect(logo?.getAttribute('alt')).toBe(partyName);
		expect(titleBar.textContent).not.toContain(partyName);
		expect(screen.queryByText(`Choose the ${partyName} policy`)).toBeNull();
		expect(titleBar.lastElementChild).toBe(exit);
		expect(
			(logo as Node).compareDocumentPosition(score) &
				Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
		expect(
			score.compareDocumentPosition(exit) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
	});

	it('on desktop, fades the bottom of the shared card scroller', () => {
		const { container } = renderGame();
		const scroller = container.querySelector('.game-cards');
		expect(scroller).toBeTruthy();
		Object.defineProperty(scroller, 'clientHeight', {
			configurable: true,
			value: 400
		});
		Object.defineProperty(scroller, 'scrollHeight', {
			configurable: true,
			value: 2000
		});
		(scroller as HTMLElement).scrollTop = 0;
		fireEvent.scroll(scroller as HTMLElement);

		expect(container.querySelector('.game-cards-fade--bottom')).toBeTruthy();
		expect(container.querySelector('.game-cards-fade--top')).toBeNull();
		expect(container.querySelector('.game-cards--deck')).toBeNull();
	});

	it('on desktop, fades the top once the user scrolls, and drops the bottom fade at the end', () => {
		const { container } = renderGame();
		const scroller = container.querySelector('.game-cards') as HTMLElement;
		Object.defineProperty(scroller, 'clientHeight', {
			configurable: true,
			value: 400
		});
		Object.defineProperty(scroller, 'scrollHeight', {
			configurable: true,
			value: 2000
		});

		scroller.scrollTop = 240;
		fireEvent.scroll(scroller);
		expect(container.querySelector('.game-cards-fade--top')).toBeTruthy();
		expect(container.querySelector('.game-cards-fade--bottom')).toBeTruthy();

		scroller.scrollTop = 1600;
		fireEvent.scroll(scroller);
		expect(container.querySelector('.game-cards-fade--top')).toBeTruthy();
		expect(container.querySelector('.game-cards-fade--bottom')).toBeNull();
	});

	it('on a phone, a swipe hint floats over the hand and tap dismisses it', () => {
		stubCarousel(true);
		renderGame();

		const hint = screen.getByRole('button', {
			name: 'Swipe left or right to compare. Tap to dismiss.'
		});
		fireEvent.click(hint);

		expect(
			screen.queryByRole('button', {
				name: 'Swipe left or right to compare. Tap to dismiss.'
			})
		).toBeNull();
	});

	it('on a phone, the swipe hint goes away after three seconds', () => {
		vi.useFakeTimers();
		try {
			stubCarousel(true);
			renderGame();

			expect(
				screen.getByRole('button', {
					name: 'Swipe left or right to compare. Tap to dismiss.'
				})
			).toBeTruthy();

			act(() => {
				vi.advanceTimersByTime(SWIPE_HINT_MS);
			});

			expect(
				screen.queryByRole('button', {
					name: 'Swipe left or right to compare. Tap to dismiss.'
				})
			).toBeNull();
		} finally {
			vi.useRealTimers();
		}
	});
});
