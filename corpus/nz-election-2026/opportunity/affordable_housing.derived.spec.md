---
type: spec
id: opportunity-affordable-housing-derived
title: "Housing read as a system: a price fall that sitting owners must absorb"
status: draft
updated: 2026-08-18
summary: Closing a 7.3-times-wage market toward 3 times the wage is a large capital loss for sitting owners; the building boom's underwriting is an uncosted Crown risk.
jurisdiction: NZ
sources:
  - title: Affordable Housing
    url: https://www.opportunity.org.nz/affordable_housing
tags:
  - housing
  - taxation
party: opportunity
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/affordable_housing.md
derivesFrom: opportunity-affordable-housing
assumptions:
  - moving from 7.3 times wages toward 3 times wages is a large fall in existing home values, which sitting owners absorb; the page wants prices to drop but does not quantify the wealth transfer
  - underwriting "the bust" is a contingent Crown liability whose size depends on how far prices fall
  - the land tax and the building boom have to arrive together; a tax without extra homes still leaves an 80,000-home shortage
sourceDigest: "sha256-1f518a892b703df3"
---

# Our reading

> This spec is our reading, not the published claim. The page states 7.3 times wages, 3 times as affordable, and an 80,000-home shortage, and it says prices have to drop. It does not measure the capital loss for sitting owners, or the Crown's underwriting exposure if the bust arrives. Those are ours.

System: A price fall sitting owners must absorb

Scenario: A recent buyer holds through the price fall
Given a market at 7.3 times the median wage
And a stated aim that prices must drop
When the land tax and the building boom take effect
Then the owner's equity moves with the price
Outcome buyers who are not yet in the market face a shorter queue
But sitting owners, especially those who bought when prices were highest, carry the loss the page is trying to create
Activates opportunity-tax-reset

Scenario: The Crown underwrites the bust
Given an 80,000-home shortage and a promise to underwrite reputable affordable developments
When a downturn hits during the boom
Then the Crown is on the hook for the "bust" it offered to take out
Outcome more homes can keep being built through the cycle
But the cost of that underwrite is not on the page
