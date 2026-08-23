---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-forsvar-derived
title: "3,5 procent av BNP läst som system: en ram utan förbandsstruktur"
status: draft
updated: 2026-08-23
summary: Rubriken är en budgetandel, inte en lista på brigader; försvar i hela landet, civilt försvar och ett ytterligare NATO-mål drar alla på samma opreciserad delning.
jurisdiction: SE
sources:
  - title: Försvar
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/forsvar
tags:
  - defence
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-forsvar
party: centerpartiet
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-forsvar.md
sourceDigest: "sha256-b0f5ec315fd09591"
assumptions:
  - 3,5 procent av BNP är en ram; materiel, löner och civila beredskapslager konkurrerar inuti den
  - att stationera i hela landet sprider styrkor som en koncentrerad försvarssats skulle massera
  - extra NATO-mål bortom 3,5 procent, att uppnå så snart det är praktiskt möjligt, är en öppen andra nota
  - civilt försvar i kommuner namnges utan en del av ramen
---

# Our understanding

> Rysslands krig är givet. Anslagsmålet 3,5 procent av BNP är det avläsbara löftet, plus ett löfte att följa ytterligare NATO-mål när det är praktiskt möjligt. Närvaro i varje miljö, från södra slätt till norra skog, är ett geografiskt anspråk som kostar poster och människor. Civilt försvar via kommuner och regioner är ett andra anspråk på samma ram. Volontärer ombedes bära lokal beredskap. Ingen delning är angiven.

System: En BNP-andel som flera uppdrag gör anspråk på samtidigt

Scenario: Ramen delas mellan närvaro, materiel och civila beredskapslager
Given en försvarsbudget satt som andel av BNP
When armé, marin, flyg och kommuner alla drar på den
Then varje uppdrag kan namnges utan delning i kronor
Outcome andelen kan nås medan några av de namngivna uppgifterna förblir tunna
But läsaren kan inte se vilken uppgift förlorar

Scenario: Ett ytterligare NATO-mål ska uppnås så snart det är praktiskt möjligt
Given den BNP-andel som redan lovats
When det extra NATO-målet läggs till
Then tidsplanen är uttrycket så snart det är praktiskt möjligt
Outcome den andra notan har inget år
But den första ramen är redan ifylld av närvaro och civilt försvar
