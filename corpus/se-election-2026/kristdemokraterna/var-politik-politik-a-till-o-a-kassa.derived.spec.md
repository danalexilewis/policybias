---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-a-kassa-derived
title: A-kassa (reading)
status: draft
updated: 2026-08-22
summary: Our reading of A-kassa
jurisdiction: SE
sources:
  - title: A-kassa
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/a-kassa?open.12_72d9f8c817e8ce3de028d5b=true
tags:
  - economy
party: kristdemokraterna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-a-kassa.md
sourceDigest: sha256-7ec3e86924d393d2
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-a-kassa
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: A-kassa

Scenario: A reader takes the page at its word
Given the stated spec kristdemokraterna-var-politik-politik-a-till-o-a-kassa
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
