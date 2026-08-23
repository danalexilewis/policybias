---
type: spec
id: national-responsibility-rules-derived
title: "Ko ngā ture kawenga e pānuitia ana hei pūnaha: he toenga mā ngā tapahi whakapau, ko te nama he ara, ehara i te taupane wā"
status: draft
updated: 2026-08-21
summary: Ko te toenga mā te aukati whakapau, kaua ki ngā tāke hou, te tikanga ka rere te ara ki te 30% o te GDP mā ngā tapahi hōtaka; ko te ture nama he ara, ehara i te taupane mō tēnei wā.
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
derivesFrom: national-responsibility-rules
assumptions:
  - ki te eke te toenga me te kore tāke hou, ko te tātai o tētahi wāhi whakapau iti ake o te GDP ko ngā tapahi hōtaka me te whakarite anō, ehara i te hiki moni whiwhi
  - ko te heke ki te 30 ōrau o te GDP i roto i te wā he ara, nā reira ka taea te noho o te whakapau tata ki runga ake i tērā wāhi i te wā e kīia ana kei te ū ngā ture
  - ko te piko o te nama ki raro iho i te 40 ōrau o te GDP i roto i te wā, mai i te tihi matapae 46.1 ōrau, te tikanga ka taea te mutu o tēnei wā me te nama kei runga ake i te whā tekau ōrau
  - ka waiho tonu te tiaki o mua i te whakapau iti-arotahi hei toenga me whakaheke
sourceDigest: "sha256-b7fb6b4cafc519ae"
lang: mi
translationOf: national-responsibility-rules-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ce296f1f5d6d96da
---

# Tō mātou māramatanga

> Ko te toenga mā te aukati whakapau, kaua ki ngā tāke hou, te tikanga ka rere te ara ki te toru tekau ōrau o te GDP mā ngā tapahi hōtaka me te whakarite anō. Ko te piko o te nama ki raro iho i te whā tekau ōrau he ara wā roa, nā reira ka taea te noho o te whakapau tata ki runga ake i tērā wāhi i te wā e ū ana ngā ture, ā, ka taea te mutu o tēnei wā me te nama kei runga ake i te whā tekau.

System: Ko ngā ture tahua hei aukati whakapau me tētahi ara nama, ehara i te taupane wā

Scenario: He toenga me te kore tāke hou
Given te hoki ki te toenga mā te aukati whakapau, kaua ki ngā tāke hou
And te whakapau matua a te Karauna e heke ana ki te 30 ōrau o te GDP i roto i te wā
And $50 billion i ngā penapena kua tutuki puta noa i ngā Tahua e toru kua hipa
When ka tiakina ngā ture
Then ka rere te ara ki te whāinga wāhi whakapau mā te whakarite anō me ngā tapahi ki ngā hōtaka iti-arotahi
Output te hoki ki te toenga whakahaere i te 2028/29
And te whakapau matua a te Karauna e heke ana ki te 30 ōrau o te GDP i roto i te wā
Outcome ka noho iti ngā tāke nā te hoahoa i te kaupapa here
But ka ngaro te pūtea a ngā hōtaka iti-arotahi kia wātea ai te wāhi

Scenario: Te nama puta noa i tēnei wā
Given te matapae o te nama matua a te Karauna ka eke ki te 46.1 ōrau o te GDP i te 2027/28
And te piko o te nama ki raro iho i te 40 ōrau o te GDP i roto i te wā
When ka rere te matapae o tēnei wā
Then ka taea te noho o te nama ki runga ake i te whāinga wā roa puta noa i te wā tata
Output te piko o te nama ki raro iho i te 40 ōrau o te GDP i roto i te wā
Outcome ko te raina nama wā roa he ara, ehara i te tuanui e here ana i tēnei wā
But ka hanga anō te ārai i te piko anake o te ānau
