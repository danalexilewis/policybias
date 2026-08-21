---
type: spec
id: act-rural-visa-derived
title: "Rural Workforce Visa read as a system: certainty bought with limited mobility"
status: draft
updated: 2026-08-21
summary: Three-year terms and residence after seventy-two months give farm employers a stable pipeline, while tying workers to accredited rural employers limits where they can move.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/rural-visa
tags:
  - immigration
  - agriculture
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/rural-visa.md
derivesFrom: act-rural-visa
assumptions:
  - attachment to accredited rural employers, not a map line, still limits mobility: transfer is only among accredited rural employers, not into non-rural work
  - a three-year term without mid-term renewal shifts bargaining power toward employers who control accreditation and reissue
  - residence after seventy-two cumulative months rewards staying in the tied rural channel; leaving that channel resets or blocks the pathway
  - levy exemption for this visa removes the fair-contribution charge from this pathway while other temporary visas still face it
sourceDigest: "sha256-f9872f1407506d8e"
---

# Our understanding

> The policy frames the Rural Workforce Visa as cutting bureaucracy and avoiding geographic borders. The tie: workers may move between accredited rural employers, but not into non-rural sectors, so mobility is limited by accreditation rather than a regional fence. Certainty for farms and a residence clock after seventy-two months are published; the mobility trade-off is not.

System: Rural Workforce Visa as tied labour with a residence clock

Scenario: An accredited rural employer fills a year-round role
Given New Zealand's farms, orchards and fishing fleets generate $60 billion in exports every year
And seasonal pathways do not cover year-round farm roles
When the Rural Workforce Visa is issued for dairy, sheep and beef, or general farm work
Then the employer gets a multi-year worker without annual renewal inside the term
Output an initial three-year term with no renewal required within that period
And before the visa term ends employers readvertise and if no suitable New Zealander is available the visa is reissued for a further three years
Outcome year-round rural roles can be filled with less visa churn
But the worker's status remains tied to accredited rural employment

Scenario: A visa holder wants to leave rural work
Given the visa is attached to accredited rural employers rather than a region
And workers may transfer to any other accredited rural employer without a new application
When the worker seeks a job outside rural sectors
Then the visa does not allow that move
Output workers may transfer to any other accredited rural employer without a new application but cannot move to non-rural sectors
Outcome rural communities receive workers as a market outcome of that tie
But the worker's bargaining options stop at the accredited rural boundary

Scenario: The residence clock runs
Given a new agricultural stream on the Work to Residence Visa
When a worker has held an RWV for 72 cumulative months with an accredited employer and meets standard requirements
Then residence eligibility opens
Output 72 cumulative months with an accredited employer as the residence threshold
Outcome sustained rural service is rewarded with a pathway to stay
But time spent outside the tied channel does not advance that clock
