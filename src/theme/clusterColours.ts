/**
 * Stable colours for the eight policy clusters. Used by category chips
 * and filter pills. Ids match clusters.yaml.
 */
export const CLUSTER_COLOURS: Record<string, string> = {
  'health-access': '#b84d5c',
  'energy-power': '#b05c2e',
  'tax-fiscal': '#4a6fa5',
  'crime-justice': '#6b4c7a',
  'immigration': '#2f7579',
  'family-income': '#9e5c36',
  'environment-rural': '#487448',
  'maori-affairs': '#a15c7a',
}

const FALLBACK = '#8a8378'

/** Colour for a cluster id; grey if the id is unknown. */
export function clusterColour(clusterId: string): string {
  return CLUSTER_COLOURS[clusterId] ?? FALLBACK
}
