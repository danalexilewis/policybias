---
type: spec
id: moderaterna-var-politik-lag-och-ordning-2-derived
title: "Straffskärpning read as a system: platser fylls av längre straff med eftersläpning"
status: draft
updated: 2026-08-22
summary: Polisbudget och fängelseplatser är en utbyggnad som redan pågår, medan längre straff fyller platserna med fördröjning och staten tar brottsfordringarna.
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
  - 40 procent högre polisanslag 2023-2027 är en bana i anslaget, inte ett nytt vallöfte från noll
  - 5 200 platser måste vara bemannade innan avskaffad mängdrabatt och dubbla gängstraff syns i beläggningen
  - staten som förstahandsbetalare av skadestånd bär 10 miljarder i fordringar tills Kronofogden driver in dem
  - 60 procent färre skjutningar är ett utfall som redan räknas hem, så nya verktyg motiveras av en trend som redan vänt
---

# Our understanding

> Polisanslag och fängelseplatser byggs ut längs en redan lagd bana. Längre straff och avskaffad mängdrabatt fyller platserna med eftersläpning. När staten betalar skadeståndet först ligger fordringarna hos skattebetalarna tills de drivs in. Färre skjutningar är redan ett redovisat utfall.

System: Kapacitet, strafftid och vem som bär fordran

Scenario: Straffen förlängs innan platserna är bemannade
Given Kriminalvårdens budget ska mer än fördubblas från 14 till 31.5 miljarder kronor
And antalet platser ska öka med 5 200
When mängdrabatten avskaffas och gängkriminella får dubbla straff
Then fler dömda ska sitta längre
Outcome beläggningen stiger med fördröjning efter att domarna vunnit laga kraft
But intagna bär trängseln om platserna inte hunnit bemannas

Scenario: Staten tar brottsfordran från offret
Given 46 000 personer har obetalda skulder på över 10 miljarder kronor för brottsskadestånd
When staten betalar ut skadeståndet och själv driver in pengarna
Then offret slipper jaga gärningspersonen
Outcome fordran flyttas till det offentliga tills den är indriven
But skattebetalarna bär beloppet som inte går att mäta ut
