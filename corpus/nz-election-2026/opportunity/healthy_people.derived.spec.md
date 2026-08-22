---
type: spec
id: opportunity-healthy-people-derived
title: "Healthy People read as a system: a $13 return that needs the $1 first"
status: draft
updated: 2026-08-18
summary: The $1-to-$13 claim is a rate of return, not a budget; without a primary-care dollar figure the saving cannot be booked, and a ten-year plan does not bind the next Parliament on its own.
jurisdiction: NZ
sources:
  - title: Healthy People
    url: https://www.opportunity.org.nz/healthy_people
tags:
  - healthcare
party: opportunity
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/healthy_people.md
derivesFrom: opportunity-healthy-people
assumptions:
  - $13 saved per $1 is a published rate, not an appropriation; we do not treat it as cash in the first Budget
  - a ten-year cross-party plan needs a statute or a locked fund to outlast a change of government; a process is not that lock
  - reinstating smokefree 2025 settings is a specific legal reversal whose remaining years of effect depend on when it is passed
sourceDigest: "sha256-59d91a23e3a12473"
---

# Our understanding

> Every $1 into primary care is claimed to save $13 later, alongside a ten-year cross-party plan and smokefree 2025 restored — but the $1 is a claim not an appropriation, and the plan binds no future Parliament.

System: A return that needs the spend first

Scenario: The $1 is not yet in the Budget
Given a claimed $13 of wider-system saving for each $1 of primary care
When the first Budget is written
Then the saving cannot be booked unless the $1 is actually spent
Outcome prevention can cut later hospital cost if the spend happens and is held
But the Crown still owes the first dollar before any billions can be booked
Activates opportunity-tax-reset

Scenario: A later government inherits the ten-year plan
When a new Parliament arrives
Then a plan without a statute can be parked
Outcome the policy's cross-party process is the intended lock
But the next government can still shelve the plan as quickly as any other three-year cycle
Activates opportunity-intergenerational-infrastructure
