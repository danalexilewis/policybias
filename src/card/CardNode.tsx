import { useEffect, useRef, useState, type JSX } from 'react';
import { useReportCardHeight } from '../canvas/cardHeight';
import type {
	CardFace,
	CardScenario,
	CardStep,
	PolicyCard,
	ReportItem
} from '../data/types';
import type { CardDisplay } from './CardDisplay';
import {
	anonymiseText,
	PARTY_COLOURS,
	PARTY_LABELS,
	stripPartyFromTitle
} from './anonymise';
import type { CardNodeData } from '../canvas/layout';
import { clusterColour } from '../canvas/clusterColours';
import styles from './CardNode.module.css';

type GurkiCardProps = {
	card: PolicyCard;
	display: CardDisplay;
	face?: 'stated' | 'derived';
	onFaceChange?: (face: 'stated' | 'derived') => void;
	/** Canvas shows this; the game hides it and uses its own derived reveal. */
	showFaceToggle?: boolean;
};

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
	const listItems = face.kind === 'stated' ? card.gaps : card.assumptions;
	const listHeading = face.kind === 'stated' ? 'Gaps' : 'Assumptions';

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

			{display.gaps && listItems.length > 0 ? (
				<section className={styles.gapsSection}>
					<h4 className={styles.gapsHeading}>{listHeading}</h4>
					<ul className={styles.gapsList}>
						{listItems.map((item, index) => (
							<li key={index}>{maybeAnonymise(item, hideParty)}</li>
						))}
					</ul>
				</section>
			) : null}

			{display.source ? (
				<footer className={styles.source}>
					<a href={card.source.url} target='_blank' rel='noopener noreferrer'>
						{headingText(card.source.title, hideParty) || 'Source'}
					</a>
				</footer>
			) : null}
		</div>
	);
}

/** Presentational Gurki policy card; reusable by the game overlay. */
export function GurkiCard({
	card,
	display,
	face: faceProp,
	onFaceChange,
	showFaceToggle = true
}: GurkiCardProps): JSX.Element {
	const [internalFace, setInternalFace] = useState<'stated' | 'derived'>(
		'stated'
	);
	const faceKey = faceProp ?? internalFace;
	const hasDerived = Boolean(card.derived);
	const activeFace =
		faceKey === 'derived' && card.derived ? card.derived : card.stated;
	const hideParty = !display.party;

	function setFace(next: 'stated' | 'derived'): void {
		if (next === 'derived' && !card.derived) {
			return;
		}
		if (onFaceChange) {
			onFaceChange(next);
		} else {
			setInternalFace(next);
		}
	}

	const title = display.title ? headingText(activeFace.title, hideParty) : '';

	const partyColour = hideParty ? undefined : PARTY_COLOURS[card.party];

	return (
		<article className={styles.card}>
			<header className={styles.header}>
				<div className={styles.meta}>
					{display.party ? (
						<span
							className={`${styles.partyBadge} ${hideParty ? styles.partyBadgeNeutral : ''}`}
							style={partyColour ? { backgroundColor: partyColour } : undefined}
						>
							{PARTY_LABELS[card.party]}
						</span>
					) : null}
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

				{display.title ? <h3 className={styles.title}>{title}</h3> : null}

				{showFaceToggle ? (
					<div className={styles.faceToggle}>
						<button
							type='button'
							className={`${styles.faceButton} ${faceKey === 'stated' ? styles.faceButtonActive : ''}`}
							onClick={() => setFace('stated')}
						>
							Stated
						</button>
						<button
							type='button'
							className={`${styles.faceButton} ${faceKey === 'derived' ? styles.faceButtonActive : ''}`}
							onClick={() => setFace('derived')}
							disabled={!hasDerived}
						>
							Our reading
						</button>
					</div>
				) : null}

				{faceKey === 'derived' && hasDerived ? (
					<p className={styles.derivedBanner}>
						This face is our systems reading of the party page, not the
						party&apos;s own wording.
					</p>
				) : null}
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

/** React Flow custom node wrapping {@link GurkiCard}. */
export function CardNode(props: { data: CardNodeData }): JSX.Element {
	const { card, display, enriched, clusterColour: accent } = props.data;
	const [face, setFace] = useState<'stated' | 'derived'>(
		enriched && card.derived ? 'derived' : 'stated'
	);
	const rootRef = useRef<HTMLDivElement>(null);
	const reportHeight = useReportCardHeight();
	const reportHeightRef = useRef(reportHeight);
	reportHeightRef.current = reportHeight;

	useEffect(() => {
		setFace(enriched && card.derived ? 'derived' : 'stated');
	}, [enriched, card.derived]);

	useEffect(() => {
		const element = rootRef.current;
		if (!element) {
			return;
		}
		const root = element;

		function publishHeight(): void {
			const height = root.offsetHeight;
			if (height > 0) {
				reportHeightRef.current(card.id, height);
			}
		}

		const observer = new ResizeObserver(() => {
			publishHeight();
		});
		observer.observe(element);
		publishHeight();
		return () => observer.disconnect();
	}, [card.id]);

	return (
		<div ref={rootRef} className={styles.node}>
			{accent ? (
				<div
					className={styles.clusterAccent}
					style={{ backgroundColor: accent }}
					aria-hidden
				/>
			) : null}
			<GurkiCard
				card={card}
				display={display}
				face={face}
				onFaceChange={setFace}
			/>
		</div>
	);
}
