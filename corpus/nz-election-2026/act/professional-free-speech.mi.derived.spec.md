---
type: spec
id: act-professional-free-speech-derived
title: "Ko te kōrero herekore ngaio e pānuitia ana hei pūnaha: ka ngaro i ngā kaiwaeture te taputapu whakaputa-tūmataiti"
status: draft
updated: 2026-08-21
summary: Ka puta te whakaputa ture i waho o te mahi i te anga whiu, nā reira ka kuiti te mana o te rōpū ngaio ki te matatau, te haumaru me te hē mahi.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/professional-free-speech
tags:
  - democracy
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/professional-free-speech.md
derivesFrom: act-professional-free-speech
assumptions:
  - ko te aukati i te whiu mō te whakaputa ture i waho o te mahi ngaio he tango i tētahi whiu kei te kaiwaeture ināianei, ā, ka kuiti te tae o tērā rōpū ahakoa ka noho ngā mana hē mahi
  - ko te kūtari hinonga me ngā here whakangungu he here hoa ki tā te kaiwaeture e taea te here, ehara i te whiu anake
  - ko te kīanga i waho o te mahi ngaio te take; ka taea te noho tonu o te kōrero e here ana ki te mahi kiritaki, ki ngā kawenga rēhita rānei ki te whānui
  - he mea nui te arotake kōti kaha ake mēnā ka tautohe tētahi; kāore te kaupapa here e kī mā wai e utu tērā wero
sourceDigest: "sha256-8e3809e28a58d3a5"
lang: mi
translationOf: act-professional-free-speech-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-a3bf3ec07622c9ec
---

# Tō mātou māramatanga

> Ka puta te whakaputa tūmataiti ture i te anga whiu, me te kūtari, ka herea te whakangungu here, ā, ka noho ngā mana hē mahi. Ka kuiti te mana o te rōpū ngaio: ka tangohia te taputapu whakaputa-tūmataiti, ka noho te taputapu wāhi mahi.

System: Ka kuiti te mana kaiwaeture ki te mahi, kaua ki te whakaaro tūmataiti

Scenario: Ka whakaputa tētahi ngaio i tētahi whakaaro ture i tōna ake wā
Given neke atu i te 200,000 tāngata o Aotearoa e mahi ana i ngā umanga kua waeturehia
And kua tūtaki ngā kaiako, ngā nēhi, ngā kaihokohoko whenua me ētahi ngaio anō ki te mahi whiu, ki te whakangungu whakaaro here rānei mō ngā whakaaro i whakaputaina i waho o tā rātou mahi
When ka aukati te ture i ngā kaiwaeture ki te whiu i ngā mema mō te whakaputa ture i waho o te mahi ngaio
Then ehara tērā whakaputa tūmataiti i te hara ngaio anō
Outcome kāore te rēhita e huri i te whakaae ki ngā mahi tōrangapū a te kaiwaeture
But ka taea te noho tonu o te kōrero e here ana ki te mahi ngaio ki te whiu

Scenario: Ka whakarite tētahi kaiwaeture i te whakangungu here
When ka herea te whakangungu here ki te matatau me te haumaru tūmatanui
Then kāore e taea te here i te whakangungu whakaaro i waho o tērā anga hei here rēhita
Outcome ka kuiti te marautanga a te kaiwaeture ki te mahi
But kei te kaiwaeture tonu te tikanga o te matatau, o te haumaru rānei, kia kī rā anō te kōti

Scenario: Ka tū tonu te kino nui ki te kiritaki, ki te tūroro rānei i te mahi
When ka mau ngā kaiwaeture i te mana ki te hē ngaio, te kino ki ngā kiritaki, ki ngā tūroro rānei, me ngā takahanga kawenga ngaio
Then ka taea tonu e te hē mahi te whakamutu i tētahi umanga
Outcome ka noho te tiaki tūmatanui i te mahi
But ko te rohe i waenga i te whakaaro tūmataiti me te kawenga ngaio te tautohe ora
