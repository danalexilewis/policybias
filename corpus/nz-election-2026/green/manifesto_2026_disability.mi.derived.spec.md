---
type: spec
id: green-manifesto-2026-disability-derived
title: "Ko te hauātanga e pānuitia ana hei pūnaha: he tautoko 75% Total Mobility i te taha o te tautoko pūtea kāore he taumata i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ko te nama anake i tāia he tautoko 75% Total Mobility, ā, ka waiho te tautoko pūtea e tutuki ana i ngā utu katoa e pā ana ki te hauātanga, me tētahi ture tika me ngā paerewa e taea te whakamana, kia tuwhera ngā taumata utu me te āheinga whakamana.
jurisdiction: NZ
sources:
  - title: Disability
    url: https://www.greens.org.nz/manifesto_2026_disability
tags:
  - healthcare
  - housing
  - transport
party: green
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_disability.md
derivesFrom: green-manifesto-2026-disability
assumptions:
  - ko te haere tonu i te tautoko 75% Total Mobility e pupuri ana i te wāhanga utu a te kaihihi i tērā reiti mēnā ka noho pūtea te kaupapa, ā, kei reira ngā waka
  - he kerēme tuwhera te tautoko pūtea e tutuki ana i ngā utu noho me ngā utu rongoā katoa e pā ana ki te hauātanga, kāore he taumata utu i tāia
  - ka ngau ngā paerewa uru e taea te whakamana mēnā ka taea e tētahi te akiaki i te tutuki; kāore te kaupapa here e whakaingoa i te rōpū whakamana, i ngā whiu rānei
  - ko te whakakapi i ngā aromatawai āheinga ture ki te whakatau tautokona e huri ana i te āhua o te whakatau, ehara i te tahua mō ngā kaimahi tautoko
sourceDigest: "sha256-b17ebae49ea4f711"
lang: mi
translationOf: green-manifesto-2026-disability-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2ede0ae457460af6
---

# Tō mātou māramatanga

> Ka pupuri te kaupapa here i te tautoko 75% Total Mobility, ka oati i te tautoko pūtea e tutuki ana i ngā utu katoa e pā ana ki te hauātanga, ā, ka whakauru i tētahi ture tika hauātanga e takea ana i Te Tiriti me ngā paerewa uru e taea te whakamana. Kāore ngā taumata pūtea, te maha o ngā waka, me te taipitopito whakamana i tāpirihia.

System: He tautoko haere kua utua i te taha o te tautoko pūtea me te ture tika kāore i utua

Scenario: Ka pupuri a Total Mobility i te tautoko 75%
Given ka haere tonu te kaupapa taxi Total Mobility me te whakamahi māmā ake me ētahi waka haere anō
When ka haere tētahi tangata hauā i tētahi haerenga e tika ana
Then ka kapi te nuinga o te utu e te tautoko
Output 75% subsidy for the Total Mobility taxi scheme
Outcome ka māmā ake te haere i te utu katoa
But ka tatari tonu ngā kaihihi kia nui ngā waka e tae mai ana

Scenario: Me tutuki te tautoko pūtea i ngā utu katoa e pā ana ki te hauātanga
Given he tautoko pūtea māmā te uru, tika te wā, mō ngā utu noho me ngā utu rongoā katoa e pā ana ki te hauātanga
And he tautoko ahakoa te tūnga hononga me te take o te hauātanga
When ka tono tētahi tangata hauā i taua tautoko
Then me kapi katoa ngā utu noho me ngā utu rongoā e here ana ki te hauātanga
Outcome kāore te tūnga hononga e tapahi anō i te kerēme i tēnei kaupapa here
But ka tango te Karauna i tētahi pire tuwhera kāore he taupane utu

Scenario: Ka whakakapia ngā aromatawai āheinga e te whakatau tautokona
When ka tuku ngā aromatawai āheinga ture i te huarahi ki te whakatau tautokona e takea ana i ngā tika
And ka whakauruhia tētahi ture tika hauātanga me ngā paerewa uru e taea te whakamana
Then ka tāruatia ngā whakatau mō te oranga o te tangata hei tautoko, ehara i ngā whakamātautau āheinga
Outcome ka tāruatia ngā whakatau mō te oranga o te tangata hei tautoko, ehara i ngā whakamātautau āheinga
But ka pā ki ngā kaihanga me ngā rangatira whare ētahi paerewa kāore anō he kaiwhakamana, he whiu rānei i whakaingoatia
