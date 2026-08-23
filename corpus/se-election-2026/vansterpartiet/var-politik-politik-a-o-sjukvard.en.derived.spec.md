---
type: spec
id: vansterpartiet-var-politik-politik-a-o-sjukvard-derived
title: "Need-based care read as a system: a profit screen without a bed or staff count"
status: draft
updated: 2026-08-23
summary: Barring profit-seeking firms from core care shifts residual demand onto remaining providers that the policy already says are short of beds.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/sjukvard
tags:
  - healthcare
party: vansterpartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-sjukvard.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-sjukvard
assumptions:
  - a ban on profit in core care does not by itself create beds or staff; remaining public and non-profit capacity absorbs the displaced caseload
  - more money instead of tax cuts for high earners is an open-ended claim until a kronor figure or a bed target is named
  - outreach in deprived areas and thin regions both compete for the same scarce staff the policy wants to retain
  - private insurance queues shrink only if the public offer becomes as fast; the policy states the priority rule, not the wait
sourceDigest: sha256-305070f2abf28851
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-sjukvard-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-3ad9aa7489dad8bb
---

# Our understanding

> A profit screen changes who is allowed to treat, not how many people can be treated. The policy already says Sweden sits at the bottom of the EU for beds, so shutting profit-seeking firms out of core care loads remaining wards unless staff and places are added in numbers the policy never names.

System: Need-based care as a capacity claim without a headcount

Scenario: Profit-seeking providers leave core care while beds stay scarce
Given profit-seeking firms currently treat the most profitable patients
And hospital bed numbers already sit at the bottom of the EU
When those firms are barred from core care funded by tax
Then residual patients move to remaining public and non-profit providers
Outcome queues and occupancy land on the wards that already lack places
But patients who were profitable to treat wait with everyone else, without a stated extra bed

Scenario: Outreach and sparse regions bid for the same staff
Given every clinic is to offer mental-health support
And outreach health checks are to reach women with short education in deprived areas
And sparsely populated regions already face especially high costs
When those three asks arrive together
Then the same scarce clinicians are wanted in clinics, on outreach, and in thin regions
Outcome "better working conditions" must do the work of a staffing plan that is not written
But a patient in a thin region still has no stated extra place or extra colleague
Activates vansterpartiet-var-politik-politik-a-o-aldreomsorg
