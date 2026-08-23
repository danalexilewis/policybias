---
type: spec
id: te-pati-maori-cost-of-living
title: "Whakapikia ngā moni whiwhi, whakakaha hoki i te tautoko pūtea kia noho tū rangatira ai"
status: draft
updated: 2026-08-21
summary: Whakapikia ngā moni whiwhi, whakakaha i te tautoko pūtea kia kaua ngā whānau e whiua mō te pōharatanga, ā, tautokona ngā āwhina whai take, tae atu ki te utu ngāwari o te waka.
jurisdiction: NZ
sources:
  - title: Cost of living
    url: https://www.maoriparty.org.nz/cost_of_living
tags:
  - cost-of-living
  - social-welfare
  - transport
party: te-pati-maori
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/cost_of_living.md
sourceDigest: "sha256-d1acb086a0c0d11a"
gaps:
  - kāore he nui, he huarahi rānei mō te whakapiki moni whiwhi i whakapuakina
  - kāore he panoni utu tautoko pūtea, he panoni ture rānei i āta tohua
  - kāore i whakaingoatia ngā mahi mō te utu ngāwari o te waka
  - kāore he utu tahua i homai
  - kāore he wātaka
  - kāore i rārangitia ēhea tikanga tautoko pūtea e "whiu" ana i ngā whānau
  - kāore he pānga ki ngā kaupapa here tāke, whare noho rānei i tēnei whārangi
translationOf: te-pati-maori-cost-of-living
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-cb07ac09fd771bfb
lang: mi
---

# Ko tā te whārangi e kī ana

> Ka whakapikia ngā moni whiwhi kia noho tū rangatira ai te tangata. Ka whakakahangia te tautoko pūtea kia kaua ngā whānau e whiua mō te pōhara. Ka uru te utu ngāwari o te waka ki ngā āwhina whai take mō te utu o te oranga.

System: Te āwhina utu o te oranga mō te mana o te whānau

Scenario: Ka whakapikia ngā moni whiwhi kia noho tū rangatira ai te tangata
Given kāore e taea e ngā whānau ngā tūāpapa — te kai, te rēti, te hiko, te waka, te rongoā, me ngā utu kura
When ka whakapikia ngā moni whiwhi kia noho tū rangatira ai te tangata
Then ka whakakahangia te tautoko pūtea kia kaua ngā whānau e whiua mō te pōhara
And kei roto i ngā āwhina whai take mō te utu o te oranga te utu ngāwari o te waka
Outcome ka taea e ngā whānau te ora, kaua ko te morehu noa iho
