import {
	useEffect,
	useState,
	type CSSProperties,
	type JSX,
	type ReactNode
} from 'react';
import type { PartyId, PolicyCard } from '../data/types';
import { GurkiCard } from '../card/CardNode';
import { GAME_DISPLAY, type CardDisplay } from '../card/CardDisplay';
import { PARTY_COLOURS, PARTY_LABELS } from '../card/anonymise';
import {
	ALL_PARTIES,
	dealAllRounds,
	MAX_GAME_ROUNDS,
	type DealRound
} from './dealRound';
import { pickClusterTrivia, type ClusterTrivia } from './clusterTrivia';
import { GameCensus } from './GameCensus';
import { backgroundFromAnswers, type BackgroundAnswers } from './scoreRecord';
import { publishScoreRecord } from './publishScoreRecord';
import type { GameScore } from './scoreStore';
import './GameOverlay.css';

/** Game questions hide party, gaps, and source so the tell is the stated policy text. */
const GAME_QUESTION_DISPLAY: CardDisplay = {
	...GAME_DISPLAY,
	gaps: false,
	source: false
};

const GAME_REVEAL_DISPLAY: CardDisplay = {
	...GAME_QUESTION_DISPLAY,
	party: true
};

type GamePhase = 'playing' | 'revealed' | 'census' | 'results';

type GuessRecord = {
	roundNumber: number;
	cluster: string;
	guessedParty: PartyId;
	targetParty: PartyId;
	correct: boolean;
};

type GameOverlayProps = {
	cards: PolicyCard[];
	onExit: () => void;
	onGuess?: (correct: boolean) => void;
	lifetimeScore?: GameScore;
	seed?: number;
	onPlayAgain?: () => void;
};

function initialSeed(): number {
	return Math.floor(Math.random() * 0xffffffff);
}

/** Heading colour on the dark game field; NZ First's black would disappear. */
function headingPartyColour(party: PartyId): string {
	if (party === 'nz-first') {
		return '#f4f1ea';
	}
	return PARTY_COLOURS[party];
}

function TriviaDialog(props: {
	trivia: ClusterTrivia;
	nextLabel: string;
	onNext: () => void;
	onDismiss: () => void;
}): JSX.Element {
	return (
		<div className='game-trivia' role='presentation' onClick={props.onDismiss}>
			<div
				className='game-trivia__panel'
				role='dialog'
				aria-modal='true'
				aria-labelledby='game-trivia-title'
				aria-describedby='game-trivia-body'
				onClick={(event) => event.stopPropagation()}
			>
				<p className='game-trivia__kicker'>Correct</p>
				<p className='game-trivia__category'>{props.trivia.category}</p>
				<h3 id='game-trivia-title' className='game-trivia__headline'>
					{props.trivia.headline}
				</h3>
				<p id='game-trivia-body' className='game-trivia__body'>
					{props.trivia.body}
				</p>
				<button
					type='button'
					className='game-trivia__continue'
					autoFocus
					onClick={props.onNext}
				>
					{props.nextLabel}
				</button>
			</div>
		</div>
	);
}

function ExitButton(props: { onExit: () => void }): JSX.Element {
	return (
		<button
			type='button'
			className='game-exit'
			onClick={props.onExit}
			aria-label='Exit game'
		>
			<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
				<path
					d='M6 6l12 12M18 6L6 18'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
				/>
			</svg>
		</button>
	);
}

function GameShell(props: {
	label: string;
	onExit: () => void;
	children: ReactNode;
}): JSX.Element {
	return (
		<div
			className='game-overlay'
			role='dialog'
			aria-modal='true'
			aria-label={props.label}
		>
			<ExitButton onExit={props.onExit} />
			{props.children}
		</div>
	);
}

export function GameOverlay(props: GameOverlayProps): JSX.Element {
	const [playId, setPlayId] = useState(0);

	return (
		<GameSession
			key={playId}
			{...props}
			onPlayAgain={() => setPlayId((current) => current + 1)}
		/>
	);
}

function GameSession(props: GameOverlayProps): JSX.Element {
	const { cards, onExit, onGuess, lifetimeScore, onPlayAgain } = props;
	const [seed] = useState(() => props.seed ?? initialSeed());
	const [rounds] = useState(() => dealAllRounds(cards, seed));
	const [roundIndex, setRoundIndex] = useState(0);
	const [phase, setPhase] = useState<GamePhase>('playing');
	const [focusIndex, setFocusIndex] = useState<0 | 1 | 2>(0);
	const [keyboardActive, setKeyboardActive] = useState(false);
	const [guessedIndex, setGuessedIndex] = useState<0 | 1 | 2 | null>(null);
	const [score, setScore] = useState(0);
	const [history, setHistory] = useState<GuessRecord[]>([]);
	const [trivia, setTrivia] = useState<ClusterTrivia | null>(null);
	const [usedTriviaIds, setUsedTriviaIds] = useState<string[]>([]);

	const currentRound: DealRound | null = rounds[roundIndex] ?? null;
	const roundNumber = roundIndex + 1;

	function lockGuess(guessedCardIndex: 0 | 1 | 2): void {
		if (phase !== 'playing' || !currentRound) {
			return;
		}

		const guessedParty = currentRound.cards[guessedCardIndex].party;
		const correct = guessedParty === currentRound.targetParty;
		const record: GuessRecord = {
			roundNumber,
			cluster: currentRound.cluster,
			guessedParty,
			targetParty: currentRound.targetParty,
			correct
		};

		setHistory((previous) => [...previous, record]);
		onGuess?.(correct);
		if (correct) {
			setScore((previous) => previous + 1);
			const nextTrivia = pickClusterTrivia({
				cluster: currentRound.cluster,
				usedIds: usedTriviaIds
			});
			if (nextTrivia) {
				setTrivia(nextTrivia);
				setUsedTriviaIds((previous) =>
					previous.includes(nextTrivia.id)
						? previous
						: [...previous, nextTrivia.id]
				);
			}
		}
		setGuessedIndex(guessedCardIndex);
		setFocusIndex(guessedCardIndex);
		setPhase('revealed');
	}

	function advanceRound(): void {
		const nextIndex = roundIndex + 1;
		if (nextIndex >= rounds.length) {
			setTrivia(null);
			setPhase('census');
			return;
		}

		setRoundIndex(nextIndex);
		setGuessedIndex(null);
		setFocusIndex(0);
		setKeyboardActive(false);
		setTrivia(null);
		setPhase('playing');
	}

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent): void {
			if (event.key === 'Escape') {
				event.preventDefault();
				if (trivia) {
					setTrivia(null);
					return;
				}
				onExit();
				return;
			}

			if (trivia || phase === 'census' || phase === 'results') {
				return;
			}

			if (phase === 'playing') {
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					setKeyboardActive(true);
					setFocusIndex((previous) => ((previous + 2) % 3) as 0 | 1 | 2);
				}
				if (event.key === 'ArrowRight') {
					event.preventDefault();
					setKeyboardActive(true);
					setFocusIndex((previous) => ((previous + 1) % 3) as 0 | 1 | 2);
				}
				if (event.key === 'Enter') {
					event.preventDefault();
					lockGuess(focusIndex);
				}
			}

			if (phase === 'revealed') {
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					setKeyboardActive(true);
					setFocusIndex((previous) => ((previous + 2) % 3) as 0 | 1 | 2);
				}
				if (event.key === 'ArrowRight') {
					event.preventDefault();
					setKeyboardActive(true);
					setFocusIndex((previous) => ((previous + 1) % 3) as 0 | 1 | 2);
				}
				if (event.key === 'Enter') {
					event.preventDefault();
					advanceRound();
				}
			}
		}

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [
		phase,
		focusIndex,
		currentRound,
		roundIndex,
		rounds.length,
		onExit,
		trivia,
		usedTriviaIds,
		onGuess
	]);

	function finishCensus(answers: BackgroundAnswers): void {
		if (history.length >= 1) {
			void publishScoreRecord({
				correct: score,
				attempted: history.length,
				...backgroundFromAnswers(answers)
			});
		}
		setPhase('results');
	}

	if (phase === 'census') {
		return (
			<GameShell label='Before your score' onExit={onExit}>
				<GameCensus onContinue={finishCensus} />
			</GameShell>
		);
	}

	if (phase === 'results') {
		const guessDistribution = Object.fromEntries(
			ALL_PARTIES.map((party) => [party, { correct: 0, wrong: 0 }])
		) as Record<PartyId, { correct: number; wrong: number }>;

		for (const record of history) {
			if (record.correct) {
				guessDistribution[record.guessedParty].correct += 1;
			} else {
				guessDistribution[record.guessedParty].wrong += 1;
			}
		}

		const maxGuessCount = Math.max(
			1,
			...ALL_PARTIES.map((party) => {
				const bucket = guessDistribution[party];
				return bucket.correct + bucket.wrong;
			})
		);

		const wrongGuesses = history.filter((record) => !record.correct);

		return (
			<GameShell label='Game results' onExit={onExit}>
				<div className='game-results'>
					<header className='game-heading'>
						<p className='game-heading__kicker'>Results</p>
						<h2 className='game-heading__party'>
							{score} / {history.length}
						</h2>
					</header>

					{lifetimeScore && lifetimeScore.attempted > history.length ? (
						<p className='game-results__note'>
							All time {lifetimeScore.correct} / {lifetimeScore.attempted}
						</p>
					) : null}

					{history.length < MAX_GAME_ROUNDS ? (
						<p className='game-results__note'>
							Only {history.length} round{history.length === 1 ? '' : 's'}{' '}
							possible with the current dataset.
						</p>
					) : null}

					{wrongGuesses.length > 0 ? (
						<section className='game-wrong'>
							<h3>When you were wrong, you picked</h3>
							<ul>
								{wrongGuesses.map((record) => (
									<li key={`${record.roundNumber}-${record.guessedParty}`}>
										Round {record.roundNumber}:{' '}
										{PARTY_LABELS[record.guessedParty]} (it was{' '}
										{PARTY_LABELS[record.targetParty]})
									</li>
								))}
							</ul>
						</section>
					) : null}

					<section className='game-distribution'>
						<h3>Your guesses by party</h3>
						<div className='game-distribution__chart'>
							{ALL_PARTIES.map((party) => {
								const bucket = guessDistribution[party];
								const total = bucket.correct + bucket.wrong;
								const correctHeight = (bucket.correct / maxGuessCount) * 100;
								const wrongHeight = (bucket.wrong / maxGuessCount) * 100;

								return (
									<div key={party} className='game-distribution__column'>
										<div
											className='game-distribution__stack'
											aria-label={`${PARTY_LABELS[party]}: ${total} guesses`}
										>
											<span
												className='game-distribution__segment game-distribution__segment--wrong'
												style={{ height: `${wrongHeight}%` }}
											/>
											<span
												className='game-distribution__segment game-distribution__segment--correct'
												style={{
													height: `${correctHeight}%`,
													backgroundColor: PARTY_COLOURS[party]
												}}
											/>
										</div>
										<span className='game-distribution__label'>
											{PARTY_LABELS[party]}
										</span>
										<span className='game-distribution__count'>{total}</span>
									</div>
								);
							})}
						</div>
						<p className='game-distribution__legend'>
							<span className='game-distribution__swatch game-distribution__swatch--correct' />{' '}
							correct pick
							<span className='game-distribution__swatch game-distribution__swatch--wrong' />{' '}
							wrong pick
						</p>
					</section>

					<p className='game-results__note'>
						This score is in the <a href='/api/scores'>public dataset</a>.
					</p>

					<div className='game-results__actions'>
						<button type='button' className='game-next' onClick={onPlayAgain}>
							Play again
						</button>
					</div>
				</div>
			</GameShell>
		);
	}

	if (!currentRound) {
		return (
			<GameShell label='Choose the policy' onExit={onExit}>
				<div className='game-empty'>
					<p>No rounds could be dealt from the current card set.</p>
				</div>
			</GameShell>
		);
	}

	const partyName = PARTY_LABELS[currentRound.targetParty];
	const partyStyle: CSSProperties = {
		color: headingPartyColour(currentRound.targetParty)
	};

	return (
		<GameShell label={`Choose the ${partyName} policy`} onExit={onExit}>
			<p className='game-progress'>
				<span>
					{roundNumber} / {rounds.length}
				</span>
				<span className='game-progress__score'>
					Score {score}
					{history.length > 0 ? ` / ${history.length}` : ''}
				</span>
			</p>

			<header className='game-heading'>
				<p className='game-heading__kicker'>Choose the policy</p>
				<h2 className='game-heading__party' style={partyStyle}>
					{partyName}
				</h2>
			</header>

			<div className='game-cards'>
				{currentRound.cards.map((card, index) => {
					const cardIndex = index as 0 | 1 | 2;
					const isTarget = cardIndex === currentRound.targetIndex;
					const isGuessed = guessedIndex === cardIndex;
					const isBrowsing =
						phase === 'revealed' && keyboardActive && focusIndex === cardIndex;
					const isSelected = phase === 'revealed';
					const className = [
						'game-card',
						phase === 'playing' && keyboardActive && focusIndex === cardIndex
							? 'game-card--focus'
							: '',
						isBrowsing ? 'game-card--focus' : '',
						isSelected ? 'game-card--selected' : '',
						phase === 'revealed' && isGuessed && !isTarget
							? 'game-card--wrong'
							: ''
					]
						.filter(Boolean)
						.join(' ');

					const ringColour =
						phase === 'playing'
							? headingPartyColour(currentRound.targetParty)
							: PARTY_COLOURS[card.party];
					const ringStyle = {
						'--game-ring-colour': ringColour
					} as CSSProperties;

					return (
						<button
							type='button'
							key={card.id}
							className={className}
							style={ringStyle}
							aria-pressed={isGuessed}
							aria-label={
								phase === 'playing'
									? `Policy ${cardIndex + 1}`
									: `${PARTY_LABELS[card.party]} policy`
							}
							onClick={() => {
								if (phase === 'playing') {
									lockGuess(cardIndex);
									return;
								}
								if (phase === 'revealed') {
									setKeyboardActive(true);
									setFocusIndex(cardIndex);
								}
							}}
						>
							<div className='game-card__scroll'>
								<GurkiCard
									card={card}
									display={
										phase === 'revealed'
											? GAME_REVEAL_DISPLAY
											: GAME_QUESTION_DISPLAY
									}
								/>
							</div>
						</button>
					);
				})}
			</div>

			<div className='game-actions'>
				{phase === 'revealed' && !trivia ? (
					<button type='button' className='game-next' onClick={advanceRound}>
						{roundNumber >= rounds.length ? 'See results' : 'Next'}
					</button>
				) : null}
			</div>

			{trivia ? (
				<TriviaDialog
					trivia={trivia}
					nextLabel={roundNumber >= rounds.length ? 'See results' : 'Next'}
					onNext={advanceRound}
					onDismiss={() => setTrivia(null)}
				/>
			) : null}
		</GameShell>
	);
}
