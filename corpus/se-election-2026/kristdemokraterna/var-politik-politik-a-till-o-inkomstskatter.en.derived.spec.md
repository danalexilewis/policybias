---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter-derived
title: "Half-in-hand read as a system: a cap on the top rate without a kronor cut"
status: draft
updated: 2026-08-23
summary: A 50 percent top marginal rate and a 15 percent cap on who pays state income tax are goals; the broad cut that would get there is unpriced, while extra relief at 23 and 69 targets the edges.
jurisdiction: SE
sources:
  - title: Inkomstskatter
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/inkomstskatter
tags:
  - taxation
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter
party: kristdemokraterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-inkomstskatter.md
sourceDigest: sha256-d150f8d4583d6b5f
assumptions:
  - raising the state-tax threshold and ending the phase-out of the earned-income credit are already done; they do not by themselves deliver half-in-hand
  - a cap on the share who pay state tax is a distributional choice: someone else's rate or a higher threshold must move
  - extra credit from 69 and cuts for people far from work change participation at the edges more than they change the top rate
  - a broad cut for everyone in work has an open public-finance bill until a kronor figure is printed
lang: en
translationOf: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-ee13a514ee63de8b
---

# Our understanding

> Half-in-hand is a ceiling, not a table. The policy also wants no more than 15 percent of earners in the state tax. Those two caps can be met by a higher threshold, a lower rate, or both. The broad cut for everyone in work is the 2026 offer, and it has no kronor attached. Extra relief for people far from work, for the young up to 23, and a further earned-income credit from 69 sit at the edges.

System: Half-in-hand as a cap without a priced cut

Scenario: Everyone in work gets a cut while the top-rate cap is still a goal
Given the state-tax threshold has already been raised
And the phase-out of the earned-income credit at higher pay is already gone
When broad tax cuts for everyone in work are introduced
Then work, training and extra responsibility are meant to pay more
Output 50 percent as the ceiling on the top marginal rate
And 15 percent of earners as the ceiling on who pays state income tax
Outcome take-home pay is meant to rise
But the public-finance cost of the broad cut is open

Scenario: Extra relief is aimed at the young, newcomers and older workers
When targeted cuts reach the long-term unemployed, new arrivals and people up to 23, and the earned-income credit is strengthened from 69
Then the incentive to take a first job or to stay in work longer is the stated point
Outcome participation at the edges is the lever, not the top rate
But the size of those credits is not stated
