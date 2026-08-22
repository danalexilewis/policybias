---
type: spec
id: act-affordable-uniforms-derived
title: "Uniform caps read as a system: school identity traded against family cost"
status: draft
updated: 2026-08-21
summary: Capping compulsory branded items at three and opening generics to ordinary retailers forces schools to choose which identity markers stay branded while families escape single-supplier pricing on the rest.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/affordable-uniforms
tags:
  - education
  - cost-of-living
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/affordable-uniforms.md
derivesFrom: act-affordable-uniforms
assumptions:
  - a three-item branded cap means schools must drop or make optional any further compulsory logos
  - generic alternatives from ordinary retailers undercut single-supplier mark-ups on high-use items
  - schools that value a fully branded look lose that look for items beyond the three
  - the policy's hundreds of dollars saved is not quantified, so we publish no family saving figure beyond the stated baselines
sourceDigest: "sha256-a9d7234d0a5321a5"
---

# Our understanding

> Competition and choice force a trade: schools keep a small branded set for identity, and families buy the rest as generics from ordinary retailers. Sports, team strips, kapa haka and tracksuits stay outside that trade. Per-family saving beyond the hardship-loan baseline carries no figure.

System: Branded identity capped so families can buy generics

Scenario: A state school must choose which items stay branded
Given some state schools require everyday items from one approved supplier when equivalent items cost much less at ordinary retailers
When the Education and Training Act limits compulsory branded uniform items to three
Then the school picks at most three logo items as compulsory
Output three compulsory branded uniform items maximum at each state school
Outcome school identity rests on that small branded set
But any further everyday item cannot be made a compulsory branded purchase

Scenario: A family buys high-use items as generics
Given many families spend well over $1,000 per child on shirts, socks, shorts or skirts, PE gear and replacements
And 38,000 WINZ hardship loans worth $11 million were issued in 2025 to help families meet uniform costs
When generic alternatives are required for high-use items such as shorts, pants, skirts, skorts and socks
Then families may buy those items from standard clothing retailers
Outcome everyday kit competes on ordinary retail prices
But sports uniforms, team strips, kapa haka uniforms and tracksuits remain outside the new rules
