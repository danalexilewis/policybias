---
type: spec
id: act-closing-medicines-gap-derived
title: "Medicines parity read as a system: other health growth pays for the climb"
status: draft
updated: 2026-08-21
summary: One point of health-budget growth a year goes to medicines until Australian parity; the rest of health keeps less of that growth, with no new tax.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/closing-medicines-gap
  - title: Closing the medicines gap
    url: https://www.act.org.nz/medicines
tags:
  - healthcare
  - budget
party: act
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/act/closing-medicines-gap.md
derivesFrom: act-closing-medicines-gap
assumptions:
  - directing one percentage point of annual health-budget growth to medicines leaves less of that growth for the rest of health than a full uplift would have given
  - the policy's claim that non-medicines spend is not cut is about absolute dollars still rising, not about retaining the same share of growth
  - the Budget 2026 worked example is the policy's own illustration of that trade-off inside a growing envelope
  - parity in 2033 tracks the published one-point-a-year path rather than Australia's future share moving further
sourceDigest: "sha256-1f6b71f82a390c0a"
---

# Our understanding

> The policy frames the climb as funded from expected health growth without new taxes or cutting the size of the non-medicines budget. The same path is a squeeze on other health growth: each year medicines takes one point of the uplift, so the rest of health keeps less than the full growth would have given. The Budget 2026 worked example in the policy is that trade-off in dollars.

System: Medicines share climb paid from health-budget growth

Scenario: The medicines share climbs one point a year
Given New Zealand spends 4.9 per cent of its health budget on medicines
And Australia spends 12.2 per cent
And the pathway closes a seven-percentage-point gap over seven years
When the medicines share is lifted each year toward parity
Then Pharmac gets a larger claim on a growing health envelope
Output 1 percentage point increase in the medicines share of the health budget each year
And 12% medicines share in 2033/34
And $500–650 million additional medicines spending a year on average
Outcome more Options for Investment medicines can be funded as the share rises
But the path depends on health spending continuing to grow

Scenario: Other health keeps less of the Budget 2026-style uplift
Given Health received an extra $1.5 billion in Budget 2026 while Pharmac received $13.5 million
And eight per cent average health-spending growth over the past five years
When one point of that growth is reserved for medicines
Then the remainder of health still grows, but by less than the full uplift
Output around $320 million more for Pharmac had the Budget 2026 uplift followed this rule
And around $1.2 billion remaining for the rest of the health system in that worked example
Outcome medicines gains arrive inside the existing growth path
But other health services compete for a smaller slice of each year's uplift

Scenario: No new tax funds the climb
Given funding drawn from expected growth in the health budget
When the pathway runs without additional taxes
Then the fiscal claim sits inside health, not on a new levy
Outcome taxpayers face no new medicines tax for the climb
But non-medicines health carries the opportunity cost of the redirected growth
