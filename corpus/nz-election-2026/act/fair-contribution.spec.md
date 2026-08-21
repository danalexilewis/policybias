---
type: spec
id: act-fair-contribution
title: "$6-a-day infrastructure surcharge on temporary work visas"
status: draft
updated: 2026-08-18
summary: Add a $6 daily surcharge on temporary work visas on top of existing charges, expected to raise about $80 million a year while staying cheaper than comparable Australian and UK visas.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/fair-contribution
tags:
  - immigration
  - infrastructure
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/fair-contribution.md
sourceDigest: "sha256-0f6efd430410ae38"
gaps:
  - how the surcharge revenue is spent on infrastructure is not stated
  - which temporary work visa categories are covered is not listed
  - no commencement date is stated
  - how $80 million a year is calculated from $6 a day is not shown on the page
  - whether dependents pay the surcharge is not stated
---

# What the page states

> The $6-a-day surcharge, $80 million expected annual revenue, three-million working-age population context, and comparison with Australia and the United Kingdom visa costs are all on the source page. No spending allocation or visa-category list is given.

System: Infrastructure contribution from temporary work visa holders

Scenario: A temporary worker enters New Zealand on a work visa
Given New Zealand's working-age population is about three million
And employers cannot find every nurse, software engineer or farm worker they need domestically
And temporary workers can use roads and public services from arrival before paying much New Zealand tax
When an infrastructure surcharge is added to temporary work visas on top of existing charges
Then temporary workers contribute to infrastructure from their first day in the country
Output $6 per day infrastructure surcharge on temporary work visas
And around $80 million a year expected revenue at that rate
Outcome comparable visas remain cheaper than those in Australia and the United Kingdom
