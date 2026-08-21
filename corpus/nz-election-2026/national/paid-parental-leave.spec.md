---
type: spec
id: national-paid-parental-leave
title: "Paid parental leave to 30 weeks with shared leave"
status: draft
updated: 2026-08-21
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

> Paid parental leave would rise from 26 weeks to 30 weeks in three Budget steps from 1 July 2027, 2028 and 2029. Parents could take leave together or in overlapping instalments rather than splitting it sequentially. From 1 July 2027, workers would earn full annual leave while on parental leave and receive a Government KiwiSaver contribution even if they are not contributing themselves.

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
