---
type: spec
id: labour-prescriptions-derived
title: "Ko ngā tohutohu rongoā kore utu e pānuitia ana hei pūnaha: he whakapau ā-tau tū tonu i runga i te pūtea hauora ā-hurihanga"
status: draft
updated: 2026-08-21
summary: Ka hanga te tango i te utu tohutohu rongoā i tētahi utu tū tonu $74.5 million ia tau; ki te pūtea ngā moni tāke hua rawa i te hauora, ā, ka heke ngā hokonga, ka tū tonu te tika, ā, he horopaki te kore kohikohi, ehara i te whāinga.
jurisdiction: NZ
sources:
  - title: Free Prescriptions Under Labour
    url: https://www.labour.org.nz/prescriptions
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/prescriptions.md
derivesFrom: labour-prescriptions
assumptions:
  - he tika tū tonu te tango i te utu $5 mō te hunga katoa e whai tika ana ki te hauora tūmatanui kore utu; kāore te kaupapa here e kī ka tapahia te whakapau ina heke te moni
  - mai i te tāke hua rawa herea ki te hauora te pūtea, nā reira ka whai ngā moni i ngā hokonga rawa, kāore te maramataka tika e whai
  - he nama horopaki i te kaupapa here te 155,000 kāore i kohia i tērā tau, ehara i te whāinga tuku mō te maha ka kohi ina kua ngaro te utu
sourceDigest: "sha256-72f01fd6a271bce8"
lang: mi
translationOf: labour-prescriptions-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6c7a11aa3d5d73c2
---

# Tō mātou māramatanga

> Ka hanga te tango i te utu tohutohu rongoā i tētahi tika ā-tau tū tonu $74.5 million, herea ki ngā moni tāke hua rawa ā-hurihanga e whai ana i ngā hokonga rawa, kāore i te maramataka hauora. Ko te 155,000 i mahue i te rongoā i tērā tau he horopaki, ehara i te whāinga tuku mō te tango ina kua ngaro te utu.

System: Ngā tohutohu rongoā kore utu hei whakapau tū tonu i runga i te moni hauora ā-hurihanga

Scenario: Ka tango te utu, ka tū te whakapau ia tau
Given he utu tohutohu rongoā $5 mō te nuinga e whai tika ana ki te hauora tūmatanui kore utu i tēnei rā
When ka tangohia te utu
Then ka noho kore utu ngā tohutohu rongoā hei tika tū tonu
Output $5 prescription fee removed
And $74.5 million a year estimated cost
Outcome ka mau ia tangata whai tika i te huarahi rongoā kore utu
But ka tutuki te Karauna, ngā tūroro rānei, i te āputa ina heke ngā hokonga i tētahi tau
Activates labour-medicard

Scenario: Ka pūtea ngā moni tāke hua rawa i te hauora i te hekenga o ngā hokonga
Given ka pūteatia ngā tohutohu rongoā kore utu e te tāke hua rawa herea ki te hauora
When ka heke ngā hokonga rawa i tētahi tau
Then ka tū tonu te utu ā-tau kia rite ki te mea i tāia
Output $74.5 million a year estimated cost
Outcome kāore te tika i tuhia hei mea herea ki ngā hokonga o taua tau
But ka tohatoha ngā tūroro me te Karauna i te ōrite kore wātaka ina pōturi ngā hoko, kāore te tika e pōturi
Activates labour-medicard

Scenario: Ka pānuitia te kore kohikohi hei horopaki
Given kāore 155,000 tāngata o Aotearoa i kohi i te rongoā i tohutohua nā te utu i tērā tau
When ka tīmata ngā tohutohu rongoā kore utu
Then he pae tīmata tērā nama, ehara i te whāinga tuku
Outcome ka taea te piki, te heke, te noho rānei o te tango, kāore te kaupapa here e ingoa i tētahi whāinga
But ka mau te Karauna i te pire ahakoa piki, heke, noho rānei te tango
