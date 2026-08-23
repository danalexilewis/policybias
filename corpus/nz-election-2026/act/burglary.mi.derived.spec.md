---
type: spec
id: act-burglary-derived
title: "E toru ngā patu mō te tomo tāhae e pānuitia ana hei pūnaha: he noho herehere roa ake, kāore te pire whare herehere i utua"
status: draft
updated: 2026-08-21
summary: Ki te toru ngā patu tomo tāhae, ka mau te toru tau kāore he parōre, ā, ko te tekau tau te tuanui ā-ture; kāore te rahi whare herehere e hiahiatia ana e aua whiu i te utu i te kaupapa here.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/burglary
tags:
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/burglary.md
derivesFrom: act-burglary
assumptions:
  - ko te tango i te parōre, te herehere kāinga me te tuku wawe mō ngā kaipahua tomo tāhae tuatoru, he whakaroa i te wā e noho herehere tūturu ana, ki ngā whiu e tuku tonu ana i aua putanga
  - ko te tekau tau te tuanui tonu, nā reira ka whakaara te tikanga i te papa, kāore e whakaara i te tihi ā-ture
  - ko te herehere i ētahi atu kaipahua tomo tāhae tukurua mō te wā roa ake, me nui ake te rahi whare herehere; kāore te kaupapa here e whakaputa i tērā utu, i te tatau moenga rānei
  - ko te hoatu i te tikanga ki ngā hara e toru i tētahi whakatau hara kotahi, me ngā whakatau hara e toru wehe, he whānui ake i ēhea tāngata ka eke ki te papa
sourceDigest: "sha256-5d3ce5bc5ca8fa78"
lang: mi
translationOf: act-burglary-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-0e1121bb3c5b0b70
---

# Tō mātou māramatanga

> Ka ārai ngā patu e toru i te tomo tāhae tukurua mā te pupuri i ngā kaipahua i te herehere. Ko te kirimana herehere he papa toru tau kāore he parōre, ā, ka mahi tonu ngā kaiwhakawā ki te tuanui tekau tau. Kua whakaputaina ngā nama patunga me te hara anō; kāore he tohu utu mō te rahi whare herehere mō te wā tautoko anō.

System: E toru ngā patu mō te tomo tāhae hei papa herehere, he pire whare herehere tuwhera

Scenario: Ka eke tētahi kaipahua tomo tāhae ki te patu tuatoru
Given 184,000 ngā tāngata o Aotearoa i pā ki te tomo tāhae i te 2025
And ko te nuinga o ngā tāngata ka tukuna mai i te whare herehere mō te tomo tāhae ka whakahokia ki te whare herehere i roto i ngā tau e rua
When ka whakatauhia te hara tomo tāhae e toru ngā wā, kotahi rānei i ngā hara e toru, nui ake rānei
Then me whakaū te kōti i te wā iti rawa, kāore he parōre, kāore he herehere kāinga, kāore he tuku wawe
Output he whiu whare herehere iti rawa e toru tau, kāore he parōre
Outcome kāore tērā kaipahua e taea te tomo tāhae mai i roto i te whare herehere mō te wā iti rawa
But me pupuri te pūnaha whare herehere i a rātou mō tērā wā, kāore ngā kōwhiringa putanga wawe o mua

Scenario: Ka whiu te kaiwhakawā ki runga ake i te papa
Given ka taea e te kaiwhakawā te whakaū i tētahi whiu i waenga i te iti rawa e toru tau me te tuanui 10 tau
When ka tautoko ngā meka i te nui ake i te papa
Then ko te tuanui tekau tau te tuanui ā-kaiwhakawā tonu
Output ka taea e te kaiwhakawā te whakaū i tētahi whiu i waenga i te iti rawa e toru tau me te tuanui 10 tau
Outcome ka ora te whakaaro kaiwhakawā ki runga ake i te papa
But kāore e taea te heke i raro i te wā toru tau kāore he parōre ina tutuki ngā patu

Scenario: Ka ngau te pūnaha i te herehere tomo tāhae roa ake
Given tata ki te toru hauwhā o ngā kaipahua tomo tāhae kua tukuna ka whiua anō
And tata ki te kotahi i te whā o ngā tāngata i pā ki te tomo tāhae kua tomokia tāhae kē i mua
When ka kohia ngā wā tuatoru kāore he parōre
Then me nui ake ngā rā-moenga mō te momo kaipahua kotahi
Outcome ka haukotia te tomo tāhae tukurua e te herehere, kaua e te whakatūpato
But me pupuri ngā whare herehere i ētahi atu kaipahua tomo tāhae tukurua mō te wā roa ake, mai i ngā moenga me te tahua o nāianei
