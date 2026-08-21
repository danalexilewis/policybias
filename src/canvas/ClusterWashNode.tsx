import type { NodeProps } from '@xyflow/react';
import type { JSX } from 'react';
import type { ClusterWashNodeData } from './layout';

/** Soft cluster-coloured wash behind a corner grid. */
export function ClusterWashNode({
	data
}: NodeProps & { data: ClusterWashNodeData }): JSX.Element {
	const { colour, anchorX, anchorY } = data;
	return (
		<div
			className='cluster-wash'
			style={{
				background: `radial-gradient(ellipse 90% 80% at ${anchorX} ${anchorY}, ${colour}73, ${colour}26 46%, transparent 74%)`
			}}
		/>
	);
}
