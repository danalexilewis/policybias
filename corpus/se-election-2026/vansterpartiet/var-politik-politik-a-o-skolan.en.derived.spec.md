---
type: spec
id: vansterpartiet-var-politik-politik-a-o-skolan-derived
title: "School profit ban read as a system: sorting can survive if choice stays"
status: draft
updated: 2026-08-23
summary: Ending profit extracts cash from chains, but the policy names free school choice as the sorting engine and never says whether choice itself ends.
jurisdiction: SE
sources:
  - title: Skolan
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/skolan
tags:
  - education
party: vansterpartiet
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-skolan.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-skolan
assumptions:
  - a profit ban stops dividends; it does not by itself mix pupils if families still pick between schools
  - the policy treats free school choice as a cause of segregation, yet the intervention it names is profit, state control, and neighbourhood trust
  - state takeover reallocates between municipalities only once a formula exists; none is printed
  - more resources after decades of cuts is unbounded until a kronor or a teacher headcount is named
sourceDigest: sha256-34bb3a0c3dee79cd
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-skolan-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b0d49c2dcd8a899b
---

# Our understanding

> Cash leaving school groups is not the same as pupils mixing. The policy says free choice gathers different backgrounds on different schools, then answers with a profit ban and a state principal. If choice remains, sorting can continue on a non-profit basis while the neighbourhood-school promise still has to be funded.

System: Profit ban beside an unnamed choice rule

Scenario: Chains lose profit while families still choose
Given school choice currently sorts pupils by background
And profit on schooling is unlimited
When the right to take profit is abolished but choice is left unnamed
Then dividends stop leaving the school
Outcome segregation can continue through non-profit selection and reputation
But a child in a weaker school still depends on a resource formula the policy does not print

Scenario: The state takes the schools without a published allocation key
Given municipalities now run schools with shrinking money
When the state takes back principal responsibility
Then national politicians can move money between schools
Outcome the nearest school is only as good as the new distribution
But municipalities lose the till without a stated replacement amount
Activates vansterpartiet-var-politik-politik-a-o-kriminalitet-och-kriminalvard
