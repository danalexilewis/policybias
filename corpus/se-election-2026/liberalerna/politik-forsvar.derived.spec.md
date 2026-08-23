---
type: spec
id: liberalerna-politik-forsvar-derived
title: "Fem procent av BNP läst som system: en andel utan år"
status: draft
updated: 2026-08-23
summary: Tre och en halv procent militärt plus en och en halv procent relaterat är en uppdelning av en BNP-andel, inte en kronbana, och civilförsvaret sitter i samma onamngivna kalender.
jurisdiction: SE
sources:
  - title: Försvar – Liberalerna
    url: https://www.liberalerna.se/politik/forsvar
tags:
  - defence
derivesFrom: liberalerna-politik-forsvar
party: liberalerna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/liberalerna/politik-forsvar.md
sourceDigest: "sha256-0cb347d0e2247a4a"
assumptions:
  - en BNP-andel utan år är ett rörligt mål; en recession skär kronor även om procenten hålls
  - 1.5 procent relaterade utgifter kan ommärkas befintlig infrastruktur om inte politiken ringar in den till nya lager
  - fler soldater sjömän och officerare behöver bostäder utbildning och materiel som tävlar med ammunition inuti 3.5 procenten
  - gemensam EU-upphandling hjälper Ukraina och lager bara om fabrikerna redan är varma; politiken namnger syftet, inte ledtiden
---

# Our understanding

> Fem procent av BNP är en andel, inte ett leveransdatum. Splitten 3.5 och 1.5 kan gömma gamla vägar under en ny försvarsetikett. Civilförsvar, värnplikt och lager sitter i samma pott som ammunition. NATO-medlemskap är en plikt att ge liksom att ta emot, och den landar när förbanden finns.

System: En BNP-andel delad på två håll

Scenario: Budgetåret kommer utan angivet slutår för 5 procent
Given försvarsutgifterna ska öka till totalt 5 procent av BNP
When nästa budget sätts
Then andelen kan tryckas innan brigaderna finns
Output 5 procent av BNP
Outcome avskräckning är en styrka som kan strida, inte en rad i en budgetproposition
But politiken säger inte vilket år andelen nås

Scenario: Civilförsvaret byggs upp från den relaterade skivan
Given elförsörjning hälso- och sjukvård transporter och livsmedelsförsörjning måste fungera även i krig
When civilplikt lager och krigsviktiga företag återställs
Then de uppgifterna tävlar med ammunition om samma BNP-andel
Outcome hushållen är säkrare bara om den relaterade skivan är ny insats, inte ommärkta utgifter
But politiken ringar inte in den skivan
