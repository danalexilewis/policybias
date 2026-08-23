---
type: spec
id: sverigedemokraterna-a-till-o-karnkraft-derived
title: "Nuclear power read as a system: the state bears the risk, electricity comes later"
status: draft
updated: 2026-08-23
summary: Obstacles are cleared and the state shares risk; the policy admits restoration takes time, but does not say how large the bill is or when the reactors deliver.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://www.sd.se/a-till-o/karnkraft/
tags:
  - energy
derivesFrom: sverigedemokraterna-a-till-o-karnkraft
party: sverigedemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-karnkraft.md
sourceDigest: sha256-130bdb28f2c90232
assumptions:
  - state risk-sharing means taxpayers take part of the loss if the project fails; the policy does not say how large the share is
  - new reactors take more than one parliamentary term; households' price level now is not driven by reactors not yet built
  - half of nuclear power is the policy's baseline for the loss, not an independent energy balance
  - cleared obstacles remove legal barriers; they do not remove capital cost, local opposition or grid capacity
lang: en
translationOf: sverigedemokraterna-a-till-o-karnkraft-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-7b68ba344067a493
---

# Our understanding

> The policy has already moved risk to the state and cleared obstacles. That is the input. New electricity at the socket is the outcome, and the policy says it takes time. Households and businesses that lost from the shutdown wait for capacity that does not yet exist. The bill for risk-sharing is open.

System: Risk on the state, effect later

Scenario: A nuclear power project runs over budget
Given extensive state risk-sharing is offered
When costs rise
Then part of the loss lands on the public sector
Outcome households bear the risk as taxpayers before they see new capacity

Scenario: The electricity price this winter, before new nuclear power exists
Given it takes time to restore the system
When a household is to pay the electricity bill now
Then new nuclear power is not yet delivering the secure electricity and capacity the policy promises
Outcome price level and robustness are a restoration goal, not the current state
