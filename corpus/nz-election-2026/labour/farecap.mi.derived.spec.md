---
type: spec
id: labour-farecap-derived
title: "Ko te taupane utu waka e pānuitia ana hei pūnaha: he tautoko utu tū tonu, kāore i tāia te utu katoa"
status: draft
updated: 2026-08-21
summary: Ko te taupane ā-wiki he tautoko utu tū tonu e kore utu ai ngā haere tāpiri; ehara ngā toharite kua tāia i te taurangi ā-tangata, ā, kāore te utu katoa a te Karauna i te kaupapa here.
jurisdiction: NZ
sources:
  - title: Labour's $20 Public Transport Fare Cap
    url: https://www.labour.org.nz/farecap
tags:
  - transport
  - cost-of-living
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/farecap.md
derivesFrom: labour-farecap
assumptions:
  - ina tae ki te taupane, he kore utu ki te kaihaere ia haere anō o tērā wiki, nō reira ka utu te Karauna i te utu waka kua utua kē
  - nō reira he nui ake te utu ā-wiki o ngā kaihaere nui i ngā kaihaere māmā kāore e tae ki te taupane
  - ko te penapena toharite kua tāia he toharite i roto i ngā kaihaere me ngā huarahi, ehara i te papa mō tētahi tangata kotahi
  - ka mahi anake te aroturuki e whitu rā mēnā e tiri ana ngā pūnaha utu ā-rohe i tētahi matapihi kotahi; kāore te kaupapa here e whakaingoa i te āhua o tērā ōrite
  - ko te tautoko utu ā-wiki tū tonu, kāore he utu tāke katoa kua tāia, ka waiho te whakaaturanga a te Karauna kāore i whakapuakina
sourceDigest: "sha256-0d9068c38ff16373"
lang: mi
translationOf: labour-farecap-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9254be70a38f6d18
---

# Tō mātou māramatanga

> Ina pā te taupane ā-wiki, he kore utu ki te kaihaere ia haere anō o tērā wiki, ā, ka utu te Karauna i te utu waka. He toharite ngā toharite kua tāia i roto i ngā kaihaere me ngā huarahi, ehara i te papa mō tētahi tangata kotahi, ā, ka mahi anake te aroturuki e whitu rā mēnā e tiri ana ngā pūnaha utu ā-rohe i tētahi matapihi kotahi.

System: Ko te taupane utu waka ā-wiki hei tautoko utu tū tonu

Scenario: Ka haere tonu te kaihaere nui i muri i te taupane
Given he taupane utu waka ā-wiki $20 i Tāmaki Makaurau, Te Whanganui-a-Tara me Ōtautahi
And he taupane utu waka ā-wiki $10 i wāhi kē
When ka haere anō te kaihaere i muri i te tae ki te taupane ā-wiki
Then he kore utu ki te kaihaere aua haere anō
Outcome ka utu te Karauna i te utu waka kua utua kē
But he nui ake te utu a te Karauna mō ngā kaihaere nui i ngā kaihaere kāore e tae ki te taupane
And kāore i tāia te utu tāke katoa o te tautoko utu

Scenario: Ka tirohia e te kaihaere te toharite kua pānuitia ki tōna ake wiki
Given he penapena toharite tata ki te $25 ia wiki
And nuku atu i te $1,200 ia tau hei penapena toharite
When he māmā ake, he poto ake rānei te haere a te kaihaere i te toharite i whakamahia
Then ka noho tōna penapena i raro i aua toharite
Outcome he ārahi ngā toharite i roto i ngā kaihaere me ngā huarahi, ehara i te taurangi ā-tangata

Scenario: Ka aroturukitia te whakapau i runga i tētahi matapihi e whitu rā
When ka aroturukitia aunoatia te whakapau utu waka i roto i ngā rā e whitu
Then ka whakawhirinaki te taupane ki te ōrite o tērā matapihi i roto i ngā pūnaha ā-rohe
Outcome he kore utu ngā haere anō o tērā wiki ina tae ki te taupane
But ka nui ake pea te utu a ngā kaihaere i ngā rohe kāore i ōrite i mua i te tīmata o te taupane
