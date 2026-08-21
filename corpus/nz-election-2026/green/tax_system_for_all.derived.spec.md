---
type: spec
id: green-tax-system-for-all-derived
title: "Tax plan read as a system: wealth and corporate charges fund an income-tax cut"
status: draft
updated: 2026-08-21
summary: The 2.5% net-asset tax and corporate levies fall on wealth holders and large firms; the $10,000 tax-free threshold is an income-tax cut for most earners, not a wealth transfer by itself.
jurisdiction: NZ
sources:
  - title: For people and planet
    url: https://www.greens.org.nz/tax_system_for_all
  - title: Greens tax policy 2026
    url: https://assets.nationbuilder.com/beachheroes/pages/71965/attachments/original/1782084525/GreensTaxPolicy2026.pdf
tags:
  - taxation
  - economy
  - cost-of-living
party: green
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/green/tax_system_for_all.md
derivesFrom: green-tax-system-for-all
assumptions:
  - a tax on net assets above a threshold is incident on the wealth holder who is assessed, not on wage earners below the threshold; the policy names the base but not incidence language
  - a higher corporate rate and a bank levy can pass into prices, wages or margins; the policy treats them as fairness measures and does not settle pass-through
  - a tax-free threshold on the first dollars of income is an income-tax cut for almost all earners, including people who never pay the wealth tax
  - the published net total after tax-setting costs still depends on collection of the wealth and corporate measures; a shortfall would squeeze the cut or other spending
sourceDigest: "sha256-a127e80197aa1d77"
---

# Our understanding

> The policy and PDF state the 2.5% wealth tax above $10 million, the Capital Acquisitions Tax, the 33% corporate rate for large firms, the bank levy, the $10,000 tax-free threshold and the 45% top rate. They do not say that incidence sits on wealth holders and large firms, or that the threshold is an income-tax cut rather than a wealth redistribution by itself.

System: Wealth and corporate charges funding an income-tax cut

Scenario: A wealth holder is assessed above the net-asset threshold
Given a 2.5 percent annual tax on net assets above $10 million with the family home exempt
When the assessment falls due
Then the liability sits on the person whose net assets are taxed
Output 2.5 percent tax on net assets above $10 million
And 33 percent Capital Acquisitions Tax on inheritances and gifts above $1 million
Outcome revenue is drawn from concentrated wealth, not from wages below the threshold
But valuation and trust apportionment decide who is in the base

Scenario: Large corporations and big banks face higher charges
Given the corporate tax rate is 28 percent for firms below the large-business line
When the corporate rate for the largest firms is raised and the bank levy is introduced
Then the extra tax sits on those firms' accounts first
Output corporate tax at 33 percent for about 0.7 percent of businesses above $30 million turnover
And a Bank Levy of 0.06 percent on liabilities of the four big banks
Outcome the Crown gains revenue from highly profitable balance sheets
But prices, wages or margins can move to recover the charge; the policy does not say which

Scenario: Most earners receive the tax-free threshold
Given a new tax-free threshold of $10,000
And a new 45 percent rate on income over $160,000
When the income-tax schedule is reset
Then the first dollars of wage and salary income leave the tax base
Output $10,000 of income taxed at 0%
And 45 percent on income over $160,000
And tax-setting changes costing $2,335 million in 2027/28
Outcome 96 percent of people get an income-tax cut without needing to hold taxable wealth
But the cut is funded only while the wealth and corporate measures actually raise the published totals
