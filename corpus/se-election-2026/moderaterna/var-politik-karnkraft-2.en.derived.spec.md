---
type: spec
id: moderaterna-var-politik-karnkraft-2-derived
title: "Loan facility read as a system: the state bears construction risk before the first kilowatt-hour"
status: draft
updated: 2026-08-22
summary: Loans, risk-sharing and majority ownership put construction and price risk on the public purse, while doubling by 2045 has no timetable for breaking ground.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://moderaterna.se/var-politik/karnkraft-2
tags:
  - energy
derivesFrom: moderaterna-var-politik-karnkraft-2
party: moderaterna
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-karnkraft-2.md
sourceDigest: "sha256-37aa13211a357b27"
assumptions:
  - loans to be repaid after the plants exist presuppose that they are completed and profitable
  - long-term electricity-price contracts set a floor that consumers or taxpayers bear if the spot price lies below
  - majority ownership of Videberg Kraft makes the state the counterpart if the project overruns
  - two further applications are interest, not investment decisions
lang: en
translationOf: moderaterna-var-politik-karnkraft-2-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-00bffd1a87c556f9
---

# Our understanding

> A loan facility, risk-sharing and majority ownership make the state financier and owner before any reactor produces. Repayment comes only when the plants exist. The electricity-price contracts lock in a floor. Doubling by 2045 is a physical requirement without a date for breaking ground.

System: Public risk before production

Scenario: The loan is to be repaid after the reactor exists
Given firms can seek state support from a loan facility
And the money is in time to be paid back when the plants are in place
When construction is delayed or overruns
Then repayment is postponed
Outcome the state stands with a claim and an ownership share before the first kilowatt-hour
But taxpayers bear the risk for as long as the plant is not in operation

Scenario: A long-term electricity-price contract meets a lower spot price
Given terms for loans, risk-sharing and long-term electricity-price contracts are agreed
When the spot price lies below the contract
Then the difference must be borne by some party to the contract
Outcome households and industry do not get the whole intended price cut, or the state fills the gap
But those who consume electricity bear the floor if the contract is written against the consumer
