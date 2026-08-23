---
type: spec
id: nz-first-backing-a-new-zealand-owned-bank-derived
title: "Ko te hoko-mai BNZ e pānuitia ana hei pūnaha: he utu hoko kāore i whakaingoatia e utua ana e ngā hua kua kīia, me te mōrearea pepa-taurite a te Karauna"
status: draft
updated: 2026-08-21
summary: E kīia ana nā ngā hua BNZ neke atu i te $1.5 billion e utu te nama hoko-mai kāore i whakaingoatia tōna tino, ā, ka whakanoho ngā wāhanga nama a te Karauna, Future Fund me Te Kaporeihana Āwhina Hunga Whara i ngā pepa-taurite tūmatanui ki te mōrearea pēke i te taha o tētahi pūnaha e 85% nā Ahitereiria.
jurisdiction: NZ
sources:
  - title: Backing a New Zealand Owned Bank
    url: https://www.nzfirst.nz/backing_a_new_zealand_owned_bank
tags:
  - economy
  - small-business
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/backing_a_new_zealand_owned_bank.md
derivesFrom: nz-first-backing-a-new-zealand-owned-bank
assumptions:
  - me mōhio te utu hoko i mua i te taea te whakaatu ka utu ngā hua i te nama ina kīia he kaupapa e utu ana i a ia anō; ka hoatu te kaupapa here i ngā hua, ehara i te utu
  - ka whakanoho te nama a te Karauna he roa te wā, te hea Future Fund me te haumi Te Kaporeihana Āwhina Hunga Whara i te pūtea tūmatanui, tata-tūmatanui rānei ki te mōrearea pēke ahakoa kua tapaina he arumoni, he tawhiti-ā-ringa
  - ka noho tonu te hinonga kua hanumi ki te taha o ngā pēke nui e whakahaere tata ki te 85% o te pūnaha ina hanumia te BNZ ki tētahi pēke e pupuri ana i raro iho i te 8% o ngā mōkete; e hiahiatia ana te rahi, engari kāore e aunoa mai i te hanumi anake
  - kāore te pupuri i te tūāpapa pūtea o Kiwibank e kī mēnā e hiahiatia ana he pūtea tāpiri mō tētahi pēke kua hanumitia he nui tōna pānga ki te pūnaha
sourceDigest: "sha256-ff7fce88ee091b00"
lang: mi
translationOf: nz-first-backing-a-new-zealand-owned-bank-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-88ca0e3b3a9b67f0
---

# Tō mātou māramatanga

> Ko te tikanga ka utu te hoko-mai BNZ i a ia anō mai i ngā hua moni neke atu i te $1.5 billion ia tau, engari kua ngaro te utu hoko, ā, ka taea te heke o ngā hua. Ko te hanumi ki a Kiwibank hei National Bank nā te Karauna ka waiho tonu tētahi kaitākaro kei raro i te 8% o ngā mōkete ki te taha o ngā pēke nui e tata ana ki te 85% o te pūnaha.

System: Ko te hoko-mai tautokona e te Karauna me tētahi tino kāore i utuhia

Scenario: E kīia ana ngā hua ki tētahi utu hoko kāore i whakaingoatia
Given e whakaputa ana te BNZ i nāianei i ngā hua moni neke atu i te $1.5 billion ia tau
And kāore he utu hoko mō te hoko-mai i whakapuakina
When ka pūteatia te hoko-mai ki te nama a te Karauna he roa te wā e kīia ana ka āta utua e aua hua
Then kāore e taea te tirotiro i te kī utu-nama ki tētahi tino
Output ngā hua moni BNZ neke atu i te $1.5 billion ia tau e kīia ana hei utu i te nama
Outcome e whakaatu ana te kaupapa here i te hoko-mai hei mea e utu ana i a ia anō i te tūmanako
But ka kawea e ngā kaipānga tāke te nama mēnā ka taka ngā hua i raro i te utu ka utua

Scenario: Ka riro i te pūtea tūmatanui me te tata-tūmatanui te mōrearea pēke
Given tētahi huinga whakauru o ngā here rangatira, te nama a te Karauna he roa te wā, me tētahi wāhanga hea Future Fund me Te Kaporeihana Āwhina Hunga Whara iti
When ka hangaia te National Bank of New Zealand hei pēke arumoni nā te Karauna katoa
Then ka noho te pūtea a te Karauna, te Future Fund me Te Kaporeihana Āwhina Hunga Whara i muri i tētahi kaituku pūtea he nui tōna pānga ki te pūnaha
Outcome ko te tikanga ka noho ngā hua pēke ki Aotearoa
But ka tau ngā mate, mēnā ka puta, ki ngā pepa-taurite tūmatanui, tata-tūmatanui rānei, ehara ki a NAB

Scenario: E kīia ana te rahi ki te taha o ngā pēke nui nā Ahitereiria
Given e whakahaere ana ngā pēke e whā nā Ahitereiria i te tata ki te 85 percent o te pūnaha pēke
And e pupuri ana a Kiwibank i raro iho i te 8 percent o te mākete mōkete
When ka hanumitia te BNZ ki a Kiwibank hei pēke kotahi nā te Karauna
Then ka tukuna tētahi kaiwhakataetae ā-kāinga nui ake ki te papa
Outcome ko te pēhanga whakataetae tūturu te hua e whāia ana
But me whai tonu ngā kaipānga tāke me te pēke i te pūtea, te utu me te hiahia mōrearea kāore rawa te kaupapa here e ine
