---
type: spec
id: vansterpartiet-var-politik-politik-a-o-klimat-derived
title: "2035 zero read as a system: a standing investment pulse on a compressed clock"
status: draft
updated: 2026-08-23
summary: Seven hundred billion over ten years is a public build-out whose yearly path is unpublished, while a 2035 zero sits earlier than most statutory Swedish paths, so later years cannot slip without breaking the date.
jurisdiction: SE
sources:
  - title: Klimatkrisen
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/klimat
tags:
  - climate
party: vansterpartiet
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-klimat.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-klimat
assumptions:
  - dividing 700 billion kronor evenly across 10 years is arithmetic, not a published annual profile
  - a 2035 zero leaves little slack if a parliament later slows the programme
  - a 450-krona national ticket shifts cost from the rider onto whoever now funds regional fares, unless new tax arrives
  - AP-fund fossil-free instructions can force sales into a thin market; pension risk is not priced on the policy
  - an EV bonus that excludes the dearest cars still needs a price cap that is not printed
sourceDigest: sha256-6876b95dcbc56cc2
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-klimat-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-1a67d368a68b65d3
---

# Our understanding

> The date is hard and the cash is a lump. A ten-year programme with no yearly split can bunch late, yet zero emissions by 2035 does not wait. The Sweden ticket caps the rider's fare; regions and the state then carry the rest. Pension funds told to go fossil-free sell into the same transition the budget is trying to finance.

System: A dated zero funded by an unprofiled lump

Scenario: The investment pulse is spent unevenly against a 2035 stop
Given 700 billion kronor is promised across 10 years
And the target is zero emissions by 2035
When a later year underspends
Then remaining years must overspend to keep the date
# extrapolated: 700 billion over 10 years is 70 billion a year if spent evenly, not a published annual figure
Output 70 billion kronor a year only under an even split
Outcome the climate clock, not the budget year, sets the pace
But a household on the Sweden ticket still pays 450 kronor a month while the rest of the fare sits with the public purse
Activates vansterpartiet-var-politik-politik-a-o-elpriset

Scenario: Pension funds and the EV bonus move private balance sheets
Given AP funds are to receive fossil-free instructions
And a new climate bonus is to cheapen ordinary electric cars but not the dearest
When those portfolio and bonus rules bite
Then fossil holdings must be sold and mid-market cars are subsidised
Outcome buyers of cheap electric cars gain; holders of the dearest cars get nothing
But pensioners carry any sale discount the funds take to exit fossil assets
Activates vansterpartiet-var-politik-politik-a-o-skattepolitik
