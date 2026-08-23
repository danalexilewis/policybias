---
type: spec
id: vansterpartiet-var-politik-politik-a-o-skolan
title: "Vinstförbud i skolan och staten som huvudman"
status: draft
updated: 2026-08-23
summary: Skolor ska inte kunna gå med vinst; staten tar tillbaka huvudansvaret, den närmaste skolan ska vara bra, och gymnasiet ska vara avgiftsfritt för mat och med rätt till skolskjuts.
jurisdiction: SE
sources:
  - title: Skolan
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/skolan
tags:
  - education
party: vansterpartiet
clusters:
  - schools-education
money: no-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-skolan.md
sourceDigest: "sha256-34bb3a0c3dee79cd"
gaps:
  - om det fria skolvalet avskaffas, eller bara vinsten, sägs inte
  - hur mycket resurser som ska tillföras efter årtionden av minskade pengar anges inte
  - hur staten fördelar pengar mellan skolor när huvudmannaskapet återgår anges inte
  - hur många lärare som ska återvända, och till vilken lön, anges inte
---

# What the page states

> Sverige är ensamt om obegränsad vinst på skolverksamhet; skolpeng hamnar i koncerner och skatteparadis och marknaden ger betygsinflation, segregation och ojämlikhet. Vinstmöjligheten ska avskaffas, skolan tillföras mer resurser, och staten ta tillbaka huvudansvaret från kommunerna så att den närmaste skolan är en bra skola. Gymnasieelever ska ha rätt till skolskjuts där det inte går bussar, och kommunernas rätt att ta ut avgift för skolmat på gymnasiet ska bort.

System: Vinstförbud och statligt huvudmannaskap för skolan

Scenario: Skolkoncerner får inte längre ta ut vinst
Given Sverige som enda land i världen tillåter obegränsad vinst på skolverksamhet
And skolpeng går till vinster i skolkoncerner och skatteparadis
And den marknadsanpassade skolan leder till betygsinflation, segregation och ökad ojämlikhet
And pengarna till skolan har minskat de senaste årtiondena
When skolornas möjlighet att gå med vinst avskaffas
Then mer stöd kan ges till den som kommer från sämre förutsättningar
And satsningar når undervisning, elevhälsa, specialpedagoger, fritidsverksamhet och socialt stöd
And lärarnas arbetsbörda lättar genom fler kollegor, mindre administration och färre nationella prov
Outcome en kompensatorisk skola som möter barn utifrån skiftande behov
And skolmat som är vegetarisk eller ekologisk, med låga utsläpp och gott djurskydd

Scenario: Staten tar tillbaka skolorna och gymnasiet blir avgiftsfritt att äta i
Given det fria skolvalet samlar elever med olika bakgrund på olika skolor
And kommuner får i dag ta ut en avgift för skolmat på gymnasiet
When staten tar tillbaka huvudansvaret för skolorna från kommunerna
Then pengar kan fördelas mer efter skolornas och elevernas behov
And den närmaste skolan ska kunna litas på som en bra skola
And fritidshemmen görs tillgängliga för alla elever som en integrerad del av skoldagen
And yrkesprogram och studieförberedande program ger minst grundläggande behörighet till högskolan
Outcome gymnasieelever har rätt till skolskjuts där det inte går några bussar
And avgift för skolmat på gymnasiet avskaffas
Activates vansterpartiet-var-politik-politik-a-o-kriminalitet-och-kriminalvard
