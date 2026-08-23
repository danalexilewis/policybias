// @vitest-environment jsdom
import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor
} from '@testing-library/react';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LanguagePicker } from './LanguagePicker';

afterEach(() => {
	cleanup();
	window.history.replaceState({}, '', '/');
	window.localStorage.clear();
});

beforeEach(() => {
	window.HTMLElement.prototype.hasPointerCapture = () => false;
	window.HTMLElement.prototype.setPointerCapture = () => undefined;
	window.HTMLElement.prototype.releasePointerCapture = () => undefined;
	window.HTMLElement.prototype.scrollIntoView = () => undefined;
});

function renderPicker(): void {
	render(
		<NuqsAdapter>
			<LanguagePicker />
		</NuqsAdapter>
	);
}

function pickerTrigger(): HTMLElement {
	return screen.getByRole('combobox');
}

function openPicker(): void {
	fireEvent.click(pickerTrigger());
}

describe('LanguagePicker', () => {
	it('shows English and te reo on the NZ event', () => {
		window.history.replaceState({}, '', '/nz-election-2026/');
		renderPicker();
		expect(pickerTrigger().textContent).toContain('English');
		expect(pickerTrigger().textContent).toContain('EN');
		openPicker();
		expect(screen.getByRole('option', { name: 'Te reo Māori' })).toBeTruthy();
	});

	it('opens a custom menu instead of a native select', () => {
		window.history.replaceState({}, '', '/se-election-2026/');
		renderPicker();

		expect(document.querySelector('select')).toBeNull();
		expect(pickerTrigger().textContent).toContain('Svenska');
		expect(pickerTrigger().textContent).toContain('SV');

		openPicker();

		expect(screen.getByRole('listbox')).toBeTruthy();
		expect(screen.getByRole('option', { name: 'Svenska' })).toBeTruthy();
		expect(screen.getByRole('option', { name: 'English' })).toBeTruthy();
	});

	it('switches to te reo from the NZ menu', async () => {
		window.history.replaceState({}, '', '/nz-election-2026/');
		renderPicker();
		openPicker();
		fireEvent.click(screen.getByRole('option', { name: 'Te reo Māori' }));
		expect(pickerTrigger().textContent).toContain('Te reo Māori');
		expect(pickerTrigger().textContent).toContain('MI');
		await waitFor(() => {
			expect(window.location.search).toContain('lang=mi');
		});
	});

	it('switches language from the custom menu', async () => {
		window.history.replaceState({}, '', '/se-election-2026/');
		renderPicker();
		openPicker();

		fireEvent.click(screen.getByRole('option', { name: 'English' }));

		expect(pickerTrigger().textContent).toContain('English');
		expect(pickerTrigger().textContent).toContain('EN');
		expect(
			window.localStorage.getItem('policybias.lang.se-election-2026')
		).toBe('en');
		await waitFor(() => {
			expect(window.location.search).toContain('lang=en');
		});
	});
});
