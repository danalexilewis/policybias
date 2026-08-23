---
type: spec
id: opportunity-breakthrough-economy-derived
title: "Ko te Breakthrough Economy hei pūnaha: he whakapaunga 2% o te GDP kāore he tapeke tāra, me ngā mana wehe e hiahia tonu ana i te kōti"
status: draft
updated: 2026-08-18
summary: He kawenga tahua nui te pae rangahau 2% o te GDP, kāore te utu tāra i te kaupapa here; he pōturi ngā mana wehe a te High Court, nā reira ehara te $12 ki te $31 tiaki ā-wiki i te hua tau tuatahi.
jurisdiction: NZ
sources:
  - title: Breakthrough Economy
    url: https://www.opportunity.org.nz/breakthrough-economy
  - title: Breakthrough Economy policy overview
    url: https://cdn.opportunity.org.nz/documents/policy/breakthrough-economy-policy-overview.pdf
tags:
  - economy
  - small-business
party: opportunity
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/breakthrough-economy.md
derivesFrom: opportunity-breakthrough-economy
assumptions:
  - he whakapaunga ā-tau nui te 2% o te GDP mō te rangahau; ki te kore he tatau tāra kāore e taea te pauna ki te toenga tāke-whenua
  - he tukanga tau-maha te wehe a te High Court, nā reira he tatau whakataetae-kua-oti te $12 ki te $31 tiaki ā-wiki
  - ko te muru i te huamoni nama ākonga mō ngā kaihoki he utu tahua, he pānga kōwhiri hoki ki ērā kua wehe kē
sourceDigest: "sha256-fc532ee34b4a0eb9"
lang: mi
translationOf: opportunity-breakthrough-economy-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-d8e91bbed6940784
---

# Tō mātou māramatanga

> Ka piki te rangahau me te whakawhanaketanga ki te 2% o te GDP, me te $30 ia wiki kua ngaro ki ngā rāngai kāore i whakataetae, me te $12 ki te $31 i tiakina — engari kāore te 2% o te GDP i hurihia ki ngā tāra, ā, kāore he wā mō te ara wehe a te High Court.

System: He pae rangahau me tētahi rongoā whakataetae pōturi

Scenario: Ka pūteahia te pae rangahau
Given kua hikitia te whakapaunga rangahau me te whakawhanaketanga ki te 2% o te GDP, iti rawa
When ka tohua te whakapaunga tūmatanui tāpiri
Then me kimi te utu tāra ia tau
Outcome ka tipu ngā taiwhanga me ngā whakatere
But kāore anō he tatau tāra mā ngā kaituhi Tahua hei pauna ki te toenga Tax Reset
Activates opportunity-tax-reset

Scenario: Ka haria tētahi duopoly ki te High Court
Given ngā mana wehe e rere ana mā te High Court
When ka tukuna tētahi keehi hokomaha, pēke rānei
Then kāore ngā utu e neke i te rā tuku
Outcome ka tae te $12 ki te $31 tiaki ā-wiki, mēnā ka tae, i muri i te whakatau, ngā pīra me te wehe
But ka utu tonu ngā whānau i te $30 ia wiki e tapaina ana e te kaupapa here tae noa ki tērā wā
