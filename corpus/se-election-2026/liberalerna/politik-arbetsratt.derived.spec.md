---
type: spec
id: liberalerna-politik-arbetsratt-derived
title: Arbetsrätt (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Arbetsrätt
jurisdiction: SE
sources:
  - title: Arbetsrätt
    url: https://www.liberalerna.se/politik/arbetsratt
tags:
  - employment
party: liberalerna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-arbetsratt.md
sourceDigest: sha256-38160585232fb309
derivesFrom: liberalerna-politik-arbetsratt
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetsrätt

Scenario: A reader takes the page at its word
Given the stated spec liberalerna-politik-arbetsratt
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
