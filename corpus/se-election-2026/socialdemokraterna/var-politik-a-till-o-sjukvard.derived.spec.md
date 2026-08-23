---
type: spec
id: socialdemokraterna-var-politik-a-till-o-sjukvard-derived
title: "Personalsatsning och försäkringsförbud read as a system: kön kortas med öronmärkta miljarder medan basen hänger på inflationsuppräkning"
status: draft
updated: 2026-08-23
summary: Köerna möts med en namngiven personalsatsning, medan regionernas löpande bas bara räknas upp med inflationen och förbudet mot försäkringar omfördelar kön utan att själv skapa vårdplatser.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/sjukvard
tags:
  - healthcare
derivesFrom: socialdemokraterna-var-politik-a-till-o-sjukvard
party: socialdemokraterna
clusters:
  - health-care
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-sjukvard.md
sourceDigest: sha256-b73dfa415e6a071f
assumptions:
  - inflationsuppräkning av statsbidrag täcker prisökningen men inte mer vård om köerna beror på för få platser eller personal
  - en engångsnämnd personalsatsning tar slut när beloppet är förbrukat, medan köerna återkommer om basen inte räcker
  - förbud mot privata försäkringar i offentlig vård flyttar patienter i kön; det tillför inte sängar
  - nollvision mot dödsfall av platsbrist binder politiskt utan att ange hur många platser som måste till
---

# Our understanding

> Köerna bemöts med en öronmärkt personalsatsning och mer pengar till förlossningen, medan regionernas vardag bara räknas upp med inflationen. Förbudet mot privata sjukvårdsförsäkringar i den offentligt finansierade vården tar bort en genväg, men skapar inte vårdplatser. Bindande riktvärden och nollvisionen mot dödsfall av platsbrist sätter mål utan att säga hur kapaciteten byggs.

System: Inflationsindexerad bas och öronmärkt köpeng

Scenario: En region möter nästa års löner och hyror
Given statsbidrag som räknas upp med inflationen varje år
And köer som kräver mer personal än i dag
When inflationen räknas av men köerna finns kvar
Then basen följer priserna, inte vårdbehovet
Outcome personalsatsningen måste bära mer än den namngivna kön
But när satsningen är förbrukad återstår bara uppräkningen

Scenario: En patient med privat försäkring söker offentlig vård
Given privata sjukvårdsförsäkringar som ger företräde i den offentligt finansierade vården
When försäkringarna förbjuds där
Then den försäkrade väntar i samma kö som den oförsäkrade
Outcome gräddfilen stängs
But kön kortas inte av förbudet i sig

Scenario: Ett sjukhus saknar vårdplatser
Given bindande riktvärden för vårdplatser och en nollvision mot dödsfall orsakade av platsbrist
When beläggningen blir för hög
Then riktvärdet kan konstateras utan att sängarna finns
Outcome ansvaret för kapaciteten ligger kvar på den som ska bemanna rummen
But nollvisionen bär ingen egen finansiering
