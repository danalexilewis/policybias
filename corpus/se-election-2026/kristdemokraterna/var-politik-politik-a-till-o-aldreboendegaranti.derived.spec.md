---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-aldreboendegaranti-derived
title: "Självbedömt rätt vid 85 läst som system: efterfrågan utan namngiven extra plats"
status: draft
updated: 2026-08-23
summary: En lagstadgad rätt att flytta vid 85 på egen bedömning är en efterfrågegaranti; om platserna inte växer blir rätten en kö.
jurisdiction: SE
sources:
  - title: Äldreboendegaranti
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/aldreboendegaranti
tags:
  - elderly-care
party: kristdemokraterna
clusters:
  - elderly-welfare
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-aldreboendegaranti.md
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-aldreboendegaranti
assumptions:
  - en rätt utan ledig plats är en plats på en lista; politiken säger att fler platser behövs men anger inte hur många
  - att släppa tyngre behovsprövning vid 85 flyttar fram flyttar som dagens tester skjuter upp, så efterfrågan hoppar före beståndet
  - kommuner måste både stimulera särskilt boende och göra det lättare att bo kvar hemma; de två användningarna konkurrerar om samma lokala kapital
sourceDigest: sha256-4ad8468bd25c14bd
---

# Our understanding

> Vid 85 ska behovsprövningen falla bort. Den som känner sig otrygg kan begära en plats. Det är en efterfrågerätt. Politiken säger redan att fler äldreboendeplatser krävs för de demografiska åren framöver. Om beståndet inte växer först är rätten en biljett att vänta.

System: Rätt vid 85 som efterfrågan utan bestånd

Scenario: Någon över 85 begär en plats innan beståndet har vuxit
Given kommuner fortfarande behovsprövar hårt i dag
When den lagstadgade rätten att flytta på egen bedömning börjar gälla
Then ansökningar kommer utan matchande ledigt rum
Output 85 som åldern då prövningen ska falla bort
Outcome självbestämmande utlovas
But den extra platsen räknas inte, och kommunen måste ändå hitta ett rum
