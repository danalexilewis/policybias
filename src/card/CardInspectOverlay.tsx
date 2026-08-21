import { useEffect, type JSX } from 'react';
import type { PolicyCard } from '../data/types';
import { clusterColour } from '../theme/clusterColours';
import type { CardDisplay } from './CardDisplay';
import { GurkiCard, ListCard } from './CardNode';
import styles from './CardInspectOverlay.module.css';

type CardInspectOverlayProps = {
	card: PolicyCard;
	display: CardDisplay;
	onClose: () => void;
};

function cardBorderColour(card: PolicyCard): string | undefined {
	const primaryCluster = card.clusters[0];
	return primaryCluster ? clusterColour(primaryCluster) : undefined;
}

/** Stated face and our reading side by side over the grid. */
export function CardInspectOverlay({
	card,
	display,
	onClose
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

	const borderColour = cardBorderColour(card);
	const hideParty = !display.party;

	return (
		<div className={styles.overlay} role='presentation' onClick={onClose}>
			<button
				type='button'
				className={styles.close}
				onClick={(event) => {
					event.stopPropagation();
					onClose();
				}}
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
			<div
				className={styles.panel}
				role='dialog'
				aria-modal='true'
				aria-label={card.title}
				onClick={(event) => event.stopPropagation()}
			>
				<div className={styles.column}>
					<p className={styles.kicker}>Stated</p>
					<GurkiCard
						card={card}
						display={display}
						face='stated'
						size='inspect'
					/>
					{display.gaps ? (
						<>
							<ListCard
								kind='gaps'
								items={card.gaps}
								hideParty={hideParty}
								borderColour={borderColour}
								size='inspect'
							/>
							<ListCard
								kind='assumptions'
								items={card.assumptions}
								hideParty={hideParty}
								borderColour={borderColour}
								size='inspect'
							/>
						</>
					) : null}
				</div>
				<div className={styles.column}>
					<p className={styles.kicker}>Our understanding</p>
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
				</div>
			</div>
		</div>
	);
}
