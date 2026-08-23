---
type: spec
id: moderaterna-var-politik-skola-och-utbildning-derived
title: "Knowledge school read as a system: two cohorts finish before grades change"
status: draft
updated: 2026-08-23
summary: New grades land only in 2028 so today's unqualified teachers remain for two years, while abolished Swedish as a second language shifts time towards Swedish.
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
  - autumn term 2028 means two cohorts leave compulsory school under the current grades
  - regulated teaching duty reduces time for things other than lessons, not necessarily the number of unqualified teachers
  - abolished Swedish as a second language removes a qualification-bearing path for pupils with another home language
  - 2.2 billion for mother tongue can be reallocated only if the organisers release hours and posts
lang: en
translationOf: moderaterna-var-politik-skola-och-utbildning-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-d53946a82d9c5875
---

# Our understanding

> New grades and curricula are introduced only in 2028, so today's upper secondary ineligibility can repeat. Teaching duty and reading training should keep teachers in post. Abolished Swedish as a second language and narrower mother tongue shift time towards Swedish.

System: School reforms with different commencement dates

Scenario: A cohort leaves before the new grading system applies
Given one in six pupils leaves compulsory school without eligibility for upper secondary school
And new grades and curricula are introduced from autumn term 2028
When that cohort finishes year nine before then
Then the same syllabuses and grade criteria still apply
Outcome ineligibility can repeat in further cohorts
But the pupils bear the result of a system the policy has already condemned

Scenario: Mother tongue and Swedish as a second language shrink while Swedish should weigh more
Given 314,000 compulsory school pupils have the right to mother-tongue instruction
And the instruction costs around 2.2 billion kronor per year
When Swedish as a second language is abolished and the right to mother tongue is narrowed
Then hours and teacher posts can shift towards basic Swedish
Outcome pupils with another home language lose a qualification-bearing Swedish as a second language path
But organisers who already have unqualified mother-tongue teachers bear the transition
