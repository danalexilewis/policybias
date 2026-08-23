import type { JSX } from 'react';

type AnonymiseSwitchProps = {
	checked: boolean;
	onToggle: () => void;
	label: string;
	showLabel?: boolean;
};

/** Header and filter-bar anonymise control. */
export function AnonymiseSwitch({
	checked,
	onToggle,
	label,
	showLabel = false,
}: AnonymiseSwitchProps): JSX.Element {
	return (
		<button
			type="button"
			className={`app-switch${showLabel ? ' app-switch--labelled' : ''}`}
			role="switch"
			aria-checked={checked}
			aria-label={showLabel ? undefined : label}
			onClick={onToggle}
		>
			{showLabel ? <span className="app-switch__label">{label}</span> : null}
			<span className={`app-switch__track${checked ? ' app-switch__track--on' : ''}`} aria-hidden>
				<span className="app-switch__thumb" />
			</span>
		</button>
	);
}
