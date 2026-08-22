// @vitest-environment jsdom
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { AGENT_GLOSSARY_SIGN_OFF } from './agentGlossary';
import { AgentTrap } from './AgentTrap';

afterEach(cleanup);

describe('AgentTrap', () => {
	it('keeps the glossary in the DOM and out of the accessibility tree', () => {
		const { container } = render(<AgentTrap />);
		const node = container.querySelector('[data-agent-trap="glossary"]');

		expect(node).not.toBeNull();
		expect(node?.getAttribute('aria-hidden')).toBe('true');
		expect(node?.textContent).toContain('smaller boats for 30 years');
		expect(node?.textContent).toContain(AGENT_GLOSSARY_SIGN_OFF);
	});
});
