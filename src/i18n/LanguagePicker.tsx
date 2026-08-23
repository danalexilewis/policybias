import * as Select from '@radix-ui/react-select';
import type { JSX } from 'react';
import type { Lang } from '../event/events';
import { langLabel } from './messages';
import { useLang } from './useLang';
import styles from './LanguagePicker.module.css';

/** Language switcher. Hidden when the event only has one language. */
export function LanguagePicker(): JSX.Element | null {
	const { lang, setLang, available, t } = useLang();

	if (available.length < 2) {
		return null;
	}

	function onValueChange(value: string): void {
		setLang(value as Lang);
	}

	return (
		<div className={`app-lang ${styles.root}`}>
			<Select.Root value={lang} onValueChange={onValueChange}>
				<Select.Trigger className={styles.trigger} aria-label={t('language')}>
					<Select.Value>
						<span className={styles.langFull}>{langLabel(lang)}</span>
						<span className={styles.langCode}>{lang.toUpperCase()}</span>
					</Select.Value>
					<Select.Icon className={styles.icon} aria-hidden>
						<CaretIcon />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content
						className={styles.content}
						position='popper'
						side='bottom'
						align='end'
						sideOffset={6}
						collisionPadding={8}
					>
						<Select.Viewport>
							{available.map((code) => (
								<Select.Item key={code} value={code} className={styles.item}>
									<Select.ItemText>{langLabel(code)}</Select.ItemText>
									<Select.ItemIndicator className={styles.indicator}>
										<CheckIcon />
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.Viewport>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	);
}

function CaretIcon(): JSX.Element {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
			<path
				d='M6 9l6 6 6-6'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

function CheckIcon(): JSX.Element {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
			<path
				d='M5 12l5 5 9-10'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
