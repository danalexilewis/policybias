---
type: spec
id: green-greens-announce-bill-to-entrench-m-ori-seats-in-law
title: "Entrench Māori seats and allow Māori roll switching at any time"
status: draft
updated: 2026-08-21
summary: A member's bill to entrench Māori seats so they need 75% of MPs to change, and to let Māori switch rolls at any time including for local elections.
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
sourceDigest: "sha256-ef1ff4478c32e350"
gaps:
  - the bill text is not on this announcement page
  - how roll switching would work in practice is not specified
  - no commencement date
  - interaction with a referendum on Māori seats is not addressed
---

# What the page states

> Māori seats would be entrenched in law so they need the same supermajority as general electorate seats to change. General electorate seats are already entrenched; Māori seats can currently be abolished by a simple majority. The member's bill would also let Māori switch rolls at any time and vote on a different roll for local elections, following Independent Electoral Review recommendations. No dollar amounts or dates are given.

System: Entrenched Māori seats and open roll switching

Scenario: A member's bill to entrench Māori seats is introduced
Given general electorate seats are currently entrenched and can be changed only with 75 per cent of MPs
And other electoral settings such as the voting age currently need 75 per cent rather than 50 per cent
And Māori seats can be abolished by a simple majority
When a member's bill to entrench Māori seats in law is introduced
Then Māori seats are treated like other entrenched electoral settings
And Māori may switch rolls at any time
And Māori may vote on a different roll for local elections
Output 75 per cent of MPs required to change Māori seats
Outcome a constitutional imbalance in the treatment of Māori seats is corrected
Activates green-manifesto-2026-democracy
