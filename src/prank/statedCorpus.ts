/**
 * Stated policy pages and Gurki specs for event llms.txt files.
 * Derived specs, gaps, assumptions, and our understanding are omitted.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import type { EventId } from '../event/events';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');

export type StatedCorpusFile = {
	kind: 'spec' | 'page';
	title: string;
	body: string;
};

export type StatedPolicy = {
	id: string;
	party: string;
	slug: string;
	title: string;
	summary: string;
	spec: StatedCorpusFile;
	page: StatedCorpusFile | null;
};

type Frontmatter = Record<string, unknown>;

/** Drop inference fields so agents only see what the party stated. */
export function stripInference(markdown: string): string {
	if (!markdown.startsWith('---')) {
		return markdown;
	}

	const end = markdown.indexOf('\n---', 3);
	if (end < 0) {
		return markdown;
	}

	const rawFrontmatter = markdown.slice(3, end).trim();
	const body = markdown.slice(end + 4);
	let parsed: unknown;
	try {
		parsed = YAML.parse(rawFrontmatter);
	} catch {
		return markdown;
	}

	if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
		return markdown;
	}

	const frontmatter = { ...(parsed as Frontmatter) };
	delete frontmatter.gaps;
	delete frontmatter.assumptions;
	delete frontmatter.derivesFrom;

	return `---\n${YAML.stringify(frontmatter).trim()}\n---${body}`;
}

/** One stated policy per Gurki spec. Derived specs are excluded. */
export function listStatedPolicies(eventId: EventId): StatedPolicy[] {
	const corpusDir = join(REPO_ROOT, 'corpus', eventId);
	if (!existsSync(corpusDir)) {
		return [];
	}

	const policies: StatedPolicy[] = [];

	for (const party of listPartyIds(corpusDir)) {
		const directory = join(corpusDir, party);

		for (const file of readdirSync(directory).sort()) {
			if (!file.endsWith('.spec.md') || file.endsWith('.derived.spec.md')) {
				continue;
			}
			// Canonical stated specs only. Language siblings are `.mi.spec.md` / `.en.spec.md`.
			if (/\.(en|sv|mi)\.spec\.md$/.test(file)) {
				continue;
			}

			const specPath = join(directory, file);
			const specRaw = readFileSync(specPath, 'utf8');
			const specFrontmatter = parseFrontmatter(specRaw);
			const slug = basename(file, '.spec.md');
			const id = stringField(specFrontmatter, 'id') || `${party}-${slug}`.toLowerCase();

			const sourcePath = stringField(specFrontmatter, 'sourcePath');
			const siblingPage = join(directory, `${slug}.md`);
			const pageAbsolute = sourcePath
				? join(REPO_ROOT, sourcePath)
				: existsSync(siblingPage)
					? siblingPage
					: null;

			let page: StatedCorpusFile | null = null;
			if (pageAbsolute && existsSync(pageAbsolute)) {
				const pageRaw = readFileSync(pageAbsolute, 'utf8');
				const pageFrontmatter = parseFrontmatter(pageRaw);
				page = {
					kind: 'page',
					title: stringField(pageFrontmatter, 'title') || slug,
					body: pageRaw,
				};
			}

			policies.push({
				id,
				party,
				slug,
				title: stringField(specFrontmatter, 'title') || slug,
				summary: stringField(specFrontmatter, 'summary'),
				spec: {
					kind: 'spec',
					title: stringField(specFrontmatter, 'title') || slug,
					body: stripInference(specRaw),
				},
				page,
			});
		}
	}

	return policies;
}

export function statedPolicyById(eventId: EventId, specId: string): StatedPolicy | null {
	return listStatedPolicies(eventId).find((policy) => policy.id === specId) ?? null;
}

function listPartyIds(corpusDir: string): string[] {
	return readdirSync(corpusDir)
		.filter((name) => !name.startsWith('_') && !name.startsWith('.'))
		.filter((name) => statSync(join(corpusDir, name)).isDirectory())
		.sort();
}

function parseFrontmatter(markdown: string): Frontmatter {
	if (!markdown.startsWith('---')) {
		return {};
	}
	const end = markdown.indexOf('\n---', 3);
	if (end < 0) {
		return {};
	}
	try {
		const parsed = YAML.parse(markdown.slice(3, end).trim());
		if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
			return parsed as Frontmatter;
		}
	} catch {
		return {};
	}
	return {};
}

function stringField(frontmatter: Frontmatter, key: string): string {
	const value = frontmatter[key];
	return typeof value === 'string' ? value : '';
}
