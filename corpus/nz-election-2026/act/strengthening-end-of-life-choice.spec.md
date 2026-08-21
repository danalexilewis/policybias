---
type: spec
id: act-strengthening-end-of-life-choice
title: "Adopt 25 review recommendations and replace six-month prognosis rule"
status: draft
updated: 2026-08-21
summary: Implement all 25 Ministry of Health statutory review recommendations, replace the six-month prognosis with advanced progressive fatal condition, and allow limited waiver of final consent.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/strengthening-end-of-life-choice
  - title: End of Life Choice Amendment Bill
    url: https://assets.nationbuilder.com/actnz/pages/28682/attachments/original/1756344552/End_of_Life_Choice_Amendment_Bill-v3.1.pdf
tags:
  - healthcare
party: act
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/act/strengthening-end-of-life-choice.md
sourceDigest: "sha256-a89e3dab3adee6da"
gaps:
  - what the 25 review recommendations contain is not listed on the page
  - how advanced progressive condition expected to cause death is assessed is not defined
  - training requirements for practitioners are not specified beyond a duty to complete specified training
  - cost of strengthened Registrar oversight is not stated
---

# What the page states

> The End of Life Choice Act's statutory review recommended 25 changes and the six-month prognosis rule shuts out some terminally ill applicants. The amendment Bill implements all 25 recommendations, replaces the prognosis test with advanced progressive fatal condition, and allows a limited waiver of final consent. The Bill comes into force on the day after Royal assent.

System: End of Life Choice Act amendments

Scenario: Parliament passes the End of Life Choice Amendment Bill
Given the End of Life Choice Act has given New Zealanders that option since 2021
And the Ministry of Health's first statutory review recommended 25 changes to the law
And almost 1,700 New Zealanders have chosen an assisted death
And more than 300 applicants were found ineligible last year and 42 people withdrew
When all 25 recommendations from the Ministry of Health's statutory review are implemented
Then the six-month prognosis requirement is replaced with a requirement that a person has an advanced, progressive condition expected to cause death
Output the other eligibility tests kept, including age at least 18, advanced irreversible decline, unbearable suffering that cannot be tolerably relieved, and competence to make an informed decision
And a limited waiver of final consent when a person assessed as eligible chose the date and time while competent but loses capacity before that date
Outcome training required for practitioners with strengthened Registrar oversight and a duty to check requests are free from pressure
And the Bill comes into force on the day after Royal assent
And terminally ill people in irreversible decline and unbearable suffering are not shut out because a doctor cannot say death will occur within six months
