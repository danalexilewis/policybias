---
type: spec
id: opportunity-climate-action-derived
title: "Climate Action read as a system: farm emissions priced without a stated instrument"
status: draft
updated: 2026-08-18
summary: Putting agriculture in the ETS is a large incidence choice — processor levy versus on-farm — that the policy never makes; excluding pine offsets raises the carbon price for everyone else.
jurisdiction: NZ
sources:
  - title: Climate Action
    url: https://www.opportunity.org.nz/climate_action
tags:
  - climate
  - environment
party: opportunity
clusters:
  - environment-rural
money: no-figure
sourcePath: corpus/nz-election-2026/opportunity/climate_action.md
derivesFrom: opportunity-climate-action
assumptions:
  - a mechanism for agricultural emissions could be a processor levy, on-farm reporting, or a separate price; incidence differs and the policy does not choose
  - excluding new exotic forestry removes a cheap offset, which raises the ETS price for other emitters unless units are added elsewhere
  - nature-based local-government work needs a funding path; "support" without a dollar is a holding pattern
sourceDigest: "sha256-2c16328343a90b5f"
---

# Our understanding

> Agricultural emissions enter the ETS. New pine offsets are excluded. The Commission sets budgets. Farms still need an instrument that puts a price on methane, and closing pine offsets tightens the carbon market for everyone else.

System: Farm emissions priced without a stated instrument

Scenario: Agriculture enters the ETS
Given a scheme that today largely leaves biological farm emissions out
When a mechanism for agricultural emissions is added
Then someone in the food chain pays
Outcome someone in the food chain pays the farm-emissions price
But processors, farmers or shoppers carry whichever instrument Parliament chooses, and without phase-in the first years can be a cliff
Activates opportunity-healthy-land

Scenario: New pine offsets are excluded
When new exotic forestry is kept out of the scheme
Then a cheap source of units is closed
Outcome soil and wetland projects are the named substitute
But those projects are slower and smaller than pines, so other emitters face a tighter market
Activates opportunity-healthy-oceans
