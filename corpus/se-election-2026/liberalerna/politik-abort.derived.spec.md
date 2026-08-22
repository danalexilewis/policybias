---
type: spec
id: liberalerna-politik-abort-derived
title: Abort (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Abort
jurisdiction: SE
sources:
  - title: Abort
    url: https://www.liberalerna.se/politik/abort
tags:
  - healthcare
party: liberalerna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-abort.md
sourceDigest: sha256-b7e3bcd4f30fb9c6
derivesFrom: liberalerna-politik-abort
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Abort

Scenario: A reader takes the page at its word
Given the stated spec liberalerna-politik-abort
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
