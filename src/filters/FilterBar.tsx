import {
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type JSX
} from 'react';
import type { ClusterMeta, PartyMeta } from '../data/types';
import type { GroupBy } from '../grid/sortCards';
import type { UseFiltersResult } from './useFilters';
import { useLang } from '../i18n/useLang';
import { clusterColour } from '../theme/clusterColours';
import { chipText, contrastingText } from '../theme/contrast';
import styles from './FilterBar.module.css';

type FilterBarProps = {
	clusters: ClusterMeta[];
	parties: PartyMeta[];
	totalCount: number;
	filters: UseFiltersResult;
};

const MONEY_OPTION_IDS = ['named-figure', 'no-figure'] as const;

function nextGroupBy(current: GroupBy, clicked: 'cluster' | 'party'): GroupBy {
	return current === clicked ? 'none' : clicked;
}

function partyChipStyle(
	colour: string,
	active: boolean
): {
	backgroundColor: string;
	borderColor: string;
	color: string;
} {
	if (active) {
		return {
			backgroundColor: colour,
			borderColor: colour,
			color: contrastingText(colour)
		};
	}
	return {
		backgroundColor: `${colour}33`,
		borderColor: colour,
		color: 'var(--ink)'
	};
}

type FilterPillProps = {
	label: string;
	checked: boolean;
	onChange: () => void;
	style?: CSSProperties;
	className?: string;
	invertChecked?: boolean;
};

/** Pill-shaped checkbox used for every filter in the docked panel. */
function FilterPill({
	label,
	checked,
	onChange,
	style,
	className,
	invertChecked = true
}: FilterPillProps): JSX.Element {
	return (
		<label
			className={[
				styles.pill,
				checked && invertChecked ? styles.pillChecked : '',
				className
			]
				.filter(Boolean)
				.join(' ')}
			style={style}
		>
			<input
				type='checkbox'
				checked={checked}
				onChange={onChange}
				className={styles.pillCheck}
			/>
			{label}
		</label>
	);
}

function appliedFilterCount(filters: UseFiltersResult): number {
	return (
		filters.selectedClusters.size +
		filters.selectedParties.size +
		filters.selectedMoney.size +
		(filters.hasOutput === null ? 0 : 1) +
		(filters.hasDerived === null ? 0 : 1)
	);
}

/** Category, party, money and derived filters plus grouping and anonymise. */
export function FilterBar({
	clusters,
	parties,
	totalCount,
	filters
}: FilterBarProps): JSX.Element {
	const {
		filtered,
		anonymise,
		setAnonymise,
		groupBy,
		setGroupBy,
		selectedClusters,
		toggleCluster,
		selectedParties,
		toggleParty,
		selectedMoney,
		toggleMoney,
		hasOutput,
		setHasOutput,
		hasDerived,
		setHasDerived,
		clearAppliedFilters
	} = filters;

	const { t } = useLang();
	const barRef = useRef<HTMLDivElement>(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const applied = appliedFilterCount(filters);

	useEffect(() => {
		if (!menuOpen) {
			return;
		}

		function onKeyDown(event: KeyboardEvent): void {
			if (event.key === 'Escape') {
				setMenuOpen(false);
			}
		}

		function onPointerDown(event: PointerEvent): void {
			const root = barRef.current;
			if (!root) {
				return;
			}
			if (event.target instanceof Node && !root.contains(event.target)) {
				setMenuOpen(false);
				event.preventDefault();
				event.stopPropagation();
			}
		}

		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('pointerdown', onPointerDown, true);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('pointerdown', onPointerDown, true);
		};
	}, [menuOpen]);

	return (
		<div
			ref={barRef}
			className={styles.bar}
			role='toolbar'
			aria-label={t('filterAria')}
		>
			<div className={styles.row}>
				<button
					type='button'
					className={styles.switch}
					role='switch'
					aria-checked={anonymise}
					onClick={() => setAnonymise(!anonymise)}
				>
					{t('anonymise')}
					<span
						className={`${styles.switchTrack} ${anonymise ? styles.switchTrackOn : ''}`}
						aria-hidden
					>
						<span className={styles.switchThumb} />
					</span>
				</button>

				<div className={styles.divider} aria-hidden />

				<div className={styles.group}>
					<span className={styles.groupLabel}>{t('groupBy')}</span>
					<button
						type='button'
						className={`${styles.chip} ${groupBy === 'cluster' ? styles.chipActive : ''}`}
						onClick={() => setGroupBy(nextGroupBy(groupBy, 'cluster'))}
						aria-pressed={groupBy === 'cluster'}
					>
						{t('category')}
					</button>
					{anonymise ? null : (
						<button
							type='button'
							className={`${styles.chip} ${groupBy === 'party' ? styles.chipActive : ''}`}
							onClick={() => setGroupBy(nextGroupBy(groupBy, 'party'))}
							aria-pressed={groupBy === 'party'}
						>
							{t('party')}
						</button>
					)}
				</div>

				<div className={styles.trailing}>
					<span className={styles.count}>
						{filtered.length} / {totalCount}
					</span>
					{applied > 0 ? (
						<button
							type='button'
							className={styles.menuButton}
							onClick={clearAppliedFilters}
						>
							{t('clearFilters')}
						</button>
					) : null}
					<button
						type='button'
						className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
						aria-expanded={menuOpen}
						aria-pressed={menuOpen}
						aria-controls='filter-menu'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{t('filters')}
						{applied > 0 ? (
							<span
								className={styles.badge}
								aria-label={`${applied} ${t('applied')}`}
							>
								{applied}
							</span>
						) : null}
					</button>
				</div>
			</div>

			{menuOpen ? (
				<div className={styles.menu} id='filter-menu'>
					<div className={styles.menuBody}>
						<div className={styles.group}>
							<span className={styles.groupLabel}>{t('category')}</span>
							{clusters.map((cluster) => {
								const colour = clusterColour(cluster.id);
								return (
									<FilterPill
										key={cluster.id}
										label={cluster.label}
										checked={selectedClusters.has(cluster.id)}
										onChange={() => toggleCluster(cluster.id)}
										className={styles.pillCategory}
										invertChecked={false}
										style={{
											backgroundColor: colour,
											color: chipText(colour)
										}}
									/>
								);
							})}
						</div>

						{anonymise ? null : (
							<div className={styles.group}>
								<span className={styles.groupLabel}>{t('party')}</span>
								{parties.map((party) => {
									const active = selectedParties.has(party.id);
									return (
										<FilterPill
											key={party.id}
											label={party.label}
											checked={active}
											onChange={() => toggleParty(party.id)}
											className={active ? undefined : styles.partyChipInactive}
											invertChecked={false}
											style={partyChipStyle(party.colour, active)}
										/>
									);
								})}
							</div>
						)}

						<div className={styles.group}>
							<span className={styles.groupLabel}>{t('money')}</span>
							{MONEY_OPTION_IDS.map((id) => (
								<FilterPill
									key={id}
									label={
										id === 'named-figure' ? t('namedFigure') : t('noFigure')
									}
									checked={selectedMoney.has(id)}
									onChange={() => toggleMoney(id)}
								/>
							))}
						</div>

						<div className={styles.group}>
							<span className={styles.groupLabel}>{t('shape')}</span>
							<FilterPill
								label={t('hasOutput')}
								checked={hasOutput === true}
								onChange={() => setHasOutput(hasOutput === true ? null : true)}
							/>
							<FilterPill
								label={t('noOutput')}
								checked={hasOutput === false}
								onChange={() =>
									setHasOutput(hasOutput === false ? null : false)
								}
							/>
							<FilterPill
								label={t('hasUnderstanding')}
								checked={hasDerived === true}
								onChange={() =>
									setHasDerived(hasDerived === true ? null : true)
								}
							/>
							<FilterPill
								label={t('statedOnly')}
								checked={hasDerived === false}
								onChange={() =>
									setHasDerived(hasDerived === false ? null : false)
								}
							/>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
