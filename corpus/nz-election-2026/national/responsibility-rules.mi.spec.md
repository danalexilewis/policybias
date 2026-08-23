---
type: spec
id: national-responsibility-rules
title: "Ngā ture haepapa Tahua ki te hua 2028/29 me te 40% nama"
status: draft
updated: 2026-08-21
summary: Hoki ki te hua i 2028/29, piko te nama ki raro iho i te 40% o te GDP, ā, whakaiti i te whakapaunga matua a te Karauna ki te 30% o te GDP.
jurisdiction: NZ
sources:
  - title: Responsibility Rules
    url: https://www.national.org.nz/responsibility-rules
tags:
  - budget
  - taxation
party: national
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/national/responsibility-rules.md
sourceDigest: "sha256-b7fb6b4cafc519ae"
gaps:
  - kāore i whakapuakina ngā tepenga tāra o te tukunga whakahaere mō ia Tahua
  - kāore i rārangitia ēhea hōtaka ka tohu anō te kaupapa matua
  - kāore i tātaitia te kōpaki haumi pūtake i tua atu i te whakamātautau uara-mō-te-moni
  - kāore i rārangitia ngā here reiti tāke i tua atu i te pupuri i ngā tāke kia iti
  - kāore i whakatauira i tēnei whārangi te pānga o ngā ohorere tipu ki te ara nama
lang: mi
translationOf: national-responsibility-rules
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e7b5f0d9bbf96207
---

# Ko tā te whārangi e kī ana

> E toru ngā ture tahua e pupuritia: hoki ki te hua whakahaere mai i 2028/29, piko te nama matua a te Karauna ki raro iho i te 40% o te GDP i roto i te wā, ā, heke te whakapaunga matua a te Karauna ki te 30% o te GDP. Ka tutuki te hua mā te here whakapaunga, kaua mā ngā tāke hou. Ka haere tonu te haumi pūtake, ka whakamātautautia ki te uara mō te moni.

System: Ngā ture haepapa Tahua

Scenario: Ka pupuritia ngā ture tahua i te kāwanatanga
Given e matapaetia ana ka eke te nama matua a te Karauna ki te 46.1 ōrau o te GDP i 2027/28
And $50 billion ngā penapena i tutuki i ngā Tahua e toru kua hipa
When ka pupuritia ngā ture tahua e toru
Then ka noho te hokinga ki te hua hei kaupapa matua
Output te hokinga ki te hua whakahaere i 2028/29
And ka piko te nama ki raro iho i te 40 ōrau o te GDP i roto i te wā
And ka heke te whakapaunga matua a te Karauna ki te 30 ōrau o te GDP i roto i te wā
Outcome ka pupuritia ngā tāke kia iti mā te whakarite tika i te rahi o te kāwanatanga
