---
type: spec
id: act-equal-service-derived
title: "Te ratonga ōrite e pānuitia ana hei pūnaha: ka huri ia o te utu kaimahi, te kawe me te tikanga wāhi mahi i raro i tētahi tuhi anō o te Ture"
status: draft
updated: 2026-08-21
summary: Ka whakakorea ngā ture mahi tūmatanui e hāngai ana ki te iwi, ka taea te tautohe i te kawe i runga i te hiahia, ā, ka mutu te tikanga wairua e utua ana e te tūmatanui i te wāhi mahi — e toru ngā tikanga, kāore he kerēme tahua kua utua.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/equal-service
tags:
  - other
party: act
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/act/equal-service.md
derivesFrom: act-equal-service
assumptions:
  - ko te whakakore i te section 73 o te Public Service Act me te section 118 o te Crown Entities Act, he tango i tētahi kawenga ā-ture ki te hanga kaupapa here mahi huri noa i ētahi rōpū iwi; ka noho ngā ture aukati whakatoihara me te pūkenga
  - ko te whakanoho i te kawe i runga i te hiahia ki te ture, he ara wero kōti kāore tētahi tohutohu rūnanga anake e hoatu
  - ko te whakamutu i te wā tūmatanui me ngā pūtea tūmatanui mō ngā mahi wairua, whakapono rānei i te wāhi mahi, he huri i tā te kaituku mahi e taea te whakarite, te utu rānei, i te wā ka noho te tikanga tūmataiti i te wā ake o te tangata
  - kāore mātou e tāpiri nama tāra, nā te mea kāore te kaupapa here e whakaputa, ā, ko te tito i tētahi penapena, utu rānei he hanganga kōrero
sourceDigest: "sha256-7c60bb5f0171f372"
lang: mi
translationOf: act-equal-service-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9951d9bcf59bc1ca
---

# Tō mātou māramatanga

> Ka whakakorea ngā ture mahi e hāngai ana ki te iwi, ka uru te kawe i runga i te hiahia ki te ture, ka mutu te tikanga wairua e utua ana e te tūmatanui i te wāhi mahi, ā, ka tuhia anō te Public Service Act hei tikanga e toru wehe. Kāore he nama tahua i whakaputaina.

System: Kotahi te paerewa hei huringa ture e toru

Scenario: Ka hanga tētahi kaituku mahi tūmatanui i te kaupapa here utu kaimahi
Given i hanga ngā kāwanatanga o mua i ngā ara wehe mō ngā rōpū rerekē, ā, kei te noho te nuinga o aua ture
And e hiahia ana te Public Service Act i ngā kaimahi tūmatanui tōrangapū-kore me ngā kopounga i runga i te pūkenga
When ka whakakorea te section 73 o te Public Service Act me te section 118 o te Crown Entities Act
Then kāore anō te kaupapa here mahi e hangaia huri noa i ngā wawata me ngā hiahia mahi o ētahi rōpū iwi e aua wāhanga
Outcome ka whakakīia ngā tūranga kāwanatanga i raro i ngā ture pūkenga me te aukati whakatoihara e toe ana
But kei ngā tari tonu te mahi whakawhiti o te tuhi anō i ngā kaupapa here o nāianei

Scenario: E rua ngā tāngata e whakaatu ana i te hiahia kotahi
Given kua tohutohungia kē ngā tari ki te kawe ratonga i runga i te hiahia, kaua ki te tuakiri
When ka whakanohoia te ture hiahia ki te ture
Then ka taea e te tangata te wero i tētahi whakatau e takahi ana i tērā i te kōti
Outcome ka whakawākia te kawe i runga i te hiahia, kaua ki te tuakiri
But ka waiho te āhua o te whakaatu i te hiahia i te kōti ki te tikanga ā muri ake

Scenario: Ka whakaritea te mahi wairua, whakapono rānei i te wā tūmatanui
When ka mutu te whakamahi i te wā tūmatanui me ngā pūtea tūmatanui mō ngā mahi wairua, whakapono rānei i te wāhi mahi
Then ka mutu te kaituku mahi ki te whakahaere i aua mahi hei mahi utu
Outcome ka noho ngā kaimahi ki te āhei ki te mahi i tō rātou ake wā
But ka tautohetia he aha te mahi wairua i te wāhi mahi kia tau rā anō te tikanga
