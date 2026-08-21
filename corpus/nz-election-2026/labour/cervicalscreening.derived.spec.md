---
type: spec
id: labour-cervicalscreening-derived
title: "Free cervical screening read as a system: a standing entitlement on the Medicard rail"
status: draft
updated: 2026-08-21
summary: Free screening for ages 25 to 69 is a standing entitlement with $21.6 million printed for the first full year only; later years are unstated, and Medicard is the access rail.
jurisdiction: NZ
sources:
  - title: Free Cervical Screening
    url: https://www.labour.org.nz/cervicalscreening
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/cervicalscreening.md
derivesFrom: labour-cervicalscreening
assumptions:
  - free screening for ages 25 to 69 is a standing entitlement once it begins; the policy does not say it ends after the first full year
  - $21.6 million is printed for the first full year only, so outyear cost is open in the policy
  - Medicard is the access rail; screening is in addition to the three free doctor's visits and does not consume them
sourceDigest: "sha256-f08cc403527757e8"
---

# Our understanding

> The policy states free cervical screening for ages 25 to 69, $21.6 million for the first full year from existing health baselines, and Medicard as the access rail. It does not state later-year cost, or how community events verify the card in practice.

System: Free cervical screening as a standing entitlement on Medicard

Scenario: Eligibility loads onto Medicard and the first full year is priced
Given cervical screening is not universally free today
When free cervical screening begins
Then everyone aged 25 to 69 can screen without a fee
Output $21.6 million cost for the first full year
Outcome eligibility rides on the Medicard at the doctor or a community event
But outyears after the first full year are not stated
Activates labour-medicard

Scenario: The entitlement stands while later-year cost is unnamed
Given $21.6 million printed for the first full year only
When the second and later years arrive
Then the free screen for ages 25 to 69 still stands in the policy
Outcome the Crown carries an open outyear cost the policy does not print
But year one is funded from existing health baselines, not from a named new tax line

Scenario: Medicard is the access rail for screening
Given eligibility automatically loaded onto the Medicard
And free screening in addition to three free doctor's visits a year
When a person aged 25 to 69 attends screening
Then access is through the same card as the free doctor's visits
Outcome screening sits beside other Medicard entitlements without using the visit count
But the policy does not state how community events verify the card in practice
Activates labour-medicard
