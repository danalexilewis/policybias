---
type: spec
id: green-manifesto-2026-immigration-and-refugees-derived
title: "Ko te manene e pānuitia ana hei pūnaha: he kuota 5,000 i tētahi tau kua whakaingoatia, ka heke te mana o te kaituku mahi ina taea te huri"
status: draft
updated: 2026-08-21
summary: Ka piki āta te kuota rerenga ki te 5,000 i te tau kua whakaingoatia e te kaupapa here, kāore he hipanga takiwā i te kaupapa here, ā, ka ngoikore te pupuri a tētahi kaituku mahi kotahi i te whakakore i te noho-atu 12 marama me te tuku i ngā huringa kaituku mahi.
jurisdiction: NZ
sources:
  - title: Immigration and Refugees
    url: https://www.greens.org.nz/manifesto_2026_immigration_and_refugees
tags:
  - immigration
party: green
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_immigration_and_refugees.md
derivesFrom: green-manifesto-2026-immigration-and-refugees
assumptions:
  - me whai tonu ngā hipanga ā-tau takiwā kāore e tāia e te kaupapa here tētahi pikinga āta ki te 5,000 i te tau kua whakaingoatia (2029)
  - ka tapahia te mana o tētahi kaituku mahi kotahi ki runga i te kaipupuri uruwhenua-mahi e te whakakore i te noho-atu 12 marama me te tuku i ngā huringa kaituku mahi
  - ka whakakorea e te whakakore i ngā Acceptable Standards of Health tētahi mātai hauora-hauātanga; ka noho ngā utu noho anō me ngā utu hauora ki wāhi kē o te pūnaha
  - he huarahi whakature ngā ara noho tūturu mō te hunga kua pau ō rātou uruwhenua; kāore i te kaupapa here ngā nama me ngā paearu
sourceDigest: "sha256-8f5216c1b631f6a7"
lang: mi
translationOf: green-manifesto-2026-immigration-and-refugees-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2d3dcc075b9b5d57
---

# Tō mātou māramatanga

> Ka huakina ngā ara noho tūturu mō ngā manene wā-roa, tae atu ki te hunga kua pau ō rātou uruwhenua. Ka mutu ngā Acceptable Standards of Health, ka taea e ngā kaipupuri uruwhenua-mahi te huri kaituku mahi kāore he noho-atu 12 marama, ka whakawāteahia ngā pikinga whakakotahi whānau, ā, ka piki te kuota rerenga ki te 5,000 i te 2029. Kāore he nama i ngā hipanga kuota ā-tau, i ngā nama noho tūturu rānei.

System: Te huarahi kuota me te pupuri kaituku mahi ngoikore ake

Scenario: Ka piki te kuota rerenga ki te tau kua whakaingoatia
When ka piki āta te kuota rerenga
Then tērā pea ka nui ake te hunga ka noho anō i raro i te kuota i ia tau i te pikinga
Output te kuota rerenga ā-tau 5,000 i te tau kua whakaingoatia e te kaupapa here
Outcome ka taea e ngā hapori te noho anō i te 5,000 rerenga i te tau, tae noa ki te 2029
But ka ngau ngā tari noho anō i ia hipanga ā-tau i mua i te tānga a Te Tai Ōhanga i te huarahi, i te pūtea rānei

Scenario: Ka taea e te kaipupuri uruwhenua-mahi te wehe i tētahi kaituku mahi kino
Given tētahi noho-atu 12 marama e kī ana ināianei me wehe ngā kaimahi i Aotearoa i waenga uruwhenua
When ka taea e ngā kaipupuri uruwhenua mahi manene te huri kaituku mahi
And ka whakakorehia te noho-atu 12 marama
Then kāore te kaimahi e herea ki tētahi kaituku mahi kotahi, e peia rānei ki waho mō te tau i waenga uruwhenua
Output kua whakakorehia te noho-atu 12 marama i waenga uruwhenua
Outcome ka heke te mana o te kaituku mahi ki runga i taua kaimahi
But kei te tatari tonu ngā kaimahi kia whakaae a Immigration New Zealand i ia huringa kaituku mahi i te wā tika

Scenario: Ka mutu ngā mātai hauora, ka riro i ngā uruwhenua kua pau tētahi ara noho tūturu
When ka whakakorehia ngā here Acceptable Standards of Health
And ka huakina ngā ara noho tūturu mō ngā manene wā-roa, tae atu ki te hunga kua pau ō rātou uruwhenua
Then kāore anō ngā āhuatanga hauora me te hauātanga e ārai i ērā ara i ngā kupu a te kaupapa here
And he huarahi kua kīia tō te hunga e noho kē ana i konei kāore he uruwhenua o nāianei kia noho tonu
Outcome kāore anō ngā āhuatanga hauora me te hauātanga e ārai i ngā ara noho tūturu kua whakaingoatia
But ko ngā Minita tonu e whakatau ana e hia te hunga ka uru ki ia ara, ā, i ēhea here
