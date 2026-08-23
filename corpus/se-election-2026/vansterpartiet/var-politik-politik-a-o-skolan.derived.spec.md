---
type: spec
id: vansterpartiet-var-politik-politik-a-o-skolan-derived
title: "Skolvinstförbud läst som system: sortering kan överleva om valet finns kvar"
status: draft
updated: 2026-08-23
summary: Att stoppa vinst plockar ut kassa från koncernerna, men politiken namnger det fria skolvalet som sorteringsmotorn och säger aldrig om valet i sig upphör.
jurisdiction: SE
sources:
  - title: Skolan
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/skolan
tags:
  - education
party: vansterpartiet
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-skolan.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-skolan
assumptions:
  - ett vinstförbud stoppar utdelning; det blandar inte i sig elever om familjer fortfarande väljer mellan skolor
  - politiken behandlar det fria skolvalet som orsak till segregation, men interventionen den namnger är vinst, statlig styrning och tillit till närområdet
  - statligt övertagande omfördelar mellan kommuner först när en formel finns; ingen är tryckt
  - mer resurser efter årtionden av nedskärningar är obegränsat tills en krona eller ett lärarantal namnges
sourceDigest: "sha256-34bb3a0c3dee79cd"
---

# Our understanding

> Pengar som lämnar skolkoncerner är inte detsamma som att elever blandas. Politiken säger att det fria valet samlar olika bakgrunder på olika skolor, och svarar med vinstförbud och statlig huvudman. Om valet finns kvar kan sorteringen fortsätta på ideell bas medan löftet om närområdesskolan ändå måste finansieras.

System: Vinstförbud bredvid en onämnd valregel

Scenario: Koncernerna förlorar vinst medan familjerna fortfarande väljer
Given skolvalet sorterar i dag elever efter bakgrund
And vinst på skolverksamhet är obegränsad
When rätten att ta ut vinst avskaffas men valet lämnas onämnt
Then utdelningar slutar lämna skolan
Outcome segregationen kan fortsätta genom ideellt urval och rykte
But ett barn i en svagare skola är fortfarande beroende av en resursformel som politiken inte trycker

Scenario: Staten tar skolorna utan en publicerad fördelningsnyckel
Given kommunerna driver nu skolor med krympande pengar
When staten tar tillbaka huvudmannaskapet
Then nationella politiker kan flytta pengar mellan skolor
Outcome den närmaste skolan är bara så bra som den nya fördelningen
But kommunerna förlorar kassan utan ett angivet ersättningsbelopp
Activates vansterpartiet-var-politik-politik-a-o-kriminalitet-och-kriminalvard
