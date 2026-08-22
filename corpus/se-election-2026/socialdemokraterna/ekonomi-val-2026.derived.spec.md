---
type: spec
id: socialdemokraterna-ekonomi-val-2026-derived
title: "Det är dags att ta Sverige på allvar (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Det är dags att ta Sverige på allvar"
jurisdiction: SE
sources:
  - title: "Det är dags att ta Sverige på allvar"
    url: https://www.socialdemokraterna.se/var-politik/ekonomi---val-2026
tags: [economy-tax]
party: socialdemokraterna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/ekonomi-val-2026.md
sourceDigest: "sha256-69945ea432fcfd74"
derivesFrom: socialdemokraterna-ekonomi-val-2026
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Det är dags att ta Sverige på allvar

Scenario: A reader takes the page at its word
Given the stated spec socialdemokraterna-ekonomi-val-2026
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
