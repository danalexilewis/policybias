---
type: spec
id: labour-maternityscans
title: "Ngā tirotiro hapūtanga kore utu mā te Medicard"
status: draft
updated: 2026-08-21
summary: Kia kore utu ngā tirotiro hapūtanga katoa kua tuku tohutohu, puta noa i te motu, mai i te Hūrae 2028, ka pūteatia mā te moni tāke hua rawa kua rāhuihia mō te hauora.
jurisdiction: NZ
sources:
  - title: Free Maternity Scans With the Medicard
    url: https://www.labour.org.nz/maternityscans
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/maternityscans.md
sourceDigest: "sha256-66cd32358a546bf3"
gaps:
  - kāore i āta rārangitia ēhea momo tirotiro, i tua atu i ngā tirotiro hapūtanga kua tuku tohutohu, ka kapi
  - kāore i whakapuakina ngā rohe whakanoho ākonga sonographer, ngā wātaka whakaoti rānei
  - kāore i mapihia ngā rohe tirotiro-kore-utu o nāianei, i tua atu i ngā rohe kua whakaingoatia
  - kāore i whakapuakina te pānga ki ngā kaiwhakarato hapūtanga tūmataiti
lang: mi
translationOf: labour-maternityscans
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b9c9e9068ebfc0d2
---

# Ko tā te whārangi e kī ana

> Ka noho kore utu ngā tirotiro hapūtanga katoa kua tuku tohutohu, puta noa i te motu, mai i te Hūrae 2028. I muri i te tuku tohutohu a tētahi tākuta whānau, kaiwhakawhānau, mātanga rānei, ka utaina te tika ki runga i te Medicard. Ka pūteatia tahi ki ngā haerenga tākuta e toru kore utu me te tirotiro kakī pūngāwari kore utu.

System: Ngā tirotiro hapūtanga kore utu mā te Medicard

Scenario: Ka whiwhi tētahi wahine hapū i tētahi tirotiro hapūtanga kua tuku tohutohu
Given ka taea te $90 te utu mō ia tirotiro hapūtanga
And i ētahi rohe anake e kore utu ana ngā tirotiro i ēnei rā
When ka noho kore utu ngā tirotiro hapūtanga mai i te Hūrae 2028
Then ka kore utu ia tirotiro hapūtanga kua tuku tohutohu, i ngā wāhi katoa o Aotearoa
Output $28.6 million te utu ia tau
And 24 tūranga ākonga sonographer utua, ka pūteatia i raro i te $3 million ia tau
Outcome ka utaina aunoatia te tika ki runga i te Medicard i muri i te tuku tohutohu
Activates labour-medicard
Activates labour-capitalgainstax
