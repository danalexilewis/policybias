---
type: spec
id: moderaterna-var-politik-ekonomisk-politik-och-foretagande
title: Minst hälften kvar, lägre bolagsskatt och enklare tillstånd
status: draft
updated: 2026-08-23
summary: Vanliga yrken ska behålla minst hälften av lönen över brytpunkten, bolagsskatt och arbetsgivaravgifter ska sänkas och miljöprövning ska centraliseras.
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

> Sverige ska ha EU:s högsta levnadsstandard inom tio år. Den som arbetar ska behålla mer av lönen, företag ska möta lägre skatt och kortare tillstånd, och arbete ska alltid löna sig bättre än bidrag.

System: Minst hälften kvar, lägre bolagsskatt och enklare tillstånd

Scenario: Ett hushåll med vanliga yrken passerar brytpunkten
Given Sverige tillhör de tio länderna med högst skattetryck i OECD
And 1,3 miljoner människor är inte självförsörjande
And den som arbetar skift eller tar extra pass kan betala mer än 50 procent i skatt på varje hundralapp över den statliga inkomstgränsen
When den statliga inkomstskatten förändras så att fler i vanliga yrken får behålla minst 50 procent av sin intjänade lön
Then bolagsskatten och arbetsgivaravgifterna ska sänkas så att fler företag kan växa och anställa
And miljöbalken ska reformeras och en central miljöprövningsmyndighet ta över tillstånd från länsstyrelser och mark- och miljödomstolar
Output minst 50 procent av intjänad lön kvar över den statliga inkomstgränsen
Outcome arbete ska löna sig bättre än bidrag och fler företag ska kunna växa
