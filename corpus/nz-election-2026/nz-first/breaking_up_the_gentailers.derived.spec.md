---
type: spec
id: nz-first-breaking-up-the-gentailers-derived
title: "Gentailer split read as a system: retail-price solar export as a transfer, with replacement pricing unnamed"
status: draft
updated: 2026-08-21
summary: Splitting firms that control almost 90% of generation changes structure, but paying solar exporters the retail price transfers value from retailers to household generators, and the replacement for marginal-cost pricing is not specified.
jurisdiction: NZ
sources:
  - title: Breaking up the Gentailers
    url: https://www.nzfirst.nz/breaking_up_the_gentailers
tags:
  - energy
party: nz-first
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/breaking_up_the_gentailers.md
derivesFrom: nz-first-breaking-up-the-gentailers
assumptions:
  - selling exported solar at the same retail price the household pays is a transfer from the retailer (and ultimately other customers) to the household generator; the policy presents it as putting power back in households' hands
  - almost 90% generation control is the structural baseline the split is meant to break; who owns which assets after the split is not stated
  - replacing a system where the most expensive generator sets the price requires a named replacement rule; "cannot hold back supply" is a constraint, not a pricing formula
  - long-term fixed-price contracts for new build shift volume and price risk; without contract terms the incidence between investors and consumers stays open
sourceDigest: "sha256-9c944c2c3a7d8d81"
---

# Our understanding

> Generators and retailers would split, solar exporters would be paid the retail price, and pricing would change so firms cannot hold back supply — but the replacement rule and who funds the retail-price buy-back are unspecified against almost 90% generation control by the big four.

System: Structural split and a retail-price solar transfer

Scenario: A household exports solar at the retail price it pays
Given households generating solar can sell power back to the grid at the same price they pay for it
When that household exports surplus solar
Then the retailer pays retail for power it would otherwise buy more cheaply wholesale
Outcome the household generator receives a higher export price than today's typical buy-back
But the difference is a transfer from retailers — and potentially other customers — to solar households

Scenario: The big four are split while they control almost 90% of generation
Given the big four power companies control almost 90% of electricity generation and sell it back to themselves
When those companies are split into generators and retailers
Then generation and retail can no longer sit in the same firm
Outcome innovative and low-cost retailers face a less closed wholesale path
But investors and customers still face unknown asset splits and transfer prices

Scenario: Marginal-cost pricing is replaced without a named formula
Given the most expensive generator sets the price for all electricity under the current system
When the current system is replaced so companies cannot hold back supply just to drive prices higher
Then a new pricing rule must be chosen before offers clear
Outcome firms lose the ability to withhold for price under the stated constraint
But bill-payers carry whatever the new pricing rule delivers, before anyone has seen it
