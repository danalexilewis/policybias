---
type: spec
id: national-responsibility-rules
title: "Budget responsibility rules to 2028/29 surplus and 40% debt"
status: draft
updated: 2026-08-21
summary: Return to surplus in 2028/29, bend debt below 40% of GDP, and reduce core Crown spending toward 30% of GDP.
jurisdiction: NZ
sources:
  - title: Responsibility Rules
    url: https://www.national.org.nz/responsibility-rules
tags:
  - budget
  - taxation
party: national
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/national/responsibility-rules.md
sourceDigest: "sha256-b7fb6b4cafc519ae"
gaps:
  - operating allowance dollar caps per Budget are not stated
  - which programmes face reprioritisation is not listed
  - capital investment envelope beyond value-for-money test is not quantified
  - tax rate commitments beyond keeping taxes low are not itemised
  - sensitivity of debt path to growth shocks is not modelled on this page
---

# What the page states

> Three fiscal rules would be maintained: return to operating surplus from 2028/29, net core Crown debt bent below 40% of GDP over time, and core Crown expenditure declining toward 30% of GDP. Surplus would be achieved through spending restraint rather than new taxes. Capital investment would continue, tested against value for money.

System: Budget responsibility rules

Scenario: Fiscal rules are maintained in government
Given net core Crown debt forecast to peak at 46.1 per cent of GDP in 2027/28
And $50 billion in savings achieved across the last three Budgets
When three fiscal rules are maintained
Then return to surplus is prioritised
Output return to operating surplus in 2028/29
And debt bent down below 40 per cent of GDP over time
And core Crown expenditure declining towards 30 per cent of GDP over time
Outcome taxes kept low by right-sizing government
