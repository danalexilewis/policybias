---
type: spec
id: sverigedemokraterna-a-till-o-tillvaxtatgarder-derived
title: "Tillväxtåtgärder read as a system: en lista utan storlek, ordning eller vilken skatt"
status: draft
updated: 2026-08-23
summary: Tillväxten ska komma från många små och stora grepp på en gång; utan belopp, turordning och namngiven skatt går det inte att säga vem som får mer i plånboken eller när takten syns.
jurisdiction: SE
sources:
  - title: Tillväxtåtgärder
    url: https://www.sd.se/a-till-o/tillvaxtatgarder/
tags:
  - economy
derivesFrom: sverigedemokraterna-a-till-o-tillvaxtatgarder
party: sverigedemokraterna
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-tillvaxtatgarder.md
sourceDigest: sha256-b605a67e0f5a33a3
assumptions:
  - sänkt skattetryck utan namngiven bas är antingen lägre inkomstskatt, bolagsskatt, moms eller allt; incidensen skiljer sig
  - kortare tillstånd ökar värdet på projekt som redan är lönsamma; de skapar inte av sig själva den efterfrågan sidan vill se
  - drivkrafter från bidrag till arbete kräver att bidrag sänks, lön efter skatt höjs, eller båda; sidan säger inte vilket
  - tillväxt i världstoppen är ett mål mot andra länders utfall, inte ett åtagande staten styr ensam
lang: en
translationOf: sverigedemokraterna-a-till-o-tillvaxtatgarder-derived
translator: human
translatedAt: 2026-08-23
sourceSpecDigest: sha256-872895140982f634
---

# Our understanding

> Agendan är bred med flit: skatt, EU, bidrag, regler, tillstånd och FoU. Det är poängen på sidan — inget enskilt grepp räcker. Utan storlek och ordning är listan en riktning. Vem som betalar sänkningen, och hur snabbt tillväxten ska synas, står inte där.

System: Tillväxt som paket utan prislapp

Scenario: Skattetrycket sänks utan att basen namnges
Given skattetrycket ska sänkas för både privatpersoner och företag
When en hushållare eller ett bolag ska räkna på nästa år
Then sidan säger inte vilken skatt som rör sig, eller hur mycket
Outcome plånboken kan bli tyngre eller nästan oförändrad; båda ryms i texten

Scenario: Tillstånd kortas medan efterfrågan fortfarande är svag
Given perioden har präglats av lågkonjunktur och svag tillväxt
When tillståndsprocesser förkortas
Then projekt som redan väntar kan komma i gång fortare
But ny efterfrågan skapas inte av kortare kö till tillståndet
Outcome utbudssidan rör sig; takten i ekonomin kan ändå stanna vid konjunkturen
