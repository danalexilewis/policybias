---
type: spec
id: labour-medicard
title: "Medicard three free doctor's visits funded by property gains tax"
status: draft
updated: 2026-08-21
summary: Every New Zealander gets three free GP visits a year via Medicard, funded by a 28% tax on post-commencement property gains.
jurisdiction: NZ
sources:
  - title: Free Doctor's Visits with the Medicard
    url: https://www.labour.org.nz/medicard
  - title: Free doctor's visits
    url: https://www.labour.org.nz/media/vtbneplb/labour-free-doctors-visits.pdf
tags:
  - healthcare
  - taxation
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/medicard.md
sourceDigest: "sha256-ec8fadc24803c00f"
gaps:
  - gross CGT revenue is not stated on this page
  - the national GP rate the Independent Pricing Authority would set is not stated
  - Medicard rollout phasing by region is not stated
  - after-hours and ACC exclusion details beyond the headline list are not fully specified
  - the 4.5 million appointments breakdown relies on bundled measures not all unique to Medicard
---

# What the page states

> Every New Zealander gets three free doctor's visits a year through a Medicard card and app at their enrolled practice. The visits are funded by a capital gains tax on investment property sold after 1 July 2027, with the family home exempt. Entitlements track in real time and integrate with existing health identity systems.

System: Medicard three free doctor's visits

Scenario: A New Zealander visits their enrolled general practice
Given one in six New Zealanders cannot afford to visit their doctor
When Medicard is rolled out
Then every New Zealander gets three free doctor's visits a year
Output 3 free doctor's visits a year for every New Zealander
And 28% tax on profit from property sold after 1 July 2027 funds health
And every dollar raised going directly to the health system
And total cost $393.3 million in 2027/28
And $553 million in 2028/29
And around $553 million a year once fully in place
And $548 million from 2030 and outyears
And an estimated 9 in 10 New Zealanders won't pay the tax
Outcome an estimated 4 in 5 New Zealanders won't pay for a routine GP visit from July 2028
Activates labour-capitalgainstax
Activates labour-cervicalscreening
Activates labour-maternityscans
Activates labour-prescriptions
