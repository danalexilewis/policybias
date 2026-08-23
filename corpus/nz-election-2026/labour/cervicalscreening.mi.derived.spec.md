---
type: spec
id: labour-cervicalscreening-derived
title: "Ko te cervical screening kore utu e pānuitia ana hei pūnaha: he tika tū tonu i runga i te rere Medicard"
status: draft
updated: 2026-08-21
summary: Ko te cervical screening kore utu mō ngā tau 25 ki te 69 he tika tū tonu, ā, $21.6 million anake i tāia mō te tau katoa tuatahi; kāore i whakapuakina ngā tau o muri, ā, ko te Medicard te rere uru.
jurisdiction: NZ
sources:
  - title: Free Cervical Screening
    url: https://www.labour.org.nz/cervicalscreening
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/cervicalscreening.md
derivesFrom: labour-cervicalscreening
assumptions:
  - ko te cervical screening kore utu mō ngā tau 25 ki te 69 he tika tū tonu ina tīmata; kāore te kaupapa here e kī ka mutu i muri i te tau katoa tuatahi
  - $21.6 million i tāia mō te tau katoa tuatahi anake, nō reira e tuwhera ana te utu o ngā tau o muri i te kaupapa here
  - ko te Medicard te rere uru; kei te taha o ngā toro tākuta kore utu e toru te tātaritanga, kāore e kai i aua toro
sourceDigest: "sha256-f08cc403527757e8"
lang: mi
translationOf: labour-cervicalscreening-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-94bcdada643d1443
---

# Tō mātou māramatanga

> Ka mau te cervical screening kore utu mō ngā tau 25 ki te 69 hei tika tū tonu i runga i te rere Medicard, ā, $21.6 million anake i tāia mō te tau katoa tuatahi. Kei te taha o ngā toro tākuta kore utu e toru te screening, kāore e kai i aua toro, ā, e tuwhera ana te utu o ngā tau o muri i muri i te tau tuatahi.

System: Ko te cervical screening kore utu hei tika tū tonu i runga i te Medicard

Scenario: Ka utaina te tika ki te Medicard, ā, ka utua te tau katoa tuatahi
Given kāore te cervical screening i te kore utu ki te katoa i tēnei rā
When ka tīmata te cervical screening kore utu
Then ka taea e te katoa, ngā tau 25 ki te 69, te screening kāore he utu
Output $21.6 million te utu mō te tau katoa tuatahi
Outcome ka rere te tika i runga i te Medicard i te tākuta, i tētahi hui hapori rānei
But kei te Karauna te pire tau o muri e tuwhera ana i muri i te tau katoa tuatahi
Activates labour-medicard

Scenario: Ka tū te tika i te wā kāore i whakaingoatia te utu o ngā tau o muri
Given $21.6 million i tāia mō te tau katoa tuatahi anake
When ka tae mai te tau tuarua me ngā tau o muri
Then kei te tū tonu te screening kore utu mō ngā tau 25 ki te 69 i te kaupapa here
Outcome kei te Karauna tētahi pire tau o muri e tuwhera ana ina utua te tau tuatahi
But me kimi e ngā Tahua o muri te moni ina kua pau te tau tuatahi

Scenario: Ko te Medicard te rere uru mō te screening
Given kua utaina aunoatia te tika ki te Medicard
And te screening kore utu i tua atu i ngā toro tākuta kore utu e toru ia tau
When ka tae tētahi tangata, ngā tau 25 ki te 69, ki te screening
Then ko te uru mā te kāri kotahi anō i ngā toro tākuta kore utu
Outcome kei te taha o ētahi tika Medicard anō te screening, kāore e whakamahi i te tatau toro
But ko ngā hui hapori kāore he whakamana kāri, ka waiho te tika ki te pūnaha honore
Activates labour-medicard
