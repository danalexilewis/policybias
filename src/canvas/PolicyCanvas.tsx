import {
	Background,
	Controls,
	MiniMap,
	ReactFlow,
	useReactFlow,
	PanOnScrollMode,
	type NodeTypes
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useEffect, useMemo, useState, type JSX } from 'react';
import type { CardDisplay } from '../card/CardDisplay';
import { CardHeightContext } from './cardHeight';
import { ClusterLabelNode } from './ClusterLabelNode';
import { ClusterLegend } from './ClusterLegend';
import { ClusterWashNode } from './ClusterWashNode';
import { OctagonGuideNode } from './OctagonGuideNode';
import {
	clusterWashNodeId,
	layoutCanvas,
	type CanvasLayoutMode
} from './layout';
import type { ClusterMeta, PolicyCard } from '../data/types';

type PolicyCanvasProps = {
	cards: PolicyCard[];
	clusters: ClusterMeta[];
	display: CardDisplay;
	enriched: boolean;
	layoutMode: CanvasLayoutMode;
	CardNodeComponent: NodeTypes['card'];
};

function FitWhenMeasured(props: {
	cardCount: number;
	measuredCount: number;
	layoutMode: CanvasLayoutMode;
	nodeCount: number;
}): null {
	const { fitView } = useReactFlow();
	const { cardCount, measuredCount, layoutMode, nodeCount } = props;

	useEffect(() => {
		if (cardCount === 0 || measuredCount < cardCount || nodeCount === 0) {
			return;
		}
		const padding = layoutMode === 'cluster' ? 0.18 : 0.14;
		let second = 0;
		const first = requestAnimationFrame(() => {
			second = requestAnimationFrame(() => {
				void fitView({ padding, duration: 220 });
			});
		});
		return () => {
			cancelAnimationFrame(first);
			cancelAnimationFrame(second);
		};
	}, [cardCount, measuredCount, layoutMode, nodeCount, fitView]);

	return null;
}

function FocusClusterView(props: {
	clusterId: string | null;
	requestKey: number;
}): null {
	const { fitView, getNode } = useReactFlow();
	const { clusterId, requestKey } = props;

	useEffect(() => {
		if (!clusterId || requestKey === 0) {
			return;
		}
		const nodeId = clusterWashNodeId(clusterId);
		let second = 0;
		const first = requestAnimationFrame(() => {
			second = requestAnimationFrame(() => {
				if (!getNode(nodeId)) {
					return;
				}
				void fitView({
					nodes: [{ id: nodeId }],
					padding: 0.22,
					duration: 350,
					maxZoom: 1.25
				});
			});
		});
		return () => {
			cancelAnimationFrame(first);
			cancelAnimationFrame(second);
		};
	}, [clusterId, requestKey, fitView, getNode]);

	return null;
}

/** React Flow canvas: wall masonry, or cluster octagon. */
export function PolicyCanvas({
	cards,
	clusters,
	display,
	enriched,
	layoutMode,
	CardNodeComponent
}: PolicyCanvasProps): JSX.Element {
	const [heights, setHeights] = useState<Record<string, number>>({});
	const [hoveredClusterId, setHoveredClusterId] = useState<string | null>(null);
	const [selectedClusterId, setSelectedClusterId] = useState<string | null>(
		null
	);
	const [focusRequestKey, setFocusRequestKey] = useState(0);
	const highlightedClusterId = hoveredClusterId ?? selectedClusterId;

	function handleSelectCluster(clusterId: string): void {
		setSelectedClusterId(clusterId);
		setFocusRequestKey((previous) => previous + 1);
	}

	function reportHeight(id: string, height: number): void {
		setHeights((previous) => {
			const existing = previous[id];
			if (existing !== undefined && Math.abs(existing - height) < 2) {
				return previous;
			}
			return { ...previous, [id]: height };
		});
	}

	const nodeTypes = useMemo(
		(): NodeTypes => ({
			card: CardNodeComponent,
			clusterLabel: ClusterLabelNode,
			clusterWash: ClusterWashNode,
			octagonGuide: OctagonGuideNode
		}),
		[CardNodeComponent]
	);

	const { nodes: layoutNodes } = layoutCanvas(
		layoutMode,
		cards,
		clusters,
		display,
		heights,
		enriched
	);
	const nodes = layoutNodes.map((node) => {
		if (node.type !== 'octagonGuide') {
			return node;
		}
		return {
			...node,
			data: {
				...node.data,
				activeClusterId: highlightedClusterId
			}
		};
	});

	const measuredCount = cards.filter(
		(card) => heights[card.id] !== undefined
	).length;

	return (
		<div className='policy-canvas'>
			<CardHeightContext.Provider value={reportHeight}>
				<ReactFlow
					nodes={nodes}
					edges={[]}
					nodeTypes={nodeTypes}
					minZoom={0.02}
					maxZoom={1.5}
					nodesDraggable={false}
					nodesConnectable={false}
					elementsSelectable={false}
					panOnDrag
					panOnScroll
					panOnScrollMode={PanOnScrollMode.Free}
					zoomOnScroll={false}
					zoomOnPinch
					zoomOnDoubleClick={false}
					preventScrolling
					proOptions={{ hideAttribution: true }}
				>
					<FitWhenMeasured
						cardCount={cards.length}
						measuredCount={measuredCount}
						layoutMode={layoutMode}
						nodeCount={nodes.length}
					/>
					{layoutMode === 'cluster' ? (
						<FocusClusterView
							clusterId={selectedClusterId}
							requestKey={focusRequestKey}
						/>
					) : null}
					<Background gap={20} size={1} />
					<Controls showInteractive={false} />
					<MiniMap pannable zoomable />
				</ReactFlow>
			</CardHeightContext.Provider>
			{layoutMode === 'cluster' ? (
				<ClusterLegend
					clusters={clusters}
					activeClusterId={highlightedClusterId}
					selectedClusterId={selectedClusterId}
					onHoverCluster={setHoveredClusterId}
					onSelectCluster={handleSelectCluster}
				/>
			) : null}
		</div>
	);
}
