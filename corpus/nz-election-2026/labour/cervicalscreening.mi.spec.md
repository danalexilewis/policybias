---
type: spec
id: labour-cervicalscreening
title: "Tirotiro cervical kore utu mā te Medicard"
status: draft
updated: 2026-08-21
summary: Tirotiro cervical kore utu mō te katoa e 25 ki te 69 ngā tau mai i te 1 October 2027, ka utaina ki te Medicard.
jurisdiction: NZ
sources:
  - title: Free Cervical Screening
    url: https://www.labour.org.nz/cervicalscreening
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/cervicalscreening.md
sourceDigest: "sha256-f08cc403527757e8"
gaps:
  - kāore i whakapuakina ēhea momo tirotiro e kapi ana i tua atu i te tākuta me ngā huihapori
  - kāore i whakapuakina te pūtea i tua atu i te tau katoa tuatahi
  - kāore i whakapuakina me pēhea e whakamana ai te āhei i ngā hui tirotiro ā-hapori
  - he horopaki anake te tatauranga 85 ōrau kāore anō kia tirotirohia; kāore i whakapuakina ngā whāinga tango tirotiro
lang: mi
translationOf: labour-cervicalscreening
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-1ecc3c978d12deda
---

# Ko tā te whārangi e kī ana

> Mai i te 1 October 2027, ka kore utu te tirotiro cervical mō te katoa e 25 ki te 69 ngā tau. Ka utaina aunoatia te āhei ki te Medicard, ā, ka taea te whakamahi i te tākuta, i tētahi hui tirotiro ā-hapori rānei. E noho ana te tirotiro kore utu i te taha o ngā toronga tākuta kore utu e toru ia tau.

System: Tirotiro cervical kore utu mā te Medicard

Scenario: Ka rapu tētahi tangata e 25 ki te 69 ngā tau i te tirotiro cervical
Given kāore te tirotiro cervical i te kore utu mō te katoa i tēnei rā
When ka tīmata te tirotiro cervical kore utu mai i te 1 October 2027
Then ka kore utu te tirotiro cervical mō te katoa e 25 ki te 69 ngā tau
Output $21.6 million te utu mō te tau katoa tuatahi
Outcome ka utaina aunoatia te āhei ki te Medicard
Activates labour-medicard
