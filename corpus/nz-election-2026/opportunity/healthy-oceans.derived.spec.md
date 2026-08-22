---
type: spec
id: opportunity-healthy-oceans-derived
title: "Healthy Oceans read as a system: a 14% catch cut that still hits the settlement"
status: draft
updated: 2026-08-18
summary: Protecting 86% of threatened species with a 14% catch cut still reduces quota value, including Māori settlement quota; 30% reserves by 2035 is a spatial closure whose first sites are unlisted.
jurisdiction: NZ
sources:
  - title: Oceans
    url: https://www.opportunity.org.nz/healthy-oceans
  - title: Oceans policy
    url: https://cdn.opportunity.org.nz/documents/policy/oceans-policy.pdf
tags:
  - environment
party: opportunity
clusters:
  - environment-rural
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/healthy-oceans.md
derivesFrom: opportunity-healthy-oceans
assumptions:
  - a 14% catch cut reduces the value of quota, including settlement quota; "supporting the transition" is not the same as holding quota value constant
  - 30% marine reserves by 2035 requires picking places; recreational and customary fishers near those places lose access even if catch elsewhere rises
  - $100 million a year of Crown cost plus industry cost-recovery still leaves who pays for cameras and vessel changes unallocated
sourceDigest: "sha256-aeee33902a089ae3"
---

# Our understanding

> Thirty percent marine reserves by 2035, a 14% catch cut to protect 86% of threatened species, 60% of quota in three companies, with Māori commercial fishing affected — but settlement quota is not held whole and the first closures are unlisted.

System: A catch cut that still hits the settlement

Scenario: Quota is cut to lift biomass
Given three companies holding 60% of quota and a significant Māori commercial interest
When the catch is reduced by 14% and the baseline rises from 40% to 50% of virgin biomass
Then quota owners, including settlement holders, take a smaller authorised catch
Outcome the policy says large companies carry much of the adjustment
But a smaller operator, or an iwi whose settlement is quota, can still lose income the transition fund does not automatically replace
Activates opportunity-honouring-te-tiriti

Scenario: Thirty percent of the sea is reserved
Given 0.5% in reserve today and a 30% target by 2035
When the first large closures are gazetted
Then fishing stops in those waters
Outcome spillover may improve catch next door, which is the policy's recreational claim
But the first communities next to a new reserve lose access before that spillover is proven
