---
type: spec
id: moderaterna-var-politik-forskola-derived
title: "Förskola (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Förskola"
jurisdiction: SE
sources:
  - title: "Förskola"
    url: https://moderaterna.se/var-politik/forskola/
tags: [climate-environment]
party: moderaterna
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-forskola.md
sourceDigest: "sha256-7d0222cbf939c355"
derivesFrom: moderaterna-var-politik-forskola
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Förskola

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik-forskola
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
