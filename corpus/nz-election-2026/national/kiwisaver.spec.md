---
type: spec
id: national-kiwisaver
title: "Compulsory KiwiSaver, Baby Boost and parental leave top-up"
status: draft
updated: 2026-08-21
summary: Compulsory KiwiSaver from July 2028 lifting combined defaults to 12% by 2032, $1500 Baby Boost, hardship opt-out, and paid parental leave KiwiSaver contributions from July 2027.
jurisdiction: NZ
sources:
  - title: Enhancing KiwiSaver for Everyone
    url: https://www.national.org.nz/kiwisaver
  - title: KiwiSaver policy document
    url: https://assets.national.org.nz/web/prod/National%20KiwiSaver%20policy%20document.pdf
tags:
  - superannuation
  - social-welfare
party: national
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/national/kiwisaver.md
sourceDigest: "sha256-a7bb48377c828e84"
gaps:
  - employer cost of compulsory KiwiSaver for low-margin sectors is not stated
  - glidepath for default rates between 2028 and 2032 beyond 0.5% annual steps is only partly stated
  - how the hardship test is decided in practice is not detailed
---

# What the page states

> KiwiSaver becomes compulsory for all workers from 1 July 2028, with combined default contributions continuing to rise. Every child born is enrolled at birth with a Baby Boost from 1 July 2027. From the same date, the Government contributes during paid parental leave even without employee contributions, and employers contribute for workers over 65. People facing hardship can suspend contributions; the self-employed contribute at a lower rate than the combined default.

System: Enhanced KiwiSaver

Scenario: A worker is enrolled in KiwiSaver
Given default KiwiSaver contributions rising to 3.5% on 1 April 2026
When KiwiSaver becomes compulsory for all workers from 1 July 2028
Then every worker contributes at the prevailing default rate
Output combined default contributions lifting to 12% by 2032
And $1500 Baby Boost payment for every child born from 1 July 2027
And automatic KiwiSaver enrolment at birth
And Government KiwiSaver contribution on paid parental leave from 1 July 2027 even if the person is not contributing
And compulsory employer contributions for employees aged over 65 from 1 July 2027
And a hardship test required to suspend contributions
And self-employed people contribute 4% of income from 1 July 2028, not the combined 8%
And $90.0 million a year for Baby Boost
And $110.1 million total fiscal impact in 2027/28
Outcome greater financial security in retirement
Activates national-paid-parental-leave
