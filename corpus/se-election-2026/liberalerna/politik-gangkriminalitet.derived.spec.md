---
type: spec
id: liberalerna-politik-gangkriminalitet-derived
title: "Stålhandske och yllemitter läst som system: två klockor på samma barn"
status: draft
updated: 2026-08-23
summary: Hårdare verktyg träffar dem som redan är i näten, medan skola och socialtjänst måste nå barnet först; politiken säger aldrig vilken klocka vinner när de krockar.
jurisdiction: SE
sources:
  - title: Gängkriminalitet – Liberalerna
    url: https://www.liberalerna.se/politik/gangkriminalitet
tags:
  - crime-and-justice
derivesFrom: liberalerna-politik-gangkriminalitet
party: liberalerna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-gangkriminalitet.md
sourceDigest: "sha256-c9b0c542eb2e7beb"
assumptions:
  - avlyssning och kameror höjer upptäckten av dem som redan är i nätet mer än de avskräcker första rekryteringen
  - en gymnasieexamen skyddar bara barnet som fortfarande går i skolan; politiken behandlar skolan som avgörande utan en skolk-trigger
  - att kväva gängens pengar kräver regler om tillgångar och kontanter politiken inte namnger
  - EU-samarbete hjälper mot vapen och droger över gränser, inte mot en rekryteringspromenad på ett svenskt bostadsområde
---

# Our understanding

> De hårda verktygen landar på personer som redan är i näten. De mjuka verktygen måste komma före det första ärendet. Skolan som sköld fungerar bara medan barnet fortfarande går dit. Där de klockorna krockar säger politiken inte vilken plikt kommer först.

System: Upptäckt av medlemmar mot avbrott i rekrytering

Scenario: En tonåring används för ett första ärende medan hen fortfarande står på skolans lista
Given kriminella nätverk rekryterar allt yngre barn
And att klara skolan namnges som ett av de starkaste skydden mot brott
When tonåringen erbjuds kontanter för en leverans samma vecka som en missad lektion
Then polisverktyg riktas mot den vuxne som skickade barnet
And socialtjänsten ska nå familjen tidigt
Outcome barnet är både vittne i ett ärende och en elev skolan måste behålla
But politiken säger inte vilken verksamhet får ta barnet ur klassen
Activates liberalerna-politik-skola

Scenario: Ett nätverk flyttar pengar och vapen över en gräns
Given organiserad brottslighet verkar över nationsgränser
When det europeiska polissamarbetet stärks
Then vapen och droger blir svårare att föra in i landet
Outcome lokala skjutningar beror fortfarande på vem som är kvar i området och rekryterar
But att kväva gängets ekonomi kräver befogenheter politiken bara namnger i kontur
