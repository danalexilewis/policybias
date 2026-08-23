---
type: spec
id: moderaterna-var-politik-halso-och-sjukvard-2-derived
title: "Vårdgaranti read as a system: regionerna bär vite medan patienten flyttar sig"
status: draft
updated: 2026-08-22
summary: Ersättningsskyldighet och nationell förmedling flyttar kötryck till regioner med ledig kapacitet, medan psykiatrisatsningen är ett årsanslag.
jurisdiction: SE
sources:
  - title: Hälso- och sjukvård
    url: https://moderaterna.se/var-politik/halso-och-sjukvard-2
tags:
  - healthcare
derivesFrom: moderaterna-var-politik-halso-och-sjukvard-2
party: moderaterna
clusters:
  - health-care
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-halso-och-sjukvard-2.md
sourceDigest: "sha256-193264634d64fa64"
assumptions:
  - ersättningsskyldighet biter bara om beloppet är större än kostnaden att behålla kön
  - nationell vårdförmedling gynnar patienter som kan resa och ta vård i en annan region
  - 5.4 miljarder till psykiatrin 2026 är ett årsanslag, inte en stående BUP-garanti
  - fler åldersgrupper i BUP ökar efterfrågan innan första linjen hunnit byggas ut
---

# Our understanding

> Skärpt vårdgaranti med ersättningsskyldighet gör hemregionen till betalare när tiden missas, så kön ska lösas genom vård i en annan region snarare än höjd regionskatt. Psykiatrisatsningen är ett årsanslag. Höjd BUP-ålder fyller samma mottagningar med fler årskullar.

System: Vårdköer som ett regionalt betalningsproblem

Scenario: En region jämför vite med att korta den egna kön
Given regionerna blir ersättningsskyldiga när vårdgarantin inte uppfylls
And nästan 25 miljarder kronor redan har gått till att korta vårdköerna
When en patient fortfarande väntar längre än garantin
Then hemregionen ska betala för vård någon annanstans
Outcome kön flyttas till regioner med ledig kapacitet
But patienter som inte kan resa stannar i den region som missade tiden

Scenario: BUP får fler årskullar samma år som anslaget räknas upp
Given 5.4 miljarder kronor satsas på psykiatrin under 2026
When åldersgränsen för BUP höjs och unga vuxna ska ha fast vårdkontakt
Then samma mottagningar ska ta emot fler åldersgrupper
Output 21 år som övre åldersgräns i stället för 18
Outcome trycket på BUP kan öka innan första linjen hunnit avlasta
But unga vuxna bär väntan om utbyggnaden släpar
