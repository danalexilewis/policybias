---
type: spec
id: socialdemokraterna-var-politik-a-till-o-sjukvard-derived
title: "Staff effort and insurance ban read as a system: the queue is shortened with earmarked billions while the base hangs on inflation uprating"
status: draft
updated: 2026-08-23
summary: The queues are met with a named staff effort, while the regions' running base is only uprated with inflation and the insurance ban reallocates the queue without itself creating care beds.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/sjukvard
tags:
  - healthcare
derivesFrom: socialdemokraterna-var-politik-a-till-o-sjukvard
party: socialdemokraterna
clusters:
  - health-care
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-sjukvard.md
sourceDigest: sha256-b73dfa415e6a071f
assumptions:
  - inflation uprating of central grants covers the price rise but not more care if the queues are caused by too few beds or staff
  - a once-named staff effort ends when the amount is spent, while the queues return if the base does not suffice
  - a ban on private insurance in public care moves patients in the queue; it does not add beds
  - a zero vision against deaths from lack of beds binds politically without saying how many beds must be added
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-sjukvard-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c02e838fea8d78d2
---

# Our understanding

> The queues are met with an earmarked staff effort and more money for maternity care, while the regions' everyday running is only uprated with inflation. The ban on private health insurance in publicly financed care removes a shortcut, but does not create care beds. Binding guidelines and the zero vision against deaths from lack of beds set targets without saying how capacity is built.

System: An inflation-indexed base and earmarked queue money

Scenario: A region meets next year's pay and rents
Given central grants that are uprated with inflation each year
And queues that require more staff than today
When inflation is counted off but the queues remain
Then the base follows prices, not the need for care
Outcome the staff effort must carry more than the named queue
But when the effort is spent only the uprating remains

Scenario: A patient with private insurance seeks public care
Given private health insurance that gives priority in publicly financed care
When the insurance is banned there
Then the insured person waits in the same queue as the uninsured
Outcome the fast track is closed
But the queue is not shortened by the ban itself

Scenario: A hospital lacks care beds
Given binding guidelines for care beds and a zero vision against deaths caused by lack of beds
When occupancy becomes too high
Then the guideline can be recorded without the beds existing
Outcome responsibility for capacity remains with those who are to staff the rooms
But the zero vision carries no financing of its own
