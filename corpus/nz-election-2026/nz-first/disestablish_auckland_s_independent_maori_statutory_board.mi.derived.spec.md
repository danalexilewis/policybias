---
type: spec
id: nz-first-disestablish-auckland-s-independent-maori-statutory-board-derived
title: "Ko te tango IMSB e pānuitia ana hei pūnaha: ka penapena te $3.5 million mēnā anake ka mutu te mahi"
status: draft
updated: 2026-08-21
summary: Ka mutu te rārangi whakahaere $3.5 million a te poari nā te whakakore, engari ko te hokinga o ngā mahi ki te kaunihera te tikanga ka haere tonu pea te mahi i raro i tētahi kawenga kē.
jurisdiction: NZ
sources:
  - title: Disestablish Auckland's'Independent Maori Statutory Board'
    url: https://www.nzfirst.nz/disestablish_auckland_s_independent_maori_statutory_board
tags:
  - democracy
  - maori-affairs
party: nz-first
clusters:
  - maori-affairs
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/disestablish_auckland_s_independent_maori_statutory_board.md
sourceDigest: "sha256-229dd0078eadff8d"
derivesFrom: nz-first-disestablish-auckland-s-independent-maori-statutory-board
assumptions:
  - ko te $3.5 million i tērā tau te utu whakahaere kua whakaingoatia o te poari, ehara i te penapena haere tonu kua whakamanahia i muri i te whakawhiti
  - ka taea e te hoki i ngā mahi, ngā rawa me ngā here ki te Auckland Council te pupuri i te mahi i raro i te kawenga a te kaunihera
  - ka huri te tango i tētahi poari kāore i pōtitia i te hunga ka whakautu; kāore e mutu ake i a ia anō te hononga Māori e kī ana te kaupapa here ka haere tonu pea te kaunihera
lang: mi
translationOf: nz-first-disestablish-auckland-s-independent-maori-statutory-board-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-198afb8bdcd2b266
---

# Tō mātou māramatanga

> Ka mutu te rārangi whakahaere $3.5 million, ka hoki ngā mahi ki te Auckland Council nā te whakakore i te Independent Māori Statutory Board, ā, ka haere tonu pea te hononga Māori a te kaunihera — nō reira ka penapena ngā kaipānga reiti mēnā anake ka mutu tūturu te mahi.

System: Ko te tango poari hei huringa kawenga me tētahi utu whakahaere kua whakaingoatia

Scenario: Ka whakakorea te poari
Given ka utu ngā kaipānga reiti i te $3.5 million ia tau hei tautoko i ngā whakahaere IMSB me te kore e taea te pōti, te tango rānei i ōna mema
When ka whakakorea te Independent Māori Statutory Board
Then ka mutu te rārangi whakahaere motuhake a te poari
Output $3.5 million i ngā whakahaere IMSB ia tau kāore e utua anō ki tērā poari
Outcome kei roto i ngā hanganga e kawenga ana ki te iwi te hunga e whakaawe ana i te whakapau
But ko te $3.5 million te utu whakahaere a te poari, ehara i te penapena toenga kua oatihia

Scenario: Ka hoki ngā mahi ki te Auckland Council
Given e tuku ana te kaupapa here i te whakawhiti raupapa o ngā mahi, ngā rawa me ngā here a te IMSB ki te Auckland Council
When ka noho aua mahi ki te kaunihera
Then ka taea te haere tonu te hononga Māori i raro i ngā hanganga e kawenga ana ā-manapori
Outcome ka huri te pūataata me te kawenga ahakoa ka haere tonu ngā mahi ōrite
But ka haere tonu pea te mahi i raro i tētahi kawenga kē, nō reira kāore e ngaro aunoa te utu me te awe
