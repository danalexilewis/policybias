---
type: spec
id: miljopartiet-politik-energi-derived
title: "Energy read as a system: renewable build and green firm power, with nuclear ruled out and the bill unprinted"
status: draft
updated: 2026-08-23
summary: Wind, solar and a gigawatt target for green firm power are meant to cut prices; dropping new nuclear removes a slow option, while storage, grid and efficiency supports stay uncosted.
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
  - a gigawatt target for green firm power is a capacity goal; storage, hydro upgrades, bio-turbines and heat-power each have different lead times the policy does not split
  - keeping the municipal veto while asking for an earlier decision still lets a municipality block a site, so the grid-to-sea build can wait on local yes
  - electrification contracts only cut household prices if new supply arrives before industrial demand; sequencing is unnamed
  - rejecting new nuclear means weather-dependent plants plus the firm-power mix must carry winter peaks the policy does not simulate
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6c77a190ccffc6a1
translationOf: miljopartiet-politik-energi-derived
lang: en
---

# Our understanding

> Price relief is supposed to come from more wind and sun, from using less electricity, and from firm green capacity on a gigawatt clock. New nuclear is taken off the table. The municipal veto remains, so local no still stops a turbine. None of the supports carries a kronor figure.

System: A renewable stack with an unpriced firm-power target

Scenario: Firm green capacity is targeted in gigawatts
When green firm power is planned at the printed gigawatt scale
Then storage, hydro, heat-power and bio-turbines are meant to cover still, dark hours
Outcome winter peaks are supposed to be met without new nuclear
But which of those technologies actually gets built, and at what subsidy, is not split out

Scenario: A municipality can still say no
When the municipal veto is kept and only the timing of the decision is pulled forward
Then local consent remains a gate on onshore wind
Outcome neighbours may be paid more, and offered shares, yet a no still stops the site
But offshore grid can be built and still wait on landfall and local process
