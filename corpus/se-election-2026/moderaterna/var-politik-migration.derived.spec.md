---
type: spec
id: moderaterna-var-politik-migration-derived
title: "Lönekrav read as a system: tredje land stängs ute medan inskrivna antas ta jobben"
status: draft
updated: 2026-08-22
summary: Höjt lönekrav prisar ut lågavlönad invandring från tredje land mot antagandet att 350 000 inskrivna tar jobben, medan återvandringsbidrag skapar en kontant utväg.
jurisdiction: SE
sources:
  - title: Migration
    url: https://moderaterna.se/var-politik/migration
tags:
  - immigration
derivesFrom: moderaterna-var-politik-migration
party: moderaterna
clusters:
  - migration-integration
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-migration.md
sourceDigest: "sha256-d040e491594bf4bb"
assumptions:
  - 90 procent av medianlönen stänger yrken under tröskeln om undantagen inte täcker dem
  - inskrivna vid Arbetsförmedlingen är bara substitut om de tar de städ- och diskjobb sidan pekar på
  - återvandringsbidrag på 350 000 kronor skapar en kontant drivkraft att lämna, med den fusk risk sidan nämner
  - 60 procent färre asylsökande är redan ett utfall, så EU-golvet låser en nivå som redan sjunkit
---

# Our understanding

> Höjt lönekrav gör lågbetalda jobb från tredje land olönsamma att rekrytera till, med 350 000 inskrivna som tänkt ersättning. Återvandringsbidraget är en kontant utväg. Den stora minskningen av asylsökande är redan räknad, så EU-miniminivån ska hålla golvet.

System: Pris på arbetskraft och betald återvandring

Scenario: Ett städjobb från tredje land når inte lönekravet
Given runt 350 000 personer är inskrivna hos Arbetsförmedlingen
And försörjningskravet höjs till 90 procent av medianlönen
When en arbetsgivare vill anställa från land utanför EU till ett lågavlönat jobb
Then tillståndet ska som huvudregel inte beviljas
Output drygt 33 000 kronor
Outcome jobbet ska i stället tillsättas av någon som redan finns i landet
But arbetsgivaren bär vakansen om de inskrivna inte tar uppgiften

Scenario: Ett hushåll överväger frivillig återvandring
Given återvandringsbidrag har funnits i 40 år men få har beviljats
When bidraget höjs
Then vuxna och barn kan få ett belopp för att återvända
Output 350 000 kronor för vuxna
And 25 000 kronor för barn
And högst 600 000 kronor per familj
Outcome den som inte kommit in i samhället får en betald utväg
But regelverket ska samtidigt möta risk för fusk och felaktiga utbetalningar
