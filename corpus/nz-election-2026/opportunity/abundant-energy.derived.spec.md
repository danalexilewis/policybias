---
type: spec
id: opportunity-abundant-energy-derived
title: "Abundant Energy read as a system: a dividend diverted from the Crown, and a 2050 build that outlasts this term"
status: draft
updated: 2026-08-18
summary: Ring-fencing gentailer dividends moves about $500 million a year out of general revenue; the 30 GW target sits 24 years out, so this term's work is the scheme and the mergers, not the gigawatts.
jurisdiction: NZ
sources:
  - title: Abundant Energy
    url: https://www.opportunity.org.nz/abundant-energy
  - title: Abundant Energy policy
    url: https://cdn.opportunity.org.nz/documents/policy/Opportunity Policy - Abundant Energy.pdf
tags:
  - energy
  - climate
party: opportunity
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/abundant-energy.md
derivesFrom: opportunity-abundant-energy
assumptions:
  - diverting about $500 million a year of dividends is a cut to general Crown revenue unless another tax fills it; the policy says so, and we treat the land tax as the named backfill rather than a free lunch
  - a 2050 capacity target is a stock that accrues over decades; this term can stand up a scheme, not deliver the 30 GW
  - consolidating 29 distributors into 8 is a local-ownership and employment shock the policy does not cost
sourceDigest: "sha256-77c0e4e9da0936d8"
---

# Our understanding

> The policy states the $500 million dividend, the 30 GW by 2050, and that the dividend currently funds core Crown revenue. It does not cost the distributor mergers or say how many of the 30 GW land in the next term.

System: Gentailer dividends diverted, and a 2050 build

Scenario: The dividend is taken out of general revenue
Given about $500 million a year of government gentailer dividends now flowing to core Crown revenue
When that stream is ring-fenced for the energy plan
Then general revenue falls by about $500 million a year unless another tax replaces it
Outcome the energy plan has a named operating fund
But health, education and other core spend lose that dividend unless the land tax actually arrives
Activates opportunity-tax-reset

Scenario: This term versus 2050
Given a 30 GW target dated 2050
When this term's government stands up the capacity scheme and the mergers
Then the gigawatts are still mostly in the future
Outcome households may see loans, insulation and some new plant
But the $500 to $2,700 household saving is a completed-system figure, not a first-year bill
