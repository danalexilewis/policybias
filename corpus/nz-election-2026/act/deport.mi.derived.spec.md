---
type: spec
id: act-deport-derived
title: "Te mahere manene e ono ngā wāhanga e pānuitia ana hei pūnaha: te noho here ki te hara, te tautoko pūtea me te takoha"
status: draft
updated: 2026-08-21
summary: Ko te pana kāore he tepenga wā, te tū-iho tautoko pūtea e rima tau, me te utu tāpiri ā-rā, he whakapakeke tahi i te kirimana mō ngā kainoho me ngā kaimahi taupua; ko te utu tāpiri te taputapu kotahi ki te kāri takoha-tika.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/deport
tags:
  - immigration
  - crime-and-justice
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/deport.md
derivesFrom: act-deport
assumptions:
  - ko te tango i te pānga pana here-wā mō ngā hara tekau tau, he mea ka pā te tūpono tango ki ngā kainoho kua noho roa, kāore ngā matapihi pānga poto i kawe
  - ko te aukati e rima tau i te tautoko kai rapu mahi, te tāpiri noho, me ngā tautoko pūtea e ine ana i te moni whiwhi, he neke i te uaua tōmua ki ngā manene, ngā kaituku mahi, ngā kaitautoko, te atawhai rānei
  - ko te utu tāpiri e ono tāra ā-rā i konei te utu kotahi ki te kaupapa here takoha-tika, ehara i te utu tuarua
  - ko te pau aunoa ā-tau o ngā kāwai pūkenga me te uruhi i ngā noho tūpoka, he whakapakeke i ngā ara tuku i te taha o ngā ture e anga ana ki te kainoho
sourceDigest: "sha256-6335940b73a57131"
lang: mi
translationOf: act-deport-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7e5c91ce01225c4b
---

# Tō mātou māramatanga

> E ono ngā whakahou manene e whakahoki ana i tētahi kirimana taketake. E toru ngā tapa e anga ana ki te kainoho: te pana mō ngā hara nui kāore he tepenga wā, te tū-iho tautoko pūtea e rima tau, me te utu tāpiri hanganga ā-rā e inaki ana i te kāri takoha-tika. Kei ngā manene te tū-iho me te utu tāpiri; kua whakaputaina te tatau noho tūpoka me ngā nama visa pūkenga hei horopaki.

System: Te mahere manene e ono ngā wāhanga hei noho here

Scenario: Ka whakatauhia te hara o tētahi kainoho mō tētahi hara tekau tau i muri i te noho roa
Given ka whakawhānui te tono o nāianei i te pānga pana ki te 20 tau
When ka whakatauhia te hara o te kaipupuri visa kainoho mō tētahi hara e 10 tau, nui ake rānei te whiu
Then ka taea te pana ahakoa pēhea te roa o tō rātou noho ki konei
Output te pānga pana mō ngā kaipupuri visa kainoho i ngā whakatau hara 10-tau-neke-atu i tua atu i te tono 20-tau a te Kāwanatanga
Outcome ka mutu te kirimana noho i te hara nui, kāore he whakamarumaru wā-kua-mahi
But ka pā te tūpono tango ki ngā tāngata kua noho mō ngā tekau tau, kāore te matapihi pānga poto i kawe

Scenario: Me tautoko pūtea tētahi kaipupuri visa kāwai noho hou
Given he tū-iho tautoko pūtea e rima tau mō ngā kaipupuri visa kāwai noho katoa
When ka tono kē te tautoko kai rapu mahi, te tāpiri noho, tētahi tautoko pūtea e ine ana i te moni whiwhi rānei i aua tau
Then ka aukatia aua utu mō te wā tū-iho
Output he tū-iho tautoko pūtea e rima tau e aukati ana i te tautoko kai rapu mahi, te tāpiri noho, me ngā tautoko pūtea e ine ana i te moni whiwhi mō ngā kaipupuri visa kāwai noho hou
Outcome ka kīia ngā tau tōmua ki konei he wā āheinga, ehara i te whakawhirinaki
But ka taka te uaua i aua tau ki te manene, tō rātou kaituku mahi, kaitautoko, tautoko ōpaki rānei

Scenario: Ka utu ngā kaimahi taupua i te utu tāpiri hanganga
Given he utu tāpiri hanganga $6 ia rā i ngā visa mahi taupua, e tūmanakohia ana kia kohia tata ki te $80 million ia tau
When ka kohia te utu tāpiri hei wāhanga o te mahere e ono ngā wāhanga
Then ka pā te utu ā-rā kotahi ki te kaupapa here takoha-tika
Output he utu tāpiri hanganga $6 ia rā i ngā visa mahi taupua, e tūmanakohia ana kia kohia tata ki te $80 million ia tau
Outcome ka takoha ngā kaimahi taupua mai i te rā tuatahi i mua i te nui o te tāke
But kotahi te taputapu utu e tatauhia ana i ngā kāri e rua, ehara i ngā utu e rua wehe
Activates act-fair-contribution
