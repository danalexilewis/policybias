---
type: spec
id: sverigedemokraterna-a-till-o-asylinvandring-derived
title: "Asylinvandring read as a system: Sverige ska sluta vara destinationen"
status: draft
updated: 2026-08-23
summary: Första säkra land, avskaffat EBO och EU:s golv ska göra det mindre värt att söka sig hit; sidan säger inte vart ärendena då tar vägen eller vad golvet kostar.
jurisdiction: SE
sources:
  - title: Asylinvandring
    url: https://www.sd.se/a-till-o/asylinvandring/
tags:
  - immigration
derivesFrom: sverigedemokraterna-a-till-o-asylinvandring
party: sverigedemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-asylinvandring.md
sourceDigest: sha256-94a00538c916c687
assumptions:
  - första säkra land flyttar prövningen till det land den sökande redan rest igenom, om det landet tar emot
  - EU:s miniminivå är ett golv andra medlemsländer kan ligga över; sänkt svensk nivå ändrar relativ attraktion, inte asylrätten i unionen
  - när EBO upphör måste staten eller kommunen hysa samma personer; institutionsplatser kostar mer per dygn än eget boende, men beloppet saknas
  - återvändande när det är tryggt kräver avtal med hemlandet och tvång om personen vägrar; sidan nämner bara att man ska åka
lang: en
translationOf: sverigedemokraterna-a-till-o-asylinvandring-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-bc46fe6751544d40
---

# Our understanding

> Asyl ska sökas någon annanstans, och villkoren här ska inte dra hit den som kan välja. EBO och ett mottagande över miniminivån är det som ska tas bort. Sidan säger inte vilket land som då tar ärendet, vad miniminivån är värd, eller hur den som inte vill återvända tvingas iväg. Destinationen ska sluta vara Sverige. Trycket försvinner inte.

System: Attraktion ned, prövningen någon annanstans

Scenario: Första säkra land säger nej till att ta tillbaka personen
Given principen om asyl i första säkra land
And i normalfallet är det inte Sverige
When det andra landet vägrar ta emot
Then ärendet kan bli kvar här ändå
Outcome låg asylinvandring beror på andra staters vilja, inte bara på den egna regeln

Scenario: EBO stängs medan samma asylsökande fortfarande är här
Given asylsökande kan i dag ordna eget boende
When den möjligheten upphör
Then mottagandet ska ner till EU:s miniminivå
But någon måste då tillhandahålla sängplatserna som EBO inte längre bär
Outcome kostnaden flyttar från den sökandes hyra till anläggningsboende, utan belopp på sidan
