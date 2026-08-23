---
type: spec
id: national-new-trade-derived
title: "Ko ngā kiritaki piriona e whai ake e pānuitia ana hei pūnaha: he kerēme rahi mākete me te kore tono kirimana, me te kore whakaaetanga kua whakaingoatia"
status: draft
updated: 2026-08-21
summary: Tata ki te kotahi piriona ngā kiritaki pea — ko te rahi o ngā mākete whāinga, ehara i te tono kua hainatia; ko te tāruatanga o ngā hokohoko ki waho hei te 2034 he whāinga me te kore taputapu i tēnei kaupapa here; kāore i whakaingoatia ēhea whakaaetanga ka haere tuatahi.
jurisdiction: NZ
sources:
  - title: Building the Future - New Zealand's Next Billion Customers
    url: https://www.national.org.nz/new-trade
tags:
  - foreign-policy
  - economy
party: national
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/national/new-trade.md
derivesFrom: national-new-trade
assumptions:
  - ehara te taupori, te rahi mākete rānei o tētahi rohe i te mea kotahi ki ngā kiritaki ka hoko i ngā taonga o Aotearoa; me whai tonu ngā whakaaetanga, ngā ararau me te tono
  - he ūnga te whāinga tāruatanga me te kore whakaaetanga, tahua, tapahi ārai rānei kua whakaingoatia i tēnei kaupapa here, ehara i te ara tuku
  - ko Ūropi, Amerika ki te Tonga, Āhia me Āwherika he whenua nui, ehara i ngā hoa kōrero, nā reira ka wātea tonu te raupapa me te kapi
sourceDigest: "sha256-b98068e2528d26a1"
lang: mi
translationOf: national-new-trade-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-315c73c08b7fd7cf
---

# Tō mātou māramatanga

> Tata ki te kotahi piriona ngā kiritaki pea — ko te rahi o ngā mākete whāinga, ehara i te tono kua hainatia — me whai tonu ngā kaihoko, ngā ara me ngā ture i mua i te tau o ngā hoko. Ko te tāruatanga o te uara hokohoko ki waho hei te 2034 he ūnga me te kore whakaaetanga, tahua, tapahi ārai rānei kua whakaingoatia i tēnei rauemi.

System: He upoko rahi mākete me te kore taputapu tono kua whakaingoatia

Scenario: Ka pānuitia te tata ki te kotahi piriona hei tono
Given e tautoko ana te hokohoko i tētahi o ngā mahi e whā o Aotearoa i tēnei rā
When ka honoa ngā pakihi o Aotearoa ki tata ki te kotahi piriona ngā kiritaki hou pea
Then ko tērā nama te ine i te rahi o ngā mākete whāinga, ehara i ngā ota kua tukuna
Output tata ki te kotahi piriona ngā kiritaki hou pea hei kerēme rahi mākete
Outcome me whai tonu ngā kaihoko, ngā ara me ngā ture i mua i te tau o ngā hoko
But ka kawea e ngā kaipupuri hoko ki waho te āputa i waenga i te rahi mākete me ngā ota tūturu

Scenario: Ka noho te whāinga tāruatanga me te kore taputapu i tēnei kaupapa here
Given he whāinga kia tāruatia te uara o ngā hokohoko ki waho a Aotearoa hei te 2034
When ka pānuitia te mahere hokohoko o tēnei kaupapa here mō ngā taputapu tuku
Then ka whakaingoatia ngā ārai, ngā tukanga pae me ngā taputapu matihiko me te kore tahua, inenga rānei
Outcome mārama te ūnga
But ka kawea e ngā kaipupuri hoko ki waho te tūraru tuku ina noho ngā taputapu me ngā tahua ki wāhi kē

Scenario: Ka noho ngā whakaaetanga kāore i whakaingoatia
When ka whāia ngā whakaaetanga hokohoko hou ki ngā mākete tere tupu i Ūropi, Amerika ki te Tonga, Āhia me Āwherika
Then kāore he whenua, poraka, raupapa whiriwhiri rānei i rārangitia i tēnei kaupapa here
Outcome ko te ahunga haere he whenua nui
But ka tatari ngā kaiwhiriwhiri me ngā kaipupuri hoko ki waho i te raupapa kāore anō kia whakaputaina
