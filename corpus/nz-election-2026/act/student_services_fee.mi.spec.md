---
type: spec
id: act-student-services-fee
title: "Me tūao ngā Student Services Fees, me te kōwhiri ā-rārangi"
status: draft
updated: 2026-08-21
summary: Whakatikatika i ngā waeture kia tuku ngā whare wānanga i ngā ratonga ākonga hei rārangi, kia utu ngā ākonga mō ngā ratonga i kōwhiria anake, tae atu ki te $1,253 o nāianei, kaua te utu here.
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
sourceDigest: "sha256-ebcde03da21fe1cc"
gaps:
  - kāore i whakaingoatia ngā waeture ka whakatikahia
  - kāore i whakapuakina te āhua o te utu rārangi mō ia ratonga
  - kāore i inehia te pānga ki te pūtea uniana ākonga
  - kāore he rā tīmata i whakapuakina
  - kāore i āta whakaahuatia te uru utu-kaiwhakamahi mō ngā ratonga kāore i kōwhiria
lang: mi
translationOf: act-student-services-fee
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-712b195a86151485
---

# Ko tā te whārangi e kī ana

> Ka utu ia ākonga ā-whare o te whare wānanga i tētahi Student Services Fee here i runga ake i te utu ako, he nui nā te pūtea tārewa, nā te kaipupuri tāke e tautoko ana. Ka tūao te kaupapa here i ngā utu mā tētahi rārangi ratonga e kōwhiri, e utu ngā ākonga, ā, ka wātea ngā ratonga kāore i kōwhiria i runga i ngā tikanga utu-kaiwhakamahi. Kāore he tohutoro waeture, he rā whakarewa rānei i homai.

System: Ngā Student Services Fees tūao i ngā whare wānanga

Scenario: Ka kōwhiri tētahi ākonga ā-whare o te whare wānanga i ngā ratonga ākonga ia tau
Given i tēnei wā ka utu ia ākonga ā-whare o te whare wānanga i tētahi Student Services Fee here tae atu ki te $1,253 ia tau i runga ake i te utu ako
And puta noa i tētahi tohu e toru tau, tērā pea ka tāpiri neke atu i te $4,000 ki te pūtea tārewa a te ākonga
And ka tautokona ngā pūtea tārewa ākonga e te kaipupuri tāke
When ka whakatikahia ngā waeture kia tuku ngā whare wānanga i ngā ratonga ākonga hei rārangi
Then ka kōwhiri ngā ākonga i ngā ratonga e hiahiatia ana, ka utu mō ērā anake, mai i ngā whare kori tinana ki ngā uniana ākonga me ngā pāpāho ākonga
Output ka wātea tonu ngā ratonga kāore i kōwhiria i runga i ngā tikanga utu-kaiwhakamahi mārama
And tae atu ki te $4,000 pea ka tiakina i te pūtea tārewa ākonga puta noa i tētahi tohu e toru tau
Outcome ka utu ngā ākonga mō ngā ratonga e kōwhiria ana anake
And ka tiakina te moni a te kaipupuri tāke nā te mea ka tautokona te nama ākonga
And kāore ngā ākonga e herea ki te pūtea uniana, kaitaunaki, pāpāho ākonga rānei kāore e tautokona e rātou
