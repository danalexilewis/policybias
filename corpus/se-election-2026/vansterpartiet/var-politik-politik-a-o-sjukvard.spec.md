---
type: spec
id: vansterpartiet-var-politik-politik-a-o-sjukvard
title: Sjukvård
status: draft
updated: 2026-08-22
summary: Vänsterpartiet värnar en vård som finns där i alla delar av livet och som är tillgänglig över hela landet.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/sjukvard
tags:
  - healthcare
party: vansterpartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-sjukvard.md
sourceDigest: sha256-305070f2abf28851
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> Alla har rätt till en bra och tillgänglig sjukvård som är anpassad efter den enskildes behov.

System: Sjukvård

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Alla har rätt till en bra och tillgänglig sjukvård som är anpassad efter den enskildes behov.
Output Vänsterpartiet värnar en vård som finns där i alla delar av livet och som är tillgänglig över hela landet.
Outcome the claim is the party's stated position
