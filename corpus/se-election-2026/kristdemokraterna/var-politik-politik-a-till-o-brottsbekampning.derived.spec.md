---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-brottsbekampning-derived
title: "Hårdare straff läst som system: oförmåga i fängelse plus utvisning"
status: draft
updated: 2026-08-23
summary: Att avskaffa mängdrabatt och göra utvisning till huvudregel efter mer än sex månaders fängelse bygger på platser och polistal som politiken aldrig anger.
jurisdiction: SE
sources:
  - title: Brottsbekämpning
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/brottsbekampning
tags:
  - crime-and-justice
party: kristdemokraterna
clusters:
  - crime-justice
money: no-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-brottsbekampning.md
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-brottsbekampning
assumptions:
  - den som sitter inlåst kan inte rekrytera bara så länge det finns en cell; Kriminalvårdens kapacitet anges inte
  - fler poliser och domare utan personantal är en riktning, inte en bemanningsplan
  - utvisning som huvudregel efter mer än sex månaders fängelse förutsätter att ett annat land tar emot personen
  - föräldrastöd, skola och socialtjänst som prevention konkurrerar med samma lokala personal som redan driver dessa tjänster
sourceDigest: sha256-8bf5129385e17291
---

# Our understanding

> Dödliga skjutningar som mer än trefaldigats sedan 2010-talet är utgångsläget politiken äger. Erbjudandet är oförmåga: håll folk inne så de inte kan rekrytera, och utvisa icke-medborgare efter mer än sex månaders fängelse. Båda kräver celler, eskorter och mottagande stater. Inget av talen trycks.

System: Oförmåga och utvisning utan cellantal

Scenario: Mängdrabatter upphör medan fängelseplatser förblir onamngivna
Given dödligt skjutvåld har mer än trefaldigats sedan 2010-talet
When mängdrabatter avskaffas och straffen blir kännbara
Then fler sitter inne längre
Outcome de inne kan inte rekrytera barn till gäng så länge de hålls
But Kriminalvårdens kapacitet saknar platsantal och byggdatum

Scenario: En icke-medborgare döms till mer än sex månader
Given utvisning ska vara huvudregel i det fallet
When domen meddelas
Then bortförande, inte bara tid i svensk cell, är det avsedda slutläget
Outcome en mottagande stat och en eskort måste finnas
But varken det ena eller det andra namnges
