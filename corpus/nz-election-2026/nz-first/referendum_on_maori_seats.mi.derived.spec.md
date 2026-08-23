---
type: spec
id: nz-first-referendum-on-maori-seats-derived
title: "Ko te pōti a te iwi mō ngā tūru Māori e pānuitia ana hei pūnaha: he pōti tērā pea kāore e huri i ngā tūru"
status: draft
updated: 2026-08-21
summary: E kī ana ngā nama whārangi ko te takenga Māori kei te 27% o te Whare ki te 17% o te taupori e kīia ana, me te haurua o ngā Māori kua rēhitatia kei te rārangi Māori; kāore he kupu pātai, he here rānei, nā reira tērā pea kāore te pōti a te iwi e huri i ngā tūru.
jurisdiction: NZ
sources:
  - title: Referendum on Maori Seats
    url: https://www.nzfirst.nz/referendum_on_maori_seats
tags:
  - democracy
  - maori-affairs
party: nz-first
clusters:
  - maori-affairs
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/referendum_on_maori_seats.md
sourceDigest: "sha256-0082e5cfd2e1ea74"
derivesFrom: nz-first-referendum-on-maori-seats
assumptions:
  - ko te rua tekau mā whitu ōrau o te Whare he takenga Māori me te tekau mā whitu ōrau o te taupori e kīia nuitia ana he nama whārangi e tautohe ana i te nui rawa o te kanohi, ehara i ngā tatau motuhake e tāpirihia ana e mātou
  - ko te haurua o ngā Māori katoa kua rēhitatia kei te rārangi Māori he nama rēhita whārangi, ehara i te mana mō te whakakore
  - kāore he kupu pātai, he tūnga here rānei, ka taea te pōti a te iwi te whakahaere, ā, ka waiho tonu ngā tūru kāore i hurihia
lang: mi
translationOf: nz-first-referendum-on-maori-seats-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-b5714e9ce5863e99
---

# Tō mātou māramatanga

> Ka tuku tētahi pōti a te iwi i muri i te pōtitanga e whai ake nei i te iwi ki te whakatau mehemea e hiahiatia ana ngā tūru Māori, e tāruatia ana e te 27% o te Whare he takenga Māori ki te 17% o te taupori e kīia ana me te haurua o ngā Māori kua rēhitatia kei te rārangi Māori. Kāore he kupu pātai, he mana here rānei, nā reira tērā pea kāore te pōti e huri i ngā tūru.

System: Te pōti a te iwi kāore he pātai, he here rānei kua whakatauria

Scenario: Ka whakamahia ngā nama kanohi hei take mō te pōti
Given e rua tekau mā whitu ōrau o te Whare he takenga Māori i raro i te MMP
And e kīia nuitia ana ko te iwi Māori te tekau mā whitu ōrau o te taupori
And kua heke maru te rēhita ki te rārangi Māori ki te haurua o ngā Māori katoa kua rēhitatia
When ka whakahaerea tētahi pōti a te iwi mō te anamata o ngā tūru Māori i muri i te pōtitanga e whai ake nei
Then ka pātaitia te iwi mehemea e whai hua, e hāngai, e hiahiatia ana ngā tūru
Outcome ka tāruatia ngā nama kanohi me te rārangi a te kaupapa here i te tautohe mō te whakatau
But kāore aua nama e whakakore, e pupuri rānei i ngā tūru ake

Scenario: Ka whakahaerea te pōti a te iwi kāore he pātai, he here rānei kua whakaingoatia
When ka pōti te iwi mō te anamata o ngā tūru Māori
Then tērā pea ka pupuritia ngā tūru mēnā ka tautoko te nui o te tāngata
Outcome ka tuhi tētahi whakatau a te iwi
But kāore he kupu pātai, he here rānei, nā reira tērā pea kāore te pōti a te iwi e huri i ngā tūru
