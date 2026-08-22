---
type: spec
id: national-paid-parental-leave-derived
title: "Paid parental leave read as a system: more weeks without a stated weekly income, shared leave splits the same pool"
status: draft
updated: 2026-08-21
summary: Leave length rises in Budget steps while the weekly rate is unpublished, so time is granted without a stated weekly income, and shared leave draws from the same per-child pool.
jurisdiction: NZ
sources:
  - title: Modernising Paid Parental Leave
    url: https://www.national.org.nz/paid-parental-leave
  - title: Paid Parental Leave policy document
    url: https://assets.national.org.nz/web/prod/Paid%20Parental%20Leave.pdf
tags:
  - social-welfare
  - employment
party: national
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/national/paid-parental-leave.md
derivesFrom: national-paid-parental-leave
assumptions:
  - the policy and PDF publish weeks and total cost but not a weekly dollar rate, so a household cannot read take-home income from this material alone
  - saying maximum weekly rates are unchanged still leaves the dollar amount unpublished in the policy
  - shared leave lets both parents draw at once, but the entitlement per child stays one pool of weeks
  - staging over three Budgets means parents whose entitlement starts earlier get fewer weeks than those who start later
sourceDigest: "sha256-2933f6dbec2d7033"
---

# Our understanding

> Leave length rises in Budget steps while the weekly dollar rate stays unpublished, so more calendar time is granted without a stated weekly income. Shared leave lets both parents draw at once, but the entitlement per child stays one pool of weeks.

System: Paid parental leave as more weeks without a stated weekly income

Scenario: A household budgets for a longer leave
Given paid parental leave rising from 26 weeks to 30 weeks over three Budgets
And no weekly payment rate printed in the policy
When the household plans income across the leave
Then they know how many weeks they can take
Output 30 weeks paid parental leave
And 27 weeks from the first Budget step
And 28 weeks from the second
Outcome more calendar time at home is granted in steps
But households budget on weeks alone until a weekly rate is published

Scenario: Both parents take leave at the same time
Given a combined right to 30 weeks of paid parental leave per child
When both parents take paid leave together
Then the weeks come from the same pool
Output both parents could take paid leave together for 15 weeks
Outcome both can be home together for part of the leave
But total paid weeks for that child do not rise
Activates national-kiwisaver
