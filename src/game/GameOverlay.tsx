import {
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	type CSSProperties,
	type JSX,
	type ReactNode,
	type RefObject
} from 'react';
import type { PartyId, PolicyCard } from '../data/types';
import { GurkiCard } from '../card/CardNode';
import { AppWindow } from '../chrome/AppWindow';
import { GAME_DISPLAY, type CardDisplay } from '../card/CardDisplay';
import { PARTY_COLOURS, PARTY_LABELS } from '../card/anonymise';
import { PARTY_LOGOS } from '../card/partyLogos';
import {
	carouselLayoutMatches,
	carouselMediaQuery,
	stepDeckIndex,
	type DeckIndex
} from './cardDeck';
import { dealAllRounds, MAX_GAME_ROUNDS, type DealRound } from './dealRound';
import { pickClusterTrivia, type ClusterTrivia } from './clusterTrivia';
import { CURRENT_EVENT_ID, eventScoresPath } from '../event/events';
import { GameCensus } from './GameCensus';
import {
	backgroundFromAnswers,
	partyBarFill,
	scoresByGuessedParty,
	type BackgroundAnswers
} from './scoreRecord';
import { publishScoreRecord } from './publishScoreRecord';
import { scoreSharePayload, shareScore } from './shareScore';
import type { GameScore } from './scoreStore';
import { SwipeHint } from './SwipeHint';
import { scrollEdgeFades } from './scrollEdgeFades';
import { useDeckSwipe } from './useDeckSwipe';
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

type GameStartAt = 'playing' | 'questions' | 'results';

type GameOverlayProps = {
	cards: PolicyCard[];
	onExit: () => void;
	onGuess?: (correct: boolean) => void;
	lifetimeScore?: GameScore;
	seed?: number;
	onPlayAgain?: () => void;
	/** Jump to a later screen without playing through. Used by event sub-routes. */
	startAt?: GameStartAt;
};

function phaseFromStartAt(startAt: GameStartAt | undefined): GamePhase {
	if (startAt === 'questions') {
		return 'census';
	}
	if (startAt === 'results') {
		return 'results';
	}
	return 'playing';
}

function initialSeed(): number {
	return Math.floor(Math.random() * 0xffffffff);
}

/** Heading colour on lemon paper; yellow and near-black stay ink. */
function headingPartyColour(party: PartyId): string {
	if (party === 'nz-first' || party === 'act') {
		return '#171717';
	}
	return PARTY_COLOURS[party];
}

function TriviaDialog(props: {
	trivia: ClusterTrivia;
	onDismiss: () => void;
}): JSX.Element {
	return (
		<div className='game-trivia' role='presentation' onClick={props.onDismiss}>
			<div
				className='game-trivia__card'
				onClick={(event) => event.stopPropagation()}
			>
				<AppWindow title='Worth knowing'>
					<div className='game-trivia__panel'>
						<p className='game-trivia__category'>{props.trivia.category}</p>
						<h3 id='game-trivia-title' className='game-trivia__headline'>
							{props.trivia.headline}
						</h3>
						<p id='game-trivia-body' className='game-trivia__body'>
							{props.trivia.body}
						</p>
					</div>
				</AppWindow>
			</div>
		</div>
	);
}

/** Paper fades on a scroller, keyed to whether content remains past each edge. */
function ScrollFades(props: {
	scrollerRef: RefObject<HTMLElement | null>;
	watchKey: string | number;
	layerClass: string;
}): JSX.Element {
	const [edges, setEdges] = useState({ top: false, bottom: false });

	useLayoutEffect(() => {
		const el = props.scrollerRef.current;
		if (!el) {
			return;
		}

		function update(): void {
			const scroller = props.scrollerRef.current;
			if (!scroller) {
				return;
			}

			setEdges(
				scrollEdgeFades({
					scrollTop: scroller.scrollTop,
					scrollHeight: scroller.scrollHeight,
					clientHeight: scroller.clientHeight
				})
			);
		}

		update();
		el.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		const observer =
			typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null;
		observer?.observe(el);
		if (el.firstElementChild) {
			observer?.observe(el.firstElementChild);
		}
		return () => {
			el.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
			observer?.disconnect();
		};
	}, [props.scrollerRef, props.watchKey]);

	return (
		<>
			{edges.top ? (
				<div
					className={`${props.layerClass} ${props.layerClass}--top`}
					aria-hidden='true'
				/>
			) : null}
			{edges.bottom ? (
				<div
					className={`${props.layerClass} ${props.layerClass}--bottom`}
					aria-hidden='true'
				/>
			) : null}
		</>
	);
}

function CardScroll(props: {
	fades: boolean;
	watchKey: string;
	children: ReactNode;
}): JSX.Element {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div ref={scrollRef} className='game-card__scroll'>
				{props.children}
			</div>
			{props.fades ? (
				<ScrollFades
					scrollerRef={scrollRef}
					watchKey={props.watchKey}
					layerClass='game-card-fade'
				/>
			) : null}
		</>
	);
}

function GuessMark(props: { correct: boolean }): JSX.Element {
	return (
		<span
			className={
				props.correct
					? 'game-guess-mark game-guess-mark--right'
					: 'game-guess-mark game-guess-mark--wrong'
			}
			role='img'
			aria-label={props.correct ? 'You got this right' : 'You got this wrong'}
		>
			<svg viewBox='0 0 64 64' aria-hidden='true' focusable='false'>
				<circle cx='32' cy='32' r='28' />
				{props.correct ? (
					<path d='M18 34l10 12 20-26' />
				) : (
					<path d='M22 22l20 20M42 22L22 42' />
				)}
			</svg>
		</span>
	);
}

function PartyBrand(props: { party: PartyId }): JSX.Element {
	return (
		<img
			className='game-party-brand__logo'
			src={PARTY_LOGOS[props.party]}
			alt={PARTY_LABELS[props.party]}
		/>
	);
}

function ResultsActions(props: {
	shareLabel: string;
	onShare: () => void;
	onPlayAgain?: () => void;
}): JSX.Element {
	return (
		<>
			<button type='button' className='game-next' onClick={props.onShare}>
				{props.shareLabel}
			</button>
			<button type='button' className='game-next' onClick={props.onPlayAgain}>
				Play again
			</button>
		</>
	);
}

function GameShell(props: {
	label: string;
	title?: ReactNode;
	onExit: () => void;
	trailing?: ReactNode;
	flush: boolean;
	split?: boolean;
	viewportSlot?: ReactNode;
	children: ReactNode;
}): JSX.Element {
	return (
		<div
			className={
				props.flush ? 'game-overlay game-overlay--flush' : 'game-overlay'
			}
		>
			<AppWindow
				title={props.title ?? props.label}
				onClose={props.onExit}
				closeLabel='Exit game'
				trailing={props.trailing}
				fill
				bare={props.flush}
				split={props.split}
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
			{props.viewportSlot}
		</div>
	);
}

export function GameOverlay(props: GameOverlayProps): JSX.Element {
	const [playId, setPlayId] = useState(0);

	return (
		<GameSession
			key={playId}
			{...props}
			startAt={playId === 0 ? props.startAt : 'playing'}
			onPlayAgain={() => {
				setPlayId((current) => current + 1);
				props.onPlayAgain?.();
			}}
		/>
	);
}

function GameSession(props: GameOverlayProps): JSX.Element {
	const { cards, onExit, onGuess, lifetimeScore, onPlayAgain } = props;
	const [seed] = useState(() => props.seed ?? initialSeed());
	const [rounds] = useState(() => dealAllRounds(cards, seed));
	const [roundIndex, setRoundIndex] = useState(0);
	const [phase, setPhase] = useState<GamePhase>(() =>
		phaseFromStartAt(props.startAt)
	);
	const [focusIndex, setFocusIndex] = useState<0 | 1 | 2>(0);
	const [keyboardActive, setKeyboardActive] = useState(false);
	const [guessedIndex, setGuessedIndex] = useState<0 | 1 | 2 | null>(null);
	const [picked, setPicked] = useState(false);
	const [score, setScore] = useState(0);
	const [history, setHistory] = useState<GuessRecord[]>([]);
	const [trivia, setTrivia] = useState<ClusterTrivia | null>(null);
	const [usedTriviaIds, setUsedTriviaIds] = useState<string[]>([]);
	const [datasetState, setDatasetState] = useState<
		'idle' | 'saving' | 'saved' | 'failed'
	>('idle');
	const [shareState, setShareState] = useState<'idle' | 'copied' | 'failed'>(
		'idle'
	);
	const [isCarousel, setIsCarousel] = useState(() =>
		carouselLayoutMatches(window.matchMedia)
	);
	const deckRef = useRef<HTMLDivElement>(null);
	const suppressClickUntilRef = useRef(0);
	const [showSwipeHint, setShowSwipeHint] = useState(true);

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
		} else {
			const nextTrivia = pickClusterTrivia({
				cluster: currentRound.cluster,
				usedIds: usedTriviaIds,
				seed
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

	function goToRound(index: number): void {
		const round = rounds[index];
		if (!round) {
			return;
		}

		const record = history.find((entry) => entry.roundNumber === index + 1);
		setRoundIndex(index);
		setTrivia(null);
		setPicked(false);
		setKeyboardActive(false);

		if (!record) {
			setGuessedIndex(null);
			setFocusIndex(0);
			setPhase('playing');
			return;
		}

		const guessed = round.cards.findIndex(
			(card) => card.party === record.guessedParty
		);
		const guessedCardIndex: DeckIndex =
			guessed === 0 || guessed === 1 || guessed === 2 ? guessed : 0;
		setGuessedIndex(guessedCardIndex);
		setFocusIndex(guessedCardIndex);
		setPhase('revealed');
	}

	function goBack(): void {
		if (roundIndex <= 0) {
			return;
		}
		goToRound(roundIndex - 1);
	}

	function goForward(): void {
		const nextIndex = roundIndex + 1;
		if (nextIndex >= rounds.length) {
			setTrivia(null);
			setPhase('census');
			return;
		}
		goToRound(nextIndex);
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
					goForward();
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
		onGuess,
		history
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

	function dismissSwipeHint(): void {
		setShowSwipeHint(false);
	}

	const { onPointerDown, onPointerMove, onPointerUp } = useDeckSwipe({
		enabled: isCarousel && !trivia,
		deckRef,
		focusIndex,
		resetKey: roundIndex,
		onFocusIndex: (index) => {
			setFocusIndex(index);
			setKeyboardActive(true);
			setPicked(false);
		},
		onHorizontalDragEnd: () => {
			suppressClickUntilRef.current = Date.now() + 350;
		},
		onInteract: dismissSwipeHint
	});

	function onCardActivate(cardIndex: DeckIndex): void {
		if (Date.now() < suppressClickUntilRef.current) {
			return;
		}

		if (isCarousel && cardIndex !== focusIndex) {
			setFocusIndex(cardIndex);
			setKeyboardActive(true);
			setPicked(false);
			return;
		}

		if (phase === 'playing') {
			if (isCarousel) {
				dismissSwipeHint();
				setPicked(true);
				return;
			}
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

	async function onShareScore(): Promise<void> {
		try {
			const result = await shareScore(
				scoreSharePayload({
					correct: score,
					attempted: history.length,
					origin: window.location.origin
				}),
				{
					share: navigator.share?.bind(navigator),
					writeText: (text) => navigator.clipboard.writeText(text)
				}
			);
			if (result === 'copied') {
				setShareState('copied');
			}
		} catch (error) {
			if (error instanceof DOMException && error.name === 'AbortError') {
				return;
			}
			setShareState('failed');
		}
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

		const wrongGuesses = history.filter((record) => !record.correct);
		const shareLabel =
			shareState === 'copied'
				? 'Copied'
				: shareState === 'failed'
					? 'Couldn’t share'
					: 'Share score';

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
								const fill = partyBarFill(bucket);

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
												className='game-distribution__segment'
												style={
													{
														'--stack-fill': `${fill}%`,
														'--party-bar-colour': PARTY_COLOURS[bucket.party]
													} as CSSProperties
												}
											/>
										</div>
										<span className='game-distribution__label'>
											{PARTY_LABELS[bucket.party]}
										</span>
										<span className='game-distribution__count'>
											{total === 0 ? '0' : `${bucket.correct}/${total}`}
										</span>
									</div>
								);
							})}
						</div>
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

					{isCarousel ? null : (
						<div className='game-results__actions'>
							<ResultsActions
								shareLabel={shareLabel}
								onShare={() => {
									void onShareScore();
								}}
								onPlayAgain={onPlayAgain}
							/>
						</div>
					)}
				</div>
				{isCarousel ? (
					<div className='game-results__actions game-actions--footer'>
						<div className='game-footer-buttons'>
							<ResultsActions
								shareLabel={shareLabel}
								onShare={() => {
									void onShareScore();
								}}
								onPlayAgain={onPlayAgain}
							/>
						</div>
					</div>
				) : null}
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
	const showPickHint = phase === 'playing' && !picked && !trivia;
	const showBack = roundIndex > 0 && phase === 'revealed' && !trivia;
	const showSubmit = isCarousel && phase === 'playing' && picked && !trivia;
	const showNext = phase === 'revealed' && !trivia;
	const nextLabel = roundNumber >= rounds.length ? 'See results' : 'Next';
	const roundRecord = history.find(
		(entry) => entry.roundNumber === roundNumber
	);

	return (
		<GameShell
			label={`Choose the ${partyName} policy`}
			title={
				isCarousel ? <PartyBrand party={currentRound.targetParty} /> : undefined
			}
			onExit={onExit}
			flush={isCarousel}
			split={isCarousel}
			trailing={
				isCarousel ? (
					<span>
						Score {score} / {rounds.length}
					</span>
				) : (
					<>
						<span>
							{roundNumber} / {rounds.length}
						</span>
						<span>
							Score {score}
							{history.length > 0 ? ` / ${history.length}` : ''}
						</span>
					</>
				)
			}
			viewportSlot={
				isCarousel && phase === 'playing' && showSwipeHint ? (
					<SwipeHint onDismiss={dismissSwipeHint} />
				) : null
			}
		>
			<header className='game-heading game-heading--round'>
				<p className='game-heading__kicker'>Choose the policy</p>
				<h2 className='game-heading__party' style={partyStyle}>
					{partyName}
				</h2>
			</header>

			<div className='game-stage'>
				<div
					ref={deckRef}
					className={isCarousel ? 'game-cards game-cards--deck' : 'game-cards'}
					onPointerDown={onPointerDown}
					onPointerMove={onPointerMove}
					onPointerUp={onPointerUp}
					onPointerCancel={onPointerUp}
				>
					{currentRound.cards.map((card, index) => {
						const cardIndex = index as DeckIndex;
						const isTarget = cardIndex === currentRound.targetIndex;
						const isGuessed = guessedIndex === cardIndex;
						const isFront = focusIndex === cardIndex;
						const isBrowsing =
							phase === 'revealed' && keyboardActive && isFront;
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
							phase === 'revealed'
								? PARTY_COLOURS[card.party]
								: isCarousel && !isFront
									? undefined
									: PARTY_COLOURS[currentRound.targetParty];
						const ringStyle = ringColour
							? ({ '--game-ring-colour': ringColour } as CSSProperties)
							: undefined;

						return (
							<button
								type='button'
								key={card.id}
								className={className}
								style={ringStyle}
								aria-pressed={
									phase === 'playing' ? picked && isFront : isGuessed
								}
								aria-current={isCarousel && isFront ? 'true' : undefined}
								aria-label={
									phase === 'playing'
										? `Policy ${cardIndex + 1}`
										: `${PARTY_LABELS[card.party]} policy`
								}
								onClick={() => onCardActivate(cardIndex)}
							>
								<CardScroll
									fades={isCarousel && isFront}
									watchKey={`${roundIndex}-${focusIndex}-${phase}-${card.id}`}
								>
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
								</CardScroll>
								{phase === 'revealed' && isGuessed && roundRecord ? (
									<GuessMark correct={roundRecord.correct} />
								) : null}
							</button>
						);
					})}
				</div>
				{isCarousel ? null : (
					<ScrollFades
						scrollerRef={deckRef}
						watchKey={roundIndex}
						layerClass='game-cards-fade'
					/>
				)}
				{trivia ? (
					<TriviaDialog trivia={trivia} onDismiss={() => setTrivia(null)} />
				) : null}
			</div>

			<div
				className={
					isCarousel || trivia
						? 'game-actions game-actions--footer'
						: 'game-actions'
				}
			>
				{isCarousel && !trivia ? (
					<div className='game-deck-chrome'>
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
										if (phase === 'playing') {
											setPicked(false);
										}
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
				<div className='game-footer-buttons'>
					{showPickHint ? (
						<p className='game-footer-hint'>Tap a policy to choose it</p>
					) : null}
					{showBack ? (
						<button type='button' className='game-back' onClick={goBack}>
							Back
						</button>
					) : null}
					{showSubmit ? (
						<button
							type='button'
							className='game-next'
							onClick={() => lockGuess(focusIndex)}
						>
							Submit
						</button>
					) : null}
					{showNext ? (
						<button type='button' className='game-next' onClick={goForward}>
							{nextLabel}
						</button>
					) : null}
					{trivia ? (
						<button
							type='button'
							className='game-next'
							autoFocus
							onClick={() => setTrivia(null)}
						>
							Continue
						</button>
					) : null}
				</div>
			</div>
		</GameShell>
	);
}
