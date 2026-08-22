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

> Pay equity is restored, Best Start runs to every child under three, parental leave rises to 15 months, and the Crimes Act picks up coercive control and consent. Best Start and leave weekly rates are not priced here. Leave matches the workforce-rights chapter — one rule, two places. Coercive-control law changes what counts as a crime; family and sexual violence services still need their own Budget lines.

System: Pay, early-years income, leave and violence law stacked

Scenario: Best Start becomes universal for every child under three
Given Best Start increased and extended to every child under three as a universal child benefit
And no payment amount in the policy
When a child under three is in a household
Then that child receives Best Start without a means test on this policy
Outcome every household with a child under three can draw Best Start
But Treasury still has to set the payment rate before anyone knows the weekly top-up
Activates green-manifesto-2026-childen

Scenario: Parental leave rises to 15 months on the same terms as workforce rights
Given paid parental leave rising to 15 months for the primary caregiver
And ring-fenced partner leave and increased payments
When the leave rule is in force
Then the primary caregiver can take 15 months
Output 15 months paid parental leave for the primary caregiver
Outcome primary caregivers can take the same 15 months as in the workforce chapter
But someone's pay packet while on leave still depends on a rate this chapter never prints
Activates green-manifesto-2026-workforce-rights

Scenario: Coercive control is criminalised while FV and SV services are resourced separately
When the Crimes Act criminalises coercive control and amends consent including precluding reluctant consent
And kaupapa Māori and community-led family and sexual violence solutions are resourced
Then the statute names new offending and consent rules
Outcome survivors can point to coercive control and consent rules in the Crimes Act
But front-line family and sexual violence services wait on Budget lines this crime change does not fund
Activates green-manifesto-2026-violence-prevention
