---
type: spec
id: labour-familydoctorloanscheme-derived
title: "Family Doctor Loan Scheme read as a system: a small buy-in channel that shifts ownership mix"
status: draft
updated: 2026-08-21
summary: Fifty loans a year at up to $500,000 is a narrow channel; excluding corporates shifts who can buy in, while the 4.5 million appointments claim belongs to a bundled plan and default rules stay unnamed.
jurisdiction: NZ
sources:
  - title: Backing Your Family Doctor
    url: https://www.labour.org.nz/familydoctorloanscheme
  - title: Backing local doctors
    url: https://www.labour.org.nz/media/dbskvb1y/backinglocaldoctors.pdf
tags:
  - healthcare
  - small-business
party: labour
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/labour/familydoctorloanscheme.md
derivesFrom: labour-familydoctorloanscheme
assumptions:
  - 50 loans a year at a $500,000 cap is a small annual buy-in channel relative to the national practice stock; the policy does not claim it replaces corporate ownership at scale
  - excluding corporate-owned practices means the scheme only finances owner-operated buy-ins, so the ownership mix shifts toward those applicants who get a loan
  - the more than 4.5 million appointments figure is stated as a nationwide plan of triage, tech, self-care and facilities, not as a unique output of the loans alone
  - default and recovery rules are not stated, so credit risk sits outside the published terms
sourceDigest: "sha256-4f398e987bdfbba8"
---

# Our understanding

> The policy states loan caps, fifty loans a year, corporate exclusion, and a more than 4.5 million appointments plan. It does not state that the loans alone free those appointments, how large the channel is against the national stock, or what happens if a borrower defaults.

System: Family Doctor Loan Scheme as a small ownership channel

Scenario: The scheme runs at full subscription
Given up to 50 loans available every year
And each loan capped at $500,000
When the scheme is fully subscribed
Then at most fifty doctors a year buy in on these terms
Output $25 million a year lent if fully subscribed
And less than $8 million a year forgone interest if fully subscribed
Outcome the Crown's annual buy-in channel stays small even when every loan is taken
But the policy does not say how many practices that covers nationwide

Scenario: A corporate buyer is shut out of the same sale
Given corporate-owned practices are excluded
And owner-operated practices can apply
When a retiring doctor sells and both a corporate and an owner-operator bid
Then only the owner-operated path can use the scheme
Outcome ownership mix shifts toward practices that can clear the loan rules
But doctors outside those rules still face bank pricing the policy contrasts

Scenario: The appointments claim is read against the loan mechanism
Given a plan to free up more than 4.5 million GP appointments a year
And that plan lists triage, technology, long-term condition advice and clinic space
When the loan scheme is delivered
Then the appointments figure is not unique to the loans
Outcome the loans are a buy-in channel, not the source of the freed appointments
But default and recovery if a borrower cannot repay are unnamed
