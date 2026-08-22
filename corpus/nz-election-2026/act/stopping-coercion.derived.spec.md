---
type: spec
id: act-stopping-coercion-derived
title: "Companion animal coercion read as a system: a seven-year offence plus Protection Orders that keep the pet"
status: draft
updated: 2026-08-21
summary: Coercive companion-animal abuse becomes a Crimes Act offence with a high ceiling, while Protection Orders and removal powers close the gap that leaves the pet with the alleged abuser.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/stopping-coercion
tags:
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/stopping-coercion.md
derivesFrom: act-stopping-coercion
assumptions:
  - a maximum of seven years sets the seriousness of coercive animal abuse beside other family-violence offences; actual sentences still sit with the court
  - Protection Order conditions that block withholding, sale or disposal change who keeps the animal after the order, which is separate from the criminal charge
  - recording pets on family harm reports is an information step that only helps if removal or order conditions follow
  - Pet Refuge and SPCA placement capacity is assumed available when Police remove an animal; the policy does not fund that capacity
sourceDigest: "sha256-e077eb9749eb2def"
---

# Our understanding

> Coercive companion-animal abuse is criminalised, Protection Orders are strengthened, and Police gain removal authority. The seven-year offence and the order-and-removal pathway are two mechanisms: one punishes, the other keeps the pet out of the abuser's hands.

System: Criminal penalty and civil protection for pets used as coercion

Scenario: An abuser harms a pet to control a partner
Given abusive partners were almost 11 times more likely to intentionally harm an animal than partners in non-abusive relationships
And more than half of victims delayed leaving an abusive relationship because they felt responsible for the safety of their pets
When the Crimes Act makes using companion-animal abuse as coercion or control an offence
Then the conduct can be charged as its own crime
Output a penalty of up to seven years in imprisonment
Outcome the coercive use of a pet is treated as serious criminal harm
But the ceiling is a maximum, not a typical sentence

Scenario: A Protection Order is made and the pet is at stake
When Protection Orders are strengthened for companion animals
Then the offender cannot withhold, sell, give away or otherwise dispose of the protected person's animal
Outcome the pet stays with the protected person rather than becoming a bargaining chip
But the Order only helps once it is made and enforced

Scenario: Police attend and the victim leaves without the pet
Given a victim may escape a callout while the family pet is left behind with the alleged abuser
When Police have explicit authority to remove a companion animal to a place of safety such as Pet Refuge or the SPCA
Then the animal need not stay with the alleged abuser that night
Outcome the pet ceases to be a hostage at the scene
But removal still depends on operational guidance and a safe placement being available
