// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { ReactElement } from 'react';
import type { ClusterMeta, PartyMeta } from '../data/types';
import { ALL_VISIBLE } from '../card/CardDisplay';
import { FilterBar } from './FilterBar';
import type { UseFiltersResult } from './useFilters';

const clusters: ClusterMeta[] = [
	{ id: 'health-access', label: 'Health', description: '' }
];

const parties: PartyMeta[] = [
	{
		id: 'labour',
		label: 'Labour',
		name: 'New Zealand Labour Party',
		colour: '#d82c20',
		cardCount: 1
	}
];

function makeFilters(
	overrides: Partial<UseFiltersResult> = {}
): UseFiltersResult {
	return {
		filtered: [],
		display: { ...ALL_VISIBLE, party: false },
		anonymise: true,
		setAnonymise: vi.fn(),
		groupBy: 'none',
		setGroupBy: vi.fn(),
		selectedClusters: new Set(),
		toggleCluster: vi.fn(),
		clearClusters: vi.fn(),
		selectedParties: new Set(),
		toggleParty: vi.fn(),
		clearParties: vi.fn(),
		selectedMoney: new Set(),
		toggleMoney: vi.fn(),
		clearMoney: vi.fn(),
		clearAppliedFilters: vi.fn(),
		hasOutput: null,
		setHasOutput: vi.fn(),
		hasDerived: null,
		setHasDerived: vi.fn(),
		...overrides
	};
}

afterEach(cleanup);

function renderBar(ui: ReactElement) {
	return render(<NuqsAdapter>{ui}</NuqsAdapter>);
}

describe('FilterBar', () => {
	it('keeps category chips in a closed Filters window', () => {
		renderBar(
			<FilterBar
				clusters={clusters}
				parties={parties}
				totalCount={12}
				filters={makeFilters()}
			/>
		);

		const toggle = screen.getByRole('button', { name: 'Filters' });
		expect(toggle.getAttribute('aria-expanded')).toBe('false');
		expect(toggle.getAttribute('aria-pressed')).toBe('false');
		expect(screen.queryByText('Health')).toBeNull();
		expect(screen.queryByText('Named figure')).toBeNull();
	});

	it('opens a headerless overlay and keeps Filters pressed', () => {
		renderBar(
			<FilterBar
				clusters={clusters}
				parties={parties}
				totalCount={12}
				filters={makeFilters()}
			/>
		);

		const toggle = screen.getByRole('button', { name: 'Filters' });
		fireEvent.click(toggle);

		expect(toggle.getAttribute('aria-expanded')).toBe('true');
		expect(toggle.getAttribute('aria-pressed')).toBe('true');
		expect(screen.getAllByText('Filters')).toHaveLength(1);
		expect(screen.getByRole('checkbox', { name: 'Health' })).toBeTruthy();
		expect(screen.getByRole('checkbox', { name: 'Named figure' })).toBeTruthy();
		expect(screen.queryByLabelText('Hide filters')).toBeNull();
	});

	it('paints a category pill with the solid category colour and white text', () => {
		renderBar(
			<FilterBar
				clusters={clusters}
				parties={parties}
				totalCount={12}
				filters={makeFilters()}
			/>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Filters' }));

		const health = screen.getByRole('checkbox', { name: 'Health' });
		const pill = health.closest('label');
		expect(pill?.style.backgroundColor).toBe('rgb(184, 77, 92)');
		expect(pill?.style.color).toBe('rgb(255, 251, 230)');
	});

	it('fills a selected party pill with the solid party colour', () => {
		renderBar(
			<FilterBar
				clusters={clusters}
				parties={parties}
				totalCount={12}
				filters={makeFilters({
					anonymise: false,
					selectedParties: new Set(['labour'])
				})}
			/>
		);

		fireEvent.click(screen.getByRole('button', { name: /Filters/ }));

		const labour = screen.getByRole('checkbox', { name: 'Labour' });
		expect((labour as HTMLInputElement).checked).toBe(true);
		expect(labour.closest('label')?.style.backgroundColor).toBe(
			'rgb(216, 44, 32)'
		);
	});

	it('puts ink text on a selected Opportunity pill', () => {
		renderBar(
			<FilterBar
				clusters={clusters}
				parties={[
					{
						id: 'opportunity',
						label: 'Opportunity',
						name: 'The Opportunities Party',
						colour: '#00b9bc',
						cardCount: 1
					}
				]}
				totalCount={12}
				filters={makeFilters({
					anonymise: false,
					selectedParties: new Set(['opportunity'])
				})}
			/>
		);

		fireEvent.click(screen.getByRole('button', { name: /Filters/ }));

		const opportunity = screen.getByRole('checkbox', { name: 'Opportunity' });
		expect(opportunity.closest('label')?.style.color).toBe('rgb(23, 23, 23)');
	});

	it('shows how many filters are applied on the closed control', () => {
		renderBar(
			<FilterBar
				clusters={clusters}
				parties={parties}
				totalCount={12}
				filters={makeFilters({
					selectedClusters: new Set(['health-access']),
					hasOutput: true
				})}
			/>
		);

		expect(screen.getByLabelText('2 applied')).toBeTruthy();
		const count = screen.getByText('0 / 12');
		const clear = screen.getByRole('button', { name: 'Clear filters' });
		const filters = screen.getByRole('button', { name: /Filters/ });
		expect(
			count.compareDocumentPosition(clear) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
		expect(
			clear.compareDocumentPosition(filters) & Node.DOCUMENT_POSITION_FOLLOWING
		).toBeTruthy();
	});

	it('closes the filter menu from a dismiss layer that does not cover the header', () => {
		const { container } = renderBar(
			<FilterBar
				clusters={clusters}
				parties={parties}
				totalCount={12}
				filters={makeFilters()}
			/>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Filters' }));
		expect(screen.getByRole('checkbox', { name: 'Health' })).toBeTruthy();

		const dismiss = container.querySelector('[class*="menuDismiss"]');
		expect(dismiss).toBeTruthy();
		fireEvent.pointerDown(dismiss as Element);

		expect(screen.queryByRole('checkbox', { name: 'Health' })).toBeNull();
	});
});
