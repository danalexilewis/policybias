---
type: spec
id: moderaterna-var-politik-ekonomisk-politik-och-foretagande-derived
title: Ekonomisk politik och företagande (reading)
status: draft
updated: 2026-08-22
summary: Our reading of Ekonomisk politik och företagande
jurisdiction: SE
sources:
  - title: Ekonomisk politik och företagande
    url: https://moderaterna.se/var-politik/ekonomisk-politik-och-foretagande
tags:
  - economy
party: moderaterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-ekonomisk-politik-och-foretagande.md
sourceDigest: sha256-e165259e1005eaf1
derivesFrom: moderaterna-var-politik-ekonomisk-politik-och-foretagande
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Ekonomisk politik och företagande

Scenario: A reader takes the page at its word
Given the stated spec moderaterna-var-politik-ekonomisk-politik-och-foretagande
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
