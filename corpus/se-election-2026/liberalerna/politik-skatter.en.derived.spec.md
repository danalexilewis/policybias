---
type: spec
id: liberalerna-politik-skatter-derived
title: "ISK ceiling read as a system: a priced perk beside an unpriced tax cut"
status: draft
updated: 2026-08-23
summary: The only numbered change is lifting tax-free ISK from 300000 to 500000 kronor; further cuts on work and a broad reform are direction without a rate.
jurisdiction: SE
sources:
  - title: Skatter – Liberalerna
    url: https://www.liberalerna.se/politik/skatter
tags:
  - taxation
derivesFrom: liberalerna-politik-skatter
party: liberalerna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-skatter.md
sourceDigest: sha256-ed10b2ad3e8f172f
assumptions:
  - a higher ISK ceiling helps those who already have room above 300000 kronor; it does not create savings for those with none
  - cutting tax on work without a rate leaves the school-care-safety bargain unpriced
  - a broad reform that removes exceptions will create losers among those who used the exceptions; the page names simplicity, not who pays
  - self-funded exit from a bad job or relationship needs a stock of savings, not only a higher legal ceiling
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-77c09228a3570ed6
translationOf: liberalerna-politik-skatter-derived
lang: en
---

# Our understanding

> The ISK lift is the only priced instrument. Work-tax cuts and a simpler code are a direction. School, care and safety still need revenue. A higher ceiling is worth most to the person who already sits near the old cap.

System: A numbered savings cap beside an unnumbered wage-tax cut

Scenario: A saver already near the old ISK cap
Given tax-free saving on an investment savings account up to 300 thousand kronor is already in place
When the cap rises
Then more of the same account can sit untaxed
Output tax-free ISK saving up to 500 thousand kronor
Outcome the extra room goes to people who already save at scale
But a household with no ISK stock gains no cash this year

Scenario: A worker is told work must pay while welfare still runs
Given taxes are needed to fund schools care and safety
When tax on work is cut further without a published rate
Then take-home pay is meant to rise
Outcome the work line is stronger only if the missing revenue is found elsewhere
But the page does not say which tax rises or which spend falls
