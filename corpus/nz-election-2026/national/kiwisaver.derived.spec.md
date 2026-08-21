---
type: spec
id: national-kiwisaver-derived
title: "KiwiSaver read as a system: a wage cost to twelve per cent, locked Baby Boost, hardship as the valve"
status: draft
updated: 2026-08-21
summary: Compulsory combined defaults to 12% are a wage cost on employers and workers; Baby Boost is a grant into locked accounts; the hardship test is the pressure valve.
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
derivesFrom: national-kiwisaver
assumptions:
  - a compulsory contribution at the default rate reduces take-home pay for the worker and raises the wage bill for the employer at the same time
  - combined defaults rising to 12% by 2032 means both sides of the wage bargain carry a larger locked saving share
  - a Baby Boost paid into KiwiSaver at birth cannot be spent on current household costs; it is locked retirement capital
  - the hardship test is the only stated way for a compulsory contributor to suspend without another qualifying scheme, so it is the pressure valve
sourceDigest: "sha256-a7bb48377c828e84"
---

# Our understanding

> The policy frames compulsion, Baby Boost and the hardship test as greater financial security. The combined default rise is a wage cost on both sides of the employment relationship, Baby Boost is a grant into a locked account rather than cash a household can use now, and hardship opt-out is the valve that makes compulsion tolerable.

System: Compulsory KiwiSaver as a wage cost with a locked grant and a hardship valve

Scenario: Combined defaults reach twelve per cent under compulsion
Given default KiwiSaver contributions rising to 3.5% on 1 April 2026
And combined default contributions lifting to 12% by 2032
When KiwiSaver becomes compulsory for all workers from 1 July 2028
Then both the employer and the worker pay at the prevailing default rate
Output combined default contributions lifting to 12% by 2032
Outcome retirement balances grow for those who stay in
But take-home pay and employer wage bills both carry the cost

Scenario: A newborn receives the Baby Boost
Given a $1500 Baby Boost payment for every child born from 1 July 2027
And automatic KiwiSaver enrolment at birth
When the grant is paid into the child's account
Then the money sits in locked retirement savings
Output $1500 Baby Boost payment for every child born from 1 July 2027
And $90.0 million a year for Baby Boost
Outcome compounding can start from birth
But the household cannot spend the grant on current costs

Scenario: A worker needs to stop contributing
Given a hardship test required to suspend contributions
When compulsory contributions bite on a tight budget
Then suspension is available only if the hardship test is met
Outcome compulsion has a stated pressure valve
But exit is gated by a test, not open choice
Activates national-paid-parental-leave
