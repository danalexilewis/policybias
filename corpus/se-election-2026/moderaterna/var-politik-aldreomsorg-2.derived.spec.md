---
type: spec
id: moderaterna-var-politik-aldreomsorg-2-derived
title: "Valfrihet i äldreomsorgen läst som system: LOV utan utförare ger val på pappret"
status: draft
updated: 2026-08-23
summary: Personalval och LOV lovar inflytande där fristående utförare saknas, och välfärdsteknik flyttar ronder från den som inte kan hantera skärmen.
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
  - 80 procent vill välja hemtjänst men över 70 kommuner saknar fristående utförare, så valet saknar utbud
  - personalval vid kroppsnära insatser kräver tillgänglig personal av rätt kön, vilket politiken inte dimensionerar
  - välfärdsteknik tar ronder från den som inte kan hantera skärmen eller sensorerna
  - ledarskapsutredningen och undernäringskartläggningen är förslag, inte finansierade reformer
---

# Our understanding

> Valfrihet kräver utförare; där de saknas blir LOV ett formulär utan alternativ. Personalval vid kroppsnära insatser kräver tillgänglig personal. Välfärdsteknik tar ronder från den som inte kan hantera skärmen.

System: Valfrihet utan utbud och teknik som ronder

Scenario: En äldre person i en kommun utan fristående hemtjänst
Given över 150 kommuner har valfrihetssystem
And fristående hemtjänstutförare saknas i över 70 kommuner
When den äldre ska välja utförare eller personal
Then det finns ingen att välja bort
Outcome valfriheten stannar på pappret
But den äldre bär avsaknaden av utbud

Scenario: Välfärdsteknik möter personal som inte kan använda den
When rutinuppgifter och ronder flyttas till välfärdsteknik
Then personalen ska få tid för mer kvalificerat omsorgsarbete
Outcome den som inte kan hantera tekniken bär kvar ronder och belastning
