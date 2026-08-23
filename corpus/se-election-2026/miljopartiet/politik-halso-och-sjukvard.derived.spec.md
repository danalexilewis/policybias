---
type: spec
id: miljopartiet-politik-halso-och-sjukvard-derived
title: "Sjukvård läst som system: köavlastning vilar på att personal stannar, inte på ett publicerat vårdtalsantal"
status: draft
updated: 2026-08-23
summary: Kortare köer ska följa av bättre arbetstid och långsiktiga bidrag; utan siffra på bemanning eller bidrag kan kapacitetsvinsten inte mätas.
jurisdiction: SE
sources:
  - title: Hälso- och sjukvårdspolitik
    url: https://www.mp.se/politik/halso-och-sjukvard
tags:
  - healthcare
derivesFrom: miljopartiet-politik-halso-och-sjukvard
party: miljopartiet
clusters:
  - health-care
money: no-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-halso-och-sjukvard.md
sourceDigest: sha256-feaef1ac78e24eeb
assumptions:
  - stängda vårdplatser öppnar bara om extra personaltimmar materialiseras; en onamngiven arbetstidsförkortning kan skära timmar innan den lockar folk
  - långsiktiga statsbidrag tävlar fortfarande med andra välfärdskrav i varje budget
  - avgiftsfri tandvård till 23 år flyttar kostnaden till staten; den kvarvarande vuxna högkostnadsskyddet är onamngivet, så vuxnas tandräkningar förblir delvis privata
  - ett förbud mot köförsäkringar i offentligfinansierad vård snävar en privat utgång utan att säga hur privat kapacitet avvecklas
---

# Our understanding

> Köer behandlas som ett bemanningsproblem. Bidrag och ett arbetsmiljölyft ska hålla folk i jobbet så platser kan öppna. Tandvård dras mot samma behovsregel som resten av vården. Regionerna måste fortfarande hitta personalen, och vuxna möter fortfarande ett oprissatt tandskydd.

System: Personaltimmar som köinstrument

Scenario: Ett arbetsmiljölyft ska öppna vårdplatser
When arbetstiden kortas, karensdagen tas bort och specialistutbildning betalas
Then fler väntas stanna och fler platser öppna
Outcome köerna faller om den extra arbetskraften faktiskt kommer
But schematäckning och utbildningstid måste betalas av bidrag politiken inte dimensionerar

Scenario: Offentliga pengar stängslas av från vinst och snabbspårsförsäkring
When överskott måste återinvesteras och privat försäkring inte kan köpa ett hopp i offentlig vård
Then offentligfinansierade tider ska följa behov
Outcome ett privat snabbspår förlorar sitt offentliga fäste
But privatförsäkrade patienter förlorar den utgången och väntar i samma kö
