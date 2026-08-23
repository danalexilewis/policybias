---
type: spec
id: te-pati-maori-climate-derived
title: "Te āhuarangi e pānuitia ana hei pūnaha: te tiaki i ngā ahumahi tango rawa, kāore te pūtea manawaroa i whakaingoatia"
status: draft
updated: 2026-08-21
summary: He rārangi mārō te tiaki i te whenua me te moana i ngā ahumahi tango rawa, tae atu ki te keri takere moana, engari kāore he pūtea i whakaingoatia mō te manawaroa āhuarangi o ngā hapori e mōrearea rawa ana, nā reira kāore e taea te pānui i te rahi o te urutaunga i te kaupapa here.
jurisdiction: NZ
sources:
  - title: Climate
    url: https://www.maoriparty.org.nz/climate
tags:
  - climate
  - environment
party: te-pati-maori
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/climate.md
derivesFrom: te-pati-maori-climate
assumptions:
  - me whai taputapu anō te tiaki i te whenua me te moana i ngā ahumahi tango rawa, i tua atu i te aukati keri takere moana; kāore te hinu, te kapuni, te waro me ētahi atu tango i rārangitia i konei
  - "me tautuhi ngā \"hapori e mōrearea rawa ana\" mā te mōrearea, te wāhi, te hunga rānei i mua i te arotahi o te pūtea"
  - ko te haumi manawaroa kāore he nama tāra, he rārangi hōtaka rānei, he ahunga, ehara i te rārangi Tahua
  - me whai paerewa me te pūtea ngā huarahi whakaora e hāngai ana ki ngā uara Māori i mua i te whakakapi i ngā huarahi tango rawa
  - kāore mātou e tāpiri nama, nā te mea kāore he nama i te kaupapa here hei tīmatanga
sourceDigest: "sha256-7bdfc420622bbf39"
lang: mi
translationOf: te-pati-maori-climate-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-f8bff2ceb20010ac
---

# Tō mātou māramatanga

> Ka tiakina te whenua me te moana i ngā ahumahi tango rawa, tae atu ki te keri takere moana, engari kāore he rārangi hōtaka, he nama tāra rānei mō te pūtea manawaroa o ngā hapori e mōrearea rawa ana. Me whai paerewa me te pūtea ngā huarahi whakaora i mua i te whakakapi i ngā ahumahi tango rawa—ā, kāore te hinu, te kapuni, te waro me ētahi atu tango i tua atu i te keri i whakatauria i konei.

System: He rārangi tango rawa, kāore te manawaroa i utua

Scenario: Ka tiakina te whenua me te moana i ngā ahumahi tango rawa
Given ka kitea te whenua, te awa, te moana me te whakapapa hei taonga tuku iho, ehara i te patunga
When ka whakamahia te tiaki, tae atu ki te aukati keri takere moana
Then me rārangi tonu ēhea atu mahi tango rawa kei roto, kei waho rānei
Outcome ko te keri i te takere moana te aukati mārō i whakaingoatia
But kāore e mōhio ngā kaipāmu me ngā kaitango rawa ēhea mahi i tua atu i te keri takere moana kei roto, kei waho rānei

Scenario: Ka haumitia te manawaroa āhuarangi mō ngā hapori e mōrearea rawa ana
Given he whakaaro kia haumi ki te manawaroa mō te hunga e mōrearea rawa ana
And kāore he tautuhinga nō wai tērā, kāore hoki he nama pūtea
When ka rapua te pūtea manawaroa
Then me kōwhiri te wāhi, te mōrearea, me te hunga i mua i te tau o te tāra
Outcome ko ngā hapori mōrearea te kaupapa matua i whakaingoatia
But kāore e mōhio ngā whānau takutai, ngā whānau mamao rānei e hia te pūtea urutaunga ka tae ki a rātou

Scenario: Ka tautokona ngā huarahi whakaora e hāngai ana ki ngā uara Māori
Given ko ngā huarahi whakaora, toitū hoki te ara kē
And kāore he hōtaka, he paerewa rānei
When ka tukuna te tautoko
Then me whakatau tonu he aha te mea e tika ana, ā, mā wai e utu
Outcome ko ngā uara Māori te kaiurungi o te ara i whakaingoatia
But kāore e mōhio ngā kaipāmu he aha te mea e kīia ana he whakaora, ā, mā wai e utu
