---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-aldreboendegaranti-derived
title: "A self-assessed right at 85 read as a system: demand without a named extra place"
status: draft
updated: 2026-08-23
summary: A legal right to move at 85 on one's own assessment is a demand-side guarantee; unless places rise, the right becomes a queue.
jurisdiction: SE
sources:
  - title: Äldreboendegaranti
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/aldreboendegaranti
tags:
  - elderly-care
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-aldreboendegaranti
party: kristdemokraterna
clusters:
  - elderly-welfare
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-aldreboendegaranti.md
sourceDigest: sha256-4ad8468bd25c14bd
assumptions:
  - a right without a vacant place is a place on a list; the page says more places are needed and does not say how many
  - dropping heavy needs-testing at 85 brings forward moves that today's tests delay, so demand jumps before stock does
  - municipalities must both stimulate sheltered housing and make staying at home easier; those two uses compete for the same local capital
lang: en
translationOf: kristdemokraterna-var-politik-politik-a-till-o-aldreboendegaranti-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-c6befc4a0501adb5
---

# Our understanding

> At 85 the needs test is meant to fall away. The person who feels unsafe can claim a place. That is a demand-side right. The page already says more elderly-housing places are required for the demographic years ahead. If the stock does not move first, the right is a ticket to wait.

System: Age-85 right as demand without stock

Scenario: Someone over 85 claims a place before the stock has grown
Given municipalities still needs-test heavily today
When the legal right to move on one's own assessment begins
Then claims arrive without a matching vacant room
Output 85 as the age at which the test is meant to drop
Outcome self-determination is promised
But the extra place is not counted, and the municipality still has to find a room
