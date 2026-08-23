---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset-derived
title: "Sverigepriser read as a system: splitting the export price does not split the wires"
status: draft
updated: 2026-08-23
summary: A fifth zone can reprice exports on paper while electrons still follow the interconnectors; the 75-öre cap then socialises spikes inside Sweden through a levy on the industry.
jurisdiction: SE
sources:
  - title: Elpriset
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/elpriset
tags:
  - energy
  - economy
party: vansterpartiet
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-elpriset.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-elpriset
assumptions:
  - physical flows on interconnectors continue even if export is billed in a fifth zone; EU market rules may constrain the split
  - a cap at 75 öre with 90 percent cover above it leaves households paying one tenth of the spike plus the insurance levy once firms pass it through
  - an industry levy is not free; it can sit in future retail tariffs or in delayed investment
  - a tax on grid excess profit needs a definition of excess; too tight a tax can slow the same grid build the policy wants in public hands
sourceDigest: sha256-311b30b8c1e99221
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-elpriset-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-228c36ea8b949dbd
---

# Our understanding

> Sverigepriser is a billing split, not a new cable. Cheap Swedish generation still meets foreign demand on the wires. When the spot still spikes, the 75-öre household cap pays most of the overshoot from an industry levy — a cost that can return in the tariff. Grid excess-profit tax and public trunk-grid spend pull in opposite directions if the tax starves the builders.

System: Price split, cap, and levy as one bill

Scenario: Exports are repriced while the interconnectors stay open
Given Swedish fossil-free power usually covers domestic need
And the last bid on the market is often expensive foreign or fossil power
When a fifth zone bills exports separately
Then Swedish retail can be told a lower price
Outcome households see a Sweden price
But physical export can still tighten the domestic balance on a cold day

Scenario: The household cap meets a spike
Given the cap is 75 öre per kilowatt-hour and covers 90 percent of the cost above it
When the spot runs far above the cap
Then the household still pays the cap plus the uncovered tenth
# extrapolated: 10 percent of the overshoot remains with the household if 90 percent is covered
Output 10 percent of the bill above the cap stays with the household
Outcome the industry levy is supposed to fund the rest
But a future tariff can carry that levy back to the same household
Activates vansterpartiet-var-politik-politik-a-o-klimat
