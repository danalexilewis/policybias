---
type: spec
id: miljopartiet-politik-arbetstidsforkortning-derived
title: "Arbetstidsförkortning (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Arbetstidsförkortning"
jurisdiction: SE
sources:
  - title: "Arbetstidsförkortning"
    url: https://www.mp.se/politik/arbetstidsforkortning/
tags: [energy-power]
party: miljopartiet
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-arbetstidsforkortning.md
sourceDigest: "sha256-daafc60f2597d827"
derivesFrom: miljopartiet-politik-arbetstidsforkortning
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetstidsförkortning

Scenario: A reader takes the page at its word
Given the stated spec miljopartiet-politik-arbetstidsforkortning
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
