import { describe, expect, it } from 'vitest'
import {
	carouselLayoutMatches,
	classifyDeckGesture,
	DECK_SWIPE_PX,
	DECK_TAP_PX,
	deckSlot,
	focusAfterGesture,
	stepDeckIndex
} from './cardDeck'

describe('deckSlot', () => {
	it('puts the focused card in front and wraps the other two as peeks', () => {
		expect(deckSlot(0, 0)).toBe(0)
		expect(deckSlot(1, 0)).toBe(1)
		expect(deckSlot(2, 0)).toBe(-1)

		expect(deckSlot(1, 1)).toBe(0)
		expect(deckSlot(2, 1)).toBe(1)
		expect(deckSlot(0, 1)).toBe(-1)

		expect(deckSlot(2, 2)).toBe(0)
		expect(deckSlot(0, 2)).toBe(1)
		expect(deckSlot(1, 2)).toBe(-1)
	})
})

describe('stepDeckIndex', () => {
	it('wraps the three-card hand in both directions', () => {
		expect(stepDeckIndex(0, 1)).toBe(1)
		expect(stepDeckIndex(2, 1)).toBe(0)
		expect(stepDeckIndex(0, -1)).toBe(2)
		expect(stepDeckIndex(1, -1)).toBe(0)
	})
})

describe('classifyDeckGesture', () => {
	it('treats a short press as a tap so the front card can be chosen', () => {
		expect(classifyDeckGesture(0, 0)).toBe('tap')
		expect(classifyDeckGesture(DECK_TAP_PX - 1, 0)).toBe('tap')
		expect(classifyDeckGesture(0, DECK_TAP_PX - 1)).toBe('tap')
	})

	it('swipes left to the next card and right to the previous', () => {
		expect(classifyDeckGesture(-DECK_SWIPE_PX, 0)).toBe('swipe-left')
		expect(classifyDeckGesture(DECK_SWIPE_PX, 4)).toBe('swipe-right')
	})

	it('ignores mostly-vertical travel so the policy can still scroll', () => {
		expect(classifyDeckGesture(20, 80)).toBe('ignore')
		expect(classifyDeckGesture(-DECK_SWIPE_PX, DECK_SWIPE_PX + 1)).toBe(
			'ignore'
		)
	})

	it('ignores a short horizontal drag that has not committed to a swipe', () => {
		expect(classifyDeckGesture(DECK_SWIPE_PX - 1, 0)).toBe('ignore')
	})
})

describe('focusAfterGesture', () => {
	it('moves focus only for a committed swipe', () => {
		expect(focusAfterGesture(0, 'swipe-left')).toBe(1)
		expect(focusAfterGesture(0, 'swipe-right')).toBe(2)
		expect(focusAfterGesture(1, 'tap')).toBe(1)
		expect(focusAfterGesture(1, 'ignore')).toBe(1)
	})
})

describe('carouselLayoutMatches', () => {
	it('is off when matchMedia is missing so desktop tests keep a three-up grid', () => {
		expect(carouselLayoutMatches(undefined)).toBe(false)
	})

	it('follows the carousel media query', () => {
		expect(
			carouselLayoutMatches(() => ({ matches: true }) as MediaQueryList)
		).toBe(true)
		expect(
			carouselLayoutMatches(() => ({ matches: false }) as MediaQueryList)
		).toBe(false)
	})
})
