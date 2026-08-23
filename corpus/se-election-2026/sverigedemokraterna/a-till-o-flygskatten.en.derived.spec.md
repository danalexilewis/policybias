---
type: spec
id: sverigedemokraterna-a-till-o-flygskatten-derived
title: "Flygskatten read as a system: klimatstyrmedlet är borta, ersättningen saknas"
status: draft
updated: 2026-08-23
summary: Avskaffandet tar bort ett pris på utrikesflyg; sidan hävdar noll klimatnytta och högre konkurrenskraft men visar varken utsläpp, linjer eller statsintäkter.
jurisdiction: SE
sources:
  - title: Flygskatten
    url: https://www.sd.se/a-till-o/flygskatten/
tags:
  - taxation
derivesFrom: sverigedemokraterna-a-till-o-flygskatten
party: sverigedemokraterna
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-flygskatten.md
sourceDigest: sha256-f62de7a583631378
assumptions:
  - en skatt per resa höjer priset på att flyga; när den tas bort blir flyg relativt billigare mot tåg och möten på marken
  - påståendet om ingen mindre klimatpåverkan saknar serie; utsläpp kan ha hållits tillbaka av andra saker eller inte
  - internationella linjer styrs av efterfrågan och flygbolagens nät, inte bara av en svensk skatt
  - klimatmål utan detta styrmedel kräver antingen andra styrmedel eller att målen missas; sidan nämner inget alternativ
lang: en
translationOf: sverigedemokraterna-a-till-o-flygskatten-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c458414abc34cf43
---

# Our understanding

> Skatten på flyg är borta och ska förbli borta. Påståendet är att den inte minskade utsläppen och att den skadade konkurrenskraften. Inget av det är mätt på sidan. När priset tas bort bär den som flyger mindre av klimatkostnaden. Vem som bär den i stället sägs inte.

System: Flyg utan den skatten, utan ersättande styrmedel

Scenario: En resenär väljer flyg efter avskaffandet
Given flygskatten är borttagen
When resenären jämför flyg med andra färdsätt
Then biljetten bär inte längre den skatten
Outcome klimatpåverkan från resan prissätts inte av detta verktyg

Scenario: Klimatmålet står kvar utan flygskatten
Given skatten beskrivs som utan miljönytta
When klimatmål ska nås ändå
Then sidan pekar inte ut ett annat styrmedel mot flygets utsläpp
Outcome antingen bär något annat politiken, eller så bär målet inte mot flyget
