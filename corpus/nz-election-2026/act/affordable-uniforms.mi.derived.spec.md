---
type: spec
id: act-affordable-uniforms-derived
title: "Ko ngā paepae kākahu kura hei pūnaha: te tuakiri kura utu ki te utu ā-whānau"
status: draft
updated: 2026-08-21
summary: Mā te here i ngā taonga waitohu here ki te toru, me te whakatuwhera i ngā taonga noa ki ngā kaihokohoko noa, e kōwhiri ngā kura ko ēhea tohu tuakiri ka mau waitohu, ā, ka mawhiti ngā whānau i te utu kaiwhakarato kotahi mō ērā atu.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/affordable-uniforms
tags:
  - education
  - cost-of-living
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/affordable-uniforms.md
derivesFrom: act-affordable-uniforms
assumptions:
  - mā te paepae waitohu e toru taonga e whakataka, e waiho rānei hei kōwhiringa ngā kura i ētahi atu waitohu here
  - ka heke iho ngā utu kaiwhakarato kotahi mō ngā taonga whakamahi nui nā ngā kōwhiringa noa mai i ngā kaihokohoko noa
  - ka ngaro i ngā kura e whakanui ana i te āhua waitohu katoa tērā āhua mō ngā taonga i tua atu i te toru
  - kāore i inehia te tiaki rau tāra a te kaupapa here, nā reira kāore mātou e whakaputa i tētahi nama tiaki ā-whānau i tua atu i ngā paepae kua kīia
sourceDigest: "sha256-a9d7234d0a5321a5"
lang: mi
translationOf: act-affordable-uniforms-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-35f96a1d6bf62204
---

# Tō mātou māramatanga

> Mā te whakataetae me te kōwhiringa e here tētahi utu: ka mau ngā kura i tētahi huinga waitohu iti mō te tuakiri, ā, ka hoko ngā whānau i ērā atu hei taonga noa mai i ngā kaihokohoko noa. Ka noho ngā kākahu hākinakina, ngā kākahu tīma, ngā kākahu kapa haka me ngā kākahu omaoma ki waho o tērā utu. Kāore he nama mō te tiaki ā-whānau i tua atu i te paepae pūtea tārewa uaua.

System: Ka herea te tuakiri waitohu kia hoko ngā whānau i ngā taonga noa

Scenario: Me kōwhiri tētahi kura kāwanatanga ko ēhea taonga ka mau waitohu
Given ka tono ētahi kura kāwanatanga i ngā taonga o ia rā mai i tētahi kaiwhakarato kua whakaaetia kotahi, ina he iti rawa te utu o ngā taonga ōrite i ngā kaihokohoko noa
When ka here te Education and Training Act i ngā taonga kākahu kura waitohu here ki te toru
Then ka kōwhiri te kura i ngā taonga waitohu e toru rawa hei here
Output e toru ngā taonga kākahu kura waitohu here te nui rawa i ia kura kāwanatanga
Outcome ka tau te tuakiri kura ki tērā huinga waitohu iti
But kāore e taea te here i tētahi atu taonga o ia rā hei hokonga waitohu here

Scenario: Ka hoko tētahi whānau i ngā taonga whakamahi nui hei taonga noa
Given he nui ngā whānau e whakapau ana neke atu i te $1,000 ia tamaiti mō ngā hāte, ngā tōkena, ngā tarau poto, ngā kaka rānei, ngā kākahu PE me ngā whakakapi
And e 38,000 ngā pūtea tārewa uaua a WINZ, e $11 million te wāriu, i tukuna i te 2025 hei āwhina i ngā whānau ki ngā utu kākahu kura
When me tuku ngā kōwhiringa noa mō ngā taonga whakamahi nui pērā i ngā tarau poto, ngā tarau, ngā kaka, ngā skorts me ngā tōkena
Then tērā pea ka hoko ngā whānau i ērā taonga mai i ngā kaihokohoko kākahu noa
Outcome ka whakataetae ngā kākahu o ia rā ki ngā utu hokohoko noa
But ka noho ngā kākahu hākinakina, ngā kākahu tīma, ngā kākahu kapa haka me ngā kākahu omaoma ki waho o ngā ture hou
