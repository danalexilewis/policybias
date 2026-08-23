---
type: spec
id: socialdemokraterna-var-politik-a-till-o-klimatpolitik-derived
title: "Sverigebränslet read as a system: pumppriset hålls med kontrakt medan EU-målet ligger utanför nationell räckvidd"
status: draft
updated: 2026-08-23
summary: Basinblandningen kan styras i upphandling, men det bindande EU-målet kräver andra medlemsstater, och snabbare tillstånd ger bara el om någon bygger.
jurisdiction: SE
sources:
  - title: Klimatpolitik
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/klimatpolitik
tags:
  - climate
derivesFrom: socialdemokraterna-var-politik-a-till-o-klimatpolitik
party: socialdemokraterna
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-klimatpolitik.md
sourceDigest: sha256-6a133611aa9c4020
assumptions:
  - långa upphandlingskontrakt kan hålla inblandningen stabil utan att sänka världsmarknadspriset på diesel
  - ett bindande EU-mål om 95 procents minskning beslutas i Bryssel, inte i riksdagen
  - ändringstillstånd som huvudregel kortar handläggning, inte byggtiden, om kapitalet uteblir
  - kompensation till glesbygd för bilberoende motverkar en del av styrmedlet som ska minska körning
---

# Our understanding

> Sverigebränslets basinblandning kan skrivas in i kontrakt. EU-målet om kraftigt sänkta utsläpp kan bara levereras om unionen går med. Ändringstillstånd som huvudregel tar bort ett hinder, inte hela investeringen. Stöd till elbilsleasing och kompensation till landsbygd håller omställningen politiskt möjlig, och kan samtidigt hålla kvar bilberoendet.

System: Kontrakterad inblandning mot överstatligt mål

Scenario: En åkare tankar under Sverigebränslet
Given en stabil basinblandning med långa upphandlingskontrakt
When kontrakten gäller
Then inblandningen ligger fast oavsett månadens spotpris
Outcome utsläppen från drivmedlet vid pumpen kan minska
But priset pressas bara om kontraktet är billigare än den rena fossila literen

Scenario: EU-målet ska bindas
Given ett mål om minst 95 procents minskning av koldioxidutsläppen
When målet förhandlas i EU
Then Sveriges röst räcker inte ensam
Outcome den inhemska politiken kan missa målet trots Sverigebränslet
But ansvaret syns som ett svenskt löfte

Scenario: Vindkraft väntar på kommunens ja
Given starkare incitament för kommuner att medverka till utbyggd vindkraft
When kommunen väger störning mot ersättning
Then tillståndet kan gå fortare
Outcome elen tillkommer bara om någon bygger
But incitamentet är inte prissatt
