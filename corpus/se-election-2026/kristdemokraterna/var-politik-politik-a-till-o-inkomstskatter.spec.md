---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter
title: Högst hälften i marginalskatt och sänkt skatt på arbete
status: draft
updated: 2026-08-23
summary: Ingen ska betala mer än 50 procent i högsta marginalskatt, högst 15 procent av inkomsttagarna ska betala statlig inkomstskatt, och skatten sänks brett för den som arbetar.
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
sourceDigest: sha256-d150f8d4583d6b5f
gaps:
  - storleken på de breda skattesänkningarna i kronor anges inte
  - den samlade offentligfinansiella kostnaden anges inte
  - när målet om hälften kvar är nått anges inte
---

# What the page states

> Inkomstskatterna ska utformas så att arbete, utbildning och ansvarstagande lönar sig. Målet är hälften kvar: ingen ska betala mer än 50 procent i högsta marginalskatt, och inte fler än 15 procent av inkomsttagarna ska betala statlig inkomstskatt. Skiktgränsen har höjts och avtrappningen av jobbskatteavdraget för högre inkomster är borttagen. Breda sänkningar föreslås för alla som arbetar, plus riktade sänkningar till långtidsarbetslösa, nyanlända och unga upp till 23 år, och ett ytterligare förstärkt jobbskatteavdrag från 69 år.

System: Inkomstskatt med tak för marginalen

Scenario: Den som tar mer ansvar på jobbet ska behålla mer av lönen
Given skiktgränsen i den statliga inkomstskatten har höjts
And avtrappningen av jobbskatteavdraget för högre inkomster är borttagen
When breda skattesänkningar införs för alla som arbetar
Then arbete, utbildning och ansvarstagande ska löna sig
And den enskilde ska i största möjliga utsträckning få behålla sin lön
Output 50 procent som tak för högsta marginalskatt
And 15 procent av inkomsttagarna som tak för vilka som betalar statlig inkomstskatt
And riktade skattesänkningar till långtidsarbetslösa, nyanlända och unga upp till 23 år
And ytterligare förstärkt jobbskatteavdrag för personer som är 69 år eller äldre
Outcome det ska bli mer lönsamt att arbeta längre
