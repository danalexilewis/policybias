---
type: spec
id: moderaterna-var-politik-lag-och-ordning-2-derived
title: "Forfeiture fund read as a system: proceeds to victims while the state bears the claims"
status: draft
updated: 2026-08-23
summary: The forfeiture fund promises victims of crime a share of proceeds while unpaid damages already sit with the Enforcement Authority, and security guards shift public order work from the police without increasing investigation capacity.
jurisdiction: SE
sources:
  - title: Lag och ordning
    url: https://moderaterna.se/var-politik/lag-och-ordning-2
tags:
  - crime-and-justice
derivesFrom: moderaterna-var-politik-lag-och-ordning-2
party: moderaterna
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-lag-och-ordning-2.md
sourceDigest: "sha256-b1746dd87725aac2"
assumptions:
  - the forfeiture fund only receives what is actually forfeited, which the policy does not dimension
  - security guards can handle public order disturbances but not investigate serious crime
  - criminalisation of economic and psychological violence requires investigation resources that the policy does not add
lang: en
translationOf: moderaterna-var-politik-lag-och-ordning-2-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-9d69a7098690d0ba
---

# Our understanding

> The forfeiture fund shares proceeds that are not yet forfeited. Security guards shift public order work from the police without increasing investigation capacity. New offences against women require investigation that the policy does not dimension.

System: Forfeiture, public order guards and new offences without extra capacity

Scenario: The forfeiture fund meets unpaid damages
Given 46,000 people have unpaid debts of over 10 billion kronor in criminal damages
When forfeited criminal proceeds go to a fund for victims of crime
Then the victim can receive support from forfeited assets
Outcome the fund only covers what is actually forfeited
But the victim still bears unpaid damages that the Enforcement Authority does not collect

Scenario: Security guards take public order disturbances without more investigators
When security guards complement police and municipal enforcement officers
Then public order disturbances can be handled locally
Outcome the police can focus on serious crime
But investigation queues remain if police resources are not shifted to investigation
