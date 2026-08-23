---
type: spec
id: green-manifesto-2026-housing-derived
title: "Ko te manifesto whare noho e pānuitia ana hei pūnaha: he aukati utu rēti i te taha o tētahi hanga tūmatanui kāore anō kia utua"
status: draft
updated: 2026-08-21
summary: He aukati utu te paepae rēti ā-tau 2% e taea ai te whakaiti i te tuku i te wā e whakatipu tonu ana te hanga tūmatanui; kāore i tēnei kaupapa here te utu o ngā mano tini o ngā whare tūmatanui.
jurisdiction: NZ
sources:
  - title: Housing
    url: https://www.greens.org.nz/manifesto_2026_housing
tags:
  - housing
  - cost-of-living
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_housing.md
derivesFrom: green-manifesto-2026-housing
assumptions:
  - ko te aukati i ngā pikinga rēti ā-tau me te hono i ngā rēti rīhi hou ki te rēti o mua he aukati utu ki te rawa rēti tūmataiti
  - ka taea e tētahi paepae rēti here te whakaheke i te hihiri ki te tuku, ki te tiaki rānei i ngā whare rēti, he mōrearea hiahiatia i te wā e hangaia tonutia ana te tuku tūmatanui
  - he kaupapa haumi nui ngā mano tini o ngā whare tūmatanui, kāore i tāia tōna utu hanga ki tēnei kaupapa here
  - ka piki te utu tutuki a ngā kaipupuri rēti i tētahi Rental Warrant of Fitness; ka taea ētahi o taua utu te paahi ki ngā rēti tono ki te wāhi kāore anō te paepae kia here, ki te wehe rānei i te māketē
sourceDigest: "sha256-9a285312a27be659"
lang: mi
translationOf: green-manifesto-2026-housing-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6f2e474d73bbafcc
---

# Tō mātou māramatanga

> E noho tahi ana ngā mano tini o ngā whare tūmatanui me ngā whare papakāinga ki te taha o tētahi paepae rēti ā-tau 2%, ngā rīhi hou e herea ana ki te rēti o muri, me tētahi Rental Warrant of Fitness. He aukati utu te paepae. He kaupapa tūmau a te Karauna te hanga.

System: Ngā aukati rēti i te taha o tētahi hanga whare tūmatanui kāore anō kia utua

Scenario: Ka aukatihia ngā pikinga rēti ā-tau
Given ngā pikinga rēti ā-tau e herea ana ki te 2% rawa
And ngā rēti rīhi hou e honoa ana ki tā ngā kairēti o mua i utu ai
When ka pā ērā here ki tētahi kaipupuri rēti i tētahi māketē kikini
Then kāore e taea e te rēti te whai i te pikinga tere ake o ngā utu, o te hiahia rānei
Output ngā pikinga rēti ā-tau e herea ana ki te 2% rawa
Outcome e mōhio ana ngā kairēti e noho ana kāore e nui ake i te 2% te pikinga rēti e whai ake
But tērā pea ka hokona, ka waiho rānei ōkawaka ngā whare a ngā kaipupuri rēti kāore e kapi i ngā utu, kia tae rā anō te rawa tūmatanui

Scenario: Ka oatihia ngā mano tini o ngā whare tūmatanui kāore he utu hanga
When ka hangaia ngā mano tini o ngā whare tūmatanui hou me ētahi atu papakāinga
Then ka riro i te Karauna tētahi kaupapa hanga me te pupuri nui
Outcome ka taea e ētahi atu kāinga te tū i te rārangi mō ngā rīhi tūmatanui me ngā papakāinga
But kei te Karauna te pire hanga i mua i te whakatau i tētahi tapeke tāra, i tētahi rā oti rānei

Scenario: Ka whakamanatia tētahi Rental Warrant of Fitness
When ka whakamanatia ngā Healthy Homes Standards mā tētahi Rental Warrant of Fitness kua whakamanatia motuhake
Then me whakahou ngā rēti kāore e tutuki, me wehe rānei i te puna tuku rēti
Outcome ka riro i ngā kairēti tētahi papa hauora me te haumaru mārama ake
But ka tau tuatahi ngā utu whakahou ki ngā kaipupuri rēti, ā, tērā pea ka wehe ētahi rawa, tēnā i te tutuki
