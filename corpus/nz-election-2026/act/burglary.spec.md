---
type: spec
id: act-burglary
title: "Three strikes for burglary with a three-year minimum and no parole"
status: draft
updated: 2026-08-21
summary: A minimum three-year prison sentence with no parole for anyone convicted of burglary three times, with judges retaining discretion up to the ten-year maximum.
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
sourceDigest: "sha256-5d3ce5bc5ca8fa78"
gaps:
  - no estimate of how many offenders would receive a third strike is stated
  - the cost of additional imprisonment is not stated
  - whether the regime applies to juvenile offenders is not stated
  - how strikes accumulate across jurisdictions or over time is not stated
  - no commencement date is stated
---

# What the page states

> Burglary affects many households and most released burglars reoffend quickly. The policy creates a three-strikes regime requiring a minimum three-year prison sentence with no parole after a third burglary conviction, while judges retain discretion up to the ten-year maximum. No cost or offender-count estimate is given.

System: Three strikes for burglary

Scenario: A repeat burglar reaches a third burglary conviction
Given 184,000 New Zealanders were victims of burglary in 2025
And the majority of people released from prison for burglary are sent back to prison within two years
And nearly three-quarters of released burglars are resentenced
And around one in four burglary victims have already been burgled before
When someone is convicted of burglary three times, or convicted once on three or more counts of burglary
Then they receive a minimum sentence of three years in prison with no parole, no home detention and no early release
Output three years minimum prison sentence with no parole
And a judge may impose any sentence between the three-year minimum and the 10-year maximum
Outcome repeat burglars are imprisoned and cannot burgle from prison
And an aggravated burglary triggers a strike under both this regime and the existing Three Strikes regime for violent crime
