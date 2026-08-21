import { useState, type JSX } from 'react';
import { PARTY_LABELS } from '../card/anonymise';
import { ALL_PARTIES } from './dealRound';
import {
	AGE_RANGE_OPTIONS,
	ETHNICITY_OPTIONS,
	INTENDED_VOTE_EXTRA_OPTIONS,
	emptyBackground,
	type BackgroundAnswers,
	type Ethnicity
} from './scoreRecord';

type GameCensusProps = {
	onContinue: (answers: BackgroundAnswers) => void;
};

export function GameCensus(props: GameCensusProps): JSX.Element {
	const [answers, setAnswers] = useState(() => emptyBackground());
	const [submitted, setSubmitted] = useState(false);

	function finish(next: BackgroundAnswers): void {
		if (submitted) {
			return;
		}
		setSubmitted(true);
		props.onContinue(next);
	}

	return (
		<div className='game-census'>
			<header className='game-heading'>
				<p className='game-heading__kicker'>Before your score</p>
				<h2 className='game-census__title'>Three optional questions</h2>
			</header>

			<p className='game-census__lede'>
				Your score goes into a public dataset. There are no accounts, and we do
				not store a name, cookie, or IP address. Age, ethnicity, and who you
				plan to vote for are optional.
			</p>

			<form
				className='game-census__form'
				onSubmit={(event) => {
					event.preventDefault();
					finish(answers);
				}}
			>
				<fieldset>
					<legend>Age range</legend>
					<div className='game-census__options game-census__options--wrap'>
						{AGE_RANGE_OPTIONS.map((option) => (
							<label key={option.id}>
								<input
									type='radio'
									name='age-range'
									value={option.id}
									checked={answers.ageRange === option.id}
									onChange={() =>
										setAnswers((current) => ({
											...current,
											ageRange: option.id
										}))
									}
								/>
								{option.label}
							</label>
						))}
					</div>
				</fieldset>

				<fieldset>
					<legend>Ethnicity</legend>
					<p className='game-census__hint'>Select all that apply.</p>
					<div className='game-census__options'>
						{ETHNICITY_OPTIONS.map((option) => {
							const checked = answers.ethnicities.includes(option.id);
							return (
								<label key={option.id}>
									<input
										type='checkbox'
										name='ethnicity'
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
									/>
									{option.label}
								</label>
							);
						})}
					</div>
				</fieldset>

				<fieldset>
					<legend>Party you plan to vote for</legend>
					<div className='game-census__options game-census__options--wrap'>
						{ALL_PARTIES.map((party) => (
							<label key={party}>
								<input
									type='radio'
									name='intended-vote'
									value={party}
									checked={answers.intendedVote === party}
									onChange={() =>
										setAnswers((current) => ({
											...current,
											intendedVote: party
										}))
									}
								/>
								{PARTY_LABELS[party]}
							</label>
						))}
						{INTENDED_VOTE_EXTRA_OPTIONS.map((option) => (
							<label key={option.id}>
								<input
									type='radio'
									name='intended-vote'
									value={option.id}
									checked={answers.intendedVote === option.id}
									onChange={() =>
										setAnswers((current) => ({
											...current,
											intendedVote: option.id
										}))
									}
								/>
								{option.label}
							</label>
						))}
					</div>
				</fieldset>

				<div className='game-census__actions'>
					<button
						type='button'
						className='game-text-button'
						onClick={() => finish(emptyBackground())}
					>
						Skip
					</button>
					<button type='submit' className='game-next'>
						See my score
					</button>
				</div>
			</form>
		</div>
	);
}

function toggleEthnicity(current: Ethnicity[], id: Ethnicity): Ethnicity[] {
	if (current.includes(id)) {
		return current.filter((item) => item !== id);
	}
	return [...current, id];
}
