---
type: spec
id: labour-medicard-derived
title: "Medicard read as a system: a standing per-person entitlement funded by realisation-based property tax"
status: draft
updated: 2026-08-21
summary: Three free visits a year are a permanent per-person spend funded by a tax that only arrives when property turns over, while the national GP rate and spare capacity stay unnamed.
jurisdiction: NZ
sources:
  - title: Free Doctor's Visits with the Medicard
    url: https://www.labour.org.nz/medicard
  - title: Free doctor's visits
    url: https://www.labour.org.nz/media/vtbneplb/labour-free-doctors-visits.pdf
tags:
  - healthcare
  - taxation
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/medicard.md
derivesFrom: labour-medicard
assumptions:
  - three free visits a year for every New Zealander is a standing entitlement; the policy does not say it is cut when revenue falls
  - the funding tax is charged only on sale, so receipts follow property turnover rather than the entitlement calendar
  - the printed cost path of $393.3 million then around $553 million a year is the spend side; it does not prove matching revenue in the same years
  - the Independent Pricing Authority sets a national rate the policy never names, so the fiscal exposure after free visits begin is open-ended in the policy
  - freeing appointments through triage and tech is a capacity claim, not a guarantee that every enrolled patient can book when demand rises
sourceDigest: "sha256-ec8fadc24803c00f"
---

# Our understanding

> The policy states three free visits, the Medicard rail, a cost path from $393.3 million to around $553 million a year, and funding from a property gains tax. It does not state that the entitlement still stands when realisations dip, that GP spare capacity is already there, or what rate the Independent Pricing Authority will set.

System: Medicard as a standing health entitlement funded by property turnover

Scenario: The entitlement stands while property turnover falls
Given three free doctor's visits a year for every New Zealander
And funding from a tax charged only when investment property is sold
When property turnover falls through a downturn
Then the free visits still stand as a per-person entitlement
Output total cost $393.3 million in 2027/28
And around $553 million a year once fully in place
Outcome the health spend must be met from another source or reduced
But patients carry the risk of a funding gap they had no part in creating
Activates labour-capitalgainstax

Scenario: The printed cost path matures before the Independent Pricing Authority's rate is known
Given an Independent Pricing Authority up and running when free visits begin
And a national GP funding rate the policy does not name
When free visits and independent pricing are both in place
Then practices are paid at a rate set after the entitlement begins
Output $553 million in 2028/29
And $548 million from 2030 and outyears
Outcome the Crown's outyears sit on a rate path the policy leaves open
But the entitlement volume is fixed while the unit price is not

Scenario: Demand rises while spare GP capacity is unnamed
Given one in six New Zealanders cannot afford to visit their doctor
And a plan to free up more than 4.5 million GP appointments a year
When more people book because visits are free
Then clinics face higher demand against a capacity plan the policy states in bundles
Outcome wait times can still rise if the freed appointments do not match new demand
But the policy does not name spare clinician hours beyond those bundled measures
