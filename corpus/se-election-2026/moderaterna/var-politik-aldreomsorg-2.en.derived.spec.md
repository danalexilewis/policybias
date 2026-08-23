---
type: spec
id: moderaterna-var-politik-aldreomsorg-2-derived
title: "Äldreomsorgslyftet read as a system: a time-limited central grant against the municipal payroll"
status: draft
updated: 2026-08-22
summary: The central grant trains staff in working time through 2027 while language requirements and registers are already law, and LOV without providers gives choice on paper.
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
  - 1.7 billion a year is a time-limited central grant, not a rise in municipalities' core funding
  - private providers reach the funds only if the municipality lets them through
  - language requirements and register extracts are already decided, so the open question is staff choice and LOV
  - 80 percent want to choose home care but over 70 municipalities lack independent providers, so the choice has no supply
lang: en
translationOf: moderaterna-var-politik-aldreomsorg-2-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-17359fe99f73d222
---

# Our understanding

> Äldreomsorgslyftet pays for training in working time for a limited period. Language requirements and register checks are already in place. Choice requires providers; where they are missing, LOV becomes a form without alternatives. Welfare technology takes rounds from the person who cannot manage the screen.

System: A time-limited boost against municipal staffing

Scenario: The central grant ends while the language requirement remains
Given 1.7 billion kronor a year goes to Äldreomsorgslyftet through 2026
And the boost is extended to 2027
When a Swedish language requirement applies to staff in elderly care
Then those who do not meet the requirement are to be retrained or leave
Outcome the skills requirement remains after the central grant has ended
But the municipality bears pay during training and vacancy if staff do not reach the language standard

Scenario: An older person in a municipality without independent home care
Given over 150 municipalities have a system of choice
And independent providers are missing in over 70 municipalities
When the older person is to choose a provider
Then there is nobody to reject
Outcome choice stops on paper
But the older person bears the absence of supply
