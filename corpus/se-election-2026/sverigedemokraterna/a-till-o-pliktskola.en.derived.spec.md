---
type: spec
id: sverigedemokraterna-a-till-o-pliktskola-derived
title: "Pliktskola read as a system: närvarokrav utan verktyg"
status: draft
updated: 2026-08-23
summary: Skolplikt utsträcks till alla barn som vistas i landet, men sidan namnger varken sanktion, myndighet eller hur många barn det gäller.
jurisdiction: SE
sources:
  - title: Pliktskola
    url: https://www.sd.se/a-till-o/pliktskola/
tags:
  - education
derivesFrom: sverigedemokraterna-a-till-o-pliktskola
party: sverigedemokraterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-pliktskola.md
sourceDigest: sha256-ecda7d8524be6213
assumptions:
  - barn som vistas i Sverige men inte är folkbokförda saknar ofta adress och vårdnadshavare som skolan kan kräva närvaro av
  - stärkt kontroll utan namngivet verktyg kan bli allt från brev till viten; sidan väljer inte
  - vårdnadshavares ansvar biter bara om någon myndighet får ett tydligt uppdrag att ingripa
  - sidan är för kort för att skilja på barn som aldrig skrivits in och barn som skolkar efter inskrivning
lang: en
translationOf: sverigedemokraterna-a-till-o-pliktskola-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e8429d1789666a80
---

# Our understanding

> Plikten ska gälla varje barn som vistas i landet, och någon ska se till att den följs. Sidan säger inte vem som kontrollerar, med vilket tvång, eller hur många barn det rör. Utan folkbokföring och utan sanktion är kontrollen ett mål, inte en mekanism.

System: Skolplikt som krav utan genomförandeled

Scenario: Ett barn vistas här utan att skolan vet var det bor
Given skolplikt ska omfatta alla barn som vistas i Sverige
And sidan säger inte hur barn utan folkbokföring hittas
When barnet inte kommer till undervisningen
Then kontrollen saknar namngiven väg till vårdnadshavaren
Outcome plikten finns på papperet medan barnet kan förbli osynligt för skolan

Scenario: En vårdnadshavare släpper inte iväg barnet
Given samhället ska säkerställa att skolplikten följs
When vårdnadshavaren inte tar sitt ansvar
Then sidan säger inte om vite, socialtjänst eller polisanmälan följer
Outcome ansvaret läggs på vårdnadshavaren utan att kostnaden för att driva in det är beskriven
