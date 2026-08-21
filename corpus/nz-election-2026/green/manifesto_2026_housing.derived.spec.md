---
type: spec
id: green-manifesto-2026-housing-derived
title: "Housing manifesto read as a system: a rent price control beside an uncosted public build"
status: draft
updated: 2026-08-21
summary: A 2% annual rent cap is a price control that can shrink supply while public build is still scaling; the cost of tens of thousands of public homes is not on this policy.
jurisdiction: NZ
sources:
  - title: Housing
    url: https://www.greens.org.nz/manifesto_2026_housing
tags:
  - housing
  - cost-of-living
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_housing.md
derivesFrom: green-manifesto-2026-housing
assumptions:
  - capping annual rent increases and linking new-tenancy rents to the previous rent is a price control on the private rental stock
  - a binding rent ceiling can reduce the incentive to offer or maintain rental dwellings, which is a shortage risk while public supply is still being built
  - tens of thousands of public homes is a large capital programme whose build cost is not published on this policy
  - a Rental Warrant of Fitness raises compliance cost for landlords; some of that cost can pass into asking rents where the cap does not yet bind, or into exit from the market
sourceDigest: "sha256-9a285312a27be659"
---

# Our understanding

> The policy states tens of thousands of public homes, a 2% annual rent cap, rents linked to the previous tenancy, and a Rental Warrant of Fitness. It does not say that the cap is a price control with shortage risk, or that the public build is uncosted.

System: Rent controls beside an uncosted public housing build

Scenario: Annual rent increases are capped
Given annual rent increases limited to no more than 2%
And new tenancy rents linked to what the previous tenants paid
When a landlord faces those limits in a tight market
Then the rent cannot track a faster rise in costs or demand
Output annual rent increases limited to no more than 2%
Outcome sitting tenants gain predictability on the next increase
But some landlords may exit or withhold dwellings, which is a shortage risk until public homes arrive

Scenario: Tens of thousands of public homes are promised without a build cost
When tens of thousands of new public homes and more papakāinga are built
Then the Crown takes on a large construction and ownership programme
Outcome more households can access public and papakāinga homes
But the build cost and timetable are not on this policy

Scenario: A Rental Warrant of Fitness is enforced
When Healthy Homes Standards are enforced with an independently certified Rental Warrant of Fitness
Then non-compliant rentals must be upgraded or leave the letting pool
Outcome tenants gain a clearer health and safety floor
But upgrade costs land on landlords first, and some stock may exit rather than comply
