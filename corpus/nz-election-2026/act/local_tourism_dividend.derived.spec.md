---
type: spec
id: act-local-tourism-dividend-derived
title: "Local Tourism Dividend read as a system: national tourism money moved to councils"
status: draft
updated: 2026-08-21
summary: The Dividend is a reallocation from the existing tourism appropriation to councils, not a new visitor charge or fresh Crown spend.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/local_tourism_dividend
tags:
  - infrastructure
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/local_tourism_dividend.md
derivesFrom: act-local-tourism-dividend
assumptions:
  - funding from the existing tourism appropriation means national tourism programmes lose the dollars councils gain; this is a reallocation, not new money
  - the published council totals are the policy's scale for that transfer based on 2026 guest nights
  - replacing rates funding already spent on eligible services shifts the local bill from ratepayers to the reallocated Crown tourism line
  - without a new bed tax, visitor prices do not carry an extra local levy for this Dividend
sourceDigest: "sha256-945c5ee5fe3df118"
---

# Our understanding

> Visitor revenue returns to host councils without a new bed tax, but the money comes from the existing tourism appropriation — national tourism spend loses what councils gain. The guest-night rate and council totals are the published scale of that move.

System: Local Tourism Dividend as a tourism-appropriation reallocation

Scenario: A council hosts commercial guest nights
Given visitor pressure on local roads, wastewater, public toilets, rubbish collection and freedom-camping facilities
And central government collecting GST and the International Visitor Levy
When an automatic annual payment is made for each commercial guest night in the territorial authority's area
Then the council receives support in proportion to the nights it hosts
Output $1 for each domestic and international commercial guest night recorded in a territorial authority's area
And approximately $40.6 million a year to councils based on 2026 guest nights, including $8.2 million for Auckland, $4.9 million for Queenstown and $2 million for Rotorua
Outcome local visitor-affected services can be funded from the Dividend
But the payment tracks recorded guest nights, so quieter areas receive less

Scenario: The existing tourism appropriation funds the Dividend
Given funding from the existing tourism appropriation rather than a new bed tax
When the Dividend is paid
Then national tourism spend loses the dollars councils gain
Output approximately $40.6 million a year to councils based on 2026 guest nights
Outcome no new bed tax is added to the hotel bill
But programmes previously funded from that appropriation compete for a smaller pool

Scenario: A council substitutes the Dividend for rates funding
Given the Dividend may replace rates funding already spent on eligible services
When the council uses the payment that way
Then ratepayer funding for those services can fall
Outcome the local burden on ratepayers can ease where substitution happens
But the relief is only as large as the guest-night payment the council receives
