import { describe, expect, it } from 'vitest'
import {
	DECK_PEEK_PERCENT,
	poseAtOffset,
	progressAfterGesture,
	progressToward,
	shortestFocusDelta,
	wrapOffset
} from './deckMotion'

describe('wrapOffset', () => {
	it('keeps the front and peek slots, and wraps the far side', () => {
		expect(wrapOffset(0)).toBe(0)
		expect(wrapOffset(1)).toBe(1)
		expect(wrapOffset(-1)).toBe(-1)
		expect(wrapOffset(2)).toBe(-1)
		expect(wrapOffset(-2)).toBe(1)
	})
})

describe('poseAtOffset', () => {
	it('puts the front card centred and larger', () => {
		expect(poseAtOffset(0)).toEqual({
			xPercent: 0,
			scale: 1,
			zIndex: 15
		})
	})

	it('peeks neighbours to the side and slides them as a strip while dragged', () => {
		const right = poseAtOffset(1)
		expect(right.xPercent).toBe(DECK_PEEK_PERCENT)
		expect(right.scale).toBeLessThan(1)
		expect(right.zIndex).toBeLessThan(15)

		const left = poseAtOffset(-1)
		expect(left.xPercent).toBe(-DECK_PEEK_PERCENT)
		expect(left.scale).toBe(right.scale)

		const dragging = poseAtOffset(0.4)
		expect(dragging.xPercent).toBeGreaterThan(0)
		expect(dragging.scale).toBeLessThan(1)
		expect(dragging.xPercent).toBeCloseTo(0.4 * DECK_PEEK_PERCENT)
	})
})

describe('shortestFocusDelta', () => {
	it('steps one slot the short way around the hand', () => {
		expect(shortestFocusDelta(0, 1)).toBe(1)
		expect(shortestFocusDelta(0, 2)).toBe(-1)
		expect(shortestFocusDelta(2, 0)).toBe(1)
		expect(shortestFocusDelta(1, 1)).toBe(0)
	})
})

describe('progressToward', () => {
	it('keeps unbounded progress so a wrap does not reverse across the front', () => {
		expect(progressToward(0, 1)).toBe(1)
		expect(progressToward(0, 2)).toBe(-1)
		expect(progressToward(-1, 0)).toBe(0)
		expect(progressToward(2, 0)).toBe(3)
	})
})

describe('progressAfterGesture', () => {
	it('moves one slot for a swipe and stays put otherwise', () => {
		expect(progressAfterGesture(0, 'swipe-left')).toBe(1)
		expect(progressAfterGesture(0, 'swipe-right')).toBe(-1)
		expect(progressAfterGesture(1, 'tap')).toBe(1)
		expect(progressAfterGesture(1, 'ignore')).toBe(1)
	})
})
