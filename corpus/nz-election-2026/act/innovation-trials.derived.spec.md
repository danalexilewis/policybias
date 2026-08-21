---
type: spec
id: act-innovation-trials-derived
title: "Innovation Trials read as a system: a temporary permission to set aside a rule, not a product approval"
status: draft
updated: 2026-08-21
summary: A trial sets aside a specific regulation for a limited test under safety conditions the policy requires but does not detail; success is evidence for a later rule change, not a market licence by itself.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/innovation-trials
tags:
  - economy
party: act
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/act/innovation-trials.md
derivesFrom: act-innovation-trials
assumptions:
  - setting aside a specific regulation for a limited test in one location is a permission to operate under waiver, not an approval that the product may be sold nationwide
  - safety conditions must be set before a trial begins, but the policy does not name those conditions, so the stringency is unknown until each approval is written
  - bad results end the trial; good results only supply evidence to change the rule, so the general ban can remain until a separate law change
  - the agricultural drone figures illustrate delay under today's rules; they are not the trial's price list
sourceDigest: "sha256-995af0010b1f96cb"
---

# Our understanding

> The policy publishes a permanent Innovation Trial process to set aside a specific regulation for a limited test with safety conditions and measured outcomes. It invites companies working on autonomous vehicles, agricultural drones and medical technology. A trial is not product clearance: it is a temporary permission, and the safety conditions stay unnamed in detail in the policy.

System: Trial as waiver permission, not product clearance

Scenario: A company applies to test a blocked technology
Given agricultural drones over 25 kilograms can cost up to $2,000 to certify and take over a year in New Zealand
And Australian farmers can use drones weighing up to 150 kilograms under a simple licence
And New Zealand officials have put the issue on a two-year work programme
When a permanent application process for Innovation Trials is published
Then a specific regulation may be set aside for a limited test in one location
Outcome the company may operate under waiver where the old rule would have blocked it
But the waiver is not a nationwide product approval

Scenario: Safety conditions are written into the approval
When safety conditions and a way to measure the result are set before a trial begins
Then the trial cannot start without those terms
Outcome the policy requires conditions without listing what they are
But until each approval names them, firms cannot price compliance from the policy alone

Scenario: The measured result arrives
When the trial produces a bad result
Then the trial ends
Outcome a good result supplies evidence to change the rule
But the general regulation stays until that separate change is made
