---
type: spec
id: act-keeping-children-safe-derived
title: "Te Working with Children Card e pānuitia ana hei pūnaha: ka whakakapi te whāngai pirihimana haere tonu i ngā tirotiro ā-whakaahua"
status: draft
updated: 2026-08-21
summary: Ko tētahi kāri e toru tau, kawea, me te tirotiro pirihimana haere tonu te mutunga o te tirotiro ā-whakaahua a te kaituku mahi, nā reira ka taea e te mōrearea e puta ana i waenga i ngā whakahou te whakatārewa i te mahi ināianei puta noa i ia whakahaere kua honoa.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/keeping-children-safe
  - title: Working with Children policy
    url: https://assets.nationbuilder.com/actnz/mailings/59457/attachments/original/Working_With_Children_policy_04.pdf
tags:
  - crime-and-justice
  - education
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/keeping-children-safe.md
derivesFrom: act-keeping-children-safe
assumptions:
  - ko te tirotiro haere tonu ki ngā mōhiohio hou a Ngā Pirihimana o Aotearoa te kati i te āputa e whakaahuatia ana e te kaupapa here i waenga i ngā tirotiro ā-whakaahua e toru tau
  - ko te whakatārewa i tētahi kāri me te whakamōhio i ia whakahaere kua honoa te aukati i te kaipupuri puta noa i ngā tūranga i te wā kotahi, ehara i te kaituku mahi kotahi anake
  - ka whakamana ngā kaituku mahi i tētahi kāri tika, kaua te whakahaere i tā rātou ake tirotiro pirihimana i ia utu
  - ko te utu kaipākeha toenga e whakapae ana i te whakahoki utu i ngā utu kua kīia e te kaupapa here
sourceDigest: "sha256-35bba72da8239416"
lang: mi
translationOf: act-keeping-children-safe-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9024815e8e89cc71
---

# Tō mātou māramatanga

> Ka whakakapi tētahi kāri e toru tau, kawea, e whāngaia ana e ngā mōhiohio pirihimana haere tonu i ngā tirotiro ā-whakaahua a te kaituku mahi. Ina puta te mōrearea, ka pā te whakatārewa ki ia whakahaere kua honoa i te wā kotahi. Ko ngā nama utu i raro nei ngā whakapae a te kaupapa here anō.

System: Kāri kawea me te aroturuki pirihimana haere tonu

Scenario: Ka whakakapia ngā tirotiro ā-whakaahua a te kaituku mahi e tētahi kāri ā-motu kotahi
Given ka mahia ngā tirotiro haumaru e ngā kaituku mahi takitahi, ā, i te nuinga o te wā ka tirotirohia anō ia toru tau
And ka taea e te pūnaha o nāianei te waiho e toru tau i waenga i ngā tirotiro haumaru ahakoa ka puta ngā mōhiohio hou a Ngā Pirihimana o Aotearoa e āwangawanga ana
When ka hangaia tētahi Working with Children Card ā-motu kotahi me pupuri e ngā kaimahi utu me ngā tūao
Then nō te kaipupuri te kāri, ā, e toru tau te roa
Outcome ka whakamana ngā kaituku mahi i tētahi kāri tika, kaua te tukurua i tā rātou ake tirotiro pirihimana
But ka noho ngā tāngata kua whakawākia mō ngā hara taumaha kua tohua ki ngā tamariki ki waho o ngā tūranga kua hipokina

Scenario: Ka tae mai ngā mōhiohio hou a Ngā Pirihimana o Aotearoa i waenga i ngā whakahou
Given ka tirotirohia haere tonu ngā kaipupuri kāri ki ngā mōhiohio hou a Ngā Pirihimana o Aotearoa
When ka mōhio Ngā Pirihimana o Aotearoa tērā pea he mōrearea tētahi
Then ka taea te kāri te whakatārewa, ka mutu te mahi ki ngā tamariki, ā, ka kōrerotia ki ia whakahaere kua honoa
Outcome kāore ngā kaituku mahi e tatari mō te tirotiro ā-whakaahua e toru tau e whai ake ana kia mōhio ai ki te panoni
But kāore e mōhio ngā kaituku mahi i mua ēhea hara ka whakatārewa i tētahi kāri kia whakaputaina te rārangi pānga

Scenario: Ka utua te kaupapa i ngā utu kua kīia e te kaupapa here
Given ka utu ngā kaimahi utu tata ki te $108, he maha ngā kaituku mahi e utu, ā, ka wehea, ka heke rānei ngā tūao me ngā ākonga
When ka rere te kaupapa ā-motu
Then ka utua ngā utu whakatū me ngā utu whakahaere wāhanga nā ngā utu tono
Output $12–20 million one-off establishment cost
And about $50 million a year operating cost
And about $37.5 million a year recovered through application fees
And about $12.5 million a year net cost to taxpayers
Outcome he haere tonu te tirotiro, ehara i te tirotiro ā-whakaahua e toru tau
But ka toe te utu toenga ki ngā kaipākeha i muri i te whakahoki utu
