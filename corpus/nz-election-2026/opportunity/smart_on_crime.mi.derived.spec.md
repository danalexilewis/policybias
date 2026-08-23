---
type: spec
id: opportunity-smart-on-crime-derived
title: "Ko te Smart on crime e pānuitia ana hei pūnaha: ka heke te tatari herehere mēnā ka noho tūturu te kōti"
status: draft
updated: 2026-08-18
summary: Ka tapahi te pūtea kōti me te tirotiro tāpiri i te tatari herehere mēnā kei reira ngā rā noho me ngā moenga hapori; ko te whakakore hara o te pupuri kāore he kūaha hauora kua whakaingoatia ka noho hei kore whakapae, kore taurima.
jurisdiction: NZ
sources:
  - title: Smart on Crime
    url: https://www.opportunity.org.nz/smart_on_crime
tags:
  - crime-and-justice
party: opportunity
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/smart_on_crime.md
derivesFrom: opportunity-smart-on-crime
assumptions:
  - ka heke te tatari herehere ina whakawāngia ngā keehi, ā, he wāhi tā ngā tāngata hei haere; kāore te pūtea kāore he rā noho, he moenga hapori rānei e whakawātea i ngā ruma herehere
  - ka waiho te whakakore hara o te pupuri kāore he tono hauora here i ngā tāngata kāore he whakapae, kāore he taurima
  - kāore mātou e taea te whakataurite ki te 18 o nāianei mēnā ka pania te pakeke kōti rangatahi kāore e kīia te pakeke
sourceDigest: "sha256-8b9bd045e1513213"
lang: mi
translationOf: opportunity-smart-on-crime-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-52c82b5f04cd3877
---

# Tō mātou māramatanga

> Ko te utu o te pupuri herehere $150,000 ā-tau ki te taha o te $9,000 mō ia tamaiti i te kura, me te nui ake o te pūtea kōti me te pupuri kua whakakorehia te hara — engari kāore i te pūmau ngā rā noho, tētahi kūaha hauora, me te pakeke rangatahi hou.

System: Ka heke te tatari herehere mēnā ka noho te kōti

Scenario: Ka piki te pūtea kōti
Given neke atu i te $150,000 ā-tau hei pupuri i tētahi tangata i te tatari herehere
When ka whiwhi ngā kōti me te tirotiro i te nui ake o te moni
Then ka heke te tatari herehere mēnā kei reira ngā rā noho tāpiri me ngā moenga hapori
Outcome ka tatari ētahi tāngata i te kāinga, kaua i te ruma herehere
But ka waiho tonu e tētahi kōti kua pūteatia e kore e noho ngā tāngata ki roto i te $150,000 ā-tau

Scenario: Ehara te pupuri i te hara i tēnei wā
When ka whakakorehia te hara o te pupuri, kāore hoki te tuku
Then ka mutu te whakapae a Ngā Pirihimana o Aotearoa mō te pupuri
Outcome ko te urupare aratakina e te hauora te whakakapi kua whakaingoatia
But ki te kore he kūaha here ki te maimoatanga, ka riro i ētahi tāngata te kore whakapae, kore taurima
Activates opportunity-healthy-people
