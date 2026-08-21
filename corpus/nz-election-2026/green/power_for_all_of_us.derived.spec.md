---
type: spec
id: green-power-for-all-of-us-derived
title: "Power plan read as a system: a public generator against gentailers, and loans that raise household debt"
status: draft
updated: 2026-08-21
summary: Kiwipower enters the market as a Crown generator and firming buyer; zero-interest loans still leave households owing the principal; community and Māori housing renewables together are a $280 million envelope.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/power_for_all_of_us
  - title: Full Power Policy
    url: https://assets.nationbuilder.com/beachheroes/pages/74612/attachments/original/1784510079/The_Greens'_Full_Power_Policy.pdf
tags:
  - energy
  - cost-of-living
  - climate
party: green
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/green/power_for_all_of_us.md
derivesFrom: green-power-for-all-of-us
assumptions:
  - a publicly owned generator that invests in firming and opens capacity to rivals is a competitor to the four big gentailers, not only a subsidy channel; the policy names market failure but not that framing
  - a zero-interest loan still creates household debt equal to the principal until it is repaid or cleared on sale; the policy stresses affordability, not the balance-sheet effect
  - $280 million is arithmetic from the $200 million community envelope plus the $80 million Māori housing fund, not a line the policy prints as a single total
  - Warmer Kiwi Homes and public-housing solar cut bills without putting the same loan liability on the tenant; incidence differs by mechanism
sourceDigest: "sha256-753c929981bf1c73"
---

# Our understanding

> The policy and PDF state Kiwipower's $980 million envelope, $421.2 million for zero-interest loans, $969.8 million for Warmer Kiwi Homes, $460 million for public-housing solar, $200 million community energy and $80 million for Māori housing renewables. They do not say that Kiwipower competes with the big generators as a market actor, that the loans raise household debt, or that community and Māori housing renewables sum to $280 million.

System: Public generation, household loans and community renewables as one energy stack

Scenario: Kiwipower invests and opens firming to rivals
Given four big power companies control over 85 percent of retail and generation markets
And a $980 million appropriation for Kiwipower over four years
When Kiwipower invests in renewable generation and firming and makes capacity available to independent generators and retailers
Then a Crown-owned actor sits in the same markets the big companies dominate
Output $980 million appropriation for Kiwipower over four years
Outcome downward pressure on prices is meant to come from more competition and firming, not only from household grants
But the big companies still hold most existing assets while the new entity is building

Scenario: A homeowner takes a zero-interest clean energy loan
Given loans tied to the property and repaid over time
And $421.2 million total opex to subsidise zero interest
When the homeowner installs solar or batteries through the scheme
Then the household owes the principal until repayments or a sale clear it
Output $421.2 million total opex for zero-interest loans
Outcome the bill can fall while the debt still sits on the household
But the loan is household debt even when the interest rate is zero

Scenario: Community and Māori housing renewables are funded together
Given $200 million for community energy projects over four years
And $80 million for renewable energy for Māori housing over four years
And $460 million total capex for public housing solar
And $969.8 million total opex for Warmer Kiwi Homes
When those envelopes run
Then ownership and bill relief land on communities, Māori housing and public tenants rather than on private loan books
# extrapolated: $280 million is $200 million community plus $80 million Māori housing
Output $280 million combined community and Māori housing renewables over four years
And $460 million total capex for public housing solar
And $969.8 million total opex for Warmer Kiwi Homes
Outcome tenants and marae projects can cut bills without taking the homeowner loan path
But the Crown still pays the full published envelopes
