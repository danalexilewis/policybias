---
type: spec
id: opportunity-clean-up-politics
title: "Lobbyist register, $30,000 donation cap, and an anti-corruption body"
status: draft
updated: 2026-08-21
summary: A one-year ministerial cooling-off, a public lobbyist register, a $30,000 per-donor cap, company and trust donations banned, disclosure from $1,000, and an anti-corruption body costing about $40 million of a $52 million package.
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
sourceDigest: "sha256-6ae8a35ec67fe9cf"
gaps:
  - the cooling-off period's start (resignation, leaving Cabinet, leaving Parliament) is not specified
  - fines and deregistration thresholds for the lobbyist code are not stated
  - how a company or trust donation ban is enforced through related parties is not stated
  - the anti-corruption body's investigative powers relative to the Serious Fraud Office are not specified
  - what counts as an inaccurate election advertisement is not defined on the page
---

# What the page states

> Trust in government has slipped as lobbying, donations and centralised power grew. Lobbying moves into daylight through a cooling-off period, a public register and a statutory code with real consequences. Donations are capped and restricted to individual voters, while an independent anti-corruption body, stronger Official Information Act rules and a policy costing unit tighten integrity.

System: Clean Up Politics

Scenario: Lobbying, donations and integrity rules change
Given the Serious Fraud Office is funded at about $17 million a year
When a one-year cooling-off period applies between ministers and lobbying
And a mandatory public searchable lobbying register is stood up
And a statutory code of conduct for lobbyists includes deregistration and fines
And donations are capped per party, per donor, per election
And donations from companies and trusts are banned, so only registered New Zealand voters can donate
And donations above a disclosure threshold appear in annual statements
And an independent anti-corruption body investigates and prevents political corruption
And inaccurate and misleading election advertisements are prohibited
And the Official Information Act is strengthened, whistleblowers are protected, and an independent policy costing unit is established
Then integrity rules tighten around lobbying, donations and independent costing
Output donations capped at $30,000 per party, per donor, per election
And donations over $1,000 appear in annual statements
And about $52 million a year for the package
And $40 million a year for the anti-corruption body
And $10 million extra for the Electoral Commission
And $2 million for the costing unit in election years
Outcome people, not lobby groups, fund politics
Activates opportunity-citizens-voice
