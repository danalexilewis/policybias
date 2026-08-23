---
type: spec
id: liberalerna-politik-skatter-derived
title: "ISK cap read as a system: a priced benefit beside an unpriced tax cut"
status: draft
updated: 2026-08-23
summary: The only figure attached to a change is raising tax-free ISK from 300,000 to 500,000 kronor; further cuts on work and a broad reform are direction without a tax rate.
jurisdiction: SE
sources:
  - title: Skatter – Liberalerna
    url: https://www.liberalerna.se/politik/skatter
tags:
  - taxation
derivesFrom: liberalerna-politik-skatter
party: liberalerna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-skatter.md
sourceDigest: sha256-ed10b2ad3e8f172f
assumptions:
  - a higher ISK cap helps those who already have room above 300,000 kronor; it creates no savings for those without any
  - cutting tax on work without a tax rate leaves the school-care-security trade unpriced
  - a broad reform that removes exceptions creates losers among those who used them; the policy names simplicity, not who pays
  - being able to leave a bad job or relationship requires savings, not just a higher legal cap
lang: en
translationOf: liberalerna-politik-skatter-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-bbeabc36de317835
---

# Our understanding

> The ISK rise is the only priced instrument. Lower tax on work and a simpler rulebook are a direction. School, care and security still need revenue. A higher cap is worth most to those already near the old cap.

System: A figure on a savings cap beside an unpriced cut in tax on wages

Scenario: A saver already near the old ISK cap
Given tax-free savings in an investment savings account up to 300,000 kronor already exist
When the cap is raised
Then more of the same account can sit untaxed
Output tax-free ISK savings up to 500,000 kronor
Outcome the extra room goes to people who already save at scale
But a household with no ISK balance gets no cash this year

Scenario: A wage earner hears that work must pay while welfare still rolls on
Given taxes are needed to fund school care and security
When tax on work is cut further without a published tax rate
Then net pay is meant to rise
Outcome the work line strengthens only if the missing revenue is found elsewhere
But the policy does not say which tax rises or which spending falls
