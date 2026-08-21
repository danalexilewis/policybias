---
type: spec
id: opportunity-intergenerational-infrastructure
title: "30-year plan in law, 60% of spend on maintenance, $60 billion Infrastructure Fund"
status: draft
updated: 2026-08-18
summary: Put the 30-year National Infrastructure Plan into law, send 60% of future infrastructure spend to maintenance, and raise up to $60 billion over ten years through an Infrastructure Fund.
jurisdiction: NZ
sources:
  - title: Intergenerational Infrastructure
    url: https://www.opportunity.org.nz/intergenerational_infrastructure
  - title: Intergenerational infrastructure policy
    url: https://cdn.opportunity.org.nz/documents/policy/intergenerational-infrastructure.pdf
tags:
  - infrastructure
party: opportunity
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/opportunity/intergenerational_infrastructure.md
sourceDigest: "sha256-0fbcde7d08fa59fd"
gaps:
  - which projects the $60 billion funds, and in what order, is not listed on the HTML page
  - how 60% maintenance is measured (capital vs operating, new vs existing) is not defined
  - congestion charge, visitor levy and value-capture rates are not stated
  - how KiwiSaver funds are induced to buy the bonds is not stated
  - free public transport's fare-box and mode-shift assumptions behind the $150 million net cost are not on the HTML page
---

# What the page states

> A hospital lasting fifty years against a three-year government, the 30-year National Infrastructure Plan, all 16 of Te Waihanga's recommendations accepted, cancelling projects over $250 million only by public Bill, scorecards at 100 days, 12 months and three years, 12 of 31 agencies unable to list their assets, 60% of future infrastructure spend on maintenance and renewal, public debt around 51% of GDP against an OECD 112%, up to $60 billion over ten years with interest under 1% of GDP, about $167 million a year operating ($27 million for Te Waihanga, $150 million net for free public transport) are on the source page. Calendar months of the Plan's publication sit in the note, not in the steps.

System: Intergenerational infrastructure

Scenario: The 30-year plan is locked and maintained
Given fifty-year assets run on three-year political cycles
And 12 of 31 government agencies unable to list the assets they own
And public debt around 51% of GDP against an OECD average of 112%
When the 30-year National Infrastructure Plan is put into law
Then Te Waihanga oversees planning, funding and delivery
And cancelling a major project needs a public Bill through Parliament
And progress scorecards are published at 100 days, 12 months and three years
And every public asset has a register, a care plan and a named executive
Output cancelling a major project over $250 million needs a public Bill through Parliament
And 60% of future infrastructure spend on maintenance and renewal
And up to $60 billion raised over ten years through an Infrastructure Fund
And interest costs under 1% of GDP
And about $167 million a year of operating spend
And $27 million a year to enhance Te Waihanga
And $150 million a year net for free public transport
Outcome the next generation inherits assets in better condition
And councils get grants, congestion charges, visitor levies and value capture so rates do not carry the whole load
Activates opportunity-citizens-voice
