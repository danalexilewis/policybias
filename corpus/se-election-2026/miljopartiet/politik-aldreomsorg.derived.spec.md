---
type: spec
id: miljopartiet-politik-aldreomsorg-derived
title: "Äldreomsorg läst som system: tid med samma arbetare är en schemaregel utan publicerat tal"
status: draft
updated: 2026-08-23
summary: Att slopa minutstyrning ger kontinuitet bara om fler timmar schemaläggs; överskottsregler och ett ombud bevakar kvalitet i efterhand.
jurisdiction: SE
sources:
  - title: Politik för äldreomsorg
    url: https://www.mp.se/politik/aldreomsorg
tags:
  - healthcare
derivesFrom: miljopartiet-politik-aldreomsorg
party: miljopartiet
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-aldreomsorg.md
sourceDigest: sha256-b8e10f91c9740a1a
assumptions:
  - att släppa minutkontroll utan bemanningstal gör besökslängd till ett lokalt schemaval betalt av kommunalskatt
  - betald studietid och kortare arbetstid minskar timmar på golvet om inte personalstyrkan ökar lika mycket
  - krav på att överskott återinvesteras är en ägarregel; det lägger inte i sig till platser eller nattpersonal
  - ett nationellt ombud är en rättighetskanal i efterhand, inte extra händer i hemtjänsten
---

# Our understanding

> Kontinuitet är testet: samma arbetare, mer tid, inget tidtagarur. Det är ett problem om personaltäthet. Vinståtervinning och ett ombud sitter nedströms om schemat faktiskt fylls.

System: Kontinuitet som ett problem om arbetstäthet

Scenario: Minutkontrollen upphör
When besökstid inte längre skivas per minut och personalen får använda omdöme
Then besök kan vara så långa som arbetet kräver
Outcome äldre ska möta färre nya ansikten
But utan ett publicerat tal personal per boende kommer extra minuterna från det befintliga laget eller från övertid

Scenario: Ett ombud bevakar rättigheter efter skada
When ett nationellt äldreombud tillsätts
Then vanvård, våld och övergrepp har en namngiven vakthund
Outcome familjer har en rättighetsväg utanför kommunen
But ombudet bemannar inte kvällspasset
