---
type: spec
id: moderaterna-var-politik-bostadspolitik-derived
title: Bostadspolitik (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Bostadspolitik
jurisdiction: SE
sources:
  - title: Bostadspolitik
    url: https://moderaterna.se/var-politik/bostadspolitik
tags:
  - housing
party: moderaterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-bostadspolitik.md
sourceDigest: sha256-c1c5e6f1d4bbf0f0
derivesFrom: moderaterna-var-politik-bostadspolitik
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Bostadspolitik

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik-bostadspolitik
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
