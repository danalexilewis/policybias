---
type: spec
id: miljopartiet-politik
title: "Sverige vinner på grön politik"
status: draft
updated: 2026-08-22
summary: "Gå direkt till innehållGå direkt till menyn"
jurisdiction: SE
sources:
  - title: "Sverige vinner på grön politik"
    url: https://www.mp.se/politik/
tags: [health-care]
party: miljopartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik.md
sourceDigest: "sha256-7d4f24c58485fcb1"
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> Allt hänger ihop. Klimatet, jobben, välfärden, tryggheten och framtidstron.

System: Sverige vinner på grön politik

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then Miljöpartiet ser de stora sambanden. Vi vet att klimatomställningen skapar jobb och stärker Sveriges konkurrenskraft, att minskade klyftor bygger ett tryggare samhälle och att ett starkt skydd för nat
Output Gå direkt till innehållGå direkt till menyn
Outcome the claim is the party's stated position
