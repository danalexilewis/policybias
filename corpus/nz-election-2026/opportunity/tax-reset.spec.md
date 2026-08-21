---
type: spec
id: opportunity-tax-reset
title: "Citizen's Income, land value tax, and compulsory KiwiSaver 2.0"
status: draft
updated: 2026-08-21
summary: A weekly Citizen's Income of up to $370, paid for by a 1.75% urban land value tax, with compulsory KiwiSaver contributions rising to 6% each from worker and employer.
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
sourceDigest: "sha256-a65b509e32452db7"
gaps:
  - the start date for the first age cohort is not stated
  - how land is valued for the tax, and how often, is not stated
  - treatment of RSE and temporary workers is left for later design
  - how the leftover $4 billion a year is allocated is not stated
  - the remaining share of people after the 70% who gain and the 20% who see no change is not characterised
  - who pays to value urban and rural land at commencement is not stated
---

# What the page states

> A weekly Citizen's Income replaces most benefits, paid for by a land value tax on unimproved land, with income tax collapsed to three tiers. KiwiSaver 2.0 becomes compulsory and contributions rise over eight years. Transition runs over ten years, starting with young people. The annual payment is not enough to live on.

System: Tax Reset — Citizen's Income, land value tax, and KiwiSaver 2.0

Scenario: An adult resident receives the Citizen's Income
Given a benefit system that can tax extra shifts at up to 90%
And NZ Superannuation already paid as a near-universal income for older people
When the Citizen's Income is paid
Then almost all adults aged 18 and over who meet ordinary residency rules receive a weekly payment
And most benefits are replaced, with top-ups for superannuitants, parents and others
And no one on a current benefit receives less than they do now
Output up to $370 a week
And $19,400 a year paid weekly to almost all adults
And at least 50,000 families lifted out of poverty on the BHC50 measure
And three income-tax tiers at 28% up to $50,000, 34% to $200,000, and 39% above
And 2,000 Ministry of Social Development roles repurposed
And at least $1.7 billion in administrative savings
And incomes rise for 70% of New Zealanders
And 20% see no change
Outcome work always pays
But the annual payment is not enough to live on

Scenario: Urban and rural land is taxed each year
When a Land Value Tax is charged on the unimproved value of land
Then land-banking and large portfolios become less profitable
Output 1.75% of urban land value charged each year
And 0.5% of rural land value charged each year
And about $24 billion a year raised from about $1.7 trillion of land
And about $4 billion a year left after paying for the Citizen's Income
And a projected 10-15% fall in property prices
Outcome house prices fall and capital is pushed toward businesses
And retirees may defer the tax until their estate
And farmers may defer in a hard season and exempt privately owned conservation land
Activates opportunity-affordable-housing

Scenario: KiwiSaver 2.0 is fully in force
When KiwiSaver 2.0 is fully in force after 8 years
Then every eligible worker contributes, and employers contribute too
Output 12% of gross earnings (6% employer and 6% employee)
And contribution rates rising by 0.5 percentage points a year until then
And a domestic savings pool topping $1 trillion within 20 years
Outcome every worker builds retirement savings, and the pool can fund infrastructure
Activates opportunity-intergenerational-infrastructure
