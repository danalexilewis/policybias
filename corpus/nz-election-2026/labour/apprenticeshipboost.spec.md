---
type: spec
id: labour-apprenticeshipboost
title: "Expanding Apprenticeship Boost for tradies and apprentices"
status: draft
updated: 2026-08-18
summary: Extend employer payments to two years at $500 a month, add a $1,000 toolbox grant, and expand eligibility to five new trades.
jurisdiction: NZ
sources:
  - title: Expanding Apprenticeship Boost
    url: https://www.labour.org.nz/apprenticeshipboost
tags:
  - employment
  - education
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/apprenticeshipboost.md
sourceDigest: "sha256-0da4a8f281497913"
gaps:
  - which apprentices qualify for the mentoring pilot is not fully specified beyond those most in need
  - how the five new trades are selected beyond the named list is not stated
  - uptake assumptions behind the $21 million to $71.5 million cost path are not stated
  - interaction with existing apprenticeship programmes outside Apprenticeship Boost is not stated
---

# What the page states

> Employer payment extension, toolbox grant, five new trades, mentoring pilot dates, and the four-year cost path ($21 million in 2027/28 rising to $71.5 million in 2030/31, averaging $56.5 million a year) are all on the page.

System: Expanding Apprenticeship Boost

Scenario: A business takes on an apprentice in an expanded trade
Given Apprenticeship Boost employer payments of one year today
When Apprenticeship Boost is expanded
Then employer payments last longer and more trades qualify
Output $500 a month employer payment for two years
And $1,000 toolbox grant for new apprentices
And five new trades eligible
And average cost $56.5 million a year over four years
Outcome more tradies and young people earn while they learn
