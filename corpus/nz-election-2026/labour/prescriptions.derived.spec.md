---
type: spec
id: labour-prescriptions-derived
title: "Free prescriptions read as a system: a standing annual spend on a cyclical health fund"
status: draft
updated: 2026-08-21
summary: Removing the prescription fee creates a standing $74.5 million a year cost; if capital gains receipts fund health and realisations dip, the entitlement still stands, and non-collection is context not a target.
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
derivesFrom: labour-prescriptions
assumptions:
  - removing the $5 fee is a standing entitlement for everyone entitled to free public healthcare; the policy does not say the spend is cut when revenue falls
  - funding is from a capital gains tax ring-fenced to health, so receipts follow property realisations while the entitlement calendar does not
  - 155,000 non-collections last year is a context figure in the policy, not a delivery target for how many will collect once the fee is gone
sourceDigest: "sha256-72f01fd6a271bce8"
---

# Our understanding

> Removing the prescription fee creates a standing $74.5 million annual entitlement, ring-fenced to cyclical capital gains receipts that follow property sales rather than the health calendar. The 155,000 who skipped medicine last year is context, not a delivery target for uptake once the fee is gone.

System: Free prescriptions as a standing spend on cyclical health revenue

Scenario: The fee comes off and the spend stands every year
Given a $5 prescription fee for most entitled to free public healthcare today
When the fee is removed
Then prescriptions stay free as a standing entitlement
Output $5 prescription fee removed
And $74.5 million a year estimated cost
Outcome every entitled person keeps the free medicine path
But the Crown or patients meet the shortfall when realisations dip in a given year
Activates labour-medicard

Scenario: Capital gains receipts fund health while realisations dip
Given free prescriptions funded by a capital gains tax ring-fenced to health
When property realisations fall in a year
Then the annual cost still stands as printed
Output $74.5 million a year estimated cost
Outcome the entitlement is not written as contingent on that year's sales
But patients and the Crown share a timing mismatch when sales slow and the entitlement does not
Activates labour-medicard

Scenario: Non-collection is read as context
Given 155,000 New Zealanders did not collect prescribed medicine because of cost last year
When free prescriptions begin
Then that figure is a baseline, not a delivery target
Outcome uptake may rise, fall, or stay put without the policy naming a goal
But the Crown carries the bill whether uptake rises, falls, or stays put
