---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg-derived
title: "Nationell vårdbokning läst som system: köer flyttar till var tid finns"
status: draft
updated: 2026-08-23
summary: Ett nationellt bokningslager förkortar väntan bara där outnyttjad kapacitet redan finns; det skapar inte personal.
jurisdiction: SE
sources:
  - title: Vård och omsorg
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/vard-och-omsorg
tags:
  - healthcare
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg
party: centerpartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg.md
sourceDigest: "sha256-48f21b7d2664eaa5"
assumptions:
  - en bokningsväxel matchar patienter till lediga tider; den lägger inte till läkare eller sjuksköterskor
  - landsbygdskliniker utan ledig kapacitet kan inte uppfylla en nationell valrätt
  - en mix av offentliga och privata utförare förkortar väntan där privat tillgång finns, och sorterar via förmåga att navigera där den saknas
  - en namngiven läkare är ett kontinuitetsanspråk som fortfarande behöver personantal som politiken inte finansierar här
---

# Our understanding

> Val plus en nationell växel flyttar efterfrågan till den som har ledig tid. Geografi binder ändå om kliniken saknar kapacitet att erbjuda. Privata utförare kan kapa väntan där de redan verkar, och lämnar tunna områden som de är. Bättre karriärvägar för personal namnges utan löne- eller timinstrument.

System: Vårdbokning som matchningslager över befintlig kapacitet

Scenario: En patient i en lång regional kö erbjuds tid i annat län
Given väntelistor som skiljer sig per län
And en bokningsväxel som låter patient söka vård var i landet som helst
When patienten tar en tid långt hemifrån
Then hemläns kö förkortas med en
Outcome väntan sjunker för dem som kan resa
But kliniker utan ledig personal kan inte ta överflödet

Scenario: En landsbygdsklinik har inga lediga tider
Given rätt att välja vilken utförare som helst
And en klinik som redan är fullbokad
When en lokal patient vill ha namngiven läkare där
Then kontinuitetslöftet möter en full lista
Outcome rätten till namngiven läkare är ett anspråk på arbetskraft som politiken inte utökar här
But patienter i tunna områden väntar ändå på den som finns kvar
