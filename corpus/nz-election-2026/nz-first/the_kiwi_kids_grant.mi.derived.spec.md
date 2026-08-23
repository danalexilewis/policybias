---
type: spec
id: nz-first-the-kiwi-kids-grant-derived
title: "Ko te Kiwi Kids Grant e pānuitia ana hei pūnaha: e toru ngā tamariki ka utua, kāore te tuawhā e whiwhi, ā, kāore te urupare reiti whānau i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ka here te takoha ki ngā tamariki tuatahi e toru, ka mutu i muri i ngā tau e toru mō ia, nā reira kāore te tamaiti tuawhā e whiwhi, ā, kāore e taea te kerēme reiti whānau te rahi ki te kore he whakatau tata urupare.
jurisdiction: NZ
sources:
  - title: The 'Kiwi Kids Grant'
    url: https://www.nzfirst.nz/the_kiwi_kids_grant
tags:
  - social-welfare
  - cost-of-living
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/the_kiwi_kids_grant.md
derivesFrom: nz-first-the-kiwi-kids-grant
assumptions:
  - ko te here i te takoha ki ngā tamariki tuatahi e toru te tikanga kei waho te tamaiti tuawhā i te whakawhiti mā te hoahoa; ka whai tērā pānui i te here kua kīia, ehara i tētahi rārangi aukati kua āta kīia
  - me tētahi urupare reiti whānau tētahi kerēme taupori e whai ana ki te whakanui i te reiti whānau kia taea te tirotiro; kāore te kaupapa here e tuku, nā reira ka noho te hua taupori kāore i whakamanatia i tēnei kaupapa here
  - ka aukati te āheinga mātua-kirirarau i ngā kāinga kāore tētahi o ngā mātua i te kirirarau o Aotearoa, ahakoa i whānau te tamaiti i konei
  - he whakatau tata wāhi te utu $400 miriona o te tau tuatoru ina tū te huringa katoa, ehara i te huarahi whānau e urupare ana ki te takoha
sourceDigest: "sha256-a9b5c4aa45f6a2e0"
lang: mi
translationOf: nz-first-the-kiwi-kids-grant-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-858fb1c3055303e9
---

# Tō mātou māramatanga

> Ka utu te Kiwi Kids Grant i te $5000 ia tau mō ngā tau e toru mō ngā tamariki tuatahi e toru anake, mō ngā mātua kirirarau, me te utu $400 miriona o te tau tuatoru — engari kāore te tamaiti tuawhā e whiwhi, ā, kāore he urupare reiti whānau i whakatauria.

System: Te Kiwi Kids Grant hei whakawhiti kua herea, kua herea-wā

Scenario: He tamaiti tuawhā tō tētahi whānau i muri i te haere o te takoha
Given tētahi takoha ka utua mō te tamaiti tuatahi, tuarua, tuatoru anake
And $5000 ia tau mō ngā tau tuatahi e toru o ia tamaiti e tika ana
When ka whānau te tamaiti tuawhā
Then ka noho tērā tamaiti ki waho o te takoha
# extrapolated: 0 follows from the first-three-children limit, not a published exclusion figure
Output 0 grant paid for the fourth child
Outcome ka mutu te whakawhiti ki ngā tamariki e toru mā te hoahoa
But ka kite tētahi kāinga e whakatau ana i tētahi whānau nui ake i te kore takoha i te whānau e whai ake

Scenario: Ka whakamātauria te kerēme reiti whānau ki tētahi urupare kāore i whakaingoatia
Given kua heke te reiti whānau o Aotearoa ki te 1.53 whānau ia tangata
And i heke ngā whānau kirirarau i te 52,506 i te 2006 ki te 36,351 i te 2025
And kāore he whakatau tata e hia ngā whānau tāpiri ka puta i te takoha
When ka whakaurua te takoha hei whakatenatena i ētahi atu tamariki
Then ka heke te utu o te whakatipu i ngā tamariki tuatahi e toru mō ngā mātua e tika ana
Outcome ka whakaitihia te aukati utu mō te hunga e tika ana
But ka utu tonu ngā kaiputu tāke i te takoha kāore e mōhio mēnā ka piki ake ngā whānau

Scenario: Tētahi kāinga kāore tētahi o ngā mātua i te kirirarau o Aotearoa
Given me kirirarau o Aotearoa tētahi mātua kia tika
When ka whānau tētahi tamaiti ki ngā mātua ehara i te kirirarau
Then kāore te kāinga e whiwhi i te takoha
Outcome ka rāhuitia te whakawhiti mō ngā mātua kirirarau
But ka noho ngā whānau ehara i te kirirarau, e tatau ana te kaupapa here e piki ana, ki waho o te whakatenatena
