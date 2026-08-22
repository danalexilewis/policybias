---
type: spec
id: act-paris-derived
title: "Split-gas NDC read as a system: farm methane stays unpriced and warming is a metric choice"
status: draft
updated: 2026-08-21
summary: Permanently excluding agriculture from the ETS means farm methane is never priced there, and No Additional Warming is a measurement choice that can hold stock steady without cutting livestock numbers.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/paris
tags:
  - climate
  - agriculture
party: act
clusters:
  - environment-rural
money: named-figure
sourcePath: corpus/nz-election-2026/act/paris.md
derivesFrom: act-paris
assumptions:
  - a permanent ETS carve-out for agriculture means biogenic methane from farms is not subject to an ETS price signal
  - No Additional Warming for methane is a stock metric: holding warming contribution flat can be met without absolute cuts in livestock emissions
  - treating methane differently from long-lived carbon dioxide in the NDC changes what counts as compliance, not only what farmers do on the ground
  - the policy's efficiency claim does not say global emissions fall when New Zealand expands dairy under a split-gas target
sourceDigest: "sha256-28be68128eedcd59"
---

# Our understanding

> Split-gas targets and an agriculture ETS carve-out leave farm methane unpriced in the ETS. No Additional Warming is a metric choice that can be met by holding methane's warming contribution steady rather than cutting herd emissions. No numeric NDC targets are published.

System: Split-gas climate targets with unpriced farm methane

Scenario: A new Nationally Determined Contribution treats gases differently
Given current climate targets treat methane from livestock the same as carbon from fossil fuels
And New Zealand dairy has a carbon footprint 46% lower than the global average
When an incoming government issues a split-gas Nationally Determined Contribution
Then long-life gases and short-lived methane are scored on different paths
Outcome compliance is judged against separate gas metrics
But neither gas path carries a published numeric target in this material

Scenario: Agriculture is permanently kept out of the Emissions Trading Scheme
Given agriculture is to be permanently kept out of the Emissions Trading Scheme
When farm methane remains outside the scheme
Then no ETS price attaches to livestock methane
Outcome farmers face no ETS cost for biogenic methane
But the incentive to cut herd emissions through that price is absent

Scenario: Biogenic methane is managed under No Additional Warming
Given biogenic methane is to be managed under a No Additional Warming approach
When methane's warming contribution is held flat rather than cut in absolute tonnes
Then the metric can be met without shrinking livestock output
Outcome long-lived gases continue on a path to lowering emissions while methane is held to no extra warming
But absolute livestock methane need not fall for the metric to be met
