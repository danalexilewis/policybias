---
type: spec
id: act-affordable-government-derived
title: "Consolidation read as a system: accountability bought with tenure"
status: draft
updated: 2026-08-18
summary: Merging departments has an unpriced transition, and making chief executives removable for policy misalignment prices free and frank advice.
jurisdiction: NZ
sources:
  - title: A Smaller, More Affordable Government
    url: https://www.act.org.nz/affordable-government
tags:
  - budget
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/affordable-government.md
derivesFrom: act-affordable-government
assumptions:
  - merging 43 organisations into 19 costs money before it saves any: payroll, property, systems and records all have to be moved
  - an official whose chief executive can be removed for policy misalignment faces a cost to giving unwelcome advice, whatever the statutory protections say
  - the page's claim that frontline services are unaffected assumes the merged departments retain the same delivery staff
  - a fixed term renewable once ties senior tenure to the electoral cycle
  - no saving is claimed here, because the page publishes none
sourceDigest: "sha256-cf145c74128adc18"
---

# Our reading

> This is our systems reading of the source page, not the published claim. The page states the counts, the powers and the carve-out. It does not state the transition cost, and it argues the opposite of our reading on advice: the page says chief executives "retain public service protections". We think a removal power for policy misalignment prices advice regardless, and the assumptions above say why. We publish no saving and no cost figure, because the source page publishes none and inventing one would be fabrication.

System: Consolidation as a transition with a price on advice

Scenario: The merge is executed across a term
Given 43 departments with separate payrolls, property leases, systems and records
When they are consolidated into 19
Then each merged function is moved before it is simplified
Outcome a smaller set of organisations to fund
But the cost of moving arrives before any saving does
And delivery capacity is occupied by the merge while it runs

Scenario: An official prepares advice a minister will not welcome
Given a chief executive appointed by the minister for a fixed term, renewable once
And removal available for policy misalignment
When an official prepares advice against the minister's stated policy
Then the chief executive weighs the advice against their own tenure
Outcome accountability for delivery is clearer than it was
But free and frank advice now carries a personal cost

Scenario: A government changes at an election
Given senior tenure tied to ministerial appointment
When the government changes
Then incoming ministers may replace the chief executives they inherit
Outcome a new government can align delivery with its programme quickly
But institutional memory turns over on the electoral cycle
