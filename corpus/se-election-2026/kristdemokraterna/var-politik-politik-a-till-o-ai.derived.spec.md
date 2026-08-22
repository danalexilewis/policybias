---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-ai-derived
title: "AI (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of AI"
jurisdiction: SE
sources:
  - title: "AI"
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/ai
tags: [migration-integration]
party: kristdemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-ai.md
sourceDigest: "sha256-aa90ed4dc090e464"
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-ai
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: AI

Scenario: A reader takes the page at its word
Given the stated spec kristdemokraterna-var-politik-politik-a-till-o-ai
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
