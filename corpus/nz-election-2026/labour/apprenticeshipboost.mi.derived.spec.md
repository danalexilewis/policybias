---
type: spec
id: labour-apprenticeshipboost-derived
title: "Ko te Apprenticeship Boost e pānuitia ana hei pūnaha: he tautoko utu kaiwhakawhiwhi mahi, ka piki te utu i te nui o te tango"
status: draft
updated: 2026-08-21
summary: Ko te utu ā-marama he tautoko utu ki te kaiwhakawhiwhi mahi, kei te Karauna te pīkaunga tāke; ko te takoha kete taputapu he tuku kotahi ki te ākonga mahi; ko te ara utu ā-tau e piki ana e tohu ana i te tupu o te tango.
jurisdiction: NZ
sources:
  - title: Expanding Apprenticeship Boost
    url: https://www.labour.org.nz/apprenticeshipboost
tags:
  - employment
  - education
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/apprenticeshipboost.md
derivesFrom: labour-apprenticeshipboost
assumptions:
  - ko te utu ki te kaiwhakawhiwhi mahi kia tango ākonga mahi, he tautoko utu kaiwhakawhiwhi mahi; kei te Karauna te pīkaunga tāke
  - ko te takoha kete taputapu kotahi ki te ākonga mahi, he tuku kotahi, ehara i te āpiti utu tū tonu
  - ko te matapae e piki ana i te tau tuatahi ki te tau whakamutunga o te ara e tohu ana i te nui ake o te tango i te wā, nā te mea e here ana te kaupapa here i te pikinga ki te nui ake o te hunga e whai hua
sourceDigest: "sha256-0da4a8f281497913"
lang: mi
translationOf: labour-apprenticeshipboost-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-92be1777b0933cba
---

# Tō mātou māramatanga

> Ka tau te utu ā-marama ki te kaiwhakawhiwhi mahi, nō reira kei te Karauna te pīkaunga tautoko utu, ā, kei wāhi kē te tautuhi i te utu ka riro i te ākonga mahi. He tuku kotahi te takoha kete taputapu, ā, ko te ara utu e whā tau e piki ana e tohu ana i te tupu o te tango i te wā e uru ai ētahi ākonga mahi me ngā kaiwhakawhiwhi mahi anō.

System: Ko te Apprenticeship Boost hei tautoko utu kaiwhakawhiwhi mahi me te whakapau e here ana ki te tango

Scenario: Ka riro i te kaiwhakawhiwhi mahi te utu Boost
Given ngā utu kaiwhakawhiwhi mahi $500 ia marama mō ngā tau e rua
When ka tango tētahi kaiwhakawhiwhi mahi i tētahi ākonga mahi e whai tika ana
Then ka haere te utu ki te kaiwhakawhiwhi mahi
Output $500 ia marama te utu kaiwhakawhiwhi mahi mō ngā tau e rua
Outcome kei te Karauna te pīkaunga tautoko utu
But kāore te utu ka riro i te ākonga mahi e tautuhia e tēnei utu anake

Scenario: Ka riro i te ākonga mahi hou te takoha kete taputapu
When ka tīmata tētahi ākonga mahi hou
Then ka tau tētahi takoha kotahi ki te ākonga mahi
Output $1,000 te takoha kete taputapu mō ngā ākonga mahi hou
Outcome ka māmā ake ngā utu taputapu me te kete i te wā kotahi
But ehara te takoha i te āpiti moni whiwhi tū tonu

Scenario: Ka piki te utu ā-tau i runga i te matapae
Given $21 million i te 2027/28
And $71.5 million i te 2030/31
And te utu toharite $56.5 million ia tau i roto i ngā tau e whā
When ka tango ētahi ākonga mahi me ngā kaiwhakawhiwhi mahi anō i te kaupapa
Then ka piki te whakapau ā-tau a te Karauna i runga i tērā ara
Outcome e tohu ana te ara utu i te tupu o te tango i roto i ngā tau e whā
