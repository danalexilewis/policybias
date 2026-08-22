---
type: spec
id: green-manifesto-2026-childen-derived
title: "Children read as a system: child voice and OT Act reform without a priced Best Start"
status: draft
updated: 2026-08-21
summary: Child voice enters statute, Best Start extends to every child under three without a dollar amount, and Oranga Tamariki Act reform shifts authority toward whānau, iwi and hapū.
jurisdiction: NZ
sources:
  - title: Children
    url: https://www.greens.org.nz/manifesto_2026_childen
tags:
  - social-welfare
  - education
  - healthcare
party: green
clusters:
  - family-income
money: no-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_childen.md
derivesFrom: green-manifesto-2026-childen
assumptions:
  - making the child's voice central through the Child Impact Assessment Tool and Rights of the Child changes process, not the cash a household receives
  - universal Best Start under three is a standing early-years entitlement whose rate is not on this policy
  - amending the Oranga Tamariki Act to embed whānau participation and iwi or hapū authority shifts who decides for tamariki Māori, not only who is consulted
  - workforce training and disability diagnosis access need funded places; the policy names the direction without staffing or waiting-time targets
sourceDigest: "sha256-70b5a955d678c483"
---

# Our understanding

> The policy centres the child's voice in law, extends Best Start to every child under three, and amends the Oranga Tamariki Act so whānau and iwi or hapū hold real authority over care decisions. Best Start becomes a universal early-years payment. OT Act reform shifts who decides, not just who gets consulted.

System: Child voice, unpriced Best Start, and whānau-led care law

Scenario: Best Start extends to every child under three
Given Best Start increased and extended to every child under three as a universal child benefit
And no payment amount in the policy
When a child under three is in a household
Then that child receives Best Start without a means test on this policy
Outcome every child under three can receive Best Start without a means test
But the Crown takes on an open-ended bill — no payment rate is attached
Activates green-manifesto-2026-gender-equity

Scenario: The child's voice is written into legislation
When legislation makes the child's voice central using the Child Impact Assessment Tool
And the Rights of the Child are incorporated into legislation
Then decisions that affect children must show that voice was weighed
Outcome decisions that affect children must show their voice was weighed
But agencies must design and run the tool before children actually gain that voice

Scenario: Oranga Tamariki Act reform embeds iwi or hapū authority
When the Oranga Tamariki Act is amended to protect tamariki Māori
And whānau participation and iwi or hapū authority are embedded
Then care decisions for tamariki Māori must include that authority
Outcome care decisions for tamariki Māori must include whānau and iwi or hapū authority
But Parliament still has to write the amendment before those rights change on the ground
