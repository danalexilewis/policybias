---
type: spec
id: liberalerna-politik-skola-derived
title: "State school read as a system: three cost lines on an unpriced budget"
status: draft
updated: 2026-08-23
summary: Class caps, extra groups for special support and a state takeover all need staff and rooms the policy does not cost, while phasing out profit still keeps school choice.
jurisdiction: SE
sources:
  - title: Skola – Liberalerna
    url: https://www.liberalerna.se/politik/skola
tags:
  - education
derivesFrom: liberalerna-politik-skola
party: liberalerna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-skola.md
sourceDigest: sha256-98b3de6782b86ec2
assumptions:
  - a class cap without pupil numbers still forces hiring or splitting groups once a cap is set
  - moving municipal schools to the state shifts the wage bill from municipal tax to the central budget
  - phasing out profit while keeping choice means owners leave or convert; the policy does not say which
  - removing tablets in early years raises results only if printed books and teacher time actually arrive
lang: en
translationOf: liberalerna-politik-skola-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-1df421927ad666c8
---

# Our understanding

> Smaller classes, separate support groups and tracks for gifted pupils all need extra rooms and teachers. A state takeover moves the bill to the centre. Ending profit in independent schools while keeping choice is a change of ownership, not a new pedagogy.

System: Class size, ownership and screens as a staffing demand

Scenario: A full class hits an unnamed cap
Given smaller classes give more calm and better results
And a cap on pupils per class is to be introduced
When the cap binds
Then groups split or extra teachers are hired
Outcome calm can rise where rooms exist
But the policy never states the number that triggers a split

Scenario: A municipal school changes owner
Given municipal politicians must not be able to deprioritise school
When responsibility moves from municipalities to the state
Then funding rules and employment sit at the centre
Outcome quality should vary less across the country
But local tax no longer pays the same bill, and the replacement stream is unnamed
