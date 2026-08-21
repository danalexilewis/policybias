---
type: spec
id: nz-first-referendum-on-maori-seats
title: "Public referendum on the future of Māori seats"
status: draft
updated: 2026-08-21
summary: A referendum for the public to decide whether Māori electorates remain effective, relevant and needed.
jurisdiction: NZ
sources:
  - title: Referendum on Maori Seats
    url: https://www.nzfirst.nz/referendum_on_maori_seats
tags:
  - democracy
  - maori-affairs
party: nz-first
clusters:
  - maori-affairs
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/referendum_on_maori_seats.md
sourceDigest: "sha256-0082e5cfd2e1ea74"
gaps:
  - no referendum question wording is stated
  - no date or binding/non-binding status is given
  - no legislative mechanism to implement abolition or retention is described
  - what happens to current Māori roll enrollees if seats are removed is not stated
  - no cost of the referendum is estimated
  - interaction with the recent local Māori wards referendum is asserted but not operationalised
  - no threshold for retention versus abolition is specified
---

# What the page states

> A referendum after the next election would let the public decide whether Māori parliamentary seats remain effective, relevant and needed. MMP is argued to have made separate seats less necessary, with Māori representation in the House now higher than the share often claimed for the population. No question wording, date or binding status is given.

System: Referendum on Māori parliamentary seats

Scenario: A referendum is held on Māori seats
Given twenty-seven percent of the House has a Māori background under MMP
And Māori are often claimed as seventeen percent of the population
And enrolment on the Māori roll has steadily decreased to half of all Māori enrolled
When a referendum on the future of the Māori seats is held after the next election
Then the public decides if the Māori seats are effective, relevant and still needed
Outcome Māori seats may be retained if enough people support them
