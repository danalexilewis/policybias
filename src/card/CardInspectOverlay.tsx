import { useEffect, type JSX } from 'react';
import { AppWindow } from '../chrome/AppWindow';
import type { PolicyCard } from '../data/types';
import type { CardDisplay } from './CardDisplay';
import { GurkiCard, ListCard } from './CardNode';
import styles from './CardInspectOverlay.module.css';

type CardInspectOverlayProps = {
	card: PolicyCard;
	display: CardDisplay;
	onClose: () => void;
	onToggleParty: () => void;
};

/** Stated face and our reading side by side over the grid. */
export function CardInspectOverlay({
	card,
	display,
	onClose,
	onToggleParty
}: CardInspectOverlayProps): JSX.Element {
	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		function onKeyDown(event: KeyboardEvent): void {
			if (event.key === 'Escape') {
				onClose();
			}
		}

		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [onClose]);

	const hideParty = !display.party;

	return (
		<div className={styles.overlay} role='presentation' onClick={onClose}>
			<div
				className={styles.chrome}
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type='button'
					className={styles.partySwitch}
					role='switch'
					aria-checked={display.party}
					aria-label='Party'
					onClick={onToggleParty}
				>
					Party
					<span
						className={`${styles.partyTrack} ${display.party ? styles.partyTrackOn : ''}`}
						aria-hidden
					>
						<span className={styles.partyThumb} />
					</span>
				</button>
				<button
					type='button'
					className={styles.close}
					onClick={onClose}
					aria-label='Close policy'
					autoFocus
				>
					<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
						<path
							d='M6 6l12 12M18 6L6 18'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>
			</div>
			<div
				className={styles.panel}
				role='dialog'
				aria-modal='true'
				aria-label={card.title}
				onClick={(event) => event.stopPropagation()}
			>
				<AppWindow title='Stated'>
					<div className={styles.column}>
						<GurkiCard
							card={card}
							display={display}
							face='stated'
							size='inspect'
						/>
						{display.gaps ? (
							<ListCard
								kind='gaps'
								items={card.gaps}
								hideParty={hideParty}
								size='inspect'
							/>
						) : null}
					</div>
				</AppWindow>
				<AppWindow title='Our understanding'>
					<div className={styles.column}>
						{card.derived ? (
							<GurkiCard
								card={card}
								display={display}
								face='derived'
								size='inspect'
							/>
						) : (
							<p className={styles.empty}>
								Nothing to add. The policy already says everything we would.
							</p>
						)}
						{display.gaps ? (
							<ListCard
								kind='assumptions'
								items={card.assumptions}
								hideParty={hideParty}
								size='inspect'
							/>
						) : null}
					</div>
				</AppWindow>
			</div>
		</div>
	);
}
