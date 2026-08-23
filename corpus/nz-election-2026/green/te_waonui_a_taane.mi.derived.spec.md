---
type: spec
id: green-te-waonui-a-taane-derived
title: "Ko Te Waonui a Tāne e pānuitia ana hei pūnaha: kei ngā hapū me ngā iwi te kāwanatanga ināianei, ka utu te pūtea tuku i muri"
status: draft
updated: 2026-08-21
summary: Ka whakapau te pūtea whakaora $400 million i roto i ngā tau e whā i raro i te kāwanatanga a ngā hapū me ngā iwi; ko te pūtea tuku $2 billion he tōpūtanga ka utu anake ina tae mai ngā hua haumi.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/te_waonui_a_taane
  - title: Green Party announce marae funding policy Te Waonui a Tāne
    url: https://www.greens.org.nz/green_party_announce_marae_funding_policy_te_waonui_a_taane
tags:
  - maori-affairs
  - budget
party: green
clusters:
  - maori-affairs
money: named-figure
sourcePath: corpus/nz-election-2026/green/te_waonui_a_taane.md
derivesFrom: green-te-waonui-a-taane
assumptions:
  - ko te rangatiratanga me te kāwanatanga a ngā hapū me ngā iwi e kī ana ka whakatakotoria ngā kaupapa whakapau i waho i ngā tohatoha ā-tau noa a te Karauna ina tū te tarahiti
  - ko tētahi pūtea whakaora $400 million i roto i ngā tau e whā he moni tata mō ngā kaupapa ohorere; ko tētahi pūtea tuku $2 billion he tōpūtanga me haumi i mua i te tipu o ngā tohatoha ā-tau
  - ko te $2.44 billion te tapeke o aua kōpaki e rua, nā reira ko te nuinga o te upoko he tōpūtanga kāore e whakapau i te tau tuatahi
  - he pūmahara ngā hua kōpaki kanorau; kāore te kaupapa here e whakapuaki i tētahi reiti tohatoha, i tētahi taurangi rānei mēnā he iti ngā hua
sourceDigest: "sha256-7aa4a4fefcd9750c"
lang: mi
translationOf: green-te-waonui-a-taane-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-11360c3677fdf4aa
---

# Tō mātou māramatanga

> Kei ngā hapū me ngā iwi te kāwanatanga o tētahi tarahiti $2.44 billion ināianei. Ka whakapau $400 million ki te whakaora i roto i ngā tau e whā. Ko te pūtea tuku $2 billion he tōpūtanga: ka utu i muri, ina tae mai ngā hua.

System: Te Rangatiratanga Trust me tētahi pūtea whakaora me tētahi pūtea tuku

Scenario: Kei ngā hapū me ngā iwi te kāwanatanga o te tarahiti
When nā ngā hapū me ngā iwi o Aotearoa a Te Rangatiratanga Trust, ā, kei a rātou te kāwanatanga
Then kei tērā rōpū kaitiaki ngā kaupapa whakapau mō ngā marae, ehara i ngā takoha ā-tau a ngā minita anake
Outcome ko te tino rangatiratanga ki ngā pūtea te hoahoa, ehara i te waitohu anake
But me whakatau tonu ngā wānanga ā-motu ko wai ngā kaitiaki i mua i te neke o te moni

Scenario: Ka whakapau te pūtea whakaora i roto i ngā tau e whā
Given $400 million mō ngā kaupapa ohorere, tino tata hoki i roto i ngā tau e whā
When ka rere a Te Rākau Whakarauora Restoration Fund
Then ka taea e ngā marae te kume i te moni tata mō ngā hanganga ohorere me te āheinga
Output $400 million over four years for immediate and urgent marae projects
Outcome ka taea te whakatutuki i ngā hiahia ohorere i roto i te wā Pāremata
But ka whakataetae tonu ngā marae mō ngā wāhanga o tētahi kōpaki tau-e-whā, he mutunga ōna

Scenario: Ka utu te pūtea tuku i muri mai i ngā hua
Given $2 billion i tētahi kōpaki kanorau hei whakaputa hua mō te tohatoha ā-tau
And $2.44 billion pūtea Karauna katoa mō te tarahiti
When ka haumitia a Te Tōtara Haemata Intergenerational Fund
Then ka raka te tōpūtanga i te wā e whakaemi ana ngā hua mō ngā kume ā-tau o muri
Output $2 billion intergenerational investment portfolio
And $2.44 billion total Crown funding for Te Rangatiratanga Trust
Outcome ka taea e ngā whakatupuranga o muri te riro tohatoha kāore te pūtea whakaora i hangaia hei homai
But ka tatari ngā marae ki ngā hua kōpaki i mua i te utu a te pūtea tuku i tētahi mea
