---
type: spec
id: opportunity-intergenerational-infrastructure-derived
title: "Infrastructure read as a system: a 60% maintenance rule that starves new build unless the envelope grows"
status: draft
updated: 2026-08-18
summary: Locking 60% of future spend on maintenance means new hospitals and lines compete for the remaining 40% unless the total envelope grows; $60 billion of extra borrowing is that growth, and it still has to be spent well.
jurisdiction: NZ
sources:
  - title: Intergenerational Infrastructure
    url: https://www.opportunity.org.nz/intergenerational_infrastructure
  - title: Intergenerational infrastructure policy
    url: https://cdn.opportunity.org.nz/documents/policy/intergenerational-infrastructure.pdf
tags:
  - infrastructure
party: opportunity
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/intergenerational_infrastructure.md
derivesFrom: opportunity-intergenerational-infrastructure
assumptions:
  - 60% of a fixed envelope to maintenance cuts the new-build share; the $60 billion fund is what keeps new build alive
  - a public Bill to cancel a project over $250 million is a political cost, not a physical lock — a majority can still pass the Bill
  - $150 million net for free public transport is a separate operating choice riding on an infrastructure card; fare-box loss lands on the Crown
sourceDigest: "sha256-0fbcde7d08fa59fd"
---

# Our understanding

> The policy states 60% to maintenance, $60 billion over ten years, and $150 million net for free public transport. It does not say that 60% of a frozen envelope shrinks new build, or that a majority can still cancel a project by passing the Bill.

System: Maintenance first, new build from extra debt

Scenario: Sixty percent is reserved for maintenance
Given 60% of future infrastructure spend going to maintenance and renewal
When the envelope does not grow
Then new hospitals and lines compete for whatever is left after maintenance
Outcome existing assets last longer
But new build shrinks unless the $60 billion fund actually enlarges the envelope
Activates opportunity-tax-reset

Scenario: A later government wants to cancel a project
Given a public Bill required to cancel anything over $250 million
When that government has the votes
Then the Bill can still pass
Outcome cancellation is slower and more public than a quiet dump
But a majority is still a majority
Activates opportunity-citizens-voice
