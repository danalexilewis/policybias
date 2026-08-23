---
type: spec
id: vansterpartiet-var-politik-politik-a-o-aldreomsorg-derived
title: "Elderly-care crash commission read as a system: investigation first, staff later"
status: draft
updated: 2026-08-23
summary: The five demands are the real intervention, but they are filed as inputs to a commission, so minutes, pay and beds can wait on a report.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/aldreomsorg
tags:
  - employment
  - elderly-care
  - social-welfare
party: vansterpartiet
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-aldreomsorg.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-aldreomsorg
assumptions:
  - a parliamentary commission produces findings on a political timetable; it does not staff a round of evening visits
  - abolishing minute-control lengthens each visit only if headcount rises by enough to cover the extra minutes
  - shorter hours without a published replacement FTE cut paid hours or raise the municipal bill
  - the shift from special housing to home care since the 2000s is a stock of missing places the commission does not automatically rebuild
sourceDigest: sha256-53a34fd2ce521559
lang: en
translationOf: vansterpartiet-var-politik-politik-a-o-aldreomsorg-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-acba758a6fa8bee1
---

# Our understanding

> The crash commission is a delay mechanism unless the five inputs are enacted on day one. Ending the stopwatch without more aides means each visit is longer and fewer people are seen; shorter hours without a replacement count does the same. Choice between home and a special home is empty where the special-home stock has already been run down.

System: Commission as a queue in front of the staffing bill

Scenario: Minute-control ends before the extra aides arrive
Given visits are already timed to the minute and staffing is thin
When the stopwatch is abolished
Then each remaining aide owes more untimed time per person
Outcome dignity for the person in the chair, unless the round is cut
But an older person later in the loop waits or is skipped

Scenario: Shorter hours meet a wave of retirements
Given large pension exits among care staff are expected
When working time in care is shortened and full-time rights are honoured
Then the hours that must be filled rise
Outcome municipalities need a grant large enough to hire, not only to investigate
But a resident carries the gap if the grant is late
Activates vansterpartiet-var-politik-politik-a-o-sjukvard
