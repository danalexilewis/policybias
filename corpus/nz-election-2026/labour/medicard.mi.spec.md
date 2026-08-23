---
type: spec
id: labour-medicard
title: "Ngā haerenga tākuta e toru kore utu a te Medicard, ka pūteatia mā te tāke hua rawa"
status: draft
updated: 2026-08-21
summary: Ka whiwhi ia tangata o Aotearoa i ngā haerenga tākuta whānau e toru kore utu ia tau mā te Medicard, ka pūteatia mā te tāke 28% i ngā hua rawa i muri i te tīmatanga.
jurisdiction: NZ
sources:
  - title: Free Doctor's Visits with the Medicard
    url: https://www.labour.org.nz/medicard
  - title: Free doctor's visits
    url: https://www.labour.org.nz/media/vtbneplb/labour-free-doctors-visits.pdf
tags:
  - healthcare
  - taxation
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/medicard.md
sourceDigest: "sha256-ec8fadc24803c00f"
gaps:
  - kāore i whakapuakina i tēnei whārangi te moni tāke hua rawa katoa
  - kāore i whakapuakina te utu tākuta whānau ā-motu ka whakatauria e te Independent Pricing Authority
  - kāore i whakapuakina te whakatairanga Medicard ā-rohe
  - kāore i āta tohua ngā taipitopito aukati i muri i te wā mahi me Te Kaporeihana Āwhina Hunga Whara, i tua atu i te rārangi matua
  - kei runga te wehewehe 4.5 million haerenga i ngā inenga kua kōpania, ehara katoa i te mea motuhake ki te Medicard
lang: mi
translationOf: labour-medicard
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6d62a51848a9bd57
---

# Ko tā te whārangi e kī ana

> Ka whiwhi ia tangata o Aotearoa i ngā haerenga tākuta e toru kore utu ia tau mā tētahi kāri me tētahi taupānga Medicard i tōna whare mahi kua rēhita. Ka pūteatia ngā haerenga mā te tāke hua rawa i runga i ngā rawa haumitanga ka hokona i muri i te 1 Hūrae 2027, ka whakawāteatia te kāinga whānau. Ka whai ngā tika i te wā tūturu, ā, ka hono ki ngā pūnaha tuakiri hauora o nāianei.

System: Ngā haerenga tākuta e toru kore utu a te Medicard

Scenario: Ka toro tētahi tangata o Aotearoa ki tōna whare mahi tākuta whānau kua rēhita
Given kāore e taea e te kotahi i roto i te ono o ngā tāngata o Aotearoa te utu kia toro ki tōna tākuta
When ka whakarewahia te Medicard
Then ka whiwhi ia tangata o Aotearoa i ngā haerenga tākuta e toru kore utu ia tau
Output 3 haerenga tākuta kore utu ia tau mō ia tangata o Aotearoa
And ka pūtea te hauora mā te tāke 28% i te hua o ngā rawa ka hokona i muri i te 1 Hūrae 2027
And 100% o te moni ka rāhuihia mō te hauora
And $393.3 million te utu katoa i te 2027/28
And $553 million i te 2028/29
And tata ki te $553 million ia tau ina tū katoa
And $548 million mai i te 2030 me ngā tau kei tua
And e 9 i roto i te 10 o ngā tāngata o Aotearoa e whakapaetia ana kāore e utu i te tāke
Outcome e 4 i roto i te 5 o ngā tāngata o Aotearoa e whakapaetia ana kāore e utu mō tētahi haerenga tākuta whānau auau mai i te Hūrae 2028
Activates labour-capitalgainstax
Activates labour-cervicalscreening
Activates labour-maternityscans
Activates labour-prescriptions
