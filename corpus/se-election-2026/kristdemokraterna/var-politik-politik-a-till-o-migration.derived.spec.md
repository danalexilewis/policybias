---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-migration-derived
title: "Kvotasyl läst som system: ett nordiskt genomsnitt som aldrig siffersätts"
status: draft
updated: 2026-08-23
summary: Att göra kvotan till huvudvägen för asyl och sikta mot nordiskt genomsnitt lämnar volymen, lönegolvet och verkställd återvändo ospecificerade.
jurisdiction: SE
sources:
  - title: Migration
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/migration
tags:
  - immigration
party: kristdemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-migration.md
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-migration
assumptions:
  - ett nordiskt genomsnitt är ett rörligt mål satt av grannländerna; utan siffra är det svenska inflödet odefinierat
  - högre lönegolv i låglönejobb plus undantag för bristyrken i vården drar arbetskraftspolitiken åt två håll på en gång
  - ett avslag som inte verkställs är ett pappersavslag; politiken anger regeln, inte eskorten
sourceDigest: sha256-38428a6462201fa6
---

# Our understanding

> Säkra, lagliga vägar via kvotan är den avsedda huvudvägen. Volymen är "nordiskt genomsnitt", vilket är en jämförelse, inte en siffra. Arbetstillståndsregler skärps i låglönejobb och lättas sedan igen för namngivna bristyrken i vården. Återvändo för personer utan skyddsgrund påstås, men bemannas inte.

System: Kvotväg med osiffersatt genomsnitt

Scenario: Spontan asyl trycks bort från huvudvägen
Given yttre EU-gränsen ska kontrolleras hårdare
When kvotsystemet blir huvudsättet att söka asyl
Then personer utan skyddsgrund ska lämna landet
Outcome inflödet ska ligga på nordiskt genomsnitt
But genomsnittet är inte nedskrivet som ett personantal

Scenario: Vårdbristyrken undantas från det högre lönegolvet
Given regler för låglöneutländsk arbetskraft skärps mot bedrägeri och utträngning
When vissa bristyrken, inklusive vård, undantas
Then golvet är inte enhetligt
Outcome vårdarbetsgivare kan anställa på gamla villkor medan andra låglönesektorer inte kan
But lönenivån på golvet anges inte
