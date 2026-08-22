---
type: spec
id: act-student-services-fee-derived
title: "Voluntary fees read as a system: services lose a compulsory levy"
status: draft
updated: 2026-08-21
summary: Making the Student Services Fee a menu up to the current cap ends the compulsory levy that funded university services, so opt-outs shrink the guaranteed revenue pool.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/student_services_fee
tags:
  - education
  - cost-of-living
party: act
clusters:
  - family-income
money: named-figure
sourcePath: corpus/nz-election-2026/act/student_services_fee.md
derivesFrom: act-student-services-fee
assumptions:
  - a compulsory fee is a levy that funds services whether or not each student uses them
  - when the fee becomes voluntary, students who opt out stop contributing to that levy
  - services that relied on the compulsory pool then face a smaller guaranteed revenue base
  - user-pays for unchosen services shifts cost onto those who still want them, at prices the policy does not set
sourceDigest: "sha256-ebcde03da21fe1cc"
---

# Our understanding

> Choice and loan relief end the compulsory levy that currently funds student services. Once the fee is a menu, universities lose guaranteed revenue from students who opt out.

System: Student services funded by choice instead of a levy

Scenario: A student faces the annual fee as a menu
Given every domestic university student currently pays a compulsory Student Services Fee of up to $1,253 a year on top of tuition
When the regulations are amended so universities must offer student services as a menu
Then the student selects and pays only for chosen services
Output up to around $4,000 saved on a student loan over a three-year degree for a student who takes none of the menu
Outcome the compulsory levy for that student ends

Scenario: University services lose compulsory contributions
Given services from fitness facilities to students unions and student media are currently funded through the compulsory fee
When many students decline those items on the menu
Then those services no longer receive a guaranteed contribution from every enrolled domestic student
Outcome unchosen services remain available only on user-pays terms
But service budgets shrink when students opt out of the menu

Scenario: The taxpayer subsidy on student debt shrinks with smaller loans
Given student loans are subsidised by the taxpayer
When fewer students borrow for a compulsory fee they no longer owe
Then the subsidised debt stock grows more slowly for that component
Outcome the taxpayer saves money on fee-related loan subsidy
But only to the extent students actually opt out
