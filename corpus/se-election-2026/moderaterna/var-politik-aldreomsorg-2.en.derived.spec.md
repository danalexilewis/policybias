---
type: spec
id: moderaterna-var-politik-aldreomsorg-2-derived
title: "Choice in elderly care read as a system: LOV without providers gives choice on paper"
status: draft
updated: 2026-08-23
summary: Staff choice and LOV promise influence where independent providers are absent, and welfare technology moves rounds from those who cannot handle the screen.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://moderaterna.se/var-politik/aldreomsorg-2
tags:
  - elderly-care
  - social-welfare
derivesFrom: moderaterna-var-politik-aldreomsorg-2
party: moderaterna
clusters:
  - elderly-welfare
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-aldreomsorg-2.md
sourceDigest: "sha256-77a8cbe0abbf14f0"
assumptions:
  - 80 percent want to choose home care but more than 70 municipalities lack independent providers, so the choice has no supply
  - staff choice for close personal care requires available staff of the right gender, which the policy does not dimension
  - welfare technology takes rounds from those who cannot handle the screen or sensors
  - the leadership inquiry and malnutrition mapping are proposals, not financed reforms
lang: en
translationOf: moderaterna-var-politik-aldreomsorg-2-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9a400badb17668b9
---

# Our understanding

> Choice requires providers; where they are absent, LOV becomes a form without alternatives. Staff choice for close personal care requires available staff. Welfare technology takes rounds from those who cannot handle the screen.

System: Choice without supply and technology as rounds

Scenario: An older person in a municipality without independent home care
Given more than 150 municipalities have choice systems
And independent home care providers are absent in more than 70 municipalities
When the older person is to choose a provider or staff
Then there is no one to decline
Outcome choice stays on paper
But the older person bears the absence of supply

Scenario: Welfare technology meets staff who cannot use it
When routine tasks and rounds move to welfare technology
Then staff should gain time for more qualified care work
Outcome those who cannot handle the technology still bear rounds and workload
