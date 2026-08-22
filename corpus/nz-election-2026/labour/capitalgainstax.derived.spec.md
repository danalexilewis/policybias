---
type: spec
id: labour-capitalgainstax-derived
title: "CGT read as a system: a standing health commitment funded by property turnover"
status: draft
updated: 2026-08-18
summary: A realisation-based tax defers while an asset is held, so a permanent spending commitment is funded by a cyclical stream.
jurisdiction: NZ
sources:
  - title: Capital Gains Tax
    url: https://www.labour.org.nz/capitalgainstax
  - title: Labour CGT policy document
    url: https://www.labour.org.nz/media/pfvguai5/labour-cgt.pdf
tags:
  - taxation
  - healthcare
party: labour
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/labour/capitalgainstax.md
derivesFrom: labour-capitalgainstax
assumptions:
  - a tax charged only on sale defers while an asset is held; this is the standard lock-in result, not a published claim
  - property turnover is cyclical, so revenue from realisations is cyclical too
  - the published $700 million a year is a forecast average across years that already print $100 million then $1,350 million, so the path is front-loaded in later years
  - the health commitment is standing and per-person, so a year below the average must be met from elsewhere or the service reduced
  - the incidence assumed here is on the owner at sale; the policy argues rents are set by supply and demand
sourceDigest: "sha256-6bc4a73d82f33c05"
---

# Our understanding

> A tax charged only on sale defers while an asset is held, so owners choose when the Crown receives revenue. Property turnover is cyclical, yet the health commitment is standing and per-person — a year below the forecast average must be met from elsewhere or the service reduced.

System: Capital gains tax on property as a revenue source for a standing health commitment

Scenario: An owner compares selling with holding after commencement
Given a tax charged only when a property is sold
And an owner holding a property with an unrealised post-commencement gain
When the owner compares selling now with holding
Then the liability is deferred for as long as the property is held
# extrapolated: 0 is arithmetic from the sale-only trigger, not a published figure
Output 0 tax collected while the property is held
Outcome an owner can choose when the Crown receives the revenue
But the Crown's receipts depend on decisions it does not control

Scenario: Property turnover falls while the health commitment stands
Given three free doctor's visits a year promised to every New Zealander
And a published forecast averaging $700 million a year, with $100 million in the first year and $1,350 million later
When property turnover falls through a downturn
Then revenue in that year can sit well below the $700 million average
Outcome the health spend must be met from another source or reduced
But patients carry the risk of a funding gap they had no part in creating
Activates labour-medicard

Scenario: Owners bring sales forward before commencement
Given no tax on any gain made before commencement
And a known commencement date
When owners with large accrued gains sell ahead of it
Then those gains leave the base permanently untaxed
Outcome the first years of revenue are lower than the stock of gains implies
But the health commitment begins before the revenue matures
