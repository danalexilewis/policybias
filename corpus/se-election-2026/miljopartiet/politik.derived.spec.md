---
type: spec
id: miljopartiet-politik-derived
title: Sverige vinner på grön politik (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Sverige vinner på grön politik
jurisdiction: SE
sources:
  - title: Sverige vinner på grön politik
    url: https://www.mp.se/politik/
tags:
  - other
party: miljopartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik.md
sourceDigest: sha256-7d4f24c58485fcb1
derivesFrom: miljopartiet-politik
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Sverige vinner på grön politik

Scenario: A reader takes the page at its word
Given the stated spec miljopartiet-politik
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
