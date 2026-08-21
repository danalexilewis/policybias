import { useState, type JSX } from 'react';
import { CardNode } from './card/CardNode';
import { FilterBar } from './filters/FilterBar';
import { useFilters } from './filters/useFilters';
import { GameOverlay } from './game/GameOverlay';
import { PolicyCanvas } from './canvas/PolicyCanvas';
import { useCards } from './data/useCards';
import type { CanvasLayoutMode } from './canvas/layout';

const LAYOUT_MODES: Array<{ id: CanvasLayoutMode; label: string }> = [
	{ id: 'wall', label: 'Wall' },
	{ id: 'cluster', label: 'Cluster' }
];

export default function App(): JSX.Element {
	const { data, error, loading } = useCards();
	const filters = useFilters(data?.cards ?? []);
	const [isGameOpen, setIsGameOpen] = useState(false);
	const [layoutMode, setLayoutMode] = useState<CanvasLayoutMode>('wall');

	const cards = filters.filtered;
	const clusters = data?.clusters ?? [];

	return (
		<div className='app-shell'>
			<header className='app-header'>
				<div className='app-header__brand'>
					<p className='app-header__product'>Policy Bias</p>
					<h1 className='app-header__title'>NZ 2026</h1>
				</div>
				<div
					className='app-header__mode'
					role='group'
					aria-label='Canvas layout'
				>
					{LAYOUT_MODES.map((mode) => {
						const pressed = layoutMode === mode.id;
						return (
							<button
								key={mode.id}
								type='button'
								aria-pressed={pressed}
								onClick={() => setLayoutMode(mode.id)}
							>
								{mode.label}
							</button>
						);
					})}
				</div>
				<div className='app-header__actions'>
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
					<PolicyCanvas
						cards={cards}
						clusters={clusters}
						display={filters.display}
						enriched={filters.enriched}
						layoutMode={layoutMode}
						CardNodeComponent={CardNode}
					/>
				) : null}
			</main>

			<footer className='app-footer'>
				Encoded in{' '}
				<a href='https://github.com/danalexilewis/gurki'>Gurki</a>
			</footer>

			{isGameOpen && data ? (
				<GameOverlay cards={data.cards} onExit={() => setIsGameOpen(false)} />
			) : null}
		</div>
	);
}
