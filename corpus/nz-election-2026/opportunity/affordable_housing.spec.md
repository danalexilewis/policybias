---
type: spec
id: opportunity-affordable-housing
title: "Land value tax plus a building boom to close an 80,000-home shortage"
status: draft
updated: 2026-08-21
summary: Use a land value tax to bring prices down, and a building boom — zoning, tiny homes, underwriting, GST refunds — to cut an 80,000-home shortage.
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
sourceDigest: "sha256-1f518a892b703df3"
gaps:
  - how far prices must fall toward 3 times the median wage is not stated
  - the land value tax rate is not restated on this page
  - underwriting terms, volume and cost are not stated
  - GST refund amounts to councils are not stated
  - no timetable for the building boom
  - how "reputable" developments are chosen is not stated
---

# What the page states

> Houses have become severely unaffordable as prices pulled away from wages. A land value tax under the Tax Reset is meant to discourage land banking and encourage denser development. A building boom adds supply through simpler zoning, tiny homes, underwriting and GST refunds on high-standard builds.

System: House prices down and more homes built

Scenario: Prices are pulled down and supply is added
Given a home costing 7.3 times the median wage on average
And a house counted as affordable at 3 times the median wage
And an 80,000-home shortage
When a land value tax is introduced and a building boom is launched
Then land banking becomes less profitable and high-density development is encouraged
And tiny homes, sleepouts and extensions get a streamlined process
And a smaller, nationally consistent set of zones protects farmland, civic space and heritage while allowing housing at the right density
And mixed-use zoning allows extensions for work, community space and shops
And offsite builders who take on apprentices are supported
And reputable affordable developments are underwritten to take the bust out of the boom-bust cycle
And GST collected during construction of high-environmental-standard builds is refunded to councils
And low-cost loans reward quality
Outcome houses are treated as homes rather than investment vehicles
Activates opportunity-tax-reset
