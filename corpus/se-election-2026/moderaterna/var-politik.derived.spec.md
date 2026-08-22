---
type: spec
id: moderaterna-var-politik-derived
title: "På hårt arbetande människors sida (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of På hårt arbetande människors sida"
jurisdiction: SE
sources:
  - title: "På hårt arbetande människors sida"
    url: https://moderaterna.se/var-politik/
tags: [health-care]
party: moderaterna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik.md
sourceDigest: "sha256-0d0358eaa55b4134"
derivesFrom: moderaterna-var-politik
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: På hårt arbetande människors sida

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
