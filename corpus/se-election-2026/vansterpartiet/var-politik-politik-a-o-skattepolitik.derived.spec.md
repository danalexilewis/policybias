---
type: spec
id: vansterpartiet-var-politik-politik-a-o-skattepolitik-derived
title: "Baslinjen på 470 miljarder läst som system: tak för blygsam lön, öppna satser däröver"
status: draft
updated: 2026-08-23
summary: Femtio tusen kronor i månaden är ett hårt golv mot skattehöjningar; allt annat — bankavgift, grönt rot, fordonsskatt — namnges utan sats, så återställningen av 470 miljarderna är en riktning, inte en kalkylerad budget.
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
derivesFrom: vansterpartiet-var-politik-politik-a-o-skattepolitik
assumptions:
  - 470 miljarder kronor om året är ett historiskt kontrafaktiskt om ett lägre skattetryck mot BNP, inte ett kalkylerat utfall av punktlistan
  - att skydda lön under 50 000 kronor i månaden koncentrerar varje höjning till lön och kapital ovanför den linjen
  - en bankoligopolskatt utan sats kan vara liten eller konfiskatorisk; incidensen kan hamna i avgifter
  - lika skatt på ersättningar höjer netto för sjuka och arbetslösa bara om lönesatsen är referensen, vilket inte är tabellerat
sourceDigest: "sha256-e865926055e71dc0"
---

# Our understanding

> Sidans stora tal är vad som gick förlorat, inte vad de nya verktygen tar in. En löntagare under 50 000 kronor i månaden utlovas ingen höjning; banker, grönt rot och törstiga bilar ombeds betala utan publicerade satser. Att likställa skatt på ersättning och lön är en rättviseregel vars kronor per person politiken inte visar.

System: Ett löneskydd bredvid osatta avgifter

Scenario: En blygsam lön hålls skadeslös medan andra baser kläms
Given 470 miljarder kronor om året är sidans bild av intäkter som redan avståtts
And lön under 50 tusen kronor i månaden inte får se en höjning
When skatterna i punktlistan slås på
Then varje reparation av baslinjen måste komma från banker, hög lön, kapital, utformning av fackavdragsavlastning, grönt rot och fordonsskatt
Outcome en person under månadslinjen behåller sin sats
But en bankkund eller förare av en stor bil kan betala via priser om företagen vältrar över avgiften
Activates vansterpartiet-var-politik-politik-a-o-klimat

Scenario: Ersättningsinkomst linjeras mot löneskatt utan en publicerad tabell
Given sjukpenning, arbetslöshet och sjukersättning beskattas tyngre än lön i dag enligt sidans berättelse
When lika skatt på lika inkomst återkommer
Then de hushållen behåller mer av en given bruttoersättning
Outcome arbete och icke-arbete behandlas lika i kassan
But kronvinsten per person är okänd tills satsschemat finns
