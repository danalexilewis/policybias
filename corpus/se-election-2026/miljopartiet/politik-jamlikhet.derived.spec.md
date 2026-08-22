---
type: spec
id: miljopartiet-politik-jamlikhet-derived
title: "Jämlikhet (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Jämlikhet"
jurisdiction: SE
sources:
  - title: "Jämlikhet"
    url: https://www.mp.se/politik/jamlikhet/
tags: [crime-justice]
party: miljopartiet
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-jamlikhet.md
sourceDigest: "sha256-83f4f00cb9f664b5"
derivesFrom: miljopartiet-politik-jamlikhet
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Jämlikhet

Scenario: A reader takes the page at its word
Given the stated spec miljopartiet-politik-jamlikhet
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
