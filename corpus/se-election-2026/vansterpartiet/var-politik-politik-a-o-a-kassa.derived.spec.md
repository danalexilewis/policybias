---
type: spec
id: vansterpartiet-var-politik-politik-a-o-a-kassa-derived
title: "A-kassa (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of A-kassa"
jurisdiction: SE
sources:
  - title: "A-kassa"
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/a-kassa/
tags: [crime-justice]
party: vansterpartiet
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-a-kassa.md
sourceDigest: "sha256-28dddd01540dd0b5"
derivesFrom: vansterpartiet-var-politik-politik-a-o-a-kassa
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: A-kassa

Scenario: A reader takes the page at its word
Given the stated spec vansterpartiet-var-politik-politik-a-o-a-kassa
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
