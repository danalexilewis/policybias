---
type: spec
id: moderaterna-var-politik-aldreomsorg-2-derived
title: "Äldreomsorgslyftet read as a system: tidsbegränsat statsbidrag mot kommunal lönelista"
status: draft
updated: 2026-08-22
summary: Statsbidraget utbildar personal på arbetstid till 2027 medan språkkrav och register redan är lag, och LOV utan utförare ger val på pappret.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://moderaterna.se/var-politik/aldreomsorg-2
tags:
  - elderly-care
  - social-welfare
derivesFrom: moderaterna-var-politik-aldreomsorg-2
party: moderaterna
clusters:
  - elderly-welfare
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-aldreomsorg-2.md
sourceDigest: "sha256-77a8cbe0abbf14f0"
assumptions:
  - 1.7 miljarder om året är ett tidsbegränsat statsbidrag, inte en höjning av kommunernas basanslag
  - privata utförare når medlen bara om kommunen släpper igenom dem
  - språkkrav och registerutdrag är redan beslutade, så den öppna frågan är personalval och LOV
  - 80 procent vill välja hemtjänst men över 70 kommuner saknar fristående utförare, så valet saknar utbud
---

# Our understanding

> Äldreomsorgslyftet betalar utbildning på arbetstid under en tidsbegränsad period. Språkkrav och registerkontroll är redan på plats. Valfrihet kräver utförare; där de saknas blir LOV ett formulär utan alternativ. Välfärdsteknik tar ronder från den som inte kan hantera skärmen.

System: Tidsbegränsat lyft mot kommunal bemanning

Scenario: Statsbidraget tar slut medan språkkravet står kvar
Given 1.7 miljarder kronor om året går till Äldreomsorgslyftet till och med 2026
And lyftet är förlängt till 2027
When språkkrav i svenska gäller för personal i äldreomsorgen
Then den som inte klarar kravet ska omställas eller lämna
Outcome kompetenskravet består efter att statsbidraget upphört
But kommunen bär lön under utbildning och vakans om personalen inte når språket

Scenario: En äldre person i en kommun utan fristående hemtjänst
Given över 150 kommuner har valfrihetssystem
And fristående utförare saknas i över 70 kommuner
When den äldre ska välja utförare
Then det finns ingen att välja bort
Outcome valfriheten stannar på pappret
But den äldre bär avsaknaden av utbud
