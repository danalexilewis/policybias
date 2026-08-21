---
type: spec
id: opportunity-smart-on-crime-derived
title: "Smart on crime read as a system: remand falls only if the court actually sits"
status: draft
updated: 2026-08-18
summary: Extra court and probation money cuts remand only if sitting days and community beds exist; decriminalising possession without a named health door can become neither charge nor care.
jurisdiction: NZ
sources:
  - title: Smart on Crime
    url: https://www.opportunity.org.nz/smart_on_crime
tags:
  - crime-and-justice
party: opportunity
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/smart_on_crime.md
derivesFrom: opportunity-smart-on-crime
assumptions:
  - remand falls when cases are heard and people have a place to go; funding without sitting days or community beds does not empty the cells
  - decriminalising possession without a mandated health referral can leave people with no charge and no care
  - raising the youth-court age without stating the age means we cannot compare it to the current 18
sourceDigest: "sha256-8b9bd045e1513213"
---

# Our understanding

> The policy states $150,000 a year per prisoner, $9,000 per child in school, more court funding, and decriminalised possession. It does not guarantee sitting days, a health door, or the new youth age.

System: Remand falls only if the court sits

Scenario: Court funding rises
Given more than $150,000 a year to hold a person on remand
When courts and probation receive more money
Then remand falls only if extra sitting days and community beds exist
Outcome some people wait at home instead of in a cell
But a funded court that cannot sit still leaves people inside at $150,000 a year

Scenario: Possession is no longer a crime
When possession is decriminalised and supply is not
Then police stop charging possession
Outcome a health-led response is the named substitute
But without a mandated door into treatment, some people get neither charge nor care
Activates opportunity-healthy-people
