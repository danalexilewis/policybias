---
type: spec
id: national-kiwisaver-derived
title: "Ko te KiwiSaver e pānuitia ana hei pūnaha: he utu utu ki te tekau mā rua ōrau, he Baby Boost kua raka, ko te whakamātautau pōhara te kōwhao"
status: draft
updated: 2026-08-21
summary: Ko ngā taunoa tāpiri here ki te 12% he utu utu ki ngā kaituku mahi me ngā kaimahi; he takuhe te Baby Boost ki ngā pūkete kua raka; ko te whakamātautau pōhara te kōwhao pēhanga.
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
derivesFrom: national-kiwisaver
assumptions:
  - ko tētahi takoha here i te taumata taunoa he whakaheke i te utu ka kawea e te kaimahi, he whakanui hoki i te pire utu mō te kaituku mahi i te wā kotahi
  - ko te piki o ngā taunoa tāpiri ki te 12% hei te 2032 te tikanga ka kawea e ngā taha e rua o te whiriwhiri utu he wāhi nui ake o te penapena kua raka
  - kāore e taea te whakapau i tētahi Baby Boost ka utua ki te KiwiSaver i te whānautanga mō ngā utu kāinga o nāianei; he pūtea penihana kua raka
  - ko te whakamātautau pōhara anake te huarahi kua kīia mō te kaitakoha here ki te tārewa me te kore he kaupapa tohu anō, nā reira ko ia te kōwhao pēhanga
sourceDigest: "sha256-a7bb48377c828e84"
lang: mi
translationOf: national-kiwisaver-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-be8c9a7a2f3bec1e
---

# Tō mātou māramatanga

> Ko te here me ngā taunoa tāpiri e piki ana ki te tekau mā rua ōrau hei te 2032 he utu utu ki ngā taha e rua o te hononga mahi. Ka tau te Baby Boost ki ngā pūkete KiwiSaver kua raka i te whānautanga, ehara i te moni kāinga, ā, ko te whakamātautau pōhara anake te kōwhao kua kīia ina ngau ngā takoha here.

System: Ko te KiwiSaver here hei utu utu, me tētahi takuhe kua raka me tētahi kōwhao pōhara

Scenario: Ka eke ngā taunoa tāpiri ki te tekau mā rua ōrau i raro i te here
Given ngā takoha KiwiSaver taunoa e piki ana ki te 3.5% i te 1 o Āperira 2026
And ngā takoha taunoa tāpiri e hiki ana ki te 12% hei te 2032
When ka here te KiwiSaver mō ngā kaimahi katoa mai i te 1 o Hōngongoi 2028
Then ka utu te kaituku mahi me te kaimahi i te taumata taunoa o taua wā
Output ngā takoha taunoa tāpiri e hiki ana ki te 12% hei te 2032
Outcome ka tupu ngā toenga penihana mō te hunga ka noho
But ka kawea te utu e te utu ka kawea me ngā pire utu a ngā kaituku mahi

Scenario: Ka riro i te pēpi te Baby Boost
Given he utu Baby Boost $1500 mō ia tamaiti ka whānau mai i te 1 o Hōngongoi 2027
And te rēhita aunoa KiwiSaver i te whānautanga
When ka utua te takuhe ki te pūkete o te tamaiti
Then ka noho te moni ki ngā penapena penihana kua raka
Output he utu Baby Boost $1500 mō ia tamaiti ka whānau mai i te 1 o Hōngongoi 2027
And $90.0 million ia tau mō te Baby Boost
Outcome ka taea te tīmata te tāpiri mai i te whānautanga
But kāore te kāinga e taea te whakapau i te takuhe mō ngā utu o nāianei

Scenario: Me mutu te takoha a tētahi kaimahi
Given he whakamātautau pōhara e hiahiatia ana ki te tārewa i ngā takoha
When ka ngau ngā takoha here i runga i tētahi tahua kuiti
Then ka wātea te tārewa mēnā anake ka tutuki te whakamātautau pōhara
Outcome he kōwhao pēhanga kua kīia tā te here
But ka kati te putanga e tētahi whakamātautau, ehara i te kōwhiringa tuwhera
Activates national-paid-parental-leave
