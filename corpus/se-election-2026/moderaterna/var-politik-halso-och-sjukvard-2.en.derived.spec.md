---
type: spec
id: moderaterna-var-politik-halso-och-sjukvard-2-derived
title: "Care guarantee read as a system: regions bear fines while the patient moves"
status: draft
updated: 2026-08-23
summary: Liability and national brokerage shift queue pressure to regions with spare capacity, while a raised child and adolescent psychiatry age fills the same clinics with more year groups.
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
  - liability bites only if the amount is greater than the cost of keeping the queue
  - national care brokerage favours patients who can travel and receive care in another region
  - more age groups in child and adolescent psychiatry increase demand before first line has been expanded
lang: en
translationOf: moderaterna-var-politik-halso-och-sjukvard-2-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7699c59954927f46
---

# Our understanding

> A tighter care guarantee with liability makes the home region the payer when time is missed, so the queue should be solved through care in another region rather than raised regional tax. A raised child and adolescent psychiatry age fills the same clinics with more year groups.

System: Care queues as a regional payment problem

Scenario: A region compares fines with shortening its own queue
Given regions become liable when the care guarantee is not met
When a patient still waits longer than the guarantee
Then the home region should pay for care elsewhere
Outcome the queue shifts to regions with spare capacity
But patients who cannot travel remain in the region that missed the time

Scenario: Child and adolescent psychiatry gets more year groups before first line relieves
When the age limit for child and adolescent psychiatry is raised and young adults should have a fixed care contact
Then the same clinics should receive more age groups
Output 21 years as the upper age limit instead of 18
Outcome pressure on child and adolescent psychiatry may increase before first line has relieved
But young adults bear the wait if expansion lags
