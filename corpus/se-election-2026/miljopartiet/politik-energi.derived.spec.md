---
type: spec
id: miljopartiet-politik-energi-derived
title: "Energi läst som system: förnybar utbyggnad och grön baskraft, med kärnkraft utesluten och notan otryckt"
status: draft
updated: 2026-08-23
summary: Vind, sol och ett gigawattmål för grön baskraft ska sänka priser; att slopa ny kärnkraft tar bort ett långsamt alternativ, medan stöd till lagring, nät och effektivisering förblir okostade.
jurisdiction: SE
sources:
  - title: Energi och energieffektivisering
    url: https://www.mp.se/politik/energi
tags:
  - energy
derivesFrom: miljopartiet-politik-energi
party: miljopartiet
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-energi.md
sourceDigest: sha256-324a7404a3d5dc69
assumptions:
  - ett gigawattmål för grön baskraft är ett kapacitetsmål; lagring, vattenkraftsuppgraderingar, bioturbiner och kraftvärme har olika ledtider politiken inte splittar
  - att behålla det kommunala vetot och be om ett tidigare beslut låter fortfarande en kommun stoppa en plats, så utbyggnad från nät till hav kan vänta på lokalt ja
  - elektrifieringsavtal sänker hushållspriser bara om ny tillförsel kommer före industriell efterfrågan; sekvensen är onamngiven
  - att avvisa ny kärnkraft betyder att väderberoende verk plus baskraftmixen måste bära vintertoppar politiken inte simulerar
---

# Our understanding

> Prisavlastning ska komma från mer vind och sol, från att använda mindre el, och från grön baskraft på en gigawattklocka. Ny kärnkraft tas av bordet. Det kommunala vetot finns kvar, så lokalt nej stoppar fortfarande en turbin. Inget av stöden bär ett kronbelopp.

System: En förnybar stack med ett oprissatt baskraftmål

Scenario: Grön baskraft siktas i gigawatt
When grön baskraft planeras i den tryckta gigawattskalan
Then lagring, vattenkraft, kraftvärme och bioturbiner ska täcka stilla, mörka timmar
Outcome vintertoppar ska mötas utan ny kärnkraft
But vilka av de teknikerna som faktiskt byggs, och till vilket stöd, splittas inte ut

Scenario: En kommun kan fortfarande säga nej
When det kommunala vetot behålls och bara tidpunkten för beslutet dras fram
Then lokalt samtycke förblir en grind för landbaserad vind
Outcome grannar kan få mer betalt, och erbjudas andelar, men ett nej stoppar ändå platsen
But havsbaserat nät kan byggas och ändå vänta på landtagning och lokal process
