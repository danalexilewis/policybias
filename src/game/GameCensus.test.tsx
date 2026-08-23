// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { GameCensus } from './GameCensus';
import { emptyBackground } from './scoreRecord';

afterEach(() => {
	cleanup();
	vi.unstubAllGlobals();
	window.history.replaceState({}, '', '/');
});

describe('GameCensus', () => {
	it('skip returns empty background', () => {
		const onContinue = vi.fn();
		render(
			<NuqsAdapter>
				<GameCensus onContinue={onContinue} />
			</NuqsAdapter>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		expect(onContinue).toHaveBeenCalledWith(emptyBackground());
	});

	it('see my score returns the answers that were picked', () => {
		const onContinue = vi.fn();
		render(
			<NuqsAdapter>
				<GameCensus onContinue={onContinue} />
			</NuqsAdapter>
		);

		fireEvent.click(screen.getByRole('radio', { name: '25–34' }));
		fireEvent.click(screen.getByRole('checkbox', { name: 'Māori' }));
		fireEvent.click(screen.getByRole('radio', { name: 'Green' }));
		fireEvent.click(screen.getByRole('button', { name: 'See my score' }));

		expect(onContinue).toHaveBeenCalledWith({
			ageRange: '25-34',
			ethnicities: ['maori'],
			intendedVote: 'green',
			feltWealth: null
		});
	});

	it('see my score includes felt wealth after the slider is moved', () => {
		const onContinue = vi.fn();
		render(
			<NuqsAdapter>
				<GameCensus onContinue={onContinue} />
			</NuqsAdapter>
		);

		fireEvent.change(
			screen.getByRole('slider', {
				name: 'How wealthy do you feel you are?'
			}),
			{ target: { value: '7' } }
		);
		fireEvent.click(screen.getByRole('button', { name: 'See my score' }));

		expect(onContinue).toHaveBeenCalledWith({
			ageRange: null,
			ethnicities: [],
			intendedVote: null,
			feltWealth: 7
		});
	});

	it('disables the questions when offline and still lets you see your score', () => {
		vi.stubGlobal('navigator', { ...navigator, onLine: false });
		const onContinue = vi.fn();
		render(
			<NuqsAdapter>
				<GameCensus onContinue={onContinue} />
			</NuqsAdapter>
		);

		expect(
			screen.getByText(
				"You're offline. These questions go into the public dataset, which needs a network."
			)
		).toBeTruthy();
		expect(
			(screen.getByRole('group', { name: 'Age range' }) as HTMLFieldSetElement)
				.disabled
		).toBe(true);

		fireEvent.click(screen.getByRole('button', { name: 'See my score' }));
		expect(onContinue).toHaveBeenCalledWith(emptyBackground());
	});

	it('asks Swedish ethnicity and parties on the Swedish event', () => {
		window.history.replaceState({}, '', '/se-election-2026/questions');
		const onContinue = vi.fn();
		render(
			<NuqsAdapter>
				<GameCensus onContinue={onContinue} />
			</NuqsAdapter>
		);

		expect(screen.queryByRole('checkbox', { name: 'Māori' })).toBeNull();
		expect(screen.queryByRole('radio', { name: 'Labour' })).toBeNull();
		expect(screen.getByRole('checkbox', { name: 'Svensk' })).toBeTruthy();
		expect(
			screen.getByRole('radio', { name: 'Socialdemokraterna' })
		).toBeTruthy();
		fireEvent.click(screen.getByRole('radio', { name: '20–29' }));
		fireEvent.click(screen.getByRole('checkbox', { name: 'Svensk' }));
		fireEvent.click(screen.getByRole('button', { name: 'Visa min poäng' }));

		expect(onContinue).toHaveBeenCalledWith({
			ageRange: '20-29',
			ethnicities: ['swedish'],
			intendedVote: null,
			feltWealth: null
		});
	});
});
