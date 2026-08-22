---
type: spec
id: liberalerna-politik-arbetsmarknad-derived
title: "Arbetsmarknad (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Arbetsmarknad"
jurisdiction: SE
sources:
  - title: "Arbetsmarknad"
    url: https://www.liberalerna.se/politik/arbetsmarknad
tags: [crime-justice]
party: liberalerna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-arbetsmarknad.md
sourceDigest: "sha256-12ba0ad2e97b2264"
derivesFrom: liberalerna-politik-arbetsmarknad
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetsmarknad

Scenario: A reader takes the page at its word
Given the stated spec liberalerna-politik-arbetsmarknad
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
