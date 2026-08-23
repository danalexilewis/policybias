---
type: spec
id: liberalerna-politik-forsvar-derived
title: "Five percent of GDP read as a system: a share without a year"
status: draft
updated: 2026-08-23
summary: Three and a half percent military plus one and a half percent related is a split of a GDP share, not a krona track, and civil defence sits in the same unnamed calendar.
jurisdiction: SE
sources:
  - title: Försvar – Liberalerna
    url: https://www.liberalerna.se/politik/forsvar
tags:
  - defence
derivesFrom: liberalerna-politik-forsvar
party: liberalerna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-forsvar.md
sourceDigest: sha256-0cb347d0e2247a4a
assumptions:
  - a GDP share without a year is a moving target; a recession cuts kronor even if the percentage holds
  - 1.5 percent related spending can be relabelled existing infrastructure unless the policy rings in only new stockpiles
  - more soldiers sailors and officers need housing training and kit that compete with ammunition inside 3.5 percent
  - joint EU procurement helps Ukraine and stockpiles only if factories are already warm; the policy names the purpose, not lead time
lang: en
translationOf: liberalerna-politik-forsvar-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-5e3272203b16e0b1
---

# Our understanding

> Five percent of GDP is a share, not a delivery date. The 3.5 and 1.5 split can hide old roads under a new defence label. Civil defence, conscription and stockpiles sit in the same pot as ammunition. NATO membership is a duty to give as well as receive, and it lands when the units exist.

System: A GDP share split two ways

Scenario: The budget year arrives without an end year for 5 percent
Given defence spending is to rise to 5 percent of GDP in total
When the next budget is set
Then the share can be printed before the brigades exist
Output 5 percent of GDP
Outcome deterrence is a force that can fight, not a line in a budget bill
But the policy does not say which year the share is reached

Scenario: Civil defence is built from the related slice
Given electricity supply healthcare transport and food supply must work even in war
When civil duty stockpiles and war-critical firms are restored
Then those tasks compete with ammunition for the same GDP share
Outcome households are safer only if the related slice is new spending, not relabelled outlays
But the policy does not ring in that slice
