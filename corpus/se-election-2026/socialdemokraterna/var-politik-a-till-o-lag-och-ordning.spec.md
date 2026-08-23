---
type: spec
id: socialdemokraterna-var-politik-a-till-o-lag-och-ordning
title: "Fler poliser, maffialag och dubbla straff mot gäng"
status: draft
updated: 2026-08-23
summary: Polisen ska växa, en svensk maffialag med kollektivt straffansvar införs, och straffen skärps för gängkriminella och för den som rekryterar barn.
jurisdiction: SE
sources:
  - title: Lag och ordning
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/lag-och-ordning
tags:
  - crime-and-justice
party: socialdemokraterna
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-lag-och-ordning.md
sourceDigest: sha256-adf544b3811ed04c
gaps:
  - hur många anställda Polisen har i dag, mot målet, är inte angivet
  - årskostnaden för att nå 50 000 anställda i Polisen är inte angiven
  - hur förverkandefonden fördelas mellan brottsdrabbade områden och civilsamhället är inte angivet
  - hur fotboja eller personlig följeslagare väljs för den unge på väg in i kriminalitet är inte angivet
---

# What the page states

> Brottsligheten minskar generellt, men den grövre gängkriminaliteten sprider skräck och underminerar tilliten.
> Straffen skärps för gäng, organiserad brottslighet och mäns våld mot kvinnor, och en svensk maffialag med kollektivt straffansvar ska nå gängtopparna.
> Polisen ska växa i hela landet, och ytterligare nedläggning av polisstationer i glesbygd stoppas.

System: Fler poliser och maffialag

Scenario: Gängtoppar lagförs medan Polisen växer
Given den växande och allt grövre gängkriminaliteten sprider skräck samtidigt som brottsligheten generellt minskar
When en svensk maffialag införs och straffen för gängkriminella skärps
Then gängtopparna grips och lagförs med kollektivt straffansvar, och gängkriminella får dubbla straff
Output 50 000 anställda i Polisen
And minst 34 000 poliser
Outcome tryggheten återupprättas och nedläggningen av ytterligare polisstationer i glesbygd stoppas
