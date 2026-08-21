/**
 * The "# extrapolated:" convention for NZ 2026 policy specs.
 *
 * A spec marks a step it inferred rather than read by putting a comment on the
 * line directly above it. Gurki keeps comments per scenario with their line
 * numbers, so the marker pairs with the step below it by arithmetic.
 *
 * Shared by the checker and the dataset generator.
 */

import type { GurkiDocument } from 'gurki'

export const EXTRAPOLATED_PREFIX = 'extrapolated:'

export type Scenario = GurkiDocument['scenarios'][number]

/** Step line number -> stated reason. Reason may be empty if the author omitted it. */
export function extrapolatedLines(scenario: Scenario): Map<number, string> {
  const marked = new Map<number, string>()

  for (const comment of scenario.comments ?? []) {
    const text = comment.text.trim()
    if (!text.toLowerCase().startsWith(EXTRAPOLATED_PREFIX)) {
      continue
    }
    marked.set(comment.line + 1, text.slice(EXTRAPOLATED_PREFIX.length).trim())
  }

  return marked
}

export type MarkerProblem = {
  /** The line the marker itself is on. */
  line: number
  code: 'orphan_extrapolated_marker' | 'extrapolated_without_reason'
}

/** Markers that do not sit above a step, or that give no reason. */
export function findMarkerProblems(document: GurkiDocument): MarkerProblem[] {
  const problems: MarkerProblem[] = []

  for (const scenario of document.scenarios) {
    const stepLines = new Set(scenario.steps.map((step) => step.line))

    for (const [stepLine, reason] of extrapolatedLines(scenario)) {
      if (!stepLines.has(stepLine)) {
        problems.push({ line: stepLine - 1, code: 'orphan_extrapolated_marker' })
        continue
      }
      if (reason.length === 0) {
        problems.push({ line: stepLine - 1, code: 'extrapolated_without_reason' })
      }
    }
  }

  return problems
}
