---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-forsvar-derived
title: "3.5 percent of GDP read as a system: an envelope without a force structure"
status: draft
updated: 2026-08-23
summary: The headline is a budget share, not a list of brigades; whole-country presence, civilian defence and a further NATO target all draw on the same unset split.
jurisdiction: SE
sources:
  - title: Försvar
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/forsvar
tags:
  - defence
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-forsvar
party: centerpartiet
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-forsvar.md
sourceDigest: sha256-b0f5ec315fd09591
assumptions:
  - 3.5 percent of GDP is an envelope; kit, pay and civilian stocks compete inside it
  - garrisoning the whole country spreads force that a concentrated defence would mass
  - extra NATO targets beyond 3.5 percent, to be met as soon as practical, are an open-ended second bill
  - civilian defence in municipalities is named without a share of the envelope
lang: en
translationOf: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-forsvar-derived
translator: cursor-agent
translatedAt: 2026-08-23
sourceSpecDigest: sha256-34b2b81ad3f52878
---

# Our understanding

> Russia's war is the given. The spend target of 3.5 percent of GDP is the measurable offer, plus a promise to chase further NATO goals when practical. Presence in every environment, from southern plains to northern forests, is a geographic claim that costs posts and people. Civilian defence through municipalities and regions is a second claim on the same envelope. Volunteers are asked to carry local resilience. None of the splits is stated.

System: A GDP share claimed by several missions at once

Scenario: The envelope is divided among presence, kit and civilian stocks
Given a defence budget set as a share of GDP
When army, navy, air force and municipalities all draw on it
Then each mission can be named without a kronor split
Outcome the share can be hit while some of the named tasks stay thin
But a reader cannot see which task loses

Scenario: A further NATO target is due as soon as practical
Given that GDP share already promised
When the extra NATO goal is added
Then the timetable is the phrase as soon as practical
Outcome the second bill has no year
But the first envelope is already claimed by presence and civilian defence
