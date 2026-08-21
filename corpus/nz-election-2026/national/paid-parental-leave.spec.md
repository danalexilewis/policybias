---
type: spec
id: national-paid-parental-leave
title: "Paid parental leave to 30 weeks with shared leave"
status: draft
updated: 2026-08-18
summary: Extend paid parental leave from 26 to 30 weeks over three Budgets, allow shared leave, and protect full holiday pay from 1 July 2027.
jurisdiction: NZ
sources:
  - title: Modernising Paid Parental Leave
    url: https://www.national.org.nz/paid-parental-leave
  - title: Paid Parental Leave policy document
    url: https://assets.national.org.nz/web/prod/Paid%20Parental%20Leave.pdf
tags:
  - social-welfare
  - employment
party: national
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/national/paid-parental-leave.md
sourceDigest: "sha256-2933f6dbec2d7033"
gaps:
  - payment rate and weekly dollar amounts are not stated on this page
  - longer-term vision to 40 weeks has no timetable beyond the initial four-week increase
  - employer administration changes are not detailed
---

# What the page states

> Extension from 26 to 30 weeks over three Budgets, shared parental leave flexibility, full holiday pay protection from 1 July 2027, and KiwiSaver top-up cross-reference from 1 July 2027 are on the page. The linked PDF stages 27 weeks from 1 July 2027, 28 weeks from 1 July 2028, and 30 weeks from 1 July 2029, and prints $327.4 million for the leave extension and $121.9 million for the parental-leave KiwiSaver contribution. Dollar payment rates are not on this page.

System: Modernised paid parental leave

Scenario: New parents take paid parental leave
Given paid parental leave is 26 weeks today
When paid parental leave is extended over three Budgets
Then paid parental leave rises from 26 weeks to 30 weeks
Output 30 weeks paid parental leave
And 27 weeks from the first Budget step
And 28 weeks from the second
And parents can take paid parental leave at the same time or in overlapping instalments
And workers earn annual leave while on parental leave from 1 July 2027
And $327.4 million total cost of the extension
And $121.9 million parental leave KiwiSaver contribution
Outcome more time with a new baby and more choice how to use it
Activates national-kiwisaver
