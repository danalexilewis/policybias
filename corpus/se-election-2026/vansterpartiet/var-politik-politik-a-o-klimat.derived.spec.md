---
type: spec
id: vansterpartiet-var-politik-politik-a-o-klimat-derived
title: "Noll 2035 läst som system: en stående investeringspuls mot en hoptryckt klocka"
status: draft
updated: 2026-08-23
summary: Sju hundra miljarder på tio år är en offentlig utbyggnad vars årliga bana inte är publicerad, medan noll 2035 ligger tidigare än de flesta lagstadgade svenska banor, så senare år kan inte halka efter utan att datumet brister.
jurisdiction: SE
sources:
  - title: Klimatkrisen
    url: https://www.vansterpartiet.se/var-politik/politik-a-o/klimat
tags:
  - climate
party: vansterpartiet
clusters:
  - climate-environment
money: named-figure
sourcePath: corpus/se-election-2026/vansterpartiet/var-politik-politik-a-o-klimat.md
derivesFrom: vansterpartiet-var-politik-politik-a-o-klimat
assumptions:
  - att dela 700 miljarder kronor jämnt över 10 år är räkneövning, inte en publicerad årsprofil
  - ett nollmål 2035 lämnar litet slack om en riksdag senare saktar ned programmet
  - en nationell biljett på 450 kronor flyttar kostnad från resenären till den som nu finansierar regionala taxor, om inte ny skatt tillkommer
  - direktiv till AP-fonderna om fossilfrihet kan tvinga fram försäljningar i en tunn marknad; pensionsrisken är inte prissatt i politiken
  - en elbilbonus som undantar de dyraste bilarna behöver ändå ett pristak som inte är tryckt
sourceDigest: "sha256-6876b95dcbc56cc2"
---

# Our understanding

> Datumet är hårt och pengarna är en klump. Ett tioårsprogram utan årlig uppdelning kan bunta sent, men nollutsläpp till 2035 väntar inte. Sverigebiljetten takar resenärens taxa; regioner och staten bär resten. Pensionsfonder som tillsägs bli fossilfria säljer in i samma omställning som budgeten försöker finansiera.

System: Ett daterat noll finansierat av en oprofilerad klump

Scenario: Investeringspulsen spenderas ojämnt mot ett stopp 2035
Given 700 miljarder kronor utlovas över 10 år
And målet är nollutsläpp senast 2035
When ett senare år underspenderar
Then återstående år måste överspendera för att hålla datumet
# extrapolated: 700 miljarder på 10 år är 70 miljarder om året vid jämn fördelning, inte en publicerad årsiffra
Output 70 miljarder kronor om året bara vid jämn fördelning
Outcome klimatets klocka, inte budgetåret, sätter takten
But ett hushåll på Sverigebiljetten betalar fortfarande 450 kronor i månaden medan resten av taxan sitter i den offentliga kassan
Activates vansterpartiet-var-politik-politik-a-o-elpriset

Scenario: Pensionsfonder och elbilbonusen flyttar privata balansräkningar
Given AP-fonderna ska få direktiv om fossilfrihet
And en ny klimatbonus ska göra vanliga elbilar billigare men inte de dyraste
When de portfölj- och bonusreglerna biter
Then fossila innehav måste säljas och bilar i mellanskiktet subventioneras
Outcome köpare av billiga elbilar vinner; innehavare av de dyraste bilarna får inget
But pensionärer bär eventuell rabatt som fonderna tar för att lämna fossila tillgångar
Activates vansterpartiet-var-politik-politik-a-o-skattepolitik
