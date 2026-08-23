---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter-derived
title: "Grön skatteväxling läst som system: lägre inkomstskatt betalas av den som fortfarande släpper ut"
status: draft
updated: 2026-08-23
summary: Lägre skatt på arbete finansieras med högre skatt på miljöskador, så nettot beror på hur mycket hushållet fortfarande kör, värmer och producerar med fossil energi.
jurisdiction: SE
sources:
  - title: Ekonomi och skatter
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/ekonomi-och-skatter
tags:
  - taxation
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter
party: centerpartiet
clusters:
  - economy-tax
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-ekonomi-och-skatter.md
sourceDigest: "sha256-f8d73f4576c22f12"
assumptions:
  - en skattesänkning på arbete som finansieras med miljöskatt är en överföring, inte en gratis lunch
  - landsbygdshushåll som värmer och kör på fossil energi betalar mer av miljöbenet
  - urbana löntagare med låg körsträcka får mer av inkomstskattesänkningen
  - billigare anställning i utkanten av arbetsmarknaden höjer efterfrågan på de arbetstagarna bara om produktefterfrågan finns
---

# Our understanding

> Politikens räkneregler är en grön skatteväxling: mindre skatt på jobb och företag, mer skatt på miljöskador. Låg- och medelinkomsttagare lovas mer kvar i plånboken efter räkningarna. Det håller om inkomstskattesänkningen överstiger det de betalar i högre miljöskatt. Billigare anställning för småföretag och för personer långt från arbete är ett verktyg för arbetskraftsbehov utan någon angiven procentsats.

System: Inkomstskattesänkning finansierad med miljöskatt

Scenario: Ett landsbygdshushåll med bil och oljevärme får lägre skatt på lönen
Given en grön skatteväxling som höjer skatten på miljöskador
When hushållet lämnar deklarationen
Then löneskatten kan sjunka medan bränsle och uppvärmning blir dyrare
Outcome nettolön efter räkningar kan höjas eller sjunka med hushållets fossilandel
But politiken trycker ingen procentsats, så nettot kan inte kontrolleras

Scenario: Ett småföretag funderar på att anställa någon långt från arbetsmarknaden
Given anställning som är för dyr och krånglig i dag
When kostnaden för den anställningen sänks
Then företaget kan ta in personen
Outcome sysselsättningen i utkanten kan stiga
But utan en angiven sänkning i kronor är storleken på knuffen okänd
