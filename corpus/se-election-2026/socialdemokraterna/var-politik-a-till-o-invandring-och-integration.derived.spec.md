---
type: spec
id: socialdemokraterna-var-politik-a-till-o-invandring-och-integration-derived
title: "Etableringstillstånd och EBO-förbud read as a system: staten tar boendet och villkorar rätten att stanna"
status: draft
updated: 2026-08-23
summary: Avskaffat EBO flyttar asylsökande till statliga platser som måste finnas, och etableringstillstånd gör uppehället villkorat utan att säga vad som sker vid underkända krav.
jurisdiction: SE
sources:
  - title: Invandring och integration
    url: https://www.socialdemokraterna.se/var-politik/a-till-o/invandring-och-integration
tags:
  - immigration
derivesFrom: socialdemokraterna-var-politik-a-till-o-invandring-och-integration
party: socialdemokraterna
clusters:
  - migration-integration
money: no-figure
sourcePath: corpus/se-election-2026/socialdemokraterna/var-politik-a-till-o-invandring-och-integration.md
sourceDigest: sha256-e1eae0784fcac3ab
assumptions:
  - statliga mottagningsboenden kräver platser, personal och kommuner som tar emot; förbudet mot EBO skapar inte rummen
  - ett etableringstillstånd utan angiven följd vid underkänt språk- eller samhällskrav lämnar utvisning eller förlängning öppet
  - aktivitetsplikt för alla med försörjningsstöd träffar fler än nyanlända, inklusive den som redan är medborgare
  - EU:s miniminivåer sätter ett golv för asyl, inte ett tak för hur snabbt återvändande kan ske
---

# Our understanding

> EBO-förbudet tar bort den sökandes val av bostad och förutsätter att staten har rum. Etableringstillståndet gör uppehället villkorat av svenska och samhällskunskap, men tystnaden om underkänt krav är mekanismen: rätten att stanna kan dras in utan att det sägs. Aktivitetsplikten når den med försörjningsstöd oavsett hur länge personen har bott här. Sverigeförhandlingen lovar att utsatta områden ska försvinna, utan karta.

System: Statligt boende och villkorat uppehåll

Scenario: En asylsökande kan inte längre välja eget boende
Given EBO som låter den sökande ordna eget boende
When EBO avskaffas
Then den sökande anvisas ett statligt mottagningsboende
Outcome trångboddhet i utsatta områden kan minska
But anvisningen bara fungerar om platsen finns

Scenario: Ett etableringstillstånd prövas mot språkkrav
Given permanenta uppehållstillstånd som ersätts av etableringstillstånd med krav i svenska och samhällskunskap
When kraven inte uppfylls
Then vägen till medborgarskap stannar
Outcome integrationen villkoras
But följden för den som underkänns är inte given

Scenario: Den med försörjningsstöd möter aktivitetsplikt
Given obligatorisk aktivitetsplikt för alla med försörjningsstöd
When plikten införs
Then den som kan arbeta ska in i en jobbtrappa
Outcome bidraget kopplas till aktivitet
But plikten träffar även den som inte är nyanländ
