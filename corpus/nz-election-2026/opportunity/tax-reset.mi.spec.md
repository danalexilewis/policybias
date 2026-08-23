---
type: spec
id: opportunity-tax-reset
title: "Moni Whiwhi Kirirarau, tāke uara whenua, me te KiwiSaver 2.0 here"
status: draft
updated: 2026-08-21
summary: He Moni Whiwhi Kirirarau ā-wiki kia $370, e utua ana e tētahi tāke uara whenua tāone 1.75%, me ngā takoha KiwiSaver here e piki ana ki te 6% ia te kaimahi me te kaituku mahi.
jurisdiction: NZ
sources:
  - title: Tax Reset
    url: https://www.opportunity.org.nz/tax-reset
  - title: Tax Reset policy overview
    url: https://cdn.opportunity.org.nz/documents/policy/Opportunity Policy - Tax Reset.pdf
tags:
  - taxation
  - superannuation
  - cost-of-living
party: opportunity
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/tax-reset.md
sourceDigest: "sha256-a65b509e32452db7"
gaps:
  - kāore i whakapuakina te rā tīmata mō te rōpū pakeke tuatahi
  - kāore i whakapuakina me pēhea te utu whenua mō te tāke, me te auau
  - ka waiho mō te hoahoa o muri te whakahaere o ngā kaimahi RSE me te wā poto
  - kāore i whakapuakina me pēhea te toha o te $4 billion ia tau e toe ana
  - kāore i whakaahuatia te wāhanga tāngata e toe ana i muri i te 70% e whai hua ana me te 20% kāore e kite huri
  - kāore i whakapuakina ko wai e utu ana ki te utu whenua tāone me te taiwhenua i te tīmatanga
lang: mi
translationOf: opportunity-tax-reset
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b48d5375a6f05a1e
---

# Ko tā te whārangi e kī ana

> Ka whakakapi te Moni Whiwhi Kirirarau ā-wiki i te nuinga o ngā tautoko pūtea, e utua ana e tētahi tāke uara whenua ki te whenua kāore anō kia whakapai, ā, ka whakahekea te tāke moni whiwhi ki ngā taumata e toru. Ka herea te KiwiSaver 2.0, ā, ka piki ngā takoha i roto i ngā tau e waru. Ka rere te whakawhitinga i roto i ngā tau tekau, ka tīmata ki ngā tāngata rangatahi. Kāore te utu ā-tau e ranea hei oranga.

System: Whakahou tāke — Moni Whiwhi Kirirarau, tāke uara whenua, me te KiwiSaver 2.0

Scenario: Ka whiwhi tētahi kirirarau pakeke i te Moni Whiwhi Kirirarau
Given tētahi pūnaha tautoko pūtea e taea te tāke i ngā huringa tāpiri kia 90%
And kua utua kē te penihana kaumātua hei moni whiwhi tata-whānui mō ngā kaumātua
When ka utua te Moni Whiwhi Kirirarau
Then ka whiwhi te nuinga o ngā pakeke 18 tau, nui ake, e tutuki ana i ngā ture noho noa i tētahi utu ā-wiki
And ka whakakapia te nuinga o ngā tautoko pūtea, me ngā tāpiri mō ngā kaipenihana, ngā mātua me ētahi atu
And kāore tētahi i runga i tētahi tautoko pūtea o nāianei e whiwhi iti iho i tōna nāianei
Output kia $370 ia wiki
And $19,400 ia tau e utua ana ia wiki ki te nuinga o ngā pakeke
And 50,000 whānau, nui ake, e hiki ana i te pōharatanga i runga i te ine BHC50
And e toru ngā taumata tāke moni whiwhi: 28% ki te $50,000, 34% ki te $200,000, me te 39% ki runga
And 2,000 tūranga o Te Manatū Whakahiato Ora ka whakamahia anō
And $1.7 billion, nui ake, i ngā penapena whakahaere
And ka piki ngā moni whiwhi mō te 70% o ngā tāngata o Aotearoa
And kāore te 20% e kite huri
Outcome ka utu tonu te mahi
But kāore te utu ā-tau e ranea hei oranga

Scenario: Ka tākea te whenua tāone me te taiwhenua ia tau
When ka utua tētahi Tāke Uara Whenua ki te uara whenua kāore anō kia whakapai
Then ka iti ake te hua o te rāhuitanga whenua me ngā kohinga nui
Output 1.75% o te uara whenua tāone e utua ana ia tau
And 0.5% o te uara whenua taiwhenua e utua ana ia tau
And tata ki te $24 billion ia tau e kohia ana mai i te tata ki te $1.7 trillion o te whenua
And tata ki te $4 billion ia tau e toe ana i muri i te utu i te Moni Whiwhi Kirirarau
And he heke 10-15% e matapaetia ana i ngā utu rawa
Outcome ka heke ngā utu whare, ā, ka panaia te haupū ki ngā pakihi
And ka taea e ngā kua reti te tārewa i te tāke kia tae rā anō ki tō rātou wāhanga
And ka taea e ngā kaipāmu te tārewa i te wā uaua, me te whakawātea i te whenua tiaki taiao pupuri tūmataiti
Activates opportunity-affordable-housing

Scenario: Kua tino mana te KiwiSaver 2.0
When kua tino mana te KiwiSaver 2.0 i muri i ngā tau 8
Then ka takoha ia kaimahi e tika ana, ka takoha hoki ngā kaituku mahi
Output 12% o ngā whiwhinga katoa (6% kaituku mahi me te 6% kaimahi)
And ngā reiti takoha e piki ana mā te 0.5 ōrau ia tau kia tae rā anō
And tētahi puna penapena ā-whare e eke ana ki runga ake i te $1 trillion i roto i ngā tau 20
Outcome ka hanga ia kaimahi i ngā penapena reti, ā, ka taea e te puna te pūtea hanganga
Activates opportunity-intergenerational-infrastructure
