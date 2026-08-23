import type { JSX, ReactNode } from 'react';
import { useLang } from '../i18n/useLang';
import styles from './AppWindow.module.css';

type AppWindowProps = {
	title: ReactNode;
	children: ReactNode;
	onClose?: () => void;
	closeLabel?: string;
	trailing?: ReactNode;
	fill?: boolean;
	/** Edge-to-edge: no frame, border, or shadow. */
	bare?: boolean;
	/** Brand | centre | close, for compact headers. */
	split?: boolean;
	className?: string;
	/** Focus the close box when the window opens. */
	focusClose?: boolean;
};

/** Paper window with a title bar and optional close box. */
export function AppWindow(props: AppWindowProps): JSX.Element {
	const { t } = useLang();
	const className = [
		styles.window,
		props.fill ? styles.fill : '',
		props.bare ? styles.bare : '',
		props.className ?? ''
	]
		.filter(Boolean)
		.join(' ');

	const titleBarClass = [styles.titleBar, props.split ? styles.split : '']
		.filter(Boolean)
		.join(' ');

	return (
		<div className={className}>
			<div className={titleBarClass}>
				<div className={styles.title}>{props.title}</div>
				{props.trailing ? (
					<div className={styles.trailing}>{props.trailing}</div>
				) : null}
				{props.onClose ? (
					<button
						type='button'
						className={styles.close}
						onClick={props.onClose}
						aria-label={props.closeLabel ?? t('close')}
						autoFocus={props.focusClose}
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
				) : null}
			</div>
			<div className={styles.body}>{props.children}</div>
		</div>
	);
}
