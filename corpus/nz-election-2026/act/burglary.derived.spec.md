---
type: spec
id: act-burglary-derived
title: "Three strikes for burglary read as a system: longer custody with an unpriced prison bill"
status: draft
updated: 2026-08-21
summary: A third burglary strike locks in three years without parole while the ten-year maximum stays the judicial ceiling; the prison capacity those sentences need is not priced in the policy.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/burglary
tags:
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/burglary.md
derivesFrom: act-burglary
assumptions:
  - removing parole, home detention and early release for third-strike burglars lengthens time actually served relative to sentences that still allow those exits
  - the ten-year maximum remains the ceiling, so the regime raises the floor without raising the statutory top
  - imprisoning more repeat burglars for longer needs prison capacity; the policy publishes none of that cost or bed count
  - applying the regime to three counts in one conviction as well as three separate convictions widens who hits the floor
sourceDigest: "sha256-5d3ce5bc5ca8fa78"
---

# Our understanding

> Three strikes prevents repeat burglary by keeping offenders in custody. The custody bargain is a three-year floor with no parole, while judges still work up to the ten-year maximum. Victim and reoffending figures are published; prison capacity for the extra time served carries no price tag.

System: Three strikes for burglary as a custody floor with an open prison bill

Scenario: A burglar reaches a third strike
Given 184,000 New Zealanders were victims of burglary in 2025
And the majority of people released from prison for burglary are sent back to prison within two years
When someone is convicted of burglary three times, or once on three or more counts
Then the court must impose at least the minimum term with no parole, no home detention and no early release
Output three years minimum prison sentence with no parole
Outcome that offender cannot burgle from inside prison for the minimum term
But the prison system must hold them for that time without the usual early-exit valves

Scenario: The judge sentences above the floor
Given a judge may impose any sentence between the three-year minimum and the 10-year maximum
When the facts support more than the floor
Then the ten-year maximum remains the judicial ceiling
Output a judge may impose any sentence between the three-year minimum and the 10-year maximum
Outcome sentencing discretion survives above the floor
But it cannot go below the three-year no-parole term once the strikes are met

Scenario: The system absorbs longer burglary custody
Given nearly three-quarters of released burglars are resentenced
And around one in four burglary victims have already been burgled before
When third-strike terms without parole accumulate
Then more bed-days are required for the same class of offender
Outcome repeat burglary is interrupted by custody rather than by warning
But prisons must hold more repeat burglars for longer, from today's beds and budget
