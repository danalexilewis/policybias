---
type: spec
id: green-manifesto-2026-gender-equity-derived
title: "Gender equity read as a system: pay, leave and violence law stack while Best Start and leave rates stay unnamed"
status: draft
updated: 2026-08-21
summary: Pay equity, universal Best Start under three, and 15 months parental leave sit beside coercive-control law, but payment rates and Best Start dollars are unpublished, and leave overlaps the workforce chapter.
jurisdiction: NZ
sources:
  - title: Gender Equity
    url: https://www.greens.org.nz/manifesto_2026_gender_equity
tags:
  - employment
  - healthcare
  - social-welfare
party: green
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/green/manifesto_2026_gender_equity.md
derivesFrom: green-manifesto-2026-gender-equity
assumptions:
  - 15 months parental leave on this policy is the same mechanism as on the workforce rights page, not a second entitlement
  - Best Start extended to every child under three is universal early-years income without a printed payment amount
  - restoring pay equity and reporting closes gaps only if claims resume and transparency actually changes pay rates
  - criminalising coercive control changes the Crimes Act; it does not by itself fund front-line family and sexual violence services
sourceDigest: "sha256-816e9fffb6ea638a"
---

# Our understanding

> The policy restores pay equity, extends Best Start under three, lifts parental leave to 15 months, and amends the Crimes Act on coercive control and consent. It does not print Best Start or leave payment rates, and it repeats the leave promise also made in the workforce rights policy. We treat that overlap as one leave rule stated twice, and treat the violence law as a crime change that still needs service funding elsewhere.

System: Pay, early-years income, leave and violence law stacked

Scenario: Best Start becomes universal for every child under three
Given Best Start increased and extended to every child under three as a universal child benefit
And no payment amount in the policy
When a child under three is in a household
Then that child receives Best Start without a means test on this policy
Outcome early-years income support widens to all under-threes
But the dollar amount a household receives cannot be read from the policy
Activates green-manifesto-2026-childen

Scenario: Parental leave rises to 15 months on the same terms as workforce rights
Given paid parental leave rising to 15 months for the primary caregiver
And ring-fenced partner leave and increased payments
When the leave rule is in force
Then the primary caregiver can take 15 months
Output 15 months paid parental leave for the primary caregiver
Outcome leave length matches the workforce rights chapter
But the weekly rate remains unnamed, so income while on leave is not settled here
Activates green-manifesto-2026-workforce-rights

Scenario: Coercive control is criminalised while FV and SV services are resourced separately
When the Crimes Act criminalises coercive control and amends consent including precluding reluctant consent
And kaupapa Māori and community-led family and sexual violence solutions are resourced
Then the statute names new offending and consent rules
Outcome survivors have a clearer criminal pathway
But the policy does not say how much funding those services receive
Activates green-manifesto-2026-violence-prevention
