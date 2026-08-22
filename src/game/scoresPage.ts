import { PARTY_LABELS } from '../card/anonymise'
import {
  eventLabel,
  eventLlmsPath,
  eventPath,
  eventScoresPath,
  type EventId,
} from '../event/events'
import { injectAgentTrap } from '../prank/agentTrapMarkup'
import { ALL_PARTIES } from './dealRound'
import {
  AGE_RANGE_OPTIONS,
  ETHNICITY_OPTIONS,
  INTENDED_VOTE_EXTRA_OPTIONS,
  partyScoreLabel,
  scoresByGuessedParty,
  type AgeRange,
  type Ethnicity,
  type FeltWealth,
  type IntendedVote,
  type ScoreRecord,
} from './scoreRecord'

function partiesFromRecords(records: ScoreRecord[]): string[] {
  const ids = new Set<string>()
  for (const record of records) {
    for (const guess of record.guesses ?? []) {
      ids.add(guess.guessedParty)
      ids.add(guess.targetParty)
    }
  }
  return ids.size > 0 ? [...ids].sort() : [...ALL_PARTIES]
}

export function scoresPageHtml(
  records: ScoreRecord[],
  eventId: EventId,
): string {
  const parties = partiesFromRecords(records)
  const columnCount = 6 + parties.length
  const newestFirst = [...records].reverse()
  const average =
    records.length === 0
      ? null
      : records.reduce((sum, record) => sum + record.correct / record.attempted, 0) /
        records.length

  const rows =
    newestFirst.length === 0
      ? `<tr><td colspan="${columnCount}">No scores yet.</td></tr>`
      : newestFirst.map((record) => scoreRow(record, parties)).join('')

  const summary =
    records.length === 0
      ? 'The public dataset is empty.'
      : `${records.length} game${records.length === 1 ? '' : 's'}. Average ${formatAverage(average)}.`

  const partyHeadings = parties.map(
    (party) => `<th>${escapeHtml(PARTY_LABELS[party] ?? party)}</th>`,
  ).join('')

  return injectAgentTrap(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Public scores — ${escapeHtml(eventLabel(eventId))}</title>
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
      <h1>Public scores</h1>
      <p class="lede">
        Anonymous session scores for this event. Each party column is how often
        that party was guessed, and how many of those guesses were right.
        Compare that with intended vote. No accounts, names, cookies, or IP addresses.
      </p>
      <p>${escapeHtml(summary)}
        <a href="${eventScoresPath(eventId)}?format=json">JSON</a> ·
        <a href="${eventScoresPath(eventId)}?format=csv">CSV</a>
      </p>
      <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
            ${partyHeadings}
            <th>Intended vote</th>
            <th>Age</th>
            <th>Ethnicity</th>
            <th>Felt wealth</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      </div>
    </main>
    <footer>
      <a href="${eventLlmsPath(eventId)}">llms.txt</a>
      ·
      <a href="/terms/">Terms</a>
      ·
      <a href="/privacy/">Privacy</a>
    </footer>
  </body>
</html>`,
    eventLlmsPath(eventId),
  )
}

function scoreRow(record: ScoreRecord, parties: string[]): string {
  const partyCells = scoresByGuessedParty(record.guesses, parties)
    .map((bucket) => {
      const label = partyScoreLabel(bucket)
      return `<td class="num">${escapeHtml(label === '' ? '—' : label)}</td>`
    })
    .join('')

  return `<tr>
    <td>${escapeHtml(record.recordedOn)}</td>
    <td class="num">${record.correct} / ${record.attempted}</td>
    ${partyCells}
    <td>${escapeHtml(voteLabel(record.intendedVote))}</td>
    <td>${escapeHtml(ageLabel(record.ageRange))}</td>
    <td>${escapeHtml(ethnicityLabel(record.ethnicities))}</td>
    <td>${escapeHtml(feltWealthLabel(record.feltWealth))}</td>
  </tr>`
}

function ageLabel(ageRange: AgeRange | null): string {
  if (!ageRange) {
    return '—'
  }
  return AGE_RANGE_OPTIONS.find((option) => option.id === ageRange)?.label ?? ageRange
}

function ethnicityLabel(ethnicities: Ethnicity[] | null): string {
  if (!ethnicities || ethnicities.length === 0) {
    return '—'
  }
  return ethnicities
    .map(
      (id) => ETHNICITY_OPTIONS.find((option) => option.id === id)?.label ?? id,
    )
    .join(', ')
}

function voteLabel(vote: IntendedVote | null): string {
  if (!vote) {
    return '—'
  }
  if (PARTY_LABELS[vote]) {
    return PARTY_LABELS[vote]
  }
  return (
    INTENDED_VOTE_EXTRA_OPTIONS.find((option) => option.id === vote)?.label ??
    vote
  )
}

function feltWealthLabel(feltWealth: FeltWealth | null): string {
  if (feltWealth === null) {
    return '—'
  }
  return String(feltWealth)
}

function formatAverage(average: number | null): string {
  if (average === null) {
    return '—'
  }
  return `${(average * 10).toFixed(1)} / 10`
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
