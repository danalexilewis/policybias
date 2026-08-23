---
type: spec
id: vansterpartiet-var-politik-politik-a-o-skattepolitik-derived
title: "The 470-billion baseline read as a system: a ceiling for modest pay, open rates above it"
status: draft
updated: 2026-08-23
summary: Fifty thousand kronor a month is a hard floor against tax rises; everything else — bank levy, green ROT, vehicle tax — is named without a rate, so the 470-billion restoration is a direction, not a scored budget.
jurisdiction: SE
sources:
  - title: Skattepolitik
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/skattepolitik
tags:
  - taxation
party: vansterpartiet
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-skattepolitik.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-skattepolitik
assumptions:
  - the 470 billion kronor a year is a historical counterfactual of a lower tax-to-GDP ratio, not a scored yield of the bullet list
  - shielding pay under 50 000 kronor a month concentrates any rise on pay and capital above that line
  - a bank oligopoly tax without a rate can be small or confiscatory; incidence may pass into fees
  - equal tax on benefits raises net income for the sick and unemployed only if the rate on wages is the reference, which is not tabulated
sourceDigest: sha256-e865926055e71dc0
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-skattepolitik-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-4c4baf3e810a8c6b
---

# Our understanding

> The page's big number is what was lost, not what the new tools raise. A worker under 50 000 kronor a month is promised no rise; banks, green ROT and thirsty cars are asked to pay without published rates. Equalising tax on benefits and wages is a fairness rule whose kronor-per-person the policy does not show.

System: A pay shield beside unrated levies

Scenario: A modest wage is held harmless while other bases are squeezed
Given 470 billion kronor a year is the page's picture of revenue already forgone
And pay under 50 thousand kronor a month must not see a rise
When the bullet-list taxes are turned on
Then any repair of the baseline must come from banks, high pay, capital, union-fee relief design, green ROT and vehicle tax
Outcome a person below the monthly line keeps their rate
But a customer of a bank or a driver of a large car may pay through prices if firms pass the levy on
Activates vansterpartiet-var-politik-politik-a-o-klimat

Scenario: Benefit income is aligned with wage tax without a published table
Given sick pay, unemployment and sickness pensions are taxed more heavily than wages today in the page's telling
When equal tax on equal income returns
Then those households keep more of a given gross payment
Outcome work and non-work cash are treated alike
But the krone gain per person is unknown until the rate schedule exists
