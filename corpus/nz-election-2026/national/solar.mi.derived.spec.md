---
type: spec
id: national-solar-derived
title: "Ko te Home Energy Fund e pānuitia ana hei pūnaha: he wāhi pūtea iti, he pūtea tārewa kua haumaru ki te whare, he kēti pūtea"
status: draft
updated: 2026-08-21
summary: Ko te $7 million pūtea a te Karauna mō te 20% hea te tikanga he tahua iti; ka whakatūraru ngā pūtea tārewa kua haumaru ki te kāinga i te whare; ka aukati te ture pūtea 20% i ngā kaipupuri nui te nama.
jurisdiction: NZ
sources:
  - title: Home Energy Fund
    url: https://www.national.org.nz/solar
tags:
  - energy
  - cost-of-living
party: national
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/national/solar.md
derivesFrom: national-solar
assumptions:
  - ki te hokona e te $7 million he hea 20%, ko te pūtea katoa i mua i te nama he $35 million; he tātai tērā i te kaupapa here, ehara i te rahi tahua kua whakaputaina
  - ko te pūtea tārewa kua haumaru ki te kāinga te tikanga ka taea te whakatūraru i te whenua mēnā kāore e utua, ka hokona rānei, ahakoa ka utua mā ngā reiti
  - ko te papa pūtea 20% he tātaritanga i ngā kaipupuri nui te nama e tino hiahia ana ki te pūtea ngāwari
  - ka waiho tonu te tautoko taha nama a te kaunihera me te LGFA i te pukapuka pūtea tārewa i inehia mai i tētahi tūāpapa pūtea iti ina nama
sourceDigest: "sha256-e8603daa6d161a87"
lang: mi
translationOf: national-solar-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-59b7a7bdb1dd7b70
---

# Tō mātou māramatanga

> Ko tētahi wāhi $7 million a te Karauna mō te rua tekau ōrau hea te tikanga he tūāpapa pūtea iti i mua i te nama, ā, ka whakatūraru ngā pūtea tārewa kua haumaru ki te kāinga i te whenua ahakoa ka utua mā ngā reiti. Ko te papa pūtea rua tekau ōrau he tātaritanga i ngā kaipupuri nui te nama e tino hiahia ana ki te pūtea ngāwari.

System: Ko te Home Energy Fund hei pukapuka pūtea tārewa iti, kua haumaru ki te whare, kua kēti pūtea

Scenario: Ka tango te Karauna i tētahi wāhi tokoiti
Given he haumi pūtea kotahi $7 million a te Karauna mō te 20% hea
When ka whakatūria te tahua me ngā kaunihera me te LGFA e utu ana i te toenga
Then ko te moni a te Karauna he tokoiti o tētahi tūāpapa pūtea iti
# extrapolated: $7 million at 20% implies $35 million total equity before gearing
Output $35 million te pūtea katoa e tohuhia ana i mua i te nama
And he haumi pūtea kotahi $7 million a te Karauna mō te 20% hea
Outcome ka taea tētahi papa pūtea ā-motu i runga i tērā tūāpapa
But he iti te wāhi moni a te Karauna mō tētahi pukapuka pūtea tārewa ā-motu

Scenario: Ka tango tētahi kaipupuri kāinga i tētahi pūtea tārewa Home Energy Fund
When ka haumaru tētahi pūtea tārewa iti-hua ki te kāinga, ka utua hoki i roto i ngā tau tekau
Then ka tū te whenua hei haumaru mō te whakapau pūngao
Output ngā pūtea tārewa ka utua i roto i ngā tau tekau mā ngā reiti, i te hoko whenua rānei
Outcome ka taea te haere o te rā, ngā pāhiko, te whakamau me ngā papu wera me te kore utu nui i mua
But kei te tūraru te whare ki te kore e tutuki te pūtea tārewa

Scenario: Ka tono tētahi kaipupuri nui te nama
Given ngā pūtea tārewa e wātea ana ki ngā kaipākeha reiti he 20% pūtea rawa kei tō rātou whenua
When ka rapu tētahi kaipupuri iti ake te pūtea i tētahi pūtea tārewa
Then ka taka rātou ki waho o te tohu kua kīia
Outcome ka ratonga te tahua i ngā kaipupuri kua mau kē he urunga pūtea
But ka noho ngā kaipupuri nui te nama ki ngā pūtea tārewa kākāriki arumoni, ki te kore rānei
