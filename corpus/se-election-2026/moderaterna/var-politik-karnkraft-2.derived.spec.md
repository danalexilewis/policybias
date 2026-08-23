---
type: spec
id: moderaterna-var-politik-karnkraft-2-derived
title: "Ny kärnkraft läst som system: fördubbling till 2045 utan datum för spadtag"
status: draft
updated: 2026-08-23
summary: Fördubbling till 2045 är ett fysiskt krav utan tidplan för spadtag, och elmarknadsreformen flyttar intäkter till planerbar produktion som ännu inte finns.
jurisdiction: SE
sources:
  - title: Kärnkraft
    url: https://moderaterna.se/var-politik/karnkraft-2
tags:
  - energy
derivesFrom: moderaterna-var-politik-karnkraft-2
party: moderaterna
clusters:
  - energy-power
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-karnkraft-2.md
sourceDigest: "sha256-37aa13211a357b27"
assumptions:
  - fördubbling till 2045 kräver byggtid som politiken inte sätter datum för
  - elmarknadsreform som premierar tillgänglighet gynnar kärnkraft bara när reaktorerna finns
  - SMR och stora reaktorer har olika byggtid och kostnad, vilket politiken inte delar upp
---

# Our understanding

> Fördubbling till 2045 är ett fysiskt krav utan datum för spadtag. Elmarknadsreformen flyttar intäkter till planerbar produktion som ännu inte producerar.

System: Fördubbling utan byggtid och elmarknad före reaktorer

Scenario: Elproduktionen ska fördubblas innan reaktorerna finns
Given energimålet är 100 procent fossilfri elproduktion
When elproduktionen ska fördubblas till 2045
Then elektrifiering och nettonoll kräver mer planerbar kraft
Output elproduktionen fördubblas till 2045
Outcome gapet mellan idag och 2045 bärs av vind, import eller fördröjd elektrifiering om bygget släpar
But hushåll och industri bär högre priser tills planerbar kapacitet finns

Scenario: Elmarknaden premierar tillgänglighet utan nya reaktorer
When stabilitet, effekt och leveranssäkerhet ska premieras framför enbart producerade kilowattimmar
Then planerbar produktion ska få mer betalt
Outcome intäkterna flyttas mot kraftslag som ännu inte levererat
But väderberoende produktion bär volatilitet tills baskraften finns
