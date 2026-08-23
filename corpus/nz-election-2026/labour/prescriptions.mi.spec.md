---
type: spec
id: labour-prescriptions
title: "Ngā rongoā tohutohu kore utu mai i te 1 Hūrae 2027"
status: draft
updated: 2026-08-21
summary: Ka tango te utu $5 mō te rongoā tohutohu mō te hunga katoa e tika ana ki te hauora tūmatanui kore utu, $74.5 million te utu ia tau.
jurisdiction: NZ
sources:
  - title: Free Prescriptions Under Labour
    url: https://www.labour.org.nz/prescriptions
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/prescriptions.md
sourceDigest: "sha256-72f01fd6a271bce8"
gaps:
  - kāore i whakapuakina ēhea rongoā ka noho ki waho o te rārangi tūmatanui
  - kāore i whakapuakina te mahi ki te utu tuku a te whare rongoā
  - kāore i whakapuakina te pūtea i tua atu i te rāhui tāke hua rawa mēnā ka iti ake te moni
  - he horopaki te tatauranga 155,000 kāore i tikina; kāore i whakapuakina ngā whāinga tango ā muri
lang: mi
translationOf: labour-prescriptions
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-16567b8bb0cc2d98
---

# Ko tā te whārangi e kī ana

> Ka tango te utu rongoā tohutohu mō te hunga katoa e tika ana ki te hauora tūmatanui kore utu mai i te 1 Hūrae 2027. Kāore he puka, kāore he tono moni mai. Ka noho ngā rongoā tohutohu kore utu i te taha o ngā tika Medicard.

System: Ngā rongoā tohutohu kore utu

Scenario: Ka tiki tētahi tangata o Aotearoa i tētahi rongoā tohutohu
Given he utu $5 mō te rongoā tohutohu mō te nuinga e tika ana ki te hauora tūmatanui kore utu i ēnei rā
When ka tangohia te utu rongoā tohutohu mai i te 1 Hūrae 2027
Then ka kore utu ngā rongoā tohutohu mō ia tangata o Aotearoa e tika ana ki te hauora tūmatanui kore utu
Output ka tangohia te utu rongoā tohutohu $5
And $74.5 million te utu e whakapaetia ana ia tau
Outcome kāore he puka, kāore he tono moni mai
Activates labour-medicard
