import {
	DECK_CARD_COUNT,
	type DeckGesture,
	type DeckIndex
} from './cardDeck'

export const DECK_PEEK_PERCENT = 72
export const DECK_PEEK_SCALE = 0.06

export type DeckPose = {
	xPercent: number
	scale: number
	zIndex: number
}

/**
 * Wrap a card's offset into (-count/2, count/2] so the far card
 * teleports at the edge instead of sliding across the front.
 */
export function wrapOffset(offset: number): number {
	return offset - DECK_CARD_COUNT * Math.round(offset / DECK_CARD_COUNT)
}

/** Pose for a card at a (possibly fractional, wrapping) slot offset. */
export function poseAtOffset(offset: number): DeckPose {
	const slot = wrapOffset(offset)
	const abs = Math.abs(slot)
	return {
		xPercent: slot * DECK_PEEK_PERCENT,
		scale: 1 - Math.min(1, abs) * DECK_PEEK_SCALE,
		zIndex: Math.round((1.5 - abs) * 10)
	}
}

/** Shortest step from one card to another on the wrapping three-card hand. */
export function shortestFocusDelta(
	from: DeckIndex,
	to: DeckIndex
): -1 | 0 | 1 {
	const raw = to - from
	if (raw === 2 || raw === -1) {
		return -1
	}
	if (raw === -2 || raw === 1) {
		return 1
	}
	return 0
}

/** Integer progress that shows `targetIndex` after a short tween. */
export function progressToward(
	current: number,
	targetIndex: DeckIndex
): number {
	const rounded = Math.round(current)
	const currentIndex = ((((rounded % DECK_CARD_COUNT) + DECK_CARD_COUNT) %
		DECK_CARD_COUNT) as DeckIndex)
	return rounded + shortestFocusDelta(currentIndex, targetIndex)
}

/** Shift progress by one slot for a committed browse swipe. */
export function progressAfterGesture(
	progress: number,
	gesture: DeckGesture
): number {
	if (gesture === 'swipe-left') {
		return progress + 1
	}
	if (gesture === 'swipe-right') {
		return progress - 1
	}
	return progress
}
