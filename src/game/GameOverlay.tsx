import {
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type JSX,
	type PointerEvent,
	type ReactNode
} from 'react';
import type { PartyId, PolicyCard } from '../data/types';
import { GurkiCard } from '../card/CardNode';
import { AppWindow } from '../chrome/AppWindow';
import { GAME_DISPLAY, type CardDisplay } from '../card/CardDisplay';
import { PARTY_COLOURS, PARTY_LABELS } from '../card/anonymise';
import {
	carouselLayoutMatches,
	carouselMediaQuery,
	classifyDeckGesture,
	deckSlot,
	focusAfterGesture,
	stepDeckIndex,
	type DeckIndex
} from './cardDeck';
import { dealAllRounds, MAX_GAME_ROUNDS, type DealRound } from './dealRound';
import { pickClusterTrivia, type ClusterTrivia } from './clusterTrivia';
import { CURRENT_EVENT_ID, eventScoresPath } from '../event/events';
import { GameCensus } from './GameCensus';
import {
	backgroundFromAnswers,
	scoresByGuessedParty,
	type BackgroundAnswers
} from './scoreRecord';
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

/** Heading colour on lemon paper; pale party colours stay ink. */
function headingPartyColour(party: PartyId): string {
	if (party === 'nz-first' || party === 'act' || party === 'opportunity') {
		return '#171717';
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
				role='dialog'
				aria-modal='true'
				aria-labelledby='game-trivia-title'
				aria-describedby='game-trivia-body'
				onClick={(event) => event.stopPropagation()}
			>
				<AppWindow title='Correct'>
					<div className='game-trivia__panel'>
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
				</AppWindow>
			</div>
		</div>
	);
}

function GameShell(props: {
	label: string;
	onExit: () => void;
	trailing?: ReactNode;
	flush: boolean;
	children: ReactNode;
}): JSX.Element {
	return (
		<div
			className={
				props.flush ? 'game-overlay game-overlay--flush' : 'game-overlay'
			}
		>
			<AppWindow
				title={props.label}
				onClose={props.onExit}
				closeLabel='Exit game'
				trailing={props.trailing}
				fill
				bare={props.flush}
			>
				{props.flush ? (
					<main className='game-shell' aria-label={props.label}>
						{props.children}
					</main>
				) : (
					<div
						className='game-shell'
						role='dialog'
						aria-modal='true'
						aria-label={props.label}
					>
						{props.children}
					</div>
				)}
			</AppWindow>
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
	const [datasetState, setDatasetState] = useState<
		'idle' | 'saving' | 'saved' | 'failed'
	>('idle');
	const [isCarousel, setIsCarousel] = useState(() =>
		carouselLayoutMatches(window.matchMedia)
	);
	const deckRef = useRef<HTMLDivElement>(null);
	const suppressClickUntilRef = useRef(0);
	const dragRef = useRef<{
		pointerId: number | null;
		startX: number;
		startY: number;
		axis: 'undecided' | 'x' | 'y';
	}>({ pointerId: null, startX: 0, startY: 0, axis: 'undecided' });

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
					setFocusIndex((previous) => stepDeckIndex(previous, -1));
				}
				if (event.key === 'ArrowRight') {
					event.preventDefault();
					setKeyboardActive(true);
					setFocusIndex((previous) => stepDeckIndex(previous, 1));
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
					setFocusIndex((previous) => stepDeckIndex(previous, -1));
				}
				if (event.key === 'ArrowRight') {
					event.preventDefault();
					setKeyboardActive(true);
					setFocusIndex((previous) => stepDeckIndex(previous, 1));
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

	useEffect(() => {
		if (typeof window.matchMedia !== 'function') {
			return;
		}
		const query = window.matchMedia(carouselMediaQuery());
		function syncQuery(): void {
			setIsCarousel(query.matches);
		}
		syncQuery();
		query.addEventListener('change', syncQuery);
		return () => query.removeEventListener('change', syncQuery);
	}, []);

	function resetDeckDrag(target: HTMLDivElement): void {
		target.classList.remove('game-cards--dragging');
		target.style.setProperty('--drag', '0px');
		const pointerId = dragRef.current.pointerId;
		if (
			pointerId !== null &&
			typeof target.hasPointerCapture === 'function' &&
			target.hasPointerCapture(pointerId)
		) {
			target.releasePointerCapture(pointerId);
		}
		dragRef.current = {
			pointerId: null,
			startX: 0,
			startY: 0,
			axis: 'undecided'
		};
	}

	function onDeckPointerDown(event: PointerEvent<HTMLDivElement>): void {
		if (!isCarousel || trivia) {
			return;
		}
		dragRef.current = {
			pointerId: event.pointerId,
			startX: event.clientX,
			startY: event.clientY,
			axis: 'undecided'
		};
	}

	function onDeckPointerMove(event: PointerEvent<HTMLDivElement>): void {
		if (!isCarousel || dragRef.current.pointerId !== event.pointerId) {
			return;
		}

		const dx = event.clientX - dragRef.current.startX;
		const dy = event.clientY - dragRef.current.startY;
		const absX = Math.abs(dx);
		const absY = Math.abs(dy);

		if (dragRef.current.axis === 'undecided') {
			if (absX < 8 && absY < 8) {
				return;
			}
			dragRef.current.axis = absX > absY ? 'x' : 'y';
			if (dragRef.current.axis === 'x') {
				event.currentTarget.classList.add('game-cards--dragging');
				try {
					event.currentTarget.setPointerCapture(event.pointerId);
				} catch {
					// jsdom and some implicit-capture paths throw; drag still tracks.
				}
			}
		}

		if (dragRef.current.axis !== 'x') {
			return;
		}

		event.preventDefault();
		event.currentTarget.style.setProperty('--drag', `${dx}px`);
	}

	function onDeckPointerEnd(event: PointerEvent<HTMLDivElement>): void {
		if (!isCarousel || dragRef.current.pointerId !== event.pointerId) {
			return;
		}

		const dx = event.clientX - dragRef.current.startX;
		const dy = event.clientY - dragRef.current.startY;
		const axis = dragRef.current.axis;
		const gesture = classifyDeckGesture(dx, dy);

		if (axis === 'x') {
			suppressClickUntilRef.current = Date.now() + 350;
			const nextFocus = focusAfterGesture(focusIndex, gesture);
			if (nextFocus !== focusIndex) {
				setFocusIndex(nextFocus);
				setKeyboardActive(true);
			}
		}

		resetDeckDrag(event.currentTarget);
	}

	function onCardActivate(cardIndex: DeckIndex): void {
		if (Date.now() < suppressClickUntilRef.current) {
			return;
		}

		if (isCarousel && cardIndex !== focusIndex) {
			setFocusIndex(cardIndex);
			setKeyboardActive(true);
			return;
		}

		if (phase === 'playing') {
			lockGuess(cardIndex);
			return;
		}

		if (phase === 'revealed') {
			setKeyboardActive(true);
			setFocusIndex(cardIndex);
		}
	}

	async function finishCensus(answers: BackgroundAnswers): Promise<void> {
		setDatasetState('saving');
		setPhase('results');
		if (history.length < 1) {
			setDatasetState('failed');
			return;
		}

		const saved = await publishScoreRecord({
			correct: score,
			attempted: history.length,
			guesses: history.map((record) => ({
				guessedParty: record.guessedParty,
				targetParty: record.targetParty,
				correct: record.correct
			})),
			...backgroundFromAnswers(answers)
		});
		setDatasetState(saved ? 'saved' : 'failed');
	}

	if (phase === 'census') {
		return (
			<GameShell label='Before your score' onExit={onExit} flush={isCarousel}>
				<GameCensus onContinue={finishCensus} />
			</GameShell>
		);
	}

	if (phase === 'results') {
		const guessScores = scoresByGuessedParty(
			history.map((record) => ({
				guessedParty: record.guessedParty,
				targetParty: record.targetParty,
				correct: record.correct
			}))
		);

		const maxGuessCount = Math.max(
			1,
			...guessScores.map((bucket) => bucket.attempted)
		);

		const wrongGuesses = history.filter((record) => !record.correct);

		return (
			<GameShell label='Game results' onExit={onExit} flush={isCarousel}>
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
							{guessScores.map((bucket) => {
								const total = bucket.attempted;
								const correctHeight = (bucket.correct / maxGuessCount) * 100;
								const wrongHeight =
									((total - bucket.correct) / maxGuessCount) * 100;

								return (
									<div key={bucket.party} className='game-distribution__column'>
										<div
											className='game-distribution__stack'
											aria-label={
												total === 0
													? `${PARTY_LABELS[bucket.party]}: no guesses`
													: `${PARTY_LABELS[bucket.party]}: ${bucket.correct} / ${total}`
											}
										>
											<span
												className='game-distribution__segment game-distribution__segment--wrong'
												style={{ height: `${wrongHeight}%` }}
											/>
											<span
												className='game-distribution__segment game-distribution__segment--correct'
												style={{
													height: `${correctHeight}%`,
													backgroundColor: PARTY_COLOURS[bucket.party]
												}}
											/>
										</div>
										<span className='game-distribution__label'>
											{PARTY_LABELS[bucket.party]}
										</span>
										<span className='game-distribution__count'>
											{total === 0 ? '0' : `${bucket.correct} / ${total}`}
										</span>
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
						{datasetState === 'saving'
							? 'Saving this score to the public dataset…'
							: null}
						{datasetState === 'saved' ? (
							<>
								This score is in the{' '}
								<a href={eventScoresPath(CURRENT_EVENT_ID)}>public dataset</a>
							</>
						) : null}
						{datasetState === 'failed' ? (
							<>
								This score could not be saved.{' '}
								<a href={eventScoresPath(CURRENT_EVENT_ID)}>Public dataset</a>
							</>
						) : null}
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
			<GameShell label='Choose the policy' onExit={onExit} flush={isCarousel}>
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
		<GameShell
			label={`Choose the ${partyName} policy`}
			onExit={onExit}
			flush={isCarousel}
			trailing={
				<>
					<span>
						{roundNumber} / {rounds.length}
					</span>
					<span>
						Score {score}
						{history.length > 0 ? ` / ${history.length}` : ''}
					</span>
				</>
			}
		>
			<header className='game-heading game-heading--round'>
				<p className='game-heading__kicker'>Choose the policy</p>
				<h2 className='game-heading__party' style={partyStyle}>
					{partyName}
				</h2>
			</header>

			<div
				ref={deckRef}
				className={isCarousel ? 'game-cards game-cards--deck' : 'game-cards'}
				onPointerDown={onDeckPointerDown}
				onPointerMove={onDeckPointerMove}
				onPointerUp={onDeckPointerEnd}
				onPointerCancel={onDeckPointerEnd}
			>
				{currentRound.cards.map((card, index) => {
					const cardIndex = index as DeckIndex;
					const isTarget = cardIndex === currentRound.targetIndex;
					const isGuessed = guessedIndex === cardIndex;
					const isFront = focusIndex === cardIndex;
					const isBrowsing = phase === 'revealed' && keyboardActive && isFront;
					const showFocusRing =
						(isCarousel && isFront) ||
						(!isCarousel && keyboardActive && isFront) ||
						isBrowsing;
					const isSelected = phase === 'revealed';
					const className = [
						'game-card',
						isCarousel && isFront ? 'game-card--front' : '',
						showFocusRing ? 'game-card--focus' : '',
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
						'--game-ring-colour': ringColour,
						'--deck-slot': isCarousel ? deckSlot(cardIndex, focusIndex) : 0
					} as CSSProperties;

					return (
						<button
							type='button'
							key={card.id}
							className={className}
							style={ringStyle}
							aria-pressed={isGuessed}
							aria-current={isCarousel && isFront ? 'true' : undefined}
							aria-label={
								phase === 'playing'
									? `Policy ${cardIndex + 1}`
									: `${PARTY_LABELS[card.party]} policy`
							}
							onClick={() => onCardActivate(cardIndex)}
						>
							<div className='game-card__scroll'>
								<GurkiCard
									card={card}
									as='div'
									size='game'
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
				{isCarousel ? (
					<div className='game-deck-chrome'>
						{phase === 'playing' ? (
							<p className='game-deck-hint'>Swipe to compare · tap to choose</p>
						) : null}
						<div
							className='game-deck-dots'
							role='group'
							aria-label='Which policy'
						>
							{([0, 1, 2] as const).map((index) => (
								<button
									key={index}
									type='button'
									className='game-deck-dot'
									aria-label={`Show policy ${index + 1}`}
									aria-current={focusIndex === index ? 'true' : undefined}
									onClick={() => {
										setFocusIndex(index);
										setKeyboardActive(true);
									}}
								>
									<span className='game-deck-dot__mark' />
								</button>
							))}
						</div>
						<p className='game-deck-status' aria-live='polite'>
							Policy {focusIndex + 1} of 3
						</p>
					</div>
				) : null}
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
