---
type: spec
id: national-news-20260719-honpaulgoldsmith
title: "Whakahoungia ngā ture whakaae kia hiahiatia te āe kaha"
status: draft
updated: 2026-08-21
summary: Me tuku kaha te whakaae mā te āe, ehara i te kore kāo anake, mā ngā kupu, mā ngā mahi rānei.
jurisdiction: NZ
sources:
  - title: National will modernise consent laws
    url: https://www.national.org.nz/news/20260719-honpaulgoldsmith
tags:
  - crime-and-justice
party: national
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/national/news-20260719-honpaulgoldsmith.md
sourceDigest: "sha256-78f47b234ebcc496"
gaps:
  - kāore i whakapuakina te wātaka ture
  - kāore i āta whakaahuatia te pānga o te panoni ki te taumaha taunaki i tua atu i te kī kāore e nuku
  - kāore i whakapuakina te pūtea hōtaka mātauranga, ārai rānei
  - kāore i kīa anō i tēnei whārangi ngā tautuhinga mō te haurangi, te ngoikore rānei
  - kāore i whakapuakina te tukanga ārahi pīra
lang: mi
translationOf: national-news-20260719-honpaulgoldsmith
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-1770f2a515760720
---

# Ko tā te whārangi e kī ana

> Ka hiahiatia e te ture whakaae ā-moe te whakaae kaha—he āe i whakaputaina mā ngā kupu, mā ngā mahi rānei, ehara i te kore kāo anake. Ehara te noho puku i te whakaae, ā, ehara te whakaae kotahi i te whakaae mō ngā tūtakitanga o muri. Me whakaatu tonu te kaitono, beyond reasonable doubt, kāore i tukuna te whakaae.

System: Ngā ture whakaae ā-moe kua whakahoungia

Scenario: Ka aromatawaihia te whakaae ā-moe i raro i te Crimes Act
Given e rārangi ana te Crimes Act i tēhea ehara i te whakaae, engari kāore e tautuhi i te whakaae
When ka panonihia te ture mō te whakaae ā-moe
Then me tuku kaha te whakaae mā te āe, ehara i te kore kāo anake
Output te whakaae i whakaputaina mā ngā kupu, mā ngā mahi rānei
Outcome ehara te noho puku i te whakaae
And ehara te whakaae kotahi i te whakaae mō ake tonu
But me whakaatu tonu te kaitono, beyond reasonable doubt, kāore i tukuna te whakaae
