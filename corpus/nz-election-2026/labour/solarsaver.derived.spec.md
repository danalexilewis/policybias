---
type: spec
id: labour-solarsaver-derived
title: "SolarSaver read as a system: financed systems raise household debt and Crown underwrite risk"
status: draft
updated: 2026-08-21
summary: A typical system is financed so household debt rises; repayments below savings depend on tariffs; the Crown underwrite is Crown risk; renters get plug-in kits, not rooftop ownership.
jurisdiction: NZ
sources:
  - title: Solar without the Upfront Cost
    url: https://www.labour.org.nz/solarsaver
tags:
  - energy
  - climate
  - cost-of-living
party: labour
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/nz-election-2026/labour/solarsaver.md
derivesFrom: labour-solarsaver
assumptions:
  - financing a typical system with nothing upfront means the household takes on debt equal to the financed cost
  - repayments set below power bill savings is a claim that holds only while tariffs and usage keep savings above the repayment path
  - a Crown underwrite for lines company loans places residual credit risk on the Crown when borrowers default
  - plug-in panels for renters are portable kits, not financed rooftop ownership of the dwelling
sourceDigest: "sha256-9de7372ece2acc96"
---

# Our understanding

> Nothing-upfront finance means household debt rises with the loan, and repayments below bill savings only hold while tariffs and usage keep the gap open. The Crown underwrite puts residual credit risk on the public balance sheet, and renters get plug-in kits rather than financed rooftop ownership.

System: SolarSaver finance, underwrite and renter path

Scenario: A homeowner finances a typical rooftop system
Given a typical solar and battery system costs around $20,000
When the system is financed with nothing to pay upfront
Then the household's debt rises by the financed amount
Outcome the household owns the system from day one
But the loan sits on the household until it is repaid

Scenario: Repayments are set below bill savings
Given repayments set below power bill savings
When tariffs or usage change after install
Then the gap between savings and repayments can shrink or reverse
Outcome being better off each month depends on the tariff path, not only on the finance offer

Scenario: The Crown underwrites lines company loans while renters take plug-in
Given a $20 million Crown underwrite for lines company loans
And a two-panel kit costs around $1,500
When a lines company loan defaults or a renter uses plug-in panels
Then the Crown carries the underwrite risk on the loan path
And the renter receives a plug-in kit rather than rooftop ownership
Output $20 million Crown underwrite for lines company loans
Outcome homeowners can own financed rooftop systems from day one
But renters' path is plug-in, not financed ownership of panels on the roof
