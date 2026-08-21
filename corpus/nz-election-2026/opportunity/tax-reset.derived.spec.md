---
type: spec
id: opportunity-tax-reset-derived
title: "Tax Reset read as a system: an annual land charge funding a cash floor, with timing and capture risk"
status: draft
updated: 2026-08-18
summary: Unlike a tax at sale, a yearly land charge is due whether or not the owner sells; the cash floor can still be captured as rent until extra homes arrive, and a 10-year phase-in delays the published fiscal picture.
jurisdiction: NZ
sources:
  - title: Tax Reset
    url: https://www.opportunity.org.nz/tax-reset
  - title: Tax Reset policy overview
    url: https://cdn.opportunity.org.nz/documents/policy/Opportunity Policy - Tax Reset.pdf
tags:
  - taxation
  - superannuation
  - cost-of-living
party: opportunity
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/tax-reset.md
derivesFrom: opportunity-tax-reset
assumptions:
  - an annual tax on land cannot be deferred by holding, which is the opposite of a tax charged only at sale; that contrast is ours, not a published claim
  - a cash transfer into a tight rental market can be bid into rent until supply increases; the page names this risk and says the land tax is the counter, but does not time how long that takes
  - a 10-year transition that starts with young people means the full $24 billion land-tax take and universal Citizen's Income do not arrive in year one
  - repurposing 2,000 Ministry of Social Development roles is a labour displacement even when labelled as efficiency
  - a compulsory 6% employer contribution is a labour cost that can fall on wages or prices; the page does not settle incidence
sourceDigest: "sha256-a65b509e32452db7"
---

# Our reading

> This spec is our reading, not the published claim. The page and PDF state the rates, the $24 billion land-tax take, the $4 billion leftover, the 10-15% house-price path, and that $19,400 a year is not enough to live on. They do not state how long rents stay high while the land tax works through, that the first years raise less than the fully phased picture, or that the employer KiwiSaver slice is a wage cost. Those are ours.

System: Tax Reset as an annual land charge funding a cash floor

Scenario: A cash-poor owner faces the yearly land tax
Given a tax due each year on land, whether or not the owner sells
And an owner with valuable land and little cash income
When the year's land tax falls due
Then the bill cannot be avoided by holding
Outcome a retiree may defer until the estate, which is a claim on the estate rather than a write-off
But a farmer or older homeowner without a deferral must find cash from income, borrowing, or selling

Scenario: A renter receives the Citizen's Income in a tight housing market
Given $370 a week paid in cash
And a housing market the page itself says can swallow a cash transfer as rent
When the Citizen's Income is paid before extra homes are built
Then some of the transfer can accrue to the landlord as higher rent
Outcome the land tax is the piece intended to stop that capture, by making vacant and underused land costly to hold
But until supply actually rises, the cash floor and the rent can move together
Activates opportunity-affordable-housing

Scenario: The 10-year transition is under way
Given a decade-long path that raises land-tax rates gradually and pays the Citizen's Income to successive age cohorts, starting with young people
When the first years run
Then older cohorts stay on current benefit and Super settings longer
# extrapolated: the full $24 billion and universal payment are the completed system, not year one
Output less than $24 billion a year until the land tax is fully phased
Outcome the published leftover of about $4 billion a year is a completed-system figure, not a first-year one
But people already in the housing market face a projected 10-15% price path while the cash floor is still being rolled out

Scenario: KiwiSaver 2.0 is levied on the wage
Given a compulsory 6% employer contribution once the 8-year climb is done
When the employer pays that 6%
Then the cost sits on the employment relationship
Outcome retirement balances grow, and the page's $1 trillion pool is a 20-year stock
But take-home pay or prices can move to fund the employer slice; the page does not say which
Activates opportunity-intergenerational-infrastructure
