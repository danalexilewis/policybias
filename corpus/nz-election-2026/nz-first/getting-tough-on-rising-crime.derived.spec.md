---
type: spec
id: nz-first-getting-tough-on-rising-crime-derived
title: "Crime package read as a system: spare-bed capacity and undefined first degree"
status: draft
updated: 2026-08-21
summary: A gang-only prison rests on spare-bed capacity as a claim; first-degree murder and terrorist designation lack definitions or process, and no dollar cost is published.
jurisdiction: NZ
sources:
  - title: Getting Tough on Rising Crime
    url: https://www.nzfirst.nz/getting-tough-on-rising-crime
tags:
  - crime-and-justice
party: nz-first
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/nz-first/getting-tough-on-rising-crime.md
sourceDigest: "sha256-525749aaea4979be"
derivesFrom: nz-first-getting-tough-on-rising-crime
assumptions:
  - 2000 spare beds and a suspected 3000 gang members in prison are page counts; treating them as enough capacity for a gang-only prison is a claim, not a measured fit
  - first-degree murder without a definition leaves the life-for-life rule without a boundary a court can apply from the policy alone
  - designating gangs as terrorist organisations without a named process leaves the Terrorism Suppression Act trigger unspecified
  - no fiscal cost appears in the policy, so none is invented here
---

# Our understanding

> Five hundred new frontline police in eighteen months. Gangs would be isolated using claimed spare beds. Murder gets degrees, with life for first degree. Gangs would be designated as terrorists. Spare-bed capacity is asserted, not proved; first-degree murder still needs a definition.

System: Policing and sentencing with capacity and definition gaps

Scenario: A gang-only prison is stood up from existing capacity
Given a suspected 3000 gang members in prison and 2000 spare beds
When a gang-only prison is established to reduce recruitment of non-gang prisoners
Then gang members are isolated using existing space in the current system
Outcome non-gang prisoners face less recruitment pressure inside
But spare-bed capacity is a claim that the counts fit the isolation plan

Scenario: First-degree murder attracts life for life
When a degrees of murder regime uses life for life for first-degree murder
Then first-degree cases draw the life sentence the policy names
Outcome the most serious murders are treated as a separate degree
But courts still lack a boundary for first-degree murder until Parliament defines it

Scenario: Gangs are designated under the Terrorism Suppression Act
When gangs are designated as terrorist organisations under the Terrorism Suppression Act
Then gang membership sits under that Act's consequences
Outcome designation is available as a law-and-order tool
But ministers or officials still decide designation without a named process
