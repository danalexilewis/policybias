---
type: spec
id: te-pati-maori-kai-sovereignty-derived
title: "Ka pānuitia te mana motuhake kai hei pūnaha: he poari, he tapahi tāke hokohoko (GST), me tētahi ture utu kāore i whakaingoatia"
status: draft
updated: 2026-08-22
summary: He aronga tō te Māori Kai Sovereignty Board me te kai kore-tāke-hokohoko (GST), engari kāore i whakaingoatia te utu ā-tahua o te tango GST, me te taputapu e waeture ana i ngā pikinga utu, nō reira kāore e taea te ine i te paanga ki te tahua, i te whai ture o ngā hokomaha rānei.
jurisdiction: NZ
sources:
  - title: Kai Sovereignty
    url: https://www.maoriparty.org.nz/kai_sovereignty
  - title: Kai Sovereignty
    url: https://www.maoriparty.org.nz/kai_sovereignt
tags:
  - agriculture
  - taxation
party: te-pati-maori
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/kai_sovereignty.md
derivesFrom: te-pati-maori-kai-sovereignty
assumptions:
  - mā te tango i te tāke hokohoko (GST) i te kai ka neke te pūtea mai i te Karauna ki ngā kaihoko hokomaha mehemea anake ka tukuna te tapahi ki te utu; he kī ā-whanonga te tukunga, kāore te kaupapa here e whakamana
  - e whirinaki ana te utu ā-tahua o te kai kore-tāke-hokohoko (GST) ki ēhea kai ka kīia he kai, ki te kohinga tāke hokohoko (GST) o nāianei i ērā rārangi; kāore tētahi i whakapuakina
  - me whai pae, kaiarotake, whiu hoki te waeture i ngā pikinga utu hokomaha; ki te kore ērā, he tapanga noa te ture
  - me whai mana me te pūtea tētahi poari e tirotiro ana i te tika kai i mua i tōna here i tētahi
  - kāore mātou e kōkiri nama, nā te mea kāore he nama i te kaupapa here hei mahi
sourceDigest: "sha256-549ec31636fa2940"
lang: mi
translationOf: te-pati-maori-kai-sovereignty-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-265c27cd56189251
---

# Tō mātou māramatanga

> Mā te Māori Kai Sovereignty Board e tirotiro te tika kai i te taha o te kai kore-tāke-hokohoko (GST) me te waeture i ngā pikinga utu hokomaha—engari kāore anō kia whai mana, mema, pūtea rānei te poari, ā, kāore tētahi i rārangi i ēhea kai ka kīia he kai. Ka whai hua ngā kaihoko mehemea ka tukuna e ngā kaipakihi te tapahi tāke hokohoko (GST); kāore anō te Karauna e taea te ine i te pūtea e ngaro.

System: Te tirotiro a te poari me tētahi pire tāke hokohoko (GST) me tētahi taputapu utu kāore i whakaingoatia

Scenario: Ka tangohia te tāke hokohoko (GST) i te kai
Given he whakaaro kia whakahekea ngā utu hokomaha mā te tango i te tāke hokohoko (GST) i te kai
And kāore he rārangi o ngā mea ka kīia he kai, kāore hoki he whakatau tata ā-tahua
When ka heke te tāke hokohoko (GST) i te kai
Then ka whakarērea e te Karauna te pūtea tāke hokohoko (GST) i ērā rārangi
And ka iti ake te utu a ngā kaihoko mehemea anake ka tukuna e ngā kaipakihi te tapahi ki te utu
Outcome ka taea te heke o ngā utu hokomaha i te wāhanga o te kete e tākea ana
But kāore e taea e Te Tai Ōhanga te ine i te pūtea e ngaro, ā, kāore ngā kaihoko e mōhio he aha ka tae ki te kaute

Scenario: Ka waeturehia ngā pikinga utu hokomaha
Given he whakaaro kia waeturehia ngā pikinga utu hokomaha
And kāore he pae, he kaiarotake, he whiu rānei
When ka whakaputaina he pikinga utu
Then me whakatau tētahi mehemea ka whakaaetia, ka herea, ka whiua rānei te pikinga
Outcome ka oatihia ki ngā kaihoko he oranga i te pikinga
But kāore he whiu mō ngā hokomaha kia āta tohua rā anō e tētahi te pae, te kaiarotake me te whaina

Scenario: Ka whakatūria te Māori Kai Sovereignty Board
Given he poari kua tukuna ki te tirotiro i te tika kai
And kāore he mana, he mematanga, he pūtea rānei i te kaupapa here
When ka whakatūria te poari
Then me tautuhi tonu tōna mana ki te kākano, ki te GE, ki a WAI262, ki ngā pūnaha kai
Outcome he kaitiaki kua whakaingoatia mō te tika kai
But ki te kore he mana, kāore e taea e te poari te whakatau tautohe kākano, GE, WAI262, pūnaha kai rānei
