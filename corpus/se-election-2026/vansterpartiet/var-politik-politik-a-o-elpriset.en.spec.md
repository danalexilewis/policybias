---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset
title: The electricity price
status: draft
updated: 2026-08-22
summary: The electricity grid fee is being raised again and has now more than
  doubled in the past ten years.
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
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-elpriset
translator: machine
translatedAt: 2026-08-22
sourceSpecDigest: sha256-6b185282c123f211
---

# What the page states

> Households and businesses are broken by rapidly skyrocketing electricity prices.

System: Elpriset

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Households and businesses are broken by rapidly skyrocketing electricity prices.
Output The electricity grid fee is being raised again and has now more than doubled in the past ten years.
Outcome the claim is the party's stated position
