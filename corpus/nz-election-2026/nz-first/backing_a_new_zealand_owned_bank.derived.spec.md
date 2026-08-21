---
type: spec
id: nz-first-backing-a-new-zealand-owned-bank-derived
title: "BNZ buy-back read as a system: unnamed purchase price serviced by claimed earnings, with Crown balance-sheet risk"
status: draft
updated: 2026-08-21
summary: More than $1.5 billion of BNZ earnings is claimed to service buy-back debt whose principal is unnamed, while Crown debt, Future Fund and ACC tranches put public balance sheets on banking risk against an 85% Australian-owned system.
jurisdiction: NZ
sources:
  - title: Backing a New Zealand Owned Bank
    url: https://www.nzfirst.nz/backing_a_new_zealand_owned_bank
tags:
  - economy
  - small-business
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/backing_a_new_zealand_owned_bank.md
derivesFrom: nz-first-backing-a-new-zealand-owned-bank
assumptions:
  - a self-financing claim needs a purchase price before earnings can be shown to service the debt; the policy gives earnings and not the price
  - long-dated Crown debt, Future Fund equity and ACC investment put public or near-public capital at banking risk even when labelled commercial and arm's length
  - merging BNZ with a bank that holds just under 8% of mortgages still leaves the combined entity facing majors that control around 85% of the system; scale is necessary but not automatic from the merge alone
  - retaining Kiwibank's capital base does not state whether extra capital is required for a systemically significant combined bank
sourceDigest: "sha256-ff7fce88ee091b00"
---

# Our understanding

> The policy states a BNZ buy-back from NAB, a merge with Kiwibank into a Crown-owned National Bank of New Zealand, around 85% Australian control of the system, Kiwibank at just under 8% of mortgages, and more than $1.5 billion a year of BNZ cash earnings said to service the debt. It does not state the purchase price or what happens if earnings fall.

System: Crown-backed buy-back with an unpriced principal

Scenario: Earnings are claimed against an unnamed purchase price
Given BNZ currently generates more than $1.5 billion in annual cash earnings
And no purchase price for the buy-back is stated
When the buy-back is funded with long-dated Crown debt said to be comfortably serviced by those earnings
Then the debt service claim cannot be checked against a principal
Output more than $1.5 billion in annual BNZ cash earnings claimed to service the debt
Outcome the policy presents the buy-back as self-financing in expectation
But without a price, a reader cannot tell whether those earnings cover the debt

Scenario: Public and near-public capital takes banking risk
Given a blended stack of sovereign bonds, long-dated Crown debt, and a limited Future Fund and ACC equity tranche
When the National Bank of New Zealand is formed as a fully Crown-owned commercial bank
Then Crown, Future Fund and ACC capital sit behind a systemically significant lender
Outcome banking profits are meant to stay in New Zealand
But losses, if they come, land on public or near-public balance sheets rather than on NAB

Scenario: Scale is claimed against the Australian-owned majors
Given four Australian-owned banks control around 85 percent of the banking system
And Kiwibank holds just under 8 percent of the mortgage market
When BNZ is merged with Kiwibank into one Crown-owned bank
Then a larger domestic competitor is put on the field
Outcome real competitive pressure is the intended result
But moving from under eight percent mortgage share to pressure on an eighty-five percent Australian-owned system still depends on capital, pricing and risk the policy does not size
