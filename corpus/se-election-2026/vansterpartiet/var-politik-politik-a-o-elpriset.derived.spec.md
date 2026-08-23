---
type: spec
id: vansterpartiet-var-politik-politik-a-o-elpriset-derived
title: "Sverigepriser läst som system: att dela exportpriset delar inte ledningarna"
status: draft
updated: 2026-08-23
summary: En femte zon kan omprissätta export på papperet medan elektronerna fortfarande följer utlandsförbindelserna; taket på 75 öre socialiserar sedan topparna inne i Sverige via en avgift på branschen.
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
derivesFrom: vansterpartiet-var-politik-politik-a-o-elpriset
assumptions:
  - fysiska flöden på utlandsförbindelserna fortsätter även om exporten faktureras i en femte zon; EU:s marknadsregler kan begränsa splitten
  - ett tak på 75 öre med 90 procents täckning däröver lämnar hushållen med en tiondel av toppen plus försäkringsavgiften när företagen vältrar över den
  - en branschavgift är inte gratis; den kan sitta i framtida slutkundstariffer eller i uppskjuten investering
  - en skatt på elnätsövervinst behöver en definition av övervinst; en för tajt skatt kan sakta samma nätbygge som sidan vill ha i offentlig regi
sourceDigest: "sha256-311b30b8c1e99221"
---

# Our understanding

> Sverigepriser är en faktureringsplit, inte en ny kabel. Billig svensk produktion möter fortfarande utländsk efterfrågan på ledningarna. När spotpriset ändå spikar betalar hushållstaket på 75 öre merparten av överskjutande via en branschavgift — en kostnad som kan komma tillbaka i tariffen. Skatt på elnätsövervinst och offentligt stamnät drar åt olika håll om skatten svälter byggarna.

System: Prissplit, tak och avgift som en räkning

Scenario: Exporten omprissätts medan utlandsförbindelserna förblir öppna
Given svensk fossilfri el täcker vanligen det inhemska behovet
And sista budet på marknaden är ofta dyr utländsk eller fossil el
When en femte zon fakturerar exporten separat
Then svensk slutkund kan få höra ett lägre pris
Outcome hushållen ser ett Sverigepris
But fysisk export kan ändå strama åt den inhemska balansen en kall dag

Scenario: Hushållstaket möter en spik
Given taket är 75 öre per kilowattimme och täcker 90 procent av kostnaden däröver
When spotpriset springer långt över taket
Then hushållet betalar ändå taket plus den otäckta tiondelen
# extrapolated: 10 procent av överskjutandet stannar hos hushållet om 90 procent täcks
Output 10 procent av räkningen över taket stannar hos hushållet
Outcome branschavgiften ska finansiera resten
But en framtida tariff kan bära den avgiften tillbaka till samma hushåll
Activates vansterpartiet-var-politik-politik-a-o-klimat
