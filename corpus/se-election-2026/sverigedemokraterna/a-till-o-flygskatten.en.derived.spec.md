---
type: spec
id: sverigedemokraterna-a-till-o-flygskatten-derived
title: "Flight tax read as a system: the climate instrument is gone, replacement is missing"
status: draft
updated: 2026-08-23
summary: Abolition removes a price on international flights; the policy claims zero climate benefit and higher competitiveness but shows neither emissions, routes nor state revenue.
jurisdiction: SE
sources:
  - title: Flygskatten
    url: https://www.sd.se/a-till-o/flygskatten/
tags:
  - taxation
derivesFrom: sverigedemokraterna-a-till-o-flygskatten
party: sverigedemokraterna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-flygskatten.md
sourceDigest: sha256-f62de7a583631378
assumptions:
  - a tax per trip raises the price of flying; when removed, flying becomes relatively cheaper against rail and meetings on the ground
  - the claim of no reduced climate impact lacks a series; emissions may have been held back by other things or not
  - international routes are driven by demand and airline networks, not only by a Swedish tax
  - climate targets without this instrument require either other instruments or missing the targets; the policy names no alternative
lang: en
translationOf: sverigedemokraterna-a-till-o-flygskatten-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7ccf0ed389fa6d11
---

# Our understanding

> The tax on flights is gone and is to stay gone. The claim is that it did not cut emissions and that it harmed competitiveness. None of that is measured on the policy. When the price is removed, those who fly carry less of the climate cost. Who carries it instead is not said.

System: Flights without that tax, without a replacing instrument

Scenario: A traveller chooses flying after abolition
Given the flight tax is removed
When the traveller compares flying with other modes
Then the ticket no longer carries that tax
Outcome climate impact from the trip is not priced by this tool

Scenario: The climate target stands without the flight tax
Given the tax is described as without environmental benefit
When climate targets are still to be met
Then the policy does not point to another instrument against flight emissions
Outcome either something else carries the policy, or the target does not bite on flights
