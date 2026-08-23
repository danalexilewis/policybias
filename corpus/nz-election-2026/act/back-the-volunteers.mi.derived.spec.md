---
type: spec
id: act-back-the-volunteers-derived
title: "Ka pānuitia ngā kaitūao hei pūnaha: ngā rōpū hapori tuatahi mō te tiaki, me ngā whiwhinga taiao kāore he waeine"
status: draft
updated: 2026-08-21
summary: Ka whai ngā rōpū hapori i te wā tuatahi ki te pūtea me ngā kirimana tau-maha mō te tiaki a Te Papa Atawhai; ka taea e ngā kaiwhaiwhai te whiwhi i ngā whiwhinga taiao, engari ki te kore he waeine, he kaihoko, he ture aukati tatau-rua, kāore anō te whiwhinga e utu.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/back-the-volunteers
tags:
  - environment
party: act
clusters:
  - environment-rural
money: named-figure
sourcePath: corpus/nz-election-2026/act/back-the-volunteers.md
sourceDigest: "sha256-f619cda7c5b799af"
derivesFrom: act-back-the-volunteers
assumptions:
  - ko te wā tuatahi ki te pūtea ina tuku te rōpū i tētahi kōwhiringa whakataetae, he neke i Te Papa Atawhai i te kaikawe takitahi ki te tūranga tono mahi; kāore te kaupapa here e tautuhi he aha te whakataetae
  - ka huri ngā kirimana tau-maha i ngā takoha ā-tau e āhei te whakakore ki te tūmau whakamahere; ka noho ngā rōpū kāore e taea te tono whakataetae ki te tikanga tawhito
  - ehara te whiwhinga taiao kāore he waeine ine, he kaihoko, he ture aukati hoko rua i te hua kotahi, i te utu anō; ka kitea e mātou hei whakaaro, pērā i ētahi atu mākete taiao kāore i whakaingoatia
  - ka huri te māngai ōkawa mō ngā rōpū whaiwhai i ngā whakatau tango riha i ēhea tāngata kei te tēpu; kāore tēnā anake e whakatakoto ture mahi
  - kāore mātou e tito rārangi tahua tāra hou, nā te mea kāore te kaupapa here e whakaputa i tētahi i tua atu i ngā nama whenua me te korenga kua whakamahia hei Given
lang: mi
translationOf: act-back-the-volunteers-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-cd8ea41cd6a10619
---

# Tō mātou māramatanga

> Ka whai ngā rōpū hapori i te wā tuatahi ki te pūtea tiaki tuawhenua a Te Papa Atawhai, ka whakakapi ngā kirimana tau-maha i ngā takoha ā-tau, ā, ka tuwhera ngā whiwhinga taiao ki ngā rōpū whaiwhai kua whakamanatia. Kua whakaputaina ngā nama whare, ara, korenga me te kati; kāore anō te pūtea whakataetae, te utu whiwhinga me te waeine whiwhinga i tautuhia.

System: Te pūtea tiaki wā-tuatahi me tētahi whiwhinga taiao kāore he waeine

Scenario: Ka whai ngā rōpū hapori i te wā tuatahi ki te pūtea tiaki a Te Papa Atawhai
Given kei a Te Papa Atawhai te kawenga mō ētahi whare nui atu i te 950 me ngā ara 15,000 kiromita
And e 30 ōrau te korenga tiaki e pā ana ki Te Papa Atawhai
And nui atu i te 2,300 ngā whakamōhiotanga kati kua tukuna e Te Papa Atawhai mai i te 2021
And ka whakaora ngā rōpū whaiwhai, hīkoi me te tiaki taiao i ngā whare, ka tiaki i ngā ara, ka whakahaere rārangi tāwhanga i te wāhi iti o te utu
And ka ora te nuinga o ngā rōpū i ngā takoha ā-tau e āhei te whakakore, kāore he tūmau o te pūtea haere tonu
When me tuku a Te Papa Atawhai i te wā tuatahi ki te pūtea ki ngā rōpū hapori ina tuku rātou i tētahi kōwhiringa whakataetae mō te tiaki tuawhenua
Then ka taea e ngā rōpū kaha te kawe mahi kāore a Te Papa Atawhai e whakatika takitahi
Outcome tērā pea ka pupuri ngā rōpū tūao i ngā kirimana tau-maha, kaua ki te tono tau-ā-tau
But ka noho ngā rōpū kāore e tutuki i tētahi whakamātautau whakataetae kāore i tautuhia ki ngā takoha e āhei te whakakore

Scenario: Ka whiwhi ngā rōpū whaiwhai kua whakamanatia i ngā whiwhinga taiao
When ka tuwhera te Voluntary Nature Credits Market ki ngā rōpū whaiwhai kua whakamanatia mō ngā hua kanorau koiora kua whakamana
Then me whai te utu i tētahi waeine ine, tētahi kaihoko, me tētahi ture aukati hoko rua i te hua kotahi
Outcome kua whakaingoatia ngā rārangi tāwhanga me ngā mahi riha a ngā kaiwhaiwhai hei tiaki taiao e āhei ana ki te whiwhinga
But kia tū rā anō aua ture, kāore te mākete e utu

Scenario: Ka whai ngā rōpū whaiwhai i te māngai ōkawa i ngā whakatau tango riha
When me whai māngai ōkawa te New Zealand Deerstalkers Association me te Game Animal Council i ngā whakatau tango riha e pā ana ki ngā kaiwhaiwhai
Then ka noho ngā tāngata kua mahi kē i ngā rārangi tāwhanga ki te tēpu whakamahere mai i te tīmatanga
Outcome ka whakatauhia ngā whakatau e pā ana ki ngā kaiwhaiwhai me aua rōpū i te rūma
But ka taea tonu e te māngai kāore he ture whakatau kua whakaputaina te waiho i ngā kaiwhaiwhai kia kōrerotia i muri i te whakatau tūturu
