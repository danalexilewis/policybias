---
type: spec
id: socialdemokraterna-var-politik-a-till-o-invandring-och-integration-derived
title: "Establishment permit and EBO ban read as a system: the state takes the housing and conditions the right to stay"
status: draft
updated: 2026-08-23
summary: Abolished EBO moves asylum seekers to state places that must exist, and an establishment permit makes stay conditional without saying what happens when the requirements are failed.
jurisdiction: SE
sources:
  - title: Invandring och integration
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/invandring-och-integration
tags:
  - immigration
derivesFrom: socialdemokraterna-var-politik-a-till-o-invandring-och-integration
party: socialdemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-invandring-och-integration.md
sourceDigest: sha256-e1eae0784fcac3ab
assumptions:
  - state reception housing requires places, staff and municipalities that receive; the ban on EBO does not create the rooms
  - an establishment permit without a stated consequence when the language or civics requirement is failed leaves expulsion or extension open
  - an activity duty for everyone on income support hits more than newcomers, including those who are already citizens
  - the EU minima set a floor for asylum, not a ceiling on how fast returns can happen
lang: en
translationOf: socialdemokraterna-var-politik-a-till-o-invandring-och-integration-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-01025563c0f05731
---

# Our understanding

> The EBO ban removes the applicant's choice of housing and presupposes that the state has rooms. The establishment permit makes stay conditional on Swedish and civics, but the silence about a failed requirement is the mechanism: the right to stay can be withdrawn without it being said. The activity duty reaches those on income support however long the person has lived here. The Sweden negotiation promises that vulnerable areas are to disappear, without a map.

System: State housing and conditional residence

Scenario: An asylum seeker can no longer choose their own housing
Given EBO which lets the applicant arrange their own housing
When EBO is abolished
Then the applicant is assigned a state reception home
Outcome overcrowding in vulnerable areas can fall
But the assignment only works if the place exists

Scenario: An establishment permit is tested against a language requirement
Given permanent residence permits that are replaced by an establishment permit with requirements in Swedish and civics
When the requirements are not met
Then the path to citizenship stops
Outcome integration is made conditional
But the consequence for those who fail is not given

Scenario: Those on income support meet an activity duty
Given a compulsory activity duty for everyone on income support
When the duty is introduced
Then those who can work are to enter a jobs ladder
Outcome the benefit is tied to activity
But the duty also hits those who are not newly arrived
