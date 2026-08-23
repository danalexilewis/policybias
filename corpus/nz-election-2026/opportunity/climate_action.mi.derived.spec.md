---
type: spec
id: opportunity-climate-action-derived
title: "Ko te Mahi Āhuarangi hei pūnaha: ngā tukunga pāmu kua utua kāore he taputapu kua kīia"
status: draft
updated: 2026-08-18
summary: Ko te whakauru i te ahuwhenua ki te ETS he kōwhiringa pānga nui — utu kaiwhakamahi ki te pāmu — kāore te kaupapa here e mahi; mā te aukati i ngā whakataurite pine ka piki te utu waro mō ētahi atu.
jurisdiction: NZ
sources:
  - title: Climate Action
    url: https://www.opportunity.org.nz/climate_action
tags:
  - climate
  - environment
party: opportunity
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/opportunity/climate_action.md
derivesFrom: opportunity-climate-action
assumptions:
  - ka taea he utu kaiwhakamahi, he pūrongo ā-pāmu, he utu motuhake rānei te tikanga mō ngā tukunga ahuwhenua; he rerekē te pānga, ā, kāore te kaupapa here e kōwhiri
  - mā te aukati i te ngahere tauiwi hōu ka tango i tētahi whakataurite māmā, e piki ai te utu ETS mō ētahi atu kai-tuku ki te kore e tāpirihia ngā waeine ki wāhi kē
  - e hiahia ana ngā mahi kāwanatanga-ā-rohe ā-taiao i tētahi ara pūtea; he tauira pupuri te "tautoko" ki te kore he tāra
sourceDigest: "sha256-2c16328343a90b5f"
lang: mi
translationOf: opportunity-climate-action-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2968023b39dedb76
---

# Tō mātou māramatanga

> Ka uru ngā tukunga ahuwhenua ki te ETS. Ka aukatihia ngā whakataurite pine hōu. Ka whakarite te Commission i ngā tahua. E hiahia tonu ana ngā pāmu i tētahi taputapu e utu ana i te mētein, ā, mā te kati i ngā whakataurite pine ka kaha ake te mākete waro mō ētahi atu.

System: Ngā tukunga pāmu kua utua kāore he taputapu kua kīia

Scenario: Ka uru te ahuwhenua ki te ETS
Given he kaupapa e waiho whānui nei i ngā tukunga pāmu koiora i waho
When ka tāpirihia tētahi tikanga mō ngā tukunga ahuwhenua
Then ka utu tētahi i te mekameka kai
Outcome ka utu tētahi i te mekameka kai i te utu tukunga-pāmu
But ka mau ngā kaiwhakamahi, ngā kaiahuwhenua, ngā kaihoko rānei i te taputapu ka kōwhiria e te Pāremata, ā, ki te kore he urunga ā-wā ka taea e ngā tau tuatahi te pari
Activates opportunity-healthy-land

Scenario: Ka aukatihia ngā whakataurite pine hōu
When ka puritia te ngahere tauiwi hōu i waho o te kaupapa
Then ka katihia tētahi puna waeine māmā
Outcome ko ngā kaupapa oneone me ngā repo ngā whakakapi kua tapaina
But he pōturi ake, he iti ake ērā kaupapa i ngā pine, nā reira ka pā tētahi mākete kaha ake ki ētahi atu kai-tuku
Activates opportunity-healthy-oceans
