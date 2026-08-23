---
type: spec
id: green-tax-system-for-all-derived
title: "Ko te mahere tāke e pānuitia ana hei pūnaha: ka utu ngā tāke rawa me ngā utu kamupene i tētahi tapahi tāke moni whiwhi"
status: draft
updated: 2026-08-21
summary: Ka tau te tāke rawa 2.5% me ngā reiti kamupene ki ngā kaipupuri rawa me ngā pakihi nui; ko te pae tāke-kore $10,000 he tapahi tāke moni whiwhi mō te nuinga o ngā kaiputa moni, ehara i te whakawhiti rawa i a ia anake.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/tax_system_for_all
  - title: Greens commit to tax the super-rich and large corporates fairly, cut income tax for 96%
    url: https://www.greens.org.nz/greens_commit_to_tax_the_super_rich_and_large_corporates_fairly_cut_income_tax_for_96
  - title: Greens tax policy 2026
    url: https://assets.nationbuilder.com/beachheroes/pages/71965/attachments/original/1782084525/GreensTaxPolicy2026.pdf
tags:
  - taxation
  - economy
  - cost-of-living
party: green
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/green/tax_system_for_all.md
derivesFrom: green-tax-system-for-all
assumptions:
  - ko tētahi tāke ki ngā rawa toenga i runga ake i tētahi pae e tau ana ki te kaipupuri rawa e aromatawaihia ana, ehara ki ngā kaimahi utu i raro i te pae; e whakaingoatia ana e te kaupapa here te tūāpapa, engari ehara te reo pīkaunga
  - ka taea e tētahi reiti kamupene teitei ake me tētahi reiti pēke te neke ki ngā utu, ngā utu mahi, ngā painga rānei; e kite ana te kaupapa here i ērā hei tikanga tōkeke, kāore e whakatau i te whakawhiti atu
  - ko tētahi pae tāke-kore ki ngā tāra tuatahi o te moni whiwhi he tapahi tāke moni whiwhi mō te nuinga o ngā kaiputa moni, tae atu ki te hunga kāore rawa e utu i te tāke rawa
  - kei te kohinga o ngā tikanga rawa me ngā tikanga kamupene tonu te tapeke toenga kua tāia i muri i ngā utu whakatakoto tāke; ka kuti tētahi korenga i te tapahi, i ētahi atu whakapau rānei
sourceDigest: "sha256-a127e80197aa1d77"
lang: mi
translationOf: green-tax-system-for-all-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-4cd3948f25f34c9a
---

# Tō mātou māramatanga

> Ka utu ngā tāke rawa me ngā utu kamupene i tētahi tapahi tāke moni whiwhi. Ko tētahi tāke 2.5% ki ngā rawa toenga i runga ake i te $10 million, tētahi reiti kamupene teitei ake, me tētahi reiti pēke, ka tau tuatahi ki ngā kaipupuri rawa me ngā pakihi nui. Ko te pae tāke-kore $10,000 he tapahi mō te nuinga o ngā kaiputa moni, tae atu ki te hunga kāore rawa e utu i te tāke rawa. Ka taea tonu e ngā utu, e ngā utu mahi rānei te tango i ngā utu kamupene.

System: Ngā tāke rawa me ngā utu kamupene e utu ana i tētahi tapahi tāke moni whiwhi

Scenario: Ka aromatawaihia tētahi kaipupuri rawa i runga ake i te pae rawa toenga
Given he tāke ā-tau 2.5 ōrau ki ngā rawa toenga i runga ake i te $10 million, kua whakawāteatia te kāinga whānau
When ka tae te wā aromatawai
Then ka noho te nama ki te tangata e tākehia ana ōna rawa toenga
Output 2.5 percent tax on net assets above $10 million
And 33 percent Capital Acquisitions Tax on inheritances and gifts above $1 million
Outcome ka kumea te pūtea mai i te rawa kua whakaemi, ehara i ngā utu i raro i te pae
But ko te uara me te wehewehenga tarahiti te whakatau ko wai kei te tūāpapa

Scenario: Ka tūtaki ngā kaporeihana nui me ngā pēke nui ki ngā utu teitei ake
Given ko te reiti tāke kamupene he 28 ōrau mō ngā pakihi i raro i te rārangi pakihi nui
When ka hikitia te reiti kamupene mō ngā pakihi nui rawa, ā, ka whakaurua te reiti pēke
Then ka noho tuatahi te tāke tāpiri ki ngā pūkete o aua pakihi
Output corporate tax at 33 percent for about 0.7 percent of businesses above $30 million turnover
And a Bank Levy of 0.06 percent on liabilities of the four big banks
Outcome ka riro i te Karauna te pūtea mai i ngā puka tino hua
But tērā pea ka utu ngā kaihoko me ngā kaimahi mā ngā utu teitei ake, mā ngā utu mahi iti ake rānei

Scenario: Ka riro i te nuinga o ngā kaiputa moni te pae tāke-kore
Given he pae tāke-kore hōu $10,000
And he reiti hōu 45 ōrau ki te moni whiwhi i runga ake i te $160,000
When ka whakatauhia anō te hōtaka tāke moni whiwhi
Then ka wehe ngā tāra tuatahi o te utu me te utu mahi i te tūāpapa tāke
Output $10,000 of income taxed at 0%
And 45 percent on income over $160,000
And tax-setting changes costing $2,335 million in 2027/28
Outcome ka riro i te 96 ōrau o ngā tāngata tētahi tapahi tāke moni whiwhi, kāore e hiahiatia kia pupuri rawa tāke
But ka utua te tapahi i te wā anake e whakaara tūturu ana ngā tikanga rawa me ngā tikanga kamupene i ngā tapeke kua tāia
