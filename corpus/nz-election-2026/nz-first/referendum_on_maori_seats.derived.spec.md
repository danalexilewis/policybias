---
type: spec
id: nz-first-referendum-on-maori-seats-derived
title: "Māori seats referendum read as a system: a vote that may not change seats"
status: draft
updated: 2026-08-21
summary: Page figures put Māori background at 27% of the House against a claimed 17% of population and half of enrolled Māori on the Māori roll; without question wording or bindingness, the referendum may not change seats.
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
derivesFrom: nz-first-referendum-on-maori-seats
assumptions:
  - twenty-seven percent of the House with a Māori background and the often-claimed seventeen percent of population are page figures used to argue over-representation, not independent counts we add
  - half of all enrolled Māori on the Māori roll is a page enrolment figure, not a mandate for abolition
  - without question wording or binding status, a referendum can be held and still leave the seats unchanged
---

# Our understanding

> A referendum after the next election would let the public decide whether the Māori seats remain needed, framed by 27% of the House with Māori background against a claimed 17% of population and half of enrolled Māori on the Māori roll. Without question wording or binding force, the vote may not change the seats.

System: Referendum without a settled question or bind

Scenario: The representation figures are used as the case for a vote
Given twenty-seven percent of the House has a Māori background under MMP
And Māori are often claimed as seventeen percent of the population
And enrolment on the Māori roll has steadily decreased to half of all Māori enrolled
When a referendum on the future of the Māori seats is held after the next election
Then the public is asked whether the seats remain effective, relevant and needed
Outcome the policy's representation and roll figures frame the argument for deciding
But those figures do not themselves abolish or retain the seats

Scenario: The referendum is held without a named question or bind
When the public votes on the future of the Māori seats
Then seats may be retained if enough people support them
Outcome a public decision is recorded
But without question wording or bindingness, the referendum may not change seats
