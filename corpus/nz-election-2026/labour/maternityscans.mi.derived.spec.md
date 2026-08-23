---
type: spec
id: labour-maternityscans-derived
title: "Ko ngā whakaahua oro whakawhānau kore utu e pānuitia ana hei pūnaha: he tika ā-motu e herea ana e te paipa sonographer"
status: draft
updated: 2026-08-21
summary: Ka riro te roti ā-rohe $90 o nāianei hei tika kore utu ā-motu, engari ka huri te kaha tuku i ngā ākonga sonographer 24, ā, kei te wātaka tāke hua rawa herea te pūtea.
jurisdiction: NZ
sources:
  - title: Free Maternity Scans With the Medicard
    url: https://www.labour.org.nz/maternityscans
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/maternityscans.md
derivesFrom: labour-maternityscans
assumptions:
  - ka hanga te whakamutu i te roti ā-rohe mō ngā whakaahua oro kore utu i tētahi tika ā-motu tū tonu ina tīmata ngā whakaahua oro kore utu; kāore te kaupapa here e herea ki ngā moni tāke hua rawa o taua tau
  - ko ngā tūranga ākonga sonographer utua 24 anake te whakawhānui kaimahi e ingoa ana te kaupapa here, nā reira ko te kaha te here kaha ki te piki te hiahia ina heke te utu ki te kore
  - ko te pūtea mai i te tāke hua rawa herea ki te hauora te tikanga ka whai ngā moni i ngā hokonga rawa, kāore te maramataka tika e whai
sourceDigest: "sha256-66cd32358a546bf3"
lang: mi
translationOf: labour-maternityscans-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8e6726461750e7c4
---

# Tō mātou māramatanga

> Ka riro te roti ā-rohe o nāianei mō ngā utu whakaahua oro whakawhānau hei tika kore utu ā-motu, engari ka huri te tuku i ngā ākonga sonographer utua e rua tekau mā whā, koia anake te whakawhānui kaimahi kua ingoatia. Kei te tāke hua rawa herea ki te hauora te pūtea, nā reira ka whai ngā moni i ngā hokonga rawa, kāore te maramataka tika e whai.

System: Ngā whakaahua oro whakawhānau kore utu hei tika ā-motu i runga i te huarahi kaimahi angiangi

Scenario: Ka mutu te roti ā-rohe, ka tīmata te tika ā-motu
Given he $90 te utu nui rawa o ia whakaahua oro whakawhānau
And he kore utu anake ngā whakaahua oro i ētahi rohe i tēnei rā
When ka tīmata ngā whakaahua oro kore utu puta noa i te motu
Then he kore utu ia whakaahua oro whakawhānau kua tonoa, i ngā wāhi katoa
Output $28.6 million a year cost
Outcome kāore e whakatau anō te wāhi noho mēnā he kore utu te whakaahua oro
But ka tīmata te maramataka tika i muri i te tīmatanga o te tāke pūtea
Activates labour-medicard

Scenario: Ka tūtaki te hiahia ki te paipa ākonga kua herea
Given e pūteatia ana ngā tūranga ākonga sonographer utua 24
When ka piki te hiahia whakaahua oro kua tonoa nā te heke o te utu ki te kore
Then ka herea te tipu kaimahi ki taua tango ākonga i te kaupapa here
Output less than $3 million a year for the trainee positions
Outcome ko te kaha, ehara i te kawenga Medicard, te here kaha
But ka waiho tonu ngā rohe he pōturi te otinga ākonga i te hunga hapū e tatari ana mō tētahi wāhi

Scenario: Ka pūtea te tika e te tāke hua rawa herea
Given ka pūteatia ngā whakaahua oro whakawhānau kore utu e te tāke hua rawa herea ki te hauora
When ka heke ngā hokonga rawa i te wā e tū ana te tika whakaahua oro kore utu
Then ka tū tonu te utu ā-tau kia rite ki te mea i tāia
Output $28.6 million a year cost
Outcome kāore te tika i tuhia hei mea herea ki ngā hokonga o taua tau
But kei te Karauna me ngā tūroro e tatari ana mō tētahi wāhi whakaahua oro te tūraru wātaka
Activates labour-medicard
