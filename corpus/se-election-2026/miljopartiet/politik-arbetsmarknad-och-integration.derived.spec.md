---
type: spec
id: miljopartiet-politik-arbetsmarknad-och-integration-derived
title: "Arbetsmarknad (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Arbetsmarknad"
jurisdiction: SE
sources:
  - title: "Arbetsmarknad"
    url: https://www.mp.se/politik/arbetsmarknad-och-integration/
tags: [economy-tax]
party: miljopartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-arbetsmarknad-och-integration.md
sourceDigest: "sha256-fe5d31592eec2129"
derivesFrom: miljopartiet-politik-arbetsmarknad-och-integration
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetsmarknad

Scenario: A reader takes the page at its word
Given the stated spec miljopartiet-politik-arbetsmarknad-och-integration
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
