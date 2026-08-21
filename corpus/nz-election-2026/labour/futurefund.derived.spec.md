---
type: spec
id: labour-futurefund-derived
title: "Future Fund read as a system: a wrapper until seed and assets are named"
status: draft
updated: 2026-08-21
summary: Without a stated seed amount or asset list the fund is a wrapper; independence from the Minister is governance, not size; Super Fund comparison is context, not this fund's budget.
jurisdiction: NZ
sources:
  - title: The New Zealand Future Fund
    url: https://www.labour.org.nz/futurefund
tags:
  - economy
  - infrastructure
party: labour
clusters:
  - tax-fiscal
money: no-figure
sourcePath: corpus/nz-election-2026/labour/futurefund.md
derivesFrom: labour-futurefund
assumptions:
  - a fund seeded with unnamed assets and an unnamed capital contribution cannot be sized from the policy, so we treat it as a wrapper until those are named
  - independent governance and a bar on ministerial direction of individual investments are control rules, not measures of scale
  - figures given for other funds, including the Super Fund, are comparative context and do not budget this fund
sourceDigest: "sha256-4adb6d9d6c8657ff"
---

# Our understanding

> The policy names an independently governed fund seeded with Crown assets and an initial capital contribution, separate from the Super Fund. It does not name the seed amount or the asset list. Independence is governance, not a published size, and Super Fund figures in the policy are context.

System: Future Fund as a wrapper without a stated seed

Scenario: The fund is created without a published seed
When the Future Fund is established
Then the seed amount and the seeded asset list remain unnamed
Outcome the fund is a wrapper until those are named
But its scale cannot be checked from the policy

Scenario: Independence from the Minister is set in governance
When the Guardians govern the Fund and the Minister cannot direct individual investments
Then that rule constrains who chooses deals
Outcome independence is a governance design, not a measure of the fund's size

Scenario: The Super Fund is cited for context
When the policy places the Future Fund beside the Super Fund
Then that comparison is context for New Zealand capital, not this fund's budget
Outcome the Future Fund still has no stated seed or asset list of its own
