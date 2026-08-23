---
type: spec
id: socialdemokraterna-var-politik-a-till-o-militart-forsvar-derived
title: "Beredskapsskatt read as a system: en osagd skattesats ska bära både värnplikt och industriägarskap"
status: draft
updated: 2026-08-23
summary: Numerären kan räknas, men skatten som ska skydda välfärden har ingen sats, så samma kassa ska bära regementen, ubåt och eventuellt delägarskap i industrin.
jurisdiction: SE
sources:
  - title: Militärt försvar
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/militart-forsvar
tags:
  - defence
derivesFrom: socialdemokraterna-var-politik-a-till-o-militart-forsvar
party: socialdemokraterna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-militart-forsvar.md
sourceDigest: sha256-36fbafc6d83cac10
assumptions:
  - en beredskapsskatt utan sats kan inte visas skydda välfärden; det är ett löfte om en källa, inte en källa
  - att gå från 12 000 till 20 000 värnpliktiga kräver instruktörer, förläggning och materiel som konkurrerar med den stående styrkan
  - nya regementen i Kiruna och Kvarn är signal och kostnad innan bataljonen är krigsduglig
  - statligt delägarskap i SAAB binder kapital som annars kunde köpa ubåt eller luftvärn
---

# Our understanding

> Värnpliktsmålen är räknade. Skatten som ska betala dem är det inte. Utan sats kan välfärden trängas ut av samma upprustning som skatten skulle skydda. Regementen i norr och en amfibiebataljon på Gotland är markeringar som kräver folk innan de avskräcker. Delägarskap i försvarsindustrin är en andra räkning mot samma osagda källa.

System: Osagd skatt mot räknad numerär

Scenario: Beredskapsskatten ska bära upprustningen
Given en beredskapsskatt som ska säkra den permanenta utökade finansieringen
When skatten införs utan känd sats
Then källan finns som princip
Outcome välfärden sägs vara skyddad
But skyddet går inte att räkna

Scenario: Värnplikten växer mot det högre målet
Given ett mål om 12 000 värnpliktiga och på längre sikt 20 000
When fler kallas in
Then instruktörer och förläggning tas från den stående styrkan
Outcome numerären stiger
But den operativa effekten kan sjunka medan utbildningen pågår

Scenario: Staten går in som delägare i försvarsindustrin
Given statligt delägarskap i delar av försvarsindustrin, till exempel SAAB
When ägandet köps
Then kapital binds i aktier
Outcome rådigheten över säkerhetsintressen kan öka
But ubåten och luftvärnet väntar på samma kassa
