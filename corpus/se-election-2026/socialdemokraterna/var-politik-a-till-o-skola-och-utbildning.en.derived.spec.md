---
type: spec
id: socialdemokraterna-var-politik-a-till-o-skola-och-utbildning-derived
title: "Profit ban and school voucher read as a system: small classes are borrowed against group profits that can disappear"
status: draft
updated: 2026-08-23
summary: More teachers in the early years are financed with profits that disappear when extraction is banned, so the running cost must be borne by a recast school voucher or by the municipalities.
jurisdiction: SE
sources:
  - title: Skola och utbildning
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/skola-och-utbildning
tags:
  - education
derivesFrom: socialdemokraterna-var-politik-a-till-o-skola-och-utbildning
party: socialdemokraterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-skola-och-utbildning.md
sourceDigest: sha256-6ef050b90790654f
assumptions:
  - profit once banned cannot keep paying for more teachers; it is a one-off flow against a standing cost
  - a recast school voucher that removes overcompensation lowers revenue for independent principals and can close schools
  - a ban on religious independent schools moves pupils to other principals who must have places
  - binding teacher density in the early years requires recruitment that does not follow from the ban
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-skola-och-utbildning-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-a571746e5f885eb0
---

# Our understanding

> Small classes and more teachers in the early years are to be paid with group profits. When extraction is banned that source ends, while the teachers remain as a cost. The school voucher that no longer overcompensates independent schools moves money, but does not produce teachers. Religious independent schools that close leave pupils whom someone else must receive.

System: A ban on extraction against a standing teacher cost

Scenario: The group profit that was to pay for small classes disappears
Given small classes for small children that are to be financed with the school groups' profits
When profit extraction is banned
Then the flow that was to pay the teachers ends
Outcome the running cost of more teachers must be borne somewhere else
But the group no longer has profit to move to teaching

Scenario: An independent school loses the overcompensation in the school voucher
Given a school voucher that overcompensates independent schools
When the school voucher is recast
Then revenue per pupil falls for the independent principal
Outcome equivalence can increase through redistribution
But schools with thin margins can close before the municipal places exist

Scenario: Pupils leave a religious independent school
Given religious independent schools that are to be banned
When the ban takes effect
Then the pupils need another school
Outcome the principal with places bears the reception
But the ban does not say where those places are
