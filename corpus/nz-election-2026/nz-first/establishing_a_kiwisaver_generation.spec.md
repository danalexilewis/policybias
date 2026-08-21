---
type: spec
id: nz-first-establishing-a-kiwisaver-generation
title: "Compulsory KiwiSaver from birth with $1000 Crown kick-start"
status: draft
updated: 2026-08-18
summary: Universal KiwiSaver enrolment at birth with an automatic $1000 Crown contribution for New Zealand citizens, alongside wider workforce compulsion at 8% rising to 10%.
jurisdiction: NZ
sources:
  - title: Establishing a KiwiSaver Generation
    url: https://www.nzfirst.nz/establishing_a_kiwisaver_generation
tags:
  - superannuation
  - employment
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/establishing_a_kiwisaver_generation.md
sourceDigest: "sha256-47fb856ec39bb0a0"
gaps:
  - no commencement date for birth enrolment is stated
  - no fiscal cost of the $1000 contributions is estimated
  - interaction with existing KiwiSaver accounts for children already born is not described
  - the referenced wider policy of compulsory workforce enrolment at 8% then 10% is detailed on the convention speech page, not here
  - no estimate of how many births per year receive the grant is given
  - whether the $1000 is indexed or one-off is not stated
  - provider and default fund rules for new-born accounts are not described
---

# What the page states

> Birth enrolment, the $1000 Crown contribution for citizens only, and the link to wider 8%/10% compulsion are on the page.

System: KiwiSaver Generation with birth enrolment

Scenario: A child who is a New Zealand citizen is born
Given KiwiSaver participation is to become the default rather than the exception
When KiwiSaver enrolment is made compulsory at birth
Then every child begins financial life as a KiwiSaver member with a balance already growing
Output $1000 Crown contribution paid automatically at birth for New Zealand citizens only
Outcome no New Zealander enters adulthood without a savings foundation already in place
Activates nz-first-one-clarion-call
