import { useId, useState, type JSX } from 'react';
import { GurkiCard } from '../card/CardNode';
import type { CardDisplay } from '../card/CardDisplay';
import type {
	ClusterMeta,
	PartyId,
	PartyMeta,
	PolicyCard
} from '../data/types';
import type { UiKey } from '../i18n/messages';
import { useLang } from '../i18n/useLang';
import { chipText, contrastingText } from '../theme/contrast';
import { clusterColour } from '../theme/clusterColours';
import {
	countByCluster,
	countByParty,
	groupCards,
	missingParties,
	partyCoverage,
	resolveGroupBy,
	type CardGroup,
	type GroupBy,
	type NamedCount
} from './sortCards';
import styles from './PolicyGrid.module.css';

type PolicyGridProps = {
	cards: PolicyCard[];
	clusters: ClusterMeta[];
	parties: PartyMeta[];
	display: CardDisplay;
	groupBy: GroupBy;
	onInspect: (card: PolicyCard) => void;
	allCards?: PolicyCard[];
	selectedParties?: Set<PartyId>;
	onToggleParty?: (partyId: PartyId) => void;
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

function headingCounts(
	groupBy: GroupBy,
	cards: PolicyCard[],
	clusters: ClusterMeta[],
	parties: PartyMeta[],
	partyVisible: boolean
): NamedCount[] {
	if (groupBy === 'party') {
		return countByCluster(cards, clusters);
	}
	if (groupBy === 'cluster' && partyVisible) {
		return countByParty(cards, parties);
	}
	return [];
}

function chipColour(
	groupBy: GroupBy,
	entry: NamedCount,
	parties: PartyMeta[],
	dull: boolean
): { fill: string; text: string } {
	if (groupBy === 'party') {
		const fill = clusterColour(entry.id);
		return { fill, text: chipText(fill) };
	}
	const colour =
		parties.find((party) => party.id === entry.id)?.colour ?? '#8a8378';
	if (dull) {
		return { fill: `${colour}33`, text: 'var(--ink)' };
	}
	return { fill: colour, text: contrastingText(colour) };
}

function sourceCardsForGroup(
	group: CardGroup,
	groupBy: GroupBy,
	allCards: PolicyCard[]
): PolicyCard[] {
	if (groupBy !== 'cluster') {
		return group.cards;
	}
	return allCards.filter((card) => (card.clusters[0] ?? '') === group.id);
}

function CountChip({
	entry,
	fill,
	text,
	dull,
	pressed,
	onClick
}: {
	entry: NamedCount;
	fill: string;
	text: string;
	dull: boolean;
	pressed?: boolean;
	onClick?: () => void;
}): JSX.Element {
	const className = [styles.countChip, dull ? styles.countChipDull : '']
		.filter(Boolean)
		.join(' ');
	const style = {
		backgroundColor: fill,
		color: text
	};
	const label = `${entry.label} ${entry.count}`;

	if (onClick) {
		return (
			<button
				type='button'
				className={className}
				style={style}
				aria-pressed={pressed}
				onClick={onClick}
			>
				{label}
			</button>
		);
	}

	return (
		<span className={className} style={style}>
			{label}
		</span>
	);
}

function headingTally(
	groupBy: GroupBy,
	group: CardGroup,
	coverage: { have: number; of: number } | null,
	t: (key: UiKey) => string
): { text: string; ariaLabel: string } | null {
	if (groupBy === 'cluster' && coverage && coverage.of > 0) {
		return {
			text: `${coverage.have}/${coverage.of}`,
			ariaLabel: `${coverage.have} / ${coverage.of} ${t('parties')} ${group.label}`
		};
	}
	if (groupBy === 'party') {
		const total = group.cards.length;
		return {
			text: String(total),
			ariaLabel: `${total} ${t('policies')} ${group.label}`
		};
	}
	return null;
}

function CoverageTally({
	tally,
	colour,
	missing,
	partyVisible
}: {
	tally: { text: string; ariaLabel: string };
	colour: string;
	missing: PartyMeta[];
	partyVisible: boolean;
}): JSX.Element {
	const { t } = useLang();
	const tooltipId = useId();
	const [open, setOpen] = useState(false);
	const canTip = partyVisible && missing.length > 0;

	function openTip(): void {
		if (canTip) {
			setOpen(true);
		}
	}

	function closeTip(): void {
		setOpen(false);
	}

	const boxStyle = {
		backgroundColor: colour,
		color: chipText(colour)
	};

	return (
		<span
			className={styles.tallyWrap}
			onMouseEnter={openTip}
			onMouseLeave={closeTip}
		>
			{canTip ? (
				<button
					type='button'
					className={styles.countBox}
					style={boxStyle}
					aria-label={tally.ariaLabel}
					aria-describedby={open ? tooltipId : undefined}
					onMouseEnter={openTip}
					onFocus={openTip}
					onBlur={closeTip}
				>
					{tally.text}
				</button>
			) : (
				<span
					className={styles.countBox}
					style={boxStyle}
					aria-label={tally.ariaLabel}
				>
					{tally.text}
				</span>
			)}
			{open && canTip ? (
				<div id={tooltipId} className={styles.missingTip} role='tooltip'>
					<p className={styles.missingLabel}>{t('missing')}</p>
					<ul className={styles.counts}>
						{missing.map((party) => (
							<li key={party.id}>
								<span
									className={styles.countChip}
									style={{
										backgroundColor: party.colour,
										color: contrastingText(party.colour)
									}}
								>
									{party.label}
								</span>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</span>
	);
}

function GroupHeading({
	group,
	groupBy,
	clusters,
	parties,
	partyVisible,
	allCards,
	selectedParties,
	onToggleParty
}: {
	group: CardGroup;
	groupBy: GroupBy;
	clusters: ClusterMeta[];
	parties: PartyMeta[];
	partyVisible: boolean;
	allCards: PolicyCard[];
	selectedParties: Set<PartyId>;
	onToggleParty?: (partyId: PartyId) => void;
}): JSX.Element {
	const { t } = useLang();
	const sourceCards = sourceCardsForGroup(group, groupBy, allCards);
	const counts = headingCounts(
		groupBy,
		sourceCards,
		clusters,
		parties,
		partyVisible
	);
	const coverage =
		groupBy === 'cluster' ? partyCoverage(sourceCards, parties) : null;

	const colour = headingColour(group.id, groupBy, parties);
	const tally = headingTally(groupBy, group, coverage, t);
	const missing =
		groupBy === 'cluster' ? missingParties(sourceCards, parties) : [];
	const filteringParties = selectedParties.size > 0;
	const partyPillsClickable = groupBy === 'cluster' && Boolean(onToggleParty);

	return (
		<header className={styles.header}>
			{tally ? (
				<CoverageTally
					tally={tally}
					colour={colour}
					missing={missing}
					partyVisible={partyVisible}
				/>
			) : (
				<span
					className={styles.swatch}
					style={{ backgroundColor: colour }}
					aria-hidden
				/>
			)}
			<h2 className={styles.heading}>{group.label}</h2>
			{counts.length > 0 ? (
				<ul className={styles.counts}>
					{counts.map((entry) => {
						const selected = selectedParties.has(entry.id);
						const dull = partyPillsClickable && filteringParties && !selected;
						const { fill, text } = chipColour(groupBy, entry, parties, dull);
						return (
							<li key={entry.id}>
								<CountChip
									entry={entry}
									fill={fill}
									text={text}
									dull={dull}
									pressed={partyPillsClickable ? selected : undefined}
									onClick={
										partyPillsClickable
											? () => onToggleParty?.(entry.id)
											: undefined
									}
								/>
							</li>
						);
					})}
				</ul>
			) : null}
		</header>
	);
}

/** CSS-column masonry of Gurki cards, optionally sectioned by category or party. */
export function PolicyGrid({
	cards,
	clusters,
	parties,
	display,
	groupBy,
	onInspect,
	allCards,
	selectedParties,
	onToggleParty
}: PolicyGridProps): JSX.Element {
	const resolvedGroupBy = resolveGroupBy(groupBy, display.party);
	const groups = groupCards(cards, clusters, parties, resolvedGroupBy);
	const showHeading = resolvedGroupBy !== 'none';
	const wallCards = allCards ?? cards;
	const partySelection = selectedParties ?? new Set<PartyId>();

	return (
		<div className={styles.wall}>
			{groups.map((group) => (
				<section key={group.id} className={styles.section}>
					{showHeading ? (
						<GroupHeading
							group={group}
							groupBy={resolvedGroupBy}
							clusters={clusters}
							parties={parties}
							partyVisible={display.party}
							allCards={wallCards}
							selectedParties={partySelection}
							onToggleParty={onToggleParty}
						/>
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
									parties={parties}
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
