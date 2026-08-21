---
type: spec
id: act-welfare
title: "Mandatory designated-doctor benefit assessments and electronic money management"
status: draft
updated: 2026-08-18
summary: Require MSD-approved designated doctors for health and disability benefits with phased reassessment, and mandatory electronic payment cards for Jobseeker recipients after four months blocking alcohol, gambling and tobacco spend.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/welfare
tags:
  - social-welfare
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/welfare.md
sourceDigest: "sha256-f85cf88a49d77c09"
gaps:
  - what the clear objective criteria for benefit assessments are is not stated
  - how the designated-doctor pool is resourced is not stated
  - electronic card carve-outs and modified arrangements are not specified
  - phasing timetable for reassessment is not stated
  - cost of mandatory money management is not stated
---

# What the page states

> Mandatory designated-doctor assessments, objective criteria, phased reassessment starting with post-pandemic mental-health grants, long-term arrangements for genuine disability, mandatory electronic money management after four months on Jobseeker, and blocked spending categories are all on the source page. No dollar figures or detailed criteria appear.

System: Welfare certification and electronic money management

Scenario: Health-related benefits and long-term Jobseeker support are tightened
Given a designated-doctor option already exists but is not mandatory
And New Zealand already has money management as an option in certain circumstances
When designated-doctor assessments become mandatory for health-related benefits and managed assistance is introduced for long-term Jobseeker recipients
Then all health and disability benefits are independently issued by an MSD-approved pool of designated doctors while a person's usual GP or specialist may still provide medical history and evidence
Output assessments made against clear objective criteria rather than discretion alone
And existing Jobseeker Support Health Condition or Disability and Supported Living Payment recipients reassessed on a phased basis beginning with mental-health-related grants made after the pandemic
And long-term arrangements allowed for those with a genuine enduring disability or health condition
Outcome Jobseeker Support Work Ready recipients on a benefit for more than four months receive their benefit through an electronic payment card directed to essentials such as groceries, rent, power, transport, health and childcare
And the card blocks spending on alcohol, gambling, tobacco and cash withdrawals with carve-outs where money management would risk safety or block access to necessities
