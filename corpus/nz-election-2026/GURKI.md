# NZ 2026 party policy as Gurki specs

Two Gurki specs per party policy page: what the party stated, and our understanding of it.

This is **stage 5** of the pipeline in the [dump plan](https://github.com/danalexilewis/gurki/blob/main/plans/2026-08-18-nz-party-policy-dump.md). Stage 1 crawled the pages into `corpus/nz-election-2026/`, stage 3 tagged them, stage 4 reduced them into [`_analysis/`](_analysis/) notes and a [published report](https://github.com/danalexilewis/gurki/blob/main/plans/2026-08-18-nz-2026-policy-reduce-report.md). This tree goes back to the **original pages** and models each one on its own terms.

Plan: [NZ 2026 policy as Gurki cards](https://github.com/danalexilewis/gurki/blob/main/plans/2026-08-18-nz-2026-policy-gurki-cards.md).

## Why do this

Party policy prose is written to be agreeable. Gurki is written to be checkable. Forcing a policy page into `Given` / `When` / `Then` / `Output` / `Outcome` asks questions the page usually does not answer: what already exists, what exactly changes, who receives what, and what is different afterwards.

Each card is that party's claim about the current state and about the intervention. Parties do not start from the same reports. Do not normalise Given to a shared Treasury or Statistics NZ baseline. Write the status quo the page itself states. If it states none, write no Given and record that in `gaps`.

So the interesting products of this tree are not the specs. They are the **gaps** — what the page never settles — and the **derived specs**, where we say what we think follows. Both are recorded as data, countable and comparable across parties.

## The stated / derived split

Every page gets a **stated spec**. Only what the party says goes in it. If the page does not say a thing, it is not there.

Most pages also get a **derived spec**: our understanding of the same policy. This is where the economics goes — incentives, timing, incidence, who carries the risk. The title still names it as a reading. The card labels the face Our understanding. The note states the finding, and is never presented as the party's claim.

```text
labour/capitalgainstax.spec.md            # Labour's claim
labour/capitalgainstax.derived.spec.md    # our understanding of it
```

Two files instead of markers inside one file, because:

- The stated spec can then be checked hard. Every figure in it must be on the page, and `pnpm check:policy` enforces that on every step, not just Outputs.
- A reader can be shown one, the other, or the difference. The card canvas toggles between them.
- `gurki compare` already prints the difference by step kind, so the interpretation is visible without anyone writing prose about it:

```bash
pnpm gurki compare \
  corpus/nz-election-2026/labour/capitalgainstax.spec.md \
  corpus/nz-election-2026/labour/capitalgainstax.derived.spec.md
```

Write no derived spec when you have nothing to add beyond the page. An empty restatement is worse than an absence.

## This is not a voting guide, and not an endorsement

A stated spec is a party's claim, structured. A derived spec is our analysis and is labelled as such in its title and its `assumptions` list. The card labels that face Our understanding. Both point at the source with `sourcePath`, and the policy is the authority.

## Licence

Party policy text remains **party copyright**. It is not covered by this repository's MIT licence, and neither is anything in `corpus/nz-election-2026/`. Specs here paraphrase party pages, so the same caution applies. Publishing this material — including shipping it inside a web app — needs a licence decision first. See "Decisions" in the plan.

## Layout

```text
corpus/nz-election-2026/
  README.md                            # corpus envelope and pipeline
  GURKI.md                             # this file: authoring contract
  clusters.yaml                        # closed cluster vocabulary
  parties.yaml                         # party labels and canvas colours
  <party-id>/<slug>.md                 # crawled page (stage 1)
  <party-id>/<slug>.spec.md            # stated: the party's claim (stage 5)
  <party-id>/<slug>.derived.spec.md    # derived: our understanding (stage 5)
```

Party ids match the corpus: `act`, `green`, `labour`, `national`, `nz-first`, `opportunity`, `te-pati-maori`.

The spec filename matches its source page's filename, underscores included, so the pairing is mechanical and `pnpm check:policy` can find a page with no spec.

The `id` is the same slug with every run of non-alphanumeric characters turned into a single hyphen, because the Gurki frontmatter pattern rejects underscores. `green/manifesto_2026_energy.md` becomes `green/manifesto_2026_energy.spec.md` with `id: green-manifesto-2026-energy`, and its pair is `manifesto_2026_energy.derived.spec.md` with `id: green-manifesto-2026-energy-derived`. The checker computes the id it expects and tells you if yours differs.

## Scope

Model every page with `stance: intervention` in its frontmatter. That is 147 of the 199 dump pages.

Skip `stance: not-policy`. Those are hubs, navigation pages, delivery records, and empty PDF stubs. National's "So far, we have" pages read as figure-rich and are a record of this term, not a 2026 offer — modelling them as interventions would be wrong.

## Frontmatter

Stated spec:

```yaml
---
type: spec
id: labour-capitalgainstax
title: "Capital gains tax on property, ring-fenced to health"
status: draft
updated: 2026-08-18
summary: A 28% tax on commercial and residential investment property gains, with every dollar directed to health.
jurisdiction: NZ
sources:
  - title: Capital Gains Tax
    url: https://www.labour.org.nz/capitalgainstax
tags:
  - taxation
  - healthcare
party: labour
clusters:
  - tax-fiscal
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/capitalgainstax.md
sourceDigest: ""
gaps:
  - gross annual revenue from the tax is not stated
  - the cost of valuing affected property at commencement is not stated
---
```

Derived spec: the same fields, except the title says it is a reading, `gaps` is replaced by `assumptions`, and `derivesFrom` names the stated spec.

```yaml
id: labour-capitalgainstax-derived
title: "CGT read as a system: a standing health commitment funded by property turnover"
derivesFrom: labour-capitalgainstax
assumptions:
  - a tax charged only on sale defers while an asset is held; this is the standard lock-in result, not a published claim
  - property turnover is cyclical, so revenue from realisations is cyclical too
```

| Field | Source | Notes |
| --- | --- | --- |
| `type` | fixed | Always `spec`. |
| `id` | you | `<party>-<slug>` with non-alphanumeric runs hyphenated, plus `-derived` on a derived spec. |
| `title` | you | Stated: what the policy does, with no party name. Derived: `"<policy> read as a system: <the finding>"`. |
| `status` | fixed | `draft` until a human reviews it. |
| `updated` | you | The date you wrote it. |
| `summary` | you | One sentence. On a derived spec, summarise the finding, not the policy. |
| `jurisdiction` | fixed | `NZ`. |
| `sources` | dump page | `title` and `sourceUrl` from the page's frontmatter. Add the PDF or press release if the page's claim actually lives there. |
| `tags` | dump page | Copy `tags` verbatim. Do not re-tag; stage 3 already did it. |
| `party` | directory | Must match the directory name. |
| `clusters` | you | One or more ids from [`clusters.yaml`](clusters.yaml). A derived spec carries the same clusters as its stated spec. |
| `money` | dump page | Copy `money` verbatim (`named-figure` or `no-figure`). |
| `sourcePath` | dump page | Repo-relative path to the page. Both specs in a pair point at the same page. |
| `sourceDigest` | script | Leave as `""`. `pnpm check:policy --fix` fills it, and then detects when the page changes underneath the spec. |
| `gaps` | you | **Stated specs only.** What Gurki forced you to ask that the page does not answer. |
| `assumptions` | you | **Derived specs only.** Every step of reasoning you relied on that the page does not supply. |
| `derivesFrom` | you | **Derived specs only.** The `id` of the stated spec. Must resolve. |

Everything from `party` down is not a Gurki language field. These ride in frontmatter `extensions`, which the schema preserves. Do not add keys beyond this list without changing the plan.

## Voice on the card

Title, summary, note, System, Scenario, steps, gaps and assumptions are shown to readers — including on anonymised cards and in the guess-the-party game. Write them in plain Kiwi English a neighbour could follow. British spelling. Short sentences. Observable facts, not campaign copy.

Do not name a party, a politician, or another spec's id in those fields. `party`, `id`, `derivesFrom`, `Activates` and source URLs stay as data; they are not card prose.

When names the event, not who published it: `When Medicard is rolled out`, not `When Labour rolls out the Medicard`. Scenario titles name the situation: `An investor sells a rental after commencement`, not `Labour introduces a capital gains tax`.

Keep official names (Pharmac, KiwiSaver, IRD) and te reo the page uses (whānau, whenua, Hauora Māori). Keep branded policy names that *are* the mechanism (Medicard, Baby Boost, Open Seat Rule). Those are the policy, not a party label.

## Body

One `System:` per spec. In a stated spec, one `Scenario:` is the norm; add more when the page proposes genuinely separate mechanisms, or when a press-release restatement of the same policy is folded in instead of living as its own card. In a derived spec, one scenario per mechanism you are analysing — often two or three, because that is where the reasoning lives.

```gherkin
System: Capital gains tax on property, ring-fenced to health

Scenario: An investor sells a residential investment property after commencement
Given a tax system with no general tax on capital gains
And one in six New Zealanders cannot afford to see a doctor
When the investor sells the property
Then only the gain made after commencement is taxed
Output 28% of the post-commencement gain paid in tax
And 100% of the revenue ring-fenced to health
And an average of $700 million a year raised across the forecast period
Outcome property profits are taxed like other business income
Activates labour-medicard
```

Step discipline, in the order they appear:

| Step | Stated spec | Derived spec |
| --- | --- | --- |
| `Given` | The page's own current-state claim, including any `$` or `%` it uses as a baseline. Do not import another party's figure. If the page is silent, write no `Given` and gap it. | The conditions your analysis turns on, including ones the page ignores. |
| `When` | The proposed event, without the numbers. | The event you are analysing, which may be one the party never mentions — an owner choosing to hold, a downturn arriving. |
| `Then` | The qualitative immediate consequence. No dollar amounts or percentages. | The immediate consequence you think follows. |
| `Output` | Every dollar amount and percentage the intervention proposes, quantity first. Rates and thresholds belong here. **Only figures the page states.** | Same rule. Arithmetic from a stated figure is allowed if marked. |
| `Outcome` | What the page says is now different, without restating the figures. Use `But` for strain or loss it admits. | What is now different for a person or institution. `But` is the cost they carry — who pays, who waits, who loses a choice. Do not write "stays unnamed" or "not in the policy": silence lives in `assumptions`. If the bill is open-ended, say that. Distinct scenarios on one card need distinct costs, not the same refrain. |
| `Activates` | Another card's `id` or scenario title, when the page ties two policies together. | Other cards your reasoning connects to. Do not point back at your own stated spec: `derivesFrom` already says that, and the canvas treats a pair as one card, so the edge would be dropped. |

Read [`.cursor/rules/gurki-spec-authoring.mdc`](../../.cursor/rules/gurki-spec-authoring.mdc) and the `gurki` skill before writing. Two rules catch people out:

- **Never hand-edit `System Outputs` / `System Outcomes`.** They are derived. Parsers skip what you type there and it vanishes on the next decode. Change the `Output` and `Outcome` steps instead.
- **Time in steps is elapsed duration**, not a calendar date. `1 July 2027` goes in the note blockquote, not in a step. Write `after commencement`, `in the first year`, `within three Budgets`.

## Figures

`pnpm check:policy` pulls every number-like token out of your steps and checks it against the source page and any other dump pages listed in `sources`.

- **Stated spec:** every figure, in every step, must be on the page. There is no escape hatch. If you cannot source it, it does not belong in a stated spec.
- **Derived spec:** the same, except a figure that is arithmetic from the page may carry a marker on the line above it, and must also appear in `assumptions`:

```gherkin
# extrapolated: 0 is arithmetic from the sale-only trigger, not a published figure
Output 0 tax collected while the property is held
```

A dollar amount or a percentage on the page is measurable. On a stated spec it belongs in `Given` (current state) or `Output` (the proposed change). Parking it in `When`, `Then` or `Outcome` hides it from System outputs and from the Has output filter. `pnpm check:policy` errors on that.

Do not invent a figure to complete a picture, in either kind of spec. If one page states a rate and another states a spend, do not infer the missing revenue by combining them. That belongs in `gaps`.

Open every spec with a note blockquote. A stated spec's note is a short, neutral paraphrase of the party's overview — what the policy is, in two to four sentences a neighbour could follow. Do not inventory figures, rates, or source provenance there (`The 4.9%, 12.2% and 13.3% budget shares… are all on the source page`). Those belong in `Given` and `Output`. Calendar dates (`1 July 2027`) may live in the note, because time in steps is elapsed duration. If the policy names no dollars, dates, or mechanism, flag that sketch in one short clause.

A derived spec's note is our understanding of the policy. State the finding. Do not explain the process: no "this is our reading", "those readings are ours", "we invent none", or "not the published claim". The inspect column already labels the face. Say "the policy", never "the page". Do not name a party, a politician, or a spec id in the note.

## Gaps and assumptions

`gaps` on the stated spec is the deliverable. Write what a reader would need to evaluate the policy and cannot get from the page:

```yaml
gaps:
  - gross annual revenue from the tax is not stated
  - no estimate of how many sales change behaviour to avoid the tax
  - what happens to the health commitment if revenue falls short is not stated
```

Write them as flat statements of absence, not as criticism. "No timetable is given" — not "irresponsibly vague". A page with fourteen gaps and one with none are both legitimate findings.

`assumptions` on the derived spec is the mirror: every piece of reasoning you supplied. If a reader disagrees with your card, this list should tell them exactly which step to argue with.

A page with no dollar amount and no percentage will produce a stated spec with no `Output` and a long `gaps` list. That is the correct result for that page. Do not pad it. A page that does print a `$` or a `%` must carry that figure in `Given` or `Output`.

## Commands

```bash
pnpm gurki lint corpus/nz-election-2026         # syntax, frontmatter, lifecycle order
pnpm check:policy                        # provenance, figures, clusters, pairing, coverage
pnpm check:policy --party green          # scope to one party while authoring
pnpm check:policy --fix                  # fill sourceDigest
pnpm check:policy --complete             # also fail on intervention pages with no stated spec
pnpm gurki compare <stated> <derived>    # show what we added
pnpm build:cards                         # spec tree -> public/cards.json
```

Finish a party with `pnpm gurki lint corpus/nz-election-2026/<party> && pnpm check:policy --party <id>`, then `pnpm check:policy --fix` to stamp digests. Zero errors, or it is not done.

An unresolved `Activates` warning is expected while the spec it points at is unwritten. It disappears when that spec lands, which makes it a useful list of cross-references still owed.
