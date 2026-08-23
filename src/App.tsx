import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState, type JSX, type MouseEvent } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { CardInspectOverlay } from './card/CardInspectOverlay';
import { mergeAnonymiseNames } from './card/anonymise';
import { useCards } from './data/useCards';
import type { PolicyCard } from './data/types';
import { FilterBar } from './filters/FilterBar';
import { useFilters } from './filters/useFilters';
import { GameOverlay } from './game/GameOverlay';
import { useLifetimeScore } from './game/useLifetimeScore';
import { PolicyGrid } from './grid/PolicyGrid';
import { cardsInWallOrder, shuffleCards } from './grid/sortCards';
import {
	eventGamePath,
	eventLangs,
	eventLlmsPath,
	eventScoresPath
} from './event/events';
import { useEventView } from './event/useEventView';
import { withLangQuery } from './i18n/href';
import { LanguagePicker } from './i18n/LanguagePicker';
import { eventUiKey } from './i18n/messages';
import { useLang } from './i18n/useLang';
import { AgentTrap } from './prank/AgentTrap';

export default function App(): JSX.Element {
	return (
		<NuqsAdapter>
			<AppShell />
		</NuqsAdapter>
	);
}

function AppShell(): JSX.Element {
	const { view, eventId, openGame, exitGame } = useEventView();
	const { lang, t } = useLang();
	const { data, error, loading } = useCards(eventId, lang);
	const [shuffleSeed] = useState(() => Math.floor(Math.random() * 0xffffffff));
	const wallCards = data ? shuffleCards(data.cards, shuffleSeed) : [];
	const filters = useFilters(wallCards);
	const [inspectedCard, setInspectedCard] = useState<PolicyCard | null>(null);
	const { score: lifetimeScore, recordGuess } = useLifetimeScore();

	const cards = filters.filtered;
	const overlayOpen = Boolean(inspectedCard);
	const canPlay = !loading && Boolean(data) && cards.length > 0;
	const names = data ? mergeAnonymiseNames(data.parties) : undefined;
	const startAt =
		view === 'questions'
			? 'questions'
			: view === 'results'
				? 'results'
				: 'playing';

	const eventName = t(eventUiKey(eventId));

	useEffect(() => {
		document.title =
			view === 'board'
				? t('documentTitleBoard', { event: eventName })
				: t('documentTitlePlay', { event: eventName });
	}, [view, eventId, eventName, t]);

	function onPlayGameClick(event: MouseEvent<HTMLAnchorElement>): void {
		if (
			event.defaultPrevented ||
			event.button !== 0 ||
			event.metaKey ||
			event.altKey ||
			event.ctrlKey ||
			event.shiftKey
		) {
			return;
		}
		event.preventDefault();
		openGame();
	}

	if (view !== 'board') {
		return (
			<>
				<Analytics />
				{loading ? (
					<div className='game-overlay game-overlay--flush'>
						<p className='app-status'>{t('loadingCards')}</p>
					</div>
				) : null}
				{error ? (
					<div className='game-overlay game-overlay--flush'>
						<div className='app-status app-status--error'>
							<p>{t('couldNotLoadCards')}</p>
							<p>{error.message}</p>
						</div>
					</div>
				) : null}
				{data ? (
					<GameOverlay
						cards={data.cards}
						parties={data.parties}
						trivia={data.trivia}
						eventId={eventId}
						onExit={exitGame}
						onGuess={recordGuess}
						lifetimeScore={lifetimeScore}
						startAt={startAt}
						onPlayAgain={view === 'game' ? undefined : openGame}
					/>
				) : null}
			</>
		);
	}

	return (
		<>
			<div className='app-shell' {...(overlayOpen ? { inert: true } : {})}>
				<a className='app-skip' href='#board'>
					{t('skipToPolicies')}
				</a>
				<AgentTrap />
				<Analytics />
				<div className='app-sticky'>
					<header className='app-header'>
						<a className='app-header__brand' href='/'>
							<p className='app-header__product'>Policy Bias</p>
							<h1 className='app-header__title'>{eventName}</h1>
						</a>
						<div className='app-header__actions'>
							<LanguagePicker />
							<a
								className='app-button'
								href={withLangQuery(
									eventScoresPath(eventId),
									lang,
									eventLangs(eventId).canonical
								)}
							>
								<HeaderActionContent
									label={t('publicScores')}
									icon={<ScoreIcon />}
								/>
							</a>
							{canPlay ? (
								<a
									className='app-button app-button--primary'
									href={eventGamePath(eventId)}
									onClick={onPlayGameClick}
								>
									<HeaderActionContent
										label={t('playGame')}
										icon={<PlayIcon />}
									/>
								</a>
							) : (
								<button
									type='button'
									className='app-button app-button--primary'
									disabled
								>
									<HeaderActionContent
										label={t('playGame')}
										icon={<PlayIcon />}
									/>
								</button>
							)}
						</div>
					</header>

					{data ? (
						<FilterBar
							clusters={data.clusters}
							parties={data.parties}
							totalCount={data.cards.length}
							filters={filters}
						/>
					) : null}
				</div>

				<main className='app-main' id='board'>
					{loading ? (
						<div className='app-status'>{t('loadingCards')}</div>
					) : null}
					{error ? (
						<div className='app-status app-status--error'>
							<p>{t('couldNotLoadCards')}</p>
							<p>{error.message}</p>
						</div>
					) : null}
					{!loading && !error && data ? (
						<PolicyGrid
							cards={cards}
							allCards={wallCards}
							clusters={data.clusters}
							parties={data.parties}
							display={filters.display}
							groupBy={filters.groupBy}
							selectedParties={filters.selectedParties}
							onToggleParty={filters.toggleParty}
							onInspect={setInspectedCard}
						/>
					) : null}
				</main>

				<footer className='app-footer'>
					{t('encodedIn')} <a href='https://gurki.nz'>Gurki</a>
					{' · '}
					<a
						href={withLangQuery(
							eventScoresPath(eventId),
							lang,
							eventLangs(eventId).canonical
						)}
					>
						{t('publicScores')}
					</a>
					{' · '}
					<a href={eventLlmsPath(eventId)}>llms.txt</a>
					{' · '}
					<a href={withLangQuery('/terms/', lang, 'en')}>{t('terms')}</a>
					{' · '}
					<a href={withLangQuery('/privacy/', lang, 'en')}>{t('privacy')}</a>
					{' · '}
					<a href='https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e'>
						{t('contact')}
					</a>
				</footer>
			</div>

			{inspectedCard ? (
				<CardInspectOverlay
					card={inspectedCard}
					cards={
						data
							? cardsInWallOrder(
									cards,
									data.clusters,
									data.parties,
									filters.groupBy,
									filters.display.party
								)
							: cards
					}
					display={filters.display}
					parties={data?.parties ?? []}
					anonymiseNames={names}
					onClose={() => setInspectedCard(null)}
					onToggleParty={() => filters.setAnonymise(!filters.anonymise)}
				/>
			) : null}
		</>
	);
}

function HeaderActionContent(props: {
	label: string;
	icon: JSX.Element;
}): JSX.Element {
	return (
		<>
			<span className='app-button__label'>{props.label}</span>
			<span className='app-button__icon' aria-hidden>
				{props.icon}
			</span>
		</>
	);
}

function PlayIcon(): JSX.Element {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
			<path d='M8 5v14l11-7z' fill='currentColor' />
		</svg>
	);
}

function ScoreIcon(): JSX.Element {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
			<path
				d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M4 22h16'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M18 2H6v7a6 6 0 0 0 12 0V2z'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
