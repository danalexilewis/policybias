---
type: spec
id: act-disrupt-the-class-leave-the-class-derived
title: "Removal powers read as a system: supervised spaces with an unnamed staff bill"
status: draft
updated: 2026-08-21
summary: Directing disruptive students to staffed spaces works only if those spaces are staffed, and parent fines plus damage debt shift cost onto families while the supervision payroll stays unpriced in the policy.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/disrupt-the-class-leave-the-class
tags:
  - education
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/disrupt-the-class-leave-the-class.md
derivesFrom: act-disrupt-the-class-leave-the-class
assumptions:
  - a staffed supervised space requires adults present whenever removals happen; that payroll is a real cost even though the policy states none
  - parent fines and damage debts transfer some disruption cost from the school to families
  - empty or lockable rooms are banned, so schools cannot meet the duty by isolating students without supervision
  - no estimate of removal volume is given, so the scale of the staffing need is unknown
sourceDigest: "sha256-0de4f3c8a8f3ab84"
---

# Our understanding

> Teachers gain an explicit removal power and removed students stay supervised. That supervision only works if staff are in the pastoral office, dean's room or learning-support room. Parent fines and damage recovery move money onto families.

System: Classroom removal below stand-down with supervised holding

Scenario: A teacher removes a disruptive student to a supervised space
Given around half of teachers deal with disruption in every lesson
And Forty-seven per cent of teachers lose 40 to 50 minutes or more each day responding to challenging behaviour
When a teacher directs a seriously or persistently disruptive student to leave and report to a staffed, supervised space
Then the student is held in a pastoral office, dean's room or learning support room, not an empty or lockable room
Outcome the class continues without that student present
But someone must staff the supervised space whenever removals happen

Scenario: A parent misses a mandatory meeting or a student causes deliberate damage
Given a parent or guardian meeting is required when behaviour becomes serious or repeated or when a student refuses a lawful direction to leave
When a parent misses a mandatory meeting without reasonable excuse, or deliberate property damage is unpaid
Then a fine may apply and schools may recover damage costs as a debt
Output a parent who misses a mandatory meeting without reasonable excuse may be fined up to $300 for a first offence and up to $3,000 for a later offence
Outcome some of the cost of disruption and damage shifts onto parents
But schools must pay supervision staff without a named payroll line

Scenario: Reasonable force follows a second refusal after escalation
Given a refusal is escalated to a dean or senior leader
When the student refuses a second lawful direction after that escalation
Then staff may use reasonable force to remove the student
Outcome corporal punishment remains illegal and empty rooms stay banned
But schools carry training and liability risk whenever staff use force on a second refusal
