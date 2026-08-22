---
type: spec
id: vansterpartiet-var-politik-politik-a-o-arbetsmarknad-derived
title: "Arbetsmarknadspolitik (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Arbetsmarknadspolitik"
jurisdiction: SE
sources:
  - title: "Arbetsmarknadspolitik"
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/arbetsmarknad/
tags: [energy-power]
party: vansterpartiet
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-arbetsmarknad.md
sourceDigest: "sha256-9fee8fd04ff7bf5f"
derivesFrom: vansterpartiet-var-politik-politik-a-o-arbetsmarknad
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Arbetsmarknadspolitik

Scenario: A reader takes the page at its word
Given the stated spec vansterpartiet-var-politik-politik-a-o-arbetsmarknad
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
