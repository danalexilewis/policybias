---
type: spec
id: sverigedemokraterna-a-till-o-karnkraft-derived
title: "Kärnkraft read as a system: staten bär risken, elen kommer senare"
status: draft
updated: 2026-08-23
summary: Hinder är undanröjda och staten delar risken; politiken medger att återställningen tar tid, men säger inte hur stor räkningen är eller när reaktorerna levererar.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://www.sd.se/a-till-o/karnkraft/
tags:
  - energy
derivesFrom: sverigedemokraterna-a-till-o-karnkraft
party: sverigedemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-karnkraft.md
sourceDigest: "sha256-130bdb28f2c90232"
assumptions:
  - statlig riskdelning betyder att skattebetalare tar en del av förlusten om projektet spricker; politiken säger inte hur stor andelen är
  - nya reaktorer tar mer än en mandatperiod; hushållens prisnivå nu styrs inte av reaktorer som inte är byggda
  - halva kärnkraften är politikens baslinje för förlusten, inte en oberoende energibalans
  - undanröjda hinder tar bort laghinder; de tar inte bort kapitalkostnad, lokalt motstånd eller nätkapacitet
---

# Our understanding

> Politiken har redan flyttat risk till staten och röjt undan hinder. Det är insatsen. Ny el i uttag är utfallet, och politiken säger att det tar tid. Hushåll och företag som förlorade på nedläggningen väntar på kapacitet som ännu inte finns. Räkningen för riskdelningen är öppen.

System: Risk på staten, effekt senare

Scenario: Ett kärnkraftsprojekt drar över budget
Given omfattande statlig riskdelning erbjuds
When kostnaderna stiger
Then en del av förlusten landar på det offentliga
Outcome hushållen bär risken som skattebetalare innan de ser ny effekt

Scenario: Elpriset i vinter, innan ny kärnkraft finns
Given det tar tid att återställa systemet
When ett hushåll ska betala elräkningen nu
Then ny kärnkraft levererar ännu inte den trygga el och effekt politiken utlovar
Outcome prisnivå och robusthet är ett återställningsmål, inte ett nuläge
