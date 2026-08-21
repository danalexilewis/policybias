---
type: spec
id: labour-solarsaver
title: "SolarSaver finance, subsidies and community batteries"
status: draft
updated: 2026-08-21
summary: Government-backed solar finance with no upfront cost, up to $3,000 kickstart subsidy, and a $30 million community battery fund over four years.
jurisdiction: NZ
sources:
  - title: Solar without the Upfront Cost
    url: https://www.labour.org.nz/solarsaver
tags:
  - energy
  - climate
  - cost-of-living
party: labour
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/labour/solarsaver.md
sourceDigest: "sha256-9de7372ece2acc96"
gaps:
  - interest rates on lines company and Ratepayer Assistance Scheme loans are not stated
  - kickstart subsidy income thresholds are not stated
  - community battery grant match rules beyond half funding up to $200,000 per project are not fully specified
  - regulatory changes for plug-in solar for renters are not detailed beyond fixing regulations
  - Gas Security fund repurposing legislative process is not stated
---

# What the page states

> Government-backed long-term low-interest finance lets households install solar with nothing to pay upfront and repayments below power bill savings. A kickstart subsidy helps low- and middle-income households, including renters with plug-in panels. A community battery fund supports neighbourhoods without rooftop panels.

System: SolarSaver

Scenario: A homeowner installs solar through SolarSaver
Given a typical solar and battery system costs around $20,000
When SolarSaver is delivered
Then Government-backed long-term low-interest finance with nothing to pay upfront
Output kickstart subsidy of up to $3,000 for low- and middle-income households
And $30 million community battery fund
And $160 million fully funded over four years
And $77 million for household subsidies over four years
And $22 million for EECA delivery over four years
And $20 million Crown underwrite for lines company loans
And $7 million to establish the Ratepayer Assistance Scheme
And $4 million for workforce coordination over four years
And repayments set below power bill savings
Outcome homeowners own the system from day one
Activates labour-apprenticeshipboost
