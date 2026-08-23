---
type: spec
id: moderaterna-var-politik-ekonomisk-politik-och-foretagande-derived
title: "At least half retained read as a system: the threshold bears the household, corporate tax bears the treasury"
status: draft
updated: 2026-08-23
summary: The marginal tax cap for ordinary occupations is paid by the treasury at the threshold, while unspecified corporate tax and employer contributions leave companies' profits without a stated rate.
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
  - at least half retained is a cap on marginal tax above the threshold, not a promise of lower municipal tax
  - lower corporate tax without a stated rate pushes the revenue loss onto later budgets
  - central environmental permitting speeds capital projects only if the queue at the new authority is shorter than at the county administrative boards
lang: en
translationOf: moderaterna-var-politik-ekonomisk-politik-och-foretagande-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-81fec529510ec6d2
---

# Our understanding

> The cap on at least half retained sits at the state threshold, so the treasury loses just where the shift worker now pays more than half. Corporate tax and employer contributions are lowered without a percentage rate. Permit centralisation moves the queue, not necessarily the time.

System: Marginal tax at the threshold and unspecified corporate tax

Scenario: A shift worker passes the state income threshold
Given more than 50 percent in tax is taken on every hundred-krona above the state income threshold
When state income tax is changed so that at least half is retained
Then the shift worker keeps more of extra shifts
Outcome the treasury loses just at the margin where extra work is taxed hardest today
But the shortfall must be covered somewhere else in a state budget of around 1,500 billion kronor

Scenario: A permit case leaves the county administrative board
When a central environmental permitting authority takes over from county administrative boards and land and environment courts
Then the same assessment should happen in one place
Outcome the queue moves to the new authority
But the project waits just as long if capacity only changes address
