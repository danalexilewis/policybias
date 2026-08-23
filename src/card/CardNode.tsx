import { type JSX, type KeyboardEvent } from 'react';
import type {
	CardFace,
	CardScenario,
	CardStep,
	PartyId,
	PartyMeta,
	PolicyCard,
	ReportItem
} from '../data/types';
import type { CardDisplay } from './CardDisplay';
import { anonymiseText, PARTY_LABELS, stripPartyFromTitle } from './anonymise';
import { PARTY_LOGOS, partyLogoSrc } from './partyLogos';
import type { TranslateVars, UiKey } from '../i18n/messages';
import { useLang } from '../i18n/useLang';
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
};

/** Fixed-size mark so revealing the party does not change the card header. */
function PartyMark(props: {
	party: PartyId;
	visible: boolean;
	parties: PartyMeta[];
}): JSX.Element {
	const src =
		partyLogoSrc(props.parties, props.party) || PARTY_LOGOS[props.party];
	const alt = PARTY_LABELS[props.party] ?? props.party;
	return (
		<div className={styles.logoSlot}>
			{props.visible && src ? (
				<img className={styles.partyLogo} src={src} alt={alt} />
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
	hideParty,
	size,
	t
}: {
	face: CardFace;
	card: PolicyCard;
	display: CardDisplay;
	hideParty: boolean;
	size: CardSize;
	t: (key: UiKey, vars?: TranslateVars) => string;
}): JSX.Element {
	const note = face.note ? maybeAnonymise(face.note, hideParty) : undefined;
	const outputCount = face.counts.outputs;

	if (size === 'index') {
		return (
			<div className={styles.body}>
				{note ? <p className={styles.note}>{note}</p> : null}
				<p className={styles.metaLine}>
					{outputCount > 0
						? t('outputsMeta', { n: outputCount })
						: t('statedOnlyMeta')}
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
				/>
			))}

			<ReportBlock
				heading={t('systemOutputs')}
				items={face.report.outputs}
				displayFlag={display.output}
				hideParty={hideParty}
			/>
			<ReportBlock
				heading={t('systemOutcomes')}
				items={face.report.outcomes}
				displayFlag={display.outcome}
				hideParty={hideParty}
			/>

			{card.translated && size !== 'game' ? (
				<p className={styles.translated}>{t('translatedBadge')}</p>
			) : null}

			{display.source && size !== 'game' ? (
				<footer className={styles.source}>
					<a
						href={card.source.url}
						target='_blank'
						rel='noopener noreferrer'
						onClick={(event) => event.stopPropagation()}
					>
						{t('source')}
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
	onInspect
}: ListCardProps): JSX.Element | null {
	const { t } = useLang();
	if (items.length === 0) {
		return null;
	}

	const title = kind === 'gaps' ? t('gaps') : t('assumptions');
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
			aria-label={onInspect ? t('inspectNamed', { title }) : undefined}
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
	onInspect,
	as = 'article',
	clusterLabels,
	parties = []
}: GurkiCardProps): JSX.Element {
	const { t } = useLang();
	const faceKey = faceProp ?? 'stated';
	const activeFace =
		faceKey === 'derived' && card.derived ? card.derived : card.stated;
	const hideParty = !display.party;
	const title = display.title ? headingText(activeFace.title, hideParty) : '';
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
			aria-label={onInspect && title ? t('inspectNamed', { title }) : undefined}
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
				t={t}
			/>
		</Tag>
	);
}
