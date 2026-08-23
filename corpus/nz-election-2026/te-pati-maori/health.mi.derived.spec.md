---
type: spec
id: te-pati-maori-health-derived
title: "Te hauora e pānuitia ana hei pūnaha: mana e ārahitia ana e te Māori, me te hūnuku ārai mate, kāore i whakaingoatia te pūtea"
status: draft
updated: 2026-08-21
summary: Mā te hanga anō i tētahi mana hauora e ārahitia ana e te Māori, me te hūnuku ki te ārai mate, e huri ai nā wai e urungi te taurima, engari ki te kore he pūtea i whakaingoatia, kāore e taea te ine i te toronga o te mana, me te rahi o ngā hōtaka ārai mate.
jurisdiction: NZ
sources:
  - title: Health
    url: https://www.maoriparty.org.nz/health
tags:
  - healthcare
party: te-pati-maori
clusters:
  - health-access
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/health.md
derivesFrom: te-pati-maori-health
assumptions:
  - Me whai ture, tahua, me tētahi rohe ki te toenga o te pūnaha hauora tētahi mana hauora e ārahitia ana e te Māori; kāore te kaupapa here e whakaingoa i tētahi o ērā
  - Mā te hūnuku mai i te urupare mōrearea ki te ārai mate e neke wawe ake te whakapau me ngā kaimahi i te ara; me pūtea, me āhei tērā hūnuku, kāore te kaupapa here e ine
  - Me whai tikanga te kawenga ki ngā hapori Māori; ki te kore, he kī mō te ahurea, ehara i te mana whakahaere
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-c4411f9ba2fcfd2f"
lang: mi
translationOf: te-pati-maori-health-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-a69e65e61fd4061a
---

# Tō mātou māramatanga

> Mā te hanga anō i tētahi mana hauora e ārahitia ana e te Māori, me te hūnuku mai i te urupare mōrearea ki te ārai mate, e huri ai nā wai e urungi te taurima—engari e wātea ana te ture, te tahua, me ngā rohe ki te toenga o te pūnaha. Me kaimahi, me whakapau wawe ngā hōtaka ārai mate; me whai tikanga te kawenga ki ngā hapori Māori e taea ai te here i ngā kaituku ina rahua tētahi whānau.

System: Te mana me te ārai mate, kāore i whakaingoatia tētahi rārangi Tahua

Scenario: Ka hangaia anō tētahi mana hauora e ārahitia ana e te Māori
Given te kī, ko te pūnaha kāore e mārama ki te Māori, ka rahua tonu ki te Māori
And kāore he hanganga, he ture, he taumata pūtea rānei
When ka hangaia anō, ka whakakaha te mana
Then me whakatau tonu ōna mana, tōna tahua, me tōna rohe ki ētahi atu rōpū hauora
Outcome ko te urungi e ārahitia ana e te Māori te hoahoa kua whakaingoatia
But ki te kore he tahua, kāore e mōhio te mana ko ēhea ratonga tāna e whakahaere

Scenario: Ka hūnuku te taurima ki te ārai mate me te oranga whānau
Given te whakaaro ki te wehe i te urupare mōrearea anake
When ka noho ko te ārai mate me te oranga whānau te kaupapa matua
Then me whakatū ki tētahi wāhi ngā hōtaka, ngā kaimahi, me te whakapau wawe
Outcome ka taea te hopu wawe i te kino mēnā kei te tū te āhei
But kāore e mōhio ngā whānau e hia te āhei ārai mate e tū ana

Scenario: Me kawenga ngā ratonga ki te Māori
Given ngā ratonga e wātea ana, e haumaru ana ā-ahurea, e kawenga ana ki te Māori
And kāore he tikanga kawenga i whakaingoatia
When ka rahua tētahi ratonga i tētahi whānau
Then kāore i whakatauria i tēnei kaupapa here nā wai e tono huringa
Outcome ko te kawenga te paerewa kua kīia
But ina rahua tētahi ratonga i a rātou, kāore he tangata mā ngā whānau e taea te tono huringa
