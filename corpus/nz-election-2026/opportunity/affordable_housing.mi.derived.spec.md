---
type: spec
id: opportunity-affordable-housing-derived
title: "Ko te whare noho hei pūnaha: he hekenga utu me mau e ngā kaipupuri kua noho kē"
status: draft
updated: 2026-08-18
summary: Ko te kati i tētahi mākete 7.3-nga-utu ki te 3 ngā utu he ngaronga haupū nui mō ngā kaipupuri kua noho kē; ko te tautoko ā-ture o te pikinga hanga he tūraru Karauna kāore i utuhia.
jurisdiction: NZ
sources:
  - title: Affordable Housing
    url: https://www.opportunity.org.nz/affordable_housing
tags:
  - housing
  - taxation
party: opportunity
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/affordable_housing.md
derivesFrom: opportunity-affordable-housing
assumptions:
  - ko te neke mai i te 7.3 ngā utu ki te 3 ngā utu he hekenga nui o ngā uara kāinga o nāianei, ka mau e ngā kaipupuri kua noho kē; e hiahia ana te kaupapa here kia heke ngā utu engari kāore e ine i te whakawhiti rawa
  - ko te tautoko i "te pakaru" he taunahatanga Karauna ā-pānga, e rahi ana ki te tawhiti o te hekenga utu
  - me tae ngātahi te tāke whenua me te pikinga hanga; he tāke ki te kore ngā kāinga tāpiri ka toe tonu te 80,000-kāinga hapa
sourceDigest: "sha256-1f518a892b703df3"
lang: mi
translationOf: opportunity-affordable-housing-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b8d75b09b20ac4d7
---

# Tō mātou māramatanga

> Me neke te whare noho i te 7.3 ngā utu ki te utu-taea e toru, me te 80,000-kāinga hapa, ā, me heke ngā utu — engari kāore i inehia te ngaronga haupū a ngā kaipupuri kua noho kē me te whakaraerae tautoko-pakaru a te Karauna.

System: He hekenga utu me mau e ngā kaipupuri kua noho kē

Scenario: Ka pupuri tētahi kaihoko tata i roto i te hekenga utu
Given he mākete i te 7.3 ngā utu waenga
And he whāinga kua kīia me heke ngā utu
When ka whai pānga te tāke whenua me te pikinga hanga
Then ka neke te tūtanga a te kaipupuri ki te utu
Outcome he rārangi poto ake mā ngā kaihoko kāore anō kia uru ki te mākete
But ka mau ngā kaipupuri kua noho kē, ina koa ērā i hoko i te tino teitei o ngā utu, i te ngaronga e ngana nei te kaupapa here ki te hanga
Activates opportunity-tax-reset

Scenario: Ka tautoko te Karauna i te pakaru
Given he 80,000-kāinga hapa me te oati ki te tautoko i ngā whanaketanga utu-taea rongonui
When ka pā he hekenga i te wā o te pikinga
Then kei runga te Karauna mō te "pakaru" i tuku ia ki te tango
Outcome ka taea te hanga tonu i ētahi atu kāinga puta i te hurihanga
But ka mau ngā kaipānga tāke i te whakaraerae ka hangaia e te tautoko-pakaru
