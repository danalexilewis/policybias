---
type: spec
id: act-let-the-kid-on-the-bus
title: "Open Seat Rule for school bus spare capacity on existing routes"
status: draft
updated: 2026-08-18
summary: Let any child along an existing school bus route use spare seats regardless of which school they attend, funding extra buses from the Ministry of Education's existing budget if demand fills a route.
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
gaps:
  - no estimate of children affected or seats freed is stated
  - what waste would be cut in the Ministry budget to fund extra buses is not identified
  - how spare capacity is allocated when multiple children want the same seat is not stated
  - whether urban routes are included is not stated
  - no commencement date is stated
---

# What the page states

> The Open Seat Rule, route-based eligibility regardless of school choice, additional-bus trigger, and funding-from-existing-budget-by-cutting-waste claim are all on the source page. The page carries no dollar figures or rollout detail.

System: School transport Open Seat Rule

Scenario: A child lives along an existing school bus route but attends a different school
Given school transport rules are built around a child's nearest school
And in rural communities an empty seat can pass a waiting child because their family chose a different school
And parents then duplicate the trip in their own car while a taxpayer-funded bus travels with room to spare
When the Open Seat Rule is introduced for school transport
Then any child living along an existing school bus route may use the service when a seat is available, regardless of which school they attend
Output an additional bus where demand on a route grows beyond its capacity
Outcome extra buses funded from within the Ministry of Education's existing budget by cutting waste
And families save time and fuel while using transport taxpayers have already paid for
