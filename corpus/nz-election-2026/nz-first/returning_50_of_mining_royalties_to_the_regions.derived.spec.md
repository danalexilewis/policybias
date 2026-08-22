---
type: spec
id: nz-first-returning-50-of-mining-royalties-to-the-regions-derived
title: "Mining royalties read as a system: half of an unnamed pool, with regional governance unnamed"
status: draft
updated: 2026-08-21
summary: Half the royalties stay in the source region and half remain with Wellington, but without a pool size or a regional decision-maker neither the dollars nor the spend can be checked.
jurisdiction: NZ
sources:
  - title: Returning 50% of mining royalties to the regions
    url: https://www.nzfirst.nz/returning_50_of_mining_royalties_to_the_regions
tags:
  - economy
  - infrastructure
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/returning_50_of_mining_royalties_to_the_regions.md
derivesFrom: nz-first-returning-50-of-mining-royalties-to-the-regions
assumptions:
  - returning 50% to the region leaves 50% with Wellington; that split is arithmetic from the stated share, not a second published figure
  - a percentage of an unnamed royalty pool cannot be turned into dollars until the pool is stated
  - a regional share needs a decision-maker — council, trust, or Crown agent — before water, flood, housing or other listed spends can be allocated; the policy names uses and not governance
  - billions and thousands of jobs are sector claims, not a royalty forecast tied to the 50% split
sourceDigest: "sha256-0bc1f22926f9fcd1"
---

# Our understanding

> Half of mining royalties would return to the extraction region for infrastructure uses rather than all flowing to Wellington, but the royalty pool is unsized and no regional governor is named — so regions cannot plan the dollars or who allocates them.

System: A fifty-fifty royalty split without a sized pool

Scenario: Royalties are split between the region and Wellington
Given mining royalties that would otherwise flow to Wellington
When mining happens in a region
Then half the royalties stay in that region
Output 50% of mining royalties returned to the region of extraction
# extrapolated: 50% remaining with Wellington is arithmetic from the stated regional share
And 50% of mining royalties remaining with Wellington
Outcome communities receive a named share of royalties from activity in their region
But regions cannot budget until the royalty pool is sized

Scenario: The regional share must be spent without a named decision-maker
Given regional investment named for water services, flood protection, energy, tourism, transport, housing and critical infrastructure
And no description of who holds or allocates the regional 50%
When the regional share arrives
Then a governance choice must be made before any of those spends can be authorised
Outcome the list of intended uses is clear
But councils, trusts or Crown agents must be chosen before any spend is authorised
