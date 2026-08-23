---
type: spec
id: nz-first-backing-a-new-zealand-owned-bank
title: "Hokona mai anō a BNZ, ka hanumi ki a Kiwibank hei NBNZ nā te Karauna"
status: draft
updated: 2026-08-21
summary: He hokonga mai anō o BNZ i a NAB e marohitia ana, ka hanumi ki a Kiwibank hei pēke arumoni nā te Karauna katoa, he nui rawa kia whakataetae ki ngā pēke nui nā Ahitereiria.
jurisdiction: NZ
sources:
  - title: Backing a New Zealand Owned Bank
    url: https://www.nzfirst.nz/backing_a_new_zealand_owned_bank
tags:
  - economy
  - small-business
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/backing_a_new_zealand_owned_bank.md
sourceDigest: "sha256-ff7fce88ee091b00"
gaps:
  - kāore i whakapuakina te utu hoko mō te hokonga mai o BNZ
  - kāore he wātaka mō te hokonga mai, te hanumi rānei
  - ka oati te hanganga whakahaere hou i ngā pānui e haere ake nei, engari kāore i whakaahuatia
  - kāore he nama whakakī pūtea i tua atu i te pupuri i te pūtea tūāpapa o nāianei o Kiwibank
  - kāore i inehia te wehenga i waenga i ngā sovereign bonds, te nama a te Karauna, te Future Fund me ngā wāhanga a Te Kaporeihana Āwhina Hunga Whara
  - kāore he whakatau tata mō te pānga whakataetae ki ngā maru tuku pūtea, te utu mōkete rānei
  - kāore i whakaahuatia ngā here whakaaetanga waeture
  - kāore i whakapuakina te aha ka tū ki te heke ngā huamoni a BNZ i raro i te utu nama
lang: mi
translationOf: nz-first-backing-a-new-zealand-owned-bank
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-de0763ff46842187
---

# Ko tā te whārangi e kī ana

> Ka hokona mai anō a BNZ i a National Australia Bank, ka hanumi ki a Kiwibank hei pēke arumoni nā te Karauna katoa, he nui rawa kia whakataetae ki ngā pēke nui nā Ahitereiria. Ka ahu mai te pūtea i tētahi kāhui whakaranu—ngā sovereign bonds, te nama a te Karauna, he haumi iti nā te Future Fund me Te Kaporeihana Āwhina Hunga Whara, me te pūtea tūāpapa o nāianei o Kiwibank—ehara i te tahua whakahaere. E kiia ana ka utu te hokonga mai i a ia anō, ā, ka noho ngā hua pēke ki Aotearoa. Kāore he utu hoko, he wātaka, he hanganga whakahaere rānei i homai.

System: He pēke nā te Karauna, he nui rawa kia whakataetae ki ngā pēke nui nā tāwāhi

Scenario: E marohitia ana te hokonga mai o BNZ, ka hanumi ki a Kiwibank
Given e whakahaere ana ngā pēke e whā nā Ahitereiria i te 85 ōrau pea o te pūnaha pēke
And kei a Kiwibank i raro iho i te 8 ōrau o te mākete mōkete
And nā BNZ e whakaputa i nāianei neke atu i te $1.5 billion ngā huamoni moni ia tau
When e marohitia ana te hokonga mai o BNZ i a National Australia Bank
Then ka hanumi a BNZ ki a Kiwibank hei National Bank of New Zealand nā te Karauna katoa, e whakahaerehia ana hei arumoni
And ka utua te hokonga mai i tētahi kāhui whakaranu kāore e tango i te tahua whakahaere
Outcome he pēhanga whakataetae tūturu ki ngā pēke nā Ahitereiria
And ka noho ngā hua pēke ki Aotearoa
