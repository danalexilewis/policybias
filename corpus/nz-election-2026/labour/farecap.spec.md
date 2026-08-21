---
type: spec
id: labour-farecap
title: "$20 weekly public transport fare cap"
status: draft
updated: 2026-08-21
summary: Weekly public transport fares capped at $20 in Auckland, Wellington and Christchurch and $10 elsewhere from 1 July 2027.
jurisdiction: NZ
sources:
  - title: Labour's $20 Public Transport Fare Cap
    url: https://www.labour.org.nz/farecap
tags:
  - transport
  - cost-of-living
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/farecap.md
sourceDigest: "sha256-0d9068c38ff16373"
gaps:
  - total fiscal cost of the cap is not stated
  - which Auckland, Wellington and Christchurch ferries are covered is not fully listed
  - how the seven-day tracking window aligns across regional fare systems is not stated
  - funding source beyond a small contribution from an existing transport fund is not quantified
  - regional savings figures vary by route and are averages only
---

# What the page states

> Weekly public transport fares are capped at $20 in Auckland, Wellington and Christchurch and $10 elsewhere from 1 July 2027. Once the cap is reached, further trips that week are free. Spending is tracked automatically over seven days with no new card or sign-up.

System: Public transport weekly fare cap

Scenario: A commuter reaches the weekly fare cap
Given public transport fares vary by region
When the fare cap is in place
Then once the cap is reached the rest of that week's trips are free
Output $20 weekly fare cap in Auckland, Wellington and Christchurch
And $10 weekly fare cap everywhere else
And average saving around $25 a week
And over $1,200 a year average saving
Outcome once the cap is reached the rest of that week's trips are free
