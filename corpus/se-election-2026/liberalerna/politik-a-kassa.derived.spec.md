---
type: spec
id: liberalerna-politik-a-kassa-derived
title: A-kassa (reading)
status: draft
updated: 2026-08-22
summary: Our reading of A-kassa
jurisdiction: SE
sources:
  - title: A-kassa
    url: https://www.liberalerna.se/politik/a-kassa
tags:
  - employment
  - social-welfare
  - economy
party: liberalerna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-a-kassa.md
sourceDigest: sha256-d238c15e4b34d32e
derivesFrom: liberalerna-politik-a-kassa
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: A-kassa

Scenario: A reader takes the page at its word
Given the stated spec liberalerna-politik-a-kassa
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
