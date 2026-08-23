---
type: spec
id: te-pati-maori-disabilities-derived
title: "Ngā tāngata whaikaha e pānuitia ana hei pūnaha: te tautoko aratakina e te Māori me te uru ngāwari ake, kāore te pūtea i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Me whai ngā ratonga tāngata whaikaha aratakina e te Māori, me te uru iti iho te whakaiti, i tētahi rōpū whakatau me tētahi rārangi Tahua; ki te kore he pūtea, he whakahou wehenga rānei, ka noho te pūnaha ki tōna āhua o nāianei.
jurisdiction: NZ
sources:
  - title: Disabilities
    url: https://www.maoriparty.org.nz/disabilities
tags:
  - healthcare
  - social-welfare
party: te-pati-maori
clusters:
  - health-access
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/disabilities.md
derivesFrom: te-pati-maori-disabilities
assumptions:
  - me whai ngā ratonga aratakina e te Māori i tētahi hinonga ture me tētahi mana whakatau, ehara i te hiahia noa ki ngā kaituku Māori
  - ko te uru ngāwari ake, iti iho te whakaiti, he tohu ko ēhea aromatawai, ture tatari, ara pīra rānei ka huri
  - ko te pūtea e hāngai ana ki ngā āhuatanga o te whānau, kaua ki ngā wehenga tari, he hoahoa anō i te whai wāhi me tētahi rārangi Tahua
  - kāore te hoahoa anō, te Tahua rānei i te kaupapa here
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-79c92452bc62e5d1"
lang: mi
translationOf: te-pati-maori-disabilities-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-887c04a7dc9b7765
---

# Tō mātou māramatanga

> Me whai ngā ratonga tāngata whaikaha aratakina e te Māori i tētahi hinonga kaikawe me ngā mana whakatau, ehara i te hiahia noa ki ngā kaituku Māori. Ko te uru ngāwari ake, iti iho te whakaiti, he huri i ngā aromatawai, ngā ture tatari, ngā ara pīra rānei—ā, ko te pūtea e hāngai ana ki ngā āhuatanga o te whānau he hoahoa anō i ngā wehenga whai wāhi, me tētahi rārangi Tahua.

System: Te tautoko aratakina e te Māori, kāore te hoahoa pūtea

Scenario: Ka tautokona ngā ratonga aratakina e te Māori
Given ka tūtaki ngā tāngata whaikaha Māori ki tētahi pūnaha e whakaiti ana i te mana, i te ngana ki te uru ki te taurima me te tū rangatira
When ka tautokona ngā ratonga tāngata whaikaha aratakina e te Māori, me te whakatau
Then me whakaingoa tonu tētahi hinonga kaikawe me tētahi mana whakatau
Outcome ko te tikanga o te tautoko he whakahōnore i te mana me te whānau
But ki te kore tērā hinonga, kei ngā āpiha tonu te ratonga

Scenario: Me huri tahi te uru me te pūtea
When ka ngāwari ake te uru ki te tautoko, ka iti iho hoki te whakaiti
And ko te tikanga o te pūtea he hāngai ki ngā āhuatanga o te whānau, kaua ki ngā wehenga tari
Then me kōwhiri ngā wehenga whai wāhi me tētahi rārangi Tahua
Outcome me iti iho te utu mana ki te whakamahi i te uru
But kia whakaingoatia rā anō te pūtea me te whakahou wehenga, ko te ara whakaiti tonu te ara taunoa
