---
type: spec
id: act-deport
title: "Six-point immigration plan from deportation to overstayer enforcement"
status: draft
updated: 2026-08-21
summary: Deport resident visa holders convicted of ten-year offences regardless of time here, tighten skilled visas, impose a five-year welfare stand-down, charge a $6 daily infrastructure surcharge, extend English requirements, and enforce overstayers.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/deport
tags:
  - immigration
  - crime-and-justice
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/deport.md
sourceDigest: "sha256-6335940b73a57131"
gaps:
  - how deportation interacts with citizenship is not stated
  - which benefits the five-year welfare stand-down covers beyond those named is not stated
  - how skill categories demonstrate up-to-date demand is not stated
  - overstayer enforcement unit resourcing is not stated
  - how platform employer verification is enforced is not stated
  - no timetable for the six reforms is stated
---

# What the page states

> The immigration system is framed as failing to enforce rules and letting infrastructure lag behind migration. The six-point plan covers deporting serious offenders, expiring skilled visa categories, a five-year welfare stand-down, a daily infrastructure surcharge, stronger English requirements, and overstayer enforcement. No commencement dates or enforcement detail beyond the headline measures is given.

System: Six-point immigration plan

Scenario: An incoming government tightens immigration rules
Given 20,980 known overstayers in New Zealand
And Accredited Employer Work Visa categories remain open after skills gaps close
When six immigration reforms take effect
Then resident visa holders convicted of offences carrying sentences of 10 years or more may be deported no matter how long they have been here
Output deportation liability for resident visa holders on 10-year-or-more convictions beyond the Government's 20-year proposal
And each skilled visa category automatically expires every year unless up-to-date evidence of demand keeps it open
And a five-year welfare stand-down blocking jobseeker support, accommodation supplement and income-tested benefits for new residence class visa holders
And a $6 per day infrastructure surcharge on temporary work visas expected to raise around $80 million a year
And basic English language requirements extended to all AEWV types with lower standards still permitted for seasonal workers
And a dedicated overstayer enforcement unit within Immigration New Zealand
Outcome platform employers such as Uber and DoorDash verify and report work rights
And employers who facilitate overstaying lose their accreditation
