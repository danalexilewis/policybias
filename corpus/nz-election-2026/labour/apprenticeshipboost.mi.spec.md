---
type: spec
id: labour-apprenticeshipboost
title: "Whakawhānuitia te Apprenticeship Boost mō ngā kaimahi toi me ngā ākonga mahi"
status: draft
updated: 2026-08-21
summary: Whakaroatia ngā utu ki te kaiwhakawhiwhi mahi ki ngā tau e rua, $500 ia marama, tāpirihia he takoha pouaka taputapu $1,000, ā, whakawhānuitia te āhei ki ētahi toi mahi hou e rima.
jurisdiction: NZ
sources:
  - title: Expanding Apprenticeship Boost
    url: https://www.labour.org.nz/apprenticeshipboost
tags:
  - employment
  - education
party: labour
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/labour/apprenticeshipboost.md
sourceDigest: "sha256-0da4a8f281497913"
gaps:
  - kāore i āta tohua ēhea ākonga mahi e āhei ana ki te whakamātautau tuarā, i tua atu i te hunga e tino hiahiatia ana
  - kāore i whakapuakina me pēhea e kōwhiria ai ngā toi mahi hou e rima i tua atu i te rārangi kua whakaingoatia
  - kāore i whakapuakina ngā whakapae tango mahi kei muri i te ara utu $21 million ki te $71.5 million
  - kāore i whakapuakina te pānga ki ngā hōtaka ākonga mahi o nāianei i waho o Apprenticeship Boost
lang: mi
translationOf: labour-apprenticeshipboost
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-d35e576a99e02fcf
---

# Ko tā te whārangi e kī ana

> Mai i te 1 July 2028, ka roa ake ngā utu ki te kaiwhakawhiwhi mahi mō te tango ākonga mahi — mai i te tau kotahi ki ngā tau e rua. Ka whiwhi ngā ākonga mahi hōu i tētahi takoha pouaka taputapu, ka āhei ētahi toi mahi tāpiri e rima, ā, ka tīmata tētahi whakamātautau tuarā kua whakatakotoria mai i te 1 July 2027.

System: Whakawhānuitia te Apprenticeship Boost

Scenario: Ka tango tētahi pakihi i tētahi ākonga mahi i tētahi toi mahi kua whakawhānuihia
Given ngā utu Apprenticeship Boost ki te kaiwhakawhiwhi mahi mō te tau kotahi i tēnei rā
When ka whakawhānuihia te Apprenticeship Boost
Then ka roa ake ngā utu ki te kaiwhakawhiwhi mahi, ā, ka nui ake ngā toi mahi e āhei ana
Output $500 ia marama te utu ki te kaiwhakawhiwhi mahi mō ngā tau e rua
And $1,000 takoha pouaka taputapu mō ngā ākonga mahi hōu
And e rima ngā toi mahi hou e āhei ana
And $56.5 million te utu toharite ia tau mō ngā tau e whā
And $21 million i te 2027/28
And $71.5 million i te 2030/31
Outcome ka whiwhi utu ngā kaimahi toi me ngā rangatahi i a rātou e ako ana
