---
type: spec
id: labour-maternityscans
title: "Free maternity scans through Medicard"
status: draft
updated: 2026-08-18
summary: Every referred maternity scan free nationwide from July 2028, funded by capital gains tax revenue ring-fenced to health.
jurisdiction: NZ
sources:
  - title: Free Maternity Scans With the Medicard
    url: https://www.labour.org.nz/maternityscans
tags:
  - healthcare
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/maternityscans.md
sourceDigest: "sha256-66cd32358a546bf3"
gaps:
  - which scan types beyond referred maternity scans are covered is not fully listed
  - sonographer trainee placement regions and completion timelines are not stated
  - current regional free-scan boundaries beyond named regions are not mapped
  - interaction with private maternity providers is not stated
---

# What the page states

> July 2028 start, up to $90 current scan cost, $28.6 million annual cost, 24 trainee sonographer positions at less than $3 million a year, Medicard referral flow, and CGT funding link are on the page.

System: Free maternity scans through Medicard

Scenario: A pregnant woman receives a referred maternity scan
Given maternity scans cost up to $90 each
And scans free only in some regions today
When maternity scans become free from July 2028
Then every referred maternity scan is free everywhere in New Zealand
Output $28.6 million a year cost
And 24 paid trainee sonographer positions funded at less than $3 million a year
Outcome entitlement loaded automatically onto the Medicard after referral
Activates labour-medicard
Activates labour-capitalgainstax
