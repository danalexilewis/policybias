---
type: spec
id: opportunity-clean-up-politics-derived
title: "Clean Up Politics read as a system: caps that sophisticated donors can still route around"
status: draft
updated: 2026-08-18
summary: A $30,000 cap and a company ban still leave related-party and volunteer-labour channels unless those are closed; a $40 million body does not create convictions on its own.
jurisdiction: NZ
sources:
  - title: Clean-up Politics
    url: https://www.opportunity.org.nz/clean_up_politics
  - title: Clean Up Politics policy
    url: https://cdn.opportunity.org.nz/documents/policy/Opportunity Policy - Clean Up Politics.pdf
tags:
  - democracy
party: opportunity
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/clean_up_politics.md
derivesFrom: opportunity-clean-up-politics
assumptions:
  - a cap and a company ban without a related-party rule can be routed through family members, aligned associations, or unpaid campaign labour
  - a one-year cooling-off does not cover staffers, spouses, or people who never held a warrant
  - standing up a $40 million body is not the same as winning cases; the Serious Fraud Office already exists at about $17 million
sourceDigest: "sha256-6ae8a35ec67fe9cf"
---

# Our reading

> This spec is our reading, not the published claim. The page states the $30,000 cap, the company and trust ban, the $1,000 disclosure, and the $52 million package. It does not close related-party channels or say how the new body divides work with the Serious Fraud Office. Those limits are ours.

System: Caps that can still be routed around

Scenario: A donor hits the $30,000 cap
Given a $30,000 cap per party per donor per election and a ban on company and trust gifts
When a wealthy supporter wants to give more
Then a second natural person, or unpaid professional time, can still move value unless those routes are closed
Outcome the named cash cap is real for a single cheque
But total influence is not capped unless related-party and labour-in-kind rules catch up

Scenario: The anti-corruption body opens
Given about $40 million a year for a new body, against about $17 million for the Serious Fraud Office
When the new body is stood up
Then New Zealand has two integrity agencies unless functions are split
Outcome a standing investigator exists before a scandal forces one
But overlap, rivalry, or a hollow mandate can spend the $40 million without changing charging rates
