# NZ 2026 party policy corpus

Primary-source Markdown dump of party policy pages for the 2026 New Zealand general election: the six parliamentary parties plus Opportunity (registered, no current MPs). This tree is a **research corpus**, not Gurki example material.

## Licence

Party policy text, images, and PDFs remain **party copyright**. They are **not** licensed under this repository's MIT licence. Each dumped page carries `licenseNote: "Party copyright; not Gurki MIT"` in front matter.

## Not Gurki specs

Dump pages in this tree are **never** given `type: spec` in front matter. They are always `type: crawled-page`.

Stage 5 Gurki specs live **alongside** the pages they model, as sibling files:

```text
labour/capitalgainstax.md              # crawled page
labour/capitalgainstax.spec.md         # stated spec
labour/capitalgainstax.derived.spec.md # derived spec
```

The dump script writes only plain `.md` pages and never touches `*.spec.md`. Authoring contract: [`GURKI.md`](GURKI.md).

## Layout

```text
corpus/nz-election-2026/
  README.md                 # this file
  GURKI.md                  # stage 5 authoring contract
  clusters.yaml             # cluster vocabulary for specs
  parties.yaml              # party labels and canvas colours
  _seeds/<party-id>.yaml    # crawl contract (stage 0)
  <party-id>/<slug>.md      # crawled pages (stage 1; written by dump script)
  <party-id>/<slug>.spec.md # Gurki stated specs (stage 5; authored)
  <party-id>/assets/        # local images/PDFs (gitignored)
  _analysis/                # reduction notes (stage 4 only)
```

Party ids: `act`, `green`, `labour`, `national`, `nz-first`, `opportunity`, `te-pati-maori`.

`pnpm dump:party-policy --event nz-election-2026` reads `_seeds/*.yaml` and writes Markdown only under `corpus/nz-election-2026/<party-id>/`. Incremental skips (body `contentDigest`, sitemap `sourceLastmod`) are defined in [`../CRAWL.md`](../CRAWL.md). `pnpm dump:party-policy --reprocess` re-strips donate/nav/share chrome from existing dump files without fetching.

## Dump envelope

Field names, incremental skip rules, and operator commands: [`../CRAWL.md`](../CRAWL.md).

`tags` and `stance` stay empty at ingest; stage 3 fills them.

## Pipeline stages

| Stage | What | Output |
| --- | --- | --- |
| **0 Contract** | Seeds, envelope, gitignore | `_seeds/*.yaml`, this README, [`../CRAWL.md`](../CRAWL.md) |
| **1 Ingest** | Crawl party sites → Markdown + local assets | `<party-id>/*.md`, `<party-id>/assets/` |
| **2 Index** | qmd collection `nz-2026-parties` (this machine) | searchable corpus |
| **3 Catalogue** | Tag/classify pages (front matter only) | filled `tags`, `stance`, `money` |
| **4 Reduce** | Intervention vs keep-the-lights-on | `_analysis/<topic>.md` notes; published report in [gurki](https://github.com/danalexilewis/gurki/blob/main/plans/2026-08-18-nz-2026-policy-reduce-report.md) |
| **5 Gurki** | Stated and derived `*.spec.md` alongside each intervention page | [`GURKI.md`](GURKI.md) |

Stages 0–1 are mechanical ingest. Stage 2 is a local qmd collection named `nz-2026-parties` (not in git; lives in `~/.cache/qmd`). Query with:

```bash
qmd query "$(printf 'intent: NZ 2026 party policy on KiwiSaver\nlex: KiwiSaver\nvec: compulsory KiwiSaver contributions')" -c nz-2026-parties
```

After dump or `--reprocess` changes: `qmd update && qmd embed -c nz-2026-parties`.

Stages 3–4 are analysis. Stage 5 is under way: read [`GURKI.md`](GURKI.md), author specs next to the pages they model, and never edit crawled page bodies from a spec. `pnpm check:policy` verifies each spec against its page and fails when a page changes underneath one.

## Seeds

Each `_seeds/<party-id>.yaml` declares `id`, `name`, `origin`, `startUrls`, `allowPathPrefixes`, and `maxPages` (80). Prefixes are tightened per site so the crawler does not follow news, donate, or shop paths. Opportunity also lists `pdfOrigins` because its policy PDFs live on `cdn.opportunity.org.nz`.

Plan: [dump plan](https://github.com/danalexilewis/gurki/blob/main/plans/2026-08-18-nz-party-policy-dump.md)
