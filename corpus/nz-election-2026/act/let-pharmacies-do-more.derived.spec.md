---
type: spec
id: act-let-pharmacies-do-more-derived
title: "Pharmacy scope read as a system: GP substitution and chain expansion"
status: draft
updated: 2026-08-21
summary: Wider pharmacist treatment lists shift common conditions off GP queues, and removing the five-pharmacy ownership cap lets chains expand where proximity rules once blocked them.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/let-pharmacies-do-more
tags:
  - healthcare
party: act
clusters:
  - health-access
money: named-figure
sourcePath: corpus/nz-election-2026/act/let-pharmacies-do-more.md
derivesFrom: act-let-pharmacies-do-more
assumptions:
  - treating chest infections, ear infections and the rest of the widened list at a pharmacy substitutes for a GP visit when the pharmacist can safely finish the case
  - removing the five-pharmacy ownership cap and proximity restrictions allows owners who already hold several pharmacies to open more
  - GPs retaining overall clinical responsibility for chronic monitoring does not stop the first contact moving to the pharmacy for listed common conditions
  - the policy gives no count of GP appointments shifted, so we invent none
sourceDigest: "sha256-148e14dadbe5c5d9"
---

# Our understanding

> Wider pharmacist treatment lists shift common conditions off GP queues, and removing the five-pharmacy ownership cap lets chains expand where proximity rules once blocked them. Chronic monitoring stays under GP-set limits; how many appointments move carries no count.

System: Community pharmacy as first contact and ownership without the five-pharmacy cap

Scenario: A patient with a listed common condition goes to a pharmacy first
Given one in four adults says the time taken to get a GP appointment was a barrier to seeing a GP
And more than 120,000 people used the Minor Health Conditions Service pilot in 2023, with 88 per cent having their needs met at a pharmacy
When pharmacist treatment scope is widened for chest infections, ear infections, skin infections, acute pain, sore throats, tonsillitis, school sores, styes, gout, osteoarthritis, vaginal thrush and period pain, with STI self-swab testing
Then those patients can be treated at the pharmacy under rules for when a doctor is still needed
Outcome they do not join the GP queue for conditions pharmacists can safely treat
But cases that need a doctor still bounce back

Scenario: The five-pharmacy ownership cap and proximity restrictions are removed
Given barriers preventing new pharmacies from opening include the five-pharmacy ownership cap and proximity restrictions
When those barriers are removed while licensing red tape is cut
Then an owner who already holds several pharmacies may open more without the five-pharmacy limit
Outcome chains can expand into sites proximity rules once blocked
But shoppers in thin markets may face fewer independent pharmacies as chains expand

Scenario: Stable chronic disease is monitored at the pharmacy
Given New Zealand has more than a thousand community pharmacies staffed by qualified health professionals whose skills are not fully used
When accredited pharmacists monitor stable hypertension, type 2 diabetes and high cholesterol and adjust medication within GP-set limits
Then blood tests and results sit in the shared health record while the GP keeps overall clinical responsibility
Outcome routine monitoring contact moves toward the pharmacy between GP reviews
But overall clinical responsibility remaining with the GP means accountability does not fully transfer
