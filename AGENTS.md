# AGENTS.md

## Cheap search with qmd

Prefer `qmd` over grepping `corpus/` or walking thousands of spec files.

- Keyword / cheap: `qmd search "<keywords>" -c policybias` (BM25, no LLM).
- Semantic when the phrasing is fuzzy: `qmd query "<topic phrase>" -c policybias`.
- Then fetch hits with `qmd get <file>` (or `qmd multi-get <pattern>`).

If `qmd` is not on PATH, grep the source folders and say you fell back. Do not skip retrieval.

After writing new markdown into an indexed folder this session, run `qmd update && qmd embed` before finishing.

## Two events, and they do not share vocabulary

`src/event/events.ts` is the source of truth. `nz-election-2026` is canonical English with te reo Māori siblings; `se-election-2026` is canonical Swedish with English siblings.

Scope every change to one event. Party lists, census categories, and demographic options belong to the event that uses them — Statistics Sweden origin classes are not NZ ethnicities, and NZ parties do not appear on Swedish screens. When a task names one event, do not touch the other's corpus or dictionaries.

## Corpus discipline

Crawled `<slug>.md` pages are the evidence. Specs are siblings beside them: `<slug>.spec.md` (what the party stated), `<slug>.derived.spec.md` (our reading), `<slug>.<lang>.spec.md` (translation). Never edit a crawled page body to make a spec pass.

The authoring contract is `corpus/nz-election-2026/GURKI.md`. Read it before writing or repairing a spec. Two traps worth repeating:

- Never hand-edit `System Outputs` / `System Outcomes` — they are derived and your text vanishes on the next decode.
- Never invent a figure, a date, or a name to complete a picture. Absence goes in `gaps` (stated) or `assumptions` (derived).

Proper nouns are researched, not coined. Use the official name — including official te reo names for ministries, and the previous official name where a body has none. If you cannot source it, say so instead of inventing one.

## Translation

`pnpm translate:specs --event <id> --to <lang>` drives the `translate-gurki` agent in `.cursor/agents/`; `--check` reports stale siblings without writing. Gurki keywords (`System`, `Scenario`, `Given`, `When`, `Then`, `Output`, `Outcome`, `Activates`) stay English, and provenance frontmatter (`sources`, `sourcePath`, `sourceDigest`, `derivesFrom`, ids) is left untouched.

Do not translate proper nouns — GitHub, Pharmac, KiwiSaver, branded policy names that _are_ the mechanism.

## Generated files — do not hand-edit

| Generated                                                            | Edit instead                                          | Built by            |
| -------------------------------------------------------------------- | ----------------------------------------------------- | ------------------- |
| `index.html`, `<event>/index.html`, `terms/`, `privacy/` (committed) | `src/i18n/staticPages.ts`, `src/i18n/{en,sv,mi}.json` | `pnpm build:chrome` |
| `public/cards.json`, `public/<event>/cards.<lang>.json` (gitignored) | the spec tree under `corpus/`                         | `pnpm build:cards`  |

`predev` and `prebuild` run both, so a hand-edit is silently overwritten. Run `pnpm build:chrome` before the static-page tests or they assert against stale HTML.

## Before you call it done

```bash
pnpm exec tsc --noEmit                 # pnpm build runs this first
pnpm test                              # vitest; scope with pnpm exec vitest run <files>
pnpm gurki lint corpus/<event>         # spec syntax, frontmatter, lifecycle order
pnpm check:policy:nz                   # or :se — provenance, figures, clusters, pairing
```

Zero errors, or it is not done. `pnpm check:policy --fix` stamps `sourceDigest` after a corpus change. An unresolved `Activates` warning is expected while the spec it points at is unwritten.

Prettier runs from Husky via lint-staged, so do not hand-align code or fight the formatter; `pnpm format` if you want it now.
