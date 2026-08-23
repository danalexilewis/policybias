---
type: spec
id: act-paris-derived
title: "Ko te NDC hau-wehenga e pānuitia ana hei pūnaha: kāore te mewaro pāmu e utua, ā, he kōwhiringa ine te mahana"
status: draft
updated: 2026-08-21
summary: Ko te aukati pūmau i te ahuwhenua i te ETS te tikanga kāore rawa te mewaro pāmu e utua ki reira, ā, ko No Additional Warming he kōwhiringa ine ka taea te pupuri i te pūnga kia tū, kāore e tapahi i te nui o ngā kararehe.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/paris
tags:
  - climate
  - agriculture
party: act
clusters:
  - environment-rural
money: named-figure
sourcePath: corpus/nz-election-2026/act/paris.md
derivesFrom: act-paris
assumptions:
  - ko te wehe pūmau ahuwhenua i te ETS te tikanga kāore te mewaro koiora mai i ngā pāmu e pā ki tētahi tohu utu ETS
  - ko No Additional Warming mō te mewaro he ine pūnga: ka taea te tutuki i te pupuri i te wāhi mahana kia papatahi, kāore e tapahi tino i ngā tukunga kararehe
  - ko te whakamahi rerekē i te mewaro i te hauwaro ora-roa i te NDC he huri i tā te tutuki e tatau ana, ehara i te mahi a ngā kaipāmu anake
  - kāore te kerēme pai o te kaupapa here e kī ka heke ngā tukunga o te ao ina whakawhānui a Aotearoa i te miraka i raro i tētahi whāinga hau-wehenga
sourceDigest: "sha256-28be68128eedcd59"
lang: mi
translationOf: act-paris-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8e8ed96b85b32433
---

# Tō mātou māramatanga

> Ka waiho ngā whāinga hau-wehenga me te wehe ahuwhenua i te ETS i te mewaro pāmu kāore e utua i te ETS. He kōwhiringa ine a No Additional Warming ka taea te tutuki mā te pupuri i te wāhi mahana a te mewaro kia tū, kaua mā te tapahi i ngā tukunga kāhui. Kāore he whāinga NDC nama i whakaputaina.

System: Ngā whāinga āhuarangi hau-wehenga me te mewaro pāmu kāore e utua

Scenario: Ka whakamahi rerekē tētahi Nationally Determined Contribution hou i ngā hau
Given ka whakamahi ōrite ngā whāinga āhuarangi o nāianei i te mewaro mai i ngā kararehe ki te waro mai i ngā kora mōmona
And he 46% iti iho te tapuwae waro o te miraka o Aotearoa i te toharite o te ao
When ka tukuna e tētahi kāwanatanga hou tētahi Nationally Determined Contribution hau-wehenga
Then ka tatau ngā hau ora-roa me te mewaro ora-poto i ngā ara rerekē
Outcome ka whakawākia te tutuki ki ngā ine hau wehe
But kāore tētahi ara hau e kawe i tētahi whāinga nama kua whakaputaina i tēnei rauemi

Scenario: Ka puritia pūmau te ahuwhenua ki waho o te Emissions Trading Scheme
Given me puritia pūmau te ahuwhenua ki waho o te Emissions Trading Scheme
When ka noho te mewaro pāmu ki waho o te kaupapa
Then kāore he utu ETS e piri ki te mewaro kararehe
Outcome kāore ngā kaipāmu e tūtaki ki tētahi utu ETS mō te mewaro koiora
But kāore te akiaki ki te tapahi i ngā tukunga kāhui mā tērā utu

Scenario: Ka whakahaerehia te mewaro koiora i raro i a No Additional Warming
Given me whakahaere te mewaro koiora i raro i te huarahi No Additional Warming
When ka puritia te wāhi mahana a te mewaro kia papatahi, kaua e tapahia i ngā tana tino
Then ka taea te tutuki i te ine, kāore e whakaheke i te putanga kararehe
Outcome ka haere tonu ngā hau ora-roa i tētahi ara ki te whakaheke tukunga, ā, ka puritia te mewaro ki te kore mahana tāpiri
But kāore e hiahiatia te heke o te mewaro kararehe tino kia tutuki te ine
