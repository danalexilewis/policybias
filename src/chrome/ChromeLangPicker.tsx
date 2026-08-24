import type { JSX } from 'react';
import type { Lang } from '../event/events';
import { withLangQuery } from '../i18n/href';
import { SITE_LANGS, translate } from '../i18n/messages';

function langUiKey(code: Lang): 'langEn' | 'langSv' | 'langMi' {
	if (code === 'sv') {
		return 'langSv';
	}
	if (code === 'mi') {
		return 'langMi';
	}
	return 'langEn';
}

type ChromeLangPickerProps = {
	path: string;
};

/** Details-based language picker for static chrome pages. */
export function ChromeLangPicker({ path }: ChromeLangPickerProps): JSX.Element {
	return (
		<details className="lang-picker">
			<summary
				className="lang-picker__trigger"
				aria-label={translate('en', 'language')}
				data-ui-aria="language"
			>
				<span className="lang-picker__full" data-lang-full="">
					{translate('en', 'langEn')}
				</span>
				<span className="lang-picker__code" data-lang-code="">
					EN
				</span>
				<span className="lang-picker__icon" aria-hidden="true">
					<CaretIcon />
				</span>
			</summary>
			<div className="lang-picker__menu" role="listbox">
				{SITE_LANGS.map((code) => (
					<a
						key={code}
						className="lang-picker__item lang-link"
						role="option"
						data-lang={code}
						href={withLangQuery(path, code, 'en')}
					>
						<span>{translate('en', langUiKey(code))}</span>
						<span className="lang-picker__check" aria-hidden="true">
							<CheckIcon />
						</span>
					</a>
				))}
			</div>
		</details>
	);
}

function CaretIcon(): JSX.Element {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path
				d="M6 9l6 6 6-6"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function CheckIcon(): JSX.Element {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path
				d="M5 12l5 5 9-10"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
