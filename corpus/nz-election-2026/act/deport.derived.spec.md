---
type: spec
id: act-deport-derived
title: "Six-point immigration plan read as a system: residency conditional on crime, welfare and contribution"
status: draft
updated: 2026-08-21
summary: Deportation without a time limit, a five-year welfare stand-down and the daily surcharge together harden the bargain for residents and temporary workers; the surcharge is the same instrument as the fair-contribution card.
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
derivesFrom: act-deport
assumptions:
  - removing time-limited deportation liability for ten-year offences means long-settled residents face removal risk that shorter liability windows did not carry
  - a five-year block on jobseeker support, accommodation supplement and income-tested benefits shifts early hardship onto migrants, employers, sponsors or charity
  - the six-dollar daily surcharge here is the same charge as the fair-contribution policy, not a second levy
  - automatic yearly expiry of skilled categories and overstayer enforcement tighten supply channels alongside the resident-facing rules
sourceDigest: "sha256-6335940b73a57131"
---

# Our understanding

> The policy presents six immigration reforms as restoring a basic bargain. Three resident-facing edges: deportation for serious offences with no time limit here, a five-year welfare stand-down, and the daily infrastructure surcharge that overlaps the fair-contribution card. The overstayer count and skilled-visa figures are published context; who carries the stand-down and the surcharge is not.

System: Six-point immigration plan as conditional belonging

Scenario: A resident is convicted of a ten-year offence after long settlement
Given the current proposal extends deportation liability to 20 years
When a resident visa holder is convicted of an offence carrying a sentence of 10 years or more
Then deportation can follow no matter how long they have been here
Output deportation liability for resident visa holders on 10-year-or-more convictions beyond the Government's 20-year proposal
Outcome serious offending ends the residency bargain without a time-served shield
But people settled for decades face removal risk the shorter liability window did not carry

Scenario: A new residence class visa holder needs income support
Given a five-year welfare stand-down for all residence class visa holders
When jobseeker support, accommodation supplement or an income-tested benefit would otherwise be claimed in those years
Then those payments are blocked for the stand-down period
Output a five-year welfare stand-down blocking jobseeker support, accommodation supplement and income-tested benefits for new residence class visa holders
Outcome early years here are framed as opportunity rather than dependency
But hardship in those years falls on the migrant, their employer, sponsor or informal support

Scenario: Temporary workers pay the infrastructure surcharge
Given a $6 per day infrastructure surcharge on temporary work visas expected to raise around $80 million a year
When the surcharge is collected as part of the six-point plan
Then the same daily charge as the fair-contribution policy applies
Output a $6 per day infrastructure surcharge on temporary work visas expected to raise around $80 million a year
Outcome temporary workers contribute from day one before much tax is paid
But the levy is one instrument counted on two cards, not two separate charges
Activates act-fair-contribution
