---
type: spec
id: miljopartiet-politik-gron-ekonomi
title: Miljöpartiets ekonomiska politik
status: draft
updated: 2026-08-22
summary: Sverige behöver en stark ekonomi som håller ihop samhället och som ryms inom planetens gränser.
jurisdiction: SE
sources:
  - title: Miljöpartiets ekonomiska politik
    url: https://www.mp.se/politik/gron-ekonomi
tags:
  - economy
  - climate
  - social-welfare
party: miljopartiet
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-gron-ekonomi.md
sourceDigest: sha256-625da40fada33900
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> Miljöpartiet vill bygga en grön ekonomi som sänker utsläppen, minskar klyftorna och stärker tryggheten i vardagen.

System: Miljöpartiets ekonomiska politik

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Miljöpartiet vill bygga en grön ekonomi som sänker utsläppen, minskar klyftorna och stärker tryggheten i vardagen.
Output Sverige behöver en stark ekonomi som håller ihop samhället och som ryms inom planetens gränser.
Outcome the claim is the party's stated position
