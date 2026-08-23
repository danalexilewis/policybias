---
type: spec
id: green-manifesto-2026-overseas-new-zealanders-derived
title: "Ka pānuitia ngā tāngata o Aotearoa kei tāwāhi hei pūnaha: te ture 10-tau penihana kaumātua kua whakahokia, me te wā pōti ki tāwāhi kāore he roa i kīia"
status: draft
updated: 2026-08-21
summary: Ko te whakahoki i te wā noho 10-tau mō te penihana kaumātua ka whakahou i te wā tika, ā, ko te whakaroa i te wā ka pupuri ngā kirirarau kei tāwāhi i te mōtika pōti, kāore e tāia te roa hou.
jurisdiction: NZ
sources:
  - title: Overseas New Zealanders
    url: https://www.greens.org.nz/manifesto_2026_overseas_new_zealanders
tags:
  - immigration
  - superannuation
party: green
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_overseas_new_zealanders.md
derivesFrom: green-manifesto-2026-overseas-new-zealanders
assumptions:
  - ko te whakahoki i te wā noho 10-tau mō te tika ki te penihana kaumātua ka huri ko wai e tika ana, āhea hoki, ki tērā ture roa ake, poto ake rānei kei raro
  - ko te whakaroa i te wā ki tāwāhi me te kore ngaro i te tika pōti ka whakawhānui i te pōti o te hunga noho tāwāhi mēnā anake ka whakatauria te roa hou; kāore te kaupapa here e kī i tērā roa
  - ko te whakaiti me te whakatika anō i ngā utu nama tauira me ngā hua moni o tāwāhi me te kore reiti i tāia, ka waiho te wātaka utu hou a te kai-nama kia kore e pānuitia mai i te kaupapa here
  - me whai tonu tētahi huarahi kirirarau i runga i te tikanga mō te hunga e whakapapa Māori ana i ngā paearu me tētahi rōpū whakahaere kāore te kaupapa here e āta whakaahua
sourceDigest: "sha256-824928d72b9d1d43"
lang: mi
translationOf: green-manifesto-2026-overseas-new-zealanders-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9a3b649d80ac0b6d
---

# Tō mātou māramatanga

> Kei runga i te tēpu te kirirarau Māori i runga i te tikanga, ngā nama tauira tāwāhi māmā ake, te pōti roa ake ki tāwāhi, te ture noho 10-tau penihana kaumātua kua whakahokia, me ngā kirimana hauora me visa whakautu whānui ake. Nō tāwāhi te 15 ōrau pea o ngā tāngata o Aotearoa. Kāore he nama mō te wā pōti hou, ngā reiti nama, ngā paearu kirirarau rānei.

System: Kua whakahokia te wā penihana; kāore i kīia te roa pōti

Scenario: Ka whakamahi te tika penihana kaumātua i te wā noho 10-tau kua whakahokia
Given nō tāwāhi te 15 ōrau pea o ngā tāngata o Aotearoa
When ka whakahokia te wā noho 10-tau i Aotearoa e hiahiatia ana mō te tika ki te penihana kaumātua
Then ka huri anō te tika ki tērā wā noho kua whakaingoatia
Output 10-year residence period required for superannuation eligibility
Outcome ka tika ngā tāngata e tutuki ana i te wā kua whakahokia i runga i aua tikanga
But ka mau i ngā tāngata i tīmata te tatau i raro i tētahi ture roa ake, poto ake rānei te utu whakawhiti kia whakatauria rā anō e ngā āpiha

Scenario: Ka whakaroatia te tika pōti ki tāwāhi, kāore he roa i tāia
When ka whakaroatia te wā ka noho ngā tāngata o Aotearoa ki tāwāhi me te kore ngaro i te tika pōti
Then ka pupuri ngā kaipōti noho tāwāhi i te mōtika mō te wā roa ake i tērā o te wā o nāianei
Outcome ka taea e ētahi tāngata anō e noho ana ki tāwāhi te noho ki te rārangi
But kāore ngā kaipōti noho tāwāhi e mōhio ana e hia ngā tau ki tāwāhi ka pupuri i a rātou ki te rārangi

Scenario: Ka māmā ake ngā tikanga nama tauira tāwāhi, kāore he reiti i tāia
When ka whakaitia, ka whakatikaina anō ngā utu nama tauira me ngā reiti hua moni mō ngā kai-nama kei tāwāhi
And ka whakaroatia ngā hararei utu
And ka whakakorea ngā hopu i te rohenga mō ngā takahanga utu nama tauira
Then ka whai ngā kai-nama kei tāwāhi i tētahi huarahi utu māmā ake, kāore he hopu i te rohenga mō te nama
Outcome he iti ake te aukati i te hokinga mai nā te whakamana nama i te rohenga
But ka matapae tonu ngā kai-nama kei tāwāhi i tā rātou wātaka utu kia tāia rā anō ngā reiti
