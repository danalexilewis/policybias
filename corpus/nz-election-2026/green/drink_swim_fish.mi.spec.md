---
type: spec
id: green-drink-swim-fish
title: "Whakatikaina ngā ture kia inu, kia kaukau, kia hī ika ai te katoa"
status: draft
updated: 2026-08-22
summary: He hōtaka Drink Swim Fish e whakaingoa ana i ngā tepe wai inu, ngā ture para wai, me te whakamutu ā-taumata o te huti takere, kia inu, kia kaukau, kia hī ika ai te iwi ki ngā wāhi e arohaina ana.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/drink_swim_fish
  - title: People and nature first in Greens' rivers and oceans policy
    url: https://www.greens.org.nz/people_and_nature_first_in_greens_rivers_and_oceans_policy
tags:
  - environment
party: green
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/green/drink_swim_fish.md
sourceDigest: "sha256-4af5cf7f6d220476"
gaps:
  - kāore i rārangitia e rima o ngā kaupapa here e waru i te whārangi whakarewa
  - kāore i whakapuakina ngā uara tepe pāhūwai
  - kāore i āta whakaahuatia ngā panonitanga ture tuku para wai
  - kāore i whakapuakina te korahi me te wātaka o te whakamutu ā-taumata o te huti takere
  - kāore he pūtea, he taputapu ture rānei i whakaingoatia i tua atu i ēnei e toru
  - kāore he tautuhi mō te kounga wai e taea te kaukau, te hī ika rānei
  - kāore he rā tīmata
lang: mi
translationOf: green-drink-swim-fish
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-0fb18165c833782c
---

# Ko tā te whārangi e kī ana

> Ko te wai, mai i ngā kōpaka maunga ki ngā takutai māori, e hanga ana i te oranga puta noa i Aotearoa. Ka whakatikaina ngā ture e tiaki ana i te wai, kia inu, kia kaukau, kia hī ika ai te iwi ki ngā wāhi e arohaina ana. E whakaingoa ana te hōtaka Drink Swim Fish i ētahi e toru o ngā kaupapa e waru: he tepe wai inu kaha ake, he ture tuku para wai kaha ake, me te whakamutu ā-taumata o te huti takere whakangaro. Kāore he tepe tau, he tahua, he rā rānei i homai.

System: Ngā ture e tiaki ana i te wai mō te inu, te kaukau me te hī ika

Scenario: Ka whakatikaina ngā ture e tiaki ana i te wai
When ka whakatikaina ngā ture hei tiaki i te wai me te taiao i te tāmio
Then ka inu, ka kaukau, ka hī ika te iwi ki ngā wāhi e arohaina ana
Outcome ka noho tonu te wai mā, haumaru hoki hei āhua noho

Scenario: Ka mana ngā tepe wai inu, ngā ture para wai, me te whakamutu ā-taumata o te huti takere
Given ka māuiui pea ētahi tāngata e 100,000 i te wai inu kāore i te haumaru ia tau i Aotearoa
When ka tiakina te wai inu mā te whakatakoto i ngā tepe taiao kaha, me te whakaheke i ngā tepe pāhūwai
And ka tiakina ngā awa me ngā takutai mā te whakakaha i ngā ture mō ngā tuku para wai
And ka tiakina te moana mā te whakamutu ā-taumata i te huti takere whakangaro
Then ka hurihia te heke o te taiao
Outcome ka inu, ka kaukau, ka hī ika te iwi ki ngā wāhi e arohaina ana
Activates green-manifesto-2026-freshwater
Activates green-manifesto-2026-oceans-and-fisheries
