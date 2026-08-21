---
type: spec
id: act-game-management-derived
title: "Game management read as a system: pest default flipped when DOC loses the management seat"
status: draft
updated: 2026-08-21
summary: Moving game management from DOC to the Game Animal Council ends pest-by-default treatment only where valued-resource status binds; conservation limits still need a working definition.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/game-management
tags:
  - environment
party: act
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/act/game-management.md
sourceDigest: "sha256-e5d84bb9bcf539d4"
derivesFrom: act-game-management
assumptions:
  - DOC keeping a wider conservation role while losing game-management authority creates a split decision path whenever herd goals and conservation goals conflict
  - recognising game species as valued natural resources ends pest-by-default treatment; control then needs a local damage or limit case rather than an automatic extermination starting point
  - Herds of Special Interest starting with Stewart Island whitetail are a named first case, not a finished national herd list
  - fully funding the Council without a published dollar amount means the transfer's fiscal size is unknown; we invent none
---

# Our understanding

> The policy transfers game management on conservation land from DOC to the Game Animal Council and recognises game species as valued resources. It does not say how conservation limits bind Council decisions, what funding "fully funded" costs, or how DOC's remaining conservation role resolves a conflict with a herd plan.

System: Hunter-led management when the pest default flips

Scenario: DOC loses game management on conservation land
Given DOC manages game animals on conservation land under legislation that starts from controlling or exterminating them
And the Game Animal Council can advise while DOC keeps authority
When responsibility for managing game animals on conservation land is transferred to the Game Animal Council
Then hunters with herd knowledge make game-management decisions instead of advisory-only consultation
Outcome the Council is judged on results it delivers
But DOC's wider conservation role and the Council's herd plans can still pull in opposite directions on the same land

Scenario: Valued-resource status replaces the pest default
Given the law still begins from the idea that introduced game animals should be exterminated wherever possible
When game-animal and game-bird species are recognised in relevant legislation as valued natural resources to be sustainably managed
Then they are no longer pests simply because they were introduced
Outcome management turns on sustainable use within conservation limits
But without a working definition of those limits, valued status is a label until a damage or carrying case is made

Scenario: A Herd of Special Interest is designated
When New Zealand's most valued game herds are designated as Herds of Special Interest, beginning with Stewart Island whitetail deer
Then that herd gets a plan that recognises its value
Outcome other valued herds can follow the same path
But herds without a designation stay under the general framework until criteria beyond the first case are set
