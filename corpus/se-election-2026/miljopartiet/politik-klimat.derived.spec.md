---
type: spec
id: miljopartiet-politik-klimat-derived
title: "Klimatkrisen kräver kraftfull klimatpolitik (reading)"
status: draft
updated: 2026-08-22
summary: "Our reading of Klimatkrisen kräver kraftfull klimatpolitik"
jurisdiction: SE
sources:
  - title: "Klimatkrisen kräver kraftfull klimatpolitik"
    url: https://www.mp.se/politik/klimat/
tags: [climate-environment]
party: miljopartiet
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-klimat.md
sourceDigest: "sha256-9bfbc38dc6c8460a"
derivesFrom: miljopartiet-politik-klimat
assumptions:
  - the page is the 2026 campaign position unless it says otherwise
---

# Our understanding

> The party states a direction. Figures that are not on the page are not invented here.

System: Klimatkrisen kräver kraftfull klimatpolitik

Scenario: A reader takes the page at its word
Given the stated spec miljopartiet-politik-klimat
When the policy is read as a system
Then the intervention is what the page names
Output no figure is added that the page does not print
Outcome the derived face does not blend with the stated face
