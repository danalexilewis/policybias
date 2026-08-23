---
type: spec
id: act-stopping-coercion-derived
title: "Te āki kararehe hoa e pānuitia ana hei pūnaha: he hara e whitu tau, me ngā Protection Orders e pupuri ana i te mōkai"
status: draft
updated: 2026-08-21
summary: Ka noho te tūkino kararehe hoa āki hei hara Crimes Act me te tuanui teitei, i te wā e kati ana ngā Protection Orders me ngā mana tango i te āputa e waiho ana i te mōkai ki te kaipahua e whakapaetia ana.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/stopping-coercion
tags:
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/stopping-coercion.md
derivesFrom: act-stopping-coercion
assumptions:
  - ka whakatakoto te nui rawa e whitu tau i te taumaha o te tūkino kararehe āki ki te taha o ētahi atu hara tūkino-whānau; kei te kōti tonu ngā whiu tūturu
  - ka huri ngā here Protection Order e ārai ana i te pupuri, te hoko, te tuku rānei i te tangata e pupuri ana i te kararehe i muri i te ota, he mea wehe i te whakapae hara
  - ko te tuhi i ngā mōkai ki ngā pūrongo hara whānau he hipanga mōhiohio e āwhina ana mēnā anake ka whai ngā here tango, ota rānei
  - e whakapae ana kei te wātea te kaha noho a Pet Refuge me te SPCA ina tango a Ngā Pirihimana o Aotearoa i tētahi kararehe; kāore te kaupapa here e utu i tērā kaha
sourceDigest: "sha256-e077eb9749eb2def"
lang: mi
translationOf: act-stopping-coercion-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ff0432f5382494f7
---

# Tō mātou māramatanga

> Ka whakatauhia te tūkino kararehe hoa āki hei hara, ka whakakaha ngā Protection Orders, ā, ka whiwhi a Ngā Pirihimana o Aotearoa i te mana tango. E rua ngā taputapu te hara e whitu tau me te ara ota-me-tango: ko tētahi e whiu, ko tētahi e pupuri i te mōkai ki waho o ngā ringa o te kaipahua.

System: He whiu hara me te tiaki ā-ture mō ngā mōkai e whakamahia ana hei āki

Scenario: Ka tūkino tētahi kaipahua i tētahi mōkai ki te whakahaere i tētahi hoa
Given tata ki te 11 ngā wā nui ake te tūpono o ngā hoa tūkino ki te tūkino ā-whakaaro i tētahi kararehe i ngā hoa i ngā hononga ehara-tūkino
And nui ake i te haurua o ngā tāngata i pā i whakaroa i te wehe i tētahi hononga tūkino nā te mea i pīrangi rātou ki te haumaru o ā rātou mōkai
When ka hanga te Crimes Act i te whakamahi i te tūkino kararehe hoa hei āki, hei whakahaere rānei, hei hara
Then ka taea te whanonga te whakapae hei hara ake
Output a penalty of up to seven years in imprisonment
Outcome ka kitea te whakamahi āki i tētahi mōkai hei tūkino hara nui
But he nui rawa te tuanui, ehara i te whiu noa

Scenario: Ka hangaia tētahi Protection Order, ā, kei te mōrearea te mōkai
When ka whakakaha ngā Protection Orders mō ngā kararehe hoa
Then kāore e taea e te kaipahua te pupuri, te hoko, te tuku, te tuku atu rānei i te kararehe a te tangata kua tiakina
Outcome ka noho te mōkai ki te tangata kua tiakina, ehara hei taputapu whiriwhiri
But ka āwhina te Order ina hangaia, ina whakamanahia anake

Scenario: Ka tae a Ngā Pirihimana o Aotearoa, ā, ka wehe te tangata i pā kāore te mōkai
Given ka taea e te tangata i pā te oma i tētahi karanga i te wā ka waiho te mōkai whānau ki te kaipahua e whakapaetia ana
When kei a Ngā Pirihimana o Aotearoa te mana mārama ki te tango i tētahi kararehe hoa ki tētahi wāhi haumaru pērā i a Pet Refuge, i te SPCA rānei
Then kāore e mate te kararehe ki te noho ki te kaipahua e whakapaetia ana i taua pō
Outcome ka mutu te mōkai hei herehere i te wāhi
But ka hāngai tonu te tango ki te ārahitanga whakahaere me te wātea o tētahi noho haumaru
