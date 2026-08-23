---
type: spec
id: moderaterna-var-politik-migration-derived
title: "Wage requirement read as a system: third countries are shut out while those on the register are assumed to take the jobs"
status: draft
updated: 2026-08-22
summary: A raised wage requirement prices out low-paid immigration from third countries against the assumption that 350 000 registered people take the jobs, while a re-migration grant creates a cash way out.
jurisdiction: SE
sources:
  - title: Migration
    url: https://moderaterna.se/var-politik/migration
tags:
  - immigration
derivesFrom: moderaterna-var-politik-migration
party: moderaterna
clusters:
  - migration-integration
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-migration.md
sourceDigest: "sha256-d040e491594bf4bb"
assumptions:
  - 90 percent of median pay closes occupations below the threshold if the exemptions do not cover them
  - people registered with the Public Employment Service are substitutes only if they take the cleaning and kitchen jobs the page points to
  - a re-migration grant of 350 000 kronor creates a cash incentive to leave, with the fraud risk the page mentions
  - 60 percent fewer asylum seekers is already an outcome, so the EU floor locks a level that has already fallen
lang: en
translationOf: moderaterna-var-politik-migration-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e7b15d82b7363dce
---

# Our understanding

> A raised wage requirement makes low-paid jobs from third countries unprofitable to recruit to, with 350 000 registered people as the intended replacement. The re-migration grant is a cash way out. The large fall in asylum seekers is already counted, so the EU minimum is to hold the floor.

System: A price on labour and paid re-migration

Scenario: A cleaning job from a third country does not meet the wage requirement
Given around 350 000 people are registered with the Public Employment Service
And the support requirement is raised to 90 percent of median pay
When an employer wants to hire from a country outside the EU for a low-paid job
Then the permit is as a rule not to be granted
Output just over 33 000 kronor
Outcome the job is instead to be filled by someone already in the country
But the employer bears the vacancy if those registered do not take the task

Scenario: A household considers voluntary re-migration
Given a re-migration grant has existed for 40 years but few have been granted it
When the grant is raised
Then adults and children can receive a sum to return
Output 350 000 kronor for adults
And 25 000 kronor for children
And at most 600 000 kronor per family
Outcome those who have not entered society get a paid way out
But the rules are at the same time to meet the risk of fraud and incorrect payments
