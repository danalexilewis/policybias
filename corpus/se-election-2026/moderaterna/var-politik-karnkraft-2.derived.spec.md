---
type: spec
id: moderaterna-var-politik-karnkraft-2-derived
title: "Låneram read as a system: staten bär byggrisken innan första kilowattimmen"
status: draft
updated: 2026-08-22
summary: Lån, riskdelning och majoritetsägande lägger bygg- och prisrisk på det offentliga, medan fördubbling till 2045 saknar tidplan för spadtag.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://moderaterna.se/var-politik/karnkraft-2
tags:
  - energy
derivesFrom: moderaterna-var-politik-karnkraft-2
party: moderaterna
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-karnkraft-2.md
sourceDigest: "sha256-37aa13211a357b27"
assumptions:
  - lån som ska betalas tillbaka efter att kraftverken finns förutsätter att de blir klara och lönsamma
  - långsiktiga elprisavtal sätter ett golv som konsumenter eller skattebetalare bär om spotpriset ligger under
  - majoritetsägande i Videberg Kraft gör staten till motpart om projektet fördyras
  - två ytterligare ansökningar är intresse, inte investeringsbeslut
---

# Our understanding

> Låneram, riskdelning och majoritetsägande gör staten till finansiär och ägare innan någon reaktor producerar. Återbetalningen kommer först när verken finns. Elprisavtalen låser ett golv. Fördubbling till 2045 är ett fysiskt krav utan datum för spadtag.

System: Offentlig risk före produktion

Scenario: Lånet ska återbetalas efter att reaktorn finns
Given företag kan söka statligt stöd ur en låneram
And pengarna ska på sikt betalas tillbaka när kraftverken finns på plats
When bygget försenas eller fördyras
Then återbetalningen skjuts upp
Outcome staten står med fordran och ägarandel innan första kilowattimmen
But skattebetalarna bär risken så länge verket inte är i drift

Scenario: Ett långsiktigt elprisavtal möter ett lägre spotpris
Given villkor för lån, riskdelning och långsiktiga elprisavtal är överenskomna
When spotpriset ligger under avtalet
Then differensen måste bäras av någon part i avtalet
Outcome hushåll och industri får inte hela den tänkta prissänkningen, eller staten fyller gapet
But den som förbrukar el bär golvet om avtalet är skrivet mot konsumenten
