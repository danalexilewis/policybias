---
type: spec
id: sverigedemokraterna-a-till-o-asylinvandring
title: Asyl i första säkra land, avskaffat EBO och mottagande på EU:s miniminivå
status: draft
updated: 2026-08-23
summary: Asylinvandringen ska vara så låg som möjligt genom asyl i första säkra land, återvändande när hemlandet är tryggt, avskaffat EBO och mottagande på EU:s miniminivå.
jurisdiction: SE
sources:
  - title: Asylinvandring
    url: https://www.sd.se/a-till-o/asylinvandring/
tags:
  - immigration
party: sverigedemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-asylinvandring.md
sourceDigest: "sha256-94a00538c916c687"
gaps:
  - hur låg asylinvandringen ska vara i antal personer anges inte
  - vilka länder som räknas som första säkra land anges inte
  - hur återvändande ska tvingas fram när personen inte reser frivilligt anges inte
  - vad som händer med den som redan bor i EBO när möjligheten upphör anges inte
  - vad EU:s miniminivå betyder i ersättning, boende och rättigheter anges inte
  - kostnaden för mer institutionsboende när EBO försvinner anges inte
---

# What the page states

> Asylinvandringen ska hållas så låg som möjligt. Asyl ska sökas i första säkra land, i normalfallet inte här. När hemlandet är tryggt ska man återvända. Eget boende för asylsökande ska upphöra, och mottagandet ska ligga på EU:s miniminivå.

System: Låg asylinvandring genom första säkra land och miniminivå

Scenario: En asylsökande kommer hit från ett annat säkert land
Given asylsökande kan välja Sverige eller andra EU-länder med förmånliga villkor
When principen om asyl i första säkra land tillämpas
Then Sverige är i normalfallet inte det första säkra landet
And det blir mindre attraktivt att missbruka asylrätten
Outcome tilldragningen till Sverige minskar

Scenario: Det är tryggt att återvända till hemlandet
When det är tryggt att åka tillbaka till hemlandet
Then ska man göra det
Outcome asylskyddet varar inte längre än skyddet behövs

Scenario: En asylsökande vill ordna eget boende
When möjligheten för asylsökande att ordna eget boende upphör
Then mottagandesystemet anpassas till EU:s miniminivå
Outcome EBO upphör och mottagandet sänks till miniminivån
