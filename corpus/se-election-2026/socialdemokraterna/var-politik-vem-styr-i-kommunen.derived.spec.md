---
type: spec
id: socialdemokraterna-var-politik-vem-styr-i-kommunen-derived
title: "Vem styr i kommunen (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Vem styr i kommunen"
jurisdiction: SE
sources:
  - title: "Vem styr i kommunen"
    url: https://www.socialdemokraterna.se/var-politik/vem-styr-i-kommunen
tags: [energy-power]
party: socialdemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-vem-styr-i-kommunen.md
sourceDigest: "sha256-986173c23bc879c9"
derivesFrom: socialdemokraterna-var-politik-vem-styr-i-kommunen
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Vem styr i kommunen

Scenario: A reader takes the page at its word
Given the stated spec socialdemokraterna-var-politik-vem-styr-i-kommunen
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
