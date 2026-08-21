---
type: spec
id: labour-prescriptions
title: "Free prescriptions from 1 July 2027"
status: draft
updated: 2026-08-21
summary: The $5 prescription fee removed for everyone entitled to free public healthcare, costing $74.5 million a year.
jurisdiction: NZ
sources:
  - title: Free Prescriptions Under Labour
    url: https://www.labour.org.nz/prescriptions
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/prescriptions.md
sourceDigest: "sha256-72f01fd6a271bce8"
gaps:
  - which medicines remain excluded from the public formulary is not stated
  - pharmacy dispensing fee treatment is not stated
  - funding beyond CGT ring-fence if revenue falls short is not stated
  - the 155,000 non-collection statistic is context; future uptake targets are not stated
---

# What the page states

> The prescription fee is removed for everyone entitled to free public healthcare from 1 July 2027. No forms or claiming back is required. Free prescriptions sit alongside Medicard entitlements.

System: Free prescriptions

Scenario: A New Zealander collects a prescription
Given a $5 prescription fee for most entitled to free public healthcare today
When the prescription fee is removed from 1 July 2027
Then prescriptions are free for every New Zealander entitled to free public healthcare
Output $5 prescription fee removed
And $74.5 million a year estimated cost
Outcome no forms and no claiming money back
Activates labour-medicard
