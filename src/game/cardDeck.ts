export type DeckIndex = 0 | 1 | 2

export const DECK_CARD_COUNT = 3
export const DECK_TAP_PX = 10
export const DECK_SWIPE_PX = 48

export type DeckGesture = 'tap' | 'swipe-left' | 'swipe-right' | 'ignore'

/**
 * Place a card relative to the focused one in a wrapping three-card hand.
 * -1 peeks from the left, 0 is the front card, 1 peeks from the right.
 */
export function deckSlot(index: DeckIndex, focus: DeckIndex): -1 | 0 | 1 {
	const delta = (index - focus + DECK_CARD_COUNT) % DECK_CARD_COUNT
	if (delta === 0) {
		return 0
	}
	if (delta === 1) {
		return 1
	}
	return -1
}

/** Step the focused card left (−1) or right (+1), wrapping the hand. */
export function stepDeckIndex(
	focus: DeckIndex,
	direction: -1 | 1
): DeckIndex {
	return ((focus + direction + DECK_CARD_COUNT) %
		DECK_CARD_COUNT) as DeckIndex
}

/**
 * Classify a completed pointer gesture on the deck.
 * Horizontal travel chooses the next card; a short press is a tap;
 * mostly-vertical travel is left for the card's own scroll.
 */
export function classifyDeckGesture(dx: number, dy: number): DeckGesture {
	const absX = Math.abs(dx)
	const absY = Math.abs(dy)
	if (absX < DECK_TAP_PX && absY < DECK_TAP_PX) {
		return 'tap'
	}
	if (absX < DECK_SWIPE_PX) {
		return 'ignore'
	}
	if (absX <= absY) {
		return 'ignore'
	}
	return dx < 0 ? 'swipe-left' : 'swipe-right'
}

/** Apply a browse swipe. Tap and ignore leave the focus where it is. */
export function focusAfterGesture(
	focus: DeckIndex,
	gesture: DeckGesture
): DeckIndex {
	if (gesture === 'swipe-left') {
		return stepDeckIndex(focus, 1)
	}
	if (gesture === 'swipe-right') {
		return stepDeckIndex(focus, -1)
	}
	return focus
}

const CAROUSEL_QUERY = '(max-width: 900px)'

/** True when the game should use the swipeable three-card hand. */
export function carouselLayoutMatches(
	matchMedia: Window['matchMedia'] | undefined
): boolean {
	if (typeof matchMedia !== 'function') {
		return false
	}
	return matchMedia(CAROUSEL_QUERY).matches
}

export function carouselMediaQuery(): string {
	return CAROUSEL_QUERY
}
