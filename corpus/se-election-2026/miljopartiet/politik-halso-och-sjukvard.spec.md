---
type: spec
id: miljopartiet-politik-halso-och-sjukvard
title: Miljöpartiets hälso- och sjukvårdspolitik
status: draft
updated: 2026-08-22
summary: Svensk hälso- och sjukvård är underfinansierad.
jurisdiction: SE
sources:
  - title: Miljöpartiets hälso- och sjukvårdspolitik
    url: https://www.mp.se/politik/halso-och-sjukvard
tags:
  - healthcare
party: miljopartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-halso-och-sjukvard.md
sourceDigest: sha256-feaef1ac78e24eeb
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> Miljöpartiet vill främja jämlik hälsa och en tillgänglig vård med kortare köer, starkare primärvård och bättre stöd vid psykisk ohälsa.

System: Miljöpartiets hälso- och sjukvårdspolitik

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Miljöpartiet vill främja jämlik hälsa och en tillgänglig vård med kortare köer, starkare primärvård och bättre stöd vid psykisk ohälsa.
Output Svensk hälso- och sjukvård är underfinansierad.
Outcome the claim is the party's stated position
