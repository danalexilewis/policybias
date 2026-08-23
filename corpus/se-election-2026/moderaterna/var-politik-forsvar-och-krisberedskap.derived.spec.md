---
type: spec
id: moderaterna-var-politik-forsvar-och-krisberedskap-derived
title: "Upprustning läst som system: lån nu, 3,5 procent kommer senare, Gripen luckrar lagret"
status: draft
updated: 2026-08-23
summary: Steget från 2,8 procent till 3,5 procent 2030 återstår att finansiera, och donerade Gripen luckrar det egna lagret innan E/F är levererade.
jurisdiction: SE
sources:
  - title: "Moderaternas försvarspolitik 2026: Nato, Ukraina, totalförsvar och ett starkare svenskt försvar"
    url: https://moderaterna.se/var-politik/forsvar-och-krisberedskap
tags:
  - defence
derivesFrom: moderaterna-var-politik-forsvar-och-krisberedskap
party: moderaterna
clusters:
  - defence-security
money: named-figure
sourcePath: corpus/se-election-2026/moderaterna/var-politik-forsvar-och-krisberedskap.md
sourceDigest: "sha256-385b507ed9963261"
assumptions:
  - 2,8 procent 2026 lämnar ett gap upp till 3,5 procent 2030 som måste fyllas efter valet
  - lån till 2035 flyttar räntebördan till senare budgetar
  - upp till 16 donerade Gripen C/D lämnar ett hål i flottan tills nya E/F är levererade
  - försvarsindustrins kapacitet är den flaskhals som sätter tak på donationstakt
---

# Our understanding

> Målet 3,5 procent 2030 är nästa steg från 2,8 procent 2026, delvis på lån till 2035. Donation av Gripen C/D tar plan ur egen beredskap innan ersättningen finns.

System: Anslagsgap till 2030 och flottlucka

Scenario: Anslaget ska klättra från årets andel till Natos militära golv
Given 2,8 procent av BNP 2026
And målet 3,5 procent militärt ska nås 2030
When nästa mandatperiods budgetar läggs
Then skillnaden måste fyllas med mer anslag eller mer lån
Outcome 2030-målet bärs av beslut som inte är kassalagda i 2026 års nivå
But senare skattebetalare bär räntan om lånen består till 2035

Scenario: Flottan skänker plan som ska ersättas
Given upp till 16 JAS 39 Gripen C/D skänks ur den svenska flottan
And Ukraina förbereder köp av 20 Gripen E/F
When donationen genomförs
Then det svenska flygvapnet väntar på nya E/F som ersättning
Outcome luftförsvaret luckras i intervallet mellan donation och leverans
But beredskapen i Sverige bär luckan
