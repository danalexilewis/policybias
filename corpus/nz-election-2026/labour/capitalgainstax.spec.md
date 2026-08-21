---
type: spec
id: labour-capitalgainstax
title: "Capital gains tax on property, ring-fenced to health"
status: draft
updated: 2026-08-18
summary: A 28% tax on gains made after commencement on commercial and residential investment property, with all revenue directed to health.
jurisdiction: NZ
sources:
  - title: Capital Gains Tax
    url: https://www.labour.org.nz/capitalgainstax
  - title: Labour CGT policy document
    url: https://www.labour.org.nz/media/pfvguai5/labour-cgt.pdf
tags:
  - taxation
  - healthcare
party: labour
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/labour/capitalgainstax.md
sourceDigest: "sha256-6bc4a73d82f33c05"
gaps:
  - the cost of valuing affected property at commencement is not stated
  - who performs valuations, and who pays for them, is not stated
  - no estimate of how many owners sell early to avoid the tax
  - what happens to the health commitment if revenue falls short of the forecast is not stated
  - the treatment of a property that moves between family home and rental is not stated
---

# What the page states

> Every step here is on the policy page and its linked PDF: the 28% rate, the sale-only trigger, the exemption list, the 100% health ring-fence, and the claim that nine in 10 New Zealanders own no property the tax reaches. The page dates commencement at 1 July 2027. The PDF forecast table prints $100 million in 2027/28, $385 million in 2028/29, $965 million in 2029/2030, and $1,350 million in 2030 and outyears, averaging $700 million a year.

System: Capital gains tax on property, ring-fenced to health

Scenario: An investor sells a residential investment property after commencement
Given a tax system with no general tax on capital gains
And one in six New Zealanders cannot afford to see a doctor
And a residential investment property valued at commencement
When the investor sells the property
Then only the gain made after commencement is taxed
Output 28% of the post-commencement gain paid in tax
And 100% of the revenue ring-fenced to health
And an average of $700 million a year raised across the forecast period
And $100 million in the first forecast year
And $385 million in the second
And $965 million in the third
And $1,350 million in 2030 and outyears
Outcome property profits are taxed like other business income
Activates labour-medicard

Scenario: A household that owns only its family home sells it
Given a household whose only property is the family home
When the household sells the home
Then no capital gains tax applies
Output no tax on the sale
Outcome nine in 10 New Zealanders own no property the tax reaches
