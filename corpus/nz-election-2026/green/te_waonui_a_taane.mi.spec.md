---
type: spec
id: green-te-waonui-a-taane
title: "$2.44 piriona Te Rangatiratanga Trust mō ngā marae"
status: draft
updated: 2026-08-22
summary: Te Rangatiratanga Trust me te $400 miriona pūtea whakaora i ngā tau e whā me te $2 piriona taonga tuku iho, e whakahaerehia ana e ngā hapū me ngā iwi.
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
sourceDigest: "sha256-7aa4a4fefcd9750c"
gaps:
  - kāore i āta whakaahuatia te hātepe kōwhiri rōpū kaitiaki i tua atu i ngā wānanga ā-motu
  - kāore i whakapuakina ngā ture tohatoha ā-tau mai i te pūtea tuku iho
  - kāore i whakapuakina ngā paearu tika mō ngā kaitono marae me ngā hapū
  - kāore i āta tohua me pēhea e tiakina ai te pūtea i te huringa kāwanatanga
  - kāore i whakapuakina te hātepe whakaae kaupapa o te pūtea whakaora
  - kāore i mārama te hononga ki ētahi hōtaka pūtea marae kua whakaingoatia i wāhi kē
  - kāore he rā tīmata
  - kāore i āta whakaahuatia te kaupapa here haumi kōpaki kanorau
lang: mi
translationOf: green-te-waonui-a-taane
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6eec055c2abc8a37
---

# Ko tā te whārangi e kī ana

> Ka whai pūtea ngā marae hei hanganga pāpori, ahurea waiwai mā Te Rangatiratanga Trust e whakahaerehia ana e ngā hapū me ngā iwi. Mā ngā wānanga ā-motu e whakatū te rōpū kaitiaki, ngā pūtea e rua e tautoko ana, me ngā tikanga whakahaere. Ko Te Rākau Whakarauora Restoration Fund e kapi ana i ngā kaupapa ohorere, ā, ko Te Tōtara Haemata Intergenerational Fund e hanga ana i ngā hua roa mō te whakawhanake marae me te hapori. Ko te tikanga kia noho te pūtea ki tētahi tūnga tiaki, kaua e whai i ngā kaupapa matua o ia kāwanatanga.

System: Te pūtea marae Te Waonui a Tāne mā Te Rangatiratanga Trust

Scenario: Ka whakatū te Karauna i Te Rangatiratanga Trust me ngā pūtea e rua e tautoko ana
When ka whakatū ngā wānanga ā-motu i te rōpū kaitiaki, ngā pūtea e rua me ngā tikanga whakahaere
And ka hangaia Te Rangatiratanga Trust, nā ngā hapū me ngā iwi o Aotearoa, ā, nā rātou e whakahaere
Then ka tukuna te pūtea Karauna motuhake mā ngā pūtea e rua e tautoko ana
Output $2.44 piriona pūtea Karauna mō Te Rangatiratanga Trust
And $400 miriona i ngā tau e whā mō ngā kaupapa marae ohorere, tere
And $2 piriona i tētahi kōpaki haumi tuku iho
Outcome ka whai pūtea ngā marae hei hanganga pāpori, ahurea waiwai mō ngā whakatupuranga

Scenario: Ka whakatūria te pūtea marae ki tētahi tūnga tiaki
Given he pūtea marae e whakaputa ana i te rangirua nā te whai i ngā kaupapa matua o te kāwanatanga o te rā
When ka mahi a Te Waonui a Tāne mā ngā pūtea e rua e tautoko ana
Then ka tukuna e Te Rākau Whakarauora Restoration Fund te tomo pūtea tere mō ngā hiahia ohorere
And he pūtea haumi tūmau a Te Tōtara Haemata Intergenerational Fund e tuku hua roa ana
Outcome ka whakamanahia, ka whai pūtea ngā marae hei hanganga waiwai pērā i ngā hōhipera me ngā kura
