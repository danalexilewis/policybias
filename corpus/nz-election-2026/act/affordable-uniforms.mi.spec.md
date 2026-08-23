---
type: spec
id: act-affordable-uniforms
title: "Whakawhāitihia ngā taonga kākahu kura waitohu, ā, tukuna ngā kōwhiringa noa"
status: draft
updated: 2026-08-21
summary: Whakawhāitihia ngā kura kāwanatanga ki ngā taonga kākahu waitohu e toru e herea ana, ā, me whai kōwhiringa noa ka taea e ngā whānau te hoko i ngā kaihoko noa.
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
sourceDigest: "sha256-a9d7234d0a5321a5"
gaps:
  - kāore he wātaka mō te whakahou i te Education and Training Act i whakapuakina
  - kāore i whakapuakina me pēhea ngā kura e kōwhiri ai ēhea taonga e toru ka noho waitohu
  - kāore i whakapuakina te tikanga whakamana, te ū rānei
  - kāore i inehia i te whārangi ngā rau tāra ka penapenahia mō ia whānau
  - kāore i whakapuakina mehemea ka tatau ngā kākahu PE ki te tepe taonga e toru
lang: mi
translationOf: act-affordable-uniforms
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8103eb1ef7f124ae
---

# Ko tā te whārangi e kī ana

> I ētahi wā ka herea ngā kura kāwanatanga i ngā whānau ki te hoko taonga kākahu o ia rā i tētahi kaiwhakarato whakaaetia kotahi, he nui te utu. Ka whakawhāiti te kaupapa here i ngā taonga waitohu e herea ana ki te toru mō ia kura, me whai kōwhiringa noa mō ngā taonga e nui te whakamahi, ā, ka taea e ngā whānau te hoko i aua mea i ngā kaihoko noa. Ka noho ngā kākahu hākinakina, ngā kākahu tīma, ngā kākahu kapa haka me ngā kākahu omaoma ki waho o ngā ture. Kāore he rā whakatinana, he taipitopito ū rānei i homai.

System: Ngā kākahu kura utu-pai mā te whakataetae me te kōwhiringa

Scenario: Ka whakawhāiti ngā kura kāwanatanga i ngā here kākahu waitohu
Given he nui ngā whānau e whakapau ana i tua atu i te $1,000 mō ia tamaiti mō ngā hāte, ngā tōkena, ngā tarau poto, ngā kaka rānei, ngā kākahu PE me ngā whakakapi
And 38,000 ngā pūtea taumaha WINZ e $11 million te wāriu i tukuna i te 2025 hei āwhina i ngā whānau ki ngā utu kākahu
And ētahi kura kāwanatanga e here ana i ngā taonga o ia rā ki tētahi kaiwhakarato whakaaetia kotahi, i te wā he iti rawa te utu o ngā taonga ōrite i ngā kaihoko noa
When ka whakahoungia te Education and Training Act kia whakawhāiti i ngā taonga kākahu waitohu e herea ana
Then ka taea e ngā kura kāwanatanga te here i te mōrahi o ngā taonga kākahu waitohu e toru e herea ana
Output e toru te mōrahi o ngā taonga kākahu waitohu e herea ana i ia kura kāwanatanga
And ngā kōwhiringa noa mō ngā taonga e nui te whakamahi pērā i ngā tarau poto, ngā tarau, ngā kaka, ngā skorts me ngā tōkena
And ka taea e ngā whānau te hoko taonga noa i ngā kaihoko kākahu noa
Outcome ka wātea tonu ki ngā kura ētahi taonga waitohu ruarua hei pupuri i te tuakiri me ngā tikanga
And ka noho ngā kākahu hākinakina, ngā kākahu tīma, ngā kākahu kapa haka me ngā kākahu omaoma ki waho o ngā ture hou
