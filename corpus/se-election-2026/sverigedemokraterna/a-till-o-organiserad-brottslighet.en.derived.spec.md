---
type: spec
id: sverigedemokraterna-a-till-o-organiserad-brottslighet-derived
title: "Organised crime read as a system: more time behind bars, the ban waits on the constitution"
status: draft
updated: 2026-08-23
summary: Doubled sentences can begin to bite before the next election; the membership ban cannot, because the constitution requires two decisions and the policy only promises the first.
jurisdiction: SE
sources:
  - title: Organiserad brottslighet
    url: https://www.sd.se/a-till-o/organiserad-brottslighet/
tags:
  - crime-and-justice
derivesFrom: sverigedemokraterna-a-till-o-organiserad-brottslighet
party: sverigedemokraterna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-organiserad-brottslighet.md
sourceDigest: sha256-b2b172f20e64eac5
assumptions:
  - doubled sentences for gang crime increase time in prison; without new places the queue to prison becomes pressure households do not see
  - gang membership must be proved in court; the policy does not say what standard of proof should apply
  - two constitutional decisions cannot both be completed before a single election if the second is to be taken by a new Riksdag
  - membership ban without legal definition of criminal organisation risks either being toothless or hitting wider than gangs
lang: en
translationOf: sverigedemokraterna-a-till-o-organiserad-brottslighet-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-2622b3dfa9238433
---

# Our understanding

> Sentences are being sharpened now, and are to be doubled for gang crime before the next election. The ban on belonging to a criminal organisation requires two constitutional decisions; only the first is promised. Whoever is inside serves time in prison. The organisation can live on until the second decision comes, if it comes.

System: Sentences that bite before the election, ban waiting on the next Riksdag

Scenario: Doubled sentences begin to apply while prison places stay the same
Given sentences have already been sharpened for several crimes gang criminals commit
When doubled sentences are introduced for gang crime
Then more convicted people are to serve longer inside
But the policy does not say where they are to sit
Outcome time behind bars increases; prison capacity is a silent constraint

Scenario: The first constitutional decision is taken before the election
Given two constitutional decisions are needed to make membership illegal
When only the first decision is taken
Then it is still legal to be in the organisation
Outcome the ban becomes an election promise the next Riksdag must fulfil, not a rule already in force
