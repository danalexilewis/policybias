---
type: spec
id: vansterpartiet-var-politik-politik-a-o-sjukvard-derived
title: "Behovsstyrd vård läst som system: ett vinstfilter utan säng- eller personalräkning"
status: draft
updated: 2026-08-23
summary: Att stänga vinstsyftande företag ute från kärnvården flyttar restefterfrågan till kvarvarande utförare som sidan redan säger saknar vårdplatser.
jurisdiction: SE
sources:
  - title: Sjukvård
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/sjukvard
tags:
  - healthcare
party: vansterpartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-sjukvard.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-sjukvard
assumptions:
  - ett vinstförbud i kärnvården skapar inte i sig vårdplatser eller personal; kvarvarande offentlig och ideell kapacitet absorberar den undanträngda caseloaden
  - mer pengar i stället för skattesänkningar för höginkomsttagare är ett öppet krav tills en krona eller ett vårdtalsmål namnges
  - uppsökande arbete i utsatta områden och glesa regioner konkurrerar båda om samma knappa personal sidan vill behålla
  - köer till privat försäkring krymper bara om det offentliga erbjudandet blir lika snabbt; sidan anger prioriteringsregeln, inte väntetiden
sourceDigest: "sha256-305070f2abf28851"
---

# Our understanding

> Ett vinstfilter ändrar vem som får behandla, inte hur många som kan behandlas. Sidan säger redan att Sverige ligger i EU-botten för vårdplatser, så att stänga vinstsyftande företag ute från kärnvården belastar kvarvarande avdelningar om inte personal och platser tillförs i tal politiken aldrig namnger.

System: Behovsstyrd vård som ett kapacitetskrav utan personalräkning

Scenario: Vinstsyftande utförare lämnar kärnvården medan platserna förblir knappa
Given vinstsyftande företag behandlar i dag de mest lönsamma patienterna
And antalet vårdplatser redan ligger i EU-botten
When de företagen stängs ute från kärnvård finansierad med skatt
Then restpatienter flyttar till kvarvarande offentliga och ideella utförare
Outcome köer och beläggning landar på avdelningar som redan saknar platser
But patienter som var lönsamma att behandla väntar med alla andra, utan en angiven extra säng

Scenario: Uppsökande arbete och glesa regioner bjuder på samma personal
Given varje vårdcentral ska erbjuda psykiskt stöd
And uppsökande hälsokontroller ska nå kvinnor med kort utbildning i utsatta områden
And glesbefolkade regioner redan har särskilt höga kostnader
When de tre kraven kommer samtidigt
Then samma knappa kliniker efterfrågas på vårdcentraler, i uppsökande arbete och i tunna regioner
Outcome "bättre arbetsvillkor" måste göra jobbet åt en bemanningsplan som inte är skriven
But en patient i en tunn region har fortfarande ingen angiven extra plats eller extra kollega
Activates vansterpartiet-var-politik-politik-a-o-aldreomsorg
