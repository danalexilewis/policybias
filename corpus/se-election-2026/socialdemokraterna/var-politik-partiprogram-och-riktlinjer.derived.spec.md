---
type: spec
id: socialdemokraterna-var-politik-partiprogram-och-riktlinjer-derived
title: Partiprogram och riktlinjer (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Partiprogram och riktlinjer
jurisdiction: SE
sources:
  - title: Partiprogram och riktlinjer
    url: https://www.socialdemokraterna.se/var-politik/partiprogram-och-riktlinjer
tags:
  - other
party: socialdemokraterna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-partiprogram-och-riktlinjer.md
sourceDigest: sha256-48e995a407c52d37
derivesFrom: socialdemokraterna-var-politik-partiprogram-och-riktlinjer
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Partiprogram och riktlinjer

Scenario: A reader takes the page at its word
Given the stated spec socialdemokraterna-var-politik-partiprogram-och-riktlinjer
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
