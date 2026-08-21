---
type: spec
id: national-news-20260719-honpaulgoldsmith-derived
title: "Active consent read as a system: a yes standard that still leaves the prosecution proving absence"
status: draft
updated: 2026-08-21
summary: Requiring an active yes means silence is not consent, yet the prosecution still proves beyond reasonable doubt that consent was not given; how words and actions are weighed in practice is unnamed.
jurisdiction: NZ
sources:
  - title: National will modernise consent laws
    url: https://www.national.org.nz/news/20260719-honpaulgoldsmith
tags:
  - crime-and-justice
party: national
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/nz-election-2026/national/news-20260719-honpaulgoldsmith.md
derivesFrom: national-news-20260719-honpaulgoldsmith
assumptions:
  - an active-yes rule changes what counts as consent; it does not, in the policy's own terms, move who must prove what
  - proving that consent was not given while the legal test requires a yes still means the Crown carries absence as a fact to establish beyond reasonable doubt
  - "'words or actions' without evidential practice leaves juries and counsel to invent how silence, intoxication and mixed signals are tried"
  - we introduce no dollar amount, because the policy publishes none
sourceDigest: "sha256-78f47b234ebcc496"
---

# Our understanding

> The policy requires consent to be an active yes by words or actions, says silence is not consent, and keeps the beyond-reasonable-doubt burden on the prosecution. It does not say how that yes is proved in court day to day. That gap remains, and so does the tension between an active-yes definition and proving absence.

System: Active yes with an unchanged proof burden

Scenario: Silence is assessed under an active-yes rule
Given the Crimes Act lists what consent is not but does not define consent
When the law requires consent to be actively given with a yes rather than the absence of a no
Then silence is not consent
Outcome a previous relationship or encounter does not carry consent forward
But a jury still has to decide what words or actions counted as that yes

Scenario: The prosecution still carries the burden
Given the policy states the burden of proof does not shift
When a sexual case is tried after the change
Then the prosecution must still prove beyond reasonable doubt that consent was not given
And that the defendant did not believe on reasonable grounds that it was
Outcome the definition of consent tightens while the proof standard stays
But proving absence of an active yes is still a Crown task, not a defence one

Scenario: Evidential practice is left open
When judges and juries apply "words or actions" without further guidance in the policy
Then counsel argue what counts as an active yes in each fact pattern
Outcome social expectations may reset ahead of courtroom practice
But how intoxication, mixed signals and non-verbal cues are tried remains unnamed
