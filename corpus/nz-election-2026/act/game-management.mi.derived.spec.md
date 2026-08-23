---
type: spec
id: act-game-management-derived
title: "Te whakahaere kararehe hī e pānuitia ana hei pūnaha: ka hurihia te taunoa riha ina ngaro i Te Papa Atawhai te tūru whakahaere"
status: draft
updated: 2026-08-21
summary: Ko te neke i te whakahaere kararehe hī i Te Papa Atawhai ki te Game Animal Council te mutunga o te rongoā riha-taunoa anake ina herea te tūnga rawa uara; me tautuhi tonu ngā tepenga tiaki.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/game-management
tags:
  - environment
party: act
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/act/game-management.md
sourceDigest: "sha256-e5d84bb9bcf539d4"
derivesFrom: act-game-management
assumptions:
  - ko te toe a Te Papa Atawhai i tētahi tūranga tiaki whānui i te wā e ngaro ana te mana whakahaere kararehe hī, he huarahi whakatau wehe ina papā ngā whāinga kāhui ki ngā whāinga tiaki
  - ko te whakamana i ngā momo kararehe hī hei rawa taiao uara te mutunga o te rongoā riha-taunoa; me whai kē te whakahaere i tētahi kēhi kino, tepenga rānei ā-rohe, kaua i te tīmatanga patu-katoa aunoa
  - ko ngā Herds of Special Interest, ka tīmata ki te whitetail o Stewart Island, he kēhi tuatahi kua whakaingoatia, ehara i te rārangi kāhui ā-motu kua oti
  - ko te utu katoa i te Council kāore he nama tāra i whakaputaina, nā reira kāore e mōhiotia te rahi pūtea o te neke; kāore mātou e hanga
lang: mi
translationOf: act-game-management-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b03fb96f17a4009d
---

# Tō mātou māramatanga

> Ka neke te whakahaere kararehe hī i runga whenua tiaki i Te Papa Atawhai ki te Game Animal Council, ā, ka whakamanatia ngā momo kararehe hī hei rawa uara. Kāore i āta tohua me pēhea ngā tepenga tiaki e here ai i ngā whakatau a te Council, he aha te utu katoa, me pēhea te tūranga e toe ana a Te Papa Atawhai e whakatau ai i te papātanga ki tētahi mahere kāhui.

System: Te whakahaere nā te kaiwhai ina hurihia te taunoa riha

Scenario: Ka ngaro i Te Papa Atawhai te whakahaere kararehe hī i runga whenua tiaki
Given ka whakahaerehia e Te Papa Atawhai ngā kararehe hī i runga whenua tiaki i raro i te ture e tīmata ana i te whakahaere, te whakamōtī rānei
And ka taea e te Game Animal Council te tohutohu i te wā e pupuri ana Te Papa Atawhai i te mana
When ka nuku te kawenga whakahaere kararehe hī i runga whenua tiaki ki te Game Animal Council
Then mā ngā kaiwhai e mōhio ana ki te kāhui ngā whakatau whakahaere kararehe hī, kaua te kōrero tohutohu anake
Outcome ka whakawākia te Council ki ngā hua e tukuna ana
But ka taea tonu e te tūranga tiaki whānui a Te Papa Atawhai me ngā mahere kāhui a te Council te kume ki ngā ahunga rerekē i runga i te whenua kotahi

Scenario: Ka whakakapi te tūnga rawa uara i te taunoa riha
Given ka tīmata tonu te ture i te whakaaro me whakamōtī ngā kararehe hī i kawea mai i ngā wāhi katoa e taea ana
When ka whakamanatia ngā momo kararehe hī me ngā manu hī i ngā ture hāngai hei rawa taiao uara hei whakahaere toitū
Then ehara rātou i te riha nā te mea i kawea mai
Outcome ka huri te whakahaere ki te whakamahi toitū i roto i ngā tepenga tiaki
But ki te kore he tautuhinga mahi mō aua tepenga, he tapanga noa te tūnga uara kia puta rā anō he kēhi kino, kawe rānei

Scenario: Ka tohua tētahi Herd of Special Interest
When ka tohua ngā kāhui kararehe hī e uara nui ana i Aotearoa hei Herds of Special Interest, ka tīmata ki ngā tia whitetail o Stewart Island
Then ka whiwhi tērā kāhui i tētahi mahere e whakamana ana i tōna uara
Outcome ka taea e ētahi atu kāhui uara te whai i te huarahi kotahi
But ka noho ngā kāhui kāore i tohua i raro i te anga whānui kia whakatakotoria ngā paearu i tua atu i te kēhi tuatahi
