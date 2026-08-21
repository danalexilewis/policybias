import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { JSX } from 'react';
import type { ClusterLabelNodeData } from './layout';

/** Column header for a cluster group on the canvas. */
export function ClusterLabelNode({
	data
}: NodeProps & { data: ClusterLabelNodeData }): JSX.Element {
	return (
		<div
			className='cluster-label-node'
			style={{ borderBottomColor: data.colour }}
		>
			<Handle type='target' position={Position.Top} style={{ opacity: 0 }} />
			<h2 className='cluster-label-node__title' style={{ color: data.colour }}>
				{data.cluster.label}
			</h2>
			<p className='cluster-label-node__description'>
				{data.cluster.description}
			</p>
			<Handle type='source' position={Position.Bottom} style={{ opacity: 0 }} />
		</div>
	);
}
