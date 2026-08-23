import type { Lang } from '../event/events';

export const SITE_ORIGIN = 'https://policybias.com';
export const OG_IMAGE_PATH = '/og.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

const LOCALES: Record<Lang, string> = {
	en: 'en_NZ',
	sv: 'sv_SE',
	mi: 'mi_NZ',
};

export type OpenGraphInput = {
	title: string;
	description: string;
	path: string;
	lang: Lang;
};

/** Absolute URL on the public site. */
export function siteUrl(path: string): string {
	const normalised = path.startsWith('/') ? path : `/${path}`;
	return `${SITE_ORIGIN}${normalised}`;
}

/** Meta tags crawlers read for link previews. */
export function openGraphTags(input: OpenGraphInput): string {
	const pageUrl = escapeAttr(siteUrl(input.path));
	const imageUrl = escapeAttr(siteUrl(OG_IMAGE_PATH));
	const title = escapeAttr(input.title);
	const description = escapeAttr(input.description);
	const locale = LOCALES[input.lang];
	return [
		`<meta name="description" content="${description}" />`,
		`<link rel="canonical" href="${pageUrl}" />`,
		`<meta property="og:type" content="website" />`,
		`<meta property="og:site_name" content="Policy Bias" />`,
		`<meta property="og:locale" content="${locale}" />`,
		`<meta property="og:title" content="${title}" />`,
		`<meta property="og:description" content="${description}" />`,
		`<meta property="og:url" content="${pageUrl}" />`,
		`<meta property="og:image" content="${imageUrl}" />`,
		`<meta property="og:image:type" content="image/png" />`,
		`<meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`,
		`<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`,
		`<meta property="og:image:alt" content="${title}" />`,
		`<meta name="twitter:card" content="summary_large_image" />`,
		`<meta name="twitter:title" content="${title}" />`,
		`<meta name="twitter:description" content="${description}" />`,
		`<meta name="twitter:image" content="${imageUrl}" />`,
	].join('\n    ');
}

function escapeAttr(value: string): string {
	return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}
