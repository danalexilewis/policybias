---
type: spec
id: socialdemokraterna-var-politik-skolarbete-derived
title: Skolarbete (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Skolarbete
jurisdiction: SE
sources:
  - title: Skolarbete
    url: https://www.socialdemokraterna.se/var-politik/skolarbete
tags:
  - education
party: socialdemokraterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-skolarbete.md
sourceDigest: sha256-53eeefb6764d322f
derivesFrom: socialdemokraterna-var-politik-skolarbete
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Skolarbete

Scenario: A reader takes the page at its word
Given the stated spec socialdemokraterna-var-politik-skolarbete
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
