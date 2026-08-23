---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset
title: "Sverigepriser, elpristak och skatt på elnätsövervinster"
status: draft
updated: 2026-08-23
summary: Svenska konsumenter ska frikopplas från dyr utländsk el via ett femte prisområde, hushåll får ett tak på 75 öre per kilowattimme som täcker merparten av kostnaden däröver, och elnätsbolagens övervinster beskattas.
jurisdiction: SE
sources:
  - title: Elpriset
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/elpriset
tags:
  - energy
  - economy
party: vansterpartiet
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-elpriset.md
sourceDigest: "sha256-311b30b8c1e99221"
gaps:
  - hur ett femte prisområde för export godkänns mot EU:s elmarknadsregler anges inte
  - hur stor elprisförsäkringsavgiften på branschen blir anges inte
  - hur skatten på elnätsövervinster definierar övervinst anges inte
  - hur mycket stamnätet ska kosta, och vem som betalar tills det är byggt, anges inte
---

# What the page states

> Elpriset sätts av den sista, dyra fossilelen även när svensk fossilfri produktion nästan alltid räcker. Sverigepriser via ett separat exportpris i ett femte prisområde ska skydda hushållen. Ett högkostnadsskydd för hushåll kompletterar, finansierat av en obligatorisk försäkringsavgift på elbranschen snarare än av skattebetalarna. Elnätsavgifterna har mer än fördubblats under de senaste tio åren; övervinster ska beskattas och stamnätsutbyggnad ske i offentlig regi, med särskilt stöd till landbaserad vindkraft.

System: Sverigepriser, hushållstak och elnätsskatt

Scenario: Exporten prissätts i ett eget område
Given priset i dag bestäms av vad det kostar att producera den sist köpta elen
And Sverige producerar billig fossilfri el som nästan alltid täcker de egna behoven
When de svenska elpriserna frikopplas från den dyra utländska elen
Then elen som exporteras prissätts separat i ett femte prisområde
Outcome hushåll och företag möter lägre och mer stabila priser från billiga energislag
And klimatomställningen går fortare när inhemsk förnybar el inte prissätts som fossilimport

Scenario: Hushållen får ett högkostnadsskydd när spotpriset skenar
Given det föreslagna statliga elpristaket på en och en halv krona per kilowattimme nås mer eller mindre aldrig, även när det är som kallast
And under krisåret 2022 hände det bara några få månader
When högkostnadsskyddet för hushåll införs
Then hushållets elkostnader täcks till stor del över pristaket, med kvarvarande incitament att spara el
Output 75 öre per kWh som elpristak för hushåll
And 90% av hushållets elkostnader över pristaket
Outcome branschen bär kostnaden via en obligatorisk elprisförsäkringsavgift, inte skattebetalarna

Scenario: Elnätsbolagens övervinster beskattas och stamnätet byggs ut offentligt
Given höjda elnätsavgifter går till vinst för privata aktörer i stället för bättre nät
And skillnaderna i pris är stora mellan olika delar av landet sedan avregleringen på 1990-talet
And det råder effektbrist på flera håll när överföringen norr–söder brister
When en skatt på elnätsbolagens övervinster införs
Then oskäliga avgiftshöjningar motverkas och skatteintäkter går tillbaka till hushållen
And stamnätet byggs ut i offentlig regi så att hushåll och företag inte bär kostnaden via höjda avgifter
Outcome lokal förnybar el, särskilt landbaserad vindkraft, byggs snabbare med mindre nätförluster
Activates vansterpartiet-var-politik-politik-a-o-klimat
