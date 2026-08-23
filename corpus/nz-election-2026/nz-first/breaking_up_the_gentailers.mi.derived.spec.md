---
type: spec
id: nz-first-breaking-up-the-gentailers-derived
title: "Ko te wehe gentailer e pānuitia ana hei pūnaha: ko te utu hoko te tuku hiko rā hei whakawhiti, kāore i whakaingoatia te utu whakakapi"
status: draft
updated: 2026-08-21
summary: Ka huri te hanganga te wehe i ngā kamupene e whakahaere tata ki te 90% o te whakaputanga, engari ko te utu i ngā kaituku hiko rā ki te utu hoko he whakawhiti wāriu mai i ngā kaihoko ki ngā kaiwhakaputa kāinga, ā, kāore i āta tohua te whakakapi mō te utu utu-mōrearea.
jurisdiction: NZ
sources:
  - title: Breaking up the Gentailers
    url: https://www.nzfirst.nz/breaking_up_the_gentailers
tags:
  - energy
party: nz-first
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/breaking_up_the_gentailers.md
derivesFrom: nz-first-breaking-up-the-gentailers
assumptions:
  - ko te hoko i te hiko rā ka tukuna ki te utu hoko ōrite e utua ana e te kāinga, he whakawhiti mai i te kaihoko (ā, i te mutunga ki ētahi atu kiritaki) ki te kaiwhakaputa kāinga; e whakaatu ana te kaupapa here hei whakahoki i te hiko ki ngā ringa o ngā kāinga
  - ko te whakahaere tata ki te 90% o te whakaputanga te tūāpapa hanganga e whāia ana e te wehe kia whati; kāore i whakapuakina nā wai ēhea rawa i muri i te wehe
  - me tētahi ture whakakapi kua whakaingoatia hei whakakapi i tētahi pūnaha e whakaritea ai te utu e te kaiwhakaputa utu nui rawa; ko te "kāore e taea te pupuri i te tuku" he here, ehara i te kōrero utu
  - ka neke ngā kirimana utu pūmau roa mō te hanga hou i te rahi me te mōrearea utu; me te kore ngā tikanga kirimana ka tuwhera tonu te pānga i waenga i ngā kaipupumi me ngā kiritaki
sourceDigest: "sha256-9c944c2c3a7d8d81"
lang: mi
translationOf: nz-first-breaking-up-the-gentailers-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-d96dac19529b6170
---

# Tō mātou māramatanga

> Ka wehea ngā kaiwhakaputa me ngā kaihoko, ka utua ngā kaituku hiko rā ki te utu hoko, ā, ka huri te utu kia kore ai e taea e ngā kamupene te pupuri i te tuku — engari kāore i āta tohua te ture whakakapi me nā wai te pūtea mō te hoko-mai utu-hoko, ki te taha o te tata ki te 90% o te whakaputanga kei ngā kamupene nui e whā.

System: Ko te wehe hanganga me tētahi whakawhiti hiko rā ki te utu hoko

Scenario: Ka tuku tētahi kāinga i te hiko rā ki te utu hoko e utua ana e ia
Given ka taea e ngā kāinga e whakaputa hiko rā te hoko hiko ki te mātiti ki te utu ōrite e utua ana e rātou mōna
When ka tuku tērā kāinga i te hiko rā toenga
Then ka utu te kaihoko i te utu hoko mō te hiko ka hokona e ia i te nuinga o te wā he māmā ake te utu tuku nui
Outcome ka riro i te kaiwhakaputa kāinga he utu tuku teitei ake i te hoko-mai noa o ēnei rā
But he whakawhiti te rerekētanga mai i ngā kaihoko — ā, pea ētahi atu kiritaki — ki ngā kāinga hiko rā

Scenario: Ka wehea ngā kamupene nui e whā i a rātou e whakahaere tata ki te 90% o te whakaputanga
Given e whakahaere ana ngā kamupene hiko nui e whā i te tata ki te 90% o te whakaputanga hiko, ā, ka hoko anō ki a rātou anō
When ka wehea aua kamupene ki ngā kaiwhakaputa me ngā kaihoko
Then kāore e taea te noho tahi o te whakaputanga me te hokonga i te kamupene kotahi
Outcome ka tūtaki ngā kaihoko auaha, utu iti ki tētahi huarahi tuku nui kāore i tino kati
But ka tūtaki tonu ngā kaipupumi me ngā kiritaki ki ngā wehe rawa me ngā utu whakawhiti kāore i mōhiotia

Scenario: Ka whakakapia te utu utu-mōrearea me te kore he kōrero kua whakaingoatia
Given e whakaritea ana te utu mō te hiko katoa e te kaiwhakaputa utu nui rawa i raro i te pūnaha o nāianei
When ka whakakapia te pūnaha o nāianei kia kore ai e taea e ngā kamupene te pupuri i te tuku hei whakanui noa i ngā utu
Then me kōwhiria tētahi ture utu hou i mua i te whakatau o ngā tuku
Outcome ka ngaro i ngā kamupene te kaha ki te pupuri mō te utu i raro i te here kua kīia
But ka kawea e ngā kaipānga pire ngā mea ka tukuna e te ture utu hou, i mua i te kite a tētahi
