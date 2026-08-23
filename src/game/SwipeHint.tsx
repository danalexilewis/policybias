import { useEffect, useRef, type JSX } from 'react';
import gsap from 'gsap';
import { useLang } from '../i18n/useLang';

export const SWIPE_HINT_MS = 3000;

type SwipeHintProps = {
	onDismiss: () => void;
};

/** Floating hand that demonstrates a left/right swipe, then disappears. */
export function SwipeHint(props: SwipeHintProps): JSX.Element {
	const { t } = useLang();
	const rootRef = useRef<HTMLButtonElement>(null);
	const motionRef = useRef<HTMLSpanElement>(null);
	const onDismissRef = useRef(props.onDismiss);
	onDismissRef.current = props.onDismiss;

	useEffect(() => {
		const root = rootRef.current;
		const motion = motionRef.current;
		if (!root || !motion) {
			return;
		}

		const reduced =
			typeof window.matchMedia === 'function' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const context = gsap.context(() => {
			if (!reduced) {
				gsap.fromTo(
					motion,
					{ x: 36, rotation: 8 },
					{
						x: -36,
						rotation: -8,
						duration: 0.75,
						ease: 'power1.inOut',
						repeat: -1,
						yoyo: true
					}
				);
				gsap.to(root, {
					opacity: 0,
					duration: 0.28,
					delay: (SWIPE_HINT_MS - 280) / 1000,
					ease: 'power1.out'
				});
			}
		}, root);

		const hide = window.setTimeout(() => {
			onDismissRef.current();
		}, SWIPE_HINT_MS);

		return () => {
			window.clearTimeout(hide);
			context.revert();
		};
	}, []);

	return (
		<button
			ref={rootRef}
			type='button'
			className='game-swipe-hint'
			aria-label={t('swipeHint')}
			onClick={props.onDismiss}
		>
			<span className='game-swipe-hint__orb' aria-hidden='true'>
				<span ref={motionRef} className='game-swipe-hint__motion'>
					<svg
						className='game-swipe-hint__chevron'
						viewBox='0 0 12 24'
						focusable='false'
					>
						<path
							d='M9 3L3 12l6 9'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.4'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<svg
						className='game-swipe-hint__hand'
						viewBox='0 0 64 64'
						focusable='false'
					>
						<path
							d='M26.5 7.5c-1.8 0-3.2 1.5-3.2 3.3V28c-1.2-.8-2.8-1-4.2-.3-2.1 1.1-2.8 3.7-1.6 5.7l11.2 19.2c1.5 2.6 4.3 4.2 7.4 4.2h6.2c5.1 0 9.3-3.8 9.9-8.8l1.6-14.2c.3-2.6-1.6-4.9-4.2-5.2-1.2-.1-2.3.2-3.1.9V12.2c0-1.8-1.4-3.3-3.2-3.3s-3.2 1.5-3.2 3.3v11.6h-1.8V8.8c0-1.8-1.4-3.3-3.2-3.3s-3.2 1.5-3.2 3.3v15.3h-1.8V10.8c0-1.8-1.5-3.3-3.3-3.3Z'
							fill='var(--paper)'
							stroke='var(--ink)'
							strokeWidth='2.2'
							strokeLinejoin='round'
						/>
					</svg>
					<svg
						className='game-swipe-hint__chevron'
						viewBox='0 0 12 24'
						focusable='false'
					>
						<path
							d='M3 3l6 9-6 9'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.4'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</span>
			</span>
		</button>
	);
}
