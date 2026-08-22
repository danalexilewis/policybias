---
type: spec
id: vansterpartiet-var-politik-derived
title: Vår politik (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Vår politik
jurisdiction: SE
sources:
  - title: Vår politik
    url: https://www.vansterpartiet.se/var-politik
tags:
  - other
party: vansterpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik.md
sourceDigest: sha256-7d24abd94d031153
derivesFrom: vansterpartiet-var-politik
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Vår politik

Scenario: A reader takes the page at its word
Given the stated spec vansterpartiet-var-politik
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
