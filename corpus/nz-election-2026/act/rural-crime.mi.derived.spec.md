---
type: spec
id: act-rural-crime-derived
title: "Te hara taiwhenua e pānuitia ana hei pūnaha: he kuhunga mahi ngā hāora patarō, ehara i te whakawātea"
status: draft
updated: 2026-08-21
summary: E hoko ngā hāora patarō tāpiri kotahi rau mano i te noho me te kaha whakautu; ka hoko a Text 111 i tētahi hongere ina hinga te reo; ehara tētahi nama i te pāpātanga whakawātea, whakawhiu rānei.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/rural-crime
tags:
  - crime-and-justice
  - agriculture
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/rural-crime.md
derivesFrom: act-rural-crime
assumptions:
  - ka ine ngā hāora patarō i te wā āpiha i runga i te patarō, he kuhunga mahi tērā; he putanga wehe te whakawātea me te whakawhiu kāore te kaupapa here e oati hei pāpātanga
  - ko te nama 15% kua tūhura, kua whakawhiu o te kaupapa here he amuamu papa, ehara i te whāinga e oati ngā hāora ki te hiki
  - ka whakawhānui a Text 111 i tētahi hongere whakapā ki ngā wāhi kāore e pono te reo waea pūkoro; kāore e whakatakoto i tētahi āpiha ki te pāmu mā te anake
  - ka whakaemi tētahi rōpū hara taiwhenua motuhake i te kaha, engari kāore te tatau kaimahi i whakaputaina
sourceDigest: "sha256-301c6a8c1c5f5ef9"
lang: mi
translationOf: act-rural-crime-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-f188f37b2952a0f7
---

# Tō mātou māramatanga

> E 100,000 ngā hāora patarō tāpiri, tētahi rōpū hara taiwhenua, a Text 111, me ngā hara hopu me te tāhae kararehe kaha ake, e kite ana i ngā hāora me te hononga hei wawaotanga, ehara i ngā pāpātanga whakawātea. Ka hoko ngā hāora patarō i te noho; kāore e oati i ngā putanga kua whakawhiu.

System: Te noho taiwhenua me te hononga hei kuhunga, ehara i te whakawātea

Scenario: Ka utua ngā hāora patarō taiwhenua tāpiri
Given i kite te Rural Crime Survey hou a Federated Farmers e 67% o ngā kaiahuwhenua i pā ki te hara, i piki mai i te 41% i te 2016
And kāore te tata ki te haurua o ngā kaiahuwhenua e whakamōhio i ngā take ki ngā pirihimana
And o ērā e whakamōhio, 15% anake ka kite i te kaipahua e tūhuratia, e whakawhiua
When ka utua a Ngā Pirihimana o Aotearoa ki te nui ake o te noho taiwhenua
Then ka wātea ake te wā āpiha i ngā patarō taiwhenua
Output 100,000 extra patrol hours each year
And a dedicated rural crime unit established
Outcome ka kite ngā kaiahuwhenua i te nui ake o te wā pirihimana i te tuawhenua
But ehara ngā hāora mahi i te ōrite ki ngā kaipahua kua whakawāteatia, kua whakawhiua rānei

Scenario: Ka taka tētahi waea reo i tētahi wāhi he kino te hipoki
Given ngā wāhi taiwhenua kāore e pono te reo waea pūkoro
When ka whakawhānuitia te āheinga mō Text 111 ki aua wāhi
Then ka taea e te tangata te tūhono ki ngā ratonga ohorere mā te kupu ina hinga te waea reo
Outcome ka heke te wehe i te wāhi whakapā
But ka tatari tonu tētahi kupu ki tētahi ka taea te whakautu ā-tinana

Scenario: Ka whakatauhia te hopu ā-rākau, te tāhae kararehe rānei
When ka whakakaha ngā whiu me ngā hara mō ngā kaihopu ā-rākau me te tāhae kararehe
Then ka kaha ake te ture mō aua hara
Outcome ka noho te ārai i te rārangi whiu
But ka ngau ngā whiu ā-ture kaha ake ina whakatau ngā kōti i ngā whiu e tata ana ki te tihi o te awhe
