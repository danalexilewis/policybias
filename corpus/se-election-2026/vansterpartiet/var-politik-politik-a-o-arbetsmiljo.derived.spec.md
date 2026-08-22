---
type: spec
id: vansterpartiet-var-politik-politik-a-o-arbetsmiljo-derived
title: Arbetsmiljö (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Arbetsmiljö
jurisdiction: SE
sources:
  - title: Arbetsmiljö
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/arbetsmiljo
tags:
  - employment
  - education
party: vansterpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-arbetsmiljo.md
sourceDigest: sha256-3af4fb0b007b291f
derivesFrom: vansterpartiet-var-politik-politik-a-o-arbetsmiljo
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetsmiljö

Scenario: A reader takes the page at its word
Given the stated spec vansterpartiet-var-politik-politik-a-o-arbetsmiljo
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
