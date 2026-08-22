---
type: spec
id: act-strengthening-end-of-life-choice-derived
title: "End of Life Choice amendments read as a system: wider eligibility with a limited final-consent waiver"
status: draft
updated: 2026-08-21
summary: Adopting all 25 review recommendations and replacing the six-month prognosis with advanced progressive fatal condition widens who can qualify, while a limited waiver lets administration proceed after capacity is lost.
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
derivesFrom: act-strengthening-end-of-life-choice
assumptions:
  - replacing a six-month prognosis with an advanced progressive condition expected to cause death admits people a doctor cannot place inside six months
  - that change widens the eligible pool even though other tests remain
  - a limited waiver of final consent means medication can be given after capacity is lost if the date was chosen while competent
  - implementing all 25 review recommendations changes process and oversight beyond the prognosis rule alone
sourceDigest: "sha256-a89e3dab3adee6da"
---

# Our understanding

> Safeguards stay and the six-month rule is the biggest barrier. The prognosis replacement widens eligibility to people in irreversible decline whose death cannot be timed to six months, and the limited waiver allows administration after capacity is lost. All twenty-five review recommendations are adopted as a block; they are not itemised here.

System: End of Life Choice eligibility and consent after the amendment

Scenario: All 25 review recommendations are implemented
Given the Ministry of Health's first statutory review recommended 25 changes to the law
And almost 1,700 New Zealanders have chosen an assisted death
And more than 300 applicants were found ineligible last year and 42 people withdrew
When all 25 recommendations are implemented
Then process, training and Registrar oversight change with the review package
Outcome practitioners face specified training and stronger oversight of pressure-free consent
But practitioners inherit twenty-five process changes without a published checklist in this material

Scenario: The six-month prognosis is replaced
Given the six-month prognosis requirement has shut out people who are terminally ill, in irreversible decline and suffering unbearably when a doctor cannot say death will occur within six months
When that requirement is replaced with an advanced progressive condition expected to cause death
Then people outside a six-month window can still meet the prognosis-style test
Output the other eligibility tests kept, including age at least 18, advanced irreversible decline, unbearable suffering that cannot be tolerably relieved, and competence to make an informed decision
Outcome the eligible pool widens relative to the six-month rule
But the patient's death may still arrive outside any timetable the clinician can fix in advance

Scenario: A limited waiver of final consent is used
Given a person assessed as eligible chose the date and time while competent
When that person loses capacity before the chosen date
Then administration may proceed under the limited waiver
Outcome final consent at the moment of administration is no longer always required
But the last consent step loosens even while the rest of the Act's safeguards are said to stay intact
