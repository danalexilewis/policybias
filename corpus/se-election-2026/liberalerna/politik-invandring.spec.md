---
type: spec
id: liberalerna-politik-invandring
title: Invandring – Liberalerna
status: draft
updated: 2026-08-22
summary: Det är individens skyddsskäl som avgör om man får stanna.
jurisdiction: SE
sources:
  - title: Invandring – Liberalerna
    url: https://www.liberalerna.se/politik/invandring
tags:
  - immigration
party: liberalerna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-invandring.md
sourceDigest: sha256-0a4834e8fc4f9e1b
gaps:
  - cost is not stated on the page
  - timetable is not stated on the page
---

# What the page states

> Människor som flyr krig och förföljelse ska få skydd.

System: Invandring – Liberalerna

Scenario: Party states this policy
Given a Swedish general election is contested
When the party publishes this policy
Then Människor som flyr krig och förföljelse ska få skydd.
Output Det är individens skyddsskäl som avgör om man får stanna.
Outcome the claim is the party's stated position
