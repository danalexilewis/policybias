---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-energi-derived
title: "Tvåårig tillståndsprövning läst som system: klimatnytta väger tyngre än andra miljöbalksprövningar"
status: draft
updated: 2026-08-23
summary: Att kapa tillståndstiden från ungefär ett decennium till två år är ett kapacitetslöfte i lagen; parallella processer och högre vikt på klimatnytta är hur andra prövningar förlorar.
jurisdiction: SE
sources:
  - title: Energi
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/energi
tags:
  - climate
  - energy
  - economy
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-energi
party: centerpartiet
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-energi.md
sourceDigest: "sha256-34480ba8a7c3122f"
assumptions:
  - ett tvåårigt tillstånd är möjligt bara om vissa miljöbalksprövningar körs parallellt eller stryks
  - att väga klimatnytta högre innebär att andra skador räknas lägre i samma beslut
  - export av el medan inhemska priser lovas lägre kräver överskott; annars driver exporten upp hemmapriset
  - kärnkraft på marknadsvillkor får ingå i mixen, inte finansieras av staten
---

# Our understanding

> Det bindande talet i politiken är tillståndstid: åtta till tio år i dag, två år som tak. En krisberedning och tvärblockssamtal är den politiska vägen. Att förenkla miljöbalken så klimatnytta väger mer, och så processer kan köras parallellt, är den juridiska vägen. Export av grön el ska ersätta fossil energi i Europa och minska beroendet av rysk gas. Det är ett utrikespolitiskt bruk av svenska elektroner som kan strama åt hemmamarknaden om överskott saknas.

System: Kapning av tillståndstid som en omskrivning av miljöprövning

Scenario: Ett vind- eller kärnkraftprojekt möter en tvåårsklocka
Given prövningar som i dag tar 8–10 år
When klimatnytta vägs högre och processer körs parallellt
Then ärendet kan stängas på två år bara om andra prövningar inte längre sitter i serie
Outcome ny fossilfri el kan komma tidigare
But naturförekomster, grannar och konkurrerande markanvändning förlorar kalendertid i samma prövning

Scenario: Överskottsel säljs utomlands medan hushållen lovas lägre räkningar
Given ett exportmål som ersätter fossil energi i Europa
When utlandsförbindelserna tar svensk el
Then det inhemska priset sätts av den bredare marknaden
Outcome Europa förbrukar mindre fossil energi
But svenska räkningar sjunker bara om produktionen växer snabbare än exporten
