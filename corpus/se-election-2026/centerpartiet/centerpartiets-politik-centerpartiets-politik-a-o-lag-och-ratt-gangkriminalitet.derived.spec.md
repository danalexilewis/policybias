---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet-derived
title: "Dubbelfront i gängpolitik läst som system: listade verktyg är nästan bara repressiva"
status: draft
updated: 2026-08-23
summary: Avlyssning och vittnesskydd kan höja upptäckter; preventionsspetsen som namnges som starkare lokal förankring har inget instrument i politiken.
jurisdiction: SE
sources:
  - title: Gängkriminalitet
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/lag-och-ratt/gangkriminalitet
tags:
  - crime-and-justice
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet
party: centerpartiet
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-lag-och-ratt-gangkriminalitet.md
sourceDigest: "sha256-7e2f79bb2ae9e874"
assumptions:
  - strängare straff förändrar beteende bara om upptäckt och rättegång fortfarande följer
  - hemlig avlyssning höjer evidens mot dem som redan är i nätet, inte mot barn som ännu inte rekryterats
  - ett utträdesprogram fungerar om jobb och skydd finns efter utträdet; ingen storlek anges här
  - nolltolerans mot skadegörelse är extra polistid i områden som redan saknar det
---

# Our understanding

> Politiken kräver två fronter samtidigt, och listar sedan vapenstraff, hemlig avlyssning, vittnesskydd, utträdesprogram och en hård linje mot småbrott. Starkare lokal förankring namnges i rubriken och preciseras inte som budget eller tjänst. Rekrytering av nästa kohort kan fortsätta medan mer av den nuvarande låses in.

System: Repressiva verktyg utan angiven preventionbudget

Scenario: En tonåring erbjuds pengar för att gå med innan något straff slår till
Given rekrytering som börjar före första fällande dom
When straff för gängrelaterad brottslighet skärps
Then tonåringen är ännu inte i straffnätet
Outcome tillflödet av nya medlemmar kan fortsätta
But listade verktyg kommer efter första brottet, inte före erbjudandet

Scenario: En vittne talar efter att skyddet stärkts
Given en tystnadskultur i området
When vittnet vittnar
Then en åtal kan drivas
Outcome mer av nuvarande kohort kan låsas in
But den lokal förankring som skulle minska rekryteringen är fortfarande onamngiven som program
