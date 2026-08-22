---
type: spec
id: act-fair-contribution-derived
title: "Infrastructure surcharge read as a system: incidence on the worker or the wage bill"
status: draft
updated: 2026-08-21
summary: The daily surcharge raises a named revenue stream, but who pays it depends on whether employers absorb the charge or pass it on to temporary workers.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/fair-contribution
tags:
  - immigration
  - infrastructure
party: act
clusters:
  - immigration
money: named-figure
sourcePath: corpus/nz-election-2026/act/fair-contribution.md
derivesFrom: act-fair-contribution
assumptions:
  - a surcharge attached to the visa sits first on the temporary worker unless the employer pays or reimburses it
  - employers who need the worker can pass the charge into wages, prices, or hiring costs; the policy does not settle which
  - the published yearly take is the policy's scale at the stated daily rate, not a spending plan for infrastructure
  - remaining cheaper than Australian and UK visas does not mean the New Zealand worker faces no extra cost
sourceDigest: "sha256-0f6efd430410ae38"
---

# Our understanding

> The surcharge is framed as a fair infrastructure contribution from day one while comparable visas stay cheaper than those in Australia and the United Kingdom. The charge lands on temporary workers unless employers absorb or pass it on through the wage bargain. The daily rate and yearly take are published.

System: Temporary-work visa surcharge as an incidence question

Scenario: A temporary worker carries the surcharge
Given temporary workers can use roads and public services from arrival before paying much New Zealand tax
When the infrastructure surcharge is added on top of existing visa charges
Then the worker faces a higher cost of entry and stay unless someone else pays it
Output $6 per day infrastructure surcharge on temporary work visas
And around $80 million a year expected revenue at that rate
Outcome contribution begins from the first day in the country
But take-home pay or savings can shrink by the daily charge

Scenario: An employer needs the temporary worker
Given employers cannot find every nurse, software engineer or farm worker they need within a working-age population of about three million
When the surcharge sits on the visa the employer sponsors
Then the employer may absorb it, reimburse the worker, or leave the worker to pay
Outcome hiring still happens where the role is hard to fill domestically
But either the worker's take-home pay or the employer's wage bill shrinks to fund the charge

Scenario: Revenue arrives without a spending map
Given around $80 million a year expected at the stated rate
When the surcharge is collected
Then the Crown receives a named stream labelled for infrastructure
Outcome comparable visas are still said to remain cheaper than those in Australia and the United Kingdom
But roads, housing and services gain no guaranteed share until a Budget allocates the revenue
