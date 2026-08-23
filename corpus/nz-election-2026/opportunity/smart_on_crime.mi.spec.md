---
type: spec
id: opportunity-smart-on-crime
title: "Iti ake te pupuri-tatari, whakakore i te hara pupuri, whakapikia te pakeke kōti rangatahi"
status: draft
updated: 2026-08-21
summary: Pūteatia ngā kōti me te tautoko here kia heke te pupuri-tatari, whakakorea te hara pupuri tarukino engari kaua te tuku, whakawhānuihia ngā kōti tūkino-ā-whānau me ngā kōti tarukino me te hauora hinengaro, ā, whakapikia te pakeke kōti rangatahi.
jurisdiction: NZ
sources:
  - title: Smart on Crime
    url: https://www.opportunity.org.nz/smart_on_crime
tags:
  - crime-and-justice
party: opportunity
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/smart_on_crime.md
sourceDigest: "sha256-8b9bd045e1513213"
gaps:
  - kāore i inehia te pūtea tāpiri kōti me te tautoko here
  - kāore i whakapuakina te pakeke kōti rangatahi hou
  - kāore i āta tohua he aha te whakakapi i te hara pupuri (tuku hauora, whakawhiti, kāore)
  - kāore i whakapuakina ngā wāhi me te rahi o te whakawhānui kōti tarukino me te hauora hinengaro
  - kāore he wātaka
  - e tohu ana te whārangi kei te whakarewa tonu te kaupapa here taipitopito
lang: mi
translationOf: opportunity-smart-on-crime
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-1d2ca4d3d398be4e
---

# Ko tā te whārangi e kī ana

> He nui rawa ake te utu o te whare herehere mō ia tangata i tō te kura, engari ko te pupuri-tatari me te whakaputu te mea nui. Ka nui ake te pūtea ki ngā kōti me te tautoko here kia heke te pupuri-tatari, ka whakakorea te hara pupuri tarukino me tētahi urupare aratakina e te hauora, ka noho tonu te tuku hei hara, ā, ka piki te pakeke kōti rangatahi, me ngā kōti tarukino me te hauora hinengaro kua whakawhānuihia. Kei te whakarewa tonu te kaupapa here taipitopito.

System: Mōhio ki te hara

Scenario: Ka huri te pupuri-tatari, ngā tarukino me te ture rangatahi
Given nui ake i te $150,000 ia tau ki te noho i tētahi herehere
And tata ki te $9,000 ki te whakaako i tētahi tamaiti mō te tau
When ka nui ake te pūtea ki ngā kōti me te tautoko here
Then ka heke ngā nama pupuri-tatari
And ka whakakorea te hara pupuri tarukino, ka noho tonu te tuku hei hara, me tētahi urupare aratakina e te hauora
And ka whakawhānuihia ngā hōtaka e āwhina ana i ngā herehere ki te tukatuka i te tūkino-ā-whānau o mua
And ka whakapikia te pakeke kōti rangatahi e ai ki te pūtaiao whanaketanga
And ka whakawhānuihia ngā whakamātautau kōti tarukino me te hauora hinengaro
Outcome ka nui ake te whakapau a te pūnaha ki te whakaora me te ārai wawe, iti ake ki te whakaputu
Activates opportunity-healthy-people
