# Policy Bias

Guess the party from the policy, not the colour.

This board is NZ 2026 party policy, encoded as Gurki cards. The site will live at [policybias.com/nz-election-2026](https://policybias.com/nz-election-2026).

The language is [Gurki](https://github.com/danalexilewis/gurki). This repo is the board: the corpus, the card build, and the canvas.

```bash
pnpm install
pnpm dev
```

`pnpm build:cards` turns `corpus/nz-election-2026/**/*.spec.md` into `public/cards.json`. Dev and production builds run that first.

Serve the Vite `dist/` directory at `/nz-election-2026/` on the host.

## Licence

Code is MIT. Party policy text, images, and PDFs in `corpus/` remain **party copyright** and are not covered by that licence.
