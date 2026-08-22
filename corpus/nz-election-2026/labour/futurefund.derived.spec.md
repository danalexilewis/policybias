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

> An independently governed fund seeded with Crown assets is a wrapper until seed amount and asset list are named. Independence from ministerial direction is a governance rule, not a measure of scale, and Super Fund figures in the material are comparative context rather than this fund's budget.

System: Future Fund as a wrapper without a stated seed

Scenario: The fund is created without a published seed
When the Future Fund is established
Then the seed amount and the seeded asset list remain unnamed
Outcome the fund is a wrapper until those are named
But taxpayers cannot size the commitment until seed and assets are named

Scenario: Independence from the Minister is set in governance
When the Guardians govern the Fund and the Minister cannot direct individual investments
Then that rule constrains who chooses deals
Outcome independence is a governance design, not a measure of the fund's size

Scenario: The Super Fund is cited for context
When the policy places the Future Fund beside the Super Fund
Then that comparison is context for New Zealand capital, not this fund's budget
Outcome the Future Fund still has no stated seed or asset list of its own
