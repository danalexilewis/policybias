---
type: spec
id: nz-first-the-kiwi-kids-grant-derived
title: "Kiwi Kids Grant read as a system: three children funded, a fourth gets none, and the birth-rate response is unnamed"
status: draft
updated: 2026-08-21
summary: The grant caps at the first three children and stops after three years each, so a fourth child receives nothing while the birth-rate claim cannot be sized without a response estimate.
jurisdiction: NZ
sources:
  - title: The 'Kiwi Kids Grant'
    url: https://www.nzfirst.nz/the_kiwi_kids_grant
tags:
  - social-welfare
  - cost-of-living
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/the_kiwi_kids_grant.md
derivesFrom: nz-first-the-kiwi-kids-grant
assumptions:
  - capping the grant at the first three children means a fourth child is outside the transfer by design; that reading follows from the stated limit, not from an explicit exclusion clause
  - a demography claim aimed at raising the birthrate needs a birth-rate response to be checkable; the policy gives none, so the demography outcome stays unproven on this policy
  - citizen-parent eligibility excludes households where neither parent is a New Zealand citizen, even when the child is born here
  - the $400 million third-year cost is a point estimate once the full cycle is established, not a path of births responding to the grant
sourceDigest: "sha256-a9b5c4aa45f6a2e0"
---

# Our understanding

> The Kiwi Kids Grant pays $5000 a year for three years on the first three children only, for citizen parents, with a $400 million third-year cost — but a fourth child receives nothing and no birth-rate response is estimated.

System: Kiwi Kids Grant as a capped, time-limited transfer

Scenario: A family has a fourth child after the grant is running
Given a grant paid only for each of the first, second and third child
And $5000 a year for the first three years of each qualifying child
When a fourth child is born
Then that child sits outside the grant
# extrapolated: 0 follows from the first-three-children limit, not a published exclusion figure
Output 0 grant paid for the fourth child
Outcome the transfer stops at three children by design
But a household deciding on a larger family sees no grant on the next birth

Scenario: The birthrate claim is tested against an unnamed response
Given New Zealand's birthrate has fallen to 1.53 births per person
And citizen births fell from 52,506 in 2006 to 36,351 in 2025
And no estimate of how many extra births the grant produces
When the grant is introduced to encourage more children
Then the cost of raising the first three children falls for eligible parents
Outcome the barrier of cost is lowered for those who qualify
But taxpayers still fund the grant without knowing if births actually rise

Scenario: A household where neither parent is a New Zealand citizen
Given one parent must be a New Zealand citizen to be eligible
When a child is born to parents who are not citizens
Then the household does not receive the grant
Outcome the transfer is reserved for citizen parents
But non-citizen births, which the policy counts as rising, sit outside the incentive
