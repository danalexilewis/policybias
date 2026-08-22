---
type: spec
id: moderaterna-var-politik-eu-derived
title: "EU (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of EU"
jurisdiction: SE
sources:
  - title: "EU"
    url: https://moderaterna.se/var-politik/eu/
tags: [migration-integration]
party: moderaterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-eu.md
sourceDigest: "sha256-061fb6dbfaba84f4"
derivesFrom: moderaterna-var-politik-eu
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: EU

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik-eu
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
