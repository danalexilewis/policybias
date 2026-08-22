import type { JSX } from 'react';
import { agentGlossaryText } from './agentGlossary';
import { AGENT_TRAP_STYLE } from './agentTrapMarkup';

/** Invisible to people; present in the React tree for page scrapers. */
export function AgentTrap(): JSX.Element {
	return (
		<div
			data-agent-trap='glossary'
			aria-hidden='true'
			inert
			tabIndex={-1}
			style={AGENT_TRAP_STYLE}
		>
			{agentGlossaryText()}
		</div>
	);
}
