---
type: spec
id: sverigedemokraterna-a-till-o-asylinvandring
title: Asylum in the first safe country, EBO abolished and reception at the EU minimum
status: draft
updated: 2026-08-23
summary: Asylum immigration is to be as low as possible through asylum in the first safe country, return when the home country is safe, abolition of EBO and reception at the EU minimum level.
jurisdiction: SE
sources:
  - title: Asylinvandring
    url: https://www.sd.se/a-till-o/asylinvandring/
tags:
  - immigration
party: sverigedemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-asylinvandring.md
sourceDigest: sha256-94a00538c916c687
gaps:
  - how low asylum immigration is to be in number of people is not stated
  - which countries count as the first safe country is not stated
  - how return is to be forced when the person does not travel voluntarily is not stated
  - what happens to someone already living in EBO when the option ends is not stated
  - what the EU minimum level means in allowance, housing and rights is not stated
  - the cost of more institutional housing when EBO disappears is not stated
lang: en
translationOf: sverigedemokraterna-a-till-o-asylinvandring
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e303b3cfe691bd9c
---

# What the page states

> Asylum immigration is to be kept as low as possible. Asylum is to be sought in the first safe country, in the normal case not here. When the home country is safe, people are to return. Own housing for asylum seekers is to end, and reception is to sit at the EU minimum level.

System: Low asylum immigration through first safe country and a minimum level

Scenario: An asylum seeker arrives from another safe country
Given asylum seekers can choose Sweden or other EU countries with more generous conditions
When the principle of asylum in the first safe country is applied
Then Sweden is in the normal case not the first safe country
And it becomes less attractive to abuse the right of asylum
Outcome the pull toward Sweden falls

Scenario: It is safe to return to the home country
When it is safe to go back to the home country
Then one is to do so
Outcome asylum protection lasts no longer than the protection is needed

Scenario: An asylum seeker wants to arrange their own housing
When the option for asylum seekers to arrange their own housing ends
Then the reception system is adapted to the EU minimum level
Outcome EBO ends and reception is lowered to the minimum level
