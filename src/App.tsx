import { Analytics } from '@vercel/analytics/react';
import { useState, type JSX } from 'react';
import { CardInspectOverlay } from './card/CardInspectOverlay';
import { useCards } from './data/useCards';
import type { PolicyCard } from './data/types';
import { FilterBar } from './filters/FilterBar';
import { useFilters } from './filters/useFilters';
import { GameOverlay } from './game/GameOverlay';
import { useLifetimeScore } from './game/useLifetimeScore';
import { PolicyGrid } from './grid/PolicyGrid';

export default function App(): JSX.Element {
	const { data, error, loading } = useCards();
	const filters = useFilters(data?.cards ?? []);
	const [isGameOpen, setIsGameOpen] = useState(false);
	const [inspectedCard, setInspectedCard] = useState<PolicyCard | null>(null);
	const { score: lifetimeScore, recordGuess } = useLifetimeScore();

	const cards = filters.filtered;

	return (
		<div className='app-shell'>
			<Analytics />
			<div className='app-sticky'>
				<header className='app-header'>
					<div className='app-header__brand'>
						<p className='app-header__product'>Policy Bias</p>
						<h1 className='app-header__title'>NZ 2026</h1>
					</div>
					<div className='app-header__actions'>
						{lifetimeScore.attempted > 0 ? (
							<p
								className='app-header__score'
								aria-label={`Score ${lifetimeScore.correct} out of ${lifetimeScore.attempted}`}
							>
								{lifetimeScore.correct}/{lifetimeScore.attempted}
							</p>
						) : null}
						<button
							type='button'
							className='app-button app-button--primary'
							onClick={() => setIsGameOpen(true)}
							disabled={loading || !data || cards.length === 0}
						>
							Play
						</button>
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

			<main className='app-main'>
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
				<a href='/api/scores'>Public scores</a>
			</footer>

			{inspectedCard ? (
				<CardInspectOverlay
					card={inspectedCard}
					display={filters.display}
					onClose={() => setInspectedCard(null)}
				/>
			) : null}

			{isGameOpen && data ? (
				<GameOverlay
					cards={data.cards}
					onExit={() => setIsGameOpen(false)}
					onGuess={recordGuess}
					lifetimeScore={lifetimeScore}
				/>
			) : null}
		</div>
	);
}
