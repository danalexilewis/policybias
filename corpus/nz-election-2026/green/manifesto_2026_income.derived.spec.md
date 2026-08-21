---
type: spec
id: green-manifesto-2026-income-derived
title: "Income plan read as a system: liveable benefits funded by a wealth tax with unnamed valuation"
status: draft
updated: 2026-08-21
summary: Liveable benefits and welfare reform are standing spending claims; the 2.5% tax on net wealth over $10 million is the named funder, but how that wealth is valued is not on this policy.
jurisdiction: NZ
sources:
  - title: Income
    url: https://www.greens.org.nz/manifesto_2026_income
tags:
  - social-welfare
  - taxation
  - cost-of-living
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_income.md
derivesFrom: green-manifesto-2026-income
assumptions:
  - raising benefits to liveable rates and abolishing sanctions creates a standing fiscal claim that must be met every year, not a one-off grant
  - naming a 2.5% tax on net wealth over $10 million as how the package is paid for makes that tax the funder; this policy does not publish the revenue path
  - a net-wealth tax needs a valuation method before anyone can be assessed; this policy does not name one
  - income-tax progressive changes on this policy are direction only; rates and the tax-free amount live on the separate tax page
sourceDigest: "sha256-239f5c3f950c1468"
---

# Our understanding

> The policy states liveable benefits, welfare reform and a 2.5% tax on net wealth over $10 million as the way to pay for a decent income. It does not say that the wealth tax is the funder of a standing claim, or that valuation is missing before anyone can be assessed.

System: Liveable benefits funded by a wealth tax

Scenario: Benefits rise to liveable rates while sanctions end
When benefits increase to liveable rates and sanctions are abolished
Then the Crown owes a higher ongoing transfer to people on support
Outcome households on benefits can meet more of the basics from the grant itself
But the yearly cost is a standing claim, and this policy does not size it

Scenario: The wealth tax is treated as the funder
Given a 2.5% tax on net wealth over $10 million
When liveable incomes and welfare reform are paid for by making the wealthy few pay their fair share
Then the revenue claim sits on that wealth base
Output 2.5% tax on net wealth over $10 million
Outcome the spending path depends on collecting that tax
But this policy does not publish how much the tax raises

Scenario: Net wealth must be valued before assessment
Given a tax on net wealth over $10 million
And no valuation method on this policy
When the tax is drafted for collection
Then assets must be valued before anyone can be assessed
Outcome multimillionaires cannot be billed until that method exists
But a voter cannot tell from this policy how their assets would be counted
Activates green-tax-system-for-all
