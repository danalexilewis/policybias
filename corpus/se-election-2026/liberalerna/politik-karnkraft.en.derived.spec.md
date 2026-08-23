---
type: spec
id: liberalerna-politik-karnkraft-derived
title: "Nuclear expansion read as a system: the ban is gone, the capital is not"
status: draft
updated: 2026-08-23
summary: Lifting the cap on reactors and sites is a permit change; new plants, small reactors and recycled fuel still need a buyer of risk the page does not name.
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
  - allowing more than ten reactors and new sites does not by itself pour concrete; a developer still needs a strike price or a state backstop
  - smaller reactors for heat and hydrogen are a different product from today's large plants, with no Swedish commercial fleet yet
  - weather-dependent power can be absorbed only if nuclear actually runs as the firm floor; delays leave the grid short
  - fuel recycling is a future option the page conditions on need arising, not a plant ordered now
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-1e0061f35a412319
translationOf: liberalerna-politik-karnkraft-derived
lang: en
---

# Our understanding

> The legal ban is already gone. What remains is who pays for the next reactor. Small plants for heat and hydrogen are a new industry, not a spare turbine at an old site. Until a plant is ordered, the mix on paper is not power in the wall.

System: Permits without a strike price

Scenario: A developer looks at a new site after the cap is lifted
Given it is now allowed to have new reactors at places other than today's plants in Forsmark Ringhals and Oskarshamn
And more than ten reactors may be in operation at the same time
When the developer asks who takes construction risk
Then the law no longer blocks the project
Outcome the plant is still not built until capital and a buyer of power are signed
But the page does not name the state share or the contract form

Scenario: Industry wants process heat while the next reactor is still small on paper
Given the next Swedish reactor will probably be smaller than today's
And small reactors are more interesting for process heat district heat or hydrogen
When a mill asks for steam next decade
Then a small reactor is the named tool
Outcome electrification and heat wait on a design that is not yet a Swedish fleet
Activates liberalerna-politik-klimatet
