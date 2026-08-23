---
type: spec
id: socialdemokraterna-var-politik-a-till-o-skola-och-utbildning-derived
title: "Vinstförbud och skolpeng read as a system: små klasser belånas mot koncernvinster som kan försvinna"
status: draft
updated: 2026-08-23
summary: Fler lärare i de tidiga åren finansieras med vinster som försvinner när uttag förbjuds, så den löpande kostnaden måste bäras av en omgjord skolpeng eller av kommunerna.
jurisdiction: SE
sources:
  - title: Skola och utbildning
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/skola-och-utbildning
tags:
  - education
derivesFrom: socialdemokraterna-var-politik-a-till-o-skola-och-utbildning
party: socialdemokraterna
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-skola-och-utbildning.md
sourceDigest: sha256-6ef050b90790654f
assumptions:
  - vinst som en gång förbjudits kan inte fortsätta betala fler lärare; det är ett engångsflöde mot en stående kostnad
  - en omgjord skolpeng som tar bort överkompensation sänker intäkten för fristående huvudmän och kan stänga skolor
  - förbud mot religiösa friskolor flyttar elever till andra huvudmän som måste ha platser
  - bindande lärartäthet på lågstadiet kräver rekrytering som inte följer av förbudet
---

# Our understanding

> Små klasser och fler lärare i de tidiga åren ska betalas med koncernvinster. När uttag förbjuds upphör den källan, medan lärarna kvarstår som kostnad. Skolpengen som inte längre överkompenserar friskolor flyttar pengar, men tar inte fram lärare. Religiösa friskolor som stängs lämnar elever som någon annan måste ta emot.

System: Förbud mot uttag mot stående lärarkostnad

Scenario: Koncernvinsten som skulle betala små klasser försvinner
Given små klasser för små barn som ska finansieras med skolkoncernernas vinster
When vinstuttag förbjuds
Then flödet som skulle betala lärarna upphör
Outcome den löpande kostnaden för fler lärare måste bäras någon annanstans
But koncernen har inte längre vinst att flytta till undervisning

Scenario: En friskola förlorar överkompensationen i skolpengen
Given en skolpeng som överkompenserar friskolor
When skolpengen görs om
Then intäkten per elev sjunker för den fristående huvudmannen
Outcome likvärdigheten kan öka genom omfördelning
But skolor med knappa marginaler kan stänga innan de kommunala platserna finns

Scenario: Elever lämnar en religiös friskola
Given religiösa friskolor som ska förbjudas
When förbudet träder in
Then eleverna behöver en annan skola
Outcome huvudmannen med platser bär mottagandet
But förbudet säger inte var de platserna finns
