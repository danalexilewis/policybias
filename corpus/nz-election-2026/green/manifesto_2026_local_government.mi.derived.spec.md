---
type: spec
id: green-manifesto-2026-local-government-derived
title: "Ko te kāwanatanga ā-rohe e pānuitia ana hei pūnaha: ngā taputapu whakamana kāore he reiti kua whakatauhia, me te tuku mana e hiahia tonu ana ki te pūtea"
status: draft
updated: 2026-08-21
summary: He mana ngā reiti moenga, te utu kōkiri me ngā taputapu tāke hokohoko (GST), ehara i te reiti kua tāia, ā, ka tiakina e te whakahē i tētahi paepae reiti te rūma reiti, kāore e hanga moni whiwhi mā tērā anake.
jurisdiction: NZ
sources:
  - title: Local Government
    url: https://www.greens.org.nz/manifesto_2026_local_government
tags:
  - democracy
  - infrastructure
party: green
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_local_government.md
derivesFrom: green-manifesto-2026-local-government
assumptions:
  - ko te whakamana i tētahi reiti moenga, i te utu kōkiri, i tētahi taputapu tāke hokohoko (GST) mai i ngā reiti rānei he mana; kāore e whakatau i tētahi reiti, e whakapūmau rānei i te moni whiwhi kia whakamahia rā anō e tētahi kaunihera
  - ka aukati te whakahē i tētahi paepae reiti kua marohitia i tētahi tuanui; ehara i te mea ka tāpiri pūtea ki ngā tahua kaunihera mā tērā anake
  - me whai rārangi Tahua tonu te tuku i ētahi atu haepapa "me te pūtea e tika ana"; ki te kore, ka neke te mahi kāore te moni
  - ka whakahokia e te whakamana anō i ngā wāri Māori tētahi kōwhiringa kaunihera; kāore e kī kia pupuri ia takiwā i tētahi
sourceDigest: "sha256-75d8b6f9e08b0ad1"
lang: mi
translationOf: green-manifesto-2026-local-government-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7c6619cce8d85297
---

# Tō mātou māramatanga

> Ka neke ngā pōtitanga ā-rohe ki te Electoral Commission, ka heke te pōti ki te 16 me te STV, ka hoki ngā wāri Māori, ka whakahēngia tētahi paepae reiti, ka whakamanatia ngā reiti moenga me te utu kōkiri, ā, ka tautokona ngā huihuinga kirirarau. Kāore he nama i ngā reiti o ngā reiti moenga, i ngā rārangi tuku mana, i te pūtea e whai ana i te mahi.

System: Ngā mana ā-rohe me ngā taputapu, kāore he reiti, he pūtea rānei kua tāia

Scenario: Ka whakamanatia ngā taputapu pūtea hou
When ka taea e ngā kaunihera te whakamahi i tētahi reiti moenga, i te utu kōkiri, i te tāke hokohoko (GST) mai i ngā reiti me te tupu
Then ka riro i ngā kaunihera ētahi taputapu i tua atu i ngā reiti anake
Outcome ka taea e ngā kaunihera te tāpiri i ngā reiti moenga, i ngā utu kōkiri, i ngā taputapu tāke hokohoko (GST) rānei ki tō rātou kete
But ka utu ngā kaipupuri reiti ina whakatau ngā kaikaunihera i ngā reiti, ā, ina whakamahi tūturu ngā taraiwa i ngā utu

Scenario: Ka whakahēngia te paepae reiti kua marohitia
When ka whakahēngia te paepae reiti kua marohitia
Then ka mau tonu i ngā kaunihera te rūma ki te whakatau reiti kāore tērā tuanui
Outcome ka tiakina te mana reiti ki tērā o te huarahi kua paepaehia
But kāore te whakahē i tētahi paepae e hanga moni whiwhi hou mā tērā anake

Scenario: Ka tukuna ngā haepapa me te "pūtea e tika ana"
When ka neke ētahi atu haepapa mai i te kāwanatanga matua ki te kāwanatanga ā-rohe, ko ngā toiora e whā te aronga matua
Then kei ngā kaunihera te nuinga ake o te mahi o ia rā
Outcome kei ngā kaunihera ētahi atu haepapa o ia rā i raro i ngā toiora e whā
But ka riro i ngā kaimahi te mahi i mua i te ōrite o tētahi rārangi Tahua ki te whakawhiti
Activates green-manifesto-2026-democracy
