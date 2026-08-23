---
type: spec
id: miljopartiet-politik-gron-ekonomi-derived
title: "Grön ekonomi läst som system: ett BNP-investeringsgolv plus namngivna familjeöverföringar, med koldioxidpriset lämnat blankt"
status: draft
updated: 2026-08-23
summary: Budgetregeln spänns av en stående investeringsandel av BNP; familjer får två namngivna kronbelopp; skatten på de rikaste och tillståndspriset i nationell utsläppshandel förblir otryckta.
jurisdiction: SE
sources:
  - title: Ekonomisk politik
    url: https://www.mp.se/politik/gron-ekonomi
tags:
  - economy
  - climate
  - social-welfare
derivesFrom: miljopartiet-politik-gron-ekonomi
party: miljopartiet
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-gron-ekonomi.md
sourceDigest: sha256-625da40fada33900
assumptions:
  - ett investeringsmål som andel av BNP är ett krav på framtida budgetar; det säger inte vilken annan utgift trängs undan om överskottsmålet fortfarande binder
  - nationell utsläppshandel för säljare av fossila bränslen är ett koldioxidpris; utan golv eller första årets tillståndsvolym kan hushållsrabatten inte mätas
  - högre kapital- och förmögenhetsskatt i toppen är den avsedda finansieringen; skattesatser är onamngivna, så familjeöverföringarna är mer preciserade än sin finansiering
  - att indexera statsbidrag till kommunerna är en kostnadseskalator som följer priser, inte ett engångspåslag
---

# Our understanding

> Två kronbelopp landar på familjer. En BNP-andel landar på offentliga investeringar. Koldioxidpriset och förmögenhetsskattesatserna — instrumenten som ska betala båda — är inte tryckta. Indexerade kommunbidrag följer sedan kostnaderna automatiskt.

System: Namngivna överföringar, oprissatt koldioxid

Scenario: Familjeöverföringar lyfts med namngivna kronbelopp
When barnbidrag och ett ensamståendetillägg stiger med de tryckta beloppen
Then de hushållen får ett stående månatligt påslag
Outcome trycket från mat och boende ska lätta för barnfamiljer
But bostadsbidraget utlovas bara en höjning, inte ett kronbelopp, så den delen förblir oprissatt

Scenario: En investeringsregel som BNP-andel läggs till det finanspolitiska ramverket
When offentliga klimat- och välfärdsinvesteringar siktas som en andel av BNP varje år
Then staten förbinder sig till ett flöde av kapitalutgifter som växer med ekonomin
Outcome överskottsmålet är inte längre det enda finanspolitiska ankaret
But om överskottsmålet fortfarande binder måste något annat i budgeten ge vika, och det något namnges inte
