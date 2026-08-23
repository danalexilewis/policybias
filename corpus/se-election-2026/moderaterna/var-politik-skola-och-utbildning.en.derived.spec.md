---
type: spec
id: moderaterna-var-politik-skola-och-utbildning-derived
title: "Knowledge school read as a system: two cohorts leave before grades are changed"
status: draft
updated: 2026-08-22
summary: New grades land only in 2028 so today's ineligibility lasts two years, while abolished SSL moves time towards Swedish.
jurisdiction: SE
sources:
  - title: Skola och utbildning
    url: https://moderaterna.se/var-politik/skola-och-utbildning
tags:
  - education
derivesFrom: moderaterna-var-politik-skola-och-utbildning
party: moderaterna
clusters:
  - schools-education
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-skola-och-utbildning.md
sourceDigest: "sha256-d7f0bd0f0875c96e"
assumptions:
  - the autumn term 2028 means that two year-groups leave compulsory school under the present grades
  - a regulated teaching duty reduces time for things other than lessons, not necessarily the number of unqualified teachers
  - abolishing Swedish as a second language removes a credit-bearing path for pupils with another home language
  - 2.2 billion for mother tongue can be redistributed only if principals release hours and posts
lang: en
translationOf: moderaterna-var-politik-skola-och-utbildning-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-f0cc1d41dde6f77d
---

# Our understanding

> New grades and curricula are introduced only in 2028, so today's ineligibility for upper secondary has time to repeat. Teaching duty and reading in-service training are to make teachers stay. Abolished SSL and narrower mother tongue move time towards Swedish.

System: School reforms with different commencement dates

Scenario: A year-group leaves before the new grading system applies
Given one in six pupils leaves compulsory school without eligibility for upper secondary school
And new grades and curricula are introduced from the autumn term 2028
When that year-group finishes year nine before then
Then the same syllabuses and grading criteria still apply
Outcome ineligibility can be repeated in further cohorts
But the pupils bear the result of a system that politics has already written off

Scenario: Mother tongue and SSL shrink at the same time as Swedish is to weigh more
Given 314 000 compulsory-school pupils have a right to mother-tongue instruction
And the instruction costs about 2.2 billion kronor a year
When Swedish as a second language is abolished and the right to mother tongue is narrowed
Then hours and teaching posts can be moved towards basic Swedish
Outcome pupils with another home language lose a credit-bearing SSL path
But principals who already have unlicensed mother-tongue teachers bear the transition
