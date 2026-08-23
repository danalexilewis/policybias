---
type: spec
id: sverigedemokraterna-a-till-o-sjukvard-derived
title: "Sjukvård read as a system: staten tar greppet medan köerna saknar mål"
status: draft
updated: 2026-08-23
summary: Nationell styrning och ett senare helhetsansvar flyttar makt från regionerna utan att politiken säger när, till vilket kömål eller vad som händer om kraven missas.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.sd.se/a-till-o/sjukvard/
tags:
  - healthcare
derivesFrom: sverigedemokraterna-a-till-o-sjukvard
party: sverigedemokraterna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-sjukvard.md
sourceDigest: "sha256-64934e07ce2be1ac"
assumptions:
  - krav på regioner biter bara om staten kan hålla inne pengar eller ta över drift; politiken säger inte vilket verktyg som gäller
  - formuleringen på sikt lämnar regionerna som huvudman under en obestämd övergång, så dagens köer styrs fortfarande där
  - likvärdig vård över landet kräver antingen omfördelning mellan regioner eller mer statliga pengar; ingetdera är belagt
  - administration som ska bort är inte mätt, så löftet kan infrias genom omklassning av tjänster
---

# Our understanding

> Staten ska styra vården hårdare och så småningom äga hela ansvaret. Köerna och skillnaderna mellan regionerna är skälet. Politiken ger inget kömål, ingen tidplan och inget som händer om en region missar kraven. Maktordningen ändras. Resultatet i kön gör det inte.

System: Statligt grepp om vården utan mätbart kömål

Scenario: En region missar de skarpare kraven
Given resurser ska kopplas till krav och uppföljning
And regionerna är fortfarande huvudman tills ett statligt helhetsansvar kommer på sikt
When en region inte kortar köerna
Then politiken säger inte om pengar hålls inne, om staten tar över driften, eller om inget sker
Outcome patienten bär skillnaden mellan postnummer medan ansvaret är oklart

Scenario: Helhetsansvaret skjuts på framtiden
Given långa vårdköer och oacceptabla skillnader mellan regionerna redan nu
When det statliga helhetsansvaret dröjer
Then nationell styrning ska bära likvärdigheten under tiden
But utan kömål går det inte att säga när styrningen räcker
Outcome regionerna behåller driften och staten behåller berättelsen om att arbetet inte är färdigt
