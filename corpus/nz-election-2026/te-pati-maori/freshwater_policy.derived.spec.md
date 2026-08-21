---
type: spec
id: te-pati-maori-freshwater-policy-derived
title: "Freshwater read as a system: Māori consent with unnamed benefit share"
status: draft
updated: 2026-08-21
summary: Asserting Māori authority and requiring consent change who can approve water decisions, but fair benefit sharing has no named share, so commercial and community winners stay unidentified.
jurisdiction: NZ
sources:
  - title: Freshwater Policy
    url: https://www.maoriparty.org.nz/freshwater_policy
tags:
  - environment
  - maori-affairs
party: te-pati-maori
clusters:
  - maori-affairs
money: no-figure
sourcePath: corpus/nz-election-2026/te-pati-maori/freshwater_policy.md
derivesFrom: te-pati-maori-freshwater-policy
assumptions:
  - Māori authority over freshwater needs a legal form: ownership, co-governance, veto or something else; the policy asserts authority without picking the form
  - consent that can stop a decision needs a defined decision set and a consenting body; without those, "without Māori consent" is incomplete
  - fair benefit sharing can mean royalties, free allocation, equity stakes or community funds; incidence differs by design and no share is stated
  - we introduce no figure, because the policy contains none to work from
sourceDigest: "sha256-c613257c7b24fad0"
---

# Our understanding

> The policy asserts Māori rights and authority, stops decisions without Māori consent, and shares benefits fairly. The consent machinery and the benefit share stay unnamed.

System: Consent power without a named share of benefits

Scenario: Māori rights and authority over freshwater are asserted
Given water that carries whakapapa and sustains whenua and generations
And no legal mechanism named
When Māori authority is asserted
Then ownership, co-governance, veto or another form must still be chosen
Outcome decisions about wai can sit with those who carried responsibility
But until the form is chosen, authority is a claim without a lever

Scenario: Decisions cannot proceed without Māori consent
Given an intention that decisions are not made without Māori consent
And no list of which decisions and no consenting body
When a water take, discharge or allocation is proposed
Then someone must be able to grant or withhold consent
Outcome Māori can block or allow named uses if that machinery exists
But without it, consent is an aspiration

Scenario: Benefits are shared fairly
Given an intention that resources are protected and benefits shared fairly
And no share, formula or recipient class
When water creates commercial or community value
Then how much goes to which Māori and non-Māori interests must still be set
Outcome fair share is the named outcome
But the unnamed benefit share leaves winners and payers unidentified
