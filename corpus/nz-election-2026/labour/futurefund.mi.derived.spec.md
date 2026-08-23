---
type: spec
id: labour-futurefund-derived
title: "Ko te Future Fund e pānuitia ana hei pūnaha: he takai kia whakaingoatia te kākano me ngā rawa"
status: draft
updated: 2026-08-21
summary: Ki te kore he rahi kākano, he rārangi rawa rānei i whakapuakina, he takai te tahua; ko te motuhake i te Minita he whakahaere, ehara i te rahi; ko te whakataurite Super Fund he horopaki, ehara i te tahua o tēnei tahua.
jurisdiction: NZ
sources:
  - title: The New Zealand Future Fund
    url: https://www.labour.org.nz/futurefund
tags:
  - economy
  - infrastructure
party: labour
clusters:
  - tax-fiscal
money: no-figure
sourcePath: corpus/nz-election-2026/labour/futurefund.md
derivesFrom: labour-futurefund
assumptions:
  - ko te tahua kua kākanoitia ki ngā rawa kāore i whakaingoatia me tētahi takoha haupū kāore i whakaingoatia, kāore e taea te ine i te kaupapa here, nō reira ka kīia he takai kia whakaingoatia aua mea
  - ko te whakahaere motuhake me te aukati i te tohutohu a te Minita i ngā haumi takitahi, he ture whakahaere, ehara i te ine rahi
  - ko ngā nama mō ētahi tahua kē, tae atu ki te Super Fund, he horopaki whakataurite, kāore e tahua i tēnei tahua
sourceDigest: "sha256-4adb6d9d6c8657ff"
lang: mi
translationOf: labour-futurefund-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-11fe27982d1a0c5d
---

# Tō mātou māramatanga

> Ko te tahua e whakahaerehia motuhaketia ana, kua kākanoitia ki ngā rawa ā-Karauna, he takai kia whakaingoatia te rahi kākano me te rārangi rawa. Ko te motuhake i te tohutohu a te Minita he ture whakahaere, ehara i te ine rahi, ā, ko ngā nama Super Fund i te rauemi he horopaki whakataurite, ehara i te tahua o tēnei tahua.

System: Ko te Future Fund hei takai, kāore he kākano i whakapuakina

Scenario: Ka hangaia te tahua, kāore he kākano kua tāia
When ka whakatūria te Future Fund
Then ka noho ingoakore te rahi kākano me te rārangi rawa kākano
Outcome he takai te tahua kia whakaingoatia aua mea
But kāore e taea e ngā kaiutu tāke te ine i te here kia whakaingoatia te kākano me ngā rawa

Scenario: Ka tautuhia te motuhake i te Minita i te whakahaere
When ka whakahaere ngā Kaitiaki i te Tahua, ā, kāore e taea e te Minita te tohutohu i ngā haumi takitahi
Then ka here tērā ture i te hunga ka kōwhiri i ngā kirimana
Outcome he hoahoa whakahaere te motuhake, ehara i te ine i te rahi o te tahua

Scenario: Ka whakahuatia te Super Fund hei horopaki
When ka whakatakoto te kaupapa here i te Future Fund ki te taha o te Super Fund
Then ko tērā whakataurite he horopaki mō te haupū o Aotearoa, ehara i te tahua o tēnei tahua
Outcome kāore anō te Future Fund kia whakapuaki i tōna ake kākano, i tōna ake rārangi rawa rānei
