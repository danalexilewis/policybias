---
type: spec
id: sverigedemokraterna-a-till-o-flygskatten
title: Flygskatten avskaffad och ska inte återställas
status: draft
updated: 2026-08-23
summary: Flygskatten är avskaffad; den beskrivs som symbolisk och utan mindre klimatpåverkan, och den ska inte återinföras.
jurisdiction: SE
sources:
  - title: Flygskatten
    url: https://www.sd.se/a-till-o/flygskatten/
tags:
  - taxation
party: sverigedemokraterna
clusters:
  - climate-environment
money: no-figure
sourcePath: corpus/se-election-2026/sverigedemokraterna/a-till-o-flygskatten.md
sourceDigest: "sha256-f62de7a583631378"
gaps:
  - hur stor flygskatten var per resa anges inte
  - hur mycket konkurrenskraft eller antal linjer som återkom efter avskaffandet anges inte
  - vilket mått som visar att klimatpåverkan inte minskade anges inte
  - vad som ersätter skatten som styrmedel mot utsläpp från flyg anges inte
  - intäktsbortfallet för staten efter avskaffandet anges inte
---

# What the page states

> Flygskatten är avskaffad. Den infördes för att minska flygets klimatpåverkan, men beskrivs som symbolisk och utan den effekten, samtidigt som den försvårat internationella flygförbindelser. Avskaffandet ska lyfta konkurrenskraften. Skatten ska inte återställas. Klimatmål ska inte nås med ett verktyg utan miljönytta.

System: Avskaffad flygskatt som inte ska återinföras

Scenario: Ett förslag att återställa flygskatten kommer
Given flygskatten är avskaffad
And skatten har inte resulterat i någon mindre klimatpåverkan
And skatten har försvårat tillgången till internationella flygförbindelser
When ett förslag att återställa skatten drivs
Then skatten ska inte återinföras
And borttagandet av flygskatten är ett lyft för den svenska konkurrenskraften
Outcome Sverige hämmar inte sin konkurrenskraft för att uppnå klimatmål utan miljönytta
