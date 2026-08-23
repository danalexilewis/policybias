---
type: spec
id: socialdemokraterna-var-politik-a-till-o-karnkraft-derived
title: "New nuclear power at existing sites read as a system: concentration to three places and technology-neutral support that competes with wind"
status: draft
updated: 2026-08-23
summary: Building only where reactors already stand gathers waste and acceptance, while technology-neutral support means nuclear power must compete for the same state money as other fossil-free electricity.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/karnkraft
tags:
  - energy
derivesFrom: socialdemokraterna-var-politik-a-till-o-karnkraft
party: socialdemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-karnkraft.md
sourceDigest: sha256-2908cb23c25da6c2
assumptions:
  - existing local acceptance can turn when waste and construction time become visible again
  - technology-neutral support for all large-scale fossil-free power dilutes the amount per technology
  - that Oskarshamn is ultimately owned by the German state makes a Swedish ownership purchase a negotiation, not an administrative decision
  - a power uprate in old reactors defers, but does not remove, the need for replacements
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-karnkraft-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ecfdb713f99d223a
---

# Our understanding

> New nuclear power is locked to three sites where the grids and the habit already exist. That reduces the fight over new municipalities, and gathers waste and accident risk. Technology-neutral support means the reactor competes with other fossil-free power for the same cash. The requirement of a Swedish owner in Oskarshamn is a deal with a foreign state.

System: Three sites and a shared support pot

Scenario: A new reactor is considered only in Ringhals, Oskarshamn or Forsmark
Given infrastructure and local acceptance where nuclear power already exists
When new nuclear power is planned
Then other municipalities are excluded
Outcome the state keeps control of the location
But waste and accident risk are concentrated to the same three places

Scenario: The support is to be technology-neutral
Given state support that can go to all large-scale fossil-free power production
When nuclear power and other fossil-free electricity seek the same support
Then the amount per technology depends on how many receive it
Outcome nuclear power is permitted, not guaranteed financing
But without an amount it is impossible to know whether the reactor pays

Scenario: Oskarshamn is to have a Swedish owner
Given a reactor ultimately owned by the German state
When Swedish ownership is to be secured
Then the deal is decided by the seller
Outcome control can increase
But the price and the terms are unstated
