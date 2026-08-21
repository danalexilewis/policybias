---
type: spec
id: nz-first-citizens-only-voting-derived
title: "Citizens-only voting read as a system: franchise narrows without a transition count"
status: draft
updated: 2026-08-21
summary: Permanent residents after two years and some visa holders after one year lose the franchise; transition timing and the count of affected voters are unnamed.
jurisdiction: NZ
sources:
  - title: Citizen's Only Voting
    url: https://www.nzfirst.nz/citizens_only_voting
tags:
  - democracy
party: nz-first
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/citizens_only_voting.md
sourceDigest: "sha256-dac00a4e8e304740"
derivesFrom: nz-first-citizens-only-voting
assumptions:
  - permanent residents who may vote after two years living in New Zealand lose that franchise when only citizens may vote
  - certain visa holders with no expiry date who may vote after one year also lose that franchise
  - without a named transition, the policy does not say whether current non-citizen electors keep a vote until citizenship or lose it at commencement
  - the count of affected voters is unnamed, so the scale of the franchise change cannot be read from the policy
---

# Our understanding

> The policy states that permanent residents may vote after two years, that certain visa holders with no expiry date may vote after one year, and that electoral law would reserve voting for citizens. It does not name a transition or how many voters are affected.

System: Franchise narrowed to citizenship

Scenario: Permanent residents who currently qualify lose the vote
Given permanent residents may vote after two years living in New Zealand
When electoral law is changed so only citizens may vote
Then permanent residents who have not taken citizenship lose the franchise
Outcome the right to decide New Zealand's future sits with citizens
But whether that loss is immediate or phased is unnamed

Scenario: Certain long-stay visa holders lose the vote
Given certain visa holders with no expiry date may vote after one year
When the same citizens-only rule applies to general, local and referendum votes
Then those visa holders lose the franchise they hold under current eligibility
Outcome local elections and referendums follow the same citizenship line
But the count of affected voters is unnamed, so the scale stays unknown
