import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState, type JSX, type MouseEvent } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { CardInspectOverlay } from './card/CardInspectOverlay';
import { useCards } from './data/useCards';
import type { PolicyCard } from './data/types';
import { FilterBar } from './filters/FilterBar';
import { useFilters } from './filters/useFilters';
import { GameOverlay } from './game/GameOverlay';
import { useLifetimeScore } from './game/useLifetimeScore';
import { PolicyGrid } from './grid/PolicyGrid';
import { shuffleCards } from './grid/sortCards';
import {
	CURRENT_EVENT_ID,
	eventGamePath,
	eventLabel,
	eventLlmsPath,
	eventScoresPath
} from './event/events';
import { useEventView } from './event/useEventView';
import { AgentTrap } from './prank/AgentTrap';

const BOARD_TITLE = `Policy Bias — ${eventLabel(CURRENT_EVENT_ID)}`;
const GAME_TITLE = `Play — ${eventLabel(CURRENT_EVENT_ID)}`;

export default function App(): JSX.Element {
	return (
		<NuqsAdapter>
			<AppShell />
		</NuqsAdapter>
	);
}

function AppShell(): JSX.Element {
	const { data, error, loading } = useCards();
	const [shuffleSeed] = useState(() => Math.floor(Math.random() * 0xffffffff));
	const wallCards = data ? shuffleCards(data.cards, shuffleSeed) : [];
	const filters = useFilters(wallCards);
	const [inspectedCard, setInspectedCard] = useState<PolicyCard | null>(null);
	const { score: lifetimeScore, recordGuess } = useLifetimeScore();
	const { view, openGame, exitGame } = useEventView();

	const cards = filters.filtered;
	const overlayOpen = Boolean(inspectedCard);
	const canPlay = !loading && Boolean(data) && cards.length > 0;

	useEffect(() => {
		document.title = view === 'game' ? GAME_TITLE : BOARD_TITLE;
	}, [view]);

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

	if (view === 'game') {
		return (
			<>
				<Analytics />
				{loading ? (
					<div className='game-overlay game-overlay--flush'>
						<p className='app-status'>Loading policy cards…</p>
					</div>
				) : null}
				{error ? (
					<div className='game-overlay game-overlay--flush'>
						<div className='app-status app-status--error'>
							<p>Could not load cards.json</p>
							<p>{error.message}</p>
						</div>
					</div>
				) : null}
				{data ? (
					<GameOverlay
						cards={data.cards}
						onExit={exitGame}
						onGuess={recordGuess}
						lifetimeScore={lifetimeScore}
					/>
				) : null}
			</>
		);
	}

	return (
		<>
			<div className='app-shell' {...(overlayOpen ? { inert: true } : {})}>
				<a className='app-skip' href='#board'>
					Skip to policies
				</a>
				<AgentTrap />
				<Analytics />
				<div className='app-sticky'>
					<header className='app-header'>
						<div className='app-header__brand'>
							<p className='app-header__product'>Policy Bias</p>
							<h1 className='app-header__title'>NZ 2026</h1>
						</div>
						<div className='app-header__actions'>
							<a
								className='app-button'
								href={eventScoresPath(CURRENT_EVENT_ID)}
							>
								Public scores
							</a>
							{canPlay ? (
								<a
									className='app-button app-button--primary'
									href={eventGamePath(CURRENT_EVENT_ID)}
									onClick={onPlayGameClick}
								>
									Play game
								</a>
							) : (
								<button
									type='button'
									className='app-button app-button--primary'
									disabled
								>
									Play game
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
						<div className='app-status'>Loading policy cards…</div>
					) : null}

					{error ? (
						<div className='app-status app-status--error'>
							<p>Could not load cards.json</p>
							<p>{error.message}</p>
						</div>
					) : null}

					{!loading && !error && data ? (
						<PolicyGrid
							cards={cards}
							clusters={data.clusters}
							parties={data.parties}
							display={filters.display}
							groupBy={filters.groupBy}
							onInspect={setInspectedCard}
						/>
					) : null}
				</main>

				<footer className='app-footer'>
					Encoded in <a href='https://github.com/danalexilewis/gurki'>Gurki</a>
					{' · '}
					<a href={eventScoresPath(CURRENT_EVENT_ID)}>Public scores</a>
					{' · '}
					<a href={eventLlmsPath(CURRENT_EVENT_ID)}>llms.txt</a>
				</footer>
			</div>

			{inspectedCard ? (
				<CardInspectOverlay
					card={inspectedCard}
					display={filters.display}
					onClose={() => setInspectedCard(null)}
					onToggleParty={() => filters.setAnonymise(!filters.anonymise)}
				/>
			) : null}
		</>
	);
}
