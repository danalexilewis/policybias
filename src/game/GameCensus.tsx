import { useState, type JSX, type ReactNode } from 'react';
import type { PartyMeta } from '../data/types';
import { eventPartyIds, eventPartyLabel } from '../event/eventConfig';
import { useLang } from '../i18n/useLang';
import { useOnlineStatus } from '../offline/useOnlineStatus';
import {
	ageRangeOptions,
	ethnicityOptions,
	intendedVoteExtraOptions
} from './censusOptions';
import {
	FELT_WEALTH_MAX,
	FELT_WEALTH_MIN,
	emptyBackground,
	type BackgroundAnswers,
	type Ethnicity,
	type FeltWealth
} from './scoreRecord';

type GameCensusProps = {
	onContinue: (answers: BackgroundAnswers) => void;
	parties?: PartyMeta[];
};

export function GameCensus(props: GameCensusProps): JSX.Element {
	const { lang, eventId, t } = useLang();
	const online = useOnlineStatus();
	const voteParties =
		props.parties && props.parties.length > 0
			? props.parties.map((party) => party.id)
			: eventPartyIds(eventId);
	const [answers, setAnswers] = useState(() => emptyBackground());
	const [submitted, setSubmitted] = useState(false);

	function finish(next: BackgroundAnswers): void {
		if (submitted) {
			return;
		}
		setSubmitted(true);
		props.onContinue(next);
	}

	function setFeltWealth(value: number): void {
		const feltWealth = feltWealthFromNumber(value);
		if (feltWealth === null) {
			return;
		}
		setAnswers((current) => ({ ...current, feltWealth }));
	}

	return (
		<div className='game-census'>
			<p className='game-census__lede'>
				{online ? t('censusLede') : t('offlineCensus')}
			</p>

			<form
				className='game-census__form'
				onSubmit={(event) => {
					event.preventDefault();
					finish(answers);
				}}
			>
				<fieldset disabled={!online}>
					<legend>{t('ageRange')}</legend>
					<div className='game-census__chips'>
						{ageRangeOptions(eventId, lang).map((option) => (
							<Chip
								key={option.id}
								name='age-range'
								type='radio'
								value={option.id}
								checked={answers.ageRange === option.id}
								onChange={() =>
									setAnswers((current) => ({
										...current,
										ageRange: option.id
									}))
								}
							>
								{option.label}
							</Chip>
						))}
					</div>
				</fieldset>

				<fieldset disabled={!online}>
					<legend>{t('ethnicity')}</legend>
					<p className='game-census__hint'>{t('selectAll')}</p>
					<div className='game-census__chips'>
						{ethnicityOptions(eventId, lang).map((option) => {
							const checked = answers.ethnicities.includes(option.id);
							return (
								<Chip
									key={option.id}
									name='ethnicity'
									type='checkbox'
									value={option.id}
									checked={checked}
									onChange={() =>
										setAnswers((current) => ({
											...current,
											ethnicities: toggleEthnicity(
												current.ethnicities,
												option.id
											)
										}))
									}
								>
									{option.label}
								</Chip>
							);
						})}
					</div>
				</fieldset>

				<fieldset disabled={!online}>
					<legend>{t('intendedVote')}</legend>
					<div className='game-census__chips'>
						{voteParties.map((party) => (
							<Chip
								key={party}
								name='intended-vote'
								type='radio'
								value={party}
								checked={answers.intendedVote === party}
								onChange={() =>
									setAnswers((current) => ({
										...current,
										intendedVote: party
									}))
								}
							>
								{props.parties?.find((item) => item.id === party)?.label ??
									eventPartyLabel(eventId, party, lang)}
							</Chip>
						))}
						{intendedVoteExtraOptions(lang).map((option) => (
							<Chip
								key={option.id}
								name='intended-vote'
								type='radio'
								value={option.id}
								checked={answers.intendedVote === option.id}
								onChange={() =>
									setAnswers((current) => ({
										...current,
										intendedVote: option.id
									}))
								}
							>
								{option.label}
							</Chip>
						))}
					</div>
				</fieldset>

				<fieldset disabled={!online}>
					<legend id='felt-wealth-legend'>{t('feltWealthLegend')}</legend>
					<p className='game-census__hint'>{t('feltWealthHint')}</p>
					<div
						className={
							answers.feltWealth === null
								? 'game-census__slider game-census__slider--unanswered'
								: 'game-census__slider'
						}
					>
						<span aria-hidden='true'>{FELT_WEALTH_MIN}</span>
						<input
							type='range'
							min={FELT_WEALTH_MIN}
							max={FELT_WEALTH_MAX}
							step={1}
							aria-labelledby='felt-wealth-legend'
							aria-valuetext={
								answers.feltWealth === null
									? t('notAnswered')
									: String(answers.feltWealth)
							}
							value={answers.feltWealth ?? 5}
							onPointerDown={() => {
								if (answers.feltWealth === null) {
									setFeltWealth(5);
								}
							}}
							onChange={(event) => setFeltWealth(Number(event.target.value))}
						/>
						<span aria-hidden='true'>{FELT_WEALTH_MAX}</span>
					</div>
					<p className='game-census__slider-value'>
						{answers.feltWealth === null
							? t('notAnswered')
							: answers.feltWealth}
					</p>
				</fieldset>

				<div className='game-census__actions'>
					<button
						type='button'
						className='game-text-button'
						onClick={() => finish(emptyBackground())}
					>
						{t('skipQuestions')}
					</button>
					<button type='submit' className='game-next'>
						{t('seeMyScore')}
					</button>
				</div>
			</form>
		</div>
	);
}

function Chip(props: {
	name: string;
	type: 'radio' | 'checkbox';
	value: string;
	checked: boolean;
	onChange: () => void;
	children: ReactNode;
}): JSX.Element {
	return (
		<label className='game-census__chip'>
			<input
				type={props.type}
				name={props.name}
				value={props.value}
				checked={props.checked}
				onChange={props.onChange}
			/>
			<span>{props.children}</span>
		</label>
	);
}

function toggleEthnicity(current: Ethnicity[], id: Ethnicity): Ethnicity[] {
	if (current.includes(id)) {
		return current.filter((item) => item !== id);
	}
	return [...current, id];
}

function feltWealthFromNumber(value: number): FeltWealth | null {
	if (
		!Number.isInteger(value) ||
		value < FELT_WEALTH_MIN ||
		value > FELT_WEALTH_MAX
	) {
		return null;
	}
	return value as FeltWealth;
}
