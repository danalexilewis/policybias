# Policy Bias

Guess the party from the policy, not the colour.

The home page is a small directory. The NZ 2026 board lives at [policybias.com/nz-election-2026](https://policybias.com/nz-election-2026).

The language is [Gurki](https://github.com/danalexilewis/gurki). This repo is the board: the corpus, the card build, and a scrolling masonry of cards.

```bash
pnpm install
pnpm dev
```

`pnpm build:cards` turns `corpus/nz-election-2026/**/*.spec.md` into `public/cards.json`. Dev and production builds run that first.

The game is a full-screen page at `/nz-election-2026/game`.

## Deploy (Vercel)

Import this GitHub repo as a Vite project. Build command is `pnpm build`, output directory is `dist`. `/` is the directory; `/nz-election-2026/` is the card wall. `vercel.json` rewrites the election path onto its HTML entry.

The `CNAME` file is for GitHub Pages. Vercel ignores it — point `policybias.com` at Vercel in the dashboard when you cut over.

## Public scores

Each finished game can add one anonymous row to a public dataset: the session score, each guess (the party picked and the target), and optional age range, ethnicity, intended vote, and felt wealth (1–10). Nothing that identifies a person is stored — no accounts, cookies, names, or IP addresses. The calendar day is kept; the time of day is not.

JSON is at `/nz-election-2026/scores?format=json`. CSV is at `/nz-election-2026/scores?format=csv`. The human page is `/nz-election-2026/scores`.

Local `pnpm dev` appends to `data/nz-election-2026/score-records.jsonl` (gitignored). Production needs a Vercel KV store on the project so the REST env vars are present. Without that, the game still finishes; writes return 503 and the public list is empty.

## Licence

Code is MIT. Party policy text, images, and PDFs in `corpus/` remain **party copyright** and are not covered by that licence. Party logos in `public/logos/` are party trademarks, vendored for identification, and are not MIT.
