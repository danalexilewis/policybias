---
type: spec
id: nz-first-the-kiwi-kids-grant
title: "Kiwi Kids Grant $5000 ia tau mō ia o ngā tamariki tuatahi e toru"
status: draft
updated: 2026-08-21
summary: He takoha whānui kore-tāke $5000 ia tau mō ngā tau tuatahi e toru o ia o ngā tamariki tuatahi e toru a ngā mātua kirirarau o Aotearoa, ka utua mā Te Tari Taake.
jurisdiction: NZ
sources:
  - title: The 'Kiwi Kids Grant'
    url: https://www.nzfirst.nz/the_kiwi_kids_grant
tags:
  - social-welfare
  - cost-of-living
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/the_kiwi_kids_grant.md
sourceDigest: "sha256-a9b5c4aa45f6a2e0"
gaps:
  - kāore i whakapuakina he rā tīmata
  - kāore i āta tohua te wātaka utu ā-marama i tua atu i te "utu ā-marama auau"
  - kāore i whakaahuatia te āheinga inā wehe ngā mātua, inā tiritiri rānei te mana tiaki
  - kāore i whakamāramatia te pānga ki te Paid Parental Leave me te Working for Families ahakoa "i tua atu"
  - kāore i whakaaturia te tikanga tātai o te tatauranga utu $400 million i te tau tuatoru
  - kāore i homai he tatauranga o te urupare reiti whānautanga ki te takoha
  - kāore i whakapuakina te atawhai i ngā tamariki i whānau i mua i te tīmatanga
  - kāore i whakapuakina mehemea ka pā te kōwhiringa moni nui o te tau tuatahi ki te tamariki tuarua me te tuatoru
lang: mi
translationOf: nz-first-the-kiwi-kids-grant
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: "sha256-084df760e8c89836"
---

# Ko tā te whārangi e kī ana

> Mā tētahi takoha whānui, kāore e whakamātautau rawa, e tautoko ngā mātua kirirarau o Aotearoa e whakatipu ana i ā rātou tamariki tuatahi e toru i ngā tau tuatahi e toru o ia tamaiti, ka utua mā Te Tari Taake, ā, kāore he tāke. Ka noho i te taha o ngā tautoko e tū ana pērā i te Paid Parental Leave me te Working for Families. Ko te heke o te reiti whānautanga te raru e kīia ana ka whakatikaina e te takoha. Kāore he rā tīmata i homai.

System: Kiwi Kids Grant mō ngā whānau kirirarau

Scenario: Ka āhei tētahi matua kirirarau o Aotearoa ki te Kiwi Kids Grant
Given kua heke te reiti whānautanga o Aotearoa ki te 1.53 whānautanga mō ia tangata
And i heke ngā whānautanga kirirarau i te 52,506 i te tau 2006 ki te 36,351 i te tau 2025
And 72 ōrau o ngā whānautanga katoa ngā whānautanga kirirarau i tērā tau, he 87 ōrau i te tau 2006
When ka whakaurua te Kiwi Kids Grant
Then ka tautoko tētahi takoha whānui, kāore e whakamātautau rawa, i ngā kirirarau e whakatipu ana i ngā tamariki tuatahi e toru i ngā tau tuatahi e toru o te ora
Output $5000 ka utua ia tau mō ngā tau tuatahi e toru mō ia o te tamaiti tuatahi, tuarua me te tuatoru
And $400 million te utu e whakatauria ana i te tau tuatoru inā tū te hurihanga katoa
Outcome ka tino heke te ārai o ngā utu e piki ana o te whai tamariki
