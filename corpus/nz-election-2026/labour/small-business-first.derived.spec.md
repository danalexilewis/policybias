---
type: spec
id: labour-small-business-first-derived
title: "Small Business First read as a system: a contract target without enforcement"
status: draft
updated: 2026-08-21
summary: A fifteen percent contract target without enforcement is an intention; splitting large contracts raises transaction cost; tell-government-once needs a data rail.
jurisdiction: NZ
sources:
  - title: Small Business First
    url: https://www.labour.org.nz/small-business-first
tags:
  - small-business
party: labour
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/labour/small-business-first.md
derivesFrom: labour-small-business-first
assumptions:
  - a target without a stated measure or enforcement rule is an intention until those exist
  - breaking one large contract into many smaller lots increases bid, tender and contract-management cost for the buyer and for each lot
  - reuse of information already held needs a shared data rail and common identifiers; looking at New Zealand Business Numbers is not yet that rail
sourceDigest: "sha256-53dd4bf5839feca5"
---

# Our understanding

> A fifteen per cent contract share target is an intention until someone defines how it is measured and enforced. Splitting large contracts into smaller lots raises bid and admin cost for buyers and bidders alike, and tell-government-once still needs a shared data rail that does not yet exist.

System: Small Business First as intention, lots and data rail

Scenario: The contract share target is set
When a target for government contracts to small businesses and start-ups is set
Then meeting it needs a measure and an enforcement rule
Output 15% target for government contracts to small businesses and start-ups
Outcome without those, the target is an intention
But small firms gain nothing from a target nobody can hold agencies to

Scenario: A large contract is broken into smaller lots
When a large contract is split into smaller jobs
Then more firms can bid for parts they can deliver
Outcome bid and admin costs rise for the buyer and for each lot
But buyers and each lot bidder carry the extra tender and contract-management cost

Scenario: Agencies reuse information already held
When tell-government-once is rolled out
Then agencies need a shared data rail and common identifiers
Outcome owners answer fewer duplicate forms if that rail exists
But owners keep answering duplicate forms until agencies share identifiers and data
Activates labour-small-business-action-plan
