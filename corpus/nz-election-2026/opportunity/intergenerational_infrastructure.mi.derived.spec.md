---
type: spec
id: opportunity-intergenerational-infrastructure-derived
title: "Ko te hanganga e pānuitia ana hei pūnaha: he ture tiaki 60% e matekai ana i te hanga hou ki te kore e tupu te kōpaki"
status: draft
updated: 2026-08-18
summary: Ko te raka i te 60% o te whakapau ā muri ki te tiaki te tikanga ka whakataetae ngā hōhipera hou me ngā raina mō te 40% e toe ana ki te kore e tupu te kōpaki katoa; ko te $60 piriona o te nama tāpiri tērā tupu, ā, me whakapau pai tonu.
jurisdiction: NZ
sources:
  - title: Intergenerational Infrastructure
    url: https://www.opportunity.org.nz/intergenerational_infrastructure
  - title: Intergenerational infrastructure policy
    url: https://cdn.opportunity.org.nz/documents/policy/intergenerational-infrastructure.pdf
tags:
  - infrastructure
party: opportunity
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/intergenerational_infrastructure.md
derivesFrom: opportunity-intergenerational-infrastructure
assumptions:
  - ka tapahi te 60% o tētahi kōpaki mau ki te tiaki i te wāhanga hanga hou; ko te pūtea $60 piriona te mea e ora ai te hanga hou
  - he utu tōrangapū tētahi Pire tūmatanui hei whakakore i tētahi kaupapa neke atu i te $250 miriona, ehara i te raka ā-tinana — ka taea e te nuinga te pāhi i te Pire
  - ko te $150 miriona toenga mō te waka tūmatanui kore utu he kōwhiringa whakahaere motuhake e noho ana ki tētahi kāri hanganga; ka tau te ngaronga pouaka utu ki te Karauna
sourceDigest: "sha256-0fbcde7d08fa59fd"
lang: mi
translationOf: opportunity-intergenerational-infrastructure-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c86116ff9b7b2e59
---

# Tō mātou māramatanga

> E ono tekau ōrau o te whakapau hanganga ā muri ka haere ki te tiaki, me te $60 piriona i roto i ngā tau tekau me te $150 miriona toenga mō te waka tūmatanui kore utu. Ki tētahi kōpaki kua tio, ka whakaiti tērā ture i te hanga hou, ā, ka taea e te nuinga te whakakore i tētahi kaupapa neke atu i te $250 miriona mā te pāhi i te Pire.

System: Te tiaki i te tuatahi, te hanga hou mai i te nama tāpiri

Scenario: Ka rāhuitia te ono tekau ōrau mō te tiaki
Given e haere ana te 60% o te whakapau hanganga ā muri ki te tiaki me te whakahou
When kāore te kōpaki e tupu
Then ka whakataetae ngā hōhipera hou me ngā raina mō tērā e toe ana i muri i te tiaki
Outcome ka roa ake ngā rawa o nāianei
But ka whakataetae ngā hōhipera me ngā raina mō tētahi wāhanga e whakaiti haere ana ki te kore te pūtea $60 piriona e whakawhānui i te kōpaki
Activates opportunity-tax-reset

Scenario: E hiahia ana tētahi kāwanatanga o muri ki te whakakore i tētahi kaupapa
Given me whai Pire tūmatanui hei whakakore i tētahi mea neke atu i te $250 miriona
When kei taua kāwanatanga ngā pōti
Then ka taea te pāhi i te Pire
Outcome he pōturi ake, he tūmatanui ake te whakakore i tētahi maka noa
But he nuinga tonu te nuinga
Activates opportunity-citizens-voice
