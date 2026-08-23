---
type: spec
id: labour-medicard-derived
title: "Ko te Medicard e pānuitia ana hei pūnaha: he tika tū tonu ā-tangata e pūteatia ana e te tāke rawa i te wā hoko"
status: draft
updated: 2026-08-21
summary: He whakapau pūmau ā-tangata ngā toronga kore utu e toru ia tau, e pūteatia ana e te tāke ka tae mai anake ina huri te rawa, i te wā kāore i ingoatia te reiti GP ā-motu me te kaha wātea.
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
derivesFrom: labour-medicard
assumptions:
  - he tika tū tonu ngā toronga kore utu e toru ia tau mō ia tangata o Aotearoa; kāore te kaupapa here e kī ka tapahia ina heke te moni
  - ka utua te tāke pūtea anake i te hoko, nā reira ka whai ngā moni i te huri rawa, kāore te maramataka tika e whai
  - ko te huarahi utu i tāia, $393.3 million kātahi tata ki te $553 million ia tau, te taha whakapau; kāore e whakaatu he moni ōrite i aua tau
  - ka whakatakoto te Independent Pricing Authority i tētahi reiti ā-motu kāore te kaupapa here e ingoa, nā reira he tuwhera te kite pūtea i muri i te tīmatanga o ngā toronga kore utu i te kaupapa here
  - ko te whakawātea wā mā te aromatawai me te hangarau he kerēme kaha, ehara i te kī taurite ka taea e ia tūroro rēhita te puka i te pikinga o te hiahia
sourceDigest: "sha256-ec8fadc24803c00f"
lang: mi
translationOf: labour-medicard-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9e466c3129d0bfc1
---

# Tō mātou māramatanga

> Ka mau ngā toronga kore utu e toru ia tau hei tika tū tonu ā-tangata, e pūteatia ana e te tāke ka tae mai anake ina huri te rawa. Ka pakeke te huarahi utu i tāia i mua i te mōhiotanga o te reiti ka whakatakotoria e te Independent Pricing Authority, ā, ka herea te aromatawai me te hangarau hei tikanga kaha, ehara i te hāora rata wātea.

System: Ko te Medicard hei tika hauora tū tonu e pūteatia ana e te huri rawa

Scenario: Ka tū te tika i te hekenga o te huri rawa
Given ngā toronga rata kore utu e toru ia tau mō ia tangata o Aotearoa
And he pūtea mai i te tāke e utua ana anake ina hokona te rawa haumi
When ka heke te huri rawa i tētahi pāheketanga
Then ka tū tonu ngā toronga kore utu hei tika ā-tangata
Output total cost $393.3 million in 2027/28
And around $553 million a year once fully in place
Outcome me utu te whakapau hauora i tētahi puna kē, me whakaiti rānei
But ka mau ngā tūroro i te tūraru o te āputa pūtea kāore rātou i whakatū
Activates labour-capitalgainstax

Scenario: Ka pakeke te huarahi utu i tāia i mua i te mōhiotanga o te reiti a te Independent Pricing Authority
Given e tū ana te Independent Pricing Authority ina tīmata ngā toronga kore utu
And he reiti pūtea GP ā-motu kāore te kaupapa here e ingoa
When kua tū ngā toronga kore utu me te utu motuhake
Then ka utua ngā whare haumanu ki te reiti ka whakatakotoria i muri i te tīmatanga o te tika
Output $553 million in 2028/29
And $548 million from 2030 and outyears
Outcome ka noho ngā tau o muri a te Karauna i runga i te huarahi reiti e waiho tuwhera ana e te kaupapa here
But kua herea te rahi tika, kāore te utu ia wāhanga i herea

Scenario: Ka piki te hiahia i te wā kāore i ingoatia te kaha GP wātea
Given kāore e taea e te kotahi i roto i te ono o ngā tāngata o Aotearoa te utu kia toro i tō rātou rata
And he mahere hei whakawātea i ngā wā GP neke atu i te 4.5 million ia tau
When ka puka ētahi atu tāngata nā te mea he kore utu ngā toronga
Then ka tūtaki ngā whare haumanu ki te hiahia nui ake ki te mahere kaha e kī ana te kaupapa here i roto i ngā pākei
Outcome ka taea te piki tonu ngā wā tatari ki te kore ngā wā kua wāteatia e ōrite ki te hiahia hou
But ka mau ngā tūroro kāore e whiwhi wāhi i te rārangi ina he iti ngā wā kua wāteatia i te hiahia hou
