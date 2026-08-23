---
type: spec
id: vansterpartiet-var-politik-politik-a-o-aldreomsorg-derived
title: "Haverikommission för äldreomsorg läst som system: utredning först, personal sedan"
status: draft
updated: 2026-08-23
summary: De fem kraven är den egentliga interventionen, men de lämnas in som ingångar till en kommission, så minuter, lön och platser kan vänta på ett betänkande.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/aldreomsorg
tags:
  - employment
  - elderly-care
  - social-welfare
party: vansterpartiet
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-aldreomsorg.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-aldreomsorg
assumptions:
  - en parlamentarisk kommission levererar rön på en politisk tidtabell; den bemannar inte en kvällstur
  - att avskaffa minutstyrning förlänger varje besök bara om personalstyrkan ökar tillräckligt för att täcka extra minuterna
  - kortare arbetstid utan publicerad ersättnings-FTE skär betalda timmar eller höjer kommunens nota
  - skiftet från särskilt boende till hemtjänst sedan 2000-talet är ett lager av saknade platser som kommissionen inte automatiskt bygger tillbaka
sourceDigest: "sha256-53a34fd2ce521559"
---

# Our understanding

> Haverikommissionen är en fördröjningsmekanism om inte de fem ingångarna beslutas dag ett. Att slopa tidtagaruret utan fler undersköterskor betyder att varje besök blir längre och färre personer hinns; kortare arbetstid utan ersättningsantal gör samma sak. Valet mellan hemmet och särskilt boende är tomt där lagret av särskilda boenden redan körts ned.

System: Kommission som kö framför personalnotan

Scenario: Minutstyrningen upphör innan extra undersköterskor kommer
Given besök redan klockas på minuten och bemanningen är tunn
When tidtagaruret avskaffas
Then varje kvarvarande undersköterska är skyldig mer otajmad tid per person
Outcome värdighet för den som sitter i stolen, om inte slingan kapas
But en äldre senare i slingan väntar eller hoppas över

Scenario: Kortare arbetstid möter en pensionsvåg
Given stora pensionsavgångar bland omsorgspersonal väntas
When arbetstiden i omsorgen kortas och rätten till heltid hedras
Then timmarna som måste fyllas stiger
Outcome kommunerna behöver ett bidrag stort nog att anställa, inte bara att utreda
But en boende bär glappet om bidraget kommer sent
Activates vansterpartiet-var-politik-politik-a-o-sjukvard
