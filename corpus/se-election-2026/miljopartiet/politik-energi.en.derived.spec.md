---
type: spec
id: miljopartiet-politik-energi-derived
title: "Energy read as a system: renewable build-out and green baseload, with new nuclear ruled out and the bill unprinted"
status: draft
updated: 2026-08-23
summary: Wind, solar and a gigawatt target for green baseload are meant to lower prices; ruling out new nuclear removes a slow alternative, while support for storage, grid and efficiency stays uncosted.
jurisdiction: SE
sources:
  - title: Energi och energieffektivisering
    url: https://www.mp.se/politik/energi
tags:
  - energy
derivesFrom: miljopartiet-politik-energi
party: miljopartiet
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-energi.md
sourceDigest: sha256-324a7404a3d5dc69
assumptions:
  - a gigawatt target for green baseload is a capacity goal; storage, hydropower upgrades, bio-turbines and combined heat and power have different lead times the policy does not split
  - keeping the municipal veto while asking for an earlier decision still lets a municipality stop a site, so build-out from grid to sea can wait on local yes
  - electrification deals lower household prices only if new supply arrives before industrial demand; the sequence is unnamed
  - rejecting new nuclear means weather-dependent plants plus the baseload mix must carry winter peaks the policy does not simulate
lang: en
translationOf: miljopartiet-politik-energi-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-84b20fb615c97ba5
---

# Our understanding

> Price relief is meant to come from more wind and solar, from using less power, and from green baseload on a gigawatt clock. New nuclear is taken off the table. The municipal veto remains, so local no still stops a turbine. None of the support carries a krona figure.

System: A renewable stack with an unpriced baseload target

Scenario: Green baseload is aimed in gigawatts
When green baseload is planned at the printed gigawatt scale
Then storage, hydropower, combined heat and power and bio-turbines should cover still, dark hours
Outcome winter peaks should be met without new nuclear
But which of those technologies actually gets built, and at what support, is not split out

Scenario: A municipality can still say no
When the municipal veto is kept and only the timing of the decision is brought forward
Then local consent remains a gate for onshore wind
Outcome neighbours may get more pay, and be offered shares, but a no still stops the site
But offshore grid can be built and still wait on landfall and local process
