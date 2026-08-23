---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset
title: Sweden prices, an electricity-price cap and a tax on network excess profits
status: draft
updated: 2026-08-23
summary: Swedish consumers are to be decoupled from expensive foreign electricity through a fifth price area, households get a cap of 75 öre per kilowatt-hour covering most of the cost above it, and the network companies' excess profits are taxed.
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
sourceDigest: sha256-311b30b8c1e99221
gaps:
  - how a fifth price area for export is approved against the EU's electricity-market rules is not stated
  - how large the electricity-price insurance fee on the industry becomes is not stated
  - how the tax on network excess profits defines excess profit is not stated
  - how much the national grid is to cost, and who pays until it is built, is not stated
translationOf: vansterpartiet-var-politik-politik-a-o-elpriset
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-672f7805399fd70d
lang: en
---

# What the page states

> The electricity price is set by the last, expensive fossil electricity even when Swedish fossil-free production almost always suffices. Sweden prices through a separate export price in a fifth price area are to protect households. A high-cost shield for households complements this, funded by a compulsory insurance fee on the electricity industry rather than by taxpayers. Network charges have more than doubled over the past ten years; excess profits are to be taxed and national-grid expansion is to take place in public hands, with particular support for onshore wind power.

System: Sweden prices, a household cap and a network tax

Scenario: Exports are priced in a separate area
Given the price today is set by what it costs to produce the last electricity bought
And Sweden produces cheap fossil-free electricity that almost always covers its own needs
When Swedish electricity prices are decoupled from expensive foreign electricity
Then the electricity that is exported is priced separately in a fifth price area
Outcome households and firms meet lower and more stable prices from cheap energy sources
And the climate transition goes faster when domestic renewable electricity is not priced as fossil imports

Scenario: Households get a high-cost shield when the spot price runs away
Given the proposed state electricity-price cap of one and a half kronor per kilowatt-hour is reached more or less never, even when it is coldest
And during the crisis year 2022 it happened only a few months
When the high-cost shield for households is introduced
Then the household's electricity costs are covered to a large extent above the price cap, with a remaining incentive to save electricity
Output 75 öre per kWh as an electricity-price cap for households
And 90% of the household's electricity costs above the price cap
Outcome the industry bears the cost through a compulsory electricity-price insurance fee, not the taxpayers

Scenario: The network companies' excess profits are taxed and the national grid is built out in public hands
Given raised network charges go to profit for private actors instead of a better grid
And the differences in price are large between different parts of the country since deregulation in the 1990s
And there is a shortage of capacity in several places when north–south transfer fails
When a tax on the network companies' excess profits is introduced
Then unreasonable charge rises are countered and tax revenue goes back to households
And the national grid is built out in public hands so that households and firms do not bear the cost through raised charges
Outcome local renewable electricity, especially onshore wind power, is built faster with smaller grid losses
Activates vansterpartiet-var-politik-politik-a-o-klimat
