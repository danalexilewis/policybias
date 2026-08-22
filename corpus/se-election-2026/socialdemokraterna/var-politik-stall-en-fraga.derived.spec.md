---
type: spec
id: socialdemokraterna-var-politik-stall-en-fraga-derived
title: "Ställ en fråga (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Ställ en fråga"
jurisdiction: SE
sources:
  - title: "Ställ en fråga"
    url: https://www.socialdemokraterna.se/var-politik/stall-en-fraga
tags: [elderly-welfare]
party: socialdemokraterna
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-stall-en-fraga.md
sourceDigest: "sha256-4e727edcd67812a9"
derivesFrom: socialdemokraterna-var-politik-stall-en-fraga
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Ställ en fråga

Scenario: A reader takes the page at its word
Given the stated spec socialdemokraterna-var-politik-stall-en-fraga
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
