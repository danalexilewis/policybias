---
type: spec
id: act-public-safety-derived
title: "Ngā Accredited Security Operators e pānuitia ana hei pūnaha: he mana rite-kāwanatanga i ngā whenua tūmataiti, kāore e noho hei Pirihimana"
status: draft
updated: 2026-08-21
summary: Ka taea e ngā kaipupuri raihana te āki i te tuakiri, te aukati tāngata, me te here i te tomo ki ngā rapu whakaae i ngā whenua tūmataiti, i te wā e noho ana hei kaiwhakahaere tūmataiti, ehara i a Ngā Pirihimana o Aotearoa.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/public-safety
tags:
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/public-safety.md
derivesFrom: act-public-safety
assumptions:
  - ko te ingoa, te wāhi noho, te pupuri kia tae mai a Ngā Pirihimana o Aotearoa, ngā pānui aukati, te tango, te kaha iti me ngā rapu whakaae, he taputapu āki e honoa ana ki te kāwanatanga, ahakoa he tūmataiti te kaipupuri raihana
  - ka here te kaupapa here i ēnei mana ki ngā whenua tūmataiti, nā reira ka noho ngā tiriti tūmatanui ki waho o te raihana ki te kore tētahi atu mana e pā
  - ko te rapu whakaae e kī ana te whakakāhore kāore he tomo, he mana kati tonu ki runga i ēhea ka tomo ki te wāhi hokohoko tiritahi
  - he rerekē te kawenga, ngā amuamu me te arotake whakamahi-kaha mō ngā kaipupuri raihana i ngā tukanga a Ngā Pirihimana o Aotearoa ki te kore tētahi ture o muri e kī kē
sourceDigest: "sha256-ed8940b2f0ae12e1"
lang: mi
translationOf: act-public-safety-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-cf90ece61ba24dcc
---

# Tō mātou māramatanga

> Ka taea e ngā Accredited Security Operators i ngā whenua tūmataiti te āki i te tuakiri, te aukati tāngata, me te here i te tomo ki ngā rapu whakaae, i te wā e noho ana hei kaiwhakahaere tūmataiti, ehara i a Ngā Pirihimana o Aotearoa. Ka whiwhi ngā hapori i te mana kia tae mai a Ngā Pirihimana o Aotearoa; he rerekē te tirotiro i ngā tukanga a Ngā Pirihimana o Aotearoa.

System: Ngā kaipupuri raihana tūmataiti me ngā taputapu āki i ngā whenua tūmataiti

Scenario: Ka whakamutu tētahi kaiwhakahaere i tētahi tangata i ngā whenua tūmataiti
Given kāore i nui ake te mana o ngā āpiha haumaru i tērā o tētahi atu kirirarau
And kāore e taea e Ngā Pirihimana o Aotearoa te whakautu tere ki ia karanga
When ka tono tētahi Accredited Security Operator raihana i te ingoa me te wāhi noho, ā, ka whakakāhore te tangata, kāore e wehe
Then ka taea e te kaiwhakahaere te pupuri i a rātou kia tae mai a Ngā Pirihimana o Aotearoa
Outcome ka pā te tangata ki tētahi whakamutu āki mai i tētahi ehara i te āpiha o Ngā Pirihimana o Aotearoa
But ka noho te whakamutu i ngā whenua tūmataiti, ehara i te tiriti tūmatanui

Scenario: Ka tukuna tētahi pānui aukati nā te whanonga
Given e $2.6 billion te utu o te hara hokohoko ki te rāngai ia tau e ai ki te Retail NZ's Crime Report
When ka tuku tētahi Accredited Security Operator i tētahi pānui aukati nā te whanonga
Then ka taea te pānui te rere puta noa i ngā whenua maha e mau ana i te rōpū kotahi
Output ngā pānui aukati e taea te whakamana mō te toru tau te nui i tētahi rēhita i raro i te Privacy Act
Outcome ka taea te aukati i tētahi tangata mai i tētahi raina toa kāore he whiu kōti
But ko te aukati he aukati whenua-tūmataiti, ehara i te whakatau hara

Scenario: Ka tōkuhia te tomo mēnā anake ka whakaaetia te rapu
When ka tono tētahi wāhi i tētahi rapu haumaru nā te whakaae hei here o te tomo
Then ko te whakakāhore i te rapu, kāore he tomo
Outcome ka taea e ngā kaiwhakahaere te pupuri i ngā rākau me ngā taonga aukati ki waho o te whenua
But ka pēhia atu ngā tāngata kāore e whakaae e tētahi kati tūmataiti, ehara nā Ngā Pirihimana o Aotearoa
