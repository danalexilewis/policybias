---
type: spec
id: labour-medicard
title: "Medicard three free doctor's visits funded by property gains tax"
status: draft
updated: 2026-08-18
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

> Three free visits, Medicard card and app, 28% CGT from 1 July 2027, exemption list, 9 in 10 won't pay, 4 in 5 won't pay for routine GP from July 2028, cost ramp ($393.3 million in 2027/28 to around $553 million), and 4.5 million appointments claim are on the page.

System: Medicard three free doctor's visits

Scenario: A New Zealander visits their enrolled general practice
Given one in six New Zealanders cannot afford to visit their doctor
When Medicard is rolled out
Then every New Zealander gets three free doctor's visits a year
Output 3 free doctor's visits a year for every New Zealander
And 28% tax on profit from property sold after 1 July 2027 funds health
And 100% of revenue ring-fenced to health
And total cost $393.3 million in 2027/28
And around $553 million a year once fully in place
And an estimated 9 in 10 New Zealanders won't pay the tax
Outcome an estimated 4 in 5 New Zealanders won't pay for a routine GP visit from July 2028
Activates labour-capitalgainstax
Activates labour-cervicalscreening
Activates labour-maternityscans
Activates labour-prescriptions
