---
type: spec
id: moderaterna-var-politik-halso-och-sjukvard-2
title: Skärpt vårdgaranti, nationell vårdförmedling och mer psykiatri
status: draft
updated: 2026-08-22
summary: Vårdköerna ska kortas genom skärpt vårdgaranti, ersättningsskyldiga regioner och nationell vårdförmedling, med särskilda satsningar på BUP, fertilitet och kvinnors sjukdomar.
jurisdiction: SE
sources:
  - title: Hälso- och sjukvård
    url: https://moderaterna.se/var-politik/halso-och-sjukvard-2
tags:
  - healthcare
party: moderaterna
clusters:
  - health-care
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-halso-och-sjukvard-2.md
sourceDigest: "sha256-193264634d64fa64"
gaps:
  - vad regionernas ersättningsskyldighet kostar när vårdgarantin inte uppfylls anges inte
  - hur nationell vårdförmedling finansieras mellan hemregion och utförande region anges inte
  - hur den lagstadgade BUP-garantin mäts i tid till besök och behandling anges inte
  - hur många extra IVF-behandlingar dubbleringen av försök ger anges inte
---

# What the page states

> Vården ska vara tillgänglig, trygg och samordnad så att rätt vård kommer i tid. Vårdgarantin ska skärpas och regionerna bli ersättningsskyldiga när den inte uppfylls. En nationell vårdförmedling ska göra det enklare att få vård i en annan region. Psykisk ohälsa, ofrivillig barnlöshet och kvinnors sjukdomar ska prioriteras.

System: Skärpt vårdgaranti och nationell vårdförmedling

Scenario: En patient väntar längre än vårdgarantin
Given för många patienter får inte sin behandling inom vårdgarantins 90-dagarsgräns
And vårdköerna minskade med 28 procent från oktober 2022 till januari 2026
And nästan 25 miljarder kronor har satsats på att korta vårdköerna under mandatperioden
And ett hushåll med en polis och en sjuksköterska betalar omkring 130 000 kronor i regionskatt varje år
When vårdgarantin skärps och regionerna blir ersättningsskyldiga när den inte uppfylls
Then det ska bli enklare att få vård i en annan region genom en nationell vårdförmedling
Outcome fler ska få vård i tid utan att regionskatten höjs

Scenario: Ett barn väntar på BUP
Given väntetiderna inom barn- och ungdomspsykiatrin är alldeles för långa
And år 2023 uppgav sex barn och unga av tio att de besvärades av ängslan, oro eller ångest
And 5.4 miljarder kronor satsas på psykiatrin under 2026
When en lagstadgad vårdgaranti införs för besökstid och behandling hos BUP
Then första linjens psykiatri ska stärkas och avlasta trycket på BUP
Output 21 år som ny åldersgräns för BUP i stället för 18
And fast vårdkontakt för unga med svår psykisk sjukdom
Outcome alla barn och unga ska få hjälp, stöd och vård i rätt tid

Scenario: Ett par söker subventionerad fertilitetsbehandling
Given ofrivillig barnlöshet drabbar omkring tio till 15 procent av befolkningen
And det föds omkring 100 000 barn om året
When antalet subventionerade IVF-försök dubbleras och syskonförsök inkluderas
Then fler par ska få offentligt finansierad fertilitetsbehandling
Outcome fler ska kunna bli föräldrar med subventionerad behandling
