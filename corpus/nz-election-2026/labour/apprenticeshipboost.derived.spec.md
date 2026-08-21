---
type: spec
id: labour-apprenticeshipboost-derived
title: "Apprenticeship Boost read as a system: an employer subsidy whose cost rises with uptake"
status: draft
updated: 2026-08-21
summary: The monthly payment is an employer subsidy on the Crown; the toolbox grant is a one-off to the apprentice; the rising annual cost path implies uptake growth.
jurisdiction: NZ
sources:
  - title: Expanding Apprenticeship Boost
    url: https://www.labour.org.nz/apprenticeshipboost
tags:
  - employment
  - education
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/apprenticeshipboost.md
derivesFrom: labour-apprenticeshipboost
assumptions:
  - a payment paid to the employer to take on an apprentice is an employer subsidy; the Crown carries the fiscal incidence
  - a toolbox grant paid once to the apprentice is a one-off transfer, not a standing wage top-up
  - a forecast that rises from the first year to the last year of the path implies more uptake over time, as the policy links the rise to more people benefiting
sourceDigest: "sha256-0da4a8f281497913"
---

# Our understanding

> The policy states the monthly employer payment for two years, the toolbox grant, and a cost path that rises over four years. It does not label the payment as an employer subsidy with Crown incidence, or say that the rising path is uptake growth.

System: Apprenticeship Boost as employer subsidy and uptake-linked spend

Scenario: An employer receives the Boost payment
Given employer payments of $500 a month for two years
When an employer takes on an eligible apprentice
Then the payment goes to the employer
Output $500 a month employer payment for two years
Outcome the Crown carries the subsidy incidence
But the apprentice's take-home pay is not set by this payment alone

Scenario: A new apprentice receives the toolbox grant
When a new apprentice starts
Then a one-off grant lands with the apprentice
Output $1,000 toolbox grant for new apprentices
Outcome tools and kit costs are eased once
But the grant is not a standing income top-up

Scenario: The annual cost rises over the forecast
Given $21 million in 2027/28
And $71.5 million in 2030/31
And an average cost of $56.5 million a year over four years
When more apprentices and employers take up the scheme
Then the Crown's annual outlay rises along that path
Outcome the cost path implies uptake growth over the four years
