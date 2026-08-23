---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg-derived
title: "National care brokerage read as a system: queues move to wherever a slot exists"
status: draft
updated: 2026-08-23
summary: A nationwide booking layer shortens waits only where unused capacity already exists; it does not create staff.
jurisdiction: SE
sources:
  - title: Vård och omsorg
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/vard-och-omsorg
tags:
  - healthcare
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg
party: centerpartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg.md
sourceDigest: sha256-48f21b7d2664eaa5
assumptions:
  - a brokerage matches patients to spare slots; it does not add doctors or nurses
  - rural clinics with no unused capacity cannot honour a nationwide choice right
  - a mix of public and private providers shortens waits where private supply exists, and sorts by ability to navigate where it does not
  - a named GP is a continuity claim that still needs a headcount the policy does not fund
lang: en
translationOf: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-vard-och-omsorg-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-af8981cc34351712
---

# Our understanding

> Choice plus a national broker relocates demand to whoever has a free slot. Geography still binds if the clinic has no capacity to offer. Private providers can cut waits where they already operate, and leave thin areas as they are. Better career paths for staff are named without a wage or hours instrument.

System: Care brokerage as a matching layer over existing capacity

Scenario: A patient in a long regional queue is offered a slot in another county
Given waiting lists that differ by county
And a brokerage that lets a patient seek care anywhere in the country
When the patient takes a slot far from home
Then the home-county queue shortens by one
Outcome the wait falls for those who can travel
But clinics with no spare staff cannot take the overflow

Scenario: A rural clinic has no unused appointments
Given a right to choose any provider
And a clinic that is already fully booked
When a local patient asks for a named GP there
Then the continuity promise meets a full list
Outcome the named-GP right is a claim on workforce the policy does not enlarge here
But patients in thin areas still wait on whoever is left
