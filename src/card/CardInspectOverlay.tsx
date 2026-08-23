import { useEffect, useRef, type JSX } from 'react';
import { AppWindow } from '../chrome/AppWindow';
import type { AnonymiseNames, PartyMeta, PolicyCard } from '../data/types';
import type { CardDisplay } from './CardDisplay';
import { useLang } from '../i18n/useLang';
import { GurkiCard, ListCard } from './CardNode';
import styles from './CardInspectOverlay.module.css';

type CardInspectOverlayProps = {
	card: PolicyCard;
	display: CardDisplay;
	onClose: () => void;
	onToggleParty: () => void;
	/** Visible wall order. Left/right step through this list. */
	cards?: PolicyCard[];
	parties?: PartyMeta[];
	anonymiseNames?: AnonymiseNames;
	/** Moves inspect to a neighbour. Updates the URL via the parent. */
	onSelect: (card: PolicyCard) => void;
};

function isTypingTarget(target: EventTarget | null): boolean {
	if (!(target instanceof HTMLElement)) {
		return false;
	}
	if (target.isContentEditable) {
		return true;
	}
	const tag = target.tagName;
	return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

/** Next card in wall order, wrapping. Missing current jumps to the end in that direction. */
export function neighbourCard(
	cards: PolicyCard[],
	currentId: string,
	direction: -1 | 1
): PolicyCard | undefined {
	if (cards.length === 0) {
		return undefined;
	}
	const index = cards.findIndex((entry) => entry.id === currentId);
	const from = index === -1 ? (direction === 1 ? -1 : 0) : index;
	return cards[(from + direction + cards.length) % cards.length];
}

function selectNeighbour(
	cards: PolicyCard[],
	currentId: string,
	direction: -1 | 1,
	onSelect: (card: PolicyCard) => void
): void {
	const next = neighbourCard(cards, currentId, direction);
	if (next && next.id !== currentId) {
		onSelect(next);
	}
}

function Chevron(props: { direction: 'left' | 'right' }): JSX.Element {
	const d = props.direction === 'left' ? 'M14 6l-6 6 6 6' : 'M10 6l6 6-6 6';
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path
				d={d}
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

/** Stated face and our reading side by side over the grid. */
export function CardInspectOverlay({
	card,
	display,
	onClose,
	onToggleParty,
	cards = [],
	parties = [],
	onSelect,
}: CardInspectOverlayProps): JSX.Element {
	const overlayRef = useRef<HTMLDivElement>(null);
	const { t } = useLang();
	const canCycle = cards.length > 1;

	useEffect(() => {
		const overlay = overlayRef.current;
		if (overlay) {
			overlay.scrollTop = 0;
		}
	}, [card.id]);

	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		function onKeyDown(event: KeyboardEvent): void {
			if (event.key === 'Escape') {
				onClose();
				return;
			}
			if (
				!canCycle ||
				event.metaKey ||
				event.ctrlKey ||
				event.altKey ||
				isTypingTarget(event.target)
			) {
				return;
			}
			if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
				event.preventDefault();
				selectNeighbour(cards, card.id, event.key === 'ArrowLeft' ? -1 : 1, onSelect);
			}
		}

		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [onClose, canCycle, cards, card.id, onSelect]);

	const hideParty = !display.party;

	function step(direction: -1 | 1): void {
		selectNeighbour(cards, card.id, direction, onSelect);
	}

	return (
		<div ref={overlayRef} className={styles.overlay} role="presentation" onClick={onClose}>
			<div className={styles.chrome} onClick={(event) => event.stopPropagation()}>
				<button
					type="button"
					className={styles.partySwitch}
					role="switch"
					aria-checked={display.party}
					aria-label={t('party')}
					onClick={onToggleParty}
				>
					{t('party')}
					<span
						className={`${styles.partyTrack} ${display.party ? styles.partyTrackOn : ''}`}
						aria-hidden
					>
						<span className={styles.partyThumb} />
					</span>
				</button>
				<div className={styles.nav}>
					{canCycle ? (
						<>
							<button
								type="button"
								className={styles.iconButton}
								onClick={() => step(-1)}
								aria-label={t('previousPolicy')}
							>
								<Chevron direction="left" />
							</button>
							<button
								type="button"
								className={styles.iconButton}
								onClick={() => step(1)}
								aria-label={t('nextPolicy')}
							>
								<Chevron direction="right" />
							</button>
						</>
					) : null}
					<button
						type="button"
						className={styles.iconButton}
						onClick={onClose}
						aria-label={t('closePolicy')}
						autoFocus
					>
						<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M6 6l12 12M18 6L6 18"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				className={styles.panel}
				role="dialog"
				aria-modal="true"
				aria-label={card.title}
				onClick={(event) => event.stopPropagation()}
			>
				<AppWindow title={t('stated')}>
					<div className={styles.column}>
						<GurkiCard
							card={card}
							display={display}
							face="stated"
							size="inspect"
							parties={parties}
						/>
						{display.gaps ? (
							<ListCard kind="gaps" items={card.gaps} hideParty={hideParty} size="inspect" />
						) : null}
					</div>
				</AppWindow>
				<AppWindow title={t('ourUnderstanding')}>
					<div className={styles.column}>
						{card.derived ? (
							<GurkiCard card={card} display={display} face="derived" size="inspect" />
						) : (
							<p className={styles.empty}>
								Nothing to add. The policy already says everything we would.
							</p>
						)}
						{display.gaps ? (
							<ListCard
								kind="assumptions"
								items={card.assumptions}
								hideParty={hideParty}
								size="inspect"
							/>
						) : null}
					</div>
				</AppWindow>
			</div>
		</div>
	);
}
