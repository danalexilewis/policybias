---
type: spec
id: moderaterna-var-politik-ekonomisk-politik-och-foretagande
title: Lägre skatt på arbete och enklare att driva företag
status: draft
updated: 2026-08-22
summary: Hushåll ska behålla mer av lönen, bland annat genom att minst hälften ska vara kvar över den statliga brytpunkten, och företag ska möta lägre skatt och kortare tillstånd.
jurisdiction: SE
sources:
  - title: Ekonomisk politik och företagande
    url: https://moderaterna.se/var-politik/ekonomisk-politik-och-foretagande
tags:
  - economy
party: moderaterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-ekonomisk-politik-och-foretagande.md
sourceDigest: "sha256-e165259e1005eaf1"
gaps:
  - hur många kronor den statliga brytpunkten ska flyttas för att minst hälften ska vara kvar anges inte
  - hur många procentenheter bolagsskatt och arbetsgivaravgift ska sänkas anges inte
  - vad en central miljöprövningsmyndighet kostar och hur lång kötiden ska bli anges inte
  - hur stort inkomstbortfallet av skattesänkningarna är i statsbudgeten anges inte
---

# What the page states

> Sverige ska ha EU:s högsta levnadsstandard inom tio år. Den som arbetar ska behålla mer av lönen. Företag ska kunna växa utan onödigt krångel. Jobb ska alltid löna sig bättre än bidrag.

System: Lägre skatt på arbete och enklare företagande

Scenario: Ett hushåll med vanliga yrken passerar brytpunkten
Given Sverige har det lägsta skattetrycket på 50 år men tillhör fortfarande de tio länderna med högst skattetryck i OECD
And 1.3 miljoner människor är inte självförsörjande
And den som arbetar skift eller tar extra pass kan betala mer än 50 procent i skatt på varje hundralapp över den statliga inkomstgränsen
And en vanlig familj har fått 5 000 kronor mer kvar sedan 2022
When skatten på arbete, mat och el sänks
Then fler i vanliga yrken ska behålla minst hälften av den intjänade lönen
Output 1 800 kronor mer i plånboken varje månad för en vanlig familj
And 3 100 kronor mer i månaden 2026 jämfört med 2022 för ett ensamstående vårdbiträde med två barn
Outcome arbete ska löna sig bättre än bidrag

Scenario: Ett företag vill växa och anställa
Given exporten motsvarar nästan 52 procent av BNP
And 1.4 miljoner arbetstillfällen är kopplade till exporten
When bolagsskatten och arbetsgivaravgifterna sänks
Then Förenklingsrådet och Implementeringsrådet ska minska regelkrångel och överimplementering av EU-regler
And kvittokrångel och matkrav är avskaffade
And nya 3:12-regler minskar den administrativa bördan med en tredjedel
And miljöbalken ska bli mer flexibel och en central miljöprövningsmyndighet ta över tillstånd från länsstyrelser och mark- och miljödomstolar
Outcome fler företag ska kunna växa och anställa
