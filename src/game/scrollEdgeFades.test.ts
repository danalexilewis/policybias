import { describe, expect, it } from 'vitest';
import { scrollEdgeFades } from './scrollEdgeFades';

describe('scrollEdgeFades', () => {
	it('hides both fades when the content fits', () => {
		expect(
			scrollEdgeFades({ scrollTop: 0, scrollHeight: 400, clientHeight: 400 })
		).toEqual({ top: false, bottom: false });
	});

	it('shows only the bottom fade at the top of an overflowing scroller', () => {
		expect(
			scrollEdgeFades({ scrollTop: 0, scrollHeight: 2000, clientHeight: 400 })
		).toEqual({ top: false, bottom: true });
	});

	it('shows both fades once the user has scrolled away from either edge', () => {
		expect(
			scrollEdgeFades({ scrollTop: 200, scrollHeight: 2000, clientHeight: 400 })
		).toEqual({ top: true, bottom: true });
	});

	it('hides the bottom fade at the end of the page', () => {
		expect(
			scrollEdgeFades({ scrollTop: 1600, scrollHeight: 2000, clientHeight: 400 })
		).toEqual({ top: true, bottom: false });
	});
});
