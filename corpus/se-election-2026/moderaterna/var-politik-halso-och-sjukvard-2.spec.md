---
type: spec
id: moderaterna-var-politik-halso-och-sjukvard-2
title: Skärpt vårdgaranti, nationell vårdförmedling och mer psykiatri
status: draft
updated: 2026-08-23
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
And väntetiderna inom barn- och ungdomspsykiatrin är alldeles för långa
And ett hushåll med en polis och en sjuksköterska betalar omkring 130 000 kronor i regionskatt varje år
When vårdgarantin skärps och regionerna blir ersättningsskyldiga när den inte uppfylls
Then det ska bli enklare att få vård i en annan region genom en nationell vårdförmedling
And en lagstadgad vårdgaranti ska gälla besökstid och behandling hos BUP
And första linjens psykiatri ska stärkas och avlasta trycket på BUP
And antalet subventionerade IVF-försök ska dubbleras och syskonförsök inkluderas
And åldersgränsen för BUP höjs och unga med svår psykisk sjukdom ska få fast vårdkontakt
Output 21 år som ny åldersgräns för BUP i stället för 18
Outcome fler ska få vård i tid utan att regionskatten höjs
