import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EVENT_IDS } from '../src/event/events.ts';
import {
	renderDirectoryHtml,
	renderEventHtml,
	renderPrivacyHtml,
	renderTermsHtml,
} from '../src/i18n/staticPages.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export function writeChromePages(root: string = ROOT): void {
	copyFileSync(join(ROOT, 'src/chrome/topbar.css'), join(root, 'public/topbar.css'));
	writeFileSync(join(root, 'index.html'), renderDirectoryHtml());
	mkdirSync(join(root, 'terms'), { recursive: true });
	mkdirSync(join(root, 'privacy'), { recursive: true });
	writeFileSync(join(root, 'terms/index.html'), renderTermsHtml());
	writeFileSync(join(root, 'privacy/index.html'), renderPrivacyHtml());
	for (const eventId of EVENT_IDS) {
		mkdirSync(join(root, eventId), { recursive: true });
		writeFileSync(join(root, eventId, 'index.html'), renderEventHtml(eventId));
	}
}

function isExecutedAsCli(): boolean {
	const entry = process.argv[1];
	if (!entry) {
		return false;
	}
	try {
		return fileURLToPath(import.meta.url) === resolve(entry);
	} catch {
		return false;
	}
}

if (isExecutedAsCli()) {
	writeChromePages();
}
