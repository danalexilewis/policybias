import { EVENT_IDS, eventPath, eventStatus, type Lang } from '../event/events';
import { withLangQuery } from './href';
import { dictionaryFor, SITE_LANGS, statusUiKey, translate, type UiKey } from './messages';

const CONTACT_HREF = 'https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e';
const LICENSE_HREF = 'https://github.com/danalexilewis/policybias/blob/main/LICENSE';

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

const CARET_ICON =
	'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CHECK_ICON =
	'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function langUiKey(code: Lang): UiKey {
	if (code === 'sv') {
		return 'langSv';
	}
	if (code === 'mi') {
		return 'langMi';
	}
	return 'langEn';
}

function langPicker(path: string): string {
	const items = SITE_LANGS.map((code) => {
		const href = withLangQuery(path, code, 'en');
		const label = translate('en', langUiKey(code));
		return `<a class="lang-picker__item lang-link" role="option" data-lang="${code}" href="${href}"><span>${escapeHtml(label)}</span><span class="lang-picker__check" aria-hidden="true">${CHECK_ICON}</span></a>`;
	}).join('');
	return `<details class="lang-picker">
            <summary class="lang-picker__trigger" aria-label="${escapeHtml(translate('en', 'language'))}" data-ui-aria="language">
              <span class="lang-picker__full" data-lang-full>${escapeHtml(translate('en', 'langEn'))}</span>
              <span class="lang-picker__code" data-lang-code>EN</span>
              <span class="lang-picker__icon" aria-hidden="true">${CARET_ICON}</span>
            </summary>
            <div class="lang-picker__menu" role="listbox">
              ${items}
            </div>
          </details>`;
}

function shell(args: {
	titleKey: UiKey;
	path: string;
	ariaKey: UiKey;
	body: string;
	pageClass?: string;
	windowClass?: string;
}): string {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title data-ui="${args.titleKey}">${escapeHtml(translate('en', args.titleKey))}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#fffbe6" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;700&family=IBM+Plex+Mono:wght@500;600&family=Source+Serif+4:opsz,wght@8..60,400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/directory.css" />
  </head>
  <body>
    <header class="topbar">
      ${langPicker(args.path)}
    </header>
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
      ${ui('encodedIn')} <a href="https://gurki.nz">Gurki</a>
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
	});
}

export function renderTermsHtml(): string {
	const body = `<h1 data-ui="termsTitle">${escapeHtml(translate('en', 'termsTitle'))}</h1>
          <p data-ui="termsP1">${escapeHtml(translate('en', 'termsP1'))}</p>
          <p data-ui="termsP2">${escapeHtml(translate('en', 'termsP2'))}</p>
          <p><a href="${LICENSE_HREF}">MIT</a></p>
          <p data-ui="termsP3">${escapeHtml(translate('en', 'termsP3'))}</p>
          <p data-ui="termsP4">${escapeHtml(translate('en', 'termsP4'))}</p>
          <p data-ui="termsP5">${escapeHtml(translate('en', 'termsP5'))}</p>`;

	return shell({
		titleKey: 'termsTitle',
		path: '/terms/',
		ariaKey: 'termsTitle',
		body,
		pageClass: 'desktop--page',
	});
}

export function renderPrivacyHtml(): string {
	const body = `<h1 data-ui="privacyTitle">${escapeHtml(translate('en', 'privacyTitle'))}</h1>
          <p data-ui="privacyP1">${escapeHtml(translate('en', 'privacyP1'))}</p>
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
	});
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
