---
type: spec
id: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-klimat-derived
title: "Nettonoll 2040 läst som system: koldioxidpris plus osubsiderad kärnkraft och ett restlager i träd"
status: draft
updated: 2026-08-23
summary: Att prissätta utsläpp och avsluta fossila subventioner flyttar kostnaden på den som fortfarande förbrukar fossil energi; kärnkraft utan subvention kommer bara om marknaden betalar; bio-CCS är det som blir kvar.
jurisdiction: SE
sources:
  - title: Klimat
    url: https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/klimat?open.12_46b9bcc319684ded02b1159=true
tags:
  - climate
derivesFrom: centerpartiet-centerpartiets-politik-centerpartiets-politik-a-o-klimat
party: centerpartiet
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/centerpartiet/centerpartiets-politik-centerpartiets-politik-a-o-klimat.md
sourceDigest: "sha256-98810cf954faf4ab"
assumptions:
  - ett pris på utsläpp landar först på landsbygdshushåll och företag som fortfarande förbrukar fossil energi
  - kärnkraft på marknadsvillkor utan subvention byggs bara om elpriset täcker den
  - bio-CCS är ett restlager efter utskärningar; volym och vem betalar för lagring är opreciserat
  - snabbare tillstånd för elnät och grön industri urvattnar andra prövningar i samma lag om de prövningar inte skrivs om
---

# Our understanding

> Nettonolldatumet 2040 är den bindande klockan. Att göra föroreningar dyr och grön investering lönsam är den angivna motorn. Att avsluta fossila subventioner tar bort en motvikt. Kärnkraft kan ingå i mixen om investerare accepterar marknadsrisk. Det som blir kvar ska lagras som bio-CCS. Snabbare tillstånd namnges som den vardagliga flaskhalsen. Vem betalar koldioxidpriset på landsbygden är inte angivet.

System: Koldioxidpris, marknadskärnkraft och ett bio-CCS-restlager

Scenario: Ett landsbygdshushåll värmer och kör fortfarande på fossil energi
Given en regel att det ska kosta att släppa ut
When fossila subventioner stoppas och koldioxidpriset slår till
Then det hushållet betalar mer innan ett billigt alternativ finns
Outcome incitamentet att byta är starkt
But politiken lovar också en omställning som fungerar i vardagen, och denna räkning kan anstränga den

Scenario: En investerare utvärderar en ny reaktor utan subvention
Given bara marknadsvillkor
When investeraren jämför kostnad med förväntade elpriser
Then kraftverket byggs bara om marknaden betalar
Outcome kärnkraft är tillåten, inte garanterad
But klockan 2040 tickar ändå om kraftverket inte finansieras
