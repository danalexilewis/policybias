---
type: spec
id: national-kiwisaver
title: "KiwiSaver here, Baby Boost, me te tāpiri whakamatuatanga"
status: draft
updated: 2026-08-21
summary: KiwiSaver here mai i Hūrae 2028 e hiki ana ngā taunoa huihui ki te 12% ā te 2032, $1500 Baby Boost, kōwhiringa wehe i te pōuri, me ngā takoha KiwiSaver i te whakamatuatanga utua mai i Hūrae 2027.
jurisdiction: NZ
sources:
  - title: Enhancing KiwiSaver for Everyone
    url: https://www.national.org.nz/kiwisaver
  - title: KiwiSaver policy document
    url: https://assets.national.org.nz/web/prod/National%20KiwiSaver%20policy%20document.pdf
tags:
  - superannuation
  - social-welfare
party: national
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/national/kiwisaver.md
sourceDigest: "sha256-a7bb48377c828e84"
gaps:
  - kāore i whakapuakina te utu a te kaituku mahi mō te KiwiSaver here i ngā rāngai iti-hua
  - kāore i tino kīa te ara piki o ngā reiti taunoa i waenga i te 2028 me te 2032 i tua atu i ngā hipanga 0.5% ia tau
  - kāore i āta whakaahuatia me pēhea te whakatau i te whakamātautau pōuri i te mahi
lang: mi
translationOf: national-kiwisaver
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5ca2175d8864a7dd
---

# Ko tā te whārangi e kī ana

> Ka here te KiwiSaver mō ngā kaimahi katoa mai i te 1 Hūrae 2028, ā, ka piki haere ngā takoha taunoa huihui. Ka rēhitatia ia tamaiti i te whānautanga me tētahi Baby Boost mai i te 1 Hūrae 2027. Mai i taua rā anō, ka takoha te kāwanatanga i te wā o te whakamatuatanga utua ahakoa kāore he takoha a te kaimahi, ā, ka takoha ngā kaituku mahi mō ngā kaimahi neke atu i te 65. Ka taea e te hunga e pā ana ki te pōuri te tārewa i ngā takoha; ka takoha te hunga mahi motuhake i tētahi reiti iti ake i te taunoa huihui.

System: KiwiSaver kua whakakaha

Scenario: Ka rēhitatia tētahi kaimahi ki te KiwiSaver
Given e piki ana ngā takoha taunoa KiwiSaver ki te 3.5% i te 1 Āperira 2026
When ka here te KiwiSaver mō ngā kaimahi katoa mai i te 1 Hūrae 2028
Then ka takoha ia kaimahi i te reiti taunoa o taua wā
Output ngā takoha taunoa huihui e hiki ana ki te 12% ā te 2032
And $1500 utu Baby Boost mō ia tamaiti ka whānau mai i te 1 Hūrae 2027
And te rēhita KiwiSaver aunoa i te whānautanga
And te takoha KiwiSaver a te kāwanatanga i te whakamatuatanga utua mai i te 1 Hūrae 2027 ahakoa kāore te tangata e takoha
And ngā takoha kaituku mahi here mō ngā kaimahi neke atu i te 65 tau mai i te 1 Hūrae 2027
And me whakamātautau pōuri kia tārewa ngā takoha
And ka takoha te hunga mahi motuhake i te 4% o te moni whiwhi mai i te 1 Hūrae 2028, ehara i te 8% huihui
And $90.0 million ia tau mō te Baby Boost
And $110.1 million te pānga tahua katoa i te 2027/28
Outcome te haumaru pūtea nui ake i te wā o te koroheketanga
Activates national-paid-parental-leave
