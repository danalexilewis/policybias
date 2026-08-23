---
type: spec
id: kristdemokraterna-var-politik-politik-a-till-o-forsvar-derived
title: "Fem procent av BNP läst som system: skala utan år eller kronor"
status: draft
updated: 2026-08-23
summary: En försvarsbudget på 5 procent av BNP, uppdelad i politiken mellan militär och försvarsrelaterade utgifter, är ett skalpåstående; förmågan att försvara hela landet påstås, men tidsätts inte.
jurisdiction: SE
sources:
  - title: Försvar
    url: https://kristdemokraterna.se/var-politik/politik-a-till-o/forsvar
tags:
  - defence
party: kristdemokraterna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/kristdemokraterna/var-politik-politik-a-till-o-forsvar.md
derivesFrom: kristdemokraterna-var-politik-politik-a-till-o-forsvar
assumptions:
  - en andel av BNP rör sig med ekonomins storlek, så kronorumet är inte fast
  - försvarsrelaterade utgifter är en bredare hink än militärposten; vad som ligger i den avgör om 5 procenten är styrka eller intilliggande utgifter
  - NATO-medlemskap gäller redan; det nya påståendet är skala, inte inträde
  - förmågan att försvara hela landet är ett styrkeutformningsresultat, inte en automatisk produkt av en rubrikandel
sourceDigest: sha256-a002f36c10d6e017
---

# Our understanding

> Staten ska garantera säkerhet och gränser. Instrumentet är ett mycket större försvarsbudget, tryckt som 5 procent av BNP totalt. Politiken delar upp det i militära utgifter och försvarsrelaterade utgifter (3,5 och 1,5 procent). NATO-medlemskap är redan ramen. Det som inte är daterat är året andelen nås, eller kronorna andelen köper.

System: BNP-andelsförsvar utan leveransår

Scenario: Rubrikandelen sätts medan försvaret ännu ska byggas
When de tillkännagivna försvarshöjningarna genomförs
Then försvaret ska räcka för hela landet och för NATO-uppgifter
Output 5% av BNP totalt
Outcome NATO-medlemskapet förblir alliansramen
But året andelen nås, och kronorna den köper, är öppna
And vad som räknas som försvarsrelaterat snarare än militärt avgör hur mycket som är faktisk styrka
