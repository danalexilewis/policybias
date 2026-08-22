---
type: spec
id: labour-maternityscans-derived
title: "Free maternity scans read as a system: a national entitlement constrained by the sonographer pipeline"
status: draft
updated: 2026-08-21
summary: Today's $90 regional lottery becomes a nationwide free entitlement, but delivery capacity turns on 24 trainee sonographers, and funding sits on capital gains ring-fence timing.
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
derivesFrom: labour-maternityscans
assumptions:
  - ending the regional free-scan lottery creates a standing national entitlement once free scans begin; the policy does not make it contingent on that year's capital gains receipts
  - 24 paid trainee sonographer positions are the only workforce expansion the policy names, so capacity is the binding constraint if demand rises when cost falls to zero
  - funding from a capital gains tax ring-fenced to health means receipts follow property realisations while the entitlement calendar does not
sourceDigest: "sha256-66cd32358a546bf3"
---

# Our understanding

> Today's regional lottery on maternity scan fees becomes a nationwide free entitlement, but delivery turns on twenty-four paid trainee sonographers as the only named workforce expansion. Funding sits on capital gains ring-fenced to health, so receipts follow property sales while the entitlement calendar does not.

System: Free maternity scans as a national entitlement on a thin workforce path

Scenario: The regional lottery ends and a national entitlement begins
Given maternity scans cost up to $90 each
And scans free only in some regions today
When free scans begin nationwide
Then every referred maternity scan is free everywhere
Output $28.6 million a year cost
Outcome place of residence no longer decides whether the scan is free
But the entitlement calendar starts after the funding tax has already begun
Activates labour-medicard

Scenario: Demand meets a fixed trainee pipeline
Given 24 paid trainee sonographer positions funded
When referred scan demand rises because cost falls to zero
Then workforce growth is capped at that trainee intake in the policy
Output less than $3 million a year for the trainee positions
Outcome capacity, not the Medicard load, is the binding constraint
But regions with slow trainee completion still leave pregnant people waiting for a slot

Scenario: Ring-fenced capital gains fund the entitlement
Given free maternity scans funded by a capital gains tax ring-fenced to health
When property realisations fall while the free-scan entitlement stands
Then the annual cost still stands as printed
Output $28.6 million a year cost
Outcome the entitlement is not written as contingent on that year's sales
But timing risk sits with the Crown and with patients waiting for a scan slot
Activates labour-medicard
