---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-andts-derived
title: ANDTS (reading)
status: draft
updated: 2026-08-22
summary: Our reading of ANDTS
jurisdiction: SE
sources:
  - title: ANDTS
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/andts?open.12_72d9f8c817e8ce3de028d5b=true
tags:
  - crime-and-justice
party: kristdemokraterna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-andts.md
sourceDigest: sha256-d69b28e6f3bbf452
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-andts
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: ANDTS

Scenario: A reader takes the page at its word
Given the stated spec kristdemokraterna-var-politik-politik-a-till-o-andts
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
