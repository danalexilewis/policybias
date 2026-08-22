---
type: spec
id: green-manifesto-2026-disability-derived
title: "Disability read as a system: a 75% Total Mobility subsidy beside income support without named levels"
status: draft
updated: 2026-08-21
summary: The only printed figure is a 75% Total Mobility subsidy, while income support that meets all disability-related costs and a rights law with enforceable standards leave payment levels and enforcement capacity open.
jurisdiction: NZ
sources:
  - title: Disability
    url: https://www.greens.org.nz/manifesto_2026_disability
tags:
  - healthcare
  - housing
  - transport
party: green
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_disability.md
derivesFrom: green-manifesto-2026-disability
assumptions:
  - continuing a 75% Total Mobility subsidy holds the passenger share of the fare at that rate only if the scheme stays funded and vehicles exist
  - income support that meets all disability-related living and medical costs is an open-ended claim without printed payment levels
  - enforceable accessibility standards bite only if someone can compel compliance; the policy does not name the enforcement body or penalties
  - replacing legal capacity assessments with supported decision-making changes how decisions are made, not the budget for support workers
sourceDigest: "sha256-b17ebae49ea4f711"
---

# Our understanding

> The policy keeps a 75% Total Mobility subsidy, promises income support that meets all disability-related costs, and introduces Te Tiriti-based disability rights law with enforceable accessibility standards. Income levels, vehicle numbers and enforcement detail are not attached.

System: Priced mobility subsidy beside unpriced income and rights law

Scenario: Total Mobility keeps a 75% subsidy
Given the Total Mobility taxi scheme continuing with easier use and more mobility vehicles
When a disabled person takes an eligible trip
Then the subsidy covers most of the fare
Output 75% subsidy for the Total Mobility taxi scheme
Outcome getting around stays cheaper than the full fare
But passengers still wait on enough vehicles turning up

Scenario: Income support must meet all disability-related costs
Given easily accessible and timely income support for all disability-related living and medical costs
And support regardless of relationship status and cause of disability
When a disabled person claims that support
Then living and medical costs tied to disability are meant to be covered in full
Outcome relationship status no longer cuts the claim on this policy
But the Crown takes on an open-ended bill with no payment ceiling

Scenario: Supported decision-making replaces capacity assessments
When legal capacity assessments give way to rights-based supported decision-making
And a disability rights law with enforceable accessibility standards is introduced
Then decisions about a person's life are framed as support rather than capacity tests
Outcome decisions about a person's life are framed as support rather than capacity tests
But builders and landlords face standards with no named enforcer or penalties yet
