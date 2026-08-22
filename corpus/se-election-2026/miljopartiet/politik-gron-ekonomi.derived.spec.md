---
type: spec
id: miljopartiet-politik-gron-ekonomi-derived
title: Miljöpartiets ekonomiska politik (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Miljöpartiets ekonomiska politik
jurisdiction: SE
sources:
  - title: Miljöpartiets ekonomiska politik
    url: https://www.mp.se/politik/gron-ekonomi
tags:
  - economy
  - climate
  - social-welfare
derivesFrom: miljopartiet-politik-gron-ekonomi
party: miljopartiet
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-gron-ekonomi.md
sourceDigest: sha256-625da40fada33900
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Miljöpartiets ekonomiska politik

Scenario: A reader takes the page at its word
Given the matching stated spec
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
