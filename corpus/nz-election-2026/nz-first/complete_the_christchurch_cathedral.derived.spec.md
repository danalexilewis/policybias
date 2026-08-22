---
type: spec
id: nz-first-complete-the-christchurch-cathedral-derived
title: "Cathedral funding read as a system: $15 million covers first stage, not the shortfall"
status: draft
updated: 2026-08-21
summary: An extra $15 million sits against a $40 to $45 million shortfall after $90 million already spent; first stage can restart while the remaining gap has no named closer.
jurisdiction: NZ
sources:
  - title: Complete the Christchurch Cathedral
    url: https://www.nzfirst.nz/complete_the_christchurch_cathedral
tags:
  - infrastructure
party: nz-first
clusters:
  - tax-fiscal
money: named-figure
sourcePath: corpus/nz-election-2026/nz-first/complete_the_christchurch_cathedral.md
sourceDigest: "sha256-207f866e9827cdd0"
derivesFrom: nz-first-complete-the-christchurch-cathedral
assumptions:
  - $15 million additional government funding is smaller than the $40 to $45 million shortfall still named in the policy
  - completing the first stage reopens the cathedral and removes hoardings; it is not the full revitalisation
  - Church and council are seeking more, but the policy does not name who closes the remaining gap after the $15 million
---

# Our understanding

> Around $90 million is already in the rebuild with a $40 to $45 million shortfall remaining, and an extra $15 million commits to the first stage only — not the whole gap or full revitalisation.

System: Staged cathedral funding against an open shortfall

Scenario: Additional government funding is committed
Given around $90 million has been invested in the rebuild with a $40 to $45 million shortfall remaining
And the project has been mothballed since 2024 for lack of funds
When additional government funding is committed
Then the first stage of the staged rebuild can restart
Output $15 million in additional government funding committed
Outcome the cathedral reopens and hoardings leave the square on the first-stage path
But the $15 million covers less than half the shortfall still outstanding

Scenario: First stage finishes while the wider gap remains
Given the additional funding is to help complete the first stage on the way to full revitalisation
And a $40 to $45 million shortfall remaining after around $90 million already invested
When Church and council contributions are still being sought for more of the shortfall
Then first-stage works can proceed without a named closer for the rest
Outcome the square can clear while later stages wait on other money
But Church, council and donors still owe the rest after the first stage
