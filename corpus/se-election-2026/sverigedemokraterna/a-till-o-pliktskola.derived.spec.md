---
type: spec
id: sverigedemokraterna-a-till-o-pliktskola-derived
title: Pliktskola (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Pliktskola
jurisdiction: SE
sources:
  - title: Pliktskola
    url: https://www.sd.se/a-till-o/pliktskola/
tags:
  - education
party: sverigedemokraterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-pliktskola.md
sourceDigest: sha256-390d2659e28dc07d
derivesFrom: sverigedemokraterna-a-till-o-pliktskola
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Pliktskola

Scenario: A reader takes the page at its word
Given the stated spec sverigedemokraterna-a-till-o-pliktskola
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
