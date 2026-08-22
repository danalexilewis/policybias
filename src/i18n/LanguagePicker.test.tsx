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
	it('hides when the event has only one language', () => {
		window.history.replaceState({}, '', '/nz-election-2026/');
		renderPicker();
		expect(screen.queryByRole('combobox')).toBeNull();
		expect(document.querySelector('select')).toBeNull();
	});

	it('opens a custom menu instead of a native select', () => {
		window.history.replaceState({}, '', '/se-election-2026/');
		renderPicker();

		expect(document.querySelector('select')).toBeNull();
		expect(pickerTrigger().textContent).toContain('Svenska');

		openPicker();

		expect(screen.getByRole('listbox')).toBeTruthy();
		expect(screen.getByRole('option', { name: 'Svenska' })).toBeTruthy();
		expect(screen.getByRole('option', { name: 'English' })).toBeTruthy();
	});

	it('switches language from the custom menu', async () => {
		window.history.replaceState({}, '', '/se-election-2026/');
		renderPicker();
		openPicker();

		fireEvent.click(screen.getByRole('option', { name: 'English' }));

		expect(pickerTrigger().textContent).toContain('English');
		expect(
			window.localStorage.getItem('policybias.lang.se-election-2026')
		).toBe('en');
		await waitFor(() => {
			expect(window.location.search).toContain('lang=en');
		});
	});
});
