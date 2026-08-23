---
type: spec
id: act-equal-treatment-at-universities-derived
title: "Te ōritetanga i ngā whare wānanga e pānuitia ana hei pūnaha: ka ngaro te iwi hei paearu mō ngā painga tūmatanui; ka toe tonu te pūkenga, te hiahia, me ngā kaituku takitahi"
status: draft
updated: 2026-08-21
summary: Kāore e taea te tuku painga mātauranga matua e utua ana e te iwi mā te iwi, i te wā e wātea tonu ana te pūkenga mātauranga, te hiahia, te hauātanga, te wāhi, me ngā koha takitahi hei tohatoha — kāore he nama tāra i te kaupapa here.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/equal-treatment-at-universities
tags:
  - education
party: act
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/act/equal-treatment-at-universities.md
derivesFrom: act-equal-treatment-at-universities
assumptions:
  - ka herea e te Pire te āhua e tohatoha ai ngā whare mātauranga matua i ā rātou ake painga e utua ana e te iwi; kāore e whakakorea ngā karahipi, ko te iwi anake hei kī tohatoha mō aua painga
  - ka noho ture tonu te pūkenga, te hiahia mātauranga, te wāhi whenua, ngā āhuatanga ōhanga, me te hauātanga hei tohatoha i raro i ngā wehewehenga o te kaupapa here
  - ka taea tonu e ngā pūtea tuku, ngā waihotanga, ngā iwi, ngā hinonga atawhai me ngā tarahiti te arotahi ki te kaupapa a te kaituku, nā reira ka taea tonu te pūtea takitahi e arotahi ana ki te iwi mā tērā huarahi
  - kāore mātou e tāpiri nama tāra, nā te mea kāore te kaupapa here e whakaputa, ā, he hanganga te tāpiri nama tohatoha anō
sourceDigest: "sha256-4297a1524bca7836"
lang: mi
translationOf: act-equal-treatment-at-universities-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8b43b1b0317b1e02
---

# Tō mātou māramatanga

> Ka aukatia ngā painga mātauranga matua e utua ana e te iwi, e hāngai ana ki te iwi, i te wā e noho ture tonu ana te pūkenga, te hiahia, me te arotahi a te kaituku takitahi. Kāore he utu i rārangitia mō te nui o te pūtea ka neke — e toru ngā tohatoha e toe ana i te taha o te aukati.

System: Ka tangohia te iwi hei tohatoha tūmatanui; ka toe ngā tohatoha kē

Scenario: Ka whakawhiwhia e te whare wānanga tētahi karahipi e utua ana e te iwi
Given i tēnei wā ka taea e ngā whare wānanga te rāhui karahipi, whare noho, wāhi ako me ētahi atu āheinga i runga i te iwi
And i te tau 2024 i whakahau te kāwanatanga ki ngā tari tūmatanui kia tohatoha tautoko i runga i te hiahia me te uara, kaua i te iwi, engari kāore ngā whare mātauranga matua i uru
When ka whakahounga te Education and Training Act kia aukati i ngā whare mātauranga matua te tuku painga i runga i te iwi, te takenga iwi rānei
Then kāore e taea e ngā karahipi, ngā takuhe, te āwhina pūtea, te whare noho, ngā wāhi kua tohua, me ētahi atu painga te whakamahi i te iwi hei paearu ina utua te painga e te iwi
Outcome ka huaki ngā āheinga e utua ana e te kaipākeha, kāore te iwi hei kūaha
But ka whakataetae ngā ākonga i whakawhirinaki ki te pūtea tūmatanui e arotahi ana ki te iwi mō tētahi puna iti ake, rerekē rānei

Scenario: Ka whakawhiwhia tonu te tautoko i runga i te pūkenga, te hiahia rānei
When ka tohatoha ngā whare wānanga i te tautoko i runga i te pūkenga mātauranga, te hiahia mātauranga, te wāhi whenua, ngā āhuatanga ōhanga, te hauātanga rānei
Then ka noho ture tonu aua paearu i muri i te whakahounga
Outcome ka taea tonu e te āwhina mō te raru me te mātauranga te ārahi i ngā rawa
But mā ngā whare wānanga anō e whakatau me pēhea te ine i te raru me te hiahia mātauranga

Scenario: Ka utua e te kaituku takitahi tētahi karahipi e arotahi ana
When ka tukuna he pūtea tuku, he waihotanga, he āwhina kē rānei nā tētahi tangata takitahi, iwi, hinonga atawhai, tarahiti rānei mō tētahi kaupapa arotahi
Then ka noho wehe tonu tērā koha takitahi i te aukati iwi mō ngā painga e utua ana e te iwi
Outcome ka taea tonu e te pūtea takitahi e arotahi ana te tae ki tētahi rōpū kua whakaingoatia mā ngā pukapuka a te whare wānanga
But ka herea tonu e te panoni ngā rawa a te whare anō e utua ana e te iwi
