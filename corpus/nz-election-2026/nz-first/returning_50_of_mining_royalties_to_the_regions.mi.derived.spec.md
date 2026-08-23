---
type: spec
id: nz-first-returning-50-of-mining-royalties-to-the-regions-derived
title: "Ko ngā raihana maina e pānuitia ana hei pūnaha: te haurua o tētahi puna kāore i whakaingoatia, me te mana ā-rohe kāore i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ka noho te haurua o ngā raihana ki te rohe pūtake, ka noho te haurua ki Pōneke, engari kāore he rahi puna, he kaiwhakatau ā-rohe rānei, nā reira kāore e taea te tāke tāra, te whakapaunga rānei te tirotiro.
jurisdiction: NZ
sources:
  - title: Returning 50% of mining royalties to the regions
    url: https://www.nzfirst.nz/returning_50_of_mining_royalties_to_the_regions
tags:
  - economy
  - infrastructure
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/returning_50_of_mining_royalties_to_the_regions.md
derivesFrom: nz-first-returning-50-of-mining-royalties-to-the-regions
assumptions:
  - ko te whakahoki 50% ki te rohe ka waiho te 50% ki Pōneke; he tātai tērā wehenga i te wāhi kua kīia, ehara i te nama tuarua kua tāia
  - kāore e taea te huri i te ōrau o tētahi puna raihana kāore i whakaingoatia ki te tāra kia kīia te puna
  - me tētahi kaiwhakatau tētahi wāhi ā-rohe — kaunihera, tarahiti, āpiha Karauna rānei — i mua i te tohatoha wai, waipuke, whare noho, ētahi atu whakapaunga kua rārangitia rānei; ka whakaingoa te kaupapa here i ngā whakamahinga, kāore i te mana
  - he kerēme rāngai ngā piriona me ngā mano mahi, ehara i te matapae raihana e here ana ki te wehenga 50%
sourceDigest: "sha256-0bc1f22926f9fcd1"
lang: mi
translationOf: nz-first-returning-50-of-mining-royalties-to-the-regions-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-61f7d19780ccb25d
---

# Tō mātou māramatanga

> Ka hoki te haurua o ngā raihana maina ki te rohe tango mō ngā whakamahinga hanganga, kāore e rere katoa ki Pōneke, engari kāore te puna raihana i rahi, kāore hoki he kaiwhakahaere ā-rohe i whakaingoatia — nā reira kāore e taea e ngā rohe te whakamahere i ngā tāra, i te kai tohatoha rānei.

System: Te wehenga raihana haurua-haurua kāore he puna kua rahi

Scenario: Ka wehea ngā raihana i waenga i te rohe me Pōneke
Given ngā raihana maina ka rere kē ki Pōneke
When ka mahia te maina i tētahi rohe
Then ka noho te haurua o ngā raihana ki tērā rohe
Output 50% of mining royalties returned to the region of extraction
# extrapolated: 50% remaining with Wellington is arithmetic from the stated regional share
And 50% of mining royalties remaining with Wellington
Outcome ka whiwhi ngā hapori i tētahi wāhi kua whakaingoatia o ngā raihana mai i te mahi i tō rātou rohe
But kāore e taea e ngā rohe te tahua kia rahi te puna raihana

Scenario: Me whakapau te wāhi ā-rohe kāore he kaiwhakatau kua whakaingoatia
Given te haumi ā-rohe kua whakaingoatia mō ngā ratonga wai, te tiaki waipuke, te pūngao, te tāpoi, te waka, te whare noho me te hanganga matua
And kāore he whakaahuatanga ko wai ka pupuri, ka tohatoha rānei i te 50% ā-rohe
When ka tae mai te wāhi ā-rohe
Then me whakatau tētahi kōwhiringa mana i mua i te whakamana i tētahi o aua whakapaunga
Outcome e mārama ana te rārangi o ngā whakamahinga e whakaarohia ana
But me kōwhiria ngā kaunihera, ngā tarahiti, ngā āpiha Karauna rānei i mua i te whakamana i tētahi whakapaunga
