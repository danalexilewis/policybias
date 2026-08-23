---
type: spec
id: act-grazing-derived
title: "Ngā raihana pāmu e pānuitia ana hei pūnaha: ngā taputapu tipu me te ahi, kāore anō te kūaha rauropi i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Mā ngā raihana Conservation Act e tuku te pāmu whakahaere ki te pehi i ngā rākau porohita me ngā kawenga wahie, engari ko te anga rauropi e whakatau ana kei hea tērā e tika ana, kua whakaingoatia kāore ōna whakamātautau, taipitopito maha, tūāwhiorangi heketea rānei.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/grazing
tags:
  - agriculture
  - environment
party: act
clusters:
  - environment-rural
money: named-figure
sourcePath: corpus/nz-election-2026/act/grazing.md
sourceDigest: "sha256-62d6beec48cf630a"
derivesFrom: act-grazing
assumptions:
  - ko te mana Conservation Act mārama mō ngā raihana pāmu te tango i tētahi ārai ture; kāore e whakatau i a ia anō ēhea heketea ka huaki
  - ko te anga rauropi te kūaha tūturu — ki te kore ngā whakamātautau i whakaputaina mō kei hea te pāmu e tika ana, kāore e taea ngā raihana te whakamātau ki ngā whāinga tiaki
  - ko te momo, te maha me te roa o te maha i ia raihana ngā whakahaere mahi; ko te taiapa mariko anake te panoni i te āhua e whakamanatia ai te aukati, ehara i te pātai me noho te pāmu ki reira
  - ko te whakakapi i ētahi rehu rererangi me te tapahi ā-ringa ki te pāmu te neke i te utu me te mōrearea rauropi ki ngā herenga raihana; kāore mātou e hanga penapena tāra nā te mea kāore te kaupapa here e whakaputa
lang: mi
translationOf: act-grazing-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c3594a98d2d096fa
---

# Tō mātou māramatanga

> Mā ngā raihana Conservation Act e tuku te pāmu whakahaere ki te pehi i ngā rākau porohita me ngā kawenga wahie, engari ko te anga rauropi e whakatau ana kei hea te pāmu e tika ana, kua whakaingoatia kāore ōna whakamātautau, taipitopito maha, tūāwhiorangi heketea rānei.

System: Te pāmu arotahi, ko tōna kūaha he anga kāore i whakaingoatia

Scenario: Ka huaki ngā raihana pāmu i runga whenua tiaki mō te whakahaere tipu
Given ka kati ngā rākau porohita i te 1.8 million heketea whenua
And ka whakahaerehia e Te Papa Atawhai ngā wāhi nui o te whenua tuwhera, te whenua pāmu o mua, me ētahi atu whenua tiaki ehara i te ngahere ka taea te pāmu haumaru i raro i ngā tikanga whakahaere
And he maha ngā kaipāmu e rapu whakaaetanga pāmu ka tūtaki ki te ātete, ngā ārai kāore e hiahiatia ana rānei
When ka whakahounga te Conservation Act 1987 kia whai Te Papa Atawhai i te mana mārama me te ahunga ki te tuku raihana pāmu mō ngā wāhi kua tohua ina tautoko te pāmu i ngā whāinga whakahaere tipu
Then ka noho te pāmu whakahaere hei taputapu wātea ki ngā tipu urutomo me ngā kawenga wahie
Outcome ka taea ngā tipu urutomo me ngā riha te pehi mā te pāmu arotahi, kaua te rehu topa anake
But ko ngā heketea e raihanatia ana ka hāngai ki te mahi a Te Papa Atawhai, ehara i te whakahounga Ture anake

Scenario: Mā te anga rauropi e whakatau kei hea te pāmu e tika ana
When ka tautuhi tētahi anga rauropi mārama kei hea te pāmu e tika ana ki te pehi i ngā tupu rākau porohita me ētahi atu tipu urutomo, me te whakaheke i ngā kawenga wahie ahi mohoao
Then ka noho kati ki te kararehe ngā wāhi e rahua ana e te anga
Outcome ka taea ngā kawenga wahie e āwhina ana i ngā ahi mohoao kino te heke kei hea e whakaaetia ana te pāmu
But kāore e mōhio ngā kaipāmu me ngā kaitiaki ēhea heketea e ū ana kia whakaputaina e Te Papa Atawhai ngā whakamātautau

Scenario: Ka whakatakoto te raihana i te maha, ka whakamana i te taiapa mariko
When ka tohua e ngā raihana pāmu ngā momo, ngā maha me te roa e tika ana
And ka whakamanatia ngā pūnaha taiapa mariko hei tikanga tika mō te aukati kararehe i runga whenua a Te Papa Atawhai
Then ka taea te aukati te whakamana kāore he rārangi taiapa tinana i ia rohe
Outcome ka taea te whenua te whakahaere i raro i ngā herenga raihana, kāore e tanumia ngā kaipāmu ki te tukanga kāore e hiahiatia ana
But ka kino tonu te nui rawa o te maha, te noho roa rawa rānei i te whāinga tiaki i hangaia ai te raihana
