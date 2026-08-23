---
type: spec
id: vansterpartiet-var-politik-politik-a-o-skattepolitik
title: "Bredare skattebas, skydd under 50 000 kronor i månaden"
status: draft
updated: 2026-08-23
summary: Skattesystemet ska finansiera välfärden och utjämna; 470 miljarder kronor om året har fallit bort sedan 2000-talet, ingen under 50 000 kronor i månaden får höjd skatt, och bankövervinster, grönt rotavdrag och fordonsskatt på energislukande bilar ska bära mer.
jurisdiction: SE
sources:
  - title: Skattepolitik
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/skattepolitik
tags:
  - taxation
party: vansterpartiet
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-skattepolitik.md
sourceDigest: "sha256-e865926055e71dc0"
gaps:
  - hur hög oligopolskatten på bankernas övervinster blir anges inte
  - hur mycket skatt sjuka och arbetslösa får sänkt när lika skatt på lika inkomst återinförs anges inte
  - hur stort det gröna rotavdraget blir jämfört med dagens rot anges inte
  - hur mycket fordonsskatten höjs på energislukande bilar anges inte
---

# What the page states

> Skatternas uppgift är att finansiera välfärden, jämna ut inkomster och styra klimat- och miljöpolitiken. Sedan 1990-talets reform — lägre skatt på arbete, skärpt kapitalbeskattning, mindre skatteplanering — har systemet blivit ett sammelsurium av avdrag och nedsättningar. Förslagen är oligopolskatt på bankernas övervinster, lika skatt på lika inkomst, skattereduktion för fackavgift, grönt rotavdrag för energieffektivisering, och höjd fordonsskatt på stora energislukande bilar.

System: Bredare baser och ett inkomstskydd under tröskeln

Scenario: Skattesänkningar för höginkomster stoppas och baserna breddas
Given ett relativt högt skatteuttag hänger ihop med hög sysselsättning via skattefinansierad äldreomsorg, förskola och fritids
And skattereglerna ska vara generella, enkla och med breda skattebaser
And skatterna har sänkts kraftigt sedan skattereformen
When förslagen i skattepolitiken införs
Then lika skatt på lika inkomst återinförs så att sjuka, arbetslösa och sjukpensionärer får sänkt skatt
And rotavdraget görs om till ett grönt rotavdrag för energieffektivisering
And oligopolskatt tas ut på bankernas övervinster
And skattereduktion ges för avgift till fackförening
And fordonsskatten höjs på stora energislukande bilar
Output 470 miljarder kronor i mindre skatteinkomster varje år under 2000-talet som baslinje
And ingen som tjänar under 50 tusen kr i månaden får höjd skatt
Outcome välfärden och det offentliga åtagandet finansieras, och klyftor i konsumtion och sparande jämnas ut
Activates vansterpartiet-var-politik-politik-a-o-klimat
