---
type: spec
id: moderaterna-var-politik-halso-och-sjukvard-2-derived
title: "Care guarantee read as a system: regions bear the penalty while the patient moves"
status: draft
updated: 2026-08-22
summary: Liability to pay and national brokerage move queue pressure to regions with spare capacity, while the psychiatry effort is a one-year appropriation.
jurisdiction: SE
sources:
  - title: Hälso- och sjukvård
    url: https://moderaterna.se/var-politik/halso-och-sjukvard-2
tags:
  - healthcare
derivesFrom: moderaterna-var-politik-halso-och-sjukvard-2
party: moderaterna
clusters:
  - health-care
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-halso-och-sjukvard-2.md
sourceDigest: "sha256-193264634d64fa64"
assumptions:
  - liability to pay bites only if the amount is larger than the cost of keeping the queue
  - national care brokerage favours patients who can travel and take care in another region
  - 5.4 billion to psychiatry in 2026 is a one-year appropriation, not a standing BUP guarantee
  - more age groups in BUP raise demand before first-line care has been built out
lang: en
translationOf: moderaterna-var-politik-halso-och-sjukvard-2-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-8d381bd83f55df06
---

# Our understanding

> A tighter care guarantee with liability to pay makes the home region the payer when the time is missed, so the queue is to be solved through care in another region rather than a higher regional tax. The psychiatry effort is a one-year appropriation. A higher BUP age fills the same clinics with more year-groups.

System: Care queues as a regional payment problem

Scenario: A region weighs the penalty against shortening its own queue
Given regions become liable to pay when the care guarantee is not met
And almost 25 billion kronor has already gone to shortening care queues
When a patient still waits longer than the guarantee
Then the home region is to pay for care elsewhere
Outcome the queue is moved to regions with spare capacity
But patients who cannot travel stay in the region that missed the time

Scenario: BUP receives more year-groups in the same year as the appropriation is raised
Given 5.4 billion kronor is put into psychiatry during 2026
When the age limit for BUP is raised and young adults are to have a named care contact
Then the same clinics are to receive more age groups
Output 21 years as the upper age limit instead of 18
Outcome pressure on BUP can rise before first-line care has had time to relieve it
But young adults bear the wait if the build-out lags
