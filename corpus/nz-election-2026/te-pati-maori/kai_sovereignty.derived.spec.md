---
type: spec
id: te-pati-maori-kai-sovereignty-derived
title: "Kai sovereignty read as a system: a board, a GST cut and an unnamed price rule"
status: draft
updated: 2026-08-22
summary: A Māori Kai Sovereignty Board and GST-free kai set a direction, but the fiscal cost of GST removal and the instrument that regulates price hikes are unnamed, so neither the Budget hit nor supermarket compliance can be sized.
jurisdiction: NZ
sources:
  - title: Kai Sovereignty
    url: https://www.maoriparty.org.nz/kai_sovereignty
  - title: Kai Sovereignty
    url: https://www.maoriparty.org.nz/kai_sovereignt
tags:
  - agriculture
  - taxation
party: te-pati-maori
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/kai_sovereignty.md
derivesFrom: te-pati-maori-kai-sovereignty
assumptions:
  - removing GST from kai shifts revenue from the Crown to grocery buyers only if the cut is passed through; pass-through is a behavioural claim the policy does not prove
  - the fiscal cost of GST-free kai depends on which foods count as kai and on current GST take from those lines; neither is stated
  - regulating supermarket price hikes needs a trigger, a monitor and a penalty; without those the rule is a label
  - a board that oversees kai justice needs powers and funding before it can bind anyone
  - we introduce no figure, because the policy contains none to work from
sourceDigest: "sha256-549ec31636fa2940"
---

# Our understanding

> A Māori Kai Sovereignty Board would oversee kai justice alongside GST-free kai and regulation of supermarket price hikes—but the board has no powers, membership or funding yet, and nobody has listed which foods count as kai. Shoppers only benefit if retailers pass the GST cut through; the Crown still cannot size the revenue forgone.

System: Board oversight with an unnamed GST bill and price instrument

Scenario: GST is removed from kai
Given an intention to reduce grocery costs by removing GST from kai
And no list of what counts as kai and no fiscal estimate
When GST comes off kai
Then the Crown forgoes GST revenue on those lines
And shoppers pay less only if retailers pass the cut through
Outcome grocery prices can fall on the taxed share of the basket
But Treasury cannot size the forgone revenue and shoppers cannot tell what reaches the till

Scenario: Supermarket price hikes are regulated
Given an intention to regulate supermarket price hikes
And no trigger, monitor or penalty
When a price rise is posted
Then someone must decide whether the rise is allowed, capped or punished
Outcome shoppers are promised relief from hiking
But supermarkets face no penalty until someone defines the trigger, monitor and fine

Scenario: The Māori Kai Sovereignty Board is stood up
Given a board charged with overseeing kai justice
And no powers, membership or funding in the policy
When the board is established
Then its authority over seed, GE, WAI262 and food systems must still be defined
Outcome kai justice has a named overseer
But without powers the board cannot settle seed, GE, WAI262 or food-system disputes
