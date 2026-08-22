---
type: spec
id: act-public-safety-derived
title: "Accredited Security Operators read as a system: state-like powers on private premises without being Police"
status: draft
updated: 2026-08-21
summary: Licence holders can compel identity, exclude people, and condition entry on consent searches on private premises, while remaining private operators who are not Police.
jurisdiction: NZ
sources:
  - title: ACT New Zealand
    url: https://www.act.org.nz/public-safety
tags:
  - crime-and-justice
party: act
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/nz-election-2026/act/public-safety.md
derivesFrom: act-public-safety
assumptions:
  - name, address, detention until Police arrive, exclusion notices, removal, limited force and consent searches are coercive tools usually associated with the state, even when the licence holder is private
  - the policy limits these powers to private premises, so public streets remain outside the licence unless another power applies
  - a consent search where refusal means no entry is still a gatekeeping power over who may enter shared commercial space
  - accountability, complaints and use-of-force review for licence holders differ from Police processes unless a later statute says otherwise
sourceDigest: "sha256-ed8940b2f0ae12e1"
---

# Our understanding

> Accredited Security Operators on private premises can compel identity, exclude people and condition entry on consent searches while remaining private operators who are not Police. Communities gain authority until Police arrive; oversight differs from Police processes.

System: Private licence holders with coercive tools on private premises

Scenario: An operator stops a person on private premises
Given security officers currently have no more authority than any other citizen
And Police cannot respond quickly to every call
When a licenced Accredited Security Operator requires name and address and the person refuses and will not leave
Then the operator may detain them until Police arrive
Outcome the person faces a coercive stop from someone who is not a Police officer
But the stop sits on private premises, not on a public street

Scenario: A conduct-based exclusion notice is issued
Given retail crime costs the sector $2.6 billion a year according to Retail NZ's Crime Report
When an Accredited Security Operator issues a conduct-based exclusion notice
Then the notice can run across multiple premises held by the same association
Output exclusion notices enforceable for up to three years on a register under the Privacy Act
Outcome a person can be barred from a strip of shops without a court sentence
But the bar is private-premises exclusion, not a criminal conviction

Scenario: Entry is offered only if a search is accepted
When a venue requires a consent-based safety search as a condition of entry
Then refusing the search means no entry
Outcome operators can keep weapons and contraband out of the premises
But people who will not consent are turned away by a private gate, not by Police
