---
type: spec
id: liberalerna-politik-karnkraft-derived
title: "Nuclear expansion read as a system: the ban is gone, capital is not"
status: draft
updated: 2026-08-23
summary: Lifting the cap on reactors and sites is a permitting change; new plants, small reactors and recycled fuel still need a buyer of risk the policy does not name.
jurisdiction: SE
sources:
  - title: Kärnkraft – Liberalerna
    url: https://www.liberalerna.se/politik/karnkraft
tags:
  - energy
derivesFrom: liberalerna-politik-karnkraft
party: liberalerna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-karnkraft.md
sourceDigest: sha256-56a8523c6331e999
assumptions:
  - allowing more than ten reactors and new sites does not pour concrete by itself; a builder still needs a contract price or a state guarantee
  - smaller reactors for heat and hydrogen are a different product from today's large plants, without a Swedish commercial fleet yet
  - weather-dependent power can be taken up only if nuclear actually runs as the firm floor; delays leave the grid short
  - fuel recycling is a future choice the policy conditions on need arising, not a plant ordered now
lang: en
translationOf: liberalerna-politik-karnkraft-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-17d31e754f77b330
---

# Our understanding

> The legal ban is already gone. What remains is who pays for the next reactor. Small plants for heat and hydrogen are a new industry, not a reserve turbine on an old site. Until a plant is ordered the mix on paper is not power in the wall.

System: Permits without a contract price

Scenario: A builder looks at a new site after the cap is lifted
Given it is now permitted to have new reactors at sites other than today's plants at Forsmark Ringhals and Oskarshamn
And more than ten reactors may be in operation at the same time
When the builder asks who takes construction risk
Then the law no longer blocks the project
Outcome the plant is still not built until capital and a buyer of power are signed
But the policy names neither the state's share nor the contract form

Scenario: Industry wants process heat while the next reactor is still small on paper
Given the next Swedish reactor is likely to be smaller than today's
And small reactors are more interesting for process heat district heating or hydrogen
When a mill asks for steam next decade
Then a small reactor is the named tool
Outcome electrification and heat wait on a design that is not yet a Swedish fleet
Activates liberalerna-politik-klimatet
