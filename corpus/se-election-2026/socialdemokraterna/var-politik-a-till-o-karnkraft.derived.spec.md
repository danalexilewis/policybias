---
type: spec
id: socialdemokraterna-var-politik-a-till-o-karnkraft-derived
title: "Ny kärnkraft på befintliga orter read as a system: koncentration till tre platser och teknikneutralt stöd som konkurrerar med vinden"
status: draft
updated: 2026-08-23
summary: Att bara bygga där reaktorer redan står samlar avfall och acceptans, medan teknikneutralt stöd gör att kärnkraften får slåss om samma statliga pengar som annan fossilfri el.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/karnkraft
tags:
  - energy
derivesFrom: socialdemokraterna-var-politik-a-till-o-karnkraft
party: socialdemokraterna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-karnkraft.md
sourceDigest: sha256-2908cb23c25da6c2
assumptions:
  - befintlig lokal acceptans kan vända när avfallet och byggtiden blir synliga på nytt
  - teknikneutralt stöd till all storskalig fossilfri kraft späder ut beloppet per teknik
  - att Oskarshamn ytterst ägs av den tyska staten gör ett svenskt ägarköp till en förhandling, inte ett administrativt beslut
  - effekthöjning i gamla reaktorer skjuter fram, men tar inte bort, behovet av ersättare
---

# Our understanding

> Ny kärnkraft låses till tre orter där näten och vanan redan finns. Det minskar striden om nya kommuner, och samlar avfall och haveririsk. Teknikneutralt stöd betyder att reaktorn konkurrerar med annan fossilfri kraft om samma kassa. Kravet på svensk ägare i Oskarshamn är en affär mot en utländsk stat.

System: Tre orter och delad stödkassa

Scenario: En ny reaktor prövas bara i Ringhals, Oskarshamn eller Forsmark
Given infrastruktur och lokal acceptans där kärnkraft redan finns
When ny kärnkraft planeras
Then andra kommuner är uteslutna
Outcome staten behåller kontroll över lokaliseringen
But avfallet och haveririsken koncentreras till samma tre platser

Scenario: Stödet ska vara teknikneutralt
Given statligt stöd som kan utgå till all storskalig fossilfri kraftproduktion
When kärnkraft och annan fossilfri el söker samma stöd
Then beloppet per teknik beror på hur många som tar emot
Outcome kärnkraften är tillåten, inte garanterad finansiering
But utan belopp går det inte att veta om reaktorn bär sig

Scenario: Oskarshamn ska få svensk ägare
Given en reaktor som ytterst ägs av den tyska staten
When svenskt ägande ska säkras
Then affären avgörs av säljaren
Outcome rådigheten kan öka
But priset och villkoren är osagda
