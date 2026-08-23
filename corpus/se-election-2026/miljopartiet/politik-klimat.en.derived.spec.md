---
type: spec
id: miljopartiet-politik-klimat-derived
title: "Climate policy read as a system: a carbon budget without a printed tonne cap, and a cheap travel card as the visible price"
status: draft
updated: 2026-08-23
summary: The binding instrument is a yearly carbon budget whose size is unnamed; the only printed household price is a monthly cap on a national public-transport card.
jurisdiction: SE
sources:
  - title: Klimatpolitik inför valet 2026
    url: https://www.mp.se/politik/klimat
tags:
  - climate
derivesFrom: miljopartiet-politik-klimat
party: miljopartiet
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-klimat.md
sourceDigest: sha256-9bfbc38dc6c8460a
assumptions:
  - a carbon budget only binds once the yearly tonne cap is set; without that number firms cannot know how fast they must cut
  - counting consumption emissions pulls imports into the target, which is a border-measurement problem the policy does not specify
  - ending fossil subsidies raises pump and heating prices unless the green rebate fully offsets them, and the rebate formula is unnamed
  - a national travel card with a monthly cap is a fare subsidy whose deficit sits with regions or the state, neither of which is assigned
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ef9b57b772e94835
translationOf: miljopartiet-politik-klimat-derived
lang: en
---

# Our understanding

> Speed comes from a carbon budget and from ending fossil subsidies. Fairness is supposed to come back as cheaper travel and a rural rebate. Only the travel-card cap is priced. Adaptation of schools and care homes is a building standard with no bill.

System: An unprinted budget and one printed fare cap

Scenario: A carbon budget is declared
When a yearly carbon budget is imposed and consumption is counted
Then the remaining emissions are meant to be rationed across the year
Outcome firms and agencies face a scarcity of allowed tonnes
But the scarcity cannot be traded or planned until the cap itself is published

Scenario: A national travel card is capped
When a Sweden card for public transport is sold under a monthly cap
Then the fare ceiling is the household-facing price of the climate offer
Outcome daily travel is meant to get cheaper relative to driving
But whoever absorbs the gap between the cap and today's fares is not named
