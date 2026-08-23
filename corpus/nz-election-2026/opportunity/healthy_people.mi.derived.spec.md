---
type: spec
id: opportunity-healthy-people-derived
title: "Ko te Healthy People e pānuitia ana hei pūnaha: he hokinga $13 e hiahia ana i te $1 i te tuatahi"
status: draft
updated: 2026-08-18
summary: Ko te kerēme $1-ki-te-$13 he pāpātanga hokinga, ehara i te tahua; ki te kore he nama tāra taurima tuatahi, e kore e taea te rēhita i te penapena, ā, kāore tētahi mahere tekau tau e here i te Pāremata e whai ake i a ia anake.
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
derivesFrom: opportunity-healthy-people
assumptions:
  - ko te $13 ka penapenatia mō ia $1 he pāpātanga kua tāia, ehara i te toha pūtea; kāore mātou e kī he moni kei te Tahua tuatahi
  - me whai ture, pūtea rānei kua raka tētahi mahere tekau tau ā-rōpū-maha kia ora i te huringa kāwanatanga; ehara tētahi tukanga i tērā raka
  - ko te whakahoki i ngā tautuhinga auahi-kore 2025 he hurihanga ture motuhake, ā, kei te wā o te pāhi te toenga o ngā tau pānga
sourceDigest: "sha256-59d91a23e3a12473"
lang: mi
translationOf: opportunity-healthy-people-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7b7a5b82d515afbd
---

# Tō mātou māramatanga

> E kīia ana ka penapenatia te $13 i muri mai mō ia $1 ki te taurima tuatahi, i te taha o tētahi mahere tekau tau ā-rōpū-maha me te whakahoki i te auahi-kore 2025 — engari he kerēme te $1, ehara i te toha pūtea, ā, kāore te mahere e here i tētahi Pāremata ā muri ake.

System: He hokinga e hiahia ana i te whakapau i te tuatahi

Scenario: Kāore anō te $1 i te Tahua
Given he $13 e kīia ana ka penapenatia puta noa i te pūnaha mō ia $1 o te taurima tuatahi
When ka tuhia te Tahua tuatahi
Then e kore e taea te rēhita i te penapena ki te kore e whakapauhia tūturu te $1
Outcome ka taea e te ārai te whakaiti i ngā utu hōhipera o muri mēnā ka tū te whakapau, ka mau hoki
But me utu anō te Karauna i te tāra tuatahi i mua i te rēhita i ngā piriona
Activates opportunity-tax-reset

Scenario: Ka riro i tētahi kāwanatanga o muri te mahere tekau tau
When ka tae tētahi Pāremata hou
Then ka taea te waiho tētahi mahere kāore he ture
Outcome ko te tukanga ā-rōpū-maha o te kaupapa here te raka e whāia ana
But ka taea e te kāwanatanga e whai ake te whakamutu i te mahere kia rite ki tētahi huringa toru tau
Activates opportunity-intergenerational-infrastructure
