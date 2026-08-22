---
type: spec
id: nz-first-establishing-a-kiwisaver-generation-derived
title: "KiwiSaver Generation read as a system: a locked $1000 at birth with an unnamed fiscal cost"
status: draft
updated: 2026-08-21
summary: A citizen-only Crown kick-start compounds until adulthood, but without a fiscal cost the Crown outlay cannot be sized, and non-citizen births receive nothing.
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
derivesFrom: nz-first-establishing-a-kiwisaver-generation
assumptions:
  - a contribution paid at birth and left to compound until adulthood is locked for that period; early access rules are not restated here, so we treat the nest-egg claim as a hold-to-adulthood stock
  - a once-per-lifetime $1000 per citizen birth has a fiscal cost equal to births times that amount; the policy publishes neither the annual birth count nor a Crown cost estimate
  - citizenship at birth gates the kick-start; a child without that status is enrolled into compulsion elsewhere only if the wider workforce rules apply later
  - the policy ties birth enrolment to compulsory workforce contributions detailed on the clarion-call page; the kick-start alone does not set adult rates
sourceDigest: "sha256-47fb856ec39bb0a0"
---

# Our understanding

> Every citizen newborn would receive a $1000 Crown kick-start, locked in KiwiSaver until adulthood, but the fiscal cost, annual birth count and early-access rules are missing.

System: Birth KiwiSaver kick-start as a locked, citizen-gated stock

Scenario: A citizen child receives the kick-start and holds to adulthood
Given an automatic Crown contribution at birth for New Zealand citizens only
And a once-per-lifetime investment that compounds for decades
When the child reaches adulthood with the account still growing
Then a savings foundation is already in place before workforce contributions begin
Output $1000 Crown contribution paid automatically at birth for New Zealand citizens only
Outcome no qualifying citizen enters adulthood without that starting balance
But the money is unavailable as cash through childhood
Activates nz-first-one-clarion-call

Scenario: A child who is not a New Zealand citizen is born
Given the automatic contribution is for New Zealand citizens only
When that child is born
Then birth enrolment may still create an account under compulsion
# extrapolated: 0 kick-start follows from the citizens-only rule, not a published zero-dollar line
Output 0 Crown contribution at birth for a child who is not a New Zealand citizen
Outcome the nest-egg claim does not apply to that birth
But any later workforce compulsion still sits on the separate contribution path

Scenario: The Crown must fund the kick-start across a year of births
Given a $1000 contribution per eligible birth and no published fiscal cost
When the policy runs for a full year of citizen births
Then the Crown pays the kick-start for each qualifying birth
Outcome every eligible new-born starts with the named balance
But the Crown still pays every qualifying birth without a published annual bill
