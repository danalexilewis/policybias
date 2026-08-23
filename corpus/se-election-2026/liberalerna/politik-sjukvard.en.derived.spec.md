---
type: spec
id: liberalerna-politik-sjukvard-derived
title: "Named doctor contact read as a system: a right without a staffing floor"
status: draft
updated: 2026-08-23
summary: A named doctor for every patient and relief as a right land on the same workforce the policy already says lacks colleagues.
jurisdiction: SE
sources:
  - title: Sjukvård – Liberalerna
    url: https://www.liberalerna.se/politik/sjukvard
tags:
  - healthcare
derivesFrom: liberalerna-politik-sjukvard
party: liberalerna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-sjukvard.md
sourceDigest: sha256-81e3a6b1e95b57b0
assumptions:
  - a named GP contact binds only if list size and hours have caps; the policy asserts the right, not the cap
  - medicines for rare diseases and extra hospital colleagues compete for the same budget the policy leaves unpriced
  - relief as a legal right is an open municipal demand until hours and pay are set
  - training time across a whole career cuts reception hours unless headcount rises first
lang: en
translationOf: liberalerna-politik-sjukvard-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-886bb61b85046325
---

# Our understanding

> A named doctor for every patient is a scheduling rule, not a new clinic. Where lists are already full the right queues behind recruitment. Relief as a right and medicines for rare diseases are extra demands on the same unpaid gap.

System: Named contact competing with an unpriced workforce

Scenario: A clinic still short of colleagues takes on a named-contact duty
Given more colleagues are needed at hospitals and health centres across the country
And working conditions must improve markedly
When every patient is assigned a named doctor
Then list time is reserved for continuity instead of drop-in volume
Outcome patients with chronic illness get a stable contact
But remaining staff absorb the lists until recruitment lands

Scenario: A relative demands relief as a right
Given relatives need more support and relief is to become a right
When the relative books respite care
Then the municipality must find cover instead of offering a service
Outcome the household gets a break
But the cost sits in elderly and social care until the hours are priced
Activates liberalerna-politik-aldreomsorg
