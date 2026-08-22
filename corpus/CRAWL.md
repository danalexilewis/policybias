# Party policy crawl standard

Shared contract for ingesting party policy pages into election corpora (`corpus/<event-id>/`). Both **NZ 2026** and **SE 2026** use this standard.

## Engine

- **[Crawlee](https://crawlee.dev/) `CheerioCrawler`** is the only crawl engine. HTML is fetched and parsed server-side; no browser automation.
- **Playwright is not used** and must not be added for this pipeline. If a party site is a JS shell that Cheerio cannot see, that is a separate decision — not a seed flag here.
- **`persistStorage: false`** — Crawlee must not write resume state under `storage/`. That directory is gitignored; crawls are idempotent from seeds plus on-disk dump files.
- Runs on **GitHub Actions** or a developer laptop. **Never on Vercel** (build/deploy only; no party-site crawling in production).

## Politeness

- **Identifiable user agent:** `PolicyBiasPartyPolicyDump/1.0 (local party policy research)` unless a seed overrides `userAgent`.
- **robots.txt** is respected. Start URLs disallowed for the user agent are logged and skipped.
- **Default rate:** one request per second (`1000 ms` between fetches). A seed may set `crawlDelayMs` to override.
- **`maxConcurrency: 1`** per party crawl.

## Seeds

Each event keeps crawl contracts in `corpus/<event-id>/_seeds/<party-id>.yaml`.

Required fields: `id`, `name`, `origin`, `startUrls`, `allowPathPrefixes`, `maxPages`.

Optional fields: `sitemapUrls`, `crawlDelayMs`, `userAgent`, `maxDepth`, `pdfOrigins`.

`startUrls` and sitemap URLs matching `allowPathPrefixes` are enqueued. Same-hostname links discovered during crawl are followed when they match prefixes and depth limits.

## Sitemap incremental skip

When a seed lists `sitemapUrls`, the dump fetches each sitemap and reads `<loc>` and `<lastmod>`.

- **`<loc>`** — URL is merged into the crawl queue (subject to `allowPathPrefixes`).
- **`<lastmod>`** — if a dump file already exists for that URL and its front matter `sourceLastmod` is **greater than or equal to** the sitemap `lastmod`, the URL is **not enqueued** for fetch (unless `--force`). `startUrls` are always enqueued regardless.

Without `lastmod`, without a stored page, or without a stored `sourceLastmod`, the URL is kept.

## Body incremental skip

On every fetched page the dump computes a **body digest** and compares it to the existing file.

- **`contentDigest`** — SHA-256 of the Markdown body (text after YAML front matter), formatted as `sha256-` plus the first 16 hexadecimal characters. This string must match `digestOf()` in `scripts/check-policy.ts` (same algorithm; the dump does not import the checker).
- If an on-disk page exists and its stored `contentDigest` equals the new body digest, the dump **skips the write** (no file touch, no PDF re-harvest from that HTML). Logged as `skip`.
- **`fetchedAt`** is updated **only when the body actually changes** (a real write). Unchanged pages keep their previous `fetchedAt`.
- **`--force`** ignores both digest and sitemap-`lastmod` skips and re-fetches / re-writes everything.

## Dump envelope

Every crawled page is a plain `.md` file with YAML front matter:

```yaml
type: crawled-page
party: <party-id>
title: <h1 or og:title>
sourceUrl: https://...
canonicalUrl: https://...
fetchedAt: 2026-08-18T00:00:00Z   # only bumped on body change
contentDigest: sha256-<16 hex chars>
sourceLastmod: 2026-08-15T12:00:00Z  # optional; from sitemap when present
contentType: html | pdf
via: party-site | navigator-citation
tags: []
stance:
licenseNote: "Party copyright; not Gurki MIT"
```

**Catalogue fields preserved:** on a write, existing `tags`, `stance`, and `money` from the previous file are merged in. Stage 3 fills them; the dump does not clear them on re-ingest.

**`via: navigator-citation`** is for optional parliament/press URLs harvested from Policy Navigator (NZ set B), not for Navigator GPT summaries.

## What the dump never touches

- **`*.spec.md`** — stated, derived, and translation specs are authored separately. The dump writes only plain `.md` crawled pages.
- **Spec bodies** — `pnpm check:policy` verifies specs against page digests; a body change makes specs `digest_stale` until a human re-reads the page.

## Operator commands

```bash
# Full event (all parties)
pnpm dump:party-policy --event nz-election-2026
pnpm dump:party-policy --event se-election-2026

# Single party
pnpm dump:party-policy --event nz-election-2026 --party labour
pnpm dump:party-policy --event se-election-2026 --party centerpartiet

# List URLs / robots outcome; write nothing
pnpm dump:party-policy --event nz-election-2026 --dry-run

# Ignore digest and sitemap-lastmod skips; full rewrite
pnpm dump:party-policy --event nz-election-2026 --force

# Re-strip donate/nav/share chrome from existing dump files on disk only (no fetch)
pnpm dump:party-policy --event nz-election-2026 --reprocess
```

Default `--event` is `nz-election-2026` when omitted.

After a **body change** (incremental or `--force`):

```bash
pnpm check:policy --event <event-id>
```

Do **not** run `pnpm check:policy --fix` until a human has reviewed the changed party text. Nightly or CI dumps must not auto-fix specs.

## Assets

Downloaded images and PDFs live under `<party-id>/assets/` and are **gitignored** (`corpus/**/assets/`). Markdown pages reference them with relative paths.

## Processing

HTML: Readability extraction with a Cheerio chrome-stripping fallback; Turndown to Markdown. PDF: `pdftotext` (requires Poppler on the runner).
