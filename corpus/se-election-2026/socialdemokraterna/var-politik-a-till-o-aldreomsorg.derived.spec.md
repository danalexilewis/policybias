---
type: spec
id: socialdemokraterna-var-politik-a-till-o-aldreomsorg-derived
title: "Bemanningssatsning read as a system: mer tid kräver kollegor som lagen namnger men inte rekryterar"
status: draft
updated: 2026-08-23
summary: Lagen och lyftet höjer kompetensen på betald tid, vilket tar personal ur schemat just när miljardsatsningen ska ge fler kollegor — och beloppet är osagt.
jurisdiction: SE
sources:
  - title: Äldreomsorg
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/aldreomsorg
tags:
  - elderly-care
  - social-welfare
  - healthcare
derivesFrom: socialdemokraterna-var-politik-a-till-o-aldreomsorg
party: socialdemokraterna
clusters:
  - elderly-welfare
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-aldreomsorg.md
sourceDigest: sha256-f88344016e7a7776
assumptions:
  - utbildning på betald arbetstid minskar närvarande timmar tills vikarien finns
  - krav på läkare och sjuksköterskor dygnet runt i hemtjänsten konkurrerar med samma yrkesgrupper som sjukhusen
  - en miljardsatsning utan belopp kan vara ett år eller tre; kommunen kan inte budgetera mot ett ord
  - språkkrav utan tillräcklig språkträning stänger den som redan arbetar, innan ny personal är på plats
---

# Our understanding

> Mer tid hos den äldre kräver fler händer i schemat. Lyftet tar samma händer till utbildning på betald tid. Krav på läkare och sjuksköterskor dygnet runt i hemtjänsten möter samma brist som slutenvården. Bottenplattan räknar upp statsbidragen med inflationen, vilket bromsar nedskärningar men inte köper den namnlösa miljarden.

System: Tid i omsorgen mot samma personalpool

Scenario: En undersköterska utbildas på betald tid
Given Äldreomsorgslyftet som görs permanent så att personal utbildar sig till undersköterska på betald arbetstid
When personen går in i utbildning
Then timmen saknas i hemtjänstschemat
Outcome kompetensen höjs
But den äldre möter en vikarie eller ett inställt besök tills ersättaren finns

Scenario: Hemtjänsten ska ha sjuksköterska dygnet runt
Given krav på tillgång till läkare och sjuksköterskor dygnet runt i hemtjänsten
When kravet gäller
Then samma yrkesgrupper ska räcka till både boende och hem
Outcome den medicinska kompetensen stärks på papperet
But rekryteringen är inte finansierad i belopp

Scenario: Kommunen räknar upp statsbidraget med inflationen
Given en bottenplatta där statsbidragen till kommunerna räknas upp med inflationen
When priserna stiger i takt med index
Then nedskärningar motverkas
Outcome omsorgen följer priserna
But fler kollegor kräver mer än index
