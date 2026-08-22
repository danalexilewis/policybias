---
type: spec
id: vansterpartiet-var-politik
title: Vår politik
status: draft
updated: 2026-08-22
summary: För att ge dig den bästa upplevelsen använder vi tekniker som cookies för att
  lagra och/eller få åtkomst till information på din enhet. Om du samtycker till dessa
  tekniker kan vi behandla data, såsom surfbeteende eller unika identifierare, på denna
  webbplats. Om du inte samtycker
jurisdiction: SE
sources:
  - title: Vår politik
    url: https://www.vansterpartiet.se/var-politik
tags:
  - other
party: vansterpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik.md
sourceDigest: sha256-7d24abd94d031153
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> År av marknadslösningar och privatiseringar har gjort Sverige otryggt. Det är dags för politiken att ta tillbaka kontrollen över välfärden och göra livet bättre för vanligt folk.

System: Vår politik

Scenario: Party states this policy
Given the 2026 Swedish general election is contested
When the party publishes this policy
Then Vår politik
Output För att ge dig den bästa upplevelsen använder vi tekniker som cookies för att lagra och/eller få åtkomst till information på din enhet. Om du samtycker till dessa tekniker kan vi behandla data, såsom 
Outcome the claim is the party's stated position
