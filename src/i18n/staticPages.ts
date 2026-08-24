import { renderTopbarHtml } from '../chrome/renderTopbarHtml';
import {
	EVENT_IDS,
	EVENT_LANGS,
	eventPath,
	eventStatus,
	type EventId,
	type Lang,
} from '../event/events';
import { dictionaryFor, eventUiKey, statusUiKey, translate, type UiKey } from './messages';
import { openGraphTags } from './openGraph';

const CONTACT_HREF = 'https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e';
const LICENSE_HREF = 'https://github.com/danalexilewis/policybias/blob/main/LICENSE';
const GURKI_HREF = 'https://gurki.nz';

function ui(key: UiKey): string {
	return `<span data-ui="${key}">${escapeHtml(translate('en', key))}</span>`;
}

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

function shell(args: {
	titleKey: UiKey;
	path: string;
	ariaKey: UiKey;
	body: string;
	pageClass?: string;
	windowClass?: string;
	descriptionKey?: UiKey;
	github?: boolean;
}): string {
	const title = translate('en', args.titleKey);
	const description = translate('en', args.descriptionKey ?? 'ogDescription');
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title data-ui="${args.titleKey}">${escapeHtml(title)}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#fffbe6" />
    ${openGraphTags({ title, description, path: args.path, lang: 'en' })}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;700&family=IBM+Plex+Mono:wght@500;600&family=Source+Serif+4:opsz,wght@8..60,400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/directory.css" />
  </head>
  <body>
    ${renderTopbarHtml({ path: args.path, github: args.github })}
    <main class="desktop${args.pageClass ? ` ${args.pageClass}` : ''}">
      <section class="window${args.windowClass ? ` ${args.windowClass}` : ''}" aria-label="${escapeHtml(translate('en', args.ariaKey))}" data-ui-aria="${args.ariaKey}">
        <div class="title-bar">
          <p class="title"><a href="/">POLICYBIAS</a></p>
        </div>
        <div class="window-body${args.pageClass ? ' copy' : ''}">
          ${args.body}
        </div>
      </section>
    </main>
    <footer>
      ${ui('encodedIn')} <a href="${GURKI_HREF}">Gurki</a>
      ·
      <a href="/terms/">${ui('terms')}</a>
      ·
      <a href="/privacy/">${ui('privacy')}</a>
      ·
      <a href="${CONTACT_HREF}">${ui('contact')}</a>
    </footer>
    ${chromeApplyScript()}
  </body>
</html>
`;
}

export function renderDirectoryHtml(): string {
	const meta: Record<(typeof EVENT_IDS)[number], { created: string; updated: string }> = {
		'nz-election-2026': { created: '2026-08-21', updated: '2026-08-22' },
		'se-election-2026': { created: '2026-08-22', updated: '2026-08-22' },
	};
	const rows = EVENT_IDS.map((eventId) => {
		const status = eventStatus(eventId);
		const statusKey = statusUiKey(status);
		const dates = meta[eventId];
		return `<tr class="campaign-card">
                <td class="campaign-card__name"><a href="${eventPath(eventId)}">${eventId}</a></td>
                <td><span class="card-label">${ui('directoryCreated')}</span><time datetime="${dates.created}">${dates.created}</time></td>
                <td><span class="card-label">${ui('directoryUpdated')}</span><time datetime="${dates.updated}">${dates.updated}</time></td>
                <td class="event-status"><span class="card-label">${ui('directoryStatus')}</span><span data-ui="${statusKey}">${escapeHtml(translate('en', statusKey))}</span></td>
              </tr>`;
	}).join('\n              ');

	const body = `<table class="directory-table">
            <thead>
              <tr>
                <th>${ui('directoryName')}</th>
                <th>${ui('directoryCreated')}</th>
                <th>${ui('directoryUpdated')}</th>
                <th>${ui('directoryStatus')}</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>`;

	return shell({
		titleKey: 'directoryAria',
		path: '/',
		ariaKey: 'directoryAria',
		body,
		windowClass: 'window--directory',
		github: true,
	});
}

export function renderTermsHtml(): string {
	const body = `<h1 data-ui="termsTitle">${escapeHtml(translate('en', 'termsTitle'))}</h1>
          <p data-ui="termsP1">${escapeHtml(translate('en', 'termsP1'))}</p>
          <p data-ui="termsMission">${escapeHtml(translate('en', 'termsMission'))}</p>
          <p data-ui="termsCards">${escapeHtml(translate('en', 'termsCards'))}</p>
          <p>${ui('termsGurkiBefore')}<a href="${GURKI_HREF}">Gurki</a>${ui('termsGurkiAfter')}</p>
          <p data-ui="termsAi">${escapeHtml(translate('en', 'termsAi'))}</p>
          <p>${ui('termsAmend')}
            <a href="${CONTACT_HREF}" data-ui="getInTouch">${escapeHtml(translate('en', 'getInTouch'))}</a>${ui('termsAmendTail')}
          </p>
          <p data-ui="termsP4">${escapeHtml(translate('en', 'termsP4'))}</p>
          <p data-ui="termsP5">${escapeHtml(translate('en', 'termsP5'))}</p>
          <p>${ui('termsLicense')}
            <a href="${LICENSE_HREF}" data-ui="termsMit">${escapeHtml(translate('en', 'termsMit'))}</a>.
          </p>
          <p data-ui="termsCopyright">${escapeHtml(translate('en', 'termsCopyright'))}</p>`;

	return shell({
		titleKey: 'termsTitle',
		path: '/terms/',
		ariaKey: 'termsTitle',
		body,
		pageClass: 'desktop--page',
		descriptionKey: 'termsP1',
	});
}

export function renderPrivacyHtml(): string {
	const body = `<h1 data-ui="privacyTitle">${escapeHtml(translate('en', 'privacyTitle'))}</h1>
          <p data-ui="privacyP1">${escapeHtml(translate('en', 'privacyP1'))}</p>
          <p data-ui="privacyTrackers">${escapeHtml(translate('en', 'privacyTrackers'))}</p>
          <p data-ui="privacyP2">${escapeHtml(translate('en', 'privacyP2'))}</p>
          <p data-ui="privacyP3">${escapeHtml(translate('en', 'privacyP3'))}</p>
          <p data-ui="privacyP4">${escapeHtml(translate('en', 'privacyP4'))}</p>
          <p>${ui('privacyP5')}
            <a href="${CONTACT_HREF}" data-ui="getInTouch">${escapeHtml(translate('en', 'getInTouch'))}</a>.
          </p>`;

	return shell({
		titleKey: 'privacyTitle',
		path: '/privacy/',
		ariaKey: 'privacyTitle',
		body,
		pageClass: 'desktop--page',
		descriptionKey: 'privacyP1',
	});
}

export function renderEventHtml(eventId: EventId): string {
	const lang = EVENT_LANGS[eventId].canonical;
	const event = translate(lang, eventUiKey(eventId));
	const title = translate(lang, 'documentTitleBoard', { event });
	const description = translate(lang, 'ogDescription');
	return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${escapeHtml(title)}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#fffbe6" />
    ${openGraphTags({ title, description, path: eventPath(eventId), lang })}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;700&family=IBM+Plex+Mono:wght@500;600&family=Source+Serif+4:opsz,wght@8..60,400;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

export function chromeApplyScript(): string {
	const dicts: Record<Lang, Record<string, string>> = {
		en: dictionaryFor('en'),
		sv: dictionaryFor('sv'),
		mi: dictionaryFor('mi'),
	};
	return `<script>
(function () {
  var dicts = ${JSON.stringify(dicts)};
  var params = new URLSearchParams(window.location.search);
  var lang = params.get('lang');
  if (lang !== 'en' && lang !== 'sv' && lang !== 'mi') {
    lang = 'en';
  }
  var dict = dicts[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ui]').forEach(function (el) {
    var key = el.getAttribute('data-ui');
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-ui-aria]').forEach(function (el) {
    var key = el.getAttribute('data-ui-aria');
    if (key && dict[key]) {
      el.setAttribute('aria-label', dict[key]);
    }
  });
  var labels = { en: dict.langEn, sv: dict.langSv, mi: dict.langMi };
  var full = document.querySelector('[data-lang-full]');
  var code = document.querySelector('[data-lang-code]');
  if (full) full.textContent = labels[lang];
  if (code) code.textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-link').forEach(function (el) {
    if (el.getAttribute('data-lang') === lang) {
      el.setAttribute('aria-current', 'true');
    }
  });
  document.querySelectorAll('.home-link').forEach(function (el) {
    el.setAttribute('href', lang === 'en' ? '/' : '/?lang=' + lang);
  });
  document.querySelectorAll('.lang-picker').forEach(function (el) {
    document.addEventListener('pointerdown', function (event) {
      if (!el.contains(event.target)) {
        el.removeAttribute('open');
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        el.removeAttribute('open');
      }
    });
  });
})();
</script>`;
}
