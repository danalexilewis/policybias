---
type: spec
id: liberalerna-politik-anpassad-skola-derived
title: "Anpassad skola (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Anpassad skola"
jurisdiction: SE
sources:
  - title: "Anpassad skola"
    url: https://www.liberalerna.se/politik/anpassad-skola
tags: [defence-security]
party: liberalerna
clusters:
  - defence-security
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-anpassad-skola.md
sourceDigest: "sha256-ad3c944ec25c2335"
derivesFrom: liberalerna-politik-anpassad-skola
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Anpassad skola

Scenario: A reader takes the page at its word
Given the stated spec liberalerna-politik-anpassad-skola
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
