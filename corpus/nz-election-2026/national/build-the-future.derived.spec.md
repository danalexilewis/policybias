---
type: spec
id: national-build-the-future-derived
title: "Commercial consents read as a system: engineer sign-off shifts liability, and a specialist BCA may starve councils of fee revenue"
status: draft
updated: 2026-08-21
summary: Formalising producer statements moves inspection risk onto the engineer, while a specialist pathway for large commercial work can pull fee revenue away from residential-focused councils; which work qualifies stays unnamed.
jurisdiction: NZ
sources:
  - title: National to make it easier to build the future
    url: https://www.national.org.nz/build-the-future
tags:
  - infrastructure
  - economy
party: national
clusters:
  - tax-fiscal
money: no-figure
sourcePath: corpus/nz-election-2026/national/build-the-future.md
derivesFrom: national-build-the-future
assumptions:
  - when a council no longer inspects work that an engineer signs off, the practical liability for defects sits with the engineer and their insurer rather than with the council
  - Building Consent Authority fee income follows the work; moving large commercial consents to a specialist pathway reduces that income for local councils even if residential work remains
  - "'certain building work' and 'large commercial buildings' are labels until the scope list is published, so developers and councils cannot yet price the change"
  - we introduce no dollar amount, because inventing a saving or a fee loss would be fabrication
sourceDigest: "sha256-8a3d14bc14478ded"
---

# Our understanding

> Formalising producer statements shifts defect liability onto the engineer and their insurer once council inspection drops out. A specialist Building Consent Authority for large commercial work can pull fee revenue away from residential-focused councils, and which projects qualify stays open until a scope list is published.

System: Commercial consent changes as a liability and fee shift

Scenario: An engineer signs off work without a council inspection
Given producer statements already used to assure Building Code compliance
When producer statements are formalised so qualified engineers can sign off certain building work without council inspection
Then the council no longer re-checks that work on site
Outcome defects on signed-off work land first on the engineer and their cover
But homeowners and tenants still face the building if something fails

Scenario: Large commercial consents move to a specialist pathway
Given local councils currently consent commercial as well as residential work
When a specialist Building Consent Authority consents large commercial buildings through one national process
Then fee income for that work leaves the local council
Outcome councils are freer to focus on residential and standard consents
But residential-focused councils lose the commercial fee stream that helped fund the consent shop

Scenario: A developer asks which projects qualify
When the Building Act change and the specialist pathway are announced without a scope list
Then "certain building work" and "large commercial buildings" remain undefined in the policy
Outcome major projects wait for a schedule before they can plan
But councils and developers carry planning uncertainty until the scope list lands
