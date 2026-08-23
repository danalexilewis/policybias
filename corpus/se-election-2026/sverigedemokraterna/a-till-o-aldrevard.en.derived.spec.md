---
type: spec
id: sverigedemokraterna-a-till-o-aldrevard-derived
title: "Äldrevård read as a system: språket och lyftet, medan avstängningen saknas"
status: draft
updated: 2026-08-23
summary: Sidan namnger vanvård och övergrepp, men svaret är kompetensstöd och språkkrav; den som ska avlägsna en misstänkt förövare från golvet är fortfarande kommunen, utan ny makt.
jurisdiction: SE
sources:
  - title: Äldrevård
    url: https://www.sd.se/a-till-o/aldrevard/
tags:
  - elderly-care
derivesFrom: sverigedemokraterna-a-till-o-aldrevard
party: sverigedemokraterna
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-aldrevard.md
sourceDigest: sha256-88ef1be8fd01a72b
assumptions:
  - språkkrav höjer tröskeln för nyanställning mer än de avlägsnar den som redan är anställd och misstänkt
  - Äldreomsorgslyftet är stöd till kompetensutveckling, inte en inspektion och inte ett avskedande
  - kommunen är fortfarande huvudman; "prioritera högre" utan ny ram eller omfördelning betyder att något annat i budgeten får vika
  - tystade övergrepp är ett tillsyns- och anmälningsproblem; sidan ger inget nytt tillsynsorgan
lang: en
translationOf: sverigedemokraterna-a-till-o-aldrevard-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-f9a0d4a270ce7308
---

# Our understanding

> Vanvården och övergreppen är beskrivna. Svaret är ett kompetenslyft och hårdare språkkrav, plus att kommunen ska bry sig mer. Den som ska ta en misstänkt förövare ur tjänst är samma kommun som redan tillåtit personen att stanna. Språket kan spärras vid dörren. Det stoppar inte den som redan har nyckel.

System: Kompetens och språk där avstängning skulle behövas

Scenario: En misstänkt förövare har redan en tjänst
Given misstänkta förövare tillåts arbeta kvar
When hårdare språkkrav och Äldreomsorgslyftet fortsätter
Then personal kan kompetensutvecklas och nyrekrytering kan kräva bättre svenska
But sidan säger inte att den misstänkte ska stängas av
Outcome tryggheten för den äldre beror fortfarande på kommunens vilja att avlägsna personen

Scenario: Kommunen ska prioritera äldrevården högre
Given kommunerna har mycket kvar att göra
When äldrevården ska gå före annat i samma kassa
Then trygghet och kvalitet utlovas
But vad som får stå tillbaka — skola, barnomsorg eller skatt — sägs inte
Outcome prioriteringen är ett mål utan budgetpost
