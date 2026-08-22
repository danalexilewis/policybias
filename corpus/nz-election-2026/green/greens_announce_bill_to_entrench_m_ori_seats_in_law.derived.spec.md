---
type: spec
id: green-greens-announce-bill-to-entrench-m-ori-seats-in-law-derived
title: "Māori seat entrenchment read as a system: the repeal threshold rises to 75%, but a member's bill is not yet the law"
status: draft
updated: 2026-08-21
summary: Entrenchment lifts abolition of Māori seats from a simple majority to 75% of MPs, matching other entrenched electoral settings, while open roll switching can change roll composition between elections.
jurisdiction: NZ
sources:
  - title: Greens announce bill to entrench Māori seats in law
    url: https://www.greens.org.nz/greens_announce_bill_to_entrench_m_ori_seats_in_law
tags:
  - maori-affairs
  - democracy
party: green
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/green/greens_announce_bill_to_entrench_m_ori_seats_in_law.md
derivesFrom: green-greens-announce-bill-to-entrench-m-ori-seats-in-law
assumptions:
  - entrenchment that matches general electorate seats raises the threshold to change or abolish Māori seats from a simple majority to 75% of MPs
  - introducing a member's bill announces intent; seats are only entrenched after the bill passes and receives Royal assent
  - allowing Māori to switch rolls at any time means the Māori and general rolls can change composition between elections, not only in a fixed window
  - voting on a different roll for local elections separates local and parliamentary roll choice for the same person
sourceDigest: "sha256-ef1ff4478c32e350"
---

# Our understanding

> The policy announces a member's bill to entrench Māori seats so they need 75% of MPs to change, matching general electorate seats, and to let Māori switch rolls at any time including for local elections. Entrenchment raises the repeal threshold; introduction is not yet law.

System: Higher repeal threshold and open roll switching

Scenario: Entrenchment raises the threshold to abolish Māori seats
Given general electorate seats can be changed only with 75 per cent of MPs
And Māori seats can currently be abolished by a simple majority
And other electoral settings such as the voting age need 75 per cent rather than 50 per cent
When Māori seats are entrenched in law on the same terms
Then abolishing or rewriting those seats needs the higher bar
Output 75 per cent of MPs required to change Māori seats
Outcome a later simple majority cannot scrap the seats alone
But the higher bar only applies after the bill becomes law

Scenario: A member's bill is introduced but not yet passed
When a member's bill to entrench Māori seats is introduced
Then the House has a vehicle to debate the change
Outcome the constitutional imbalance is on the Order Paper
But introduction does not entrench seats; passage and assent still have to follow

Scenario: Māori may switch rolls at any time
When Māori may switch rolls at any time
And may vote on a different roll for local elections
Then roll choice is no longer locked to a short switch window
Outcome Māori and general roll totals can move between elections
But Electoral Commission systems must process switches continuously for the change to be real
Activates green-manifesto-2026-democracy
