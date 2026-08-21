---
type: spec
id: labour-cervicalscreening
title: "Free cervical screening through Medicard"
status: draft
updated: 2026-08-21
summary: Cervical screening free for everyone aged 25 to 69 from 1 October 2027, loaded onto the Medicard.
jurisdiction: NZ
sources:
  - title: Free Cervical Screening
    url: https://www.labour.org.nz/cervicalscreening
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/cervicalscreening.md
sourceDigest: "sha256-f08cc403527757e8"
gaps:
  - which screening modalities are covered beyond doctor and community events is not stated
  - funding beyond the first full year is not stated
  - how eligibility is verified at community screening events is not stated
  - the 85 percent never-screened statistic is context only; screening uptake targets are not stated
---

# What the page states

> Cervical screening becomes free for everyone aged 25 to 69 from 1 October 2027. Eligibility loads automatically onto the Medicard and can be used at a doctor or community screening event. Free screening sits alongside three free doctor's visits a year.

System: Free cervical screening through Medicard

Scenario: A person aged 25 to 69 seeks cervical screening
Given cervical screening is not universally free today
When free cervical screening begins from 1 October 2027
Then cervical screening is free for everyone aged 25 to 69
Output $21.6 million cost for the first full year
Outcome eligibility automatically loaded onto the Medicard
Activates labour-medicard
