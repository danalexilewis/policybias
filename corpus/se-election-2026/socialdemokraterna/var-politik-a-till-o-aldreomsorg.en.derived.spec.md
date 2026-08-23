---
type: spec
id: socialdemokraterna-var-politik-a-till-o-aldreomsorg-derived
title: "Staffing effort read as a system: more time requires colleagues the act names but does not recruit"
status: draft
updated: 2026-08-23
summary: The act and the boost raise skills in paid time, which takes staff out of the roster just when the billion-krona effort is to give more colleagues — and the amount is unstated.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/aldreomsorg
tags:
  - elderly-care
  - social-welfare
  - healthcare
derivesFrom: socialdemokraterna-var-politik-a-till-o-aldreomsorg
party: socialdemokraterna
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-aldreomsorg.md
sourceDigest: sha256-f88344016e7a7776
assumptions:
  - training in paid working time reduces hours present until the stand-in exists
  - a requirement for doctors and nurses around the clock in home care competes with the same occupations as the hospitals
  - a billion-krona effort without an amount can be one year or three; the municipality cannot budget against a word
  - a language requirement without enough language training shuts out those already working, before new staff are in place
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-aldreomsorg-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-f231ef12f7ab2c48
---

# Our understanding

> More time with the older person requires more hands on the roster. The boost takes the same hands into training in paid time. A requirement for doctors and nurses around the clock in home care meets the same shortage as inpatient care. The floor uprates central grants with inflation, which slows cuts but does not buy the unnamed billion.

System: Time in care against the same staff pool

Scenario: An assistant nurse trains in paid time
Given the Elderly Care Boost made permanent so that staff train as assistant nurses in paid working time
When the person enters training
Then the hour is missing from the home-care roster
Outcome skills are raised
But the older person meets a stand-in or a cancelled visit until the replacement exists

Scenario: Home care is to have a nurse around the clock
Given a requirement of access to doctors and nurses around the clock in home care
When the requirement applies
Then the same occupations are to suffice for both residential care and the home
Outcome medical skills are strengthened on paper
But recruitment is not financed in an amount

Scenario: The municipality uprates the central grant with inflation
Given a floor where central grants to municipalities are uprated with inflation
When prices rise in line with the index
Then cuts are counteracted
Outcome care follows prices
But more colleagues require more than the index
