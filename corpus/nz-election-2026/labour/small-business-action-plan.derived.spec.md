---
type: spec
id: labour-small-business-action-plan-derived
title: "Small Business Action Plan read as a system: working-capital shift and a write-off-led package"
status: draft
updated: 2026-08-21
summary: Faster pay moves working capital from large firms to small suppliers; the write-off is most of the package cost; lifting the GST threshold drops firms from the compulsory net and shrinks that base.
jurisdiction: NZ
sources:
  - title: Small Business Action Plan
    url: https://www.labour.org.nz/small-business-action-plan
tags:
  - small-business
  - taxation
party: labour
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/labour/small-business-action-plan.md
derivesFrom: labour-small-business-action-plan
assumptions:
  - a rule that large firms pay small suppliers sooner shifts working capital timing from the payer to the payee without creating new money
  - when the write-off cost is most of the published package total, the package is write-off-led
  - firms leaving compulsory GST registration shrink the compulsory GST base even if voluntary registration remains open
sourceDigest: "sha256-32a2741f0e85e3e1"
---

# Our understanding

> The policy states fifteen-day pay for smaller invoices, a higher asset write-off as most of a four-year package, and a higher GST registration threshold that drops firms from compulsory registration. It does not frame pay rules as a working-capital shift or the threshold lift as shrinking the GST base.

System: Small Business Action Plan as cash timing, write-off spend and GST net

Scenario: A large firm must pay a small supplier faster
Given payment within 15 days for invoices of $25,000 or less
When paid-on-time rules bind a large firm
Then working capital moves from the large firm to the small supplier sooner
Outcome the small supplier's cash arrives earlier
But the large firm holds that cash for fewer days

Scenario: The asset write-off dominates the package cost
Given a package costed at $1.56 billion over four years
And $1.355 billion for the asset write-off over four years
When businesses claim the higher write-off
Then most of the package cost sits in the write-off
Output write-off of up to $10,000 in new equipment
And $1.355 billion for the asset write-off over four years
And $1.56 billion cost over four years
Outcome around 500,000 businesses are in scope for the write-off
But the write-off is a timing benefit on tax, as the policy also says

Scenario: The GST registration threshold rises
Given no compulsory GST registration until $80,000
When the threshold lifts
Then firms in that band leave the compulsory GST net
Output around 35,000 businesses no longer required to register for GST
Outcome the compulsory GST base shrinks by that cohort
But voluntary registration remains open
