import { type JSX, type KeyboardEvent } from 'react';
import type {
	CardFace,
	CardScenario,
	CardStep,
	PartyId,
	PolicyCard,
	ReportItem
} from '../data/types';
import type { CardDisplay } from './CardDisplay';
import { anonymiseText, PARTY_LABELS, stripPartyFromTitle } from './anonymise';
import { PARTY_LOGOS } from './partyLogos';
import { clusterColour } from '../theme/clusterColours';
import styles from './CardNode.module.css';

type GurkiCardProps = {
	card: PolicyCard;
	display: CardDisplay;
	face?: 'stated' | 'derived';
	/** Larger type for the inspect overlay. */
	size?: 'grid' | 'inspect';
	/** Opens the inspect overlay. Source links stop this. */
	onInspect?: () => void;
};

/** Fixed-size mark so revealing the party does not change the card header. */
function PartyMark(props: { party: PartyId; visible: boolean }): JSX.Element {
	return (
		<div className={styles.logoSlot}>
			{props.visible ? (
				<img
					className={styles.partyLogo}
					src={PARTY_LOGOS[props.party]}
					alt={PARTY_LABELS[props.party]}
				/>
			) : (
				<span className={styles.logoPlaceholder} aria-hidden='true' />
			)}
		</div>
	);
}

function headingText(text: string, hideParty: boolean): string {
	const stripped = stripPartyFromTitle(text);
	return hideParty ? anonymiseText(stripped) : stripped;
}

function maybeAnonymise(text: string, hideParty: boolean): string {
	return hideParty ? anonymiseText(text) : text;
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
	hideParty
}: {
	step: CardStep;
	hideParty: boolean;
}): JSX.Element {
	const text = maybeAnonymise(step.text, hideParty);
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
	hideParty
}: {
	scenario: CardScenario;
	display: CardDisplay;
	hideParty: boolean;
}): JSX.Element {
	const visibleSteps = scenario.steps.filter((step) =>
		stepVisible(step, display)
	);
	if (visibleSteps.length === 0) {
		return <></>;
	}

	const title = headingText(scenario.title, hideParty);

	return (
		<section className={styles.scenario}>
			<h4 className={styles.scenarioTitle}>{title}</h4>
			{visibleSteps.map((step, index) => (
				<StepLine
					key={`${step.kind}-${index}`}
					step={step}
					hideParty={hideParty}
				/>
			))}
		</section>
	);
}

function ReportBlock({
	heading,
	items,
	displayFlag,
	hideParty
}: {
	heading: string;
	items: ReportItem[];
	displayFlag: boolean;
	hideParty: boolean;
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
						<span>{maybeAnonymise(item.text, hideParty)}</span>
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
	hideParty
}: {
	face: CardFace;
	card: PolicyCard;
	display: CardDisplay;
	hideParty: boolean;
}): JSX.Element {
	const note = face.note ? maybeAnonymise(face.note, hideParty) : undefined;

	return (
		<div className={styles.body}>
			{note ? <p className={styles.note}>{note}</p> : null}

			{face.scenarios.map((scenario, index) => (
				<ScenarioBlock
					key={`${scenario.title}-${index}`}
					scenario={scenario}
					display={display}
					hideParty={hideParty}
				/>
			))}

			<ReportBlock
				heading='System outputs'
				items={face.report.outputs}
				displayFlag={display.output}
				hideParty={hideParty}
			/>
			<ReportBlock
				heading='System outcomes'
				items={face.report.outcomes}
				displayFlag={display.outcome}
				hideParty={hideParty}
			/>

			{display.source ? (
				<footer className={styles.source}>
					<a
						href={card.source.url}
						target='_blank'
						rel='noopener noreferrer'
						onClick={(event) => event.stopPropagation()}
					>
						{headingText(card.source.title, hideParty) || 'Source'}
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
	borderColour?: string;
	size?: 'grid' | 'inspect';
	onInspect?: () => void;
};

const LIST_CARD_TITLE: Record<ListCardKind, string> = {
	gaps: 'Gaps',
	assumptions: 'Assumptions'
};

/**
 * Companion card for gaps or assumptions, stacked under the stated face.
 * Renders nothing when the list is empty.
 */
export function ListCard({
	kind,
	items,
	hideParty,
	borderColour,
	size = 'grid',
	onInspect
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
			style={borderColour ? { borderColor: borderColour } : undefined}
			onClick={onInspect}
			onKeyDown={onCardKeyDown}
			role={onInspect ? 'button' : undefined}
			tabIndex={onInspect ? 0 : undefined}
			aria-label={onInspect ? `Inspect ${title}` : undefined}
		>
			<h3 className={styles.listCardTitle}>{title}</h3>
			<ul className={styles.listCardItems}>
				{items.map((item, index) => (
					<li key={index}>{maybeAnonymise(item, hideParty)}</li>
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
	onInspect
}: GurkiCardProps): JSX.Element {
	const faceKey = faceProp ?? 'stated';
	const activeFace =
		faceKey === 'derived' && card.derived ? card.derived : card.stated;
	const hideParty = !display.party;
	const primaryCluster = card.clusters[0];
	const borderColour = primaryCluster
		? clusterColour(primaryCluster)
		: undefined;
	const title = display.title ? headingText(activeFace.title, hideParty) : '';

	const cardClassName = [
		styles.card,
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
			style={borderColour ? { borderColor: borderColour } : undefined}
			onClick={onInspect}
			onKeyDown={onCardKeyDown}
			role={onInspect ? 'button' : undefined}
			tabIndex={onInspect ? 0 : undefined}
			aria-label={onInspect && title ? `Inspect ${title}` : undefined}
		>
			<header className={styles.header}>
				<div className={styles.meta}>
					<PartyMark party={card.party} visible={display.party} />
					<div className={styles.clusters}>
						{card.clusters.map((clusterId) => (
							<span
								key={clusterId}
								className={styles.clusterChip}
								style={{
									backgroundColor: `${clusterColour(clusterId)}24`,
									boxShadow: `inset 0 0 0 1px ${clusterColour(clusterId)}73`
								}}
							>
								{clusterId}
							</span>
						))}
					</div>
				</div>

				{display.title ? <h3 className={styles.title}>{title}</h3> : null}
			</header>

			<FaceBody
				face={activeFace}
				card={card}
				display={display}
				hideParty={hideParty}
			/>
		</article>
	);
}
