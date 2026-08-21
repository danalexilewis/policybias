---
type: spec
id: green-manifesto-2026-immigration-and-refugees-derived
title: "Immigration read as a system: a 5,000 quota by a named year, and employer leverage cut when workers can switch"
status: draft
updated: 2026-08-21
summary: The refugee quota rises progressively to 5,000 by the policy's named year without intermediate steps in the policy, while removing the 12-month stand-down and allowing employer switches weakens a single employer's hold.
jurisdiction: NZ
sources:
  - title: Immigration and Refugees
    url: https://www.greens.org.nz/manifesto_2026_immigration_and_refugees
tags:
  - immigration
party: green
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_immigration_and_refugees.md
derivesFrom: green-manifesto-2026-immigration-and-refugees
assumptions:
  - a progressive rise to 5,000 by the policy's named year (2029) still needs intermediate annual steps the policy does not publish
  - removing the 12-month stand-down and allowing employer switches cuts the leverage of a single employer over a work-visa holder
  - abolishing Acceptable Standards of Health removes a health-and-disability screen; resettlement and health costs then sit elsewhere in the system
  - residence pathways for people whose visas have expired are a regularisation path; numbers and criteria are not in the policy
sourceDigest: "sha256-8f5216c1b631f6a7"
---

# Our understanding

> The policy creates residence pathways including for expired visas, abolishes Acceptable Standards of Health, lets work-visa holders switch employers and removes the 12-month stand-down, clears family reunification backlogs, grounds immigration in Te Tiriti, and raises the refugee quota to 5,000 by 2029. It does not print intermediate quota steps or residence numbers. We treat the quota as a progressive target without a path in the policy, and employer switching as cutting single-employer leverage.

System: Quota path and weaker employer hold

Scenario: The refugee quota rises toward the named year
When the refugee quota is progressively increased
Then more people may be resettled under the quota each year on the way up
Output 5,000 annual refugee quota by the policy's named year
Outcome resettlement capacity is meant to grow to that ceiling
But intermediate yearly steps and resettlement funding increases are not quantified in the policy

Scenario: A work-visa holder can leave a bad employer
Given a 12-month stand-down that currently requires workers to leave Aotearoa between visas
When migrant work visa holders may switch employers
And the 12-month stand-down is removed
Then a worker is not locked to one employer or forced out for a year between visas
Output 12-month stand-down between visas removed
Outcome employer leverage over that worker falls
But open switching still needs Immigration New Zealand capacity to process changes quickly

Scenario: Health screens end and expired visas gain a residence path
When Acceptable Standards of Health requirements are abolished
And residence pathways open for long-term migrants including people whose visas have expired
Then health conditions and disability no longer block those pathways in the policy's terms
And people already living here without a current visa have a stated route to stay
Outcome discrimination by health status is removed from the named screen
But pathway criteria and volumes are not stated, so take-up cannot be sized from the policy
