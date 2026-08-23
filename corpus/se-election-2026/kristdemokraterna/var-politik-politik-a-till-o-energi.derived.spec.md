---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-energi-derived
title: "Fossilfri el läst som system: håll kursen mot 300 TWh"
status: draft
updated: 2026-08-23
summary: Mandatperiodens ramverk och kortare köertider i elnätet behandlas som klara; 2026-erbjudandet är att fortsätta styra mot ett fossilfritt system och ett planeringsmål på 300 TWh utan nota per kraftverk.
jurisdiction: SE
sources:
  - title: Energi
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/energi
tags:
  - energy
party: kristdemokraterna
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-energi.md
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-energi
assumptions:
  - ett finansieringsramverk för ny kärnkraft är en tillåtelsestruktur, inte en reaktor på marken
  - ledtider som "nästan halverats" är ett bakåtblickande påstående; kvarvarande väntetider sitter kvar på nya ledningar
  - 300 TWh är ett planeringsmål, inte en avtalad mix; vem som bygger vilken TWh är oupptaget
  - ett försörjningstrygghetsmål utan mått kan förklaras uppfyllt av vilken vinter som helst utan strömavbrott
sourceDigest: sha256-17fc373009e63fef
---

# Our understanding

> Cirka 80 beslut denna mandatperiod, ett kärnkraftsfinansieringsramverk och kortare elnätsköer presenteras som redan på plats. Kvarstående drag är att hålla kursen mot ett helt fossilfritt elsystem. 300 TWh är ett planeringsmål (politiken daterar det 2045). Försörjningstrygghet nämns som mål, inte som uppmätt standard.

System: Håll-kurs-kärnkraft- och elnätspolitik

Scenario: Ramverket finns och kraftverken återstår att bygga
Given cirka 80 energiförsörjningsbeslut har tagits denna mandatperiod
And ett finansieringsramverk för ny kärnkraft finns på plats
When kursen hålls mot ett helt fossilfritt elsystem
Then mer produktion och elnät på rätt ställen med rätta egenskaper förblir prioriteringen
Output 300 TWh som planeringsmål
Outcome försörjningstrygghet nämns som mål
But ingen reaktor, kilometer ledning eller nota knyts till återstående avstånd
