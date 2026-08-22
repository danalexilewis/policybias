---
type: spec
id: sverigedemokraterna-a-till-o-energipolitik-derived
title: Energipolitik (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Energipolitik
jurisdiction: SE
sources:
  - title: Energipolitik
    url: https://www.sd.se/a-till-o/energipolitik/
tags:
  - energy
party: sverigedemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-energipolitik.md
sourceDigest: sha256-390d2659e28dc07d
derivesFrom: sverigedemokraterna-a-till-o-energipolitik
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Energipolitik

Scenario: A reader takes the page at its word
Given the stated spec sverigedemokraterna-a-till-o-energipolitik
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
