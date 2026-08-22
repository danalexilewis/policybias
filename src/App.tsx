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
	eventLabel,
	eventLlmsPath,
	eventScoresPath
} from './event/events';
import { useEventView } from './event/useEventView';
import { LanguagePicker } from './i18n/LanguagePicker';
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

	useEffect(() => {
		document.title =
			view === 'board'
				? `Policy Bias — ${eventLabel(eventId)}`
				: `Play — ${eventLabel(eventId)}`;
	}, [view, eventId]);

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
							<h1 className='app-header__title'>{eventLabel(eventId)}</h1>
						</a>
						<div className='app-header__actions'>
							<LanguagePicker />
							<a className='app-button' href={eventScoresPath(eventId)}>
								{t('publicScores')}
							</a>
							{canPlay ? (
								<a
									className='app-button app-button--primary'
									href={eventGamePath(eventId)}
									onClick={onPlayGameClick}
								>
									{t('playGame')}
								</a>
							) : (
								<button
									type='button'
									className='app-button app-button--primary'
									disabled
								>
									{t('playGame')}
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
					<a href={eventScoresPath(eventId)}>{t('publicScores')}</a>
					{' · '}
					<a href={eventLlmsPath(eventId)}>llms.txt</a>
					{' · '}
					<a href='/terms/'>{t('terms')}</a>
					{' · '}
					<a href='/privacy/'>{t('privacy')}</a>
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
