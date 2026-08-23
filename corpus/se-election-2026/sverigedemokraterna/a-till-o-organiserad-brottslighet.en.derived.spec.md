---
type: spec
id: sverigedemokraterna-a-till-o-organiserad-brottslighet-derived
title: "Organiserad brottslighet read as a system: mer tid bakom lås, förbudet väntar på grundlagen"
status: draft
updated: 2026-08-23
summary: Dubbla straff kan börja verka före nästa val; medlemsförbudet kan det inte, eftersom grundlagen kräver två beslut och sidan bara lovar det första.
jurisdiction: SE
sources:
  - title: Organiserad brottslighet
    url: https://www.sd.se/a-till-o/organiserad-brottslighet/
tags:
  - crime-and-justice
derivesFrom: sverigedemokraterna-a-till-o-organiserad-brottslighet
party: sverigedemokraterna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-organiserad-brottslighet.md
sourceDigest: sha256-b2b172f20e64eac5
assumptions:
  - dubbla straff för gängbrott ökar tiden i anstalt; utan nya platser blir kön till fängelset trycket som hushållen inte ser
  - gängtillhörighet måste bevisas i domstol; sidan säger inte vilket beviskrav som ska gälla
  - två grundlagsbeslut kan inte båda hinna före ett enda val om det andra ska tas av en ny riksdag
  - medlemsförbud utan legal definition av kriminell organisation riskerar att antingen bli tandlöst eller att träffa vidare än gäng
lang: en
translationOf: sverigedemokraterna-a-till-o-organiserad-brottslighet-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2622b3dfa9238433
---

# Our understanding

> Straffen skärps nu, och ska för gängbrott fördubblas före nästa val. Förbudet mot att ingå i en kriminell organisation kräver två grundlagsbeslut; bara det första utlovas. Den som sitter inne tar tid i anstalt. Organisationen kan leva vidare tills det andra beslutet kommer, om det kommer.

System: Straff som biter före valet, förbud som väntar på nästa riksdag

Scenario: Dubbla straff börjar gälla medan anstaltsplatserna är desamma
Given straffen redan skärpts för flera brott som gängkriminella begår
When dubbla straff införs för gängbrott
Then fler dömda ska sitta inne längre
But sidan säger inte var de ska sitta
Outcome tiden bakom lås ökar; kapaciteten i anstalt är en tyst begränsning

Scenario: Det första grundlagsbeslutet tas före valet
Given två grundlagsbeslut behövs för att göra medlemskap olagligt
When bara det första beslutet fattas
Then det fortfarande är lagligt att vara med i organisationen
Outcome förbudet blir ett vallöfte som nästa riksdag måste fullfölja, inte en regel som redan gäller
