---
type: spec
id: vansterpartiet-var-politik-politik-a-o
title: Politik A-Ö
status: draft
updated: 2026-08-22
summary: "Vänsterpartiet är ett parti som arbetar för rättvisa och jämlikhet. Vi är en
  sammanslutning av tusentals människor som arbetar tillsammans för det målet över hela
  Sverige på många olika sätt: på torget, i bostadsområdena, i kommunen och riksdagen."
jurisdiction: SE
sources:
  - title: Politik A-Ö
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/
tags:
  - other
party: vansterpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o.md
sourceDigest: sha256-8ad1692d7c2db6eb
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> <html lang="sv-SE" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">

System: Politik A-Ö

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then <meta name="viewport" content="width=device-width, initial-scale=1">
Output Vänsterpartiet är ett parti som arbetar för rättvisa och jämlikhet. Vi är en sammanslutning av tusentals människor som arbetar tillsammans för det målet över hela Sverige på många olika sätt: på torge
Outcome the claim is the party's stated position
