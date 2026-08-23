---
type: spec
id: moderaterna-var-politik-karnkraft-2-derived
title: "New nuclear power read as a system: doubling to 2045 without a date for ground-breaking"
status: draft
updated: 2026-08-23
summary: Doubling to 2045 is a physical requirement without a timetable for ground-breaking, and the electricity market reform shifts revenue to dispatchable production that does not yet exist.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://moderaterna.se/var-politik/karnkraft-2
tags:
  - energy
derivesFrom: moderaterna-var-politik-karnkraft-2
party: moderaterna
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-karnkraft-2.md
sourceDigest: "sha256-37aa13211a357b27"
assumptions:
  - doubling to 2045 requires construction time that the policy does not set a date for
  - an electricity market reform that rewards availability favours nuclear power only when the reactors exist
  - SMR and large reactors have different construction time and cost, which the policy does not split out
lang: en
translationOf: moderaterna-var-politik-karnkraft-2-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-40cd373f9e585686
---

# Our understanding

> Doubling to 2045 is a physical requirement without a date for ground-breaking. The electricity market reform shifts revenue to dispatchable production that does not yet produce.

System: Doubling without construction time and electricity market before reactors

Scenario: Electricity production is to double before the reactors exist
Given the energy target is 100 percent fossil-free electricity production
When electricity production is to double by 2045
Then electrification and net zero require more dispatchable power
Output electricity production doubles by 2045
Outcome the gap between today and 2045 is borne by wind, imports or delayed electrification if construction lags
But households and industry bear higher prices until dispatchable capacity exists

Scenario: The electricity market rewards availability without new reactors
When stability, capacity and supply security should be rewarded ahead of produced kilowatt-hours alone
Then dispatchable production should receive more payment
Outcome revenue shifts towards power sources that have not yet delivered
But weather-dependent production bears volatility until baseload exists
