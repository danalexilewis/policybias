---
type: spec
id: nz-first-establishing-a-kiwisaver-generation-derived
title: "Ko te KiwiSaver Generation e pānuitia ana hei pūnaha: he $1000 kua raka i te whānautanga me tētahi utu tahua kāore i whakaingoatia"
status: draft
updated: 2026-08-21
summary: Ka tāpiri tētahi tīmatanga a te Karauna mō ngā kirirarau anake kia pakeke rā anō, engari me te kore he utu tahua kāore e taea te ine i te whakapau a te Karauna, ā, kāore he mea ka riro i ngā whānautanga ehara i te kirirarau.
jurisdiction: NZ
sources:
  - title: Establishing a KiwiSaver Generation
    url: https://www.nzfirst.nz/establishing_a_kiwisaver_generation
tags:
  - superannuation
  - employment
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/establishing_a_kiwisaver_generation.md
derivesFrom: nz-first-establishing-a-kiwisaver-generation
assumptions:
  - he takoha ka utua i te whānautanga, ka waiho kia tāpiri kia pakeke rā anō, kua raka mō tērā wā; kāore ngā ture uru moata e kīia anō i konei, nō reira ka kite mātou i te kī kōhanga-hua hei rawa pupuri-ki-te-pakeketanga
  - he utu tahua tō tētahi $1000 kotahi-i-te-oranga mō ia whānautanga kirirarau ōrite ki ngā whānautanga tāruatia ki tērā nama; kāore te kaupapa here e tā i te tatau whānautanga ā-tau, i tētahi matapae utu a te Karauna rānei
  - ko te kirirarautanga i te whānautanga te kēti mō te tīmatanga; ka rēhitatia tētahi tamaiti kāore tērā tūnga ki te here i wāhi kē mēnā anake ka pā ngā ture kaimahi whānui i muri
  - e here ana te kaupapa here i te rēhita whānautanga ki ngā takoha kaimahi here kua whakamāramatia i te whārangi clarion-call; kāore te tīmatanga anake e whakarite i ngā reiti pakeke
sourceDigest: "sha256-47fb856ec39bb0a0"
lang: mi
translationOf: nz-first-establishing-a-kiwisaver-generation-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5444bf7dad7c674d
---

# Tō mātou māramatanga

> Ka riro i ia pēpi kirirarau tētahi tīmatanga $1000 a te Karauna, kua raka ki te KiwiSaver kia pakeke rā anō, engari kua ngaro te utu tahua, te tatau whānautanga ā-tau me ngā ture uru moata.

System: Ko te tīmatanga KiwiSaver i te whānautanga hei rawa kua raka, kua kētitia ki te kirirarau

Scenario: Ka riro i tētahi tamaiti kirirarau te tīmatanga, ka pupuri kia pakeke
Given tētahi takoha aunoa a te Karauna i te whānautanga mō ngā kirirarau o Aotearoa anake
And tētahi haumi kotahi-i-te-oranga e tāpiri ana mō ngā tekau tau
When ka eke te tamaiti ki te pakeketanga me te pūkete e tupu ana tonu
Then kua noho kē tētahi tūāpapa penapena i mua i te tīmatanga o ngā takoha kaimahi
Output $1000 takoha a te Karauna ka utua aunoatia i te whānautanga mō ngā kirirarau o Aotearoa anake
Outcome kāore tētahi kirirarau e tika ana e tomo ki te pakeketanga me te kore tērā toenga tīmata
But kāore te moni e wātea hei moni puta noa i te tamarikitanga
Activates nz-first-one-clarion-call

Scenario: Ka whānau mai tētahi tamaiti ehara i te kirirarau o Aotearoa
Given mō ngā kirirarau o Aotearoa anake te takoha aunoa
When ka whānau mai tērā tamaiti
Then ka taea e te rēhita whānautanga te hanga i tētahi pūkete i raro i te here
# extrapolated: 0 kick-start follows from the citizens-only rule, not a published zero-dollar line
Output 0 takoha a te Karauna i te whānautanga mō tētahi tamaiti ehara i te kirirarau o Aotearoa
Outcome kāore te kī kōhanga-hua e pā ki tērā whānautanga
But ka noho tonu tētahi here kaimahi o muri ki te huarahi takoha motuhake

Scenario: Me pūtea te Karauna i te tīmatanga puta noa i tētahi tau o ngā whānautanga
Given tētahi takoha $1000 mō ia whānautanga e tika ana, me te kore he utu tahua kua tāia
When ka haere te kaupapa here mō tētahi tau katoa o ngā whānautanga kirirarau
Then ka utu te Karauna i te tīmatanga mō ia whānautanga e tika ana
Outcome ka tīmata ia pēpi hou e tika ana ki te toenga kua whakaingoatia
But ka utu tonu te Karauna i ia whānautanga e tika ana me te kore he pire ā-tau kua tāia
