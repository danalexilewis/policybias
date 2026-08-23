---
type: spec
id: moderaterna-var-politik-forsvar-och-krisberedskap-derived
title: "Rearmament read as a system: borrowing now, stocks thinned by donation, 3.5 percent comes later"
status: draft
updated: 2026-08-22
summary: The step to 175 billion is taken, 3.5 percent in 2030 remains to be financed, and donated Gripen thin the home fleet before E/F are delivered.
jurisdiction: SE
sources:
  - title: "Moderaternas försvarspolitik 2026: Nato, Ukraina, totalförsvar och ett starkare svenskt försvar"
    url: https://moderaterna.se/var-politik/forsvar-och-krisberedskap
tags:
  - defence
derivesFrom: moderaterna-var-politik-forsvar-och-krisberedskap
party: moderaterna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-forsvar-och-krisberedskap.md
sourceDigest: "sha256-385b507ed9963261"
assumptions:
  - 2.8 percent in 2026 leaves a gap up to 3.5 percent in 2030 that must be filled after the election
  - borrowing until 2035 moves the interest burden onto later budgets
  - 16 donated Gripen C/D leave a hole in the fleet until new E/F are delivered
  - a raised daily allowance from 146 to 200 kronor is the first rise since 2017 and remains a daily allowance, not a wage
lang: en
translationOf: moderaterna-var-politik-forsvar-och-krisberedskap-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-34ed66081412d9f9
---

# Our understanding

> The appropriation of 175 billion is the current level. The 3.5 percent target in 2030 is the next step, partly on borrowing until 2035. Donation of Gripen C/D takes aircraft out of national readiness before the replacement exists. The daily allowance is raised from a low base.

System: Appropriation level now, capability gap until matériel and personnel exist

Scenario: The appropriation is to climb from this year's share to Nato's military floor
Given 2.8 percent of GDP in 2026
And the 3.5 percent military target is to be reached in 2030
When the next parliamentary term's budgets are set
Then the difference must be filled with more appropriation or more borrowing
Outcome the 2030 target is carried by decisions that are not cash-booked in the 2026 level
But later taxpayers bear the interest if the loans remain until 2035

Scenario: The fleet gives away aircraft that are to be replaced
Given up to 16 JAS 39 Gripen C/D are given from the Swedish fleet
And Ukraine is preparing to buy 20 Gripen E/F
When the donation is carried out
Then the Swedish air force waits for new E/F as replacement
Outcome air defence is thinned in the interval between donation and delivery
But readiness in Sweden bears the gap
