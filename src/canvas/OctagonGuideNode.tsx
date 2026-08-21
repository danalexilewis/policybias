import type { NodeProps } from '@xyflow/react';
import type { JSX } from 'react';
import type { OctagonGuideNodeData } from './layout';
import { LAYOUT } from './layout';

function octagonAngle(index: number): number {
	return -Math.PI / 2 + (index * 2 * Math.PI) / LAYOUT.octagonCorners;
}

function pointOnCircle(
	cx: number,
	cy: number,
	radius: number,
	angle: number
): string {
	const x = cx + Math.cos(angle) * radius;
	const y = cy + Math.sin(angle) * radius;
	return `${x},${y}`;
}

function octagonOutline(cx: number, cy: number, radius: number): string {
	const points: string[] = [];
	for (let index = 0; index < LAYOUT.octagonCorners; index += 1) {
		points.push(pointOnCircle(cx, cy, radius, octagonAngle(index)));
	}
	return points.join(' ');
}

function sectorPoints(
	cx: number,
	cy: number,
	radius: number,
	index: number
): string {
	const angle = octagonAngle(index);
	const half = Math.PI / LAYOUT.octagonCorners;
	return [
		`${cx},${cy}`,
		pointOnCircle(cx, cy, radius, angle - half),
		pointOnCircle(cx, cy, radius, angle),
		pointOnCircle(cx, cy, radius, angle + half)
	].join(' ');
}

/** Faint octagon behind the cluster grids, one tinted sector per corner. */
export function OctagonGuideNode({
	data
}: NodeProps & { data: OctagonGuideNodeData }): JSX.Element {
	const { activeClusterId, radius, sectors } = data;

	if (radius <= 0) {
		return <div className='octagon-guide octagon-guide--empty' />;
	}

	const size = radius * 2;
	const cx = radius;
	const cy = radius;

	return (
		<svg
			className='octagon-guide'
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			aria-hidden
		>
			<defs>
				{sectors.map((sector) => {
					const isActive = activeClusterId === sector.id;
					return (
						<radialGradient
							key={sector.id}
							id={`octagon-sector-${sector.id}`}
							cx='50%'
							cy='50%'
							r='75%'
						>
							<stop offset='20%' stopColor={sector.colour} stopOpacity='0' />
							<stop
								offset='100%'
								stopColor={sector.colour}
								stopOpacity={isActive ? '0.52' : '0.32'}
							/>
						</radialGradient>
					);
				})}
			</defs>
			{sectors.map((sector, index) => (
				<polygon
					key={sector.id}
					className='octagon-guide__sector'
					points={sectorPoints(cx, cy, radius, index)}
					fill={`url(#octagon-sector-${sector.id})`}
				/>
			))}
			<polygon
				className='octagon-guide__outline'
				points={octagonOutline(cx, cy, radius)}
			/>
		</svg>
	);
}
