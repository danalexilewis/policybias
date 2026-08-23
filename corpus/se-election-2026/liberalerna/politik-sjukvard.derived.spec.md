---
type: spec
id: liberalerna-politik-sjukvard-derived
title: "Namngiven läkarkontakt läst som system: en rätt utan bemanningsgolv"
status: draft
updated: 2026-08-23
summary: En namngiven läkare för varje patient och avlösning som rätt landar på samma arbetskraft politiken redan säger saknar kollegor.
jurisdiction: SE
sources:
  - title: Sjukvård – Liberalerna
    url: https://www.liberalerna.se/politik/sjukvard
tags:
  - healthcare
derivesFrom: liberalerna-politik-sjukvard
party: liberalerna
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-sjukvard.md
sourceDigest: "sha256-81e3a6b1e95b57b0"
assumptions:
  - en namngiven husläkarkontakt binder bara om liststorlek och timmar har tak; politiken slår fast rätten, inte taket
  - läkemedel mot sällsynta sjukdomar och extra sjukhuskollegor tävlar om samma budget politiken lämnar oprissatt
  - avlösning som laglig rätt är ett öppet kommunalt krav tills timmar och lön är satta
  - utbildningstid genom ett helt yrkesliv minskar mottagningstimmar om inte personalstyrkan ökar först
---

# Our understanding

> En namngiven läkare för varje patient är en schemaregel, inte en ny mottagning. Där listorna redan är fulla köar rätten bakom rekrytering. Avlösning som rätt och läkemedel mot sällsynta sjukdomar är extra krav mot samma obetalda glapp.

System: Namngiven kontakt som tävlar med en oprissatt arbetskraft

Scenario: En mottagning som fortfarande saknar kollegor tar på sig namngiven-kontakt-plikt
Given fler kollegor behövs på sjukhus och vårdcentraler i hela landet
And arbetsvillkoren måste förbättras påtagligt
When varje patient tilldelas en namngiven läkare
Then listtid reserveras för kontinuitet i stället för drop-in-volym
Outcome patienter med kronisk sjukdom får en stabil kontakt
But kvarvarande personal absorberar listorna tills rekryteringen landar

Scenario: En anhörig kräver avlösning som rätt
Given anhöriga behöver mer stöd och avlösning ska bli en rätt
When den anhörige bokar avlastning
Then kommunen måste hitta täckning i stället för att erbjuda en tjänst
Outcome hushållet får en paus
But kostnaden sitter i äldre- och socialomsorgen tills timmarna är prissatta
Activates liberalerna-politik-aldreomsorg
