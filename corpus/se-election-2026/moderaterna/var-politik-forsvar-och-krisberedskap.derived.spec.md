---
type: spec
id: moderaterna-var-politik-forsvar-och-krisberedskap-derived
title: "Upprustning read as a system: lån nu, lager luckras av donation, 3.5 procent kommer senare"
status: draft
updated: 2026-08-22
summary: Steget till 175 miljarder är taget, 3.5 procent 2030 återstår att finansiera, och donerade Gripen luckrar det egna lagret innan E/F är levererade.
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
  - 2.8 procent 2026 lämnar ett gap upp till 3.5 procent 2030 som måste fyllas efter valet
  - lån till 2035 flyttar räntebördan till senare budgetar
  - 16 donerade Gripen C/D lämnar ett hål i flottan tills nya E/F är levererade
  - höjd dagersättning från 146 till 200 kronor är den första höjningen sedan 2017 och förblir en dagersättning, inte en lön
---

# Our understanding

> Anslaget 175 miljarder är innevarande nivån. Målet 3.5 procent 2030 är nästa steg, delvis på lån till 2035. Donation av Gripen C/D tar plan ur egen beredskap innan ersättningen finns. Dagersättningen höjs från en låg bas.

System: Anslagsnivå nu, förmågegap tills materiel och personal finns

Scenario: Anslaget ska klättra från årets andel till Natos militära golv
Given 2.8 procent av BNP 2026
And målet 3.5 procent militärt ska nås 2030
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
