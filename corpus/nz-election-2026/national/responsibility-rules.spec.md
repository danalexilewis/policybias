---
type: spec
id: national-responsibility-rules
title: "Budget responsibility rules to 2028/29 surplus and 40% debt"
status: draft
updated: 2026-08-18
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

> Three fiscal rules (2028/29 surplus, debt below 40% of GDP, core Crown expenditure toward 30% of GDP), $50 billion savings across three Budgets, net debt peak at 46.1% of GDP in 2027/28, and spending restraint without new taxes are on the page.

System: Budget responsibility rules

Scenario: Fiscal rules are maintained in government
Given net core Crown debt forecast to peak at 46.1 per cent of GDP in 2027/28
And $50 billion in savings achieved across the last three Budgets
When three fiscal rules are maintained
Then return to surplus is prioritised
Output debt bent down below 40 per cent of GDP over time
And core Crown expenditure declining towards 30 per cent of GDP over time
Outcome taxes kept low by right-sizing government
