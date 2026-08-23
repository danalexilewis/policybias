---
type: spec
id: green-manifesto-2026-childen-derived
title: "Ko ngā tamariki e pānuitia ana hei pūnaha: te reo tamariki me te whakahou i te Ture Oranga Tamariki, kāore he Best Start kua utua"
status: draft
updated: 2026-08-21
summary: Ka uru te reo tamariki ki te ture, ka toro te Best Start ki ia tamaiti i raro i te toru tau kāore he nama tāra, ā, ka neke te whakahou i te Ture Oranga Tamariki i te mana whakatau ki te whānau, ki te iwi me te hapū.
jurisdiction: NZ
sources:
  - title: Children
    url: https://www.greens.org.nz/manifesto_2026_childen
tags:
  - social-welfare
  - education
  - healthcare
party: green
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_childen.md
derivesFrom: green-manifesto-2026-childen
assumptions:
  - ko te whakamātāmua i te reo tamariki mā te Child Impact Assessment Tool me ngā huringa Rights of the Child he tukanga, ehara i te moni ka riro i te kāinga
  - ko te Best Start ā-whānui i raro i te toru tau he motika tau-tōmua tū tonu, kāore te reiti i tēnei kaupapa here
  - ko te whakahou i te Ture Oranga Tamariki kia tāmau te whai wāhi a te whānau me te mana o te iwi, o te hapū rānei, e neke ana i te kaiwhakatau mō ngā tamariki Māori, ehara i te hunga kōrero noa
  - me whai wāhi kua utua te whakangungu kaimahi me te uru ki te tautatanga hauātanga; ka whakaingoatia e te kaupapa here te ahunga, kāore he whāinga kaimahi, he wā tatari rānei
sourceDigest: "sha256-70b5a955d678c483"
lang: mi
translationOf: green-manifesto-2026-childen-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-d5c9230666e13af4
---

# Tō mātou māramatanga

> Ka whakamātāmuatia e te kaupapa here te reo tamariki ki te ture, ka toro te Best Start ki ia tamaiti i raro i te toru tau, ā, ka whakahou i te Ture Oranga Tamariki kia tūturu te mana o te whānau me te iwi, te hapū rānei, ki ngā whakataunga atawhai. Ka noho te Best Start hei utu tau-tōmua ā-whānui. Ko te whakahou i te Ture Oranga Tamariki e neke ana i te kaiwhakatau, ehara i te hunga kōrero noa.

System: Te reo tamariki, te Best Start kāore i utua, me te ture atawhai e ārahi ana te whānau

Scenario: Ka toro te Best Start ki ia tamaiti i raro i te toru tau
Given kua piki, kua toro hoki te Best Start ki ia tamaiti i raro i te toru tau hei tautoko pūtea tamariki ā-whānui
And kāore he nama utu i te kaupapa here
When kei tētahi kāinga tētahi tamaiti i raro i te toru tau
Then ka riro i tērā tamaiti te Best Start, kāore he whakamātautau rawa i tēnei kaupapa here
Outcome ka taea e ia tamaiti i raro i te toru tau te riro i te Best Start, kāore he whakamātautau rawa
But ka riro i te Karauna tētahi pire mutunga-kore — kāore he reiti utu i tāpirihia
Activates green-manifesto-2026-gender-equity

Scenario: Ka tuhia te reo tamariki ki te ture
When ka whakamātāmuatia e te ture te reo tamariki mā te Child Impact Assessment Tool
And ka whakaurua ngā Rights of the Child ki te ture
Then me whakaatu ngā whakataunga e pā ana ki ngā tamariki kua paunatia tērā reo
Outcome me whakaatu ngā whakataunga e pā ana ki ngā tamariki kua paunatia tō rātou reo
But me hoahoa, me whakahaere hoki ngā tari i te taputapu i mua i te tino riro o tērā reo i ngā tamariki

Scenario: Ka tāmau te whakahou i te Ture Oranga Tamariki i te mana o te iwi, o te hapū rānei
When ka whakahouria te Ture Oranga Tamariki hei tiaki i ngā tamariki Māori
And ka tāmauria te whai wāhi a te whānau me te mana o te iwi, o te hapū rānei
Then me uru tērā mana ki ngā whakataunga atawhai mō ngā tamariki Māori
Outcome me uru te mana o te whānau me te iwi, te hapū rānei, ki ngā whakataunga atawhai mō ngā tamariki Māori
But me tuhi tonu e te Pāremata te whakahou i mua i te huri o aua motika i te whenua
