---
type: spec
id: sverigedemokraterna-a-till-o-pliktskola-derived
title: "Compulsory schooling read as a system: attendance requirement without tools"
status: draft
updated: 2026-08-23
summary: Compulsory schooling is extended to all children present in the country, but the policy names neither sanction, authority nor how many children it concerns.
jurisdiction: SE
sources:
  - title: Pliktskola
    url: https://www.sd.se/a-till-o/pliktskola/
tags:
  - education
derivesFrom: sverigedemokraterna-a-till-o-pliktskola
party: sverigedemokraterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-pliktskola.md
sourceDigest: sha256-ecda7d8524be6213
assumptions:
  - children present in Sweden but not registered in the population register often lack an address and guardian the school can demand attendance from
  - strengthened control without a named tool can range from letters to fines; the policy does not choose
  - guardians' responsibility only bites if some authority gets a clear mandate to intervene
  - the policy is too short to distinguish children never enrolled from children truanting after enrolment
lang: en
translationOf: sverigedemokraterna-a-till-o-pliktskola-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-e8429d1789666a80
---

# Our understanding

> The duty is to apply to every child present in the country, and someone is to ensure it is followed. The policy does not say who checks, with what compulsion, or how many children it involves. Without population registration and without sanction, control is a goal, not a mechanism.

System: Compulsory schooling as a requirement without an implementation chain

Scenario: A child is here without the school knowing where they live
Given compulsory schooling is to cover all children present in Sweden
And the policy does not say how children without population registration are found
When the child does not come to lessons
Then control lacks a named route to the guardian
Outcome the duty exists on paper while the child can remain invisible to the school

Scenario: A guardian does not send the child off
Given society is to ensure compulsory schooling is followed
When the guardian does not take responsibility
Then the policy does not say whether fines, social services or a police report follow
Outcome responsibility is placed on the guardian without the cost of enforcing it being described
