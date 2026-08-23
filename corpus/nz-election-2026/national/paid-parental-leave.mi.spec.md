---
type: spec
id: national-paid-parental-leave
title: "Whakawātea mātua e utua ana ki ngā wiki 30, me te whakawātea tiritiri"
status: draft
updated: 2026-08-21
summary: Whakaroa te whakawātea mātua e utua ana mai i ngā wiki 26 ki ngā wiki 30 i roto i ngā Tahua e toru, tukuna te whakawātea tiritiri, ā, tiakina te utu hararei katoa mai i te 1 July 2027.
jurisdiction: NZ
sources:
  - title: Modernising Paid Parental Leave
    url: https://www.national.org.nz/paid-parental-leave
  - title: Paid Parental Leave policy document
    url: https://assets.national.org.nz/web/prod/Paid%20Parental%20Leave.pdf
tags:
  - social-welfare
  - employment
party: national
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/national/paid-parental-leave.md
sourceDigest: "sha256-2933f6dbec2d7033"
gaps:
  - kāore i whakapuakina te reiti utu me ngā nama tāra ā-wiki i tēnei whārangi
  - kāore he wātaka mō te tirohanga roa ki ngā wiki 40 i tua atu i te whakapiki wiki-e-whā tuatahi
  - kāore i āta whakaahuatia ngā panoni whakahaere a te kaituku mahi
lang: mi
translationOf: national-paid-parental-leave
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-fbea3f87f5efadce
---

# Ko tā te whārangi e kī ana

> Ka piki te whakawātea mātua e utua ana mai i ngā wiki 26 ki ngā wiki 30 i ngā hipanga Tahua e toru mai i te 1 July 2027, 2028 me 2029. Ka taea e ngā mātua te tango whakawātea ngātahi, mā ngā wāhanga inaki rānei, kaua mā te wehe raupapa. Mai i te 1 July 2027, ka whiwhi ngā kaimahi i te hararei ā-tau katoa i a rātou e noho whakawātea mātua ana, ā, ka whiwhi i te takoha KiwiSaver a te kāwanatanga ahakoa kāore rātou e takoha ake.

System: Whakawātea mātua e utua ana kua whakahoutia

Scenario: Ka tango ngā mātua hou i te whakawātea mātua e utua ana
Given e 26 wiki te whakawātea mātua e utua ana i tēnei rā
When ka whakaroahia te whakawātea mātua e utua ana i roto i ngā Tahua e toru
Then ka piki te whakawātea mātua e utua ana mai i ngā wiki 26 ki ngā wiki 30
Output ngā wiki 30 whakawātea mātua e utua ana
And ngā wiki 27 mai i te hipanga Tahua tuatahi
And ngā wiki 28 mai i te tuarua
And ka taea e ngā mātua te tango whakawātea mātua e utua ana i te wā kotahi, mā ngā wāhanga inaki rānei
And ka whiwhi ngā kaimahi i te hararei ā-tau i a rātou e noho whakawātea mātua ana mai i te 1 July 2027
And $327.4 million te utu katoa o te whakaroanga
And $121.9 million te takoha KiwiSaver mō te whakawātea mātua
Outcome he wā nui ake ki te pēpi hou, he kōwhiringa nui ake hoki mō te whakamahi
Activates national-kiwisaver
