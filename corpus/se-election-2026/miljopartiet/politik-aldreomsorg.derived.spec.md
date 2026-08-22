---
type: spec
id: miljopartiet-politik-aldreomsorg-derived
title: Miljöpartiet politik för äldreomsorg (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Miljöpartiet politik för äldreomsorg
jurisdiction: SE
sources:
  - title: Miljöpartiet politik för äldreomsorg
    url: https://www.mp.se/politik/aldreomsorg
tags:
  - healthcare
derivesFrom: miljopartiet-politik-aldreomsorg
party: miljopartiet
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-aldreomsorg.md
sourceDigest: sha256-b8e10f91c9740a1a
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Miljöpartiet politik för äldreomsorg

Scenario: A reader takes the page at its word
Given the matching stated spec
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
