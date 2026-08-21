---
type: spec
id: national-news-20260517-honpaulgoldsmith-derived
title: "Good character ban read as a system: longer sentences on a two-track, with prison capacity unnamed"
status: draft
updated: 2026-08-21
summary: Barring good character as mitigation for sexual offending lengthens those sentences while character evidence can still cut other offences; prison and court capacity for the lift are not in the policy.
jurisdiction: NZ
sources:
  - title: Tougher sentences for sexual offending
    url: https://www.national.org.nz/news/20260517-honpaulgoldsmith
tags:
  - crime-and-justice
party: national
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/national/news-20260517-honpaulgoldsmith.md
derivesFrom: national-news-20260517-honpaulgoldsmith
assumptions:
  - removing a mitigating factor that judges must weigh today raises average sentence length for the covered offences unless another discount expands to fill the gap
  - the prohibition is scoped to sexual offending, so good character evidence remains available at sentencing for other offences — a two-track system
  - longer sentences need prison beds and court time; neither capacity effect is stated
  - we introduce no dollar amount and no sentence-month figure, because the policy publishes none
sourceDigest: "sha256-5a384fc5bd7e436a"
---

# Our understanding

> The policy prohibits good character as a mitigating factor at sentencing for all sexual offending and expects tougher sentences. It does not size the lengthening, name prison or court capacity, or say that character evidence still cuts other offences.

System: A mitigation ban that lengthens one track and leaves another

Scenario: A sexual offending sentence is set without good character mitigation
Given judges must take into account character testimony today
When the law prohibits treating good character as mitigating for all sexual offending
Then that discount path closes for those cases
Outcome sentences for sexual offending are tougher than under the current rule
But how much longer, on average, is not stated

Scenario: The same offender faces a non-sexual charge
Given the prohibition is limited to sexual offending
When a judge sentences a different offence
Then good character evidence can still be weighed as mitigation
Outcome sexual offending and other offending run on different character rules
But a reader cannot tell from this policy alone how the two tracks interact in a multi-charge case

Scenario: Tougher sentences meet the prison estate
When more sexual offending sentences run longer
Then beds and court sitting days absorb the lift
Outcome victims see the tougher outcome the policy names
But prison and court capacity for that lift are unnamed
