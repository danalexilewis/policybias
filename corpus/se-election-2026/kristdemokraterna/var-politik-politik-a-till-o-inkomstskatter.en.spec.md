---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter
title: At most half in marginal tax and lower tax on work
status: draft
updated: 2026-08-23
summary: No one is to pay more than 50 percent in top marginal tax, at most 15 percent of income earners are to pay state income tax, and tax is cut broadly for those who work.
jurisdiction: SE
sources:
  - title: Inkomstskatter
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/inkomstskatter
tags:
  - taxation
party: kristdemokraterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-inkomstskatter.md
sourceDigest: sha256-d150f8d4583d6b5f
gaps:
  - the size of the broad tax cuts in kronor is not stated
  - the total public-finance cost is not stated
  - when the half-kept goal is reached is not stated
lang: en
translationOf: kristdemokraterna-var-politik-politik-a-till-o-inkomstskatter
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-6ba57c453f1950d4
---

# What the page states

> Income taxes are to be designed so that work, education and taking responsibility pay. The goal is half kept: no one is to pay more than 50 percent in top marginal tax, and no more than 15 percent of income earners are to pay state income tax. The threshold has been raised and the tapering of the earned-income tax credit for higher incomes has been removed. Broad cuts are proposed for everyone who works, plus targeted cuts for the long-term unemployed, newly arrived people and young people up to 23, and a further strengthened earned-income tax credit from 69.

System: Income tax with a cap on the margin

Scenario: Anyone who takes more responsibility at work is to keep more of their pay
Given the threshold in state income tax has been raised
And the tapering of the earned-income tax credit for higher incomes has been removed
When broad tax cuts are introduced for everyone who works
Then work, education and taking responsibility are to pay
And the individual is, as far as possible, to keep their pay
Output 50 percent as the cap on top marginal tax
And 15 percent of income earners as the cap on who pays state income tax
And targeted tax cuts for the long-term unemployed, newly arrived people and young people up to 23
And a further strengthened earned-income tax credit for people aged 69 or older
Outcome it is to become more worthwhile to work longer
