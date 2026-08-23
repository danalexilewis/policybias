---
type: spec
id: nz-first-citizens-only-voting-derived
title: "Ko te pōti kirirarau anake e pānuitia ana hei pūnaha: ka whāiti te tika pōti me te kore he tatau whakawhiti"
status: draft
updated: 2026-08-21
summary: Ka ngaro i ngā kainoho pūmau i muri i ngā tau e rua, me ētahi kaipupuri visa i muri i te tau kotahi, te tika pōti; kāore i whakaingoatia te wā whakawhiti me te tatau o ngā kaipōti ka pāngia.
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
derivesFrom: nz-first-citizens-only-voting
assumptions:
  - ka ngaro i ngā kainoho pūmau ka taea te pōti i muri i ngā tau e rua e noho ana i Aotearoa tērā tika pōti ina ko ngā kirirarau anake ka taea te pōti
  - ka ngaro hoki i ētahi kaipupuri visa kāore he rā mutu ka taea te pōti i muri i te tau kotahi tērā tika pōti
  - me te kore he whakawhiti kua whakaingoatia, kāore te kaupapa here e kī mēnā ka pupuri ngā kaipōti ehara i te kirirarau o nāianei i te pōti kia riro te kirirarautanga, ka ngaro rānei i te tīmatanga
  - kāore i whakaingoatia te tatau o ngā kaipōti ka pāngia, nō reira kāore e taea te pānui i te rahi o te huringa tika pōti mai i te kaupapa here
lang: mi
translationOf: nz-first-citizens-only-voting-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5fd1cc422caf58ee
---

# Tō mātou māramatanga

> Ka rāhuitia e te ture pōti te pōti mō ngā kirirarau, ka mutu te tika pōti ka riro i ngā kainoho pūmau i muri i ngā tau e rua, me ētahi kaipupuri visa noho-roa i muri i te tau kotahi. Kua ngaro te wā whakawhiti me te tatau o ngā kaipōti ka pāngia.

System: Ko te tika pōti kua whāiti ki te kirirarautanga

Scenario: Ka ngaro i ngā kainoho pūmau e tika ana i nāianei te pōti
Given ka taea e ngā kainoho pūmau te pōti i muri i ngā tau e rua e noho ana i Aotearoa
When ka hurihia te ture pōti kia ko ngā kirirarau anake ka taea te pōti
Then ka ngaro i ngā kainoho pūmau kāore anō kia tango kirirarautanga te tika pōti
Outcome kei ngā kirirarau te tika ki te whakatau i te anamata o Aotearoa
But ka kawea e ngā kainoho pūmau te ngaronga i runga i tētahi wātaka kāore anō te Pāremata kia whakatau

Scenario: Ka ngaro i ētahi kaipupuri visa noho-roa te pōti
Given ka taea e ētahi kaipupuri visa kāore he rā mutu te pōti i muri i te tau kotahi
When ka pā te ture kirirarau-anake ōrite ki ngā pōti whānui, ā-rohe me ngā pōti pōtitanga
Then ka ngaro i aua kaipupuri visa te tika pōti e pupuritia ana i raro i te tika o nāianei
Outcome ka whai ngā pōtitanga ā-rohe me ngā pōti pōtitanga i te rārangi kirirarautanga ōrite
But ka ngaro i ngā tāngata ehara i te kirirarau kua rēhitatia te reo me te kore he tatau upoko kua tāia
