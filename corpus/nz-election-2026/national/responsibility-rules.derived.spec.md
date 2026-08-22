---
type: spec
id: national-responsibility-rules-derived
title: "Responsibility rules read as a system: surplus by spending cuts, debt as a path not a term cap"
status: draft
updated: 2026-08-21
summary: Surplus via spending restraint rather than new taxes means the path to 30% of GDP runs through programme cuts; the debt rule is a path, not a cap this term.
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
derivesFrom: national-responsibility-rules
assumptions:
  - if surplus is reached without new taxes, the arithmetic of a lower spending share of GDP is programme cuts and reprioritisation, not a revenue lift
  - declining towards 30 per cent of GDP over time is a path, so near-term spending can sit above that share while the rules are said to hold
  - debt bent below 40 per cent of GDP over time, from a forecast peak of 46.1 per cent, means this term can finish with debt still above forty per cent
  - frontline protection still leaves lower-priority expenditure as the residual that must shrink
sourceDigest: "sha256-b7fb6b4cafc519ae"
---

# Our understanding

> Surplus by spending restraint rather than new taxes means the path to thirty per cent of GDP runs through programme cuts and reprioritisation. Debt bent below forty per cent is a long-term path, so near-term spending can sit above that share while the rules hold, and this term can finish with debt still above forty.

System: Fiscal rules as spending restraint with a debt path, not a term cap

Scenario: Surplus without new taxes
Given return to surplus by spending restraint rather than new taxes
And core Crown expenditure declining towards 30 per cent of GDP over time
And $50 billion in savings achieved across the last three Budgets
When the rules are maintained
Then the path to the spending share target runs through reprioritisation and cuts to lower-priority programmes
Output return to operating surplus in 2028/29
And core Crown expenditure declining towards 30 per cent of GDP over time
Outcome taxes stay low by design in the policy
But lower-priority programmes lose funding to make room

Scenario: Debt across this term
Given net core Crown debt forecast to peak at 46.1 per cent of GDP in 2027/28
And debt bent down below 40 per cent of GDP over time
When this term's forecast runs
Then debt can still sit above the long-term target through the near term
Output debt bent down below 40 per cent of GDP over time
Outcome the long-term debt line is a path, not a ceiling that binds this term
But the buffer rebuilds only as the curve bends
