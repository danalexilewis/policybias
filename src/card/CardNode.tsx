import { type JSX, type KeyboardEvent } from 'react';
import type {
	AnonymiseNames,
	CardFace,
	CardScenario,
	CardStep,
	PartyId,
	PartyMeta,
	PolicyCard,
	ReportItem
} from '../data/types';
import type { CardDisplay } from './CardDisplay';
import {
	anonymiseText,
	NZ_ANONYMISE_NAMES,
	partyLabel,
	partyLogoUrl,
	stripPartyFromTitle
} from './anonymise';
import { clusterColour } from '../theme/clusterColours';
import { chipText } from '../theme/contrast';
import styles from './CardNode.module.css';

type CardSize = 'grid' | 'index' | 'inspect' | 'game';

type GurkiCardProps = {
	card: PolicyCard;
	display: CardDisplay;
	face?: 'stated' | 'derived';
	size?: CardSize;
	/** Opens the inspect overlay. Source links stop this. */
	onInspect?: () => void;
	/** Render as a div inside a game button. */
	as?: 'article' | 'div';
	clusterLabels?: Record<string, string>;
	parties?: PartyMeta[];
	anonymiseNames?: AnonymiseNames;
};

/** Fixed-size mark so revealing the party does not change the card header. */
function PartyMark(props: {
	party: PartyId;
	visible: boolean;
	parties: PartyMeta[];
}): JSX.Element {
	const src = partyLogoUrl(props.parties, props.party);
	return (
		<div className={styles.logoSlot}>
			{props.visible && src ? (
				<img
					className={styles.partyLogo}
					src={src}
					alt={partyLabel(props.parties, props.party)}
				/>
			) : (
				<span className={styles.logoPlaceholder} aria-hidden='true' />
			)}
		</div>
	);
}

function headingText(
	text: string,
	hideParty: boolean,
	names: AnonymiseNames,
): string {
	const stripped = stripPartyFromTitle(text, names);
	return hideParty ? anonymiseText(stripped, names) : stripped;
}

function maybeAnonymise(
	text: string,
	hideParty: boolean,
	names: AnonymiseNames,
): string {
	return hideParty ? anonymiseText(text, names) : text;
}

function stepVisible(step: CardStep, display: CardDisplay): boolean {
	switch (step.kind) {
		case 'given':
			return display.given;
		case 'when':
			return display.when;
		case 'then':
			return display.then;
		case 'output':
			return display.output;
		case 'outcome':
			return display.outcome;
		default:
			return false;
	}
}

function surfaceClass(step: CardStep): string {
	if (step.connector === 'but' || step.surface === 'But') {
		return styles.surfaceBut ?? '';
	}
	if (step.connector === 'and' || step.surface === 'And') {
		return styles.surfaceAnd ?? '';
	}
	switch (step.kind) {
		case 'given':
			return styles.surfaceGiven ?? '';
		case 'when':
			return styles.surfaceWhen ?? '';
		case 'then':
			return styles.surfaceThen ?? '';
		case 'output':
			return styles.surfaceOutput ?? '';
		case 'outcome':
			return styles.surfaceOutcome ?? '';
		default:
			return '';
	}
}

function StepLine({
	step,
	hideParty,
	names
}: {
	step: CardStep;
	hideParty: boolean;
	names: AnonymiseNames;
}): JSX.Element {
	const text = maybeAnonymise(step.text, hideParty, names);
	const className = [
		styles.step,
		step.extrapolated ? styles.stepExtrapolated : ''
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div
			className={className}
			title={step.extrapolated && step.reason ? step.reason : undefined}
		>
			<span className={`${styles.surface} ${surfaceClass(step)}`}>
				{step.surface}
			</span>
			<span className={styles.stepText}>{text}</span>
		</div>
	);
}

function ScenarioBlock({
	scenario,
	display,
	hideParty,
	names
}: {
	scenario: CardScenario;
	display: CardDisplay;
	hideParty: boolean;
	names: AnonymiseNames;
}): JSX.Element {
	const visibleSteps = scenario.steps.filter((step) =>
		stepVisible(step, display)
	);
	if (visibleSteps.length === 0) {
		return <></>;
	}

	const title = headingText(scenario.title, hideParty, names);

	return (
		<section className={styles.scenario}>
			<h4 className={styles.scenarioTitle}>{title}</h4>
			{visibleSteps.map((step, index) => (
				<StepLine
					key={`${step.kind}-${index}`}
					step={step}
					hideParty={hideParty}
					names={names}
				/>
			))}
		</section>
	);
}

function ReportBlock({
	heading,
	items,
	displayFlag,
	hideParty,
	names
}: {
	heading: string;
	items: ReportItem[];
	displayFlag: boolean;
	hideParty: boolean;
	names: AnonymiseNames;
}): JSX.Element | null {
	if (!displayFlag || items.length === 0) {
		return null;
	}

	return (
		<div className={styles.report}>
			<h4 className={styles.reportHeading}>{heading}</h4>
			<ul className={styles.reportList}>
				{items.map((item, index) => (
					<li key={index} className={styles.reportItem}>
						{item.connector === 'but' ? (
							<span className={`${styles.surface} ${styles.surfaceBut}`}>
								But
							</span>
						) : item.connector === 'and' ? (
							<span className={`${styles.surface} ${styles.surfaceAnd}`}>
								And
							</span>
						) : (
							<span className={styles.surface} />
						)}
						<span>{maybeAnonymise(item.text, hideParty, names)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function FaceBody({
	face,
	card,
	display,
	hideParty,
	size,
	names
}: {
	face: CardFace;
	card: PolicyCard;
	display: CardDisplay;
	hideParty: boolean;
	size: CardSize;
	names: AnonymiseNames;
}): JSX.Element {
	const note = face.note ? maybeAnonymise(face.note, hideParty, names) : undefined;
	const outputCount = face.counts.outputs;

	if (size === 'index') {
		return (
			<div className={styles.body}>
				{note ? <p className={styles.note}>{note}</p> : null}
				<p className={styles.metaLine}>
					{outputCount > 0
						? `${outputCount} output${outputCount === 1 ? '' : 's'}`
						: 'Stated only'}
				</p>
			</div>
		);
	}

	const scenarios =
		size === 'game' ? face.scenarios.slice(0, 1) : face.scenarios;

	return (
		<div className={styles.body}>
			{note ? <p className={styles.note}>{note}</p> : null}

			{scenarios.map((scenario, index) => (
				<ScenarioBlock
					key={`${scenario.title}-${index}`}
					scenario={scenario}
					display={display}
					hideParty={hideParty}
					names={names}
				/>
			))}

			<ReportBlock
				heading='System outputs'
				items={face.report.outputs}
				displayFlag={display.output}
				hideParty={hideParty}
				names={names}
			/>
			<ReportBlock
				heading='System outcomes'
				items={face.report.outcomes}
				displayFlag={display.outcome}
				hideParty={hideParty}
				names={names}
			/>

			{display.source && size !== 'game' ? (
				<footer className={styles.source}>
					<a
						href={card.source.url}
						target='_blank'
						rel='noopener noreferrer'
						onClick={(event) => event.stopPropagation()}
					>
						{headingText(card.source.title, hideParty, names) || 'Source'}
					</a>
				</footer>
			) : null}
		</div>
	);
}

type ListCardKind = 'gaps' | 'assumptions';

type ListCardProps = {
	kind: ListCardKind;
	items: string[];
	hideParty: boolean;
	size?: 'grid' | 'inspect';
	onInspect?: () => void;
	anonymiseNames?: AnonymiseNames;
};

const LIST_CARD_TITLE: Record<ListCardKind, string> = {
	gaps: 'Gaps',
	assumptions: 'Assumptions'
};

/**
 * Companion card for gaps (under stated) or assumptions (under our reading).
 * Renders nothing when the list is empty.
 */
export function ListCard({
	kind,
	items,
	hideParty,
	size = 'grid',
	onInspect,
	anonymiseNames = NZ_ANONYMISE_NAMES
}: ListCardProps): JSX.Element | null {
	if (items.length === 0) {
		return null;
	}

	const title = LIST_CARD_TITLE[kind];
	const kindClass =
		kind === 'gaps' ? styles.listCardGaps : styles.listCardAssumptions;
	const cardClassName = [
		styles.card,
		styles.listCard,
		kindClass,
		size === 'inspect' ? styles.cardInspect : '',
		onInspect ? styles.cardInspectable : ''
	]
		.filter(Boolean)
		.join(' ');

	function onCardKeyDown(event: KeyboardEvent<HTMLElement>): void {
		if (!onInspect) {
			return;
		}
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onInspect();
		}
	}

	return (
		<article
			className={cardClassName}
			onClick={onInspect}
			onKeyDown={onCardKeyDown}
			role={onInspect ? 'button' : undefined}
			tabIndex={onInspect ? 0 : undefined}
			aria-label={onInspect ? `Inspect ${title}` : undefined}
		>
			<h3 className={styles.listCardTitle}>{title}</h3>
			<ul className={styles.listCardItems}>
				{items.map((item, index) => (
					<li key={index}>{maybeAnonymise(item, hideParty, anonymiseNames)}</li>
				))}
			</ul>
		</article>
	);
}

/** Presentational Gurki policy card; reusable by the game overlay. */
export function GurkiCard({
	card,
	display,
	face: faceProp,
	size = 'grid',
	onInspect,
	as = 'article',
	clusterLabels,
	parties = [],
	anonymiseNames = NZ_ANONYMISE_NAMES
}: GurkiCardProps): JSX.Element {
	const faceKey = faceProp ?? 'stated';
	const activeFace =
		faceKey === 'derived' && card.derived ? card.derived : card.stated;
	const hideParty = !display.party;
	const title = display.title
		? headingText(activeFace.title, hideParty, anonymiseNames)
		: '';
	const Tag = as;

	const cardClassName = [
		styles.card,
		size === 'inspect' ? styles.cardInspect : '',
		size === 'game' ? styles.cardGame : '',
		onInspect ? styles.cardInspectable : ''
	]
		.filter(Boolean)
		.join(' ');

	function onCardKeyDown(event: KeyboardEvent<HTMLElement>): void {
		if (!onInspect) {
			return;
		}
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onInspect();
		}
	}

	return (
		<Tag
			className={cardClassName}
			onClick={onInspect}
			onKeyDown={onCardKeyDown}
			role={onInspect ? 'button' : undefined}
			tabIndex={onInspect ? 0 : undefined}
			aria-label={onInspect && title ? `Inspect ${title}` : undefined}
		>
			<header className={styles.header}>
				<div className={styles.meta}>
					{display.party || size === 'game' ? (
						<PartyMark
							party={card.party}
							visible={display.party}
							parties={parties}
						/>
					) : null}
					<div className={styles.clusters}>
						{card.clusters.map((clusterId) => {
							const fill = clusterColour(clusterId);
							return (
								<span
									key={clusterId}
									className={styles.clusterChip}
									style={{
										backgroundColor: fill,
										color: chipText(fill)
									}}
								>
									{clusterLabels?.[clusterId] ?? clusterId}
								</span>
							);
						})}
					</div>
				</div>

				{display.title ? <h3 className={styles.title}>{title}</h3> : null}
			</header>

			<FaceBody
				face={activeFace}
				card={card}
				display={display}
				hideParty={hideParty}
				size={size}
				names={anonymiseNames}
			/>
		</Tag>
	);
}
