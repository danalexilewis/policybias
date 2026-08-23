---
type: spec
id: opportunity-healthy-people
title: "He mahere hauora tekau tau, ngā rōpū katoa; he whakapau-kia-ora mō te taurima tuatahi; ka whakahokia te ture auahi-kore"
status: draft
updated: 2026-08-21
summary: Whakamaheretia te hauora mō ngā tau tekau i waenga i ngā rōpū, whakatakotoria te pūtea ki te taurima tuatahi me te ārai e kī ana te whārangi ka ora $13 mō ia $1, ā, whakahokia te ture auahi-kore.
jurisdiction: NZ
sources:
  - title: Healthy People
    url: https://www.opportunity.org.nz/healthy_people
tags:
  - healthcare
party: opportunity
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/healthy_people.md
sourceDigest: "sha256-59d91a23e3a12473"
gaps:
  - kāore i inehia te whakapau pūtea taurima tuatahi me te ārai
  - kāore i whakapuakina ngā pikinga pūtea mō ngā waka tūroro, ngā tākuta whānau me te hanganga
  - kāore i whakapuakina ngā nama utu kaimahi hauora me ngā wāhi whakangungu
  - kāore i rārangitia ēhea tautuhinga auahi-kore 2025 ka whakahokia
  - kāore i whakapuakina me pēhea te here o te mahere tekau tau i tētahi kāwanatanga o muri
  - e tohu ana te whārangi kei te whakarewa tonu te kaupapa here taipitopito
lang: mi
translationOf: opportunity-healthy-people
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-4f378da1c7332223
---

# Ko tā te whārangi e kī ana

> Ka taea e te taurima tuatahi me te ārai te whakaheke i ngā utu hauora whānui inā utua mō te wā roa. Ka tautoko tētahi mahere hauora tekau tau, ngā rōpū katoa, i te taurima tuatahi whakapau-kia-ora, te pūtea tika mō ngā waka tūroro, ngā tākuta whānau me te hanganga, ngā utu me te whakangungu pai ake mō ngā kaimahi hauora, me te ture auahi-kore 2025 kua whakahokia. Kei te whakarewa tonu te kaupapa here taipitopito.

System: Tāngata hauora

Scenario: Ka utua te taurima tuatahi me te ārai i runga i te ara tekau tau
Given ka ora $1 e whakapaua ana ki te taurima tuatahi i tua atu i te $13 o ngā utu pūnaha hauora whānui
When ka hangaia tētahi mahere hauora tekau tau, ngā rōpū katoa
Then ka whakarewaina ngā kaupapa taurima tuatahi me te ārai whakapau-kia-ora, tae atu ki te hauora matihiko me ngā taputapu AI
And ka tika te pūtea mō ngā waka tūroro, ngā tākuta whānau me te hanganga hauora
And ka pai ake ngā utu me ngā āhuatanga o te rāngai hauora, me te nui ake o ngā wāhi whakangungu
And ka whakahokia te ture auahi-kore 2025
Outcome ka āraitia te tūroro me te whara i tēnei rā kia iti ake te whakapau a te pūnaha āpōpō
Activates opportunity-citizens-voice
