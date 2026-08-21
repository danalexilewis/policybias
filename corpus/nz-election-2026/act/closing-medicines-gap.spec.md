---
type: spec
id: act-closing-medicines-gap
title: "Lift medicines share of health budget one point per year to Australian parity by 2033"
status: draft
updated: 2026-08-18
summary: Increase the medicines share of the health budget by one percentage point each year until it matches Australia, funded from health budget growth without new taxes.
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
sourceDigest: "sha256-1f6b71f82a390c0a"
gaps:
  - which of the 142 unfunded Australian medicines would be funded first is not stated
  - what happens if health budget growth falls below one percentage point is not stated
  - whether parity tracks Australia's future share or the 12% path in the costing table is not reconciled
  - which medicines on Pharmac's Options for Investment list would be funded first is not stated
---

# What the page states

> The 4.9%, 12.2% and 13.3% budget shares, 142 unfunded medicines, 38% cancer share, one-point annual lift, 2033 parity target, seven-year path, Budget 2026 $1.5 billion / $13.5 million / $320 million comparison, and no-new-tax funding rule are all on the source page. The linked PDF adds eight per cent average health-spending growth over five years, a $1.2 billion remainder for the rest of health in that Budget example, a ~$1.8 billion 2026/27 medicines budget, a path to 12% and $5.4 billion–$6.1 billion by 2033/34, and additional medicines spending averaging $500–650 million a year.

System: Closing the medicines funding gap with Pharmac

Scenario: Government lifts the medicines share of health spending each year
Given New Zealand spends 4.9 per cent of its health budget on medicines
And Australia spends 12.2 per cent while the OECD average is 13.3 per cent
And Australia funds 142 modern medicines not funded in New Zealand, 38 per cent of them cancer medicines
And medicines on Pharmac's Options for Investment list remain unavailable when the medicines budget runs out
And the 2026/27 medicines budget is about $1.8 billion
And eight per cent average health-spending growth over the past five years
And around $1.2 billion remaining for the rest of the health system in the Budget 2026 worked example
When the medicines share of the health budget is lifted each year
Then Pharmac reaches parity with Australia in 2033
Output 1 percentage point increase in the medicines share of the health budget each year
And a seven-percentage-point gap closed over seven years
And 12% medicines share in 2033/34
And about $5.4 billion–$6.1 billion medicines spend by 2033/34
And $500–650 million additional medicines spending a year on average
And Pharmac's future funding increases set in advance
And funding drawn from expected growth in the health budget without additional taxes or cuts to non-medicines health spending
Outcome more medicines on Pharmac's Options for Investment list become available
And other parties are asked to commit to the same seven-year path so a change of government does not derail it
