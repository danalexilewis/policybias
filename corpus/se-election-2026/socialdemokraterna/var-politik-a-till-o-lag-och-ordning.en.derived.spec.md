---
type: spec
id: socialdemokraterna-var-politik-a-till-o-lag-och-ordning-derived
title: "Mafia law and police target read as a system: collective liability hits the top while the headcount waits for a later year"
status: draft
updated: 2026-08-23
summary: Collective criminal liability and double sentences can bite now, while 50 000 staff in the Police is a target well ahead and the confiscation fund presupposes profits already seized.
jurisdiction: SE
sources:
  - title: Lag och ordning
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/lag-och-ordning
tags:
  - crime-and-justice
derivesFrom: socialdemokraterna-var-politik-a-till-o-lag-och-ordning
party: socialdemokraterna
clusters:
  - crime-justice
money: named-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-lag-och-ordning.md
sourceDigest: sha256-adf544b3811ed04c
assumptions:
  - a staffing target several years ahead does not change the watch tonight; recruitment and training take time
  - collective criminal liability presupposes that the court can tie the individual to the gang, which is a question of proof
  - double sentences increase prison time and occupancy before new police stations in sparsely populated areas are staffed
  - a confiscation fund can only pay out what has actually been seized
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-lag-och-ordning-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-33b685d5532baf1b
---

# Our understanding

> The mafia law and the double sentences can operate as soon as they apply. The police target lies further ahead, so sparsely populated areas can keep remaining stations without the headcount being filled. The confiscation fund gives crime-hit areas only what has already been taken from the profits. An electronic tag and a companion hit the young person, not the gang leader.

System: Sentences that bite now against a headcount that comes later

Scenario: A gang is charged under the mafia law before the Police have reached the target
Given collective criminal liability for gang leaders and a target of more staff further ahead
When the gang leaders are prosecuted
Then liability can fall on more than the person who held the weapon
Outcome the top can be reached without the street headcount being filled
But the burden of proof for the link to the gang remains

Scenario: The prisons receive double sentences
Given double sentences for gang criminals
When more people are sentenced to longer time
Then occupancy rises
Outcome deterrence increases
But the Prison and Probation Service bears the capacity that is not mentioned

Scenario: A crime-hit area waits for the confiscation fund
Given money from seized criminal profits for efforts in vulnerable areas
When the fund is to pay out
Then only realised seizures exist to distribute
Outcome civil society gets a flow that follows success against crime, not need
But a year without seizures gives a year without the effort
