---
type: spec
id: nz-first-the-kiwi-kids-grant
title: "Kiwi Kids Grant of $5000 a year for each of the first three children"
status: draft
updated: 2026-08-21
summary: A universal tax-free grant of $5000 annually for the first three years of each of the first three children of New Zealand citizen parents, paid via IRD.
jurisdiction: NZ
sources:
  - title: The 'Kiwi Kids Grant'
    url: https://www.nzfirst.nz/the_kiwi_kids_grant
tags:
  - social-welfare
  - cost-of-living
party: nz-first
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/the_kiwi_kids_grant.md
sourceDigest: "sha256-a9b5c4aa45f6a2e0"
gaps:
  - no commencement date is stated
  - monthly payment schedule beyond "regular monthly payment" is not specified
  - eligibility when parents separate or share custody is not described
  - interaction with Paid Parental Leave and Working for Families is not detailed despite being "in addition"
  - the $400 million third-year cost estimate methodology is not shown
  - no estimate of birth-rate response to the grant is given
  - treatment of children born before commencement is not stated
  - whether the upfront first-year lump sum option applies to second and third children is not stated
---

# What the page states

> A universal, non-means-tested grant would support New Zealand citizen parents raising their first three children through each child's first three years, paid via IRD and tax-free. It would sit alongside existing support such as Paid Parental Leave and Working for Families. The falling birthrate is cited as the problem the grant addresses. No commencement date is given.

System: Kiwi Kids Grant for citizen families

Scenario: A New Zealand citizen parent qualifies for the Kiwi Kids Grant
Given New Zealand's birthrate has fallen to 1.53 births per person
And citizen births fell from 52,506 in 2006 to 36,351 in 2025
And citizen births were 72 percent of all births last year compared with 87 percent in 2006
When the Kiwi Kids Grant is introduced
Then a universal non-means tested grant supports citizens raising the first three children through the first three years of life
Output $5000 paid annually for the first three years for each of the first, second and third child
And $400 million estimated cost by the third year once the full cycle is established
Outcome the barrier of increasing costs of having children is substantially lowered
