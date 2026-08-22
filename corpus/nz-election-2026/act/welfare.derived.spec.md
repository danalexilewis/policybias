---
type: spec
id: act-welfare-derived
title: "Welfare reform read as a system: certification gate and spend control"
status: draft
updated: 2026-08-21
summary: Designated doctors gate health-related benefits, and mandatory payment cards after four months turn Jobseeker support into controlled spending on named essentials.
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
derivesFrom: act-welfare
assumptions:
  - moving from optional to mandatory designated doctors shifts certification power from the person's usual clinician to an MSD-approved pool
  - objective criteria reduce discretion, but the policy does not publish those criteria, so the gate's hardness is unknown
  - electronic money management after four months is control of spend: the card decides what the benefit can buy
  - blocking alcohol, gambling, tobacco and cash withdrawals is the published mechanism of that control; carve-outs are the stated safety valve
sourceDigest: "sha256-f85cf88a49d77c09"
---

# Our understanding

> Designated doctors and payment cards are two control points: who certifies health-related benefits, and what long-term Jobseeker money can buy. Making optional tools mandatory is the contrast; electronic money management is spend control.

System: Welfare as certification gate and spend control

Scenario: Health and disability benefits go through designated doctors
Given a designated-doctor option already exists but is not mandatory
When assessments become mandatory through an MSD-approved pool
Then the person's usual GP or specialist may still supply history and evidence, but the independent designated doctor issues the benefit decision
Output assessments made against clear objective criteria rather than discretion alone
And existing Jobseeker Support Health Condition or Disability and Supported Living Payment recipients reassessed on a phased basis beginning with mental-health-related grants made after the pandemic
Outcome long-term arrangements can remain for genuine enduring disability or health conditions
But access to health-related benefits now turns on the designated-doctor gate

Scenario: A Jobseeker Support Work Ready recipient passes four months
Given New Zealand already has money management as an option in certain circumstances
When the recipient remains on a benefit for more than four months
Then the benefit is delivered through an electronic payment card directed to essentials
Outcome groceries, rent, power, transport, health and childcare remain reachable on the card
But alcohol, gambling, tobacco and cash withdrawals are blocked, so the benefit no longer functions as unrestricted cash

Scenario: Money management meets a safety or necessity risk
Given carve-outs and modified arrangements where money management would risk safety or block access to necessities
When a standard card rule would cause that harm
Then a modified arrangement can apply
Outcome the control regime has a stated safety valve
But the default after four months is still electronic control of spend, not open cash
