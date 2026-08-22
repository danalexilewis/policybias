---
type: spec
id: moderaterna-var-politik-forebyggande-arbete-derived
title: "Förebyggande arbete (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Förebyggande arbete"
jurisdiction: SE
sources:
  - title: "Förebyggande arbete"
    url: https://moderaterna.se/var-politik/forebyggande-arbete/
tags: [elderly-welfare]
party: moderaterna
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-forebyggande-arbete.md
sourceDigest: "sha256-300632d67752933c"
derivesFrom: moderaterna-var-politik-forebyggande-arbete
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Förebyggande arbete

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik-forebyggande-arbete
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
