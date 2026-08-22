---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset-derived
title: Elpriset (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Elpriset
jurisdiction: SE
sources:
  - title: Elpriset
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/elpriset
tags:
  - energy
  - economy
derivesFrom: vansterpartiet-var-politik-politik-a-o-elpriset
party: vansterpartiet
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-elpriset.md
sourceDigest: sha256-311b30b8c1e99221
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Elpriset

Scenario: A reader takes the page at its word
Given the matching stated spec
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
