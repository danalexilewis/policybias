import type { JSX } from 'react';
import type { ClusterMeta, PartyMeta } from '../data/types';
import type { UseFiltersResult } from './useFilters';
import { clusterColour } from '../canvas/clusterColours';
import styles from './FilterBar.module.css';

type FilterBarProps = {
	clusters: ClusterMeta[];
	parties: PartyMeta[];
	totalCount: number;
	filters: UseFiltersResult;
};

const MONEY_OPTIONS = [
	{ id: 'named-figure' as const, label: 'Named figure' },
	{ id: 'no-figure' as const, label: 'No figure' }
];

/** Cluster, party, money and derived filters plus anonymise and enriched toggles. */
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
		enriched,
		setEnriched,
		selectedClusters,
		toggleCluster,
		selectedParties,
		toggleParty,
		selectedMoney,
		toggleMoney,
		hasOutput,
		setHasOutput,
		hasDerived,
		setHasDerived
	} = filters;

	return (
		<div className={styles.bar} role='toolbar' aria-label='Policy card filters'>
			<div className={styles.group}>
				<span className={styles.groupLabel}>Cluster</span>
				{clusters.map((cluster) => {
					const active = selectedClusters.has(cluster.id);
					return (
						<button
							key={cluster.id}
							type='button'
							className={`${styles.chip} ${active ? styles.chipActive : ''}`}
							onClick={() => toggleCluster(cluster.id)}
							aria-pressed={active}
						>
							<span
								className={styles.clusterSwatch}
								style={{ backgroundColor: clusterColour(cluster.id) }}
								aria-hidden
							/>
							{cluster.label}
						</button>
					);
				})}
			</div>

			<div className={styles.divider} aria-hidden />

			<div className={styles.group}>
				<span className={styles.groupLabel}>Party</span>
				{parties.map((party) => {
					const active = selectedParties.has(party.id);
					const useBrandColour = !anonymise;
					return (
						<button
							key={party.id}
							type='button'
							className={[
								styles.chip,
								styles.partyChip,
								active ? styles.chipActive : styles.partyChipInactive
							].join(' ')}
							style={
								useBrandColour
									? { backgroundColor: party.colour, borderColor: party.colour }
									: undefined
							}
							onClick={() => toggleParty(party.id)}
							aria-pressed={active}
						>
							{party.label}
						</button>
					);
				})}
			</div>

			<div className={styles.divider} aria-hidden />

			<div className={styles.group}>
				<span className={styles.groupLabel}>Money</span>
				{MONEY_OPTIONS.map((option) => {
					const active = selectedMoney.has(option.id);
					return (
						<button
							key={option.id}
							type='button'
							className={`${styles.chip} ${active ? styles.chipActive : ''}`}
							onClick={() => toggleMoney(option.id)}
							aria-pressed={active}
						>
							{option.label}
						</button>
					);
				})}
			</div>

			<div className={styles.divider} aria-hidden />

			<div className={styles.group}>
				<span className={styles.groupLabel}>Shape</span>
				<button
					type='button'
					className={`${styles.chip} ${hasOutput === true ? styles.chipActive : ''}`}
					onClick={() => setHasOutput(hasOutput === true ? null : true)}
					aria-pressed={hasOutput === true}
				>
					Has output
				</button>
				<button
					type='button'
					className={`${styles.chip} ${hasOutput === false ? styles.chipActive : ''}`}
					onClick={() => setHasOutput(hasOutput === false ? null : false)}
					aria-pressed={hasOutput === false}
				>
					No output
				</button>
				<button
					type='button'
					className={`${styles.chip} ${hasDerived === true ? styles.chipActive : ''}`}
					onClick={() => setHasDerived(hasDerived === true ? null : true)}
					aria-pressed={hasDerived === true}
				>
					Has reading
				</button>
				<button
					type='button'
					className={`${styles.chip} ${hasDerived === false ? styles.chipActive : ''}`}
					onClick={() => setHasDerived(hasDerived === false ? null : false)}
					aria-pressed={hasDerived === false}
				>
					Stated only
				</button>
			</div>

			<div className={styles.divider} aria-hidden />

			<label className={styles.toggle}>
				<input
					type='checkbox'
					checked={anonymise}
					onChange={(event) => setAnonymise(event.target.checked)}
				/>
				Anonymise
			</label>
			<label className={styles.toggle}>
				<input
					type='checkbox'
					checked={enriched}
					onChange={(event) => setEnriched(event.target.checked)}
				/>
				Enriched
			</label>

			<span className={styles.count}>
				{filtered.length} / {totalCount}
			</span>
		</div>
	);
}
