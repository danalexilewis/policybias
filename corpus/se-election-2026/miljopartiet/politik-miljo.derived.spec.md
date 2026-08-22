---
type: spec
id: miljopartiet-politik-miljo-derived
title: Miljö och natur (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Miljö och natur
jurisdiction: SE
sources:
  - title: Miljö och natur
    url: https://www.mp.se/politik/miljo
tags:
  - environment
party: miljopartiet
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-miljo.md
sourceDigest: sha256-38c628575c596519
derivesFrom: miljopartiet-politik-miljo
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Miljö och natur

Scenario: A reader takes the page at its word
Given the stated spec miljopartiet-politik-miljo
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
