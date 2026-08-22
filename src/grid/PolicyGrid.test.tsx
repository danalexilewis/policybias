// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ALL_VISIBLE } from '../card/CardDisplay';
import type {
	CardFace,
	ClusterMeta,
	PartyMeta,
	PolicyCard
} from '../data/types';
import { PolicyGrid } from './PolicyGrid';

const clusters: ClusterMeta[] = [
	{ id: 'health-access', label: 'Health', description: '' },
	{ id: 'tax-fiscal', label: 'Tax', description: '' }
];

const parties: PartyMeta[] = [
	{
		id: 'labour',
		label: 'Labour',
		name: 'New Zealand Labour Party',
		colour: '#d82c20',
		cardCount: 2
	},
	{
		id: 'act',
		label: 'ACT',
		name: 'ACT New Zealand',
		colour: '#fdb913',
		cardCount: 1
	}
];

function makeFace(title: string): CardFace {
	return {
		kind: 'stated',
		specId: title,
		title,
		scenarios: [],
		report: { outputs: [], outcomes: [] },
		activates: [],
		counts: {
			scenarios: 0,
			steps: 0,
			outputs: 0,
			outcomes: 0,
			extrapolated: 0
		}
	};
}

function makeCard(
	id = 'labour-medicard',
	clusterId = 'health-access',
	title = 'Medicard three free doctor visits',
	party: PolicyCard['party'] = 'labour'
): PolicyCard {
	return {
		id,
		party,
		title,
		clusters: [clusterId],
		tags: [],
		money: 'named-figure',
		source: {
			title,
			url: `https://example.test/${id}`,
			path: `labour/${id}.md`
		},
		gaps: ['what happens if CGT revenue falls short is not stated'],
		assumptions: [],
		stated: makeFace(title),
		counts: { gaps: 1, assumptions: 0 }
	};
}

afterEach(cleanup);

describe('PolicyGrid', () => {
	it('does not show gaps on the grid card', () => {
		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={[makeCard()]}
					clusters={clusters}
					parties={parties}
					display={ALL_VISIBLE}
					groupBy='none'
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		expect(
			screen.getByRole('heading', {
				name: 'Medicard three free doctor visits'
			})
		).toBeTruthy();
		expect(screen.queryByRole('heading', { name: 'Gaps' })).toBeNull();
		expect(
			screen.queryByText(
				'what happens if CGT revenue falls short is not stated'
			)
		).toBeNull();
		expect(screen.getByText('Health')).toBeTruthy();
		expect(screen.getByText('Stated only')).toBeTruthy();
	});

	it('reports policies per category in the party group header', () => {
		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={[
						makeCard(),
						makeCard(
							'labour-cgt',
							'tax-fiscal',
							'Capital gains tax on residential land'
						)
					]}
					clusters={clusters}
					parties={parties}
					display={ALL_VISIBLE}
					groupBy='party'
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		expect(screen.getByRole('heading', { name: 'Labour' })).toBeTruthy();
		expect(screen.getByLabelText('2 policies Labour')).toBeTruthy();
		expect(screen.getByText('Health 1')).toBeTruthy();
		expect(screen.getByText('Tax 1')).toBeTruthy();
		expect(screen.queryByText(/parties/)).toBeNull();
	});

	it('reports how many parties have policies in the category group header', () => {
		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={[
						makeCard(),
						makeCard('act-health', 'health-access', 'GP user charges', 'act')
					]}
					clusters={clusters}
					parties={parties}
					display={ALL_VISIBLE}
					groupBy='cluster'
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		expect(screen.getByRole('heading', { name: 'Health' })).toBeTruthy();
		expect(screen.getByLabelText('2 / 2 parties Health')).toBeTruthy();
		expect(screen.getByText('Labour 1')).toBeTruthy();
		expect(screen.getByText('ACT 1')).toBeTruthy();
		expect(screen.queryByText('Health 1')).toBeNull();
		expect(screen.queryByRole('button', { name: /parties/ })).toBeNull();
		expect(screen.queryByText('Missing')).toBeNull();
	});

	it('hides party names in the category header when anonymised', () => {
		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={[
						makeCard(),
						makeCard('act-health', 'health-access', 'GP user charges', 'act')
					]}
					clusters={clusters}
					parties={parties}
					display={{ ...ALL_VISIBLE, party: false }}
					groupBy='cluster'
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		expect(screen.getByRole('heading', { name: 'Health' })).toBeTruthy();
		expect(screen.getByLabelText('2 / 2 parties Health')).toBeTruthy();
		expect(screen.queryByText('Labour 1')).toBeNull();
		expect(screen.queryByText('ACT 1')).toBeNull();
	});

	it('shows missing party pills when hovering a partial category tally', () => {
		const field: PartyMeta[] = [
			...parties,
			{
				id: 'national',
				label: 'National',
				name: 'New Zealand National Party',
				colour: '#00529f',
				cardCount: 0
			}
		];

		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={[
						makeCard(),
						makeCard('act-health', 'health-access', 'GP user charges', 'act')
					]}
					clusters={clusters}
					parties={field}
					display={ALL_VISIBLE}
					groupBy='cluster'
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		const tally = screen.getByRole('button', {
			name: '2 / 3 parties Health'
		});
		expect(screen.queryByText('Missing')).toBeNull();
		expect(screen.queryByText('National')).toBeNull();

		fireEvent.mouseEnter(tally);
		expect(screen.getByRole('tooltip')).toBeTruthy();
		expect(screen.getByText('Missing')).toBeTruthy();
		expect(screen.getByText('National')).toBeTruthy();
		expect(screen.queryByText('Labour')).toBeNull();
	});

	it('toggles a party filter when a party pill is clicked', () => {
		const onToggleParty = vi.fn();
		const cards = [
			makeCard(),
			makeCard('act-health', 'health-access', 'GP user charges', 'act')
		];

		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={cards}
					allCards={cards}
					clusters={clusters}
					parties={parties}
					display={ALL_VISIBLE}
					groupBy='cluster'
					selectedParties={new Set()}
					onToggleParty={onToggleParty}
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Labour 1' }));
		expect(onToggleParty).toHaveBeenCalledWith('labour');
	});

	it('dims party pills that are not in the party filter', () => {
		const cards = [
			makeCard(),
			makeCard('act-health', 'health-access', 'GP user charges', 'act')
		];

		render(
			<NuqsAdapter>
				<PolicyGrid
					cards={[makeCard()]}
					allCards={cards}
					clusters={clusters}
					parties={parties}
					display={ALL_VISIBLE}
					groupBy='cluster'
					selectedParties={new Set(['labour'])}
					onToggleParty={vi.fn()}
					onInspect={vi.fn()}
				/>
			</NuqsAdapter>
		);

		const labour = screen.getByRole('button', { name: 'Labour 1' });
		const act = screen.getByRole('button', { name: 'ACT 1' });
		expect(labour.getAttribute('aria-pressed')).toBe('true');
		expect(act.getAttribute('aria-pressed')).toBe('false');
		expect(act.className).toMatch(/Dull/);
		expect(labour.className).not.toMatch(/Dull/);
	});
});
