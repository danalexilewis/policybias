---
type: spec
id: act-affordable-government-derived
title: "Ko te whakakotahitanga hei pūnaha: te kawenga utu nā te tūranga"
status: draft
updated: 2026-08-18
summary: He utu whakawhiti kāore i utuhia te whakakotahi tari, ā, mā te tango i ngā tumuaki nā te whakararaunga kaupapa here e utu te tohutohu tūwhera, tino pono.
jurisdiction: NZ
sources:
  - title: A Smaller, More Affordable Government
    url: https://www.act.org.nz/affordable-government
tags:
  - budget
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/affordable-government.md
derivesFrom: act-affordable-government
assumptions:
  - ka utu te whakakotahi i ngā rōpū e 43 ki te 19 i mua i te tiaki: me neke ngā utu kaimahi, ngā rawa, ngā pūnaha me ngā pūkete
  - ka utu te āpiha e taea te tango tōna tumuaki nā te whakararaunga kaupapa here ki te tuku tohutohu kāore e hiahiatia, ahakoa ngā tiakanga ā-ture
  - ko te kī a te kaupapa here kāore e pāngia ngā ratonga ā-mua, e whakapae ana ka mau ngā tari kua whakakotahitia i ngā kaimahi tuku ōrite
  - ka here tētahi wā pūmau, ka taea te whakahou kotahi, te tūranga matua ki te hurihanga pōti
  - kāore he tiaki e kīia ana i konei, nā te mea kāore te kaupapa here e whakaputa
sourceDigest: "sha256-cf145c74128adc18"
lang: mi
translationOf: act-affordable-government-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-a51ae64f4f034bcd
---

# Tō mātou māramatanga

> Kua whakaputaina ngā tatau, ngā mana me te wehenga. Kāore he utu i tāpiritia ki te utu whakawhiti, ā, mā te mana tango nā te whakararaunga kaupapa here e utu te tohutohu, ahakoa ngā tiakanga ā-ture. Kāore he tiaki, he nama utu rānei i whakaputaina.

System: Ko te whakakotahitanga hei whakawhiti me te utu ki te tohutohu

Scenario: Ka whakahaerehia te whakakotahi puta noa i tētahi wā
Given e 43 ngā tari, ia tari he utu kaimahi, he rīhi rawa, he pūnaha, he pūkete motuhake
When ka whakakotahitia ki te 19
Then ka neke ia mahi kua whakakotahitia i mua i te whakangāwari
Outcome he huinga rōpū iti ake hei pūtea
But ka tae te utu o te neke i mua i tētahi tiaki
And ka noho te kaha tuku ki te whakakotahi i a ia e haere ana

Scenario: Ka whakarite tētahi āpiha i te tohutohu kāore e hiahiatia e te minita
Given he tumuaki kua tohua e te minita mō tētahi wā pūmau, ka taea te whakahou kotahi
And ka wātea te tango nā te whakararaunga kaupapa here
When ka whakarite tētahi āpiha i te tohutohu e ātete ana i te kaupapa here kua kīia e te minita
Then ka pauna te tumuaki i te tohutohu ki tōna ake tūranga
Outcome he mārama ake te kawenga mō te tuku i tērā i mua
But ināianei he utu whaiaro te tohutohu tūwhera, tino pono

Scenario: Ka huri te kāwanatanga i tētahi pōtitanga
Given ka here te tūranga matua ki te tohu a te minita
When ka huri te kāwanatanga
Then tērā pea ka whakakapia e ngā minita hou ngā tumuaki i riro i a rātou
Outcome ka taea e te kāwanatanga hou te whakarara i te tuku ki tana hōtaka ināianei
But ka huri te mahara ā-tari i runga i te hurihanga pōti
