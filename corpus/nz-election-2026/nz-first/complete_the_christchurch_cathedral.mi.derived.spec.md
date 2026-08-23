---
type: spec
id: nz-first-complete-the-christchurch-cathedral-derived
title: "Ko te pūtea whare karakia e pānuitia ana hei pūnaha: ka kapi te $15 million i te wāhanga tuatahi, ehara i te āputa"
status: draft
updated: 2026-08-21
summary: Kei te taha o tētahi āputa $40 ki te $45 million te $15 million tāpiri i muri i te $90 million kua pau kē; ka taea te tīmata anō te wāhanga tuatahi, kāore he kaiwhakakapi kua whakaingoatia mō te āputa toenga.
jurisdiction: NZ
sources:
  - title: Complete the Christchurch Cathedral
    url: https://www.nzfirst.nz/complete_the_christchurch_cathedral
tags:
  - infrastructure
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/complete_the_christchurch_cathedral.md
sourceDigest: "sha256-207f866e9827cdd0"
derivesFrom: nz-first-complete-the-christchurch-cathedral
assumptions:
  - he iti ake te pūtea tāpiri $15 million a te kāwanatanga i te āputa $40 ki te $45 million e whakaingoatia ana tonu i te kaupapa here
  - ko te whakaoti i te wāhanga tuatahi ka whakatuwhera anō i te whare karakia, ka tango i ngā arai; ehara i te whakaoranga katoa
  - e rapu ana te Hāhi me te kaunihera i ētahi atu, engari kāore te kaupapa here e whakaingoa nā wai ka kati te āputa toenga i muri i te $15 million
lang: mi
translationOf: nz-first-complete-the-christchurch-cathedral-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2ce67d6471f4394d
---

# Tō mātou māramatanga

> Kua uru kē te tata ki te $90 million ki te hanga anō, me tētahi āputa $40 ki te $45 million e toe ana, ā, ko te $15 million tāpiri he here ki te wāhanga tuatahi anake — ehara i te āputa katoa, i te whakaoranga katoa rānei.

System: Ko te pūtea whare karakia ā-wāhanga ki te taha o tētahi āputa tuwhera

Scenario: Ka herea te pūtea tāpiri a te kāwanatanga
Given kua haumitia te tata ki te $90 million ki te hanga anō, me tētahi āputa $40 ki te $45 million e toe ana
And kua whakamoehia te kaupapa mai i te 2024 nā te kore pūtea
When ka herea te pūtea tāpiri a te kāwanatanga
Then ka taea te tīmata anō te wāhanga tuatahi o te hanga anō ā-wāhanga
Output $15 million i te pūtea tāpiri a te kāwanatanga kua herea
Outcome ka whakatuwheratia anō te whare karakia, ka wehe ngā arai i te tapawhā i runga i te ara wāhanga-tuatahi
But he iti iho i te haurua o te āputa e toe ana te $15 million e kapi ana

Scenario: Ka oti te wāhanga tuatahi i te wā e toe ana te āputa whānui
Given ko te pūtea tāpiri hei āwhina ki te whakaoti i te wāhanga tuatahi i te huarahi ki te whakaoranga katoa
And tētahi āputa $40 ki te $45 million e toe ana i muri i te tata ki te $90 million kua haumitia kē
When e rapua ana tonu ngā takoha a te Hāhi me te kaunihera mō ētahi atu o te āputa
Then ka taea te haere ngā mahi wāhanga-tuatahi me te kore he kaiwhakakapi kua whakaingoatia mō te toenga
Outcome ka taea te whakawātea i te tapawhā i te wā e tatari ana ngā wāhanga o muri ki ētahi atu moni
But kei te Hāhi, te kaunihera me ngā kaituku te toenga i muri i te wāhanga tuatahi
