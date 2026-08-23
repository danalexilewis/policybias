---
type: spec
id: liberalerna-politik-klimatet-derived
title: "Avskiljningsmål läst som system: volym utan byggherre"
status: draft
updated: 2026-08-23
summary: Tio miljoner ton sedan tjugo miljoner ton avskild koldioxid är ett anläggningsprogram som vilar på kärnkraft, vind och sol som sidan bara namnger som mix, inte som utbyggnadstakt.
jurisdiction: SE
sources:
  - title: Klimatet behöver en effektiv politik. Liberalerna är alliansens grönaste röst!
    url: https://www.liberalerna.se/politik/klimatet
tags:
  - climate
derivesFrom: liberalerna-politik-klimatet
party: liberalerna
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-klimatet.md
sourceDigest: "sha256-00a66d4078fc1985"
assumptions:
  - att avskilja 10 miljoner ton kräver anläggningar, rör och lager som inte finns i den skalan i Sverige i dag
  - biomassa-baserad avskiljning som ger negativa utsläpp konkurrerar med samma biomassa som används för värme och bränsle
  - tillväxt-först klimatpolitik skjuter upp nedskärningar som skulle krympa en fossil aktivitet i år
  - kärnkraft, vind och sol som trio behöver fortfarande lokalisering och nät; sidan behandlar mixen som svaret
---

# Our understanding

> Avskiljningsmålen är ett byggprogram. Tio miljoner ton är inte en önskan, det är tankar, rör och en köpare av lagring. Tillväxt som metod betyder att fossil aktivitet kan stiga under tiden om avskiljningen kommer sent. Elmixen namnges; utbyggnadstakten gör det inte.

System: Ton avskiljning på en obyggd stack

Scenario: Det första avskiljningsmålet kommer före anläggningarna
Given målet är att avskilja 10 miljoner ton CO2
And stora volymer CO2 ska avskiljas och lagras
When kalenderåret för det första målet kommer
Then avskild koldioxid ska lämna atmosfären
Outcome negativa utsläpp kräver biomassa plus lagring, inte en pressrad
But sidan namnger inte vem som bygger eller betalar anläggningarna
# extrapolated: 0 är räkning från anläggningar som ännu inte står på sidan
Output 0 ton avskilda om ingen anläggning kör

Scenario: Fossila bränslen ersätts medan energianvändningen stiger
Given kol olja och gas måste ersättas av fossilfri energi
And många människor runt om i världen behöver använda mycket mer energi
When sol vind och kärnkraft byggs ut tillsammans
Then tillförlitlig fossilfri el är gångjärnet i den svenska planen
Outcome industrin kan växa utan ny fossil förbränning bara om den elen faktiskt kommer
Activates liberalerna-politik-karnkraft
