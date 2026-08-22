---
type: spec
id: miljopartiet-politik-energi-derived
title: Miljöpartiet energi och energieffektivisering (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Miljöpartiet energi och energieffektivisering
jurisdiction: SE
sources:
  - title: Miljöpartiet energi och energieffektivisering
    url: https://www.mp.se/politik/energi
tags:
  - energy
derivesFrom: miljopartiet-politik-energi
party: miljopartiet
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-energi.md
sourceDigest: sha256-324a7404a3d5dc69
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Miljöpartiet energi och energieffektivisering

Scenario: A reader takes the page at its word
Given the matching stated spec
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
