// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { GameCensus } from './GameCensus';
import { emptyBackground } from './scoreRecord';

afterEach(cleanup);

describe('GameCensus', () => {
	it('skip returns empty background', () => {
		const onContinue = vi.fn();
		render(<GameCensus onContinue={onContinue} />);

		fireEvent.click(screen.getByRole('button', { name: 'Skip' }));

		expect(onContinue).toHaveBeenCalledWith(emptyBackground());
	});

	it('see my score returns the answers that were picked', () => {
		const onContinue = vi.fn();
		render(<GameCensus onContinue={onContinue} />);

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
		render(<GameCensus onContinue={onContinue} />);

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
});
