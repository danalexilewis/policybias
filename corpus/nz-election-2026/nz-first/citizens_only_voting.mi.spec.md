---
type: spec
id: nz-first-citizens-only-voting
title: "Herea te pōti ki ngā kirirarau o Aotearoa anake"
status: draft
updated: 2026-08-21
summary: Whakarerekētia te ture pōti kia pōti ngā kirirarau anake i ngā pōtitanga nui, ngā pōtitanga ā-rohe me ngā pooti whānui.
jurisdiction: NZ
sources:
  - title: Citizen's Only Voting
    url: https://www.nzfirst.nz/citizens_only_voting
tags:
  - democracy
party: nz-first
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/citizens_only_voting.md
sourceDigest: "sha256-dac00a4e8e304740"
gaps:
  - kāore i whakaingoatia he pire ture, he wātaka rānei
  - kāore i whakapuakina mēnā ka ngaro wawe ngā tika pōti a ngā kainoho pūmau, mā tētahi whakawhitinga rānei
  - kāore i āta tohua hei taipitopito huri ture te atawhai i ngā kaipupuri visa motuhake e āhei ana ināianei i muri i te tau kotahi
  - kāore he whakatau tata mō te tokomaha kaipōti ka pā hei nama kaupapa here
  - e kīia ana te pānga ki te pōti ā-rohe me te pooti whānui, engari kāore i tuhia
  - kāore i whakaahuatia he tikanga whakawhiti, he ara tere kirirarau rānei
lang: mi
translationOf: nz-first-citizens-only-voting
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b09ec4981c54d5f8
---

# Ko tā te whārangi e kī ana

> Mā te ture pōti e here te pōti i ngā pōtitanga nui, ngā pōtitanga ā-rohe me ngā pooti whānui ki ngā kirirarau o Aotearoa anake. Ka noho tonu te noho pūmau hei tika ki te noho me te mahi, engari me te kirirarau kia pōti. Ka whakahokia te rerekētanga i waenga i te noho me te here pono ōkawa. Kāore he pire ture, he wātaka rānei i homai.

System: Ka herea te pōti ki ngā kirirarau o Aotearoa

Scenario: Ka hurihia te ture pōti kia pōti ngā kirirarau anake
Given ka taea e ngā kainoho pūmau te pōti i muri i te rua tau e noho ana i Aotearoa
And ka taea e ētahi kaipupuri visa kāore he rā mutunga te pōti i muri i te tau kotahi
When ka hurihia te ture pōti
Then ko ngā kirirarau anake te tika ki te pōti i ngā pōtitanga nui
And ka rāhuitia te pōti i ngā pōtitanga ā-rohe me ngā pooti whānui mō te hunga kua oti te here ture me te here iwi o te kirirarau
Outcome nā ngā kirirarau o Aotearoa te tika ki te whakatau i te anamata o Aotearoa
