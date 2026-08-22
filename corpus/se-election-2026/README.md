# SE 2026 party policy corpus

Primary-source Markdown dump of party policy pages for the 13 September 2026 Swedish general election (Riksdagsval). This tree is a **research corpus**, not Gurki example material.

Liberalerna is a sitting Riksdag party with a full policy tree and is contesting the 13 September 2026 election. August 2026 Verian and Novus both put it at 1.9%, under the 4% threshold. It stays in the corpus.

## Licence

Party policy text, images, and PDFs remain **party copyright**. They are **not** licensed under this repository's MIT licence. Each dumped page carries `licenseNote: "Party copyright; not Gurki MIT"` in front matter.

## Not Gurki specs

Dump pages in this tree are **never** given `type: spec` in front matter. They are always `type: crawled-page`.

Stage 5 Gurki specs live **alongside** the pages they model, as sibling files:

```text
centerpartiet/centerpartiets-politik-....md              # crawled page
centerpartiet/centerpartiets-politik-....spec.md         # stated spec
centerpartiet/centerpartiets-politik-....derived.spec.md # derived spec
```

The dump script writes only plain `.md` pages and never touches `*.spec.md`. Authoring contract: [`../nz-election-2026/GURKI.md`](../nz-election-2026/GURKI.md).

## Layout

```text
corpus/se-election-2026/
  README.md                 # this file
  clusters.yaml             # canvas cluster vocabulary for specs
  topics.yaml               # closed dump-page tag vocabulary (stage 3)
  parties.yaml              # party labels and canvas colours
  _seeds/<party-id>.yaml    # crawl contract (stage 0)
  <party-id>/<slug>.md      # crawled pages (stage 1; written by dump script)
  <party-id>/<slug>.spec.md # Gurki stated specs (stage 5; authored)
  <party-id>/assets/        # local images/PDFs (gitignored)
```

Party ids: `centerpartiet`, `kristdemokraterna`, `liberalerna`, `miljopartiet`, `moderaterna`, `socialdemokraterna`, `sverigedemokraterna`, `vansterpartiet`.

`pnpm dump:party-policy --event se-election-2026` reads `_seeds/*.yaml` and writes Markdown only under `corpus/se-election-2026/<party-id>/`. Incremental skips (body `contentDigest`, sitemap `sourceLastmod`) are defined in [`../CRAWL.md`](../CRAWL.md). `pnpm dump:party-policy --reprocess` re-strips donate/nav/share chrome from existing dump files without fetching.

## Dump envelope

Field names, incremental skip rules, and operator commands: [`../CRAWL.md`](../CRAWL.md).

Stage 3 fills dump `tags` from [`topics.yaml`](topics.yaml) (not canvas cluster ids), `stance` (`intervention` or `not-policy`), and `money` (`named-figure` or `no-figure`). Spec `clusters:` still use [`clusters.yaml`](clusters.yaml). Ingest leaves catalogue fields empty; recrawl preserves filled values.

## Pipeline stages

| Stage | What | Output |
| --- | --- | --- |
| **0 Contract** | Seeds, envelope, gitignore | `_seeds/*.yaml`, this README, [`../CRAWL.md`](../CRAWL.md) |
| **1 Ingest** | Crawl party sites → Markdown + local assets | `<party-id>/*.md`, `<party-id>/assets/` |
| **2 Index** | qmd collection (this machine) | searchable corpus |
| **3 Catalogue** | Tag/classify pages (front matter only) | filled `tags`, `stance`, `money` per [`topics.yaml`](topics.yaml) |
| **4 Reduce** | Intervention vs keep-the-lights-on | analysis notes |
| **5 Gurki** | Stated and derived `*.spec.md` alongside each intervention page | [`../nz-election-2026/GURKI.md`](../nz-election-2026/GURKI.md) |

Stages 0–1 are mechanical ingest per [`../CRAWL.md`](../CRAWL.md). Stages 3–5 are analysis and spec authoring. `pnpm check:policy --event se-election-2026` verifies each spec against its page and fails when a page changes underneath one.
