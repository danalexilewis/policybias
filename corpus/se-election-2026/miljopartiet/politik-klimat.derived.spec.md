---
type: spec
id: miljopartiet-politik-klimat-derived
title: "Klimatpolitik läst som system: en koldioxidbudget utan tryckt tontak, och ett billigt resekort som det synliga priset"
status: draft
updated: 2026-08-23
summary: Det bindande instrumentet är en årlig koldioxidbudget vars storlek är onamngiven; det enda tryckta hushållspriset är ett månadstak på ett nationellt kollektivtrafikkort.
jurisdiction: SE
sources:
  - title: Klimatpolitik inför valet 2026
    url: https://www.mp.se/politik/klimat
tags:
  - climate
derivesFrom: miljopartiet-politik-klimat
party: miljopartiet
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/miljopartiet/politik-klimat.md
sourceDigest: sha256-9bfbc38dc6c8460a
assumptions:
  - en koldioxidbudget binder först när det årliga tontaket är satt; utan det talet kan företag inte veta hur fort de måste skära
  - att räkna konsumtionsutsläpp drar in import i målet, vilket är ett gränsmätningsproblem politiken inte specificerar
  - att slopa fossila subventioner höjer pump- och uppvärmningspriser om inte den gröna rabatten fullt kompenserar, och rabattformeln är onamngiven
  - ett nationellt resekort med månadstak är en taxestödsbrist vars underskott sitter hos regioner eller staten, ingen av vilka tilldelas
---

# Our understanding

> Fart kommer från en koldioxidbudget och från att slopa fossila subventioner. Rättvisa ska komma tillbaka som billigare resor och en landsbygdsrabatt. Bara resekortets tak är prissatt. Anpassning av skolor och vårdhem är en byggnorm utan nota.

System: En otryckt budget och ett tryckt taxetak

Scenario: En koldioxidbudget utropas
When en årlig koldioxidbudget införs och konsumtion räknas
Then de återstående utsläppen ska ransoneras över året
Outcome företag och myndigheter möter brist på tillåtna ton
But bristen kan inte handlas eller planeras förrän taket självt publiceras

Scenario: Ett nationellt resekort taksätts
When ett Sverigekort för kollektivtrafik säljs under ett månadstak
Then taxetaket är det hushållsvända priset på klimaterbjudandet
Outcome dagliga resor ska bli billigare relativt att köra
But vem som absorberar glappet mellan taket och dagens taxor namnges inte
