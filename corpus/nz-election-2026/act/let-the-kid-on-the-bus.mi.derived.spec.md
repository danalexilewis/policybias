---
type: spec
id: act-let-the-kid-on-the-bus-derived
title: "Ko te Open Seat Rule e pānuitia ana hei pūnaha: te āheinga wātea tuatahi, kātahi tētahi utu hou i roto i te tahua kua taupanetia"
status: draft
updated: 2026-08-21
summary: Ka taea te whakamahi i ngā tūru wātea i ngā ara o nāianei, kāore he whakapau hou; ina kī tētahi ara i te hiahia, he utu tūturu tētahi pahi tāpiri me tango i tētahi atu i roto i te tahua o nāianei a Te Tāhuhu o te Mātauranga.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/let-the-kid-on-the-bus
tags:
  - education
  - transport
party: act
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/act/let-the-kid-on-the-bus.md
sourceDigest: "sha256-2960484f34f94c19"
derivesFrom: act-let-the-kid-on-the-bus
assumptions:
  - ka taea te whakakī i te āheinga wātea o tētahi ara o nāianei, tata kore utu tāpiri ki te Manatū; ko te haere motokā a te whānau te mea ka taka
  - ina pau ngā tūru wātea, he utu whakahaere hou tētahi pahi tāpiri ahakoa ka utua i roto i te tahua o nāianei a Te Tāhuhu o te Mātauranga
  - ko te utu i ngā tāpiritanga mā te tapahi moumou te tikanga ka nekehia tētahi atu whakapau a te Manatū; kāore i te kaupapa here ēhea rārangi ka tapahia
  - kāore mātou e tāpiri nama tāra mō ngā tūru kua wetekina, ngā pahi kua tāpirihia, te moumou kua tapahia rānei, nā te mea kāore te kaupapa here e whakaputa
lang: mi
translationOf: act-let-the-kid-on-the-bus-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-32766a3c26aed341
---

# Tō mātou māramatanga

> Ka whakamahi te Open Seat Rule i ngā tūru wātea i ngā ara pahi kura o nāianei, ahakoa ko tēhea kura te tamaiti e haere ana, ā, ka utua ngā pahi tāpiri i roto i te tahua o nāianei a Te Tāhuhu o te Mātauranga ina kī tētahi ara. Ko te tohatoha tūru ina hiahia ētahi tamariki i te tūru wātea kotahi, he aha te moumou ka tapahia, me te nui o ngā tamariki e pā ana, kāore i āta tohua.

System: Ko te āheinga wātea tuatahi, kātahi te kiki i roto i te tahua kua taupanetia

Scenario: Ka whakamahi tētahi tamaiti i tētahi tūru wātea i tētahi ara o nāianei
Given kua hangaia ngā ture waka kura ki te kura tata rawa o te tamaiti
And i ngā hapori taiwhenua ka hipa pea tētahi tūru wātea i tētahi tamaiti e tatari ana nā te mea i kōwhiria e tōna whānau tētahi kura kē
And ka tāruatia e ngā mātua te haere i tō rātou ake motokā i te wā e haere ana tētahi pahi utua e te kaipākeha me te wāhi wātea
When ka tuku te Open Seat Rule i tētahi tamaiti e noho ana i te taha o tētahi ara pahi kura o nāianei ki te whakamahi i te ratonga ina wātea tētahi tūru, ahakoa ko tēhea kura e haere ana rātou
Then ka whakamahia te āheinga wātea i mua i te tono pahi hou
Outcome ka penapena ngā whānau i te wā me te hinu i te whakamahi i te waka kua utua kētia e ngā kaipākeha
But kāore te tohatoha i waenga i ngā tamariki e hiahia ana i te tūru wātea kotahi i te tau, kia tū rā anō tētahi ture ā-rohe

Scenario: Ka kī te hiahia i tētahi ara i tua atu i tōna āheinga
When ka nui ake te hiahia i tētahi ara i tōna āheinga, ā, ka tukuna tētahi pahi tāpiri
Then ka hanga te kiki i runga i te Open Seat Rule i tētahi utu whakahaere hou
Outcome ka utua te pahi tāpiri i roto i te tahua o nāianei a Te Tāhuhu o te Mātauranga mā te tapahi moumou
But ka nekehia tonu e tētahi utu i roto i te tahua kua taupanetia tētahi atu whakapau a te Manatū

Scenario: Kāore te nuinga o ngā ara e kī
When ka whakaurua te Open Seat Rule mō te waka kura
Then kāore ngā ara e mau tonu ana i ngā tūru wātea e hiahia i te whakapau tāpiri a te Manatū
Outcome ko te ture te nuinga he tohatoha anō i ngā tūru wātea, ehara i te whakawhānui i te rāngai pahi
But ko te angitu e kī ana i ngā ara maha ka huri i te kaupapa here āheinga-kore-utu hei rārangi pahi hou e whakataetae ana mō te tahua kua taupanetia kotahi
