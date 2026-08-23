---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet-derived
title: "Two-front gang policy read as a system: the listed tools are almost all enforcement"
status: draft
updated: 2026-08-23
summary: Wiretaps and witness protection can raise detections; the prevention arm named as a stronger local embrace has no instrument on this page.
jurisdiction: SE
sources:
  - title: Gängkriminalitet
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/lag-och-ratt/gangkriminalitet
tags:
  - crime-and-justice
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet
party: centerpartiet
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet.md
sourceDigest: sha256-7e2f79bb2ae9e874
assumptions:
  - harsher sentences change behaviour only if detection and trial still follow
  - secret interception raises evidence against those already in the net, not against children not yet recruited
  - an exit programme works if a job and protection exist after leaving; neither is sized here
  - zero tolerance for vandalism is extra police time in areas already short of it
lang: en
translationOf: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-25bb1304b16a372d
---

# Our understanding

> The page insists on two fronts at once, then lists weapons penalties, secret interception, witness protection, exit programmes and a hard line on petty crime. The stronger local embrace is named in the headline and not specified as a budget or a service. Recruitment of the next cohort can continue while more of the current one is locked in.

System: Enforcement tools without a specified prevention budget

Scenario: A teenager is offered money to join before any sentence bites
Given recruitment that starts before a first conviction
When penalties for gang-related crime are sharpened
Then the teenager is not yet in the sentencing net
Outcome the supply of new members can keep flowing
But the listed tools arrive after the first crime, not before the offer

Scenario: A witness speaks after protection is strengthened
Given a silence culture in the area
When the witness testifies
Then a prosecution can proceed
Outcome more of the current cohort can be locked in
But the local embrace that was supposed to cut recruitment is still unnamed as a programme
