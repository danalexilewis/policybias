---
type: spec
id: vansterpartiet-var-politik-politik-a-o-abort-derived
title: Abort (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Abort
jurisdiction: SE
sources:
  - title: Abort
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/abort
tags:
  - healthcare
party: vansterpartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-abort.md
sourceDigest: sha256-a74649dd054bf626
derivesFrom: vansterpartiet-var-politik-politik-a-o-abort
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Abort

Scenario: A reader takes the page at its word
Given the stated spec vansterpartiet-var-politik-politik-a-o-abort
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
