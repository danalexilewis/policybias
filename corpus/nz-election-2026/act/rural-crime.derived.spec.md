---
type: spec
id: act-rural-crime-derived
title: "Rural crime read as a system: patrol hours are labour input, not clearance"
status: draft
updated: 2026-08-21
summary: One hundred thousand extra patrol hours buy presence and response capacity; Text 111 buys a channel when voice fails; neither figure is a clearance or prosecution rate.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/rural-crime
tags:
  - crime-and-justice
  - agriculture
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/rural-crime.md
derivesFrom: act-rural-crime
assumptions:
  - patrol hours measure officer time on the beat, which is a labour input; clearances and prosecutions are separate outcomes the policy does not promise as a rate
  - the policy's 15% investigated-and-prosecuted figure is a baseline complaint, not a target the hours are guaranteed to lift
  - Text 111 extends a contact channel where mobile voice is unreliable; it does not place an officer on the farm by itself
  - a dedicated rural crime unit concentrates capacity, but its headcount is unpublished
sourceDigest: "sha256-301c6a8c1c5f5ef9"
---

# Our understanding

> The policy funds 100,000 extra patrol hours, a rural crime unit, Text 111 and stronger poaching and rustling offences. It treats hours and connectivity as the intervention. It does not claim those hours are a clearance rate.

System: Rural presence and connectivity as inputs, not clearance

Scenario: Extra rural patrol hours are funded
Given Federated Farmers' latest Rural Crime Survey found 67% of farmers experienced crime, up from 41% in 2016
And nearly half of farmers do not bother reporting incidents to police
And of those who do report, only 15% see the offender investigated and prosecuted
When Police are funded toward more rural presence
Then more officer time is available on rural beats
Output 100,000 extra patrol hours each year
And a dedicated rural crime unit established
Outcome farmers see more police time in the countryside
But hours worked are not the same as offenders cleared or prosecuted

Scenario: A voice call drops in an area with poor coverage
Given rural areas where mobile voice is unreliable
When eligibility for Text 111 is extended to those areas
Then a person can reach emergency services by text when a voice call fails
Outcome isolation is reduced at the point of contact
But a text still waits on someone who can respond in person

Scenario: Armed poaching or livestock rustling is charged
When penalties and offences for armed poachers and livestock rustling are strengthened
Then the statute is harsher for those offences
Outcome the policy's deterrent sits in the penalty schedule
But without stated penalty amounts, the size of that deterrent cannot be read from the policy
