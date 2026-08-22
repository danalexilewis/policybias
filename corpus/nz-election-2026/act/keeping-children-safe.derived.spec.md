---
type: spec
id: act-keeping-children-safe-derived
title: "Working with Children Card read as a system: continuous Police feed replaces snapshot checks"
status: draft
updated: 2026-08-21
summary: A three-year portable card with continuous Police checking ends employer snapshot vetting, so risk that appears between renewals can suspend work immediately across every linked organisation.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/keeping-children-safe
  - title: Working with Children policy
    url: https://assets.nationbuilder.com/actnz/mailings/59457/attachments/original/Working_With_Children_policy_04.pdf
tags:
  - crime-and-justice
  - education
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/keeping-children-safe.md
derivesFrom: act-keeping-children-safe
assumptions:
  - continuous checking against new Police information closes the gap the policy describes between three-year snapshot checks
  - suspending a card and notifying every linked organisation stops the holder across roles at once, not only at one employer
  - employers verify a valid card instead of running their own Police check each hire
  - the net taxpayer cost assumes fee recovery at the policy's stated rates
sourceDigest: "sha256-35bba72da8239416"
---

# Our understanding

> A portable three-year card fed by continuous Police information replaces employer snapshot checks. When risk appears, suspension hits every linked organisation at once. Cost figures below are the policy's own estimates.

System: Portable card with continuous Police monitoring

Scenario: Snapshot employer checks are replaced by one national card
Given safety checks are carried out by individual employers and generally only re-checked every three years
And the current system can leave three years between safety checks even if worrying new Police information emerges
When one national Working with Children Card is created that paid workers and volunteers must hold
Then the card belongs to the holder and lasts three years
Outcome employers verify a valid card instead of repeating their own Police check
But people convicted of specified serious offences against children stay out of covered roles

Scenario: New Police information arrives between renewals
Given cardholders are checked continuously against new Police information
When Police learn someone may be dangerous
Then the card can be suspended, work with children stops, and every linked organisation is told
Outcome employers no longer wait for the next three-year snapshot to learn of a change
But employers cannot know in advance which offences will suspend a card until the trigger list is published

Scenario: The scheme is funded at the policy's stated costs
Given paid workers pay about $108, often covered by employers, with volunteers and students exempt or discounted
When the national scheme runs
Then establishment and operating costs are met partly from application fees
Output $12–20 million one-off establishment cost
And about $50 million a year operating cost
And about $37.5 million a year recovered through application fees
And about $12.5 million a year net cost to taxpayers
Outcome screening is continuous rather than a three-year snapshot
But net cost to taxpayers remains after fee recovery
