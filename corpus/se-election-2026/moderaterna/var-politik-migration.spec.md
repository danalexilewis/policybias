---
type: spec
id: moderaterna-var-politik-migration
title: EU:s miniminivå, högre lönekrav och mer återvändande
status: draft
updated: 2026-08-22
summary: Asylinvandringen ska hållas vid EU:s miniminivå, arbetskraftsinvandring styras mot högkvalificerade yrken och fler utan tillstånd ska lämna landet.
jurisdiction: SE
sources:
  - title: Migration
    url: https://moderaterna.se/var-politik/migration
tags:
  - immigration
party: moderaterna
clusters:
  - migration-integration
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-migration.md
sourceDigest: "sha256-d040e491594bf4bb"
gaps:
  - hur många asylrelaterade tillstånd som är målet per år efter EU:s miniminivå anges inte
  - vilka yrken som undantas från det höjda lönekravet anges inte
  - hur många av de 110 000 till 185 000 utan tillstånd som faktiskt lämnar landet anges inte
  - hur informationsplikten hos de sex myndigheterna ska fungera när barn far illa anges inte
---

# What the page states

> Invandringen ska stramas åt och kontrollen återtas över vilka som vistas i landet, så att integrationen ska kunna lyckas. Asylrelaterad invandring ska ner mot EU-rättens miniminivå. Högkvalificerad arbetskraft ska prioriteras. Den som begår brott eller saknar tillstånd ska lämna.

System: Åtstramad asyl, högre lönekrav och mer återvändande

Scenario: Asylrelaterad invandring ska ner till EU:s golv
Given cirka 1.2 miljoner utländska medborgare invandrade under de tolv åren före regeringsskiftet
And över 700 000 svenska medborgarskap beviljades under samma tid
And 320 000 asylsökande togs emot under åtta år utan plan
And antalet asylsökande har minskat med 60 procent sedan 2022
When asyllagstiftningen anpassas till EU-rättens miniminivå
Then krav på svenska, samhällskunskap, egen försörjning och längre bosättning ska gälla för medborgarskap
And den som döms till strängare påföljd än böter ska som huvudregel utvisas
Outcome asylrelaterade uppehållstillstånd ska ligga på den lägsta nivån sedan 1985

Scenario: En arbetsgivare vill rekrytera från land utanför EU
Given runt 350 000 personer är inskrivna hos Arbetsförmedlingen
And beviljade förstagångstillstånd 2023 utgjorde mindre än 0.5 procent av arbetskraften
And handläggningstiderna för högkvalificerade har minskat från över 100 dagar till under 20 dagar
When försörjningskravet höjs
Then undantag från lönekravet ska kunna gälla vissa yrken
Output drygt 33 000 kronor
And 90 procent av medianlönen
And 80 procent av medianlönen som kravet höjdes till i november 2023
Outcome lågavlönad arbetskraftsinvandring från tredje land ska ersättas av personer som redan finns i landet

Scenario: En person vistas i Sverige utan giltigt tillstånd
Given Skatteverket beräknar att mellan 110 000 och 185 000 vistas i landet utan giltigt tillstånd
And antalet återvändande har ökat med 60 procent sedan 2022
When folkräkning, mottagningscenter och fler inre utlänningskontroller genomförs
Then EBO begränsas kraftigt
And informationsplikt ska omfatta Arbetsförmedlingen, Försäkringskassan, Kriminalvården, Kronofogdemyndigheten, Pensionsmyndigheten och Skatteverket
Output 350 000 kronor i återvandringsbidrag för vuxna
And 25 000 kronor för barn
And högst 500 000 kronor för makar eller sambor
And högst 600 000 kronor per familj
Outcome fler som inte har rätt att vistas i landet ska lämna
