---
type: spec
id: liberalerna-politik-forsvar-derived
title: "Five percent of GDP read as a system: a share without a year"
status: draft
updated: 2026-08-23
summary: Three and a half percent military plus one and a half percent related is a split of a GDP share, not a kronor path, and civil defence sits inside the same unnamed calendar.
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
  - a GDP share with no year is a moving target; a recession cuts kronor even if the percent is held
  - 1.5 percent related spend can be re-labelled existing infrastructure unless the page rings it to new stocks
  - more soldiers sailors and officers need housing training and kit that compete with munitions inside the 3.5 percent
  - EU joint procurement helps Ukraine and stocks only if factories are already hot; the page names the aim, not the lead time
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-080669bb5da6f24e
translationOf: liberalerna-politik-forsvar-derived
lang: en
---

# Our understanding

> Five percent of GDP is a share, not a delivery date. The 3.5 and 1.5 split can hide old roads under a new defence label. Civil defence, conscription and stocks sit in the same pot as munitions. NATO membership is a duty to give as well as receive, which lands when the units exist.

System: A GDP share split two ways

Scenario: The budget year arrives without a stated end date for 5 percent
Given defence spending is to increase to a total of 5 percent of GDP
When the next budget is set
Then the share can be printed before the brigades exist
Output 5 percent of GDP
Outcome deterrence is a force that can fight, not a line in a budget bill
But the page does not say which year the share is met

Scenario: Civil defence is rebuilt from the related slice
Given electricity supply healthcare transport and food supply must work even in war
When civil conscription stocks and firms of wartime importance are restored
Then those tasks compete with munitions for the same GDP share
Outcome households are safer only if the related slice is new effort, not relabelled spend
But the page does not ring-fence that slice
