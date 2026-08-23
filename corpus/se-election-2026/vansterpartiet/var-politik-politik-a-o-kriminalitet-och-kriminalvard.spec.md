---
type: spec
id: vansterpartiet-var-politik-politik-a-o-kriminalitet-och-kriminalvard
title: "Välfärd mot nyrekrytering, straff efter allvar"
status: draft
updated: 2026-08-23
summary: Grova brott ska mötas med straff som motsvarar allvaret, men inte med generella straffskärpningar; nyrekrytering av barn stoppas med skola, socialtjänst, Sluta skjut och gränskontroll, medan kriminalvården ska slussa tillbaka.
jurisdiction: SE
sources:
  - title: Kriminalitet och kriminalvård
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/kriminalitet-och-kriminalvard
tags:
  - crime-and-justice
party: vansterpartiet
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-kriminalitet-och-kriminalvard.md
sourceDigest: "sha256-28bcf9bb106ae0fb"
gaps:
  - hur många fler poliser som ska anställas, och till vilka uppgifter, anges inte
  - hur Sluta skjut ska finansieras när det sprids till hela landet anges inte
  - hur stor den nationella haverikommissionen blir, och med vilket mandat, anges inte
  - hur överfulla anstalter ska avlastas om vissa straff samtidigt skärps anges inte
---

# What the page states

> Brottsförebyggande arbete börjar med välfärd som fångar upp unga tidigt; samhället sätter ändå straff som motsvarar brottets allvar, utan generella skärpningar. Nyrekrytering av barn ska stoppas med skola, socialtjänst, Sluta skjut i hela landet och stopp för narkotika och vapen vid gränsen. Kriminalvården är i kris med överfulla häkten, så inslussning, avhopp och rättspsykiatri med särskild utskrivningsprövning ska bära återfallet — inte förvaring.

System: Välfärd mot rekrytering och straff efter allvar

Scenario: Nyrekrytering möts med välfärd och gräns, inte med generella skärpningar
Given skjutvapenvåld och sprängningar är koncentrerade till socialt utsatta områden i storstäder
And en förhållandevis liten grupp unga män begår den största delen av de grövsta brotten
And Justitieombudsmannen har länge kritiserat överbeläggningen på anstalter och häkten
And fängelsestraffen generellt har blivit längre
When rekryteringen av barn in i kriminalitet möts med skola, socialtjänst och Sluta skjut
Then generella straffskärpningar uteblir, medan strängare straff kan användas mot vålds- och sexualbrott, brott mot barn och vapenbrott
And polisen får använda infiltratörer på nätet men inte brottsprovokation
And narkotika och vapen stoppas redan vid landets gränser
And sociala insatsgrupper inrättas i särskilt drabbade områden
Outcome barn spelar fotboll i stället för att agera narkotikakurirer
And en nationell haverikommission utreds som krav mot gängvåldet
Activates vansterpartiet-var-politik-politik-a-o-skolan

Scenario: Dömda slussas tillbaka medan rättspsykiatrin håller kvar högrisk
Given samarbetet mellan socialtjänst, kriminalvård och vårdinrättningar fungerar inte
When staten tar ett större ansvar för inslussningen av grovt kriminella
Then avhopparverksamhet med personskydd utvecklas så att människor kan lämna kriminalitet och våga vittna
And vålds- och sexualförbrytare med hög återfallsrisk kan hållas kvar i vården med särskild utskrivningsprövning
Outcome fängelser är kriminalvård med sikte på ett liv i frihet, inte förvaring
But dödsstraff avvisas
