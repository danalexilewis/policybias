---
type: spec
id: moderaterna-var-politik-ekonomisk-politik-och-foretagande-derived
title: "At least half kept read as a system: the threshold carries the household, corporation tax carries the Treasury"
status: draft
updated: 2026-08-22
summary: The marginal-tax cap for ordinary occupations is paid by the Treasury at the threshold, while unspecified corporation tax and employers' contributions leave firms' profit without a stated rate.
jurisdiction: SE
sources:
  - title: Ekonomisk politik och företagande
    url: https://moderaterna.se/var-politik/ekonomisk-politik-och-foretagande
tags:
  - economy
derivesFrom: moderaterna-var-politik-ekonomisk-politik-och-foretagande
party: moderaterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-ekonomisk-politik-och-foretagande.md
sourceDigest: "sha256-e165259e1005eaf1"
assumptions:
  - at least half kept is a cap on marginal tax above the threshold, not a promise of lower municipal tax
  - 1 800 kronor a month in 2026 is a worked example for an ordinary family, not an average for all deciles
  - a corporation-tax cut without a stated rate pushes the revenue loss onto later budgets
  - central environmental permitting speeds capital projects only if the queue at the new authority is shorter than at the county boards
lang: en
translationOf: moderaterna-var-politik-ekonomisk-politik-och-foretagande-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-930356adaaf3ba62
---

# Our understanding

> The cap of at least half kept sits on the national threshold, so the Treasury loses just where the shift worker now pays more than half. The family example of 1 800 kronor a month is a selection. Corporation tax and employers' contributions are cut without a percentage rate. Centralising permits moves the queue, not necessarily the time.

System: Marginal tax at the threshold and unspecified corporation tax

Scenario: A shift worker passes the national income threshold
Given more than 50 percent tax is taken on every hundred kronor above the national income threshold
When national income tax is changed so that at least half remains
Then the shift worker keeps more of extra hours
Outcome the Treasury loses just on the margin where extra work is taxed hardest today
But the deficit must be covered somewhere else in a central budget of around 1 500 billion kronor

Scenario: A permit case leaves the county administrative board
When a central environmental permitting authority takes over from county administrative boards and the land and environment courts
Then the same assessment is to happen in one place
Outcome the queue moves to the new authority
But the project waits just as long if capacity only changes address
