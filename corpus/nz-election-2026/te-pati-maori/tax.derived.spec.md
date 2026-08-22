---
type: spec
id: te-pati-maori-tax-derived
title: "Tax intention read as a system: a destination with no base or rate yet"
status: draft
updated: 2026-08-18
summary: Without a base, rate or threshold, neither the revenue nor the people who would pay it can be identified, so the spending claim cannot be sized.
jurisdiction: NZ
sources:
  - title: Tax
    url: https://www.maoriparty.org.nz/tax
tags:
  - taxation
party: te-pati-maori
clusters:
  - tax-fiscal
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/tax.md
derivesFrom: te-pati-maori-tax
assumptions:
  - "\"the wealthiest\" has to become a threshold on something measurable before anyone can be assessed: income, net wealth, a transaction, or a company"
  - a wealth or asset base needs valuation, which is an administrative cost the policy does not mention
  - four named spending areas with no split means the revenue is claimed four times over until one is chosen
  - a revenue intention without a rate cannot be compared with policies that publish a base and a rate
  - we introduce no figure, because the policy contains none to work from
sourceDigest: "sha256-29c40b17ec990303"
---

# Our understanding

> Revenue from the wealthiest is meant to fund housing, health, education and whānau support—but nobody can tell yet who is assessed, or at what rate, because the base and threshold are unmade. The four spending destinations claim the same pool until someone splits it.

System: What an unnamed tax base leaves undecided

Scenario: A government must decide who counts as the wealthiest
Given an intention that the wealthiest pay a larger share
And no threshold, base or rate
When the policy is drafted
Then a base and a threshold must be chosen before anyone can be assessed
Outcome the people who would pay are unidentified until that choice is made
But no voter can tell yet whether they land in the assessed group

Scenario: The revenue is claimed by four spending areas at once
Given housing, health, education and whānau support all named as destinations
And no split between them
When the revenue arrives
Then the four claims must be reconciled against one pool
Outcome the direction of travel is clear
But housing, health, education and whānau supporters cannot tell what share each receives
