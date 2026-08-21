---
type: spec
id: labour-farecap-derived
title: "Fare cap read as a system: a standing subsidy with unpublished total cost"
status: draft
updated: 2026-08-21
summary: The weekly cap is a standing subsidy that makes extra trips free; the published averages are not a personal guarantee, and the Crown's total cost is not in the policy.
jurisdiction: NZ
sources:
  - title: Labour's $20 Public Transport Fare Cap
    url: https://www.labour.org.nz/farecap
tags:
  - transport
  - cost-of-living
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/farecap.md
derivesFrom: labour-farecap
assumptions:
  - once the cap is reached, every further trip that week is free to the rider, so the Crown meets the fare that would otherwise have been charged
  - high-use riders therefore cost more per week than light users who never hit the cap
  - the published average saving is a mean across riders and routes, not a floor for any one person
  - seven-day tracking only works if regional fare systems share a common window; the policy does not name how that alignment is done
  - a standing weekly subsidy without a published total fiscal cost leaves the Crown's exposure unstated
sourceDigest: "sha256-0d9068c38ff16373"
---

# Our understanding

> The policy states the weekly caps, that further trips are free once the cap is reached, seven-day automatic tracking, and average savings. It does not publish the total fiscal cost, treat the averages as a personal guarantee, or name how tracking aligns across regional systems.

System: Weekly fare cap as a standing subsidy

Scenario: A high-use rider keeps travelling after the cap
Given a weekly fare cap of $20 in Auckland, Wellington and Christchurch
And a weekly fare cap of $10 everywhere else
When the rider takes more trips after reaching the weekly cap
Then those further trips are free to the rider
Outcome the Crown meets the fare that would otherwise have been charged
But high-use riders cost the Crown more than riders who never hit the cap
And the total fiscal cost of the subsidy is not published

Scenario: A rider checks the advertised average against their own week
Given an average saving around $25 a week
And over $1,200 a year as an average saving
When the rider's travel is lighter or shorter than the average used
Then their saving can sit below those averages
Outcome the averages are a guide across riders and routes, not a personal guarantee

Scenario: Spending is tracked over a seven-day window
When fare spending is tracked automatically over seven days
Then the cap depends on that window lining up across regional systems
Outcome further trips that week are free once the cap is reached
But how the window aligns across unnamed regional fare systems is not stated
