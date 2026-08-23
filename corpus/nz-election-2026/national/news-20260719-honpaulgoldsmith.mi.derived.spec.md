---
type: spec
id: national-news-20260719-honpaulgoldsmith-derived
title: "Ko te whakaae hohe e pānuitia ana hei pūnaha: he paerewa āe ka waiho tonu te whakawā ki te whakaatu i te ngaro"
status: draft
updated: 2026-08-21
summary: Ko te hiahia ki tētahi āe hohe te tikanga ehara te noho puku i te whakaae, engari me whakaatu tonu te whakawā i tua atu i te rūpahu tika kāore i homai te whakaae; kāore i whakaingoatia te pauna o ngā kupu me ngā mahi i te mahi.
jurisdiction: NZ
sources:
  - title: National will modernise consent laws
    url: https://www.national.org.nz/news/20260719-honpaulgoldsmith
tags:
  - crime-and-justice
party: national
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/national/news-20260719-honpaulgoldsmith.md
derivesFrom: national-news-20260719-honpaulgoldsmith
assumptions:
  - ka huri tētahi ture āe-hohe i te mea ka kīia he whakaae; kāore, i ngā kupu ake o te kaupapa here, e nuku i te hunga me whakaatu i te aha
  - ko te whakaatu kāore i homai te whakaae i te wā e hiahia ana te whakamātautau ture ki tētahi āe te tikanga ka kawea e te Karauna te ngaro hei meka hei whakatū i tua atu i te rūpahu tika
  - "ko ngā 'kupu, mahi rānei' me te kore tikanga taunaki ka waiho ngā kaiwhakawā me ngā rōia ki te hanga i te whakamātautau o te noho puku, te haurangi me ngā tohu whakauru"
  - kāore mātou e tāpiri nama tāra, nā te mea kāore te kaupapa here e whakaputa i tētahi
sourceDigest: "sha256-78f47b234ebcc496"
lang: mi
translationOf: national-news-20260719-honpaulgoldsmith-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-78edc788b378c07d
---

# Tō mātou māramatanga

> Ko te hiahia ki tētahi āe hohe te tikanga ehara te noho puku i te whakaae, engari me whakaatu tonu te whakawā i tua atu i te rūpahu tika kāore i homai te whakaae. Ka noho tonu tērā tautohe i waenga i te tautuhinga āe-hohe me te whakaatu i te ngaro, ā, ka pauna tonu ngā kaiwhakawā i ngā kupu me ngā mahi me te kore ārahitanga anō mō te haurangi, ngā tohu whakauru rānei.

System: He āe hohe me te pīkaunga whakaatu kāore i huri

Scenario: Ka aromatawaihia te noho puku i raro i te ture āe-hohe
Given ka rārangitia e te Ture Hara ngā mea ehara i te whakaae, engari kāore e tautuhi i te whakaae
When ka hiahia te ture kia homai hohe te whakaae mā tētahi āe, kaua ki te ngaro o tētahi kāo
Then ehara te noho puku i te whakaae
Outcome kāore tētahi hononga, tūtakitanga rānei o mua e kawe i te whakaae ki mua
But me whakatau tonu te kaiwhakawā he aha ngā kupu, mahi rānei i kīia he āe

Scenario: Ka kawea tonu e te whakawā te pīkaunga
Given e kī ana te kaupapa here kāore te pīkaunga whakaatu e nuku
When ka whakawākia tētahi kēhi hōkakatanga i muri i te huringa
Then me whakaatu tonu te whakawā i tua atu i te rūpahu tika kāore i homai te whakaae
And kāore te kaipānga i whakapono i runga i ngā take tika i homai
Outcome ka kuiti te tautuhinga o te whakaae, ka noho tonu te paerewa whakaatu
But ko te whakaatu i te ngaro o tētahi āe hohe he mahi a te Karauna tonu, ehara i te hunga wawao

Scenario: Ka waiho te tikanga taunaki kia tuwhera
When ka whakamahia e ngā kaiwhakawā me ngā rōpū whakawā "ngā kupu, mahi rānei" me te kore ārahitanga anō i te kaupapa here
Then ka tautohe ngā rōia he aha te āe hohe i ia tauira meka
Outcome ka taea te tautuhi anō ngā tūmanako pāpori i mua i te tikanga o te rūma kōti
But ka tūtaki tonu ngā kaipānga ki ngā kaiwhakawā e pauna ana i te haurangi me ngā tohu whakauru me te kore pukapuka ture pumau
