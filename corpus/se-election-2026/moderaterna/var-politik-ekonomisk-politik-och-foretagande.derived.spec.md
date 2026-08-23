---
type: spec
id: moderaterna-var-politik-ekonomisk-politik-och-foretagande-derived
title: "Minst hälften kvar read as a system: brytpunkten bär hushållet, bolagsskatten bär kassan"
status: draft
updated: 2026-08-22
summary: Marginalskattetaket för vanliga yrken betalas av statskassan vid brytpunkten, medan ospecificerad bolagsskatt och arbetsgivaravgift lämnar företagens vinst utan angiven sats.
jurisdiction: SE
sources:
  - title: Ekonomisk politik och företagande
    url: https://moderaterna.se/var-politik/ekonomisk-politik-och-foretagande
tags:
  - economy
derivesFrom: moderaterna-var-politik-ekonomisk-politik-och-foretagande
party: moderaterna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-ekonomisk-politik-och-foretagande.md
sourceDigest: "sha256-e165259e1005eaf1"
assumptions:
  - minst hälften kvar är ett tak på marginalskatten över brytpunkten, inte ett löfte om lägre kommunalskatt
  - 1 800 kronor i månaden 2026 är ett räkneexempel för en vanlig familj, inte ett genomsnitt för alla deciler
  - sänkt bolagsskatt utan angiven sats skjuter intäktsbortfallet på senare budgetar
  - central miljöprövning snabbar kapitalprojekt bara om kön hos den nya myndigheten blir kortare än hos länsstyrelserna
---

# Our understanding

> Taket på minst hälften kvar sitter på den statliga brytpunkten, så kassan tappar just där skiftarbetaren nu betalar mer än hälften. Familjeexemplet 1 800 kronor i månaden är ett urval. Bolagsskatt och arbetsgivaravgift sänks utan procentsats. Tillståndscentralisering flyttar kön, inte nödvändigtvis tiden.

System: Marginalskatt vid brytpunkten och ospecificerad bolagsskatt

Scenario: En skiftarbetare passerar den statliga inkomstgränsen
Given mer än 50 procent i skatt tas på varje hundralapp över den statliga inkomstgränsen
When den statliga inkomstskatten ändras så att minst hälften blir kvar
Then skiftarbetaren behåller mer av extra pass
Outcome statskassan tappar just på den marginal där extra arbete i dag beskattas hårdast
But underskottet måste täckas någon annanstans i en statsbudget på omkring 1 500 miljarder kronor

Scenario: Ett tillståndsärende lämnar länsstyrelsen
When en central miljöprövningsmyndighet tar över från länsstyrelser och mark- och miljödomstolar
Then samma prövning ska ske på ett ställe
Outcome kön flyttas till den nya myndigheten
But projektet väntar lika länge om kapaciteten bara byter adress
