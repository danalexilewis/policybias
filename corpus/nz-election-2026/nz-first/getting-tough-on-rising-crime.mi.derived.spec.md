---
type: spec
id: nz-first-getting-tough-on-rising-crime-derived
title: "Ko te mōkī hara e pānuitia ana hei pūnaha: te rahi moenga wātea me te tuatahi-degree kāore i tautuhia"
status: draft
updated: 2026-08-21
summary: Ka noho tētahi whare herehere mō ngā gangs anake ki te rahi moenga wātea hei kerēme; kāore he tautuhinga, he tukanga rānei mō te kōhuru tuatahi-degree me te tohu kaipāhua, ā, kāore he utu tāra i tāia.
jurisdiction: NZ
sources:
  - title: Getting Tough on Rising Crime
    url: https://www.nzfirst.nz/getting-tough-on-rising-crime
tags:
  - crime-and-justice
party: nz-first
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/nz-first/getting-tough-on-rising-crime.md
sourceDigest: "sha256-525749aaea4979be"
derivesFrom: nz-first-getting-tough-on-rising-crime
assumptions:
  - ko ngā moenga wātea 2000 me te 3000 mema gangs e whakapaetia ana kei te whare herehere he tatau whārangi; ko te kite i aua mea hei rahi nui mō tētahi whare herehere gangs-anake he kerēme, ehara i te ōritenga kua inehia
  - ka waiho te kōhuru tuatahi-degree kāore he tautuhinga i te ture ora-mō-te-ora kāore he paenga e taea e te kōti te whakamahi i te kaupapa here anake
  - ko te tohu gangs hei rōpū kaipāhua kāore he tukanga kua whakaingoatia ka waiho te pākahukahu Terrorism Suppression Act kāore i āta tohua
  - kāore he utu tahua i te kaupapa here, nā reira kāore tētahi e waihangatia i konei
lang: mi
translationOf: nz-first-getting-tough-on-rising-crime-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-db895321d04309cc
---

# Tō mātou māramatanga

> E rima rau pirihimana ā-mua hou i roto i ngā marama tekau mā waru. Ka wehea ngā gangs mā ngā moenga wātea e kīia ana. Ka whai te kōhuru i ngā tohu, me te ora mō te tuatahi-degree. Ka tohua ngā gangs hei kaipāhua. E kīia ana te rahi moenga wātea, kāore i whakamanatia; me tautuhi tonu te kōhuru tuatahi-degree.

System: Te mahi pirihimana me te whiu me ngā āputa rahi me te tautuhinga

Scenario: Ka tūria tētahi whare herehere gangs-anake mai i te rahi o nāianei
Given e 3000 mema gangs e whakapaetia ana kei te whare herehere me ngā moenga wātea 2000
When ka whakatūria tētahi whare herehere gangs-anake hei whakaiti i te whakauru i ngā herehere ehara i te gangs
Then ka wehea ngā mema gangs mā te mokowā o nāianei i te pūnaha o nāianei
Outcome ka iti ake te pehanga whakauru ki ngā herehere ehara i te gangs i roto
But he kerēme te rahi moenga wātea e ōrite ana ngā tatau ki te mahere wehe

Scenario: Ka mau te kōhuru tuatahi-degree i te ora mō te ora
When ka whakamahi tētahi tikanga tohu kōhuru i te ora mō te ora mō te kōhuru tuatahi-degree
Then ka tango ngā kēhi tuatahi-degree i te whiu ora e whakaingoatia ana e te kaupapa here
Outcome ka kitea ngā kōhuru tino taumaha hei tohu motuhake
But kāore anō ngā kōti kia whai paenga mō te kōhuru tuatahi-degree kia tautuhi te Pāremata

Scenario: Ka tohua ngā gangs i raro i te Terrorism Suppression Act
When ka tohua ngā gangs hei rōpū kaipāhua i raro i te Terrorism Suppression Act
Then ka noho te mematanga gangs ki raro i ngā hua o tērā Ture
Outcome e wātea ana te tohu hei taputapu ture-me-te-raupapa
But ka whakatau tonu ngā minita, ngā āpiha rānei i te tohu kāore he tukanga kua whakaingoatia
