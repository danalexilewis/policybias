---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter-derived
title: "Green tax shift read as a system: income-tax cuts paid by whoever still pollutes"
status: draft
updated: 2026-08-23
summary: Lower tax on work is funded by higher tax on environmental harm, so the net transfer depends on how much a household still drives, heats and produces with fossil fuel.
jurisdiction: SE
sources:
  - title: Ekonomi och skatter
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/ekonomi-och-skatter
tags:
  - taxation
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter
party: centerpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter.md
sourceDigest: sha256-f8d73f4576c22f12
assumptions:
  - a tax cut on work that is financed by environmental tax is a transfer, not a free lunch
  - rural households that heat and drive on fossil fuel pay more of the environmental leg
  - urban wage earners with low mileage take more of the income-tax cut
  - cheaper hiring at the edge of the labour market raises demand for those workers only if product demand is there
lang: en
translationOf: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5150b343441e1ab0
---

# Our understanding

> The policy's arithmetic identity is a green tax shift: less tax on jobs and firms, more tax on environmental harm. Low and middle earners are promised more left in the wallet after bills. That holds if the income-tax cut exceeds whatever they pay in higher environmental tax. Cheaper hiring for small firms and for people far from work is a labour-demand tool without a rate.

System: Income-tax cut financed by environmental tax

Scenario: A rural household with a car and oil heat receives a lower tax on wages
Given a green tax shift that raises tax on environmental harm
When the household files its return
Then the wage tax may fall while fuel and heat cost more
Outcome take-home pay after bills can rise or fall with the fossil share of the household
But the policy prints neither rate, so the net cannot be checked

Scenario: A small firm considers hiring someone far from the labour market
Given hiring that is too expensive and complicated today
When the cost of that hire is lowered
Then the firm may take the person on
Outcome employment at the margin can rise
But without a stated cut in kronor the size of the nudge is unknown
