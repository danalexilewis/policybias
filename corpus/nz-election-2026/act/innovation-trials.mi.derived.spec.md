---
type: spec
id: act-innovation-trials-derived
title: "Ngā Innovation Trials e pānuitia ana hei pūnaha: he whakaaetanga taupua ki te waiho tētahi ture, ehara i te whakaaetanga hua"
status: draft
updated: 2026-08-21
summary: Ka waiho tētahi whakamātautau i tētahi waeture motuhake mō tētahi whakamātautau whāiti i raro i ngā herenga haumaru e hiahiatia ana e te kaupapa here, engari kāore e taipitopito; ko te angitu he taunakitanga mō te panoni ture i muri, ehara i te raihana mākete i a ia anō.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/innovation-trials
tags:
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/innovation-trials.md
derivesFrom: act-innovation-trials
assumptions:
  - ko te waiho i tētahi waeture motuhake mō tētahi whakamātautau whāiti i tētahi wāhi, he whakaaetanga ki te mahi i raro i te wehe, ehara i te whakaaetanga ka taea te hoko i te hua puta noa i te motu
  - me whakatakoto ngā herenga haumaru i mua i te tīmatanga o te whakamātautau, engari kāore te kaupapa here e whakaingoa i aua herenga, nā reira kāore e mōhiotia te kaha kia tuhia ia whakaaetanga
  - ka mutu ngā hua kino i te whakamātautau; ko ngā hua pai anake te taunakitanga ki te panoni i te ture, nā reira ka taea te aukati whānui te noho kia puta rā anō tētahi panoni ture motuhake
  - ko ngā nama drone ahuwhenua he whakaatu i te roa i raro i ngā ture o nāianei; ehara i te rārangi utu a te whakamātautau
sourceDigest: "sha256-995af0010b1f96cb"
lang: mi
translationOf: act-innovation-trials-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ea11fcb5a54aae9f
---

# Tō mātou māramatanga

> Ka taea e tētahi Innovation Trial pūmau te waiho i tētahi waeture kotahi mō tētahi whakamātautau whāiti. Ka pōwhiritia ngā waka motuhake, ngā drone ahuwhenua me te hangarau hauora. He whakaaetanga taupua te whakamātautau, ehara i te whakawātea hua. Me tuhi tonu ngā herenga haumaru i mua i te rere o tētahi.

System: Ko te whakamātautau he whakaaetanga wehe, ehara i te whakawātea hua

Scenario: Ka tono tētahi kamupene ki te whakamātau i tētahi hangarau kua aukatia
Given ka taea e ngā drone ahuwhenua neke atu i te 25 kilograms te utu tae atu ki te $2,000 ki te whakamana, ā, neke atu i te tau kotahi i Aotearoa
And ka taea e ngā kaipāmu o Ahitereiria te whakamahi i ngā drone taumaha tae atu ki te 150 kilograms i raro i tētahi raihana māmā
And kua whakatakoto ngā āpiha o Aotearoa i te take ki tētahi hōtaka mahi e rua tau
When ka whakaputaina tētahi tukanga tono pūmau mō ngā Innovation Trials
Then ka taea tētahi waeture motuhake te waiho mō tētahi whakamātautau whāiti i tētahi wāhi
Outcome ka taea e te kamupene te mahi i raro i te wehe kei hea te ture tawhito i aukati
But ehara te wehe i te whakaaetanga hua puta noa i te motu

Scenario: Ka tuhia ngā herenga haumaru ki te whakaaetanga
When ka whakatakotoria ngā herenga haumaru me tētahi huarahi ki te ine i te hua i mua i te tīmatanga o te whakamātautau
Then kāore e taea te whakamātautau te tīmata ki te kore aua herenga
Outcome me ū ia whakamātautau ki ngā herenga haumaru i mua i te tīmatanga
But me tatari ia kaitono ki tana whakaaetanga kia mōhio ai he aha te utu ū

Scenario: Ka tae mai te hua i inea
When ka puta i te whakamātautau he hua kino
Then ka mutu te whakamātautau
Outcome ka homai te hua pai i te taunakitanga ki te panoni i te ture
But ka noho te waeture whānui kia puta rā anō tērā panoni motuhake
