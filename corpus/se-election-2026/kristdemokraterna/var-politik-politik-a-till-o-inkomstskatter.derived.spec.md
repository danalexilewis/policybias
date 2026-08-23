---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter-derived
title: "Hälften i handen läst som system: ett tak på toppmarginalen utan kronosänkning"
status: draft
updated: 2026-08-23
summary: En toppmarginal på 50 procent och ett tak på 15 procent för hur många som betalar statlig inkomstskatt är mål; den breda sänkning som skulle ta dit är oprissad, medan extra lättnad vid 23 och 69 träffar kanterna.
jurisdiction: SE
sources:
  - title: Inkomstskatter
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/inkomstskatter
tags:
  - taxation
party: kristdemokraterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-inkomstskatter.md
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter
assumptions:
  - höjt brytpunkt för statlig skatt och slut på avtrappning av jobbskatteavdrag är redan gjorda; de levererar inte halva i handen av sig själva
  - ett tak på andelen som betalar statlig skatt är ett fördelningsval: någon annans skattesats eller högre brytpunkt måste röra sig
  - extra avdrag från 69 och sänkningar för dem långt från arbete flyttar deltagande vid kanterna mer än de ändrar toppmarginalen
  - en bred sänkning för alla i arbete har en öppen finansieringsnota tills ett kronobelopp trycks
sourceDigest: sha256-d150f8d4583d6b5f
---

# Our understanding

> Hälften i handen är ett tak, inte en tabell. Politiken vill också att högst 15 procent av inkomsttagarna ska betala statlig skatt. De två taken kan uppfyllas med högre brytpunkt, lägre skattesats eller båda. Den breda sänkningen för alla i arbete är 2026-erbjudandet, och den har inga kronor knutna. Extra lättnad för dem långt från arbete, för unga upp till 23, och ytterligare jobbskatteavdrag från 69 sitter vid kanterna.

System: Hälften i handen som tak utan prissatt sänkning

Scenario: Alla i arbete får sänkning medan taket på toppmarginalen fortfarande är ett mål
Given brytpunkten för statlig skatt har redan höjts
And avtrappningen av jobbskatteavdraget vid högre lön redan är borta
When breda skattesänkningar för alla i arbete införs
Then arbete, utbildning och extra ansvar ska lönas mer
Output 50 procent som tak på toppmarginalen
And 15 procent av inkomsttagarna som tak på hur många som betalar statlig inkomstskatt
Outcome nettolönen ska stiga
But finansieringskostnaden för den breda sänkningen är öppen

Scenario: Extra lättnad riktas mot unga, nyanlända och äldre arbetande
When riktade sänkningar når långtidsarbetslösa, nyanlända och personer upp till 23, och jobbskatteavdraget stärks från 69
Then incitamentet att ta ett första jobb eller att stanna i arbete längre är det uttalade syftet
Outcome deltagande vid kanterna är spaken, inte toppmarginalen
But storleken på de avdragen anges inte
