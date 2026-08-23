---
type: spec
id: te-pati-maori-cost-of-living-derived
title: "Te utu ora e pānuitia ana hei pūnaha: te whakamāmā i te moni whiwhi, te tautoko pūtea me te waka, kāore ngā nui i whakaingoatia"
status: draft
updated: 2026-08-21
summary: E toru ngā māhiti ka whakaingoatia—te hiki i ngā moni whiwhi, te whakakaha i te tautoko pūtea, me te whakamāmā i te waka; ki te kore he nui, he paepae, he taputapu rānei, kāore tētahi kāinga e mōhio he aha ka rerekē i tōna pūkoro.
jurisdiction: NZ
sources:
  - title: Cost of living
    url: https://www.maoriparty.org.nz/cost_of_living
tags:
  - cost-of-living
  - social-welfare
  - transport
party: te-pati-maori
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/cost_of_living.md
derivesFrom: te-pati-maori-cost-of-living
assumptions:
  - me whai te hiki moni whiwhi i tētahi papa utu, tētahi huringa tāke, tētahi whakawhiti pūtea, tētahi atu taputapu rānei i whakaingoatia, i mua i te nui ake o te utu ki tētahi
  - ko te whakakaha i te tautoko pūtea kia kore ai ngā whānau e whiua mō te pōhara, he tohu ko ēhea herenga, whiu, ture whakaheke rānei ka huri
  - ko te utu waka e taea ana he utu tikiti, he pūtea āwhina, he whakahekenga, he huringa ratonga rānei; kāore tētahi i whakaingoatia
  - e toru ngā māhiti e kīia tahitia ana, engari me wehe tonu te utu tāhua kāore i homai e te kaupapa here
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-d1acb086a0c0d11a"
lang: mi
translationOf: te-pati-maori-cost-of-living-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-d14830388cbc3acd
---

# Tō mātou māramatanga

> Kāore tētahi kāinga e mōhio he aha ka tau ki tōna pūkoro, kia kōwhiria rā anō e tētahi te māhiti utu, tāke, whakawhiti pūtea rānei, kia whakatauria hoki te nui. Kei ngā whiu tautoko pūtea me te whakamāmā waka te āputa kotahi: kei te wātea tonu ēhea ture ka māmā ake, ā, ēhea utu tikiti, pūtea āwhina rānei ka huri.

System: E toru ngā māhiti whakamāmā, kāore he nui

Scenario: Me hiki ngā moni whiwhi
Given kāore e taea e ngā whānau ngā mea taketake o te kai, te rēti, te hiko, te waka, ngā rongoā, me ngā utu kura
When ka hikitia ngā moni whiwhi kia noho ngā tāngata me te mana
Then me kōwhiri tonu tētahi taputapu utu, tāke, whakawhiti pūtea rānei, me tōna nui
Outcome ko te mana te whāinga
But kia kōwhiria rā anō e tētahi te taputapu me te nui, kāore tētahi whānau e mōhio he aha ka riro i a rātou

Scenario: Ka tau tahi te tautoko pūtea me te whakamāmā waka
When ka whakakaha te tautoko pūtea kia kore ai ngā whānau e whiua mō te pōhara
And kei te whakamāmā utu ora ko te utu waka e taea ana
Then kāore i whakaingoatia ēhea whiu, ture whakaheke rānei ka huri, ā, ēhea taputapu waka ka pā
Outcome ko te ahunga he iti iho te whiu, he māmā ake te haere
But ki te kore he nui, he taputapu rānei, kāore e taea e Te Tai Ōhanga te ine i tētahi o ngā māhiti
