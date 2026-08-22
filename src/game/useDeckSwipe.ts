import {
	useEffect,
	useLayoutEffect,
	useRef,
	type PointerEvent,
	type RefObject
} from 'react'
import gsap from 'gsap'
import {
	classifyDeckGesture,
	focusAfterGesture,
	type DeckIndex
} from './cardDeck'
import {
	DECK_PEEK_PERCENT,
	poseAtOffset,
	progressAfterGesture,
	progressToward
} from './deckMotion'

type UseDeckSwipeArgs = {
	enabled: boolean
	deckRef: RefObject<HTMLDivElement | null>
	focusIndex: DeckIndex
	resetKey: number
	onFocusIndex: (index: DeckIndex) => void
	onHorizontalDragEnd: () => void
	onInteract?: () => void
}

type DeckDrag = {
	pointerId: number | null
	startX: number
	startY: number
	startProgress: number
	startTime: number
	axis: 'undecided' | 'x' | 'y'
}

function emptyDrag(): DeckDrag {
	return {
		pointerId: null,
		startX: 0,
		startY: 0,
		startProgress: 0,
		startTime: 0,
		axis: 'undecided'
	}
}

function deckCards(deck: HTMLDivElement | null): HTMLElement[] {
	if (!deck) {
		return []
	}
	return [...deck.querySelectorAll<HTMLElement>('.game-card')]
}

function slotPixels(deck: HTMLDivElement | null): number {
	const front = deck?.querySelector<HTMLElement>('.game-card--front')
	const width = front?.offsetWidth ?? 0
	return Math.max(1, width * (DECK_PEEK_PERCENT / 100))
}

function reducedMotion(): boolean {
	return (
		typeof window.matchMedia === 'function' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	)
}

/** Pointer-driven GSAP deck: cards follow the finger, then spring to the next slot. */
export function useDeckSwipe(args: UseDeckSwipeArgs): {
	onPointerDown: (event: PointerEvent<HTMLDivElement>) => void
	onPointerMove: (event: PointerEvent<HTMLDivElement>) => void
	onPointerUp: (event: PointerEvent<HTMLDivElement>) => void
} {
	const {
		enabled,
		deckRef,
		focusIndex,
		resetKey,
		onFocusIndex,
		onHorizontalDragEnd,
		onInteract
	} = args

	const proxyRef = useRef({ progress: 0 })
	const dragRef = useRef<DeckDrag>(emptyDrag())
	const focusRef = useRef(focusIndex)
	const skipFocusTweenRef = useRef(false)
	const tweenRef = useRef<gsap.core.Tween | null>(null)

	focusRef.current = focusIndex

	function renderPoses(progress: number): void {
		proxyRef.current.progress = progress
		const cards = deckCards(deckRef.current)
		if (cards.length < 1) {
			return
		}
		for (const [index, card] of cards.entries()) {
			const pose = poseAtOffset(index - progress)
			gsap.set(card, {
				xPercent: pose.xPercent,
				scale: pose.scale,
				rotation: 0,
				zIndex: pose.zIndex,
				force3D: true
			})
		}
	}

	function killTween(): void {
		tweenRef.current?.kill()
		tweenRef.current = null
	}

	function tweenTo(target: number, onComplete?: () => void): void {
		killTween()
		const duration = reducedMotion()
			? 0
			: gsap.utils.clamp(
					0.32,
					0.55,
					0.38 + 0.1 * Math.abs(target - proxyRef.current.progress)
				)
		tweenRef.current = gsap.to(proxyRef.current, {
			progress: target,
			duration,
			ease: 'power4.out',
			overwrite: true,
			onUpdate: () => renderPoses(proxyRef.current.progress),
			onComplete: () => {
				tweenRef.current = null
				renderPoses(target)
				onComplete?.()
			}
		})
	}

	useLayoutEffect(() => {
		if (!enabled) {
			killTween()
			const cards = deckCards(deckRef.current)
			if (cards.length > 0) {
				gsap.set(cards, {
					clearProps: 'transform,zIndex'
				})
			}
			return
		}

		proxyRef.current.progress = focusRef.current
		renderPoses(focusRef.current)

		return () => {
			killTween()
		}
	}, [enabled, resetKey])

	useEffect(() => {
		if (!enabled) {
			return
		}
		if (skipFocusTweenRef.current) {
			skipFocusTweenRef.current = false
			return
		}
		const target = progressToward(proxyRef.current.progress, focusIndex)
		if (Math.abs(target - proxyRef.current.progress) < 0.001) {
			renderPoses(target)
			return
		}
		tweenTo(target)
	}, [enabled, focusIndex])

	function onPointerDown(event: PointerEvent<HTMLDivElement>): void {
		if (!enabled) {
			return
		}
		killTween()
		dragRef.current = {
			pointerId: event.pointerId,
			startX: event.clientX,
			startY: event.clientY,
			startProgress: proxyRef.current.progress,
			startTime: event.timeStamp,
			axis: 'undecided'
		}
	}

	function onPointerMove(event: PointerEvent<HTMLDivElement>): void {
		if (!enabled || dragRef.current.pointerId !== event.pointerId) {
			return
		}

		const dx = event.clientX - dragRef.current.startX
		const dy = event.clientY - dragRef.current.startY
		const absX = Math.abs(dx)
		const absY = Math.abs(dy)

		if (dragRef.current.axis === 'undecided') {
			if (absX < 8 && absY < 8) {
				return
			}
			dragRef.current.axis = absX > absY ? 'x' : 'y'
			if (dragRef.current.axis === 'x') {
				event.currentTarget.classList.add('game-cards--dragging')
				onInteract?.()
				try {
					event.currentTarget.setPointerCapture(event.pointerId)
				} catch {
					// jsdom and some implicit-capture paths throw; drag still tracks.
				}
			}
		}

		if (dragRef.current.axis !== 'x') {
			return
		}

		event.preventDefault()
		const nextProgress =
			dragRef.current.startProgress - dx / slotPixels(event.currentTarget)
		renderPoses(nextProgress)
	}

	function resetDrag(target: HTMLDivElement): void {
		target.classList.remove('game-cards--dragging')
		const pointerId = dragRef.current.pointerId
		if (
			pointerId !== null &&
			typeof target.hasPointerCapture === 'function' &&
			target.hasPointerCapture(pointerId)
		) {
			target.releasePointerCapture(pointerId)
		}
		dragRef.current = emptyDrag()
	}

	function onPointerUp(event: PointerEvent<HTMLDivElement>): void {
		if (!enabled || dragRef.current.pointerId !== event.pointerId) {
			return
		}

		const dx = event.clientX - dragRef.current.startX
		const dy = event.clientY - dragRef.current.startY
		const dt = Math.max(1, event.timeStamp - dragRef.current.startTime)
		const vx = dx / dt
		const axis = dragRef.current.axis
		const startProgress = dragRef.current.startProgress
		const gesture = classifyDeckGesture(dx, dy, vx)

		if (axis === 'x') {
			onHorizontalDragEnd()
			const nextFocus = focusAfterGesture(focusRef.current, gesture)
			const target = progressAfterGesture(startProgress, gesture)
			if (nextFocus !== focusRef.current) {
				skipFocusTweenRef.current = true
				onFocusIndex(nextFocus)
			}
			tweenTo(target)
		}

		resetDrag(event.currentTarget)
	}

	return { onPointerDown, onPointerMove, onPointerUp }
}
