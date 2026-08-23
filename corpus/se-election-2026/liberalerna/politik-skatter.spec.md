---
type: spec
id: liberalerna-politik-skatter
title: Lägre skatt på arbete och högre tak för ISK
status: draft
updated: 2026-08-23
summary: Skatt på arbete och företagande ska sänkas, och skattefritt ISK-sparande ska höjas från 300 000 kronor till 500 000 kronor.
jurisdiction: SE
sources:
  - title: Skatter – Liberalerna
    url: https://www.liberalerna.se/politik/skatter
tags:
  - taxation
party: liberalerna
clusters:
  - economy-tax
money: named-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-skatter.md
sourceDigest: "sha256-ed10b2ad3e8f172f"
gaps:
  - hur mycket skatten på arbete ska sänkas ytterligare anges inte
  - vad den breda skattereformen innehåller utöver ISK-taket anges inte
  - hur skola vård och trygghet finansieras när skatten på arbete sänks anges inte
  - hur många som har ISK över 300 000 kronor anges inte
---

# What the page states

> Skatter behövs för att finansiera skolan, vården och tryggheten. Systemet ska utformas så att det lönar sig att arbeta, utbilda sig, spara och starta företag. Skattefritt ISK-sparande finns upp till 300 000 kronor och ska höjas till 500 000 kronor. En bred skattereform ska göra systemet enklare.

System: Lägre skatt på arbete och högre ISK-tak

Scenario: En löntagare med sparande på investeringssparkonto
Given skattefritt sparande på investeringssparkonto upp till 300 000 kronor redan har införts
And skattesystemet har blivit svårt att överblicka med många undantag
When skattefritt sparande på ISK höjs och skatten på arbete sänks
Then det lönar sig att arbeta utbilda sig och ta ansvar
And fler kan bygga upp en egen ekonomisk trygghet
Output skattefritt sparande på ISK upp till 500 000 kronor
Outcome arbetslinjen stärks och bidragsberoendet minskar
And den som har eget sparande kan lättare lämna en destruktiv relation byta arbete eller starta företag
