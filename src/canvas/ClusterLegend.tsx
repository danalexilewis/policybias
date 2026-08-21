import type {
	FocusEvent,
	JSX,
	KeyboardEvent,
	MouseEvent,
	PointerEvent
} from 'react';
import type { ClusterMeta } from '../data/types';
import { clusterColour } from './clusterColours';

type ClusterLegendProps = {
	clusters: ClusterMeta[];
	activeClusterId: string | null;
	selectedClusterId: string | null;
	onHoverCluster: (clusterId: string | null) => void;
	onSelectCluster: (clusterId: string) => void;
};

/** Colour key for the eight octagon corners. */
export function ClusterLegend({
	clusters,
	activeClusterId,
	selectedClusterId,
	onHoverCluster,
	onSelectCluster
}: ClusterLegendProps): JSX.Element {
	function clusterIdFrom(
		target: EventTarget & { dataset: DOMStringMap }
	): string | null {
		return target.dataset.clusterId ?? null;
	}

	function handleItemEnter(event: PointerEvent<HTMLLIElement>): void {
		onHoverCluster(clusterIdFrom(event.currentTarget));
	}

	function handleItemLeave(): void {
		onHoverCluster(null);
	}

	function handleItemFocus(event: FocusEvent<HTMLLIElement>): void {
		onHoverCluster(clusterIdFrom(event.currentTarget));
	}

	function handleItemBlur(): void {
		onHoverCluster(null);
	}

	function handleItemClick(event: MouseEvent<HTMLLIElement>): void {
		const clusterId = clusterIdFrom(event.currentTarget);
		if (clusterId) {
			onSelectCluster(clusterId);
		}
	}

	function handleItemKeyDown(event: KeyboardEvent<HTMLLIElement>): void {
		if (event.key !== 'Enter' && event.key !== ' ') {
			return;
		}
		event.preventDefault();
		const clusterId = clusterIdFrom(event.currentTarget);
		if (clusterId) {
			onSelectCluster(clusterId);
		}
	}

	return (
		<aside className='cluster-legend' aria-label='Cluster colour legend'>
			<h2 className='cluster-legend__title'>Clusters</h2>
			<ul className='cluster-legend__list'>
				{clusters.map((cluster) => {
					const isActive = cluster.id === activeClusterId;
					const isSelected = cluster.id === selectedClusterId;
					return (
						<li
							key={cluster.id}
							role='button'
							className={`cluster-legend__item${isActive ? ' cluster-legend__item--active' : ''}${isSelected ? ' cluster-legend__item--selected' : ''}`}
							data-cluster-id={cluster.id}
							tabIndex={0}
							aria-pressed={isSelected}
							onPointerEnter={handleItemEnter}
							onPointerLeave={handleItemLeave}
							onFocus={handleItemFocus}
							onBlur={handleItemBlur}
							onClick={handleItemClick}
							onKeyDown={handleItemKeyDown}
						>
							<span
								className='cluster-legend__swatch'
								style={{ backgroundColor: clusterColour(cluster.id) }}
								aria-hidden
							/>
							<span>{cluster.label}</span>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
