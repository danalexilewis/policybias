---
type: spec
id: liberalerna-politik-alkohol-derived
title: Alkohol (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Alkohol
jurisdiction: SE
sources:
  - title: Alkohol
    url: https://www.liberalerna.se/politik/alkohol
tags:
  - healthcare
party: liberalerna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-alkohol.md
sourceDigest: sha256-f45ff3879115bb03
derivesFrom: liberalerna-politik-alkohol
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Alkohol

Scenario: A reader takes the page at its word
Given the stated spec liberalerna-politik-alkohol
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
