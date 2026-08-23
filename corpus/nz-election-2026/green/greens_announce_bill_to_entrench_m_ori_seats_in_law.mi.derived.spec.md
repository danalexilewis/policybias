---
type: spec
id: green-greens-announce-bill-to-entrench-m-ori-seats-in-law-derived
title: "Ko te whakamau i ngā tūru Māori e pānuitia ana hei pūnaha: ka piki te paepae whakakore ki te 75%, engari ehara anō te pire mema i te ture"
status: draft
updated: 2026-08-21
summary: Ka hiki te whakamau i te whakakore i ngā tūru Māori mai i te nuinga māmā ki te 75% o ngā mema Pāremata, kia ōrite ki ētahi atu tautuhinga pōti kua whakamaua, ā, ka taea e te whakawhiti rārangi tūwhera te huri i te hanganga o ngā rārangi i waenga pōtitanga.
jurisdiction: NZ
sources:
  - title: Greens announce bill to entrench Māori seats in law
    url: https://www.greens.org.nz/greens_announce_bill_to_entrench_m_ori_seats_in_law
tags:
  - maori-affairs
  - democracy
party: green
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/green/greens_announce_bill_to_entrench_m_ori_seats_in_law.md
derivesFrom: green-greens-announce-bill-to-entrench-m-ori-seats-in-law
assumptions:
  - ko te whakamau e ōrite ana ki ngā tūru pōti whānui e hiki ana i te paepae ki te huri, ki te whakakore rānei i ngā tūru Māori, mai i te nuinga māmā ki te 75% o ngā mema Pāremata
  - ko te tuku pire mema he whakapuaki i te whakaaro; ka whakamaua ngā tūru anake i muri i te paahitanga o te pire me te Royal assent
  - ko te tuku i a Māori ki te whakawhiti rārangi i ngā wā katoa, ka taea te huri i te hanganga o te rārangi Māori me te rārangi whānui i waenga pōtitanga, ehara i te wā poto anake
  - ko te pōti i runga i tētahi rārangi kē mō ngā pōtitanga ā-rohe e wehe ana i te kōwhiringa rārangi ā-rohe me tō te Pāremata mō te tangata kotahi
sourceDigest: "sha256-ef1ff4478c32e350"
lang: mi
translationOf: green-greens-announce-bill-to-entrench-m-ori-seats-in-law-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-fe4f897427f2301e
---

# Tō mātou māramatanga

> Ka whakapuakina e te kaupapa here tētahi pire mema hei whakamau i ngā tūru Māori kia hiahiatia te 75% o ngā mema Pāremata hei huri, kia ōrite ki ngā tūru pōti whānui, ā, kia tuku i a Māori ki te whakawhiti rārangi i ngā wā katoa, tae atu ki ngā pōtitanga ā-rohe. Ka hiki te whakamau i te paepae whakakore; ehara anō te tuku i te ture.

System: He paepae whakakore teitei ake, me te whakawhiti rārangi tūwhera

Scenario: Ka hiki te whakamau i te paepae ki te whakakore i ngā tūru Māori
Given ka taea anake te huri i ngā tūru pōti whānui mā te 75 per cent o ngā mema Pāremata
And i tēnei wā ka taea te whakakore i ngā tūru Māori mā te nuinga māmā
And ko ētahi atu tautuhinga pōti pērā i te pakeke pōti e hiahiatia ana te 75 per cent, ehara i te 50 per cent
When ka whakamaua ngā tūru Māori ki te ture i runga i ngā tikanga ōrite
Then me eke te paepae teitei ake hei whakakore, hei tuhi anō rānei i aua tūru
Output 75 per cent o ngā mema Pāremata e hiahiatia ana hei huri i ngā tūru Māori
Outcome kāore e taea e tētahi nuinga māmā o muri ake te whakakore i ngā tūru ko ia anake
But ka pā te paepae teitei ake i muri anake i te noho ture o te pire

Scenario: Ka tukuna tētahi pire mema, engari kāore anō kia paahi
When ka tukuna tētahi pire mema hei whakamau i ngā tūru Māori
Then he waka tō te Whare hei tautohe i te huringa
Outcome kei te Order Paper te tautika ture
But ehara te tuku i te whakamau i ngā tūru; me whai tonu te paahitanga me te assent

Scenario: Ka taea e Māori te whakawhiti rārangi i ngā wā katoa
When ka taea e Māori te whakawhiti rārangi i ngā wā katoa
And ka taea te pōti i runga i tētahi rārangi kē mō ngā pōtitanga ā-rohe
Then kāore te kōwhiringa rārangi e raka ki tētahi wā whakawhiti poto
Outcome ka taea e ngā tapeke o te rārangi Māori me te rārangi whānui te neke i waenga pōtitanga
But me tukatuka tonu e ngā pūnaha Electoral Commission ngā whakawhiti kia tūturu te huringa
Activates green-manifesto-2026-democracy
