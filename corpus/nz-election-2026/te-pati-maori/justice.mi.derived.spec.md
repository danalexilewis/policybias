---
type: spec
id: te-pati-maori-justice-derived
title: "Te ture e pānuitia ana hei pūnaha: mana e ārahitia ana e te Māori, me te iti ake o te mauhere, kāore i whakaingoatia te āhei whakakapi"
status: draft
updated: 2026-08-21
summary: Mā te hanga i te ture e ārahitia ana e te Māori, me te wehe i te mauhere nui, e huri ai nā wai e whakatau, nā wai e mauheretia, engari kāore i whakaingoatia te āhei hapori e whakakapi ana i te mauhere, nō reira kāore anō kia tau te nuku o te mōrearea.
jurisdiction: NZ
sources:
  - title: Justice
    url: https://www.maoriparty.org.nz/justice
tags:
  - crime-and-justice
party: te-pati-maori
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/justice.md
derivesFrom: te-pati-maori-justice
assumptions:
  - Me whai mana whakahaere, pūtea, me tētahi hononga ki ngā kōti me Ngā Pirihimana o Aotearoa tētahi mana ture e ārahitia ana e te Māori; kāore te kaupapa here e whakatau i ērā
  - Ko te wehe i te mauhere nui, ka wātea ngā wāhi herehere mēnā anake ka taea e ngā otinga ā-hapori te pupuri i te hunga kua noho ki roto
  - Ko te whakahou i ngā ture e whakahara ana i te pōharatanga, me whai hara me ngā whiu kua whakaingoatia; ki te kore, kāore e mōhiotia te mata o te whakahou
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-3dee911c8f69c54c"
lang: mi
translationOf: te-pati-maori-justice-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-aa71948f76b94cd1
---

# Tō mātou māramatanga

> Mā te mana ture e ārahitia ana e te Māori, me ngā otinga ā-hapori, e huri ai nā wai e whakatau ngā kēhi, nā wai e pupuri tāngata i waho i te herehere—engari e wātea tonu ana te mana whakahaere, te pūtea, me te hononga ki ngā kōti me Ngā Pirihimana o Aotearoa. Ko te whakahou i te whakahara i te pōharatanga, me whai hara me ngā whiu kua whakaingoatia; ki te kore he hōtaka whakakapi, he moenga rānei, kei ngā hapori te mōrearea haumaru, ehara i ngā herehere.

System: Te iti ake o te mauhere, kāore i whakaingoatia te āhei whakakapi

Scenario: Ka hangaia te mana ture e ārahitia ana e te Māori, me ngā otinga ā-hapori
Given tētahi pūnaha e kīia ana e herehere ana i te Māori, whakatupuranga i muri i te whakatupuranga
And kāore he hanganga, he pūtea rānei mō te mana
When ka hangaia te mana ture e ārahitia ana e te Māori, me ngā otinga ā-hapori
Then me kōwhiri tonu nā wai e whakatau ngā kēhi, nā wai e pūtea te ringa hapori, me pēhea te hononga o ngā kōti
Outcome ko te hoahoa e ārahitia ana e te Māori te ahunga kua whakaingoatia
But ki te kore ērā kōwhiringa, kāore e taea e te mana te whakahaere

Scenario: Ka wehe te kaupapa here i te mauhere nui
Given te whakaaro ki te wehe i te mauhere nui mō te hurihanga wā-roa
And kāore he hōtaka ā-hapori, he moenga, he tahua rānei i whakaingoatia hei whakakapi i te herehere
When ka iti ake te hunga e mauheretia ana
Then me pupuri e tētahi i waho i te herehere te haumaru, te whakaora, me te kawenga
Outcome ka taea te heke o te mauhere mēnā kei te tū te āhei whakakapi
But ki te kore he hōtaka, he moenga rānei i whakaingoatia, kei ngā hapori te mōrearea haumaru, ehara i ngā herehere

Scenario: Ka whakahouhia ngā ture e whakahara ana i te pōharatanga me te whaiora
Given te whakaaro ki te whakahou i aua ture
And kāore he hara i rārangitia
When ka tuhia te whakahou
Then me kōwhiri ia hara, ia whiu, ia ara whakawhiti
Outcome ko te pōharatanga-hei-hara te whāinga kua whakaingoatia
But kāore e mōhio ngā kaiwhakapae me ngā hunga whakapae ko ēhea whakapae ka huri
