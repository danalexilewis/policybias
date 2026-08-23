import {
	EVENT_LANGS,
	eventLabel,
	eventLangs,
	eventLlmsPath,
	eventPath,
	eventScoresPath,
	eventStatus,
	parseLang,
	type EventId,
	type Lang,
} from '../event/events';
import { eventPartyIds, eventPartyLabel } from '../event/eventConfig';
import { withLangQuery } from '../i18n/href';
import { eventUiKey, translate, type UiKey } from '../i18n/messages';
import { openGraphTags } from '../i18n/openGraph';
import { injectAgentTrap } from '../prank/agentTrapMarkup';
import { ageRangeLabel, ethnicityLabel, voteExtraLabel } from './censusOptions';
import {
	INTENDED_VOTE_EXTRA_IDS,
	partyScoreLabel,
	scoresByGuessedParty,
	type FeltWealth,
	type IntendedVote,
	type IntendedVoteExtra,
	type ScoreRecord,
} from './scoreRecord';

const CONTACT_HREF = 'https://app.eddy.works/start/e217d3c2-21bb-4866-acbe-599ec3e3a12e';

export function scoresPageLang(url: URL, eventId: EventId): Lang {
	const requested = parseLang(url.searchParams.get('lang'));
	const { canonical, available } = eventLangs(eventId);
	if (requested && available.includes(requested)) {
		return requested;
	}
	return canonical;
}

export function scoresPageHtml(
	records: ScoreRecord[],
	eventId: EventId,
	lang: Lang = EVENT_LANGS[eventId].canonical
): string {
	const parties = eventPartyIds(eventId);
	const columnCount = 6 + parties.length;
	const newestFirst = [...records].reverse();
	const average =
		records.length === 0
			? null
			: records.reduce((sum, record) => sum + record.correct / record.attempted, 0) /
				records.length;

	const t = (key: UiKey, vars?: Record<string, string | number>) => translate(lang, key, vars);
	const event = t(eventUiKey(eventId));

	const rows =
		newestFirst.length === 0
			? `<tr><td colspan="${columnCount}">${escapeHtml(t('scoresEmptyRow'))}</td></tr>`
			: newestFirst.map((record) => scoreRow(record, parties, eventId, lang)).join('');

	const summary =
		records.length === 0
			? t('scoresEmpty')
			: records.length === 1
				? t('scoresSummaryOne', { average: formatAverage(average) })
				: t('scoresSummary', {
						n: records.length,
						average: formatAverage(average),
					});

	const partyHeadings = parties
		.map((party) => `<th>${escapeHtml(eventPartyLabel(eventId, party, lang))}</th>`)
		.join('');

	return injectAgentTrap(
		`<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(t('scoresTitle', { event }))}</title>
    ${openGraphTags({
			title: t('scoresTitle', { event }),
			description: t('ogDescription'),
			path: eventScoresPath(eventId),
			lang,
		})}
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        color: #1a1a1a;
        background: #f4f1ea;
      }
      main { width: min(72rem, calc(100% - 2rem)); margin: 2rem auto 3rem; }
      p.kicker {
        margin: 0;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6b645c;
      }
      h1 { margin: 0.2rem 0 0; font-size: 1.7rem; }
      .lede { color: #6b645c; line-height: 1.5; }
      .table-wrap { overflow-x: auto; }
      table { width: 100%; border-collapse: collapse; margin-top: 1.25rem; }
      th, td {
        text-align: left;
        padding: 0.55rem 0.4rem;
        border-bottom: 1px solid #d8d2c8;
        vertical-align: top;
        white-space: nowrap;
      }
      th { font-size: 0.8rem; color: #6b645c; font-weight: 600; }
      .num { font-variant-numeric: tabular-nums; }
      a { color: inherit; }
      footer {
        width: min(72rem, calc(100% - 2rem));
        margin: 0 auto 2rem;
        font-size: 0.8rem;
        color: #6b645c;
      }
    </style>
  </head>
  <body>
    <main>
      <p class="kicker"><a href="${eventPath(eventId)}">${escapeHtml(eventLabel(eventId))}</a></p>
      <h1>${escapeHtml(t('publicScores'))}</h1>
      <p class="lede">${escapeHtml(t('scoresLede'))}</p>
      <p>${escapeHtml(summary)}
        <a href="${eventScoresPath(eventId)}?format=json">JSON</a> ·
        <a href="${eventScoresPath(eventId)}?format=csv">CSV</a>
      </p>
      <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(t('scoresDate'))}</th>
            <th>${escapeHtml(t('scoresTotal'))}</th>
            ${partyHeadings}
            <th>${escapeHtml(t('intendedVote'))}</th>
            <th>${escapeHtml(t('scoresAge'))}</th>
            <th>${escapeHtml(t('ethnicity'))}</th>
            <th>${escapeHtml(t('scoresFeltWealth'))}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      </div>
    </main>
    <footer>
      <a href="${eventLlmsPath(eventId)}">llms.txt</a>
      ·
      <a href="${withLangQuery('/terms/', lang, 'en')}">${escapeHtml(t('terms'))}</a>
      ·
      <a href="${withLangQuery('/privacy/', lang, 'en')}">${escapeHtml(t('privacy'))}</a>
      ·
      <a href="${CONTACT_HREF}">${escapeHtml(t('contact'))}</a>
    </footer>
  </body>
</html>`,
		eventLlmsPath(eventId)
	);
}

function scoreRow(record: ScoreRecord, parties: string[], eventId: EventId, lang: Lang): string {
	const partyCells = scoresByGuessedParty(record.guesses, parties)
		.map((bucket) => {
			const label = partyScoreLabel(bucket);
			return `<td class="num">${escapeHtml(label === '' ? '—' : label)}</td>`;
		})
		.join('');

	return `<tr>
    <td>${escapeHtml(record.recordedOn)}</td>
    <td class="num">${record.correct} / ${record.attempted}</td>
    ${partyCells}
    <td>${escapeHtml(voteLabel(record.intendedVote, eventId, lang))}</td>
    <td>${escapeHtml(ageRangeLabel(record.ageRange, lang) ?? '—')}</td>
    <td>${escapeHtml(ethnicityLabel(record.ethnicities, eventId, lang) ?? '—')}</td>
    <td>${escapeHtml(feltWealthLabel(record.feltWealth))}</td>
  </tr>`;
}

function voteLabel(vote: IntendedVote | null, eventId: EventId, lang: Lang): string {
	if (!vote) {
		return '—';
	}
	if (INTENDED_VOTE_EXTRA_IDS.includes(vote as IntendedVoteExtra)) {
		return voteExtraLabel(vote as IntendedVoteExtra, lang);
	}
	return eventPartyLabel(eventId, vote, lang);
}

function feltWealthLabel(feltWealth: FeltWealth | null): string {
	if (feltWealth === null) {
		return '—';
	}
	return String(feltWealth);
}

function formatAverage(average: number | null): string {
	if (average === null) {
		return '—';
	}
	return `${(average * 10).toFixed(1)} / 10`;
}

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}
