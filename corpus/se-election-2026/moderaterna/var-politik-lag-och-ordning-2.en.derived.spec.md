---
type: spec
id: moderaterna-var-politik-lag-och-ordning-2-derived
title: "Sentence tightening read as a system: places fill with longer sentences after a lag"
status: draft
updated: 2026-08-22
summary: The police budget and prison places are an expansion already under way, while longer sentences fill the places with delay and the state takes over crime debts.
jurisdiction: SE
sources:
  - title: Lag och ordning
    url: https://moderaterna.se/var-politik/lag-och-ordning-2
tags:
  - crime-and-justice
derivesFrom: moderaterna-var-politik-lag-och-ordning-2
party: moderaterna
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-lag-och-ordning-2.md
sourceDigest: "sha256-b1746dd87725aac2"
assumptions:
  - 40 percent higher police appropriation 2023-2027 is a path in the appropriation, not a new election pledge from zero
  - 5 200 places must be staffed before abolished volume discount and double gang sentences show up in occupancy
  - the state as first payer of damages carries 10 billion in claims until the Enforcement Authority recovers them
  - 60 percent fewer shootings is an outcome already booked, so new tools are justified by a trend that has already turned
lang: en
translationOf: moderaterna-var-politik-lag-och-ordning-2-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5794748a98a359a7
---

# Our understanding

> Police appropriation and prison places are being expanded along a path already laid. Longer sentences and an abolished volume discount fill the places with a lag. When the state pays the damages first, the claims sit with taxpayers until they are recovered. Fewer shootings is already a reported outcome.

System: Capacity, time served and who carries the claim

Scenario: Sentences are lengthened before the places are staffed
Given the Prison and Probation Service's budget is to more than double from 14 to 31.5 billion kronor
And the number of places is to rise by 5 200
When the volume discount is abolished and gang criminals receive double sentences
Then more convicted people are to sit longer
Outcome occupancy rises with a lag after the judgments have become final
But inmates bear the crowding if the places have not yet been staffed

Scenario: The state takes the crime claim from the victim
Given 46 000 people have unpaid debts of over 10 billion kronor for criminal damages
When the state pays out the damages and recovers the money itself
Then the victim no longer has to chase the offender
Outcome the claim moves to the public until it is recovered
But taxpayers carry the amount that cannot be collected
