---
type: spec
id: sverigedemokraterna-a-till-o-tillvaxtatgarder-derived
title: "Growth measures read as a system: a list without size, order or which tax"
status: draft
updated: 2026-08-23
summary: Growth is to come from many small and large moves at once; without amounts, sequencing and named tax it cannot be said who gets more in the wallet or when the pace shows.
jurisdiction: SE
sources:
  - title: Tillväxtåtgärder
    url: https://www.sd.se/a-till-o/tillvaxtatgarder/
tags:
  - economy
derivesFrom: sverigedemokraterna-a-till-o-tillvaxtatgarder
party: sverigedemokraterna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-tillvaxtatgarder.md
sourceDigest: sha256-b605a67e0f5a33a3
assumptions:
  - lower tax burden without a named base is either lower income tax, corporation tax, VAT or all; incidence differs
  - shorter permits increase the value of projects already profitable; they do not by themselves create the demand the policy wants to see
  - incentives from benefits to work require benefits to fall, pay after tax to rise, or both; the policy does not say which
  - growth at world top is a goal against other countries' outcomes, not a commitment the state controls alone
lang: en
translationOf: sverigedemokraterna-a-till-o-tillvaxtatgarder-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-872895140982f634
---

# Our understanding

> The agenda is broad on purpose: tax, EU, benefits, rules, permits and R&D. That is the point on the policy — no single move is enough. Without size and order the list is a direction. Who pays for the cut, and how fast growth is to show, is not there.

System: Growth as a package without a price tag

Scenario: Tax burden is lowered without the base being named
Given tax burden is to be lowered for both individuals and firms
When a household or company is to calculate for next year
Then the policy does not say which tax moves, or by how much
Outcome the wallet can become heavier or almost unchanged; both fit the text

Scenario: Permits are shortened while demand is still weak
Given the period has been marked by recession and weak growth
When permit processes are shortened
Then projects already waiting can get going faster
But new demand is not created by a shorter queue to the permit
Outcome the supply side moves; the pace in the economy can still stall at the recession
