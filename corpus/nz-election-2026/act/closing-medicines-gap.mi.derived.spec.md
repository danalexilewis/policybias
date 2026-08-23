---
type: spec
id: act-closing-medicines-gap-derived
title: "Te ōrite rongoā e pānuitia ana hei pūnaha: ko te tipu hauora kē e utu ana i te piki"
status: draft
updated: 2026-08-21
summary: Ka haere tētahi ira o te tipu tahua hauora ia tau ki ngā rongoā kia ōrite ki Ahitereiria; ka iti iho te wāhi o tērā tipu ki te toenga hauora, kāore he tāke hou.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/closing-medicines-gap
  - title: Closing the medicines gap
    url: https://www.act.org.nz/medicines
tags:
  - healthcare
  - budget
party: act
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/act/closing-medicines-gap.md
derivesFrom: act-closing-medicines-gap
assumptions:
  - ko te tuku i tētahi ira ōrau o te tipu tahua hauora ā-tau ki ngā rongoā, he iti iho te wāhi o tērā tipu ki te toenga hauora i tā tētahi piki katoa i hoatu
  - ko te kī a te kaupapa here kāore e tapahia te whakapaunga ehara i ngā rongoā, e pā ana ki ngā tāra tūturu e piki tonu ana, ehara i te pupuri i te wāhi ōrite o te tipu
  - ko te tauira mahi o te Budget 2026 te whakaahuatanga ake a te kaupapa here o tērā whakawhiti i roto i tētahi kōpaki e tipu ana
  - ko te ōrite i te 2033 e whai ana i te ara kotahi-ira-ia-tau kua whakaputaina, kaua i te neke anō o te wāhi a Ahitereiria ā muri ake
sourceDigest: "sha256-1f6b71f82a390c0a"
lang: mi
translationOf: act-closing-medicines-gap-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e016b0214883caeb
---

# Tō mātou māramatanga

> Ka utua te piki mai i te tipu hauora e tūmanakohia ana, kāore he tāke hou, kāore hoki e tapahia te rahi o te tahua ehara i ngā rongoā. Ia tau ka tango ngā rongoā i tētahi ira o te piki, nā reira ka iti iho te pupuri a te toenga hauora i tā te tipu katoa. Ko te tauira mahi o te Budget 2026 tērā whakawhiti i ngā tāra.

System: Te piki wāhi rongoā i utua mai i te tipu tahua hauora

Scenario: Ka piki te wāhi rongoā kotahi ira ia tau
Given ka whakapau a Aotearoa i te 4.9 ōrau o tōna tahua hauora ki ngā rongoā
And ka whakapau a Ahitereiria i te 12.2 ōrau
And ka kati te ara i te āputa e whitu ira ōrau i ngā tau e whitu
When ka hīkina te wāhi rongoā ia tau ki te ōrite
Then ka nui ake te kerēme a Te Pātaka Whaioranga i tētahi kōpaki hauora e tipu ana
Output 1 te ira ōrau te piki i te wāhi rongoā o te tahua hauora ia tau
And 12% te wāhi rongoā i te 2033/34
And $500–650 million te whakapaunga rongoā tāpiri ia tau, te toharite
Outcome ka nui ake ngā rongoā Options for Investment ka taea te pūtea ina piki te wāhi
But kei te tipu tonu o te whakapaunga hauora te ara

Scenario: Ka iti iho te pupuri a te hauora kē i te piki āhua Budget 2026
Given i whiwhi te Hauora i te $1.5 billion tāpiri i te Budget 2026, ā, $13.5 million a Te Pātaka Whaioranga
And e waru ōrau te toharite tipu whakapaunga hauora i ngā tau e rima kua hipa
When ka rāhuitia tētahi ira o tērā tipu mō ngā rongoā
Then ka tipu tonu te toenga hauora, engari iti iho i te piki katoa
Output tata ki te $320 million anō mō Te Pātaka Whaioranga me i whai te piki Budget 2026 i tēnei ture
And tata ki te $1.2 billion e toe ana mō te toenga o te pūnaha hauora i tērā tauira mahi
Outcome ka tae mai ngā hua rongoā i roto i te ara tipu o nāianei
But ka whakataetae ētahi atu ratonga hauora mō te wāhi iti ake o te piki o ia tau

Scenario: Kāore he tāke hou e utu ana i te piki
Given ka tango te pūtea i te tipu e tūmanakohia ana o te tahua hauora
When ka rere te ara kāore he tāke tāpiri
Then kei roto i te hauora te kerēme tahua, ehara i tētahi utu hou
Outcome kāore ngā kaipākehā tāke e pā ki tētahi tāke rongoā hou mō te piki
But kei te hauora ehara i ngā rongoā te utu wāhi o te tipu kua nekehia
