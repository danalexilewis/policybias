---
type: spec
id: moderaterna-var-politik-lag-och-ordning-2-derived
title: "Förverkandefond läst som system: vinster till offer medan staten bär fordringarna"
status: draft
updated: 2026-08-23
summary: Förverkandefonden lovar brottsoffer en andel av vinster medan obetalda skadestånd redan ligger hos Kronofogden, och säkerhetsvakter flyttar ordningsarbete från polisen utan att öka utredningskapaciteten.
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
  - förverkandefonden får bara det som faktiskt förverkas, vilket politiken inte dimensionerar
  - säkerhetsvakter kan hantera ordningsstörningar men inte utreda grova brott
  - kriminalisering av ekonomiskt och psykiskt våld kräver utredningsresurser som politiken inte tillför
---

# Our understanding

> Förverkandefonden delar vinster som ännu inte förverkats. Säkerhetsvakter flyttar ordningsarbete från polisen utan att öka utredningskapaciteten. Nya brott mot kvinnor kräver utredning som politiken inte dimensionerar.

System: Förverkande, ordningsvakter och nya brott utan extra kapacitet

Scenario: Förverkandefonden möter obetalda skadestånd
Given 46 000 personer har obetalda skulder på över 10 miljarder kronor för brottsskadestånd
When förverkade brottsvinster går till en fond för brottsoffer
Then offret kan få stöd från förverkade tillgångar
Outcome fonden täcker bara det som faktiskt förverkas
But offret bär fortfarande obetalda skadestånd som Kronofogden inte driver in

Scenario: Säkerhetsvakter tar ordningsstörningar utan fler utredare
When säkerhetsvakter kompletterar polis och ordningsvakter
Then ordningsstörningar kan hanteras lokalt
Outcome polisen kan fokusera på grova brott
But utredningsköer kvarstår om polisresurser inte flyttas till utredning
