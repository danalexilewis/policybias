---
type: spec
id: socialdemokraterna-var-politik-a-till-o-klimatpolitik-derived
title: "Sverigebränslet read as a system: the pump price is held with contracts while the EU target lies beyond national reach"
status: draft
updated: 2026-08-23
summary: The base blend can be steered in procurement, but the binding EU target requires other member states, and faster permits only yield electricity if someone builds.
jurisdiction: SE
sources:
  - title: Klimatpolitik
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/klimatpolitik
tags:
  - climate
derivesFrom: socialdemokraterna-var-politik-a-till-o-klimatpolitik
party: socialdemokraterna
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-klimatpolitik.md
sourceDigest: sha256-6a133611aa9c4020
assumptions:
  - long procurement contracts can keep the blend stable without lowering the world-market price of diesel
  - a binding EU target of a 95 percent cut is decided in Brussels, not in the Riksdag
  - amendment permits as the main rule shorten processing, not construction time, if the capital stays away
  - compensation to sparsely populated areas for car dependence offsets part of the instrument that is to cut driving
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-klimatpolitik-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-da6d372e9f3fce08
---

# Our understanding

> Sverigebränslet's base blend can be written into contracts. The EU target of sharply lower emissions can only be delivered if the union goes along. Amendment permits as the main rule remove one obstacle, not the whole investment. Support for electric-car leasing and compensation to the countryside keep the transition politically possible, and can at the same time keep car dependence.

System: Contracted blending against a supranational target

Scenario: A haulier fills up under Sverigebränslet
Given a stable base blend with long procurement contracts
When the contracts apply
Then the blend stays fixed regardless of the month's spot price
Outcome emissions from the fuel at the pump can fall
But the price is pressed only if the contract is cheaper than the pure fossil litre

Scenario: The EU target is to be made binding
Given a target of at least a 95 percent cut in carbon dioxide emissions
When the target is negotiated in the EU
Then Sweden's vote is not enough on its own
Outcome domestic policy can miss the target despite Sverigebränslet
But the responsibility looks like a Swedish promise

Scenario: Wind power waits for the municipality's yes
Given stronger incentives for municipalities to take part in expanded wind power
When the municipality weighs disturbance against compensation
Then the permit can go faster
Outcome the electricity arrives only if someone builds
But the incentive is not priced
