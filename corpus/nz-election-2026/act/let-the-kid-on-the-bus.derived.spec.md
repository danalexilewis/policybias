---
type: spec
id: act-let-the-kid-on-the-bus-derived
title: "Open Seat Rule read as a system: spare capacity first, then a new cost inside a capped budget"
status: draft
updated: 2026-08-21
summary: Empty seats on existing routes can be used without new spend; when demand fills a route, an extra bus is a real cost that must be absorbed by cutting something else inside the Ministry of Education's existing budget.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/let-the-kid-on-the-bus
tags:
  - education
  - transport
party: act
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/act/let-the-kid-on-the-bus.md
sourceDigest: "sha256-2960484f34f94c19"
derivesFrom: act-let-the-kid-on-the-bus
assumptions:
  - spare capacity on an existing route can be filled at near-zero marginal cost to the Ministry; the family's car trip is what falls away
  - when spare seats are gone, an additional bus is a new operating cost even if funded inside the existing Ministry of Education budget
  - funding extras by cutting waste means some other Ministry spend is displaced; which line is cut is not in the policy
  - we invent no dollar amount for seats freed, buses added or waste cut, because the policy publishes none
---

# Our understanding

> The policy's Open Seat Rule uses spare seats on existing school bus routes regardless of which school a child attends, and funds extra buses from within the Ministry of Education's existing budget if a route fills. It does not say how seats are rationed when several children want the same spare, what waste is cut, or how many children are affected.

System: Spare capacity first, then crowding inside a capped budget

Scenario: A child uses a spare seat on an existing route
Given school transport rules are built around a child's nearest school
And in rural communities an empty seat can pass a waiting child because their family chose a different school
And parents then duplicate the trip in their own car while a taxpayer-funded bus travels with room to spare
When the Open Seat Rule lets any child living along an existing school bus route use the service when a seat is available, regardless of which school they attend
Then spare capacity is used before any new bus is ordered
Outcome families save time and fuel while using transport taxpayers have already paid for
But allocation among children who want the same spare seat is unsettled until a local rule exists

Scenario: Demand fills a route beyond its capacity
When demand on a route grows beyond its capacity and an additional bus is provided
Then crowding on the Open Seat Rule creates a new operating cost
Outcome the extra bus is funded from within the Ministry of Education's existing budget by cutting waste
But a cost inside a capped budget still displaces some other Ministry spend; the policy does not name which

Scenario: Most routes never fill
When the Open Seat Rule is introduced for school transport
Then routes that keep spare seats require no extra Ministry spending
Outcome the rule mainly reallocates empty seats rather than expanding the fleet
But success that fills many routes converts a free-capacity policy into a queue of new buses competing for the same capped budget
