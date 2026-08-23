---
type: spec
id: liberalerna-politik-sjukvard-derived
title: "Named GP contact read as a system: a right without a staffing floor"
status: draft
updated: 2026-08-23
summary: A named doctor for every patient and respite as a right land on the same workforce the page already says is short of colleagues.
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
  - a named GP contact only binds if list size and hours are capped; the policy states the right, not the cap
  - rare-disease drugs and extra hospital colleagues compete for the same budget the page leaves unpriced
  - respite as a legal right is an open municipal claim until hours and pay are set
  - training time through a whole career reduces clinic hours unless headcount rises first
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8021d1d5d026abdb
translationOf: liberalerna-politik-sjukvard-derived
lang: en
---

# Our understanding

> A named doctor for every patient is a scheduling rule, not a new clinic. Where lists are already full, the right queues behind recruitment. Respite as a right and rare-disease medicines are extra claims on the same unpaid gap.

System: Named contact competing with an unpriced workforce

Scenario: A clinic still short of colleagues takes on a named-contact duty
Given more colleagues are needed in hospitals and health centres across the country
And working conditions must improve markedly
When every patient is assigned a named doctor
Then list time is reserved for continuity instead of drop-in volume
Outcome patients with chronic illness gain a stable contact
But remaining staff absorb the lists until recruitment lands

Scenario: A carer claims respite as a right
Given relatives need more support and respite is to become a right
When the carer books relief
Then the municipality must find cover rather than offer a favour
Outcome the household gets a break
But the cost sits in elderly and social care until hours are priced
Activates liberalerna-politik-aldreomsorg
