---
type: spec
id: moderaterna-var-politik-klimat-miljo-och-energi-derived
title: "Kärnkraft i söder läst som system: staten bär byggrisken medan hushållen lovas låga effektavgifter"
status: draft
updated: 2026-08-23
summary: Statligt ägande och finansiering av ny kärnkraft socialiserar byggrisken, medan 1,5 miljoner ton till 2030 väljs före bränsleskatt och ESR kan missas.
jurisdiction: SE
sources:
  - title: Klimat, miljö och energi
    url: https://moderaterna.se/var-politik/klimat-miljo-och-energi
tags:
  - climate
derivesFrom: moderaterna-var-politik-klimat-miljo-och-energi
party: moderaterna
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-klimat-miljo-och-energi.md
sourceDigest: "sha256-ebd4615cfe201a6d"
assumptions:
  - ny kärnkraft i söder tar många år, så 3 800 MW ersätts inte under mandatperioden
  - statligt ägande och finansiering lägger byggrisk på skattebetalare om kalkylen spricker
  - 1,5 miljoner ton till 2030 är valt i stället för högre bensinpris, vilket gör ESR-gapet medvetet
---

# Our understanding

> Staten tar risk i ny kärnkraft så att hushållen inte ska behöva styra livet efter effektavgifter, men att riva ner gick fort och att bygga tar år. Budgetens utsläppsminskning räcker inte för ESR 2030.

System: Statlig risk i baskraft mot hushållens effekt

Scenario: Effektbristen i söder möts med reaktorer som inte finns än
Given södra Sverige förlorade 3 800 MW planerbar elproduktion
When staten går in med finansiering, regelverk och ägande
Then ny kärnkraft ska på sikt mata söder
Outcome hushållen lovas att slippa planera efter effektavgifter
But åren till spadtag bärs som tyska priser i elområde tre och fyra

Scenario: Utsläppsmålet till 2030 möts inte med bränsleskatt
When budgeten sänker utsläppen utan att höja bensinpriset
Then ESR-åtagandet till 2030 blir svårt att nå
Output 1,5 miljoner ton lägre utsläpp till 2030
Outcome den återstående minskningen skjuts på dyrare åtgärder eller senare år
But hushåll med bil slipper prissignalen som skulle ha burit ESR
