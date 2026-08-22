---
type: spec
id: moderaterna-var-politik-hbtq-derived
title: HBTQ-frågor (reading)
status: draft
updated: 2026-08-22
summary: Our reading of HBTQ-frågor
jurisdiction: SE
sources:
  - title: HBTQ-frågor
    url: https://moderaterna.se/var-politik/hbtq
tags:
  - crime-and-justice
  - immigration
  - social-welfare
party: moderaterna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-hbtq.md
sourceDigest: sha256-32d38e4772a72af0
derivesFrom: moderaterna-var-politik-hbtq
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: HBTQ-frågor

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik-hbtq
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
