import type { JSX } from 'react';
import { GurkiCard } from '../card/CardNode';
import type { CardDisplay } from '../card/CardDisplay';
import type { ClusterMeta, PartyMeta, PolicyCard } from '../data/types';
import { clusterColour } from '../theme/clusterColours';
import { groupCards, type GroupBy } from './sortCards';
import styles from './PolicyGrid.module.css';

type PolicyGridProps = {
	cards: PolicyCard[];
	clusters: ClusterMeta[];
	parties: PartyMeta[];
	display: CardDisplay;
	groupBy: GroupBy;
	onInspect: (card: PolicyCard) => void;
};

function headingColour(
	groupId: string,
	groupBy: GroupBy,
	parties: PartyMeta[]
): string {
	if (groupBy === 'party') {
		const party = parties.find((entry) => entry.id === groupId);
		return party?.colour ?? '#8a8378';
	}
	return clusterColour(groupId);
}

function resolveGroupBy(groupBy: GroupBy, partyVisible: boolean): GroupBy {
	if (!partyVisible && groupBy === 'party') {
		return 'none';
	}
	return groupBy;
}

/** CSS-column masonry of Gurki cards, optionally sectioned by category or party. */
export function PolicyGrid({
	cards,
	clusters,
	parties,
	display,
	groupBy,
	onInspect
}: PolicyGridProps): JSX.Element {
	const resolvedGroupBy = resolveGroupBy(groupBy, display.party);
	const groups = groupCards(cards, clusters, parties, resolvedGroupBy);
	const showHeading = resolvedGroupBy !== 'none';

	return (
		<div className={styles.wall}>
			{groups.map((group) => (
				<section key={group.id} className={styles.section}>
					{showHeading ? (
						<h2 className={styles.heading}>
							<span
								className={styles.swatch}
								style={{
									backgroundColor: headingColour(
										group.id,
										resolvedGroupBy,
										parties
									)
								}}
								aria-hidden
							/>
							{group.label}
						</h2>
					) : null}
					<div className={styles.grid}>
						{group.cards.map((card) => (
							<div key={card.id} className={styles.item}>
								<GurkiCard
									card={card}
									display={display}
									face='stated'
									size='index'
									clusterLabels={Object.fromEntries(
										clusters.map((cluster) => [cluster.id, cluster.label])
									)}
									onInspect={() => onInspect(card)}
								/>
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	);
}
