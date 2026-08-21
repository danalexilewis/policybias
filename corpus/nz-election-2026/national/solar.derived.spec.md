---
type: spec
id: national-solar-derived
title: "Home Energy Fund read as a system: a small equity stake, house-secured loans, equity gate"
status: draft
updated: 2026-08-21
summary: $7 million Crown equity for a 20% shareholding implies a small fund; loans secured on the home put the house at risk; the 20% equity rule excludes highly leveraged owners.
jurisdiction: NZ
sources:
  - title: Home Energy Fund
    url: https://www.national.org.nz/solar
tags:
  - energy
  - cost-of-living
party: national
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/national/solar.md
derivesFrom: national-solar
assumptions:
  - if $7 million buys a 20% shareholding, total equity before gearing is $35 million; that is arithmetic from the policy, not a published fund size
  - a loan secured against the home means non-payment or sale can put the property at stake, even when repaid through rates
  - an equity floor of 20% screens out highly leveraged owners who most need low-friction finance
  - council and LGFA balance-sheet backing still leaves the loan book sized from a modest equity base once geared
sourceDigest: "sha256-e8603daa6d161a87"
---

# Our understanding

> The policy presents low-interest loans and permitted small-scale renewables as easing upfront cost. It does not say the Crown stake implies a small fund, that securing loans on the home puts the house at risk, or that the equity floor excludes highly leveraged owners.

System: Home Energy Fund as a small, house-secured, equity-gated loan book

Scenario: The Crown takes a minority stake
Given a $7 million one-off Crown equity investment for a 20% shareholding
When the fund is established with councils and the LGFA funding the balance
Then the Crown cash in is a minority of a modest equity base
# extrapolated: $7 million at 20% implies $35 million total equity before gearing
Output $35 million implied total equity before gearing
And $7 million one-off Crown equity investment for 20% shareholding
Outcome a national financing platform can exist on that base
But the Crown's cash stake is small for a nationwide loan book

Scenario: A homeowner takes a Home Energy Fund loan
When a low-interest loan is secured against the home and repaid over ten years
Then the property stands as security for the energy spend
Output loans repaid over ten years through rates or on sale of property
Outcome solar, batteries, insulation and heat pumps can proceed without a large upfront cash outlay
But the house is at risk if the loan is not met

Scenario: A highly leveraged owner applies
Given loans available to ratepayers with at least 20% equity in their property
When an owner with less equity seeks a loan
Then they fall outside the stated eligibility
Outcome the fund serves owners who already hold an equity cushion
But highly leveraged owners stay with commercial green loans or none
