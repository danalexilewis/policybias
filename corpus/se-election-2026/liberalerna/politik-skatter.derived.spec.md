---
type: spec
id: liberalerna-politik-skatter-derived
title: "ISK-tak läst som system: en prissatt förmån bredvid en oprissatt skattesänkning"
status: draft
updated: 2026-08-23
summary: Den enda siffersatta ändringen är att höja skattefritt ISK från 300000 till 500000 kronor; ytterligare sänkningar på arbete och en bred reform är riktning utan skattesats.
jurisdiction: SE
sources:
  - title: Skatter – Liberalerna
    url: https://www.liberalerna.se/politik/skatter
tags:
  - taxation
derivesFrom: liberalerna-politik-skatter
party: liberalerna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-skatter.md
sourceDigest: "sha256-ed10b2ad3e8f172f"
assumptions:
  - ett högre ISK-tak hjälper den som redan har utrymme över 300000 kronor; det skapar inget sparande för den som saknar det
  - att sänka skatten på arbete utan skattesats lämnar bytet skola-vård-trygghet oprissatt
  - en bred reform som tar bort undantag skapar förlorare bland dem som använde undantagen; politiken namnger enkelhet, inte vem som betalar
  - att själv kunna lämna ett dåligt jobb eller en relation kräver ett sparande, inte bara ett högre lagligt tak
---

# Our understanding

> ISK-höjningen är det enda prissatta instrumentet. Sänkt skatt på arbete och ett enklare regelverk är en riktning. Skola, vård och trygghet behöver fortfarande intäkter. Ett högre tak är mest värt för den som redan sitter nära det gamla taket.

System: Ett siffersatt sparandetak bredvid en osiffersatt sänkning av skatt på lön

Scenario: En sparare som redan ligger nära det gamla ISK-taket
Given skattefritt sparande på ett investeringssparkonto upp till 300 000 kronor redan finns
When taket höjs
Then mer av samma konto kan ligga obeskattat
Output skattefritt ISK-sparande upp till 500 000 kronor
Outcome extra utrymmet går till personer som redan sparar i stor skala
But ett hushåll utan ISK-behållning får inga kontanter i år

Scenario: En löntagare får höra att arbete måste löna sig medan välfärden fortfarande rullar
Given skatter behövs för att finansiera skola vård och trygghet
When skatten på arbete sänks ytterligare utan publicerad skattesats
Then nettolönen ska stiga
Outcome arbetslinjen blir starkare bara om den saknade intäkten hittas någon annanstans
But politiken säger inte vilken skatt som höjs eller vilken utgift som faller
