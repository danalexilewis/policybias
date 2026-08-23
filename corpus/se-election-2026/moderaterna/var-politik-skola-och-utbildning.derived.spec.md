---
type: spec
id: moderaterna-var-politik-skola-och-utbildning-derived
title: "Kunskapsskola read as a system: två kullar hinner ut innan betygen byts"
status: draft
updated: 2026-08-22
summary: Nya betyg landar först 2028 så dagens obehörighet består två år, medan avskaffat SVA flyttar tid mot svenska.
jurisdiction: SE
sources:
  - title: Skola och utbildning
    url: https://moderaterna.se/var-politik/skola-och-utbildning
tags:
  - education
derivesFrom: moderaterna-var-politik-skola-och-utbildning
party: moderaterna
clusters:
  - schools-education
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-skola-och-utbildning.md
sourceDigest: "sha256-d7f0bd0f0875c96e"
assumptions:
  - höstterminen 2028 innebär att två årskullar går ut grundskolan under nuvarande betyg
  - reglerad undervisningsskyldighet minskar tid till annat än lektion, inte nödvändigtvis antalet obehöriga
  - avskaffat svenska som andraspråk tar bort en meritgrundande väg för elever med annat hemspråk
  - 2.2 miljarder till modersmål kan omfördelas bara om huvudmännen släpper timmar och tjänster
---

# Our understanding

> Nya betyg och läroplaner införs först 2028, så dagens obehörighet till gymnasiet hinner upprepas. Undervisningsskyldighet och läsfortbildning ska få lärare att stanna. Avskaffat SVA och snävare modersmål flyttar tid mot svenska.

System: Skolreformer med olika ikraftträdande

Scenario: En årskull går ut innan det nya betygssystemet gäller
Given en av sex elever går ut grundskolan utan behörighet till gymnasiet
And nya betyg och läroplaner införs från höstterminen 2028
When den årskullen avslutar årskurs nio dessförinnan
Then samma kursplaner och betygskriterier gäller fortfarande
Outcome obehörigheten kan upprepas i ytterligare kullar
But eleverna bär resultatet av ett system som politiken redan har dömt ut

Scenario: Modersmål och SVA krymper samtidigt som svenska ska väga mer
Given 314 000 grundskoleelever har rätt till modersmålsundervisning
And undervisningen kostar cirka 2.2 miljarder kronor per år
When svenska som andraspråk avskaffas och rätten till modersmål snävas in
Then timmar och lärartjänster kan flyttas mot grundläggande svenska
Outcome elever med annat hemspråk förlorar en meritgrundande SVA-väg
But huvudmän som redan har olegitimerade modersmålslärare bär omställningen
