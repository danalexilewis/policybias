---
type: spec
id: vansterpartiet-var-politik-politik-a-o-arbetskraftsinvandring-derived
title: Arbetskraftsinvandring (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Arbetskraftsinvandring
jurisdiction: SE
sources:
  - title: Arbetskraftsinvandring
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/arbetskraftsinvandring
tags:
  - employment
party: vansterpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-arbetskraftsinvandring.md
sourceDigest: sha256-fa11ac4e9f499bb8
derivesFrom: vansterpartiet-var-politik-politik-a-o-arbetskraftsinvandring
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetskraftsinvandring

Scenario: A reader takes the page at its word
Given the stated spec vansterpartiet-var-politik-politik-a-o-arbetskraftsinvandring
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
