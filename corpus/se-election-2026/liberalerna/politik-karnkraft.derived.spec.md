---
type: spec
id: liberalerna-politik-karnkraft-derived
title: "Kärnkraftsutbyggnad läst som system: förbudet är borta, kapitalet är det inte"
status: draft
updated: 2026-08-23
summary: Att lyfta taket på reaktorer och platser är en tillståndsändring; nya verk, små reaktorer och återvunnet bränsle behöver fortfarande en köpare av risk som sidan inte namnger.
jurisdiction: SE
sources:
  - title: Kärnkraft – Liberalerna
    url: https://www.liberalerna.se/politik/karnkraft
tags:
  - energy
derivesFrom: liberalerna-politik-karnkraft
party: liberalerna
clusters:
  - energy-power
money: no-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-karnkraft.md
sourceDigest: "sha256-56a8523c6331e999"
assumptions:
  - att tillåta fler än tio reaktorer och nya platser gjuter inte betong i sig; en byggherre behöver fortfarande ett avtalspris eller en statlig garanti
  - mindre reaktorer för värme och vätgas är en annan produkt än dagens stora verk, utan svensk kommersiell flotta än
  - väderberoende el kan tas upp bara om kärnkraften faktiskt kör som den fasta botten; förseningar lämnar nätet kort
  - bränsleåtervinning är ett framtida val sidan villkorar med att behov uppstår, inte ett verk som beställs nu
---

# Our understanding

> Det lagliga förbudet är redan borta. Det som återstår är vem som betalar nästa reaktor. Små verk för värme och vätgas är en ny industri, inte en reservturbin på en gammal plats. Tills ett verk är beställt är mixen på papperet inte el i väggen.

System: Tillstånd utan avtalspris

Scenario: En byggherre tittar på en ny plats efter att taket lyfts
Given det nu är tillåtet att ha nya reaktorer på andra platser än dagens verk i Forsmark Ringhals och Oskarshamn
And fler än tio reaktorer får vara i drift samtidigt
When byggherren frågar vem som tar bygg-risken
Then lagen blockerar inte längre projektet
Outcome verket byggs ändå inte förrän kapital och en köpare av el är underskrivna
But sidan namnger varken statens andel eller avtalsformen

Scenario: Industrin vill ha processvärme medan nästa reaktor fortfarande är liten på papperet
Given nästa svenska reaktor troligen blir mindre än dagens
And små reaktorer är mer intressanta för processvärme fjärrvärme eller vätgas
When ett bruk ber om ånga nästa årtionde
Then en liten reaktor är det namngivna verktyget
Outcome elektrifiering och värme väntar på en konstruktion som ännu inte är en svensk flotta
Activates liberalerna-politik-klimatet
