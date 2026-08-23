---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-utbildning-derived
title: "Mål om behöriga lärare läst som system: ett tioårigt lagerproblem med en öppen yrkesdörr"
status: draft
updated: 2026-08-23
summary: Att fylla varje klassrum med behörig lärare är ett pipeline- och geografiproblem; att öppna yrkesprogram utan godkänt i kärnämnen byter slutförande mot en skicklighetsbotten.
jurisdiction: SE
sources:
  - title: Utbildning
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/utbildning?open.12_46b9bcc319684ded02b1159=true
tags:
  - education
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-utbildning
party: centerpartiet
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-utbildning.md
sourceDigest: "sha256-e9ef73f28d1c270b"
assumptions:
  - lärarbehörighet är ett lager; ett tioårigt mål behöver utbildningsplatser och retention som politiken inte storleksätter
  - landsbygdsskolor som redan kämpar att anställa når målet sist om inte lön eller placering ändras
  - mindre klasser utan fler lärare innebär färre timmar eller större grupper någon annanstans
  - yrkesinträde utan godkänt i kärnämnen höjer slutförandet och sänker botten de programmen kan förutsätta
---

# Our understanding

> Politiken börjar från en skola som redan slår OECD-genomsnittet i Pisa, och namnger sedan luckorna: ofullständiga betyg, för få behöriga lärare, ojämn geografi. En tioårig behörighetsregel är en personalplan utan personantal. Att öppna yrkesprogram för elever som underkändes i kärnämnen är en slutförandeväg som också förändrar vad de programmen kan undervisa.

System: Lärartillgång och en sänkt yrkesgrind

Scenario: En skola i en tunn arbetsmarknad saknar fortfarande behörig personal nära deadline
Given för få behöriga lärare i hela landet
And anställning som är svårare utanför städerna
When deadline att varje lärare ska vara behörig infaller
Then vissa klassrum är fortfarande otäckta
Outcome målet binder först där sökande redan finns
But elever i tunna områden väntar på en pipeline som politiken inte finansierar

Scenario: En elev utan godkänt i kärnämnen går in i ett yrkesprogram
Given en grind som brukade kräva godkänt i kärnämnen
When den grinden öppnas
Then fler elever stannar i gymnasiet
Outcome en slutförandeväg finns för dem betygsgrind stängde ute
But programmet måste undervisa från en lägre gemensam botten
