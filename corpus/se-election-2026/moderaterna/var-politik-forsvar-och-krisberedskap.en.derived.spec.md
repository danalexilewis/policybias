---
type: spec
id: moderaterna-var-politik-forsvar-och-krisberedskap-derived
title: "Rearmament read as a system: loans now, 3.5 percent comes later, Gripen thins the fleet"
status: draft
updated: 2026-08-23
summary: The step from 2.8 percent to 3.5 percent in 2030 remains to be financed, and donated Gripen thin the own fleet before E/F are delivered.
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
  - loans to 2035 shift the interest burden onto later budgets
  - up to 16 donated Gripen C/D leave a hole in the fleet until new E/F are delivered
  - the defence industry's capacity is the bottleneck that caps the donation rate
lang: en
translationOf: moderaterna-var-politik-forsvar-och-krisberedskap-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-dd754daabf7e68f8
---

# Our understanding

> The 3.5 percent target in 2030 is the next step from 2.8 percent in 2026, partly on loans to 2035. Donating Gripen C/D takes aircraft out of own readiness before replacement exists.

System: Appropriation gap to 2030 and fleet gap

Scenario: The appropriation is to climb from this year's share to NATO's military floor
Given 2.8 percent of GDP in 2026
And the target of 3.5 percent military spending is to be reached in 2030
When the next parliamentary term's budgets are set
Then the difference must be filled with more appropriation or more loans
Outcome the 2030 target is carried by decisions that are not costed in the 2026 level
But later taxpayers bear the interest if the loans remain to 2035

Scenario: The fleet donates aircraft that are to be replaced
Given up to 16 JAS 39 Gripen C/D are donated from the Swedish fleet
And Ukraine is preparing to buy 20 Gripen E/F
When the donation is carried out
Then the Swedish air force waits for new E/F as replacement
Outcome air defence is thinned in the interval between donation and delivery
But readiness in Sweden bears the gap
