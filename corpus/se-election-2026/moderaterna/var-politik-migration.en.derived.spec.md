---
type: spec
id: moderaterna-var-politik-migration-derived
title: "Wage requirement read as a system: third countries shut out while the registered are assumed to take the jobs"
status: draft
updated: 2026-08-23
summary: A raised wage requirement prices out low-paid immigration from third countries on the assumption that 350,000 registered people take the jobs, while return grants create a cash exit.
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
  - 90 percent of the median wage shuts out occupations below the threshold if the exceptions do not cover them
  - those registered with the Public Employment Service are only a substitute if they take the cleaning and dishwashing jobs the policy points to
  - return grants of 350,000 kronor create a cash incentive to leave, with the fraud risk the policy mentions
lang: en
translationOf: moderaterna-var-politik-migration-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9262f235c30c7a5a
---

# Our understanding

> A raised wage requirement makes low-paid jobs from third countries unprofitable to recruit to, with 350,000 registered people as the intended replacement. The return grant is a cash exit.

System: Price on labour and paid return

Scenario: A cleaning job from a third country does not reach the wage requirement
Given around 350,000 people are registered with the Public Employment Service
And the maintenance requirement is raised to 90 percent of the median wage
When an employer wants to hire from a country outside the EU for a low-paid job
Then the permit should as a rule not be granted
Output just over 33,000 kronor
Outcome the job should instead be filled by someone already in the country
But the employer bears the vacancy if the registered do not take the task

Scenario: A household considers voluntary return
When the return grant is raised
Then adults and children can receive an amount to return
Output 350,000 kronor for adults
And 25,000 kronor for children
And up to 600,000 kronor per family
Outcome those who have not entered society receive a paid exit
But the rules should at the same time meet the risk of fraud and incorrect payments
