---
type: spec
id: nz-first-citizens-only-voting
title: "Restrict voting to New Zealand citizens"
status: draft
updated: 2026-08-18
summary: Change electoral law so only citizens may vote in general elections, local elections and referendums.
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
gaps:
  - no legislative bill or timetable is named
  - whether existing permanent residents lose voting rights immediately or on a transition is not stated
  - treatment of special visa holders currently eligible after one year is not specified as law change detail
  - no estimate of how many voters are affected is given as a policy figure
  - interaction with local body and referendum franchise is asserted but not drafted
  - no transitional or citizenship fast-track provision is described
---

# What the page states

> The citizenship-only voting commitment and the distinction from permanent residence are on the page. Current eligibility periods for permanent residents and certain visa holders are described as status quo, not as new settings with figures. No Output follows.

System: Voting restricted to New Zealand citizens

Scenario: Electoral law is changed to citizens-only voting
Given permanent residents may vote after two years living in New Zealand
And certain visa holders with no expiry date may vote after one year
When electoral law is changed
Then only citizens have the right to vote in general elections
And voting in local elections and referendums is reserved for those who have made the full legal and civic commitment of citizenship
Outcome the right to decide New Zealand's future belongs to New Zealand citizens
