---
type: spec
id: opportunity-tax-reset-derived
title: "Ko te Tax Reset e pānuitia ana hei pūnaha: he utu whenua ā-tau e pūtea ana i tētahi pae moni, me te tūraru wā me te hopu"
status: draft
updated: 2026-08-18
summary: Kāore i rite ki tētahi tāke i te hokonga, ka tika te utu whenua ā-tau ahakoa kāore te kaipupuri e hoko; ka taea tonu te hopu i te pae moni hei rēti kia tae rā anō ngā kāinga tāpiri, ā, ka tōmuri te āhua tahua kua tāia mā tētahi whakaurunga 10-tau.
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
derivesFrom: opportunity-tax-reset
assumptions:
  - e kore e taea te tōmuri i tētahi tāke ā-tau ki te whenua mā te pupuri, he rerekē tērā i tētahi tāke ka utua anake i te hokonga; nā mātou tērā whakatairite, ehara i te kerēme kua tāia
  - ka taea te tono i tētahi whakawhitinga moni ki tētahi mākete rēti kuiti hei rēti kia piki rā anō te tuku; ka whakaingoatia tēnei tūraru e te kaupapa here, ā, e kī ana ko te tāke whenua te aukati, engari kāore e wāhia te roa o tērā
  - ko tētahi whakawhitinga 10-tau ka tīmata ki ngā tāngata rangatahi te tikanga kāore te kohinga tāke whenua $24 piriona katoa me te Citizen's Income whānui e tae i te tau tuatahi
  - he neke kaimahi tonu te whakamahi anō i ngā tūranga 2,000 o Te Manatū Whakahiato Ora ahakoa kua tapaina hei whaihua
  - he utu mahi tētahi takoha kaituku mahi 6% here ka taea te tau ki ngā utu, ngā utu hoko rānei; kāore te kaupapa here e whakatau i te pānga
sourceDigest: "sha256-a65b509e32452db7"
lang: mi
translationOf: opportunity-tax-reset-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-36a35fb3ad794dbf
---

# Tō mātou māramatanga

> Ko te tāke whenua ā-tau e whāia ana te $24 piriona me te $4 piriona pea e toe ana i muri i te Citizen's Income, i te taha o tētahi ara utu whare 10–15% kua matapaehia me tētahi pae moni $19,400 ā-tau kāore e rahi hei oranga. Ka taea e ngā rēti te horomi i te whakawhitinga kia piki rā anō te tuku; he iti ake te kohi o ngā tau tuatahi i te āhua kua oti te whakaurunga, ā, ka tau te wāhanga KiwiSaver a te kaituku mahi ki te pire utu.

System: Ko te Tax Reset hei utu whenua ā-tau e pūtea ana i tētahi pae moni

Scenario: Ka pā te tāke whenua ā-tau ki tētahi kaipupuri iti-moni
Given he tāke e tika ana ia tau ki te whenua, ahakoa kāore te kaipupuri e hoko
And tētahi kaipupuri he nui te whenua, he iti te moni whiwhi
When ka tika te tāke whenua o te tau
Then e kore e taea te karo i te pire mā te pupuri
Outcome tērā pea ka tōmuri tētahi kaumātua kia tae rā anō te wāhanga, he kerēme ki te wāhanga, ehara i te mukunga
But me kimi moni tētahi kaipāmu, kaipupuri kāinga pakeke rānei kāore he tōmuri, mai i te moni whiwhi, te nama, te hoko rānei

Scenario: Ka whiwhi tētahi kai-rēti i te Citizen's Income i tētahi mākete whare kuiti
Given $370 ia wiki ka utua hei moni
And tētahi mākete whare e kī ana te kaupapa here anō ka taea te horomi i tētahi whakawhitinga moni hei rēti
When ka utua te Citizen's Income i mua i te hanga kāinga tāpiri
Then ka taea ētahi o te whakawhitinga te riro ki te kaipupuri whare hei rēti teitei ake
Outcome ko te tāke whenua te wāhanga e whāia ana hei aukati i tērā hopu, mā te utu nui i te pupuri whenua wātea, iti-whakamahia rānei
But kia tupu tūturu rā anō te tuku, ka neke tahi te pae moni me te rēti
Activates opportunity-affordable-housing

Scenario: Kei te haere te whakawhitinga 10-tau
Given he ara tekau-tau e piki āta ana i ngā pāpātanga tāke whenua, ā, e utu ana i te Citizen's Income ki ngā rōpū pakeke e whai ake, ka tīmata ki ngā tāngata rangatahi
When ka rere ngā tau tuatahi
Then ka noho roa ake ngā rōpū pakeke ki ngā tautuhinga tautoko pūtea me te Super o nāianei
# extrapolated: the full $24 billion and universal payment are the completed system, not year one
Output he iti iho i te $24 piriona ā-tau kia oti rā anō te whakaurunga o te tāke whenua
Outcome ko te toenga kua tāia, tata ki te $4 piriona ā-tau, he nama pūnaha kua oti, ehara i te nama tau tuatahi
But ka pā ki ngā tāngata kei te mākete whare kē tētahi ara utu 10-15% kua matapaehia i te wā e horahia ana te pae moni

Scenario: Ka utua te KiwiSaver 2.0 ki te utu
Given tētahi takoha kaituku mahi 6% here ina oti te pikinga 8-tau
When ka utua e te kaituku mahi tērā 6%
Then ka noho te utu ki te hononga mahi
Outcome ka tupu ngā toenga penihana, ā, ko te puna $1 piriona o te kaupapa here he rawa 20-tau
But ka neke te utu kawe-ki-te-kāinga, ngā utu hoko rānei, hei pūtea i te wāhanga kaituku mahi — ka kawea e ngā kaimahi me ngā kaihoko tērā e kōwhiria ana e te kaituku mahi
Activates opportunity-intergenerational-infrastructure
