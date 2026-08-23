---
type: spec
id: socialdemokraterna-var-politik-a-till-o-lag-och-ordning-derived
title: "Maffialag och polismål read as a system: kollektivt ansvar träffar toppen medan numerären dröjer till ett senare år"
status: draft
updated: 2026-08-23
summary: Kollektivt straffansvar och dubbla straff kan bita nu, medan 50 000 anställda i Polisen är ett mål långt fram och förverkandefonden förutsätter vinster som redan är beslagtagna.
jurisdiction: SE
sources:
  - title: Lag och ordning
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/lag-och-ordning
tags:
  - crime-and-justice
derivesFrom: socialdemokraterna-var-politik-a-till-o-lag-och-ordning
party: socialdemokraterna
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-lag-och-ordning.md
sourceDigest: sha256-adf544b3811ed04c
assumptions:
  - ett anställningsmål flera år framåt ändrar inte bevakningen i natt; rekrytering och utbildning tar tid
  - kollektivt straffansvar förutsätter att rätten kan knyta den enskilde till gänget, vilket är en bevisfråga
  - dubbla straff ökar fängelsetid och beläggning innan nya polisstationer i glesbygd är bemannade
  - en förverkandefond kan bara dela ut det som faktiskt har tagits i beslag
---

# Our understanding

> Maffialagen och de dubbla straffen kan verka så fort de gäller. Polismålet ligger längre fram, så glesbygden kan få kvarvarande stationer utan att numerären är fylld. Förverkandefonden ger brottsdrabbade områden bara det som redan har tagits från vinsterna. Fotboja och följeslagare träffar den unge, inte gängtoppen.

System: Straff som biter nu mot numerär som kommer senare

Scenario: Ett gäng åtalas under maffialagen innan Polisen nått målet
Given kollektivt straffansvar för gängtoppar och ett mål om fler anställda längre fram
When gängtopparna lagförs
Then ansvaret kan falla på fler än den som höll vapnet
Outcome toppen kan nås utan att gatunumerären är fylld
But bevisbördan för kopplingen till gänget ligger kvar

Scenario: Fängelserna tar emot dubbla straff
Given dubbla straff för gängkriminella
When fler döms till längre tid
Then beläggningen stiger
Outcome avskräckningen ökar
But Kriminalvården bär kapaciteten som inte nämns

Scenario: Ett brottsdrabbat område väntar på förverkandefonden
Given pengar från beslagtagna brottsvinster till satsningar i utsatta områden
When fonden ska dela ut
Then bara realiserade beslag finns att fördela
Outcome civilsamhället får ett flöde som följer brottsframgång, inte behov
But ett år utan beslag ger ett år utan satsning
