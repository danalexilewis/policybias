---
type: spec
id: liberalerna-politik-skola-derived
title: "Statlig skola läst som system: tre kostnadsposter på en oprissatt budget"
status: draft
updated: 2026-08-23
summary: Klasstak, extra grupper för särskilt stöd och ett statligt övertagande kräver alla personal och rum politiken inte kostar, medan vinstavveckling fortfarande behåller skolvalet.
jurisdiction: SE
sources:
  - title: Skola – Liberalerna
    url: https://www.liberalerna.se/politik/skola
tags:
  - education
derivesFrom: liberalerna-politik-skola
party: liberalerna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-skola.md
sourceDigest: "sha256-98b3de6782b86ec2"
assumptions:
  - ett klasstak utan elevantal tvingar ändå anställning eller delning av grupper när ett tak väl sätts
  - att flytta kommunala skolor till staten flyttar löneräkningen från kommunalskatt till statsbudgeten
  - att fasa ut vinst och behålla valet betyder att ägare lämnar eller ombildar; politiken säger inte vilket
  - att ta bort surfplattor i tidiga år höjer resultat bara om tryckta böcker och lärartid faktiskt kommer
---

# Our understanding

> Mindre klasser, separata hjälpsgrupper och spår för särbegåvade kräver alla extra rum och lärare. Ett statligt övertagande flyttar den notan till centrum. Att sluta med vinst i friskolor och behålla valet är ett ägarskifte, inte en ny pedagogik.

System: Klassstorlek, ägande och skärmar som ett bemanningskrav

Scenario: En full klass slår i ett onamngivet tak
Given mindre klasser ger mer studiero och bättre resultat
And ett tak för elever per klass ska införas
When taket binder
Then grupper delas eller extra lärare anställs
Outcome studiero kan stiga där rum finns
But politiken anger aldrig talet som utlöser delningen

Scenario: En kommunal skola byter ägare
Given kommunpolitiker inte ska kunna nedprioritera skolan
When ansvaret flyttas från kommuner till staten
Then finansieringsregler och anställning sitter hos centrum
Outcome kvaliteten ska variera mindre över landet
But lokal skatt betalar inte längre samma nota, och ersättningsströmmen är onamngiven
