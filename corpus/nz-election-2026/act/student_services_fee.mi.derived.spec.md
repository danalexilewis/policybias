---
type: spec
id: act-student-services-fee-derived
title: "Ngā utu tūao e pānuitia ana hei pūnaha: ka ngaro i ngā ratonga tētahi utu tāpiri here"
status: draft
updated: 2026-08-21
summary: Ko te hanga i te Student Services Fee hei rārangi ki te tuanui o nāianei te mutunga o te utu tāpiri here i utu i ngā ratonga whare wānanga, nā reira ka whakaiti ngā unu i te puna moni kua oati.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/student_services_fee
tags:
  - education
  - cost-of-living
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/student_services_fee.md
derivesFrom: act-student-services-fee
assumptions:
  - ko te utu here he utu tāpiri e utu ana i ngā ratonga ahakoa ka whakamahi, kāore rānei, ia ākonga
  - ina noho tūao te utu, ka mutu te takoha a ngā ākonga e unu ana ki tērā utu tāpiri
  - ka pā ngā ratonga i whakawhirinaki ki te puna here ki tētahi papa moni kua oati iti ake
  - ko te utu-kaiwhakamahi mō ngā ratonga kāore i tīpakohia e neke ana i te utu ki ērā e hiahia tonu ana, i ngā utu kāore te kaupapa here e whakatau
sourceDigest: "sha256-ebcde03da21fe1cc"
lang: mi
translationOf: act-student-services-fee-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5f934e7243575732
---

# Tō mātou māramatanga

> Ko te kōwhiringa me te whakaora nama te mutunga o te utu tāpiri here e utu ana i ngā ratonga ākonga i nāianei. Ina noho te utu hei rārangi, ka ngaro i ngā whare wānanga te moni kua oati mai i ngā ākonga e unu ana.

System: Ngā ratonga ākonga e utua ana nā te kōwhiringa, ehara nā tētahi utu tāpiri

Scenario: Ka pā tētahi ākonga ki te utu ā-tau hei rārangi
Given ka utu ia ākonga whare wānanga ā-kāinga i nāianei i tētahi Student Services Fee here ki te $1,253 ia tau i runga ake i te utu ako
When ka whakatikahia ngā waeture kia tuku ngā whare wānanga i ngā ratonga ākonga hei rārangi
Then ka tīpako, ka utu te ākonga i ngā ratonga kua tīpakohia anake
Output up to around $4,000 saved on a student loan over a three-year degree for a student who takes none of the menu
Outcome ka mutu te utu tāpiri here mō tērā ākonga

Scenario: Ka ngaro i ngā ratonga whare wānanga ngā takoha here
Given ka utua ngā ratonga mai i ngā wāhi koiri ki ngā uniana ākonga me ngā pāpāho ākonga i nāianei mā te utu here
When ka whakakāhore te maha o ngā ākonga i aua mea i te rārangi
Then kāore aua ratonga e whiwhi anō i tētahi takoha kua oati mai i ia ākonga ā-kāinga kua rēhita
Outcome ka wātea ngā ratonga kāore i tīpakohia i runga i ngā here utu-kaiwhakamahi anake
But ka heke ngā tahua ratonga ina unu ngā ākonga i te rārangi

Scenario: Ka heke te tautoko kaipākeha i te nama ākonga ki ngā nama iti ake
Given ka tautokona ngā nama ākonga e te kaipākeha
When he iti ake ngā ākonga e nama mō tētahi utu here kāore rātou e nama anō
Then ka tupu pōturi ake te nama kua tautokona mō tērā wāhanga
Outcome ka penapena te kaipākeha i te moni i te tautoko nama e pā ana ki te utu
But ki te nui anake o te unu tūturu a ngā ākonga
