---
type: spec
id: green-manifesto-2026-workforce-rights-derived
title: "Workforce rights read as a system: default union membership is opt-out compulsion, and 15 months leave without a stated rate"
status: draft
updated: 2026-08-21
summary: New starters join a union unless they opt out, so membership becomes the default path, while 15 months parental leave extends time without printing a weekly payment rate.
jurisdiction: NZ
sources:
  - title: Workforce Rights
    url: https://www.greens.org.nz/manifesto_2026_workforce_rights
tags:
  - employment
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_workforce_rights.md
derivesFrom: green-manifesto-2026-workforce-rights
assumptions:
  - automatic union membership at hire with later opt-out is compulsion by default; the policy frames it as strengthening bargaining power
  - opt-out still requires the worker to act, so inertia keeps membership up unless someone exits
  - 15 months for the primary caregiver lengthens leave without a published weekly payment rate, so take-home income while on leave cannot be read from the policy
  - ring-fenced partner leave is additional time for partners, but its length and rate are not stated
sourceDigest: "sha256-0f97e5f56064f1bc"
---

# Our understanding

> The policy defaults new starters into a union with opt-out, expands strike rights, and lifts paid parental leave to 15 months with higher payments. It does not say how opt-out works in practice, or what the weekly leave rate is. We treat default membership as opt-out compulsion and treat the leave extension as time without a stated income.

System: Default union membership and longer leave without a stated rate

Scenario: A new starter begins a job under default union membership
Given employment law that joins people to a union when they start a new job
And an opt-out available later
When the person starts work and does not opt out
Then they are a union member by default
Outcome bargaining coverage rises through inertia rather than an active join
But membership still depends on the worker knowing how, and choosing, to exit

Scenario: A primary caregiver plans 15 months of paid parental leave
Given paid parental leave rising to 15 months for the primary caregiver
And additional ring-fenced leave for partners
And increased payments with no weekly rate in the policy
When the household budgets across the leave
Then they know how long the primary caregiver can stay home
Output 15 months paid parental leave for the primary caregiver
Outcome more calendar time at home is granted
But weekly household income while on leave cannot be read from the policy
Activates green-manifesto-2026-gender-equity

Scenario: Strike rights widen while board seats stay exploratory
When the right to strike expands to collective agreement breaches and political and solidarity reasons
And workers' representatives on boards of listed companies are only explored
Then industrial action options widen before board representation is settled
Outcome collective leverage shifts toward strike and default membership first
But board seats are not yet a committed mechanism in the policy
