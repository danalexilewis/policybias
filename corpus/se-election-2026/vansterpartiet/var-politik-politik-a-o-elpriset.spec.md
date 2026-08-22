---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset
title: Elpriset
status: draft
updated: 2026-08-22
summary: Elnätsavgiften höjs återigen och har nu mer än fördubblats under de senaste tio åren.
jurisdiction: SE
sources:
  - title: Elpriset
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/elpriset
tags:
  - energy
  - economy
party: vansterpartiet
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-elpriset.md
sourceDigest: sha256-311b30b8c1e99221
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> Hushåll och företag knäcks av snabbt skenande elpriser.

System: Elpriset

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Hushåll och företag knäcks av snabbt skenande elpriser.
Output Elnätsavgiften höjs återigen och har nu mer än fördubblats under de senaste tio åren.
Outcome the claim is the party's stated position
