---
type: spec
id: national-paid-parental-leave-derived
title: "Ko te wehenga mātua utua e pānuitia ana hei pūnaha: ētahi wiki anō me te kore moni whiwhi ā-wiki kua kīia, ka wehe te wehenga tiritiri i te puna kotahi"
status: draft
updated: 2026-08-21
summary: Ka piki te roa o te wehenga i ngā hipanga Tahua, kāore te utu ā-wiki i whakaputaina, nā reira ka tukuna te wā me te kore moni whiwhi ā-wiki kua kīia, ā, ka tango te wehenga tiritiri i te puna wiki kotahi mō ia tamaiti.
jurisdiction: NZ
sources:
  - title: Modernising Paid Parental Leave
    url: https://www.national.org.nz/paid-parental-leave
  - title: Paid Parental Leave policy document
    url: https://assets.national.org.nz/web/prod/Paid%20Parental%20Leave.pdf
tags:
  - social-welfare
  - employment
party: national
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/national/paid-parental-leave.md
derivesFrom: national-paid-parental-leave
assumptions:
  - ka whakaputa te kaupapa here me te PDF i ngā wiki me te utu katoa, engari kāore i te utu tāra ā-wiki, nā reira kāore te kāinga e taea te pānui i te moni whiwhi ka kawea i tēnei rauemi anake
  - ko te kī kāore ngā utu ā-wiki mōrahi i huri ka waiho tonu te nama tāra kāore i whakaputaina i te kaupapa here
  - mā te wehenga tiritiri e taea e ngā mātua e rua te tango i te wā kotahi, engari ko te tika mō ia tamaiti he puna wiki kotahi
  - ko te whakatūnga i runga i ngā Tahua e toru te tikanga ka iti ake ngā wiki a ngā mātua ka tīmata tō rātou tika i mua i ērā ka tīmata i muri
sourceDigest: "sha256-2933f6dbec2d7033"
lang: mi
translationOf: national-paid-parental-leave-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2304c379a60e0f58
---

# Tō mātou māramatanga

> Ka piki te roa o te wehenga i ngā hipanga Tahua, kāore te utu tāra ā-wiki i whakaputaina, nā reira ka tukuna ētahi rā maramataka anō me te kore moni whiwhi ā-wiki kua kīia. Mā te wehenga tiritiri e taea e ngā mātua e rua te tango i te wā kotahi, engari ko te tika mō ia tamaiti he puna wiki kotahi.

System: Ko te wehenga mātua utua hei ētahi wiki anō me te kore moni whiwhi ā-wiki kua kīia

Scenario: Ka whakarite tahua tētahi kāinga mō tētahi wehenga roa ake
Given te wehenga mātua utua e piki ana mai i te 26 wiki ki te 30 wiki i runga i ngā Tahua e toru
And kāore he utu ā-wiki i tāia i te kaupapa here
When ka whakamahere te kāinga i te moni whiwhi puta noa i te wehenga
Then e mōhio ana rātou e hia ngā wiki ka taea te tango
Output 30 wiki wehenga mātua utua
And 27 wiki mai i te hipanga Tahua tuatahi
And 28 wiki mai i te tuarua
Outcome ka tukuna ētahi rā maramataka anō ki te kāinga i ngā hipanga
But ka whakarite tahua ngā kāinga i runga i ngā wiki anake kia whakaputaina rā anō he utu ā-wiki

Scenario: Ka tango ngā mātua e rua i te wehenga i te wā kotahi
Given he tika tāpiri ki te 30 wiki o te wehenga mātua utua mō ia tamaiti
When ka tango ngā mātua e rua i te wehenga utua ngātahi
Then ka ahu mai ngā wiki i te puna kotahi
Output ka taea e ngā mātua e rua te tango wehenga utua ngātahi mō ngā wiki 15
Outcome ka taea e rāua te noho kāinga ngātahi mō tētahi wāhi o te wehenga
But kāore e piki ngā wiki utua katoa mō tērā tamaiti
Activates national-kiwisaver
