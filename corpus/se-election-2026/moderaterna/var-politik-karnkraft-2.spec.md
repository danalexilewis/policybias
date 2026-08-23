---
type: spec
id: moderaterna-var-politik-karnkraft-2
title: Statligt stöd och ägande för ny kärnkraft
status: draft
updated: 2026-08-22
summary: Energimålet är fossilfri el, staten lånar ut till nya reaktorer och har blivit majoritetsägare i projektet vid Ringhals, med sikte på att elproduktionen ska kunna fördubblas till 2045.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://moderaterna.se/var-politik/karnkraft-2
tags:
  - energy
party: moderaterna
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-karnkraft-2.md
sourceDigest: "sha256-37aa13211a357b27"
gaps:
  - hur stor låneramen är och till vilken ränta företagen lånar anges inte
  - vilket elpris staten garanterar i de långsiktiga avtalen anges inte
  - när första spadtaget och första reaktorn ska vara i drift anges inte
  - hur stor andel av fördubblingen till 2045 som ska komma från SMR respektive stora reaktorer anges inte
---

# What the page states

> Sverige behöver ny kärnkraft som baskraft för att pressa elpriserna, stärka industrin och elektrifiera. Målet är fossilfri el, inte bara förnybar. Staten lånar ut, delar risk och har gått in som majoritetsägare vid Ringhals så att reaktorer ska kunna byggas.

System: Statlig finansiering och ägande av ny kärnkraft

Scenario: Ett bolag vill bygga ny kärnkraft
Given energimålet har ändrats från 100 procent förnybar till 100 procent fossilfri elproduktion
And begränsningar mot fler reaktorer och fler etableringsplatser har avskaffats
When företaget söker statligt stöd ur låneramen
Then pengarna ska betalas tillbaka när kraftverken finns på plats
And tillståndsprocesserna ska vara enklare
Outcome det ska vara enkelt, attraktivt och lönsamt att etablera kärnkraft

Scenario: Staten tar plats i projektet vid Ringhals
Given staten har blivit majoritetsägare i Videberg Kraft som planerar nya reaktorer vid Ringhals
And villkor för lån, riskdelning och långsiktiga elprisavtal är överenskomna
And Blykalla och Studsvik AB har ansökt om att ta del av låneramen
When leveransfasen tar vid
Then spadtag ska kunna tas för nya reaktorer
And elmarknaden ska premiera stabilitet, effekt och leveranssäkerhet, inte bara producerade kilowattimmar
And elnätsutbyggnaden ska snabbas upp
Outcome elproduktionen ska kunna fördubblas till 2045 så att elektrifiering och nettonoll blir möjliga
