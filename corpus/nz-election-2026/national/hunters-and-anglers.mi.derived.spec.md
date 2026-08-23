---
type: spec
id: national-hunters-and-anglers-derived
title: "Te hopu kararehe me te hī ika e pānuitia ana hei pūnaha: kua hurihia te taunoa riha, me te uru whenua Karauna e kawe ana i te haepapa whakahaere"
status: draft
updated: 2026-08-21
summary: Mā te whakamana i ngā momo tauhou e whakamanahia ana i te ture e mutu ai te nanao riha-taunoa; ko te whakatuwhera i te whenua Karauna e tika ana he uru, he tūranga whakahaere atawhai hoki; kāore he hoahoa i te kaupapa here mō te whakamātautau tohu kanorau koiora.
jurisdiction: NZ
sources:
  - title: National backs hunters and anglers
    url: https://www.national.org.nz/hunters-and-anglers
tags:
  - environment
  - agriculture
party: national
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/national/hunters-and-anglers.md
derivesFrom: national-hunters-and-anglers
assumptions:
  - ka panoni tētahi tūnga ture ehara i te riha-taunoa i te wā ka rere aunoa te mahi pehi, me te wā me whai take kino ā-rohe
  - ko te whakatuwhera i te whenua Karauna e tika ana mō te hopu kararehe i raro i ngā ture rite ki te whenua atawhai he uru, he haepapa hoki ki te whakahaere i ngā tatau, ngā nohoanga, me te taupatupatu kaiwhakamahi
  - kāore e taea e tētahi tohu kanorau koiora kāore he waeine, he kaihoko, he ture tatau-rua te utu i te atawhai nā te kaihopu
  - kāore mātou e tāpiri nama tāra, nā te mea kāore te kaupapa here e tā i tētahi mō te pūtea whakangungu, mō te whakamātautau tohu rānei
sourceDigest: "sha256-07921cf813f7f9b3"
lang: mi
translationOf: national-hunters-and-anglers-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-01ccb0ebb0930489
---

# Tō mātou māramatanga

> Mā te whakamana i ngā momo tauhou e whakamanahia ana i te ture e mutu ai te nanao riha-taunoa, nā reira me whai take kino ā-rohe te pehi i te tuatahi. Ko te whakatuwhera i te whenua Karauna e tika ana he uru, he haepapa whakahaere atawhai hoki, ā, me whai waeine, kaihoko, me te ture tatau-rua te whakamātautau tohu kanorau koiora i mua i te taea o te utu.

System: Tūnga momo e whakamanahia ana, uru whenua Karauna, me tētahi tohu kāore i whakaingoatia

Scenario: Ka whakamanahia ngā momo tauhou e whakamanahia ana i te ture
Given ka taea te nanao i ngā momo tauhou e whakamanahia ana hei riha mā te taunoa i tēnei rā
When ka whakamana ōkawa tētahi anga whakahaere kararehe mohoao ngātahi i a rātou i te ture
Then ehara rātou i te riha nā te mea i tauhou noa iho
Outcome ka huri te whakahaere ki ngā āhuatanga ā-rohe me te kino kāore e whakaaetia
But me whai tērā take kino i te tuatahi te pehi i rere i mua i runga i te tapanga riha

Scenario: Ka tuwhera te whenua Karauna e tika ana mō te hopu kararehe me te hī ika
Given e ārai ana te nuinga o te hopu kararehe mō te ngahau i runga i te whenua Karauna e whakahaerehia ana e Toitū Te Whenua i tēnei rā
When ka tuwherahia te whenua Karauna e tika ana, e tuwhera ana ki te iwi i te nuinga o te wā, i raro i ngā ture rite ki te whenua atawhai tūmatanui
Then ka whiwhi ngā kaihopu i te uru kāore i a rātou i mua
Outcome ka noho te atawhai nā te kaihopu me te whakahaere kararehe tākaro hei wāhanga o te whakamahi i tērā whenua
But ko te uru kāore he aroturuki, he mahere kāhui, he ture taupatupatu he āputa whakahaere, ehara i te wikitōria anake

Scenario: Ka whakamātauria tētahi tohu kanorau koiora mō te atawhai nā te kaihopu
When ka whakamātauria tētahi tohu kanorau koiora e tautokona ana e te kāwanatanga
Then me whai te utu i tētahi waeine ka taea te ine, tētahi kaihoko, me tētahi ture kia kaua e hokona rua te hua kotahi
Outcome ko te atawhai nā te kaihopu te hua taiao i whakaingoatia
But kia tū ērā ture, kāore e taea e te whakamātautau te utu
