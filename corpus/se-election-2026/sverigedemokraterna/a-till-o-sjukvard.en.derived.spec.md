---
type: spec
id: sverigedemokraterna-a-till-o-sjukvard-derived
title: "Healthcare read as a system: the state takes charge while queues lack targets"
status: draft
updated: 2026-08-23
summary: National steering and a later overall responsibility move power from the regions without the policy saying when, to what queue target or what happens if requirements are missed.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.sd.se/a-till-o/sjukvard/
tags:
  - healthcare
derivesFrom: sverigedemokraterna-a-till-o-sjukvard
party: sverigedemokraterna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-sjukvard.md
sourceDigest: sha256-64934e07ce2be1ac
assumptions:
  - requirements on regions only bite if the state can withhold money or take over operations; the policy does not say which tool applies
  - the formulation in time leaves regions as principal during an indefinite transition, so today's queues are still governed there
  - equivalent care across the country requires either redistribution between regions or more state money; neither is costed
  - administration said to go is not measured, so the promise can be met by reclassifying services
lang: en
translationOf: sverigedemokraterna-a-till-o-sjukvard-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-f10052d4d00b433d
---

# Our understanding

> The state is to steer care harder and eventually hold overall responsibility. Queues and differences between regions are the reason. The policy gives no queue target, no timetable and nothing that happens if a region misses the requirements. The power order changes. The result in the queue does not.

System: State grip on care without measurable queue target

Scenario: A region misses the sharper requirements
Given resources are to be tied to requirements and follow-up
And regions are still principal until state overall responsibility comes in time
When a region does not shorten queues
Then the policy does not say whether money is withheld, whether the state takes over operations, or whether nothing happens
Outcome the patient bears the difference between postcodes while responsibility is unclear

Scenario: Overall responsibility is pushed into the future
Given long care queues and unacceptable differences between regions already now
When state overall responsibility is delayed
Then national steering is to carry equivalence in the meantime
But without a queue target it cannot be said when steering is enough
Outcome regions keep operations and the state keeps the story that the work is not finished
